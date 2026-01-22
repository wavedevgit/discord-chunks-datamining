/** Chunk was on web.js **/
/** chunk id: 914430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Al: () => o,
  Gv: () => i,
  fh: () => a,
  rZ: () => s
});
var Chunk73153 = require("./73153.js");

function i(e) {
  r.h.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function a(e) {
  r.h.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function o(e) {
  r.h.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}