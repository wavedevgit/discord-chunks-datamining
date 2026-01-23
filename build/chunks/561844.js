/** Chunk was on web.js **/
/** chunk id: 561844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DZ: () => M,
  Mm: () => j,
  Qg: () => x,
  Y5: () => L,
  av: () => D
}), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk345353 = require("./345353.js"),
  Chunk881615 = require("./881615.js"),
  Chunk861638 = require("./861638.js"),
  Chunk58149 = require("./58149.js"),
  Chunk69114 = require("./69114.js"),
  Chunk111162 = require("./111162.js"),
  Chunk186111 = require("./186111.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk859703 = require("./859703.js"),
  Chunk431490 = require("./431490.js"),
  Chunk807876 = require("./807876.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk590202 = require("./590202.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = new Set([Chunk652215.HAw.QUEST_CONTENT_VIEWED, Chunk652215.HAw.QUEST_CONTENT_CLICKED]);

function C(e, t) {
  var n, r, i, a;
  let o = _.e.getConfig({
    location: "quest_analytics"
  });
  return t ? o.use_ad_session_id ? e : null != (n = null == (r = (0, s.Vc)()) ? true : r.uuid) ? n : null : null != (i = null == (a = (0, s.Vc)()) ? true : a.uuid) ? i : null
}

function N(e, t, n) {
  let r = (0, a.sN)(n).uuid;
  return A({
    client_ad_session_id: r,
    billing_session_id: C(r, (0, m.xn)(t))
  }, (0, m.Kc)(e, t))
}

function w(e, t, n) {
  var r;
  return A({
    quest_id: e.id,
    quest_type: (0, E.pv)(e.config),
    game_id: e.config.application.id,
    game_name: e.config.application.name,
    application_ids: null != (r = (0, g._3)(e)) ? r : []
  }, N(e.id, t, n))
}

function R(e, t, n, r) {
  return A({
    ad_content_id: e,
    creative_type: t
  }, N(e, n, r))
}

function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  if ((0, h.Q)({
      location: b.rE.QUEST_PREVIEW_TOOL
    }) && u.A.getLayers().includes(O.zgK.USER_SETTINGS) || (c.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)) return;
  let i = T.has(e);
  if (n) return o.Ay.trackWithMetadata(e, t, i);
  d.default.track(e, t, {
    flush: i
  })
}

function D(e) {
  let {
    questId: t,
    event: n,
    properties: r,
    trackGuildAndChannelMetadata: i,
    shouldExtendSession: a = false,
    sourceQuestContent: s
  } = e, o = p.A.quests.get(t);
  null == o || P(n, A({}, w(o, s, a), r), i, o.preview)
}

function x(e) {
  let {
    adContentId: t,
    adCreativeType: n,
    event: r,
    properties: i,
    trackGuildAndChannelMetadata: a,
    shouldExtendSession: s = false,
    sourceQuestContent: o
  } = e;
  P(r, A({}, R(t, n, o, s), i), a, false)
}
async function L(e) {
  let {
    questId: t,
    questContent: n,
    questContentCTA: a,
    questContentPosition: s,
    questContentRowIndex: o,
    impressionId: c,
    trackGuildAndChannelMetadata: u,
    sourceQuestContent: d
  } = e, _ = p.A.getQuest(t), h = await (0, i.N)((0, y.jO)(n)), g = (0, m.Li)(n), E = (0, m.L4)(n), b = (0, m.yI)(n, t), v = (0, m.Gp)(n, t);
  D({
    questId: t,
    event: O.HAw.QUEST_CONTENT_CLICKED,
    properties: S(A({}, (0, y.fF)(n, s, o), (0, l.A)()), {
      cta_name: a,
      quest_status: null != _ ? (0, y.NI)(_) : null,
      impression_id: c,
      apple_advertising_id: null != h && (0, f.isIOS)() ? h.advertisingId : null,
      android_advertising_id: null != h && (0, f.isAndroid)() ? h.advertisingId : null,
      click_id: (0, r.A)(),
      metadata_raw: null != g ? g : null,
      metadata_sealed: null != E ? E : null,
      traffic_metadata_raw: null != b ? b : null,
      traffic_metadata_sealed: null != v ? v : null
    }),
    trackGuildAndChannelMetadata: u,
    shouldExtendSession: (0, m.xn)(n),
    sourceQuestContent: d
  })
}

function j(e) {
  let {
    questContent: t,
    sourceQuestContent: n,
    questId: r,
    mode: i,
    prevMode: a
  } = e, s = (0, y.fF)(t);
  D({
    questId: r,
    event: O.HAw.QUEST_BAR_MODE_CHANGED,
    properties: {
      content_id: s.content_id,
      content_name: s.content_name,
      mode: i,
      previous_mode: a
    },
    sourceQuestContent: n
  })
}

function M(e, t) {
  o.Ay.trackWithMetadata(O.HAw.QUEST_EMBED_FALLBACK_VIEWED, {
    quest_id: e,
    reason: t
  })
}