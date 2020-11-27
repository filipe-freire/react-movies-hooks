//* Import Components
import Grid from './elements/Grid.jsx';
import MovieThumb from './elements/MovieThumb.jsx';
import HeroImage from './elements/HeroImage.jsx';
import LoadMoreBtn from './elements/LoadMoreBtn.jsx';
import Spinner from './elements/Spinner.jsx';
import SearchBar from './elements/SearchBar.jsx';

const Home = () => (
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <Spinner />
    <LoadMoreBtn />
  </>
);

export default Home;
