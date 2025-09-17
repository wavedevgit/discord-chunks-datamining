/** Chunk was on 69634 **/
/** chunk id: 590076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk822183 = require("./822183.js"),
  Chunk364125 = require("./364125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk9589 = require("./9589.js");

function m(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: i,
    stream: c
  } = e, m = l.useRef(null), E = (0, o.e7)([s.default], () => s.default.getCurrentUser());
  a()(null != E, "user cannot be null"), (0, f.Z)(m, E, i, n);
  let {
    handleClick: g,
    handleMouseDown: b,
    handleMouseEnter: S,
    handleMouseMove: v,
    handleMouseUp: h
  } = (0, d.Z)({
    user: E,
    channelId: n,
    streamerId: i,
    stream: c,
    focused: t,
    canvas: m.current
  });
  return (0, r.jsx)(u.Z, {
    children: (0, r.jsx)("canvas", {
      ref: m,
      onClick: g,
      onMouseDown: b,
      onMouseEnter: S,
      onMouseMove: v,
      onMouseUp: h,
      className: p.sharedCanvas
    })
  })
}

function E(e) {
  let {
    isSharedCanvasEnabled: t
  } = c.Z.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : (0, r.jsx)(m, function(e) {
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