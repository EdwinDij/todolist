import './style/textbar.css';

export default function Textbar() {

    return (
        <div className='text'>
            <h1 className='title'>Todo-List</h1>
            <div className="text-bar">
                <textarea placeholder='Que dois-je faire ?'>
                </textarea>
                <input type="button" value="envoyer" name="envoyer" className='submit-btn'/>
            </div>
        </div>

    )
}
