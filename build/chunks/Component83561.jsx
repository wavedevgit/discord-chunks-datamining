/** Chunk was on web.js **/
/** chunk id: 83561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => p,
  m: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk426563 = require("./426563.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116618 = require("./116618.js");
let f = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function _() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = Chunk473749.useState(false),
    r = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    o = Chunk473749.useMemo(() => {
      let n = exports || !Chunk54381 && !module;
      return (0, Chunk426563.j)(require)
    }, [exports, Chunk54381, module]);
  return {
    avatarSrc: Chunk481060,
    eventHandlers: {
      onMouseEnter: Chunk473749.useCallback(() => require(true), []),
      onMouseLeave: Chunk473749.useCallback(() => require(false), [])
    }
  }
}

function p(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("div", {
    className: d.avatarContainer,
    children: (0, r.jsx)(f, {
      src: t,
      size: o.EFr.SIZE_40,
      "aria-label": u.intl.string(u.t.hG1StD)
    })
  })
}