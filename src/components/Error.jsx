const Error = ({ message }) => {
  return (
    <div className="error-component">
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <span className="error-message">{message}</span>
      </div>
    </div>
  );
};

export default Error;
