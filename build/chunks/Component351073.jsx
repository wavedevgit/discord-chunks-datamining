/** Chunk was on 17869 **/
/** chunk id: 351073, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function f(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: i,
    stream: u
  } = e, f = r.useRef(null), m = (0, s.bG)([c.default], () => c.default.getCurrentUser());
  a()(null != m, "user cannot be null"), (0, h.A)(f, m, i, n);
  let {
    handleClick: g,
    handleMouseDown: A,
    handleMouseEnter: b,
    handleMouseMove: _,
    handleMouseUp: y
  } = (0, d.A)({
    user: m,
    channelId: n,
    streamerId: i,
    stream: u,
    focused: t,
    canvas: f.current
  });
  return (0, l.jsx)(o.A, {
    children: (0, l.jsx)("canvas", {
      ref: f,
      onClick: g,
      onMouseDown: A,
      onMouseEnter: b,
      onMouseMove: _,
      onMouseUp: y,
      className: p.s
    })
  })
}

function m(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.A.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : (0, l.jsx)(f, function(e) {
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