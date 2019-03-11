import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/spring-in-london.jpg";

class Blog extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="isiBlog">
            <div className="row">
              <div className="col-md-10">
                <h3>Spring in London</h3>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <span>6 Maret 2019</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-4">
                <img src={foto1} />
              </div>
              <div className="col-md-9 col-8">
                <p>Spring in London bercerita tentang Naomi Ishida--seorang model keturunan Jepang-Indonesia yang tinggal di London. Di awal cerita, dia bekerja sama dengan Danny Jo--seorang model dari Korea yang ganteng, ramah dan sebagainya--untuk pembuatan musik videonya Jung Tae-Woo (iya, Tae-Woo yang di Summer in Seoul).</p>
                <br/>
                <p> Tapi dari awal ketemu Danny, si Naomi ini kayak menutup diri gitu. Terus setiap kali ngelihat Danny, Naomi kelihatan agak ketakutan. Danny kan jadi bingung. Apa dia ngelakuin sesuatu yang salah? Apa ada yang salah dari sikap dia? Apa mukanya serem?</p>
                <br/>
                <p> Demi keberhasilan musik videonya Tae-Woo, Danny berusaha deketin Naomi dan mencoba berteman sama dia. Biar pas syuting mereka enggak kaku kayak kuku kakek kakak. Lama-lama, Naomi mulai mau berteman sama Danny--walaupun kelihatan banget si Naomi masih agak nutup diri. Tapi ya, udah lumayan, lah. Sejak Danny ngajak Naomi makan fish and chips di taman, Naomi mulai nganggep Danny temen.</p>
                <br/>
                <p>Di sisi lain, ibunya Danny itu doyan banget jodoh-jodohin Danny sama segala macem orang--dari anak temennya, keponakan temennya, dll, dll. Suatu hari, Danny dijodohin sama temennya Naomi sendiri--Miho Nakajima!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog;
