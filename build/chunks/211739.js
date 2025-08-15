/** Chunk was on 97162 **/
/** chunk id: 211739, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  N5: () => c,
  c4: () => i,
  lc: () => o,
  mJ: () => r
});
var Chunk570140 = require("./570140.js");

function i(e) {
  n.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function r(e) {
  n.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function c(e) {
  n.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function o(e) {
  n.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}