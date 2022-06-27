import React from 'react';
export default TickleBox() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="App">
        <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Hover over me!
        </button>
        {isShown && (
            <div>
            I'll appear when you hover over the button.
            </div>
        )}
        </div>
    );
}