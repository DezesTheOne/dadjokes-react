
export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
  return (
        <div className="jokes">
            <div className="jokes__avatar">
                <img src={userAvatar} alt="avatar" />
            </div>
            <div className="jokes__content">
                <div className="jokes__header">
                    <span className="jokes__name">{userName}</span>
                    <span className="jokes__date">12.05.2020</span>
                </div>
                <div className="jokes__text">{text}</div>
                <div className="jokes__footer">
                    <span className="jokes__likes">
                        <i className="fas fa-thumbs-up"></i>
                        {likes}
                    </span>
                    <span className="jokes__dislikes">
                        <i className="fas fa-thumbs-down"></i>
                        {dislikes}
                    </span>
                </div>
            </div>
        </div>
    )
}

