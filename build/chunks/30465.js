/** Chunk was on web.js **/
/** chunk id: 30465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KR: () => l,
  p8: () => s,
  sJ: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js");
let a = Object.freeze({
    id: null,
    activeDescendant: null
  }),
  s = (0, Chunk879690.U)(() => a);

function l(e, t, n) {
  (0, r.useEffect)(() => {
    (0, o.j)(() => {
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
  (0, Chunk731965.j)(() => s.setState(() => a))
}