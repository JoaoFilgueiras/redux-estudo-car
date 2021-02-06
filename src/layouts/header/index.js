
import Link from 'next/link';

import AlertComp  from '../../components/Alert';

export default function Header() {
  return (
	<>
	
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<Link href={'/'}>
				<a className="navbar-brand">
					Shopping-Car
				</a>
			</Link>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href={'/'}>
							<a  className="nav-link"> Listar </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href={'/adicionar'}>
							<a className="nav-link">
								Adicionar
							</a>
						</Link>
						
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<Link href={'/cart'}>
					<a className="nav-item">
						<i className="fa fa-shopping-cart fa-3x text-white" aria-hidden="true">
							<span className="fa-counter">0</span>
						</i>
					</a>
				</Link>
			</ul>
		</nav>
		<AlertComp></AlertComp>
	</>
  )
}
