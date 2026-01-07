/** Chunk was on web.js **/
/** chunk id: 201812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70956 = require("./70956.js");

function l(e) {
  return Math.floor(e / s.Z.Millis.SECOND) * s.Z.Millis.SECOND
}

function c() {
  let {
    hovered: e,
    isAppFocused: t = true
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, [n, c] = r.useState(() => l(Date.now())), u = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), d = !t || u && !e, f = d ? 15 * s.Z.Millis.SECOND : s.Z.Millis.SECOND;
  return r.useEffect(() => {
    let e = new a.Xp;
    return e.start(f, () => {
      c(l(Date.now()))
    }), () => e.stop()
  }, [f]), {
    now: n,
    slowTickMode: d
  }
}