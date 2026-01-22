/** Chunk was on web.js **/
/** chunk id: 579940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y0: () => o,
  gf: () => l,
  nQ: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js");
let s = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  o = (0, Chunk353640.v)(() => s);

function l(e, t, n) {
  (0, r.useEffect)(() => {
    (0, a.r)(() => {
      t ? o.setState({
        id: e,
        activeDescendant: n
      }) : o.setState({
        id: null,
        activeDescendant: null
      })
    })
  }, [e, t, n])
}

function c() {
  (0, a.r)(() => o.setState(() => s))
}