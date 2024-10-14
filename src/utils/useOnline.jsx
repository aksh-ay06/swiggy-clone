import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with the actual status

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Cleanup the event listeners on unmount
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return isOnline;
};

export default useOnline;
