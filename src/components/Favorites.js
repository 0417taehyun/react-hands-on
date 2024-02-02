import { FavroiteItem } from "./FavoriteItem";

function Favorites({favoriteCats}) {
    if (favoriteCats.length === 0) {
        return (
            <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>
        );
    }
    return (
        <ul className="favorites">
            {favoriteCats.map((favoriteCat) => {
                return <FavroiteItem imageURL={favoriteCat} /> 
            })}
        </ul>
    )
}

export {Favorites};
