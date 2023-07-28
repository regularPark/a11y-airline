import React, { useState, MouseEvent, useEffect } from 'react';
import './SpinButton.css';

interface SpinButtonProps {
  labelName: string;
}

const SpinButton = ({ labelName }: SpinButtonProps) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [announceMsg, setAnnounceMsg] = useState<string>();

  const increment = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
      setAnnounceMsg(`${labelName} 승객 ${count + 1} 추가`);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setAnnounceMsg(`${labelName} 승객 ${count - 1} 감소`);
    }
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  useEffect(() => {
    if (announceMsg) {
      const guideAnnounce = document.getElementById('announce-message');

      if (guideAnnounce) {
        guideAnnounce.textContent = announceMsg;
      }
    }
  }, [announceMsg]);

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>{labelName}</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          aria-label={`${labelName} 승객 줄이기`}
          onClick={decrement}
          className="spinButton"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          aria-label="텍스트 숫자만 수정"
          aria-valuemax={3}
          aria-valuemin={0}
          readOnly
          className="spinButtonInput"
          value={count}
        />
        <button
          aria-label={`${labelName} 승객 늘리기`}
          onClick={increment}
          className="spinButton"
        >
          +
        </button>
        <p
          id="announce-message"
          className="hidden"
          aria-atomic="true"
          aria-live="assertive"
        />
      </div>
    </section>
  );
};

export default SpinButton;
