/** Chunk was on web.js **/
/** chunk id: 579940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y0: () => s,
  gf: () => l,
  nQ: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js");
let o = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  s = (0, Chunk353640.v)(() => o);

function l(e, t, n) {
  (0, r.useEffect)(() => {
    (0, a.r)(() => {
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
  (0, a.r)(() => s.setState(() => o))
}