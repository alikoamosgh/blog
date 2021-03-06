import React, {useState} from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Navbar = () =>{

    const[ activeItem, setActiveState] = useState({})
    
    const handleItemClick = (e, {name}) =>{
        setActiveState({activeItem: name })
    }

    return (
        <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );

}
export default Navbar;
