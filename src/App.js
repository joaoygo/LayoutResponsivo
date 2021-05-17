import React from 'react';
import './App.css';
import Header from './components/header';
import Section from './components/Section';
import ImgAboutUs from './media/foto9.jpg';
import ImgMedalha from './assets/images/medalha.png';
import ImgEstrela from './assets/images/estrela.png';
import ImgRelogio from './assets/images/relogio.png';
import ImgBalao from './assets/images/balao.png';
import Imgfoto1 from './media/foto1.jpg';
import Imgfoto2 from './media/foto2.jpg';
import Imgfoto3 from './media/foto3.jpg';
import Imgfoto4 from './media/foto4.jpg';
import Imgfoto5 from './media/foto5.jpg';
import Imgfoto6 from './media/foto6.jpg';

import Mulher1 from './media/mulher1.png';
import Mulher2 from './media/mulher2.png';
import Homem1 from './media/homem1.png';
import Iconface from './assets/images/facebook.png';
import Icongoogle from './assets/images/googleplus.png';
import Iconlinke from './assets/images/linkedin.png';
import Iconpint from './assets/images/pinterest.png';
import IconTT from './assets/images/twitter.png';

function App() {
    return (
        <>
            <Header />

            <main>
                <div className="banner">
                    <div className="sliders" style={{ marginLeft: '0' }}>
                        <div className="slide">
                            <div className="slidearea">
                                <h1>
                                    Design is about
                                    <br />
                                    <span>Communication</span>
                                </h1>
                                <h2>Call Us: +00 0 1234 5678</h2>
                                <a href="/">Get in touch</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slidearea">
                                <h1>
                                    Design is about
                                    <br />
                                    <span>Text</span>
                                </h1>
                                <h2>Call Us: +00 0 1234 5678</h2>
                                <a href="/">Get in touch</a>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slidearea">
                                <h1>
                                    Design is about
                                    <br />
                                    <span>Voice</span>
                                </h1>
                                <h2>Call Us: +00 0 1234 5678</h2>
                                <a href="/">Get in touch</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider--pointers">
                        <div className="pointer active" />
                        <div className="pointer" />
                        <div className="pointer" />
                    </div>
                </div>
                <Section title="About us" subTitle="who we are" section="light">
                    <div className="section--aboutus">
                        <div className="section--aboutus--left">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate commodi nisi tempore
                                temporibus hic deleniti porro a numquam at
                                sapiente odit, ipsam, expedita assumenda eveniet
                                fugiat. Cumque ex repellat nihil.
                            </p>
                            <br />
                            <a className="button" href="/">
                                Learn More
                            </a>
                        </div>
                        <div className="section--aboutus--right">
                            <img src={ImgAboutUs} alt="Videos" />
                        </div>
                    </div>
                </Section>

                <Section
                    title="Services"
                    subTitle="Services that we provider"
                    section="dark"
                >
                    <div className="section--services">
                        <div className="section--service">
                            <img src={ImgMedalha} alt="img" />
                            <h4>High Quality Design</h4>
                            <p>Donec Tincidunt cursus</p>
                        </div>
                        <div className="section--service">
                            <img src={ImgEstrela} alt="img" />
                            <h4>High Quality Design</h4>
                            <p>Donec Tincidunt cursus</p>
                        </div>
                        <div className="section--service">
                            <img src={ImgRelogio} alt="img" />
                            <h4>High Quality Design</h4>
                            <p>Donec Tincidunt cursus</p>
                        </div>
                        <div className="section--service">
                            <img src={ImgBalao} alt="img" />
                            <h4>High Quality Design</h4>
                            <p>Donec Tincidunt cursus</p>
                        </div>
                    </div>
                </Section>

                <Section
                    title="Our Projects"
                    subTitle="what we create"
                    section="light"
                >
                    <div className="section--projects">
                        <div className="section--projects--filters">
                            <ul>
                                <li>ALL</li>
                                <li className="active">Photos</li>
                                <li>Branding</li>
                                <li>Adverts</li>
                                <li>Development</li>
                                <li>Mist</li>
                            </ul>
                        </div>
                        <div className="section--projects--photos">
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto1} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto2} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto3} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto4} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto5} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto6} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto3} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto2} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto1} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto6} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto4} alt="" />
                                </div>
                            </div>
                            <div className="section--projects--photo">
                                <div className="section--projects--photoarea">
                                    <div className="section--projects--info">
                                        <h5>About</h5>
                                        <p>Vestibulum porta aliquest risus</p>
                                    </div>
                                    <img src={Imgfoto2} alt="" />
                                </div>
                            </div>
                        </div>

                        <a className="button" href="/">
                            More Projects
                        </a>
                    </div>
                </Section>

                <Section
                    title="Our Team"
                    subTitle="OUR CO-WORKERS"
                    section="dark bg-team team"
                >
                    <div className="section--team">
                        <div className="sliders" style={{ marginLeft: '0' }}>
                            <div className="slide">
                                <div className="slidearea">
                                    <img
                                        className="section--team--avatar"
                                        src={Mulher1}
                                        alt="M1"
                                    />
                                    <div className="section--team--name">
                                        Jane Doe
                                    </div>
                                    <div className="section--team--role">
                                        Master mind
                                    </div>
                                    <div className="section--team--social">
                                        <a href="http://">
                                            <img
                                                src={Iconface}
                                                alt="facebook"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Icongoogle}
                                                alt="googleplus"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconlinke}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconpint}
                                                alt="pinterest"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img src={IconTT} alt="TT" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slidearea">
                                    <img
                                        className="section--team--avatar"
                                        src={Homem1}
                                        alt="M1"
                                    />
                                    <div className="section--team--name">
                                        Mike Chiller
                                    </div>
                                    <div className="section--team--role">
                                        Creative Head
                                    </div>
                                    <div className="section--team--social">
                                        <a href="http://">
                                            <img
                                                src={Iconface}
                                                alt="facebook"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Icongoogle}
                                                alt="googleplus"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconlinke}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconpint}
                                                alt="pinterest"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img src={IconTT} alt="TT" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="slidearea">
                                    <img
                                        className="section--team--avatar"
                                        src={Mulher2}
                                        alt="M1"
                                    />
                                    <div className="section--team--name">
                                        Anna Jhons
                                    </div>
                                    <div className="section--team--role">
                                        Technical Lead
                                    </div>
                                    <div className="section--team--social">
                                        <a href="http://">
                                            <img
                                                src={Iconface}
                                                alt="facebook"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Icongoogle}
                                                alt="googleplus"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconlinke}
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img
                                                src={Iconpint}
                                                alt="pinterest"
                                            />
                                        </a>
                                        <a href="http://">
                                            <img src={IconTT} alt="TT" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider--pointers">
                        <div className="pointer active" />
                        <div className="pointer" />
                        <div className="pointer" />
                    </div>
                </Section>
            </main>

            <footer>
                <Section title="" subTitle="" section="dark">
                    <div className="section--footer">
                        <div className="section--footer--social">
                            <a href="http://">
                                <img src={Iconface} alt="facebook" />
                            </a>
                            <a href="http://">
                                <img src={Icongoogle} alt="googleplus" />
                            </a>
                            <a href="http://">
                                <img src={Iconlinke} alt="linkedin" />
                            </a>
                            <a href="http://">
                                <img src={Iconpint} alt="pinterest" />
                            </a>
                            <a href="http://">
                                <img src={IconTT} alt="TT" />
                            </a>
                            <a href="http://">...</a>
                        </div>
                        <div className="section--footer--info">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Esse quisquam, tenetur animi
                                ducimus similique corporis dolorem! Animi
                                veritatis aperiam sed delectus magni aliquid.
                                Quae dolore iusto iure distinctio obcaecati.
                                Mollitia. Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Quis ad ducimus
                                consectetur odit adipisci deserunt doloribus
                                obcaecati nostrum ullam numquam cupiditate magni
                                omnis porro eius sed, nobis soluta quibusdam!
                                Ut.
                            </p>
                        </div>
                        <div className="section--footer--form">
                            <input
                                type="text"
                                name=""
                                placeholder="EMAIL TO SUBSCRIBE"
                                id=""
                            />
                            <a className="button" href="/">
                                SUBSCRIBE
                            </a>
                        </div>
                    </div>
                </Section>
            </footer>
        </>
    );
}

export default App;
