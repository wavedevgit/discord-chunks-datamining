/** Chunk was on 48615 **/
/** chunk id: 590076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk822183 = require("./822183.js"),
  Chunk364125 = require("./364125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk80109 = require("./80109.js");

function b(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: l,
    stream: u
  } = e, b = i.useRef(null), m = (0, o.e7)([s.default], () => s.default.getCurrentUser());
  a()(null != m, "user cannot be null"), (0, f.Z)(b, m, l, n);
  let {
    handleClick: g,
    handleMouseDown: v,
    handleMouseEnter: h,
    handleMouseMove: E,
    handleMouseUp: _
  } = (0, d.Z)({
    user: m,
    channelId: n,
    streamerId: l,
    stream: u,
    focused: t,
    canvas: b.current
  });
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsx)("canvas", {
      ref: b,
      onClick: g,
      onMouseDown: v,
      onMouseEnter: h,
      onMouseMove: E,
      onMouseUp: _,
      className: p.sharedCanvas
    })
  })
}

function m(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.Z.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : (0, r.jsx)(b, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, e))
}