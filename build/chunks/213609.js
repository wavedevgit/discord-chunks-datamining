/** Chunk was on web.js **/
/** chunk id: 213609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  h: () => v
});
var Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk97613 = require("./97613.js"),
  s = require.n(Chunk97613),
  Chunk990547 = require("./990547.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493773 = require("./493773.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk367907 = require("./367907.js"),
  Chunk565384 = require("./565384.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = (0, Chunk990547.trackMaker)({
  analyticEventConfigs: Chunk626135.AnalyticEventConfigs,
  dispatcher: Chunk570140.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function v(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      name: i,
      type: o,
      properties: a
    } = e;
  if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, h.Ez)().some(e => {
      var t;
      return null == (t = e._stackContext) ? true : t.isSlide
    })) return;
  (0, h.Ps)(e);
  let s = null != (t = null == a ? true : a.guild_id) ? t : p.Z.getGuildId(),
    c = null != (n = null == a ? true : a.channel_id) ? n : f.Z.getChannelId(s),
    u = (0, _.expandEventProperties)(E({
      impression_type: o,
      location: (0, h.k$)()
    }, (0, m.hH)(s), (0, m.v_)(d.Z.getChannel(c)), a));
  if (r) return void(0, h.dT)(null, null);
  null != i && null != o && ((0, _.debugLogEvent)(i, u), O(i, u)), (0, h.dT)(i, u)
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      disableTrack: false,
      trackOnInitialLoad: false
    },
    n = arguments.length > 2 ? arguments[2] : true,
    i = r.useRef(true),
    a = r.useRef(true),
    l = () => {
      let r = !o()(i.current, e);
      r && (i.current = e);
      let l = !o()(a.current, n);
      if (l && (a.current = n), !r && !l) return;
      let c = y(E({}, e), {
        sequenceId: s()("impression_")
      });
      return v(c, t.disableTrack), () => {
        null != c && (0, h.dw)(c)
      }
    };
  (0, u.ZP)(() => {
    if (t.trackOnInitialLoad) return l()
  }), r.useEffect(() => {
    if (!t.trackOnInitialLoad) return l()
  })
}