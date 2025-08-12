/** Chunk was on web.js **/
/** chunk id: 83561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => p,
  m: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk426563 = require("./426563.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77478 = require("./77478.js");
let f = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function _() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = Chunk73800.useState(false),
    r = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    a = Chunk73800.useMemo(() => {
      let n = exports || !Chunk255367 && !module;
      return (0, Chunk426563.j)(require)
    }, [exports, Chunk255367, module]);
  return {
    avatarSrc: Chunk481060,
    eventHandlers: {
      onMouseEnter: Chunk73800.useCallback(() => require(true), []),
      onMouseLeave: Chunk73800.useCallback(() => require(false), [])
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
      size: a.EFr.SIZE_40,
      "aria-label": u.intl.string(u.t.hG1StL)
    })
  })
}