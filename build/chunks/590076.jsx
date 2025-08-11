/** Chunk was on web.js **/
/** chunk id: 590076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk618158 = require("./618158.js"),
  Chunk594174 = require("./594174.js"),
  Chunk822183 = require("./822183.js"),
  Chunk364125 = require("./364125.js"),
  Chunk90753 = require("./90753.js"),
  Chunk613050 = require("./613050.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: o,
    stream: u
  } = e, p = i.useRef(null), h = (0, s.e7)([c.default], () => c.default.getCurrentUser());
  a()(null != h, "user cannot be null"), (0, f.Z)(p, h, o, n);
  let {
    handleClick: m,
    handleMouseDown: g,
    handleMouseEnter: E,
    handleMouseMove: b,
    handleMouseUp: y
  } = (0, d.Z)({
    user: h,
    channelId: n,
    streamerId: o,
    stream: u,
    focused: t,
    canvas: p.current
  });
  return <l.Z><canvas ref={p} onClick={m} onMouseDown={g} onMouseEnter={E} onMouseMove={b} onMouseUp={y} className={_.sharedCanvas} /></l.Z>
}

function g(e) {
  let {
    isSharedCanvasEnabled: t
  } = u.Z.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: true
  });
  return !t || e.hasScreenMessage ? null : <m{...h({}, e)} />
}