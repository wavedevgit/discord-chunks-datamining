/** Chunk was on web.js **/
/** chunk id: 561844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DZ: () => G,
  Mm: () => U,
  Qg: () => L,
  Y5: () => j,
  av: () => D,
  vK: () => k
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
  let s = _.e.getConfig({
    location: "quest_analytics"
  });
  return t ? s.use_ad_session_id ? e : null != (n = null == (r = (0, o.Vc)()) ? true : r.uuid) ? n : null : null != (i = null == (a = (0, o.Vc)()) ? true : a.uuid) ? i : null
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
  if (n) return s.Ay.trackWithMetadata(e, t, i);
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
    sourceQuestContent: o
  } = e, s = p.A.quests.get(t);
  null == s || P(n, A({}, w(s, o, a), r), i, s.preview)
}

function L(e) {
  let {
    adContentId: t,
    adCreativeType: n,
    event: r,
    properties: i,
    trackGuildAndChannelMetadata: a,
    shouldExtendSession: o = false,
    sourceQuestContent: s
  } = e;
  P(r, A({}, R(t, n, s, o), i), a, false)
}
async function x(e) {
  let t = await (0, i.N)((0, y.jO)(e));
  return {
    adUser: t,
    adMetadataRaw: (0, m.Li)(e),
    adMetadataSealed: (0, m.L4)(e)
  }
}
async function M(e) {
  let {
    questContent: t,
    questContentPosition: n,
    questContentRowIndex: i,
    questContentCTA: a,
    impressionId: o
  } = e, {
    adUser: s,
    adMetadataRaw: c,
    adMetadataSealed: u
  } = await x(t);
  return S(A({}, (0, y.fF)(t, n, i), (0, l.A)()), {
    cta_name: a,
    impression_id: o,
    apple_advertising_id: null != s && (0, f.isIOS)() ? s.advertisingId : null,
    android_advertising_id: null != s && (0, f.isAndroid)() ? s.advertisingId : null,
    click_id: (0, r.A)(),
    metadata_raw: null != c ? c : null,
    metadata_sealed: null != u ? u : null
  })
}
async function j(e) {
  let {
    questId: t,
    questContent: n,
    questContentCTA: r,
    questContentPosition: i,
    questContentRowIndex: a,
    impressionId: o,
    trackGuildAndChannelMetadata: s,
    sourceQuestContent: l
  } = e, c = p.A.getQuest(t), u = (0, m.yI)(n, t), d = (0, m.Gp)(n, t);
  D({
    questId: t,
    event: O.HAw.QUEST_CONTENT_CLICKED,
    properties: S(A({}, await M({
      questContent: n,
      questContentPosition: i,
      questContentRowIndex: a,
      questContentCTA: r,
      impressionId: o
    })), {
      quest_status: null != c ? (0, y.NI)(c) : null,
      traffic_metadata_raw: null != u ? u : null,
      traffic_metadata_sealed: null != d ? d : null
    }),
    trackGuildAndChannelMetadata: s,
    shouldExtendSession: (0, m.xn)(n),
    sourceQuestContent: l
  })
}
async function k(e) {
  let {
    adContentId: t,
    adCreativeType: n,
    questContent: r,
    questContentCTA: i,
    questContentPosition: a,
    questContentRowIndex: o,
    impressionId: s,
    trackGuildAndChannelMetadata: l,
    sourceQuestContent: c
  } = e;
  L({
    adContentId: t,
    adCreativeType: n,
    event: O.HAw.QUEST_CONTENT_CLICKED,
    properties: await M({
      questContent: r,
      questContentPosition: a,
      questContentRowIndex: o,
      questContentCTA: i,
      impressionId: s
    }),
    trackGuildAndChannelMetadata: l,
    shouldExtendSession: (0, m.xn)(r),
    sourceQuestContent: c
  })
}

function U(e) {
  let {
    questContent: t,
    sourceQuestContent: n,
    questId: r,
    mode: i,
    prevMode: a
  } = e, o = (0, y.fF)(t);
  D({
    questId: r,
    event: O.HAw.QUEST_BAR_MODE_CHANGED,
    properties: {
      content_id: o.content_id,
      content_name: o.content_name,
      mode: i,
      previous_mode: a
    },
    sourceQuestContent: n
  })
}

function G(e, t) {
  s.Ay.trackWithMetadata(O.HAw.QUEST_EMBED_FALLBACK_VIEWED, {
    quest_id: e,
    reason: t
  })
}