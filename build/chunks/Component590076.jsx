/** Chunk was on 86642 **/
/** chunk id: 590076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk806777 = require("./806777.js");

function h(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: l,
    stream: u
  } = e, h = r.useRef(null), m = (0, o.e7)([c.default], () => c.default.getCurrentUser());
  a()(null != m, "user cannot be null"), (0, p.Z)(h, m, l, n);
  let {
    handleClick: g,
    handleMouseDown: b,
    handleMouseEnter: y,
    handleMouseMove: C,
    handleMouseUp: _
  } = (0, d.Z)({
    user: m,
    channelId: n,
    streamerId: l,
    stream: u,
    focused: t,
    canvas: h.current
  });
  return (0, i.jsx)(s.Z, {
    children: (0, i.jsx)("canvas", {
      ref: h,
      onClick: g,
      onMouseDown: b,
      onMouseEnter: y,
      onMouseMove: C,
      onMouseUp: _,
      className: f.sharedCanvas
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
  return !t || e.hasScreenMessage ? null : (0, i.jsx)(h, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, e))
}