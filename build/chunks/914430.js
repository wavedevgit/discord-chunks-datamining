/** Chunk was on 96430 **/
/** chunk id: 914430, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Al: () => o,
  Gv: () => i,
  fh: () => a,
  rZ: () => l
});
var Chunk73153 = require("./73153.js");

function i(t) {
  r.h.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: t
  })
}

function a(t) {
  r.h.dispatch({
    type: "CATEGORY_EXPAND",
    id: t
  })
}

function l(t) {
  r.h.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: t
  })
}

function o(t) {
  r.h.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: t
  })
}