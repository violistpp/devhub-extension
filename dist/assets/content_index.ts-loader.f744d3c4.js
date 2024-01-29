(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content_index.ts.5d6ba7bc.js")
    );
  })().catch(console.error);

})();
