import Branding from '@components/Branding';
import NoBandGroup from '@components/NoBandGroup';
import LinkBandGroup from '@components/LinkBandGroup';
import Gap from '@components/Gap';
import Footer from '@components/Footer';
import imgAbyss from '@public/assets/structure/abyss.png';
import txtCheck from '@public/assets/structure/checkurs.png';
import Image from 'next/image';

const Home = () => {
    return (
        <div id="wrapper">
            <div className="flex">
                <div className="featurespot basis-2/3" style={{ 
                backgroundImage: `url(${txtCheck.src})`,
                backgroundRepeat: 'repeat'
                }}>
                    <Branding />
                </div>
            </div>
            <div className="row">
                <div className="featurespot basis-2/3" style={{ 
                backgroundImage: `url(${txtCheck.src})`,
                backgroundRepeat: 'repeat'
                }}>
                    <NoBandGroup group={[["latest music release", "cP"]]} />
                    <iframe src="https://www.youtube.com/embed/w0qQvRK4mQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div id="footzone">
                <Image id="cbg" className="bg_view1" src={imgAbyss} alt="bg" width="3456" height="4832" />
            </div>
            <LinkBandGroup group={[["bandcamp", "https://opt-out-rpg.bandcamp.com/", "cY"], ["twitter", "https://twitter.com/optoutrpg", "cY"], ["youtube", "https://www.youtube.com/channel/UCwsphr-ZKGWvvrz7yTRBv7w", "cY"], ["redostan.com", "https://redostan.com", "cGr"]]} />
            <Gap />
            <Footer />
        </div>
    );
}

export default Home;
