export default function Episodes(props) {
    const {episodes, setEpisodes } = props;

    const resetEpisodes = () => {
        setEpisodes(null);
    }

    return (
        <div className="characters">
            <h1>Episodes</h1>
            <div className="container-characters">
                {episodes.map((episode, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <h3>{episode.name}</h3>
                            <h6>
                                <span className="alive"></span> {episode.air_date}
                            </h6>
                            <p>
                                <span className="text-grey">Episode: </span>
                                <span>{episode.episode}</span>
                            </p>
                            <p>
                                <span className="text-grey">Created: </span>
                                <span>{episode.created}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetEpisodes}>Back Home</span>
        </div>
    );
}