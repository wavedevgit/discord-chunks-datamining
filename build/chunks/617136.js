/** Chunk was on web.js **/
/** chunk id: 617136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ic: () => U,
  O5: () => Z,
  Zk: () => F,
  _3: () => k,
  _F: () => G,
  _b: () => R,
  dA: () => j,
  jZ: () => M,
  mH: () => L,
  uk: () => w
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk516796 = require("./516796.js"),
  Chunk930446 = require("./930446.js"),
  Chunk912471 = require("./912471.js"),
  Chunk367907 = require("./367907.js"),
  Chunk186102 = require("./186102.js"),
  Chunk857192 = require("./857192.js"),
  Chunk819640 = require("./819640.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk727160 = require("./727160.js"),
  Chunk36243 = require("./36243.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Object.keys(Chunk49436.jn),
  P = new Set([Chunk981631.rMx.QUEST_CONTENT_VIEWED, Chunk981631.rMx.QUEST_CONTENT_CLICKED]);

function R(e) {
  var t;
  return null != (t = N.find(t => h.jn[t] === e)) ? t : ""
}

function w(e) {
  var t, n, r;
  return (null == (t = e.userStatus) ? true : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null == (n = e.userStatus) ? true : n.completedAt) != null ? "COMPLETED" : (null == (r = e.userStatus) ? true : r.enrolledAt) != null ? "ENROLLED" : "NONE"
}

function D(e, t) {
  var n, r, i, a;
  let o = g.T.getConfig({
    location: "quest_analytics"
  });
  return t ? o.use_ad_session_id ? e : null != (a = null == (n = (0, s.Ai)()) ? true : n.uuid) ? a : null : null != (i = null == (r = (0, s.Ai)()) ? true : r.uuid) ? i : null
}

function x(e, t, n) {
  var r;
  let i = (0, o.Gy)(n).uuid;
  return T({
    quest_id: e.id,
    quest_type: (0, O.BI)(e.config),
    game_id: e.config.application.id,
    game_name: e.config.application.name,
    application_ids: null != (r = (0, y.MC)(e)) ? r : [],
    client_ad_session_id: i,
    billing_session_id: D(i, (0, b.VB)(t))
  }, (0, b.qe)(e.id, t))
}

function L(e, t, n) {
  return {
    content_id: e,
    content_name: R(e),
    content_position: t,
    row_index: n
  }
}

function j(e) {
  let {
    questId: t,
    event: n,
    properties: r,
    trackGuildAndChannelMetadata: i,
    shouldExtendSession: a = false,
    sourceQuestContent: o
  } = e, s = m.Z.quests.get(t);
  if (null == s || (0, E.X)({
      location: v.dr.QUEST_PREVIEW_TOOL
    }) && d.Z.getLayers().includes(S.S9g.USER_SETTINGS)) return;
  let c = T({}, x(s, o, a), r);
  if (u.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, c), s.preview) return;
  let p = P.has(n);
  if (i) return l.ZP.trackWithMetadata(n, c, p);
  f.default.track(n, c, {
    flush: p
  })
}
var M = function(e) {
  return e.LEARN_MORE = "LEARN_MORE", e.SHOW_REWARD = "SHOW_REWARD", e.CLAIM_REWARD = "CLAIM_REWARD", e.GET_REWARD_CODE = "GET_REWARD_CODE", e.COPY_REWARD_CODE = "COPY_REWARD_CODE", e.ACCEPT_QUEST = "ACCEPT_QUEST", e.COPY_QUEST_URL = "COPY_QUEST_URL", e.MOBILE_SHARESHEET = "MOBILE_SHARESHEET", e.TRACK_PROGRESS = "TRACK_PROGRESS", e.CONNECT_CONSOLE = "CONNECT_CONSOLE", e.CONNECT_CONSOLE_LINK = "CONNECT_CONSOLE_LINK", e.VIEW_CONSOLE_CONNECTIONS = "VIEW_CONSOLE_CONNECTION", e.VIEW_CONSOLE_CONNECTIONS_LINK = "VIEW_CONSOLE_CONNECTIONS_LINK", e.VIEW_REQUIREMENTS = "VIEW_REQUIREMENTS", e.SELECT_CONSOLE_PLATFORM = "SELECT_CONSOLE_PLATFORM", e.SELECT_DESKTOP_PLATFORM = "SELECT_DESKTOP_PLATFORM", e.DESELECT_PLATFORM = "DESELECT_PLATFORM", e.DEFIBRILLATOR = "DEFIBRILLATOR", e.DEFIBRILLATOR_RECONNECT_CONSOLE = "DEFIBRILLATOR_RECONNECT_CONSOLE", e.OPEN_DISCLOSURE = "OPEN_DISCLOSURE", e.WATCH_STREAM = "WATCH_STREAM", e.WATCH_STREAM_CONFIRM = "WATCH_STREAM_CONFIRM", e.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", e.OPEN_GAME_LINK = "OPEN_GAME_LINK", e.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", e.OPEN_QUEST_HOME = "OPEN_QUEST_HOME", e.QUEST_BAR_COPY_LINK = "QUEST_BAR.COPY_LINK", e.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", e.REWARD_MODAL_COPY_LINK = "REWARD_MODAL.COPY_LINK", e.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", e.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", e.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", e.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE", e.HOW_TO_HELP_ARTICLE_XBOX = "HOW_TO_HELP_ARTICLE_XBOX", e.HOW_TO_HELP_ARTICLE_PLAYSTATION = "HOW_TO_HELP_ARTICLE_PLAYSTATION", e.VIEW_QUESTS = "VIEW_QUESTS", e.EXPAND = "EXPAND", e.COLLAPSE = "COLLAPSE", e.START_QUEST = "START_QUEST", e.TRANSCRIPT_ENABLE = "TRANSCRIPT_ENABLE", e.TRANSCRIPT_DISABLE = "TRANSCRIPT_DISABLE", e.CLOSED_CAPTIONING_ENABLE = "CLOSED_CAPTIONING_ENABLE", e.CLOSED_CAPTIONING_DISABLE = "CLOSED_CAPTIONING_DISABLE", e.SEEK_BACKWARD = "SEEK_BACKWARD", e.SEEK_FORWARD = "SEEK_FORWARD", e.WATCH_VIDEO = "WATCH_VIDEO", e.QUEST_BAR_VIDEO_QUEST_PREVIEW = "QUEST_BAR_VIDEO_QUEST_PREVIEW", e.QUEST_HOME_TILE_HEADER_WATCH_VIDEO = "QUEST_HOME_TILE_HEADER_WATCH_VIDEO", e.REDEEM_REWARD = "REDEEM_REWARD", e.VISIT_REDEMPTION_LINK = "VISIT_REDEMPTION_LINK", e.SPONSORED_QUEST_SHEET = "SPONSORED_QUEST_SHEET", e.GAME_PROFILE_OPEN = "GAME_PROFILE_OPEN", e.GAME_STORE_OPEN_GAME_LINK = "GAME_STORE_OPEN_GAME_LINK", e.MOBILE_ORBS_ONBOARDING_DC = "MOBILE_ORBS_ONBOARDING_DC", e
}({});
async function k(e) {
  let {
    questId: t,
    questContent: n,
    questContentCTA: r,
    questContentPosition: o,
    questContentRowIndex: s,
    impressionId: l,
    trackGuildAndChannelMetadata: u = false,
    sourceQuestContent: d
  } = e, f = m.Z.getQuest(t), _ = await (0, a.S)(R(n)), h = (0, b.jY)(n), g = (0, b.R_)(n);
  j({
    questId: t,
    event: S.rMx.QUEST_CONTENT_CLICKED,
    properties: A(T({}, L(n, o, s), (0, c.Z)()), {
      cta_name: r,
      quest_status: null != f ? w(f) : null,
      impression_id: l,
      apple_advertising_id: null != _ && (0, p.isIOS)() ? _.advertisingId : null,
      android_advertising_id: null != _ && (0, p.isAndroid)() ? _.advertisingId : null,
      click_id: (0, i.Z)(),
      metadata_raw: null != h ? h : null,
      metadata_sealed: null != g ? g : null
    }),
    trackGuildAndChannelMetadata: u,
    shouldExtendSession: (0, b.VB)(n),
    sourceQuestContent: d
  })
}

function U(e) {
  let {
    questContent: t,
    sourceQuestContent: n,
    questId: r,
    mode: i,
    prevMode: a
  } = e, o = L(t);
  j({
    questId: r,
    event: S.rMx.QUEST_BAR_MODE_CHANGED,
    properties: {
      content_id: o.content_id,
      content_name: o.content_name,
      mode: i,
      previous_mode: a
    },
    sourceQuestContent: n
  })
}

function G() {
  let e = (0, _.WD)();
  return r.useCallback(t => {
    j(A(T({}, t), {
      properties: A(T({}, t.properties), {
        impression_id: null == e ? true : e.getId()
      })
    }))
  }, [e])
}

function Z() {
  let e = G();
  return r.useCallback(t => {
    let {
      questId: n,
      questContent: r,
      questContentCTA: o,
      questContentPosition: s,
      questContentRowIndex: l,
      trackGuildAndChannelMetadata: u = false,
      sourceQuestContent: d
    } = t, f = m.Z.getQuest(n), _ = (0, b.jY)(r), h = (0, b.R_)(r);
    (0, a.S)(R(r)).then(t => {
      e({
        questId: n,
        event: S.rMx.QUEST_CONTENT_CLICKED,
        properties: A(T({}, L(r, s, l), (0, c.Z)()), {
          cta_name: o,
          quest_status: null != f ? w(f) : null,
          click_id: (0, i.Z)(),
          apple_advertising_id: null != t && (0, p.isIOS)() ? t.advertisingId : null,
          android_advertising_id: null != t && (0, p.isAndroid)() ? t.advertisingId : null,
          metadata_raw: null != _ ? _ : null,
          metadata_sealed: null != h ? h : null
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, b.VB)(r),
        sourceQuestContent: d
      })
    })
  }, [e])
}

function F(e, t) {
  r.useEffect(() => {
    B(t, e)
  }, [e, t])
}

function B(e, t) {
  l.ZP.trackWithMetadata(S.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
    quest_id: e,
    reason: t
  })
}