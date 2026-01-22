/** Chunk was on web.js **/
/** chunk id: 139286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  x: () => A
});
var Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk296489 = require("./296489.js"),
  o = require.n(Chunk296489),
  Chunk110259 = require("./110259.js"),
  Chunk73153 = require("./73153.js"),
  Chunk964486 = require("./964486.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk58149 = require("./58149.js"),
  Chunk686757 = require("./686757.js");

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
let O = (0, Chunk110259.trackMaker)({
  analyticEventConfigs: Chunk954571.AnalyticEventConfigs,
  dispatcher: Chunk73153.h,
  TRACK_ACTION_NAME: "TRACK"
});

function A(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      name: i,
      type: a,
      properties: s
    } = e;
  if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, m.uJ)().some(e => {
      var t;
      return null == (t = e._stackContext) ? true : t.isSlide
    })) return;
  (0, m.Vm)(e);
  let o = null != (t = null == s ? true : s.guild_id) ? t : p.A.getGuildId(),
    c = null != (n = null == s ? true : s.channel_id) ? n : f.A.getChannelId(o),
    u = (0, _.expandEventProperties)(E({
      impression_type: a,
      location: (0, m.g$)()
    }, (0, h.H$)(o), (0, h.dI)(d.A.getChannel(c)), s));
  r ? (0, m.eE)(null, null) : (null != i && null != a && ((0, _.debugLogEvent)(i, u), O(i, u)), (0, m.eE)(i, u))
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      disableTrack: false,
      trackOnInitialLoad: false
    },
    n = arguments.length > 2 ? arguments[2] : true,
    i = r.useRef(true),
    s = r.useRef(true),
    l = () => {
      let r = !a()(i.current, e);
      r && (i.current = e);
      let l = !a()(s.current, n);
      if (l && (s.current = n), !r && !l) return;
      let c = y(E({}, e), {
        sequenceId: o()("impression_")
      });
      return A(c, t.disableTrack), () => {
        null != c && (0, m.u5)(c)
      }
    };
  (0, u.Ay)(() => {
    if (t.trackOnInitialLoad) return l()
  }), r.useEffect(() => {
    if (!t.trackOnInitialLoad) return l()
  })
}