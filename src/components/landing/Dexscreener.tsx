import React from 'react';

const DexScreenerEmbed = (props: any) => {
    return(
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <style>
          #dexscreener-embed {
            position: relative;
            width: 100%;
            padding-bottom: 125%;
          }
          @media (min-width: 1400px) {
            #dexscreener-embed {
              padding-bottom: 65%;
            }
          }
          #dexscreener-embed iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: 0;
          }
        </style>
        <div id="dexscreener-embed">
          <iframe
            src="https://dexscreener.com/bsc/0x926328Ea37D3BD20CA52cC8157831dc7c8EF770B?embed=1&theme=dark"
          ></iframe>
        </div>
      `
    }}
  />
  )
};

export default DexScreenerEmbed;