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
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, [n, c] = Chunk473749.useState(() => l(Date.now())), u = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion), d = !exports || u && !module, f = d ? 15 * Chunk70956.Z.Millis.SECOND : Chunk70956.Z.Millis.SECOND;
  return Chunk473749.useEffect(() => {
    let e = new Chunk846519.Xp;
    return module.start(f, () => {
      c(l(Date.now()))
    }), () => module.stop()
  }, [f]), {
    now: require,
    slowTickMode: d
  }
}