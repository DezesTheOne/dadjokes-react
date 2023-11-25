import './style.css';
import { LikesCounter } from '../../../components/LikesCounter';

export const HomePage = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="joke">
            <div className="joke__body">
              <div className="joke__user">
                <img
                  className="user-avatar"
                  src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
                />
                <p className="user-name">Neroxx</p>
              </div>

              <p className="joke__text">
                The secret service isn't allowed to yell "Get down!" anymore
                when the president is about to be attacked. Now they have to
                yell "Donald, duck!"
              </p>
            </div>
            <div className="joke__likes">
              <LikesCounter />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
