/** Chunk was on 26434 **/
/** chunk id: 83561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => f,
  m: () => m
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
let p = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function m() {
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

function f(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("div", {
    className: d.avatarContainer,
    children: (0, r.jsx)(p, {
      src: t,
      size: o.EFr.SIZE_40,
      "aria-label": u.intl.string(u.t.hG1StL)
    })
  })
}