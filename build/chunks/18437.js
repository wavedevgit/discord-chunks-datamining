/** Chunk was on web.js **/
/** chunk id: 18437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ii: () => b,
  Ut: () => y,
  u0: () => E
});
var Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk345353 = require("./345353.js"),
  Chunk69114 = require("./69114.js"),
  Chunk723702 = require("./723702.js"),
  Chunk859703 = require("./859703.js"),
  Chunk710969 = require("./710969.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E() {
  let e = (0, f.vU)();
  return r.useCallback(t => {
    (0, u.av)(g(h({}, t), {
      properties: g(h({}, t.properties), {
        impression_id: null == e ? true : e.getId()
      })
    }))
  }, [e])
}

function y() {
  let e = E();
  return r.useCallback(t => {
    let {
      questId: n,
      questContent: r,
      questContentCTA: u,
      questContentPosition: f,
      questContentRowIndex: _,
      trackGuildAndChannelMetadata: m,
      sourceQuestContent: E
    } = t, y = l.A.getQuest(n), b = (0, c.Li)(r), O = (0, c.L4)(r), v = (0, c.yI)(r, n), A = (0, c.Gp)(r, n);
    (0, a.N)((0, d.jO)(r)).then(t => {
      e({
        questId: n,
        event: p.HAw.QUEST_CONTENT_CLICKED,
        properties: g(h({}, (0, d.fF)(r, f, _), (0, s.A)()), {
          cta_name: u,
          quest_status: null != y ? (0, d.NI)(y) : null,
          click_id: (0, i.A)(),
          apple_advertising_id: null != t && (0, o.isIOS)() ? t.advertisingId : null,
          android_advertising_id: null != t && (0, o.isAndroid)() ? t.advertisingId : null,
          metadata_raw: null != b ? b : null,
          metadata_sealed: null != O ? O : null,
          traffic_metadata_raw: null != v ? v : null,
          traffic_metadata_sealed: null != A ? A : null
        }),
        trackGuildAndChannelMetadata: m,
        shouldExtendSession: (0, c.xn)(r),
        sourceQuestContent: E
      })
    })
  }, [e])
}

function b(e, t) {
  r.useEffect(() => {
    (0, u.DZ)(t, e)
  }, [e, t])
}