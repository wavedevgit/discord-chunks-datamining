/** Chunk was on 99989 **/
/** chunk id: 295866, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D0: () => c,
  kY: () => l,
  lE: () => i
});
var Chunk570140 = require("./570140.js");

function l() {
  r.Z.dispatch({
    type: "SPELLCHECK_TOGGLE"
  })
}

function c(t) {
  r.Z.dispatch({
    type: "SPELLCHECK_LEARN_WORD",
    word: t
  })
}

function i(t) {
  r.Z.dispatch({
    type: "SPELLCHECK_UNLEARN_WORD",
    word: t
  })
}