/** Chunk was on 31748 **/
/** chunk id: 351073, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk502633 = require("./502633.js"),
  Chunk909417 = require("./909417.js"),
  Chunk427160 = require("./427160.js"),
  Chunk304713 = require("./304713.js");

function b(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: i,
    stream: u
  } = e, b = r.useRef(null), g = (0, s.bG)([c.default], () => c.default.getCurrentUser());
  a()(null != g, "user cannot be null"), (0, f.A)(b, g, i, n);
  let {
    handleClick: m,
    handleMouseDown: h,
    handleMouseEnter: A,
    handleMouseMove: y,
    handleMouseUp: _
  } = (0, d.A)({
    user: g,
    channelId: n,
    streamerId: i,
    stream: u,
    focused: t,
    canvas: b.current
  });
  return (0, l.jsx)(o.A, {
    children: (0, l.jsx)("canvas", {
      ref: b,
      onClick: m,
      onMouseDown: h,
      onMouseEnter: A,
      onMouseMove: y,
      onMouseUp: _,
      className: p.s
    })
  })
}

function g(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.A.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : (0, l.jsx)(b, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, e))
}