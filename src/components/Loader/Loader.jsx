import Spinner from 'react-bootstrap/Spinner';
import '../Loader/Loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <Spinner animation="grow" variant="light" />
        </div>
    )
}

export default Loader