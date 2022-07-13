import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const UseRef = () => {
  const videoRef = useRef<any>();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useRef Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  Ref, DOM elemanlarına erişmemizi sağlayan yapıdır. Bir component içindeki componentin tekrar render
                  olmasına gerek kalmadan değişebilir değişken tutmamızı sağlar. Görmüş olduğunuz örnekte DOM elemanı
                  olan video'nun oynatma ve durdurma gibi fonksiyonlarına erişmemizi sağlıyor.
                </text>
              </div>
            </div>
          </div>
          <div className="aa d-flex col-lg-6 justify-content-center align-self-center">
            <div className="d-flex flex-column align-self-center">
              <video width="400" controls ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" />
              <hr />
              <div className="d-flex justify-content-center gap-3">
                <Button onClick={handlePlay}>Oynat</Button>
                <Button onClick={handlePause}>Duraklat</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
