import LibrarySong from './LibrarySong';

const Header = () => {
    return <h2>Library</h2>
};

const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    libraryStatus
}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <Header />
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong
                        setSongs={setSongs}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        key={song.id} />
                ))}
            </div>
        </div>
    );
};

export default Library;