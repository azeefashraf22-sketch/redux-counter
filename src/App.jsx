import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <style>{`
   * { box-sizing: border-box; margin: 0; padding: 0; }

  .wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    font-family: 'Segoe UI', Roboto, sans-serif;
    padding: 20px;
  }

  .card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    width: 100%;
    max-width: 420px;
    padding: 40px 32px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-align: center;
  }

  .title {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }

  .display-box {
    margin: 0 0 32px;
    padding: 28px 20px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.25) 100%);
    border-radius: 20px;
    border: 1px solid rgba(99, 102, 241, 0.35);
  }

  .counter-value {
    font-size: 80px;
    font-weight: 800;
    background: linear-gradient(135deg, #a78bfa, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (min-width: 400px) {
    .action-row {
      display: flex;
      gap: 12px;
    }
  }

  .btn {
    flex: 1;
    padding: 18px;
    border: none;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }

  .btn-inc {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.45);
  }

  .btn-inc:hover {
    filter: brightness(1.12);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.55);
  }

  .btn-dec {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .btn-dec:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .btn:active {
    transform: scale(0.97);
  }

  .btn-reset {
    background: transparent;
    color: rgba(255, 255, 255, 0.3);
    font-size: 13px;
    margin-top: 4px;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    padding: 6px 12px;
  }

  .btn-reset:hover {
    color: #f87171;
  }
`}</style>
      <div className="card">
        <h2 className="title">Total Count</h2>

        <div className="display-box">
          <h1 className="counter-value">{count}</h1>
        </div>

        <div className="btn-group">
          <div className="action-row">
            <button className="btn btn-dec" onClick={() => dispatch(decrement())}>
              Decrease
            </button>
            <button className="btn btn-inc" onClick={() => dispatch(increment())}>
              Increase
            </button>
          </div>

          <button className="btn btn-reset" onClick={() => dispatch(reset())}>
            Reset Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;