function MainCard({imageURL, onHeartClick, isFavorite}) {
    const heartIcon = isFavorite ? "💖" : "🤍";

    return (
        <div className="main-card">
            <img 
                src={imageURL}
                alt="고양이 사진"
                width="400"
            />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    )
}

export {MainCard};
