/** Chunk was on 9753 **/
/** chunk id: 809115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => m,
  l: () => f
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
let p = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function m() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = i.useState(false),
    r = (0, l.bG)([s.A], () => s.A.useReducedMotion),
    a = i.useMemo(() => {
      let n = t || !r && !e;
      return (0, o.q)(n)
    }, [t, r, e]);
  return {
    avatarSrc: a,
    eventHandlers: {
      onMouseEnter: i.useCallback(() => n(true), []),
      onMouseLeave: i.useCallback(() => n(false), [])
    }
  }
}

function f(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("div", {
    className: d.H,
    children: (0, r.jsx)(p, {
      src: t,
      size: a._3J.SIZE_40,
      "aria-label": u.intl.string(u.t.hG1StD)
    })
  })
}