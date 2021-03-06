import React from 'react'
import { Link } from 'react-router-dom'

import Notifications from '../Notifications'

import logo from '../../assets/logo-purple.svg'
import { Container, Content, Profile } from './styles'

export default function Header() {
	return (
		<Container>
			<Content>
				<nav>
					<img src={logo} alt="GoBarber-logo" />
					<Link to="/dashboard">DASHBOARD</Link>
				</nav>
				<aside>
					<Notifications />
					<Profile>
						<div>
							<strong>Yago Ernandes</strong>
							<Link to="/profile">Meu perfil</Link>
						</div>
						<img
							src="https://api.adorable.io/avatars/50/abott@adorable.png"
							alt="Yago Ernandes"
						/>
					</Profile>
				</aside>
			</Content>
		</Container>
	)
}
