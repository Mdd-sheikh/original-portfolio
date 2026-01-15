import './Sidebar.css'

const Sidebar = ({ setContact }) => {

    const optionhandler = () =>{
        setContact(false)
        console.log("yess function run");
        
    }


    return (
        <div className='sidebar'>
            <div className="sidebar-items">
                <div className="upper-sidebar">
                   
                    <button ><span onClick={()=>setContact(false)}>X</span></button>
                </div>
                
                <div className="middle-sidebar">
                    <div className="middle-sidebar-menu" id='items'>
                       
                            <div className="nav-item">
                               <a href="#home">  <span className='default-text' id='home'onClick={optionhandler} >Home</span></a>
                               <span onClick={optionhandler} className='hover-text' id='hover-text' >Home</span>
                            </div>
                            <div className="nav-item">
                               <a href="#skill"> <span className='default-text' id='About'onClick={optionhandler}>Skill</span></a>
                                <span onClick={optionhandler} className='hover-text'>Skill</span>
                            </div>
                            <div className="nav-item">
                               <a href="#about"> <span className='default-text' onClick={optionhandler}>About</span></a>
                                <span onClick={optionhandler} className='hover-text'>About</span>
                            </div>
                            <div className="nav-item">
                               <a href="#section"> <span className='default-text' onClick={optionhandler}>Project</span></a>
                                 <span onClick={optionhandler} className='hover-text'>Project</span>
                            </div>
                            
                       

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar