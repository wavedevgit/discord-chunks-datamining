/** Chunk was on web.js **/
/** chunk id: 353271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./143770.js").A)({
  kind: "user",
  id: "2025-08_search_phrase_matching",
  label: "Search Phrase Matching",
  defaultConfig: {
    enabled: false,
    quotes: false,
    brackets: false
  },
  treatments: [{
    id: 1,
    label: "Enabled.",
    config: {
      enabled: true,
      quotes: true,
      brackets: false
    }
  }, {
    id: 2,
    label: "Tokenization only; no quotes",
    config: {
      enabled: true,
      quotes: false,
      brackets: false
    }
  }, {
    id: 3,
    label: "[Square brackets] instead of quotes",
    config: {
      enabled: true,
      quotes: false,
      brackets: true
    }
  }]
})