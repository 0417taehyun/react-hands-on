function FavroiteItem({imageURL}) {
    return (
        <li>
            <img alt="좋아요를 누른 이미지" src={imageURL} style={{width: "300px"}} />
        </li>
    )
}

export {FavroiteItem};
