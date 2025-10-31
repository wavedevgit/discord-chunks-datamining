/** Chunk was on web.js **/
/** chunk id: 83561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => p,
  m: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk426563 = require("./426563.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545869 = require("./545869.js");
let f = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function _() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = Chunk647438.useState(false),
    r = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    o = Chunk647438.useMemo(() => {
      let n = exports || !Chunk951288 && !module;
      return (0, Chunk426563.j)(require)
    }, [exports, Chunk951288, module]);
  return {
    avatarSrc: Chunk481060,
    eventHandlers: {
      onMouseEnter: Chunk647438.useCallback(() => require(true), []),
      onMouseLeave: Chunk647438.useCallback(() => require(false), [])
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