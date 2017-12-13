import {DELETE_ARTICLE} from "../constants";

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    };
    console.log('', action)
}