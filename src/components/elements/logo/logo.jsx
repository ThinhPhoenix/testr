
const Logo = ({ className = '', size = 'default', customSize = '', withTagline = false }) => {
    console.log("Logo size prop:", size); // Debug log to check what size is being received

    // Get font size directly in pixels
    const getFontSize = () => {
        // If customSize is provided, use that (it should be a valid CSS size like '12px', '0.8rem', etc.)
        if (customSize) {
            return customSize;
        }

        switch (size) {
            case 'micro':
                return '8px'; // Made even smaller
            case 'tiny':
                return '10px'; // Made smaller
            case 'xs':
                return '12px'; // Made smaller
            case 'small':
                return '14px'; // Made smaller
            case 'medium':
                return '18px'; // Made smaller
            case 'large':
                return '22px'; // Made smaller
            default:
                return '16px'; // Made smaller
        }
    };

    const fontSize = getFontSize();
    console.log("Applied font size:", fontSize); // Debug log to check calculated font size

    return (
        <a href="/">
            <div className={`logo-container ${className}`}>
                <h1
                    className={`font-bold font-[family-name:var(--font-bricolage-grotesque)]`}
                    style={{
                        fontSize: fontSize,
                        background: 'linear-gradient(to right, #f06694, #f6b763)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        display: 'inline-block'
                    }}
                >
                    Evolvia
                </h1>
                {withTagline && (
                    <p className="text-sm text-gray-600 mt-1 font-[family-name:var(--font-fraunces)]">Your Evolution Journey</p>
                )}
            </div>
        </a>
    );
};

export default Logo;
