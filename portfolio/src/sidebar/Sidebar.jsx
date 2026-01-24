import './Sidebar.css'

const Sidebar = ({ setContact }) => {

    const optionhandler = () => {
        setContact(false)
        console.log("yess function run");

    }


    return (
        <div className='sidebar'>
            <div className="sidebar-items">
                <div className="upper-sidebar">

                    <button ><span onClick={() => setContact(false)}>X</span></button>
                </div>

                <div className="middle-sidebar">
                    <div className="middle-sidebar-menu" id='items'>

                        <div className="nav-item">
                            <span onClick={optionhandler} className='default-text' id='hover-text' >Home</span>
                            <a href="#home">  <span className='hover-text' id='home' onClick={optionhandler} >Home</span></a>
                        </div>
                        <div className="nav-item">
                            <span onClick={optionhandler} className='default-text'>Skill</span>
                            <a href="#skill"> <span className='hover-text' id='About' onClick={optionhandler}>Skill</span></a>
                        </div>
                        <div className="nav-item">
                            <span onClick={optionhandler} className='default-text'>About</span>
                            <a href="#about"> <span className='hover-text' onClick={optionhandler}>About</span></a>
                        </div>
                        <div className="nav-item">
                            <span onClick={optionhandler} className='default-text'>Project</span>
                            <a href="#section"> <span className='hover-text' onClick={optionhandler}>Project</span></a>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar