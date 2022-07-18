import { useReducer } from "react";
import { Button } from "react-bootstrap";

/**
 * Buradaki fonksiyonumuz count üzerinde hangi aksiyon alınacaksa ona göre değişiklik yapılmasını sağlamaktadır.
 * @param {number} state - Count'a verilmiş olan default değer.
 * @param {string} action - Count'ta etki edecek aksiyonun ismidir.
 */
function reducer(state: number, action: string) {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  } else {
    throw new Error();
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useReducer Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  useState‘e bir alternatiftir. (state, action) ={">"} newState şeklinde bir reducer fonksiyonunu
                  parametre olarak alır, ve mevcut state’i bir dispatch metodu ile birlikte döndürür. (Eğer Redux
                  biliyorsanız, bunun da nasıl çalıştığını zaten biliyorsunuz.) Örneğimizde oluşturmuş olduğumuz reducer
                  (+) butonuna tıklanıldığında artırma aksiyonunu dispatch etmekte, (-) butonuna tıkladığımızda azaltma
                  aksiyonunu dispatch etmekte ve (reset) butonuna tıkladığımızda ise reset aksiyonunu dispatch etmekte.
                </text>
              </div>
            </div>
          </div>
          <div className="aa d-flex col-lg-6 justify-content-center">
            <div className="d-flex align-self-center  flex-column">
              <text>
                Değer: <h3 className="d-flex justify-content-center">{count}</h3>
                <div className="d-flex gap-3">
                  <Button onClick={() => dispatch("increment")}>+</Button>
                  <Button onClick={() => dispatch("reset")}>Reset</Button>
                  <Button onClick={() => dispatch("decrement")}>-</Button>
                </div>
              </text>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
