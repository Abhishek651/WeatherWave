import TsunamiTwoToneIcon from '@mui/icons-material/TsunamiTwoTone';

function Navbar() {
    return (
        <div className='flex items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md px-4 md:px-8 py-2'>
            <span className='flex items-center'>
                <TsunamiTwoToneIcon sx={{ fontSize: { xs: 28, md: 40 } }} htmlColor="#7c3aed" />
                <p className='ml-1 font-semibold'>WeatherWave</p>
            </span>
        </div>
    );
}

export default Navbar;
