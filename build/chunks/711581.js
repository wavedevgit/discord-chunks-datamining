/** Chunk was on 58127 **/
/** chunk id: 711581, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  NG: () => a,
  Np: () => r,
  QZ: () => i
});
var Chunk73153 = require("./73153.js");

function r() {
  l.h.dispatch({
    type: "SPELLCHECK_TOGGLE"
  })
}

function a(t) {
  l.h.dispatch({
    type: "SPELLCHECK_LEARN_WORD",
    word: t
  })
}

function i(t) {
  l.h.dispatch({
    type: "SPELLCHECK_UNLEARN_WORD",
    word: t
  })
}