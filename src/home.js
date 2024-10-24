import cafeImg from './assets/cafe.jpg';
import './home.css';

export const renderHome = () => {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    const headingDiv = document.createElement('div');

    const heading = document.createElement('h1');
    const para = document.createElement('p');
    para.innerText = "We’re delighted to serve you the finest coffee and handpicked treats. Whether you're here for a quick sip or to unwind with friends, we’ve got the perfect spot waiting for you."
    heading.innerText = 'Welcome to The Cozy Brew!';

    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src=cafeImg;
    img.classList.add('home-img')

    headingDiv.appendChild(heading);
    headingDiv.appendChild(para);

    imgDiv.appendChild(img);

    homeContent.appendChild(headingDiv);
    homeContent.appendChild(imgDiv);

    return homeContent
}