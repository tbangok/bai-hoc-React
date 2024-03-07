const alu = {
    name: 'lu',
    age: 13,
    price: '12111'
}

export function Alu() {
    const {
        name: nameOfAlu,
        age
    } = alu;
    return (<>
        <div>
            <span>{alu.age}</span>
            <span>{nameOfAlu}</span>
            <span>{age}</span>
        </div>
    </>)
}

export function NumberCard({ value, name }) {
    return (
      
            <div style={{
                padding: 2,
                border: '1px solid black',
                backgroundColor: value > 50 ? 'red' : 'blue',
                width: ' 100px'

            }}>
                <span>{value}</span>
                <span>{name}</span>
            </div> 
    )
}

