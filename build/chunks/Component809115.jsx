/** Chunk was on web.js **/
/** chunk id: 809115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => p,
  l: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk820883 = require("./820883.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk906135 = require("./906135.js");
let f = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function p() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = i.useState(false),
    r = (0, a.bG)([o.A], () => o.A.useReducedMotion),
    s = i.useMemo(() => {
      let n = t || !r && !e;
      return (0, l.q)(n)
    }, [t, r, e]);
  return {
    avatarSrc: s,
    eventHandlers: {
      onMouseEnter: i.useCallback(() => n(true), []),
      onMouseLeave: i.useCallback(() => n(false), [])
    }
  }
}

function _(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("div", {
    className: d.H,
    children: (0, r.jsx)(f, {
      src: t,
      size: s._3J.SIZE_40,
      "aria-label": u.intl.string(u.t.hG1StD)
    })
  })
}