import { useEffect } from 'react'

const ChatwootWidget = () => {

    // UseEffect hook to load the chatwoot widget on component mount 
    useEffect(() => {
        // Add Chatwoot Settings
        window.chatwootSettings = {
            // The small chatwoot widget will be displayed in the bottom right corner of the page.
            hideMessageBubble: false,
            position: "right",
            locale: "en",
            type: "expanded_bubble",
        };
        
        // Copy and paste from the Chatwoot dashboard.
        /*
            How to get this code?

            - Go to https://app.chatwoot.com
            - Log in if you haven't already
            - Create a new inbox, select "Website" 
            Now you will need to fill a few more fields. After that, you'll get this code.
        */
        (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
                window.chatwootSDK.run({
                websiteToken: '1zCwdJS4jRZVxPVBTEj3ENFA',
                baseUrl: BASE_URL
                })
            }
            })(document,"script");
    }, [])
  return null
}

export default ChatwootWidget