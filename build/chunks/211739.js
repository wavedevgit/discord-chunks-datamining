/** Chunk was on web.js **/
/** chunk id: 211739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N5: () => a,
  c4: () => i,
  lc: () => s,
  mJ: () => o
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function o(e) {
  r.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function s(e) {
  r.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}