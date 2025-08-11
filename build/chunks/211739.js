/** Chunk was on 93886 **/
/** chunk id: 211739, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  N5: () => i,
  c4: () => r,
  lc: () => s,
  mJ: () => l
});
var Chunk570140 = require("./570140.js");

function r(e) {
  n.Z.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
  n.Z.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function i(e) {
  n.Z.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function s(e) {
  n.Z.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}