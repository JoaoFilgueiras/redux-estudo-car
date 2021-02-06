import { useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css'

import Car from '../components/cars';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

export default function Home() {

  const carsList = useSelector((state) => state);
  const cars = carsList.cars;

  return (
    <>
      <Header/>
      <div className="container-fluid">
			  <div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
		  </div>
      <Footer/>
    </>
  )
}
