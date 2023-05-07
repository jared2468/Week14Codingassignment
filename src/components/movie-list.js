import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <Movie {...
                    {id: 1,
                        key: 1,
                        title: 'The Princess Bride', 
                        summary: 'Adapted by William Goldman from his 1973 novel of the same name, it tells the story of a swashbuckling farmhand named Westley, accompanied by companions befriended along the way, who must rescue his true love Princess Buttercup from the odious Prince Humperdinck.',
                        cast: 'Cary Elwes, Robin Wright, Mandy Patinkin, Andre Rene Roussimoff (Andre the Giant), Fred Savage, Wallace Shawn, Chris Sarandon, Christipher Guest',
                        poster: 'https://m.media-amazon.com/images/I/611zeTfBpoL._AC_SL1242_.jpg'}} />
                <Movie {...
                    {id: 2,
                        key: 2,
                        title: 'Robin Hood: Men in Tights', 
                        summary: "Crusading nobleman Robin of Loxley escapes from prison in Jerusalem and returns home to find that the evil Prince John has confiscated his family estate and is abusing the citizenry. Robin enlists his blind attendant, Blinkin, his friend Will Scarlett O'Hara and Little John to help regain his home. Robin also hopes to woo the beautiful Maid Marian, but her chastity belt may prove a challenge.",
                        cast: 'Mel Brooks, Cary Elwes, Richard Lewis, Amy Yasbeck, Dave Chappelle, Patrick Stewart, Roger Rees, Eric Allan Kramer',
                        poster: 'https://m.media-amazon.com/images/I/81okqTBP1RL._AC_SL1500_.jpg'}} />
                <Movie {...
                    {id: 3,
                        key: 4,
                        title: 'Ella Enchanted', 
                        summary: 'As a baby, Ella receives a visit from Lucinda, her fairy godmother, and is bestowed with a magical talent that requires her to obey anything that she is told to do. This proves to be more of a curse than a blessing, particularly once her mother dies and she is forced to live with the cruel Dame Olga. Eventually, Ella embarks on a journey to find Lucinda and break the spell, accompanied by the handsome Prince Charmont.',
                        cast: 'Anne Hathaway, Hugh Dancy, Cary Elwes, Minnie Driver, Lucy Punch, Heidi Klum, Vivica A. Fox, Erid Idle',
                        poster: 'https://www.themoviedb.org/t/p/original/dH8yHmqUra0gqzMJJKXiyfKkB57.jpg'}} />   
            </div>
        );
    }
}