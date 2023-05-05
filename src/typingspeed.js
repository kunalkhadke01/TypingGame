const {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo
} = require("react");

const Typingspeed = (props) => {
  const [count, setcount] = useState(0);
  const [inputtype, setinputtype] = useState("");
  const [filtertrue, setfiltertrue] = useState(false);
  var inputsring = inputtype;
  const HandleChange = (e) => {
    setinputtype(e.target.value);
  };
  const onuserclick = () => {
    const interval = setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setcount(0);
      setinputtype("");
    }, 10000);
  };

  const inputcheck = useMemo(() => {
    const filterdinput = inputsring.includes(
      "i am not a voices in my head"
    );
    if (count == 9 && filterdinput === true) {
      return setfiltertrue(true);
    }
  }, [count]);
  return (
    <Fragment>
      <h5 className="textcolor">
        TYPING SPEED TEST <p>Test your typing skills (Timing:10sec)</p>
      </h5>
      <div>
        <h2 className="textcolor">Text: -> "i am not a voices in my head"</h2>
      </div>
      <input
        type="string"
        name="typing"
        placeholder="Type your text"
        className="textinput"
        value={inputtype}
        onClick={() => onuserclick()}
        onChange={(e) => HandleChange(e)}
      />
      {filtertrue == true ? (
        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>Here you are</h2>
            <a class="close" href="#" onClick={() => setfiltertrue(false)}>
              &times;
            </a>
            <div class="content">You Win</div>
          </div>
        </div>
      ) : (
        <h2 className="textcolor">{count}</h2>
      )}
    </Fragment>
  );
};

export default Typingspeed;
