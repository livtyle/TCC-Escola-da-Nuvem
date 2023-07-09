import './Error.css';
import error from '../../assets/error/error.png';

export function Error() {
    return (
        <main className='error'>
            <div className='error'>
                <h1 className='h1error'>Error</h1>
                <img src={error} alt="404" className='imgerror'/>
            </div>
        </main>
    );
}