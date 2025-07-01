import { type } from "@testing-library/user-event/dist/type"

export const increment = () => {
    return{
        type: "INCREMENT",
    };
};

export const decrement = () => {
    return{
        type: "DECREMENT",
    };
};