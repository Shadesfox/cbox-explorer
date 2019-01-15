import cbox from '@/api/cbox'

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
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
        console.log('In mutation')
        state.characterList = erConverter(cbox)
        console.log(state.characterList)
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
                console.log(characterList)
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
