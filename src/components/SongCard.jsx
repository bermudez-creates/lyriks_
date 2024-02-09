import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCard = ({ song, index }) => {
  const activeSong = 'Test';
  console.log('song card --', song);

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/80 bg-opacity-50 backdrop-blur-sm animate-slideup rounded-lg curser-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? `flex bg-black-opacity-70`
              : 'hidden'
          }`}
        >
          <PlayPause />
        </div>
        <img
          alt={`Song image for: ${song?.title}`}
          src={song.photo_url?.photo_url}
        />
      </div>
    </div>
  );
};

export default SongCard;
