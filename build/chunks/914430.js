/** Chunk was on 88962 **/
/** chunk id: 914430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Al: () => d,
  Gv: () => a,
  fh: () => l,
  rZ: () => r
});
var Chunk73153 = require("./73153.js");

function a(e) {
  i.h.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
  i.h.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function r(e) {
  i.h.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function d(e) {
  i.h.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}