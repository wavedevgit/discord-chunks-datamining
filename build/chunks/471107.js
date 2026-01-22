/** Chunk was on web.js **/
/** chunk id: 471107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk775602 = require("./775602.js"),
  Chunk927813 = require("./927813.js");

function l(e) {
  return Math.floor(e / o.A.Millis.SECOND) * o.A.Millis.SECOND
}

function c() {
  let {
    hovered: e,
    isAppFocused: t = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, [n, c] = r.useState(() => l(Date.now())), u = (0, i.bG)([s.A], () => s.A.useReducedMotion), d = !t || u && !e, f = d ? 15 * o.A.Millis.SECOND : o.A.Millis.SECOND;
  return r.useEffect(() => {
    let e = new a.IX;
    return e.start(f, () => {
      c(l(Date.now()))
    }), () => e.stop()
  }, [f]), {
    now: n,
    slowTickMode: d
  }
}