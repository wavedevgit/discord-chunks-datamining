/** Chunk was on web.js **/
/** chunk id: 30465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KR: () => l,
  p8: () => s,
  sJ: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js");
let o = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  s = (0, Chunk97519.U)(() => o);

function l(e, t, n) {
  (0, r.useEffect)(() => {
    (0, a.j)(() => {
      t ? s.setState({
        id: e,
        activeDescendant: n
      }) : s.setState({
        id: null,
        activeDescendant: null
      })
    })
  }, [e, t, n])
}

function c() {
  (0, Chunk731965.j)(() => s.setState(() => o))
}