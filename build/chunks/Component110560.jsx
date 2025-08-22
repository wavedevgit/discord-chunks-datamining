/** Chunk was on web.js **/
/** chunk id: 110560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  loadVideoQuestModal: () => Y,
  maybeShowSurveyForQuest: () => H,
  navigateToQuestHome: () => F,
  openAppWithQuest: () => z,
  openDisclosureModal: () => V,
  openPushToPhoneModal: () => q,
  openQuestInGameRewardModal: () => G,
  openQuestMinorEnrollmentBlockModal: () => Z,
  openQuestOrbsRewardModal: () => B,
  openQuestsNitroRewardModal: () => U,
  openQuestsRewardCodeModal: () => k,
  openVideoQuestModal: () => W
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk772848 = require("./772848.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk836768 = require("./836768.js"),
  Chunk98278 = require("./98278.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk530691 = require("./530691.js"),
  Chunk66340 = require("./66340.js"),
  Chunk862847 = require("./862847.js"),
  Chunk5881 = require("./5881.js"),
  Chunk492112 = require("./492112.js"),
  Chunk61115 = require("./61115.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = "in-app",
  M = "Discord Widget";

function k(e) {
  let {
    questId: t,
    questContent: i,
    questContentPosition: a,
    preview: o = false,
    previewQuest: l = null,
    sourceQuestContent: c
  } = e;
  (0, s.ZDy)(async () => {
    let {
      default: e
    } = await n.e("61624").then(n.bind(n, 985866));
    return n => (0, r.jsx)(e, L(D({}, n), {
      questId: t,
      questContentPosition: a,
      questContent: i,
      preview: o,
      previewQuest: l,
      sourceQuestContent: c
    }))
  })
}

function U(e, t) {
  var i;
  (null == (i = e.userStatus) ? true : i.claimedAt) == null ? (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("838").then(n.bind(n, 824393));
    return n => (0, r.jsx)(i, L(D({}, n), {
      quest: e,
      location: t
    }))
  }) : (0, u.$)()
}

function G(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("88938").then(n.bind(n, 390238));
    return n => (0, r.jsx)(a, L(D({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function B(e, t) {
  (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("20565").then(n.bind(n, 383294));
    return n => (0, r.jsx)(i, L(D({}, n), {
      quest: e,
      location: t
    }))
  })
}

function Z(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("58641").then(n.bind(n, 828664));
    return n => (0, r.jsx)(a, L(D({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function V(e, t) {
  (0, h._3)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("4266").then(n.bind(n, 316210));
    return n => (0, r.jsx)(i, L(D({}, n), {
      questContent: t.content,
      quest: e
    }))
  })
}

function F() {
  let {
    fromContent: e,
    questId: t
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  (0, Chunk150560.Z.getState().setUtmCurrentContext)({
    utmSourceCurrent: M,
    utmMediumCurrent: j,
    utmCampaignCurrent: exports,
    utmContentCurrent: Object.keys(Chunk497505.jn).find(t => b.jn[t] === e)
  });
  let n = null != exports ? "#".concat(exports) : "";
  Chunk836768.Z.setState({
    selectedTab: Chunk49898.GlobalDiscoveryTab.QUESTS
  }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.QUEST_HOME + require)
}

function H(e) {
  let t = (0, T.T)({
      quest: e
    }),
    n = {
      location: N.dr.QUESTS_BAR
    };
  if (!(0, I.j)(n)) return;
  let r = (0, S.Z)({
    entityName: e.config.messages.gameTitle
  });
  t.log("Showing survey ".concat(r.id)), (0, A.C)({
    questId: e.id,
    survey: r
  })
}

function Y() {
  return Promise.all([require.e("66816"), require.e("32249")]).then(require.bind(require, 536687))
}

function W(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: o,
    sourceQuestContentCTA: l,
    autoplay: c = true,
    skipEnrollmentCheck: u = false
  } = e;
  if ((0, m.HJ)(n)) {
    let e = n.config.features.includes(N.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
      {
        enabled: t
      } = O.S.getCurrentConfig({
        location: N.dr.VIDEO_MODAL
      }, {
        autoTrackExposure: e
      });
    if (t && e) return void q(n)
  }
  let d = (0, i.Z)();
  if ((0, v.D)(N.dr.VIDEO_MODAL) && !u && (null == (t = n.userStatus) ? true : t.enrolledAt) == null && !(0, m.zi)(n)) {
    E.Z.isEnrolling(n.id) || (0, g.AH)(n.id, {
      questContent: a,
      questContentCTA: h.jZ.ACCEPT_QUEST,
      sourceQuestContent: o
    });
    let e = y.ZP.getState().getVideoProgress(n.id);
    null != e && e.timestampSec > 1 && ((0, g.lx)(n.id), _.default.track(R.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
      quest_id: n.id,
      source_quest_content: (0, h._b)(o),
      source_quest_content_cta: l,
      video_session_id: d
    }))
  }(0, s.ZDy)(async () => {
    let {
      default: e
    } = await Y();
    return t => (0, r.jsx)(e, L(D({}, t), {
      openStartClockTime: performance.now(),
      questId: n.id,
      autoplay: c,
      videoSessionId: d,
      sourceQuestContent: o
    }))
  }, {
    modalKey: (0, m.u7)(n.id),
    backdropStyle: s.fCB.IMMERSIVE,
    onCloseCallback: () => (0, m.Mo)({
      questId: n.id,
      sourceQuestContent: o,
      videoSessionId: d
    })
  })
}

function K(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest";
  if ("Android" === n || "iOS" === n) {
    let t = f.default.getFingerprint(),
      n = (0, a.WS)(),
      i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quests/").concat(e);
    return (0, a.ZP)(i, {
      utmSource: r,
      fingerprint: t,
      attemptId: n
    })
  }
  return "discord://"
}

function z(e) {
  let t = K(e),
    n = (0, a.zS)(t);
  null != n && _.default.track(R.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, o.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), p.Z.launch(t, t => {
    t || (0, d.dL)({
      pathname: R.Z5c.QUEST_HOME,
      hash: e
    })
  })
}

function q(e) {
  (0, s.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("7784"), n.e("33628")]).then(n.bind(n, 570387));
    return n => (0, r.jsx)(t, L(D({}, n), {
      questId: e.id,
      questName: e.config.messages.questName
    }))
  })
}