import React, { Component } from 'react';

class Product extends Component {

    render() {
        return (
            <div>
                <div className="product-container ">
                    <div className="product-content-left">
                        <div className="box2 color17" title="Fresh">
                        <div className="box2-2"></div>
                        <div className="box2-3"></div>
                        <div className="box2-4"></div>
                    </div>
                    </div>

                    <div className="product-content-right">
                        <div className="product-text">
                            <h3>Dusty violet </h3>
                            <h5>129,95 € </h5>
                            <p>Violetilla valolla uskotaan olevan parantava vaikutus. Se stimuloi solujemme valoa kerääviä entsyymeitä ja parantaa viottunutta dna:ta. Leonardo da Vinci uskoi, että keskittymisvoima kymmenkertaistui purppuraisessa valossa (esim. maalatun lasin läpi). </p>
                            <p>Violetin katsotaan ilmaisevan viisautta ja rakkautta. Sitä pidetään myös eron, irtautumisen ja leskeyden värinä. Joskus violettiin pukeutumista on pidetty osoituksena huonosta mausta, eikä se vieläkään ole vaatteiden värinä kovin yleinen.</p>
                            <p>Violetti kaikkine alasävyineen liitetään useisiin valtauskontojen vastaisiin (uskon)liikkeisiin, kuten NewAgeen, wicca-kulttiin ja pakanallisuuteen - Aku Ankassa esiintyneen hömpsäkän noita-akka Matami Mimmin tukka ja vaatteet olivat violettisävytteiset (toisin kuin huomattavasti häijymmän ja tavoitteellisemman italialaisankan, Milla Magian, jonka tukka ja vaatteet kiiltelevät mustuuttaan) ja näkyypä väri vahvasti Harry Potter -elokuvissakin (varsinkin elokuvan oheistuotteissa).</p>
                        </div>
                        
                        <div>
                            <div>
                                <button>Lisää ostoskoriin </button>
                                <button>Lisää toivelistalle </button>
                            </div>
                            <p>Ilmainen toimitus yli 120 € tilauksiin (normaali 5,95€) <span><strong>Toimitustiedot</strong></span></p>
                        </div>
                    </div>
                    
                    <div className="other-products">
                        <h4>Katso myös nämä tuotteet</h4>
                        <div className="small-box-container">
                            <div className="small-box color2"></div>
                            <div className="small-box color3"></div>
                            <div className="small-box color4"></div>
                            <div className="small-box color5"></div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default Product;