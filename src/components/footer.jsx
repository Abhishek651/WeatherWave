import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div className="w-full text-center p-4 bg-purple-heart-900 mt-auto flex flex-col items-center gap-1">
            <p className="text-purple-50 font-semibold flex items-center gap-1">
                Made with <FavoriteIcon sx={{ fontSize: 16, color: '#f43f5e' }} className="hover:scale-125 transition-transform cursor-pointer" /> by <span>Abhishek</span>
            </p>
            
            <div className="flex items-center gap-3 mt-1">
                <a href="https://github.com/yourprofile/weatherwave" target="_blank" className="text-gray-400 hover:text-white">
                    <GitHubIcon sx={{ fontSize: 20 }} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-400 hover:text-blue-400">
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                </a>
            </div>
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} WeatherWave</p>
        </div>
    );
}
