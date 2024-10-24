import "./about.css"
export const renderAbout = () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about')

    const vid = document.createElement('video');
    vid.src = 'https://assets.mixkit.co/videos/4981/4981-720.mp4';
    vid.autoplay = true;
    vid.loop = true;

    const content = document.createElement('div');
    const heading = document.createElement('h2');
    const para = document.createElement('p');

    content.classList.add('about-content');

    heading.innerText = 'About Us';
    para.innerText = "At The Cozy Brew, we believe that a great cup of coffee can turn any day around. We started our cafe with a passion for creating a warm and inviting space for everyone to enjoy. Every ingredient is chosen with care, and each cup is made with love. Whether you're here to work, relax, or catch up with friends, The Cozy Brew is your little haven of comfort in the city."


    content.append(heading, para);
    aboutDiv.append(vid, content);
    return aboutDiv;
}