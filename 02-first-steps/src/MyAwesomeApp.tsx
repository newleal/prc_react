import type { CSSProperties } from "react";

    const name = 'Miguel Angel';

    const lastName = 'Leal B.';

    const favoriteGames = ['Elde Ring', 'Smash', 'Metal Gear'];

    const isActive = false;

    const address = {
        zipcode: 'ABC-!"#',
        city: 'Colombia'
    }

    const myStyle: CSSProperties = {
                backgroundColor: '#fafafa',
                borderRadius: 10,
                padding: 10,
                marginTop: 30
            }

export function MyAwesomeApp () {


    return (
        <>
            <h1>{ name }</h1>
            <h3>{ lastName }</h3>

            <p>{ favoriteGames.join(', ') }</p>
            <p> {2+2} </p>
            <p> { isActive ? 'Activo': 'No activo' } </p>

            <p
            style={myStyle}
            >
                { JSON.stringify(address)  }
            </p>
        </>
    );
}