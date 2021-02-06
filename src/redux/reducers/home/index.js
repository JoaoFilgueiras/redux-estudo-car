export const CAR_LIST = (
    [
        {
            name: 'Ferrari',
            url:
                'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Mercedes',
            url:
                'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Audi',
            url:
                'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ]
);

export const cars = (state = CAR_LIST, action) => {
    switch (action.type) {
        case 'CAR_ADD':
            return [...state, action.car]
        default:
            return state
    }
}

export const addCar = (car) => {
    return {
        type: 'CAR_ADD',
        car
    }
}