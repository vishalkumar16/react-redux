"use strict"
import { createStore } from 'redux';
import { reducers } from '../reducers/index';

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('current state is: ',
        store.getState());
})

// STEP 2 create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    }, {
        id: 2,
        title: 'this is the second title',
        description: 'this is the second description',
        price: 66.66
    }
    ]
})


store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 3,
        title: 'this is the third title',
        description: 'this is the third description',
        price: 99.99
    }]
})

store.dispatch({
    type: "DELETE_BOOK",
    payload: {
        id: 1
    }
}
)


store.dispatch({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: 'Learning new'
    }
}
)

