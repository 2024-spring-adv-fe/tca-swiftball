import { useNavigate } from 'react-router-dom';

export const Play = () => {
    const nav = useNavigate();

    return (
        <>
            <h3>Play</h3>
            <button
                className="btn btn-link"
                onClick={() => nav('/')}
            >
                donee
            </button>
        </>
    );
};