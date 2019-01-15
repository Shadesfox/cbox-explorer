import cbox from '@/api/cbox'

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const alphabetSort = function(a, b) {
    let nameA = a.name.toUpperCase() // ignore upper and lowercase
    let nameB = b.name.toUpperCase() // ignore upper and lowercase

    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }

    // names must be equal
    return 0
}

const erMapFunc = function(character, cname) {
    const newCharacter = {
        name : cname,
        img : character.PuppetPic,
        bio : character.PuppletBio,
        title : character.PuppetTitle,
        uuid : uuidv4()
    }
    return newCharacter
}

const erConverter = function(cbox) {
    let newBox = []
    for (let char in cbox) {
        newBox.push(erMapFunc(cbox[char], char))
    }
    return newBox
}

const state = {
    characterList: []
}

const mutations = {
    setCharacterList: (state, cbox) => {
        let newList = erConverter(cbox)
        newList.sort(alphabetSort)
        state.characterList = newList
    }
}

const getters = {
    characterList: (state) => {
        return state.characterList
    },
    characterListSlice: (state) => (start, end) => {
        return state.characterList.slice(start, end)
    },
    characterListSize: (state) => {
        return state.characterList.length
    }
}

const actions = {
    convertErToCbox: ({commit}, erCode) => {
        return new Promise((resolve) => {
            cbox.convertERtoCbox(erCode).then((characterList) => {
                commit('setCharacterList', characterList)
                resolve(characterList)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
