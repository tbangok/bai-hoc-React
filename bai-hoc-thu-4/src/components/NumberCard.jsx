function renderBgColor(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return '#32856a'
    } else if (value % 3 === 0) {
        return '#87A922'
    } else if (value % 5 === 0) {
        return '#e6ce4c'
    } else return '#F7F6BB'
}

function renderText(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return 'fizz buzz'
    } else if (value % 3 === 0) {
        return 'fizz'
    } else if (value % 5 === 0) {
        return 'buzz'
    } else return value
}

export function NumberCard({ value, name }) {
    return (

        <div style={{
            padding: 2,
            border: '1px solid black',
            backgroundColor: renderBgColor(value),
            width: ' 100px'

        }}>
            <span>{ renderText(value)}</span>
            <span>{name}</span>
        </div >
    )
}

