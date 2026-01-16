/** Chunk was on web.js **/
/** chunk id: 30465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KR: () => l,
  p8: () => s,
  sJ: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js");
let o = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  s = (0, Chunk121168.U)(() => o);

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
  (0, a.j)(() => s.setState(() => o))
}