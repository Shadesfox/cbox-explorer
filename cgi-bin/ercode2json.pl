#!/usr/bin/perl

use strict;
use Storable qw(nfreeze thaw);
use JSON 'encode_json';

my ($buffer, @pairs, $pair, $name, $value, %FORM, $er_code);
# Read in text
$ENV{'REQUEST_METHOD'} =~ tr/a-z/A-Z/;

if ($ENV{'REQUEST_METHOD'} eq "POST") {
    read(STDIN, $buffer, $ENV{'CONTENT_LENGTH'});
} else {
    $buffer = $ENV{'QUERY_STRING'};
}

# Split information into name/value pairs
@pairs = split(/&/, $buffer);

foreach $pair (@pairs) {
    ($name, $value) = split(/=/, $pair);
    $value =~ tr/+/ /;
    $value =~ s/%(..)/pack("C", hex($1))/eg;
    $FORM{$name} = $value;
}

$er_code = $FORM{'cbox'};
$er_code =~ s/(\s|\n|$)//gs;
my %char = %{thaw(pack('H*', $er_code))};
my $json_box;

$json_box = encode_json(\%char);

print("Content-Type:application/json\n\n");
print("$json_box");
