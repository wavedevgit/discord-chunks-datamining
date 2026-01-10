/** Chunk was on 69813 **/
/** chunk id: 590076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function g(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: i,
    stream: u
  } = e, g = l.useRef(null), b = (0, o.e7)([s.default], () => s.default.getCurrentUser());
  a()(null != b, "user cannot be null"), (0, f.Z)(g, b, i, n);
  let {
    handleClick: m,
    handleMouseDown: h,
    handleMouseEnter: E,
    handleMouseMove: v,
    handleMouseUp: _
  } = (0, d.Z)({
    user: b,
    channelId: n,
    streamerId: i,
    stream: u,
    focused: t,
    canvas: g.current
  });
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsx)("canvas", {
      ref: g,
      onClick: m,
      onMouseDown: h,
      onMouseEnter: E,
      onMouseMove: v,
      onMouseUp: _,
      className: p.sharedCanvas
    })
  })
}

function b(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.Z.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : (0, r.jsx)(g, function(e) {
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