import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material'

const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            
            <img src={logo} alt="tinder-logo" className='header__logo' />

            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
		</div>
	)
}

export default Header
