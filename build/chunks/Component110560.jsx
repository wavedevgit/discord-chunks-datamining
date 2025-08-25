/** Chunk was on web.js **/
/** chunk id: 110560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  enrollAndStartVideoQuestWithErrorHandling: () => J,
  loadVideoQuestModal: () => K,
  maybeShowSurveyForQuest: () => W,
  navigateToQuestHome: () => Y,
  openAppWithQuest: () => X,
  openDisclosureModal: () => H,
  openPushToPhoneModal: () => Q,
  openQuestInGameRewardModal: () => Z,
  openQuestMinorEnrollmentBlockModal: () => V,
  openQuestOrbsRewardModal: () => F,
  openQuestsNitroRewardModal: () => B,
  openQuestsRewardCodeModal: () => G,
  openVideoQuestModal: () => z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk772848 = require("./772848.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
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
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = "in-app",
  U = "Discord Widget";

function G(e) {
  let {
    questId: t,
    questContent: i,
    questContentPosition: o,
    preview: a = false,
    previewQuest: l = null,
    sourceQuestContent: c
  } = e;
  (0, s.ZDy)(async () => {
    let {
      default: e
    } = await n.e("61624").then(n.bind(n, 985866));
    return n => (0, r.jsx)(e, k(L({}, n), {
      questId: t,
      questContentPosition: o,
      questContent: i,
      preview: a,
      previewQuest: l,
      sourceQuestContent: c
    }))
  })
}

function B(e, t) {
  var i;
  (null == (i = e.userStatus) ? true : i.claimedAt) == null ? (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("838").then(n.bind(n, 824393));
    return n => (0, r.jsx)(i, k(L({}, n), {
      quest: e,
      location: t
    }))
  }) : (0, d.$)()
}

function Z(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: o
    } = await n.e("88938").then(n.bind(n, 390238));
    return n => (0, r.jsx)(o, k(L({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function F(e, t) {
  (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("20565").then(n.bind(n, 383294));
    return n => (0, r.jsx)(i, k(L({}, n), {
      quest: e,
      location: t
    }))
  })
}

function V(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: o
    } = await n.e("58641").then(n.bind(n, 828664));
    return n => (0, r.jsx)(o, k(L({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function H(e, t) {
  (0, m._3)({
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
    return n => (0, r.jsx)(i, k(L({}, n), {
      questContent: t.content,
      quest: e
    }))
  })
}

function Y() {
  let {
    fromContent: e,
    questId: t
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  (0, Chunk150560.Z.getState().setUtmCurrentContext)({
    utmSourceCurrent: U,
    utmMediumCurrent: M,
    utmCampaignCurrent: exports,
    utmContentCurrent: Object.keys(Chunk497505.jn).find(t => y.jn[t] === e)
  });
  let n = null != exports ? "#".concat(exports) : "";
  Chunk836768.Z.setState({
    selectedTab: Chunk49898.GlobalDiscoveryTab.QUESTS
  }), (0, Chunk37234.xf)(), (0, Chunk703656.uL)(Chunk981631.Z5c.QUEST_HOME + require)
}

function W(e) {
  let t = (0, S.T)({
      quest: e
    }),
    n = {
      location: R.dr.QUESTS_BAR
    };
  if (!(0, T.j)(n)) return;
  let r = (0, A.Z)({
    entityName: e.config.messages.gameTitle
  });
  t.log("Showing survey ".concat(r.id)), (0, C.C)({
    questId: e.id,
    survey: r
  })
}

function K() {
  return Promise.all([require.e("66816"), require.e("32249")]).then(require.bind(require, 536687))
}

function z(e) {
  var t;
  let {
    quest: n,
    questContent: o,
    sourceQuestContent: a,
    sourceQuestContentCTA: l,
    autoplay: c = true,
    skipEnrollmentCheck: u = false
  } = e;
  if ((0, g.HJ)(n)) {
    let e = n.config.features.includes(R.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
      {
        enabled: t
      } = v.S.getCurrentConfig({
        location: R.dr.VIDEO_MODAL
      }, {
        autoTrackExposure: e
      });
    if (t && e) return void Q(n)
  }
  let d = (0, i.Z)();
  if ((0, I.D)(R.dr.VIDEO_MODAL) && !u && (null == (t = n.userStatus) ? true : t.enrolledAt) == null && !(0, g.zi)(n)) {
    b.Z.isEnrolling(n.id) || (0, E.AH)(n.id, {
      questContent: o,
      questContentCTA: m.jZ.ACCEPT_QUEST,
      sourceQuestContent: a
    });
    let e = O.ZP.getState().getVideoProgress(n.id);
    null != e && e.timestampSec > 1 && ((0, E.lx)(n.id), p.default.track(P.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
      quest_id: n.id,
      source_quest_content: (0, m._b)(a),
      source_quest_content_cta: l,
      video_session_id: d
    }))
  }(0, s.ZDy)(async () => {
    let {
      default: e
    } = await K();
    return t => (0, r.jsx)(e, k(L({}, t), {
      openStartClockTime: performance.now(),
      questId: n.id,
      autoplay: c,
      videoSessionId: d,
      sourceQuestContent: a
    }))
  }, {
    modalKey: (0, g.u7)(n.id),
    backdropStyle: s.fCB.IMMERSIVE,
    onCloseCallback: () => (0, g.Mo)({
      questId: n.id,
      sourceQuestContent: a,
      videoSessionId: d
    })
  })
}

function q(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest";
  if ("Android" === n || "iOS" === n) {
    let t = _.default.getFingerprint(),
      n = (0, o.WS)(),
      i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quests/").concat(e);
    return (0, o.ZP)(i, {
      utmSource: r,
      fingerprint: t,
      attemptId: n
    })
  }
  return "discord://"
}

function X(e) {
  let t = q(e),
    n = (0, o.zS)(t);
  null != n && p.default.track(P.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, a.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), h.Z.launch(t, t => {
    t || (0, f.dL)({
      pathname: P.Z5c.QUEST_HOME,
      hash: e
    })
  })
}

function Q(e) {
  (0, s.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("7784"), n.e("33628")]).then(n.bind(n, 570387));
    return n => (0, r.jsx)(t, k(L({}, n), {
      questId: e.id,
      questName: e.config.messages.questName
    }))
  })
}
async function J(e, t) {
  let {
    type: n
  } = await (0, E.AH)(e.id, {
    questContent: t.questContent,
    questContentCTA: t.questContentCTA,
    sourceQuestContent: t.sourceQuestContent,
    questContentPosition: t.questContentPosition,
    questContentRowIndex: t.questContentRowIndex
  });
  switch (n) {
    case E.wF.SUCCESS:
      z({
        quest: e,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        sourceQuestContentCTA: t.sourceQuestContentCTA
      });
      break;
    case E.wF.CAPTCHA_FAILED:
      l.Z.show({
        title: D.intl.string(D.t["/CidxM"]),
        body: D.intl.string(D.t.HQdHg4)
      });
      break;
    case E.wF.UNKNOWN_ERROR:
      l.Z.show({
        title: D.intl.string(D.t.R0RpRU),
        body: D.intl.string(D.t.OXD41N)
      });
    case E.wF.PREVIOUS_IN_FLIGHT_REQUEST:
  }
}