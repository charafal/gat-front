import './SideNav.css'
import { sideNavData } from './SideNavData';
import { Row, Col } from 'react-bootstrap'

function SideNav() {
    var location = window.location.pathname;
  return (
    <div className="sidenav">
        <ul className="sidenav-list">
            {
                sideNavData.map((val, key) => {
                    return (
                        <li key={key} className='sidenav-row' onClick={()=> {
                            window.location.pathname = val.link}}
                            id={}
                        >
                            <Row className='justify-content-center align-items-center py-2'>
                                <Col style={{flex: '20%'}}>{val.icon}</Col>
                                <Col style={{flex: '80%'}} className='p-0'>{val.title}</Col>
                            </Row>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  );
}

export default SideNav;
