import houses from './../json/game-of-thrones';
import Map from 'immutable';

const Reducer = (state = Map.Map(), action) => {

    switch(action.type) {
        case "Update_People":

            const house =action.data.house;
            const peoplename =action.data.name;
            const findHouseIndex = (arg)=>{
                return arg.name == house;
            };
            const findPeopleIndex = (arg)=>{
                return arg.name == peoplename;
            };


            const homeIndex =state.get('houses').findIndex(findHouseIndex);

            const peopleIndex = state.get('houses')[homeIndex].people.findIndex(findPeopleIndex);
            const people =state.get('houses')[homeIndex].people[peopleIndex];





            people.description =action.data.description;
            people.imageSuffix =action.data.image;
            people.wikiSuffix =action.data.wiki;
            // state.get('houses')[homeIndex].people[peopleIndex].name ="work";
            return state;
        case "SET_STATE":
            return state.merge(action.state);
        default:
            return state;
    }
}

export default Reducer;