/** Chunk was on web.js **/
/** chunk id: 110560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  enrollAndStartVideoQuestWithErrorHandling: () => ea,
  loadVideoQuestModal: () => J,
  maybeShowSurveyForQuest: () => Q,
  navigateToQuestHome: () => q,
  openAppWithQuest: () => et,
  openAppWithQuestPreview: () => er,
  openDisclosureModal: () => z,
  openPushToPhoneModal: () => ei,
  openQuestCollectibleRewardModal: () => W,
  openQuestInGameRewardModal: () => H,
  openQuestMinorEnrollmentBlockModal: () => K,
  openQuestOrbsRewardModal: () => Y,
  openQuestsNitroRewardModal: () => V,
  openQuestsRewardCodeModal: () => F,
  openVideoQuestModal: () => $
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk772848 = require("./772848.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk836768 = require("./836768.js"),
  Chunk98278 = require("./98278.js"),
  Chunk703656 = require("./703656.js"),
  Chunk342386 = require("./342386.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk530691 = require("./530691.js"),
  Chunk66340 = require("./66340.js"),
  Chunk862847 = require("./862847.js"),
  Chunk5881 = require("./5881.js"),
  Chunk323811 = require("./323811.js"),
  Chunk492112 = require("./492112.js"),
  Chunk566078 = require("./566078.js"),
  Chunk61115 = require("./61115.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = "in-app",
  Z = "Discord Widget";

function F(e) {
  let {
    quest: t,
    questContent: i,
    questContentPosition: a,
    preview: o = false,
    previewQuest: l = null,
    sourceQuestContent: c
  } = e;
  (0, s.ZDy)(async () => {
    let e = (0, C.i)("openQuestsRewardCodeModal"),
      s = R.r.build(t.config).rewardPlatforms.length > 1;
    if (e && !s) {
      let {
        default: e
      } = await Promise.all([n.e("64838"), n.e("52407"), n.e("17013"), n.e("96861")]).then(n.bind(n, 188209));
      return n => (0, r.jsx)(e, G(k({}, n), {
        quest: t,
        preview: o,
        sourceQuestContent: c,
        questContentPosition: a
      }))
    }
    let {
      default: u
    } = await Promise.all([n.e("64838"), n.e("52407"), n.e("17013"), n.e("61624")]).then(n.bind(n, 985866));
    return e => (0, r.jsx)(u, G(k({}, e), {
      questId: t.id,
      questContentPosition: a,
      questContent: i,
      preview: o,
      previewQuest: l,
      sourceQuestContent: c
    }))
  })
}

function V(e, t) {
  var i;
  (null == (i = e.userStatus) ? true : i.claimedAt) == null ? (0, s.ZDy)(async () => {
    let {
      default: i
    } = await n.e("838").then(n.bind(n, 824393));
    return n => (0, r.jsx)(i, G(k({}, n), {
      quest: e,
      location: t
    }))
  }) : (0, u.$)()
}

function H(e, t, i) {
  (0, s.ZDy)(async () => {
    if ((0, C.i)("openQuestInGameRewardModal")) {
      let {
        default: a
      } = await n.e("76418").then(n.bind(n, 34251));
      return n => (0, r.jsx)(a, G(k({}, n), {
        quest: e,
        location: t,
        sourceQuestContent: i
      }))
    }
    let {
      default: a
    } = await n.e("88938").then(n.bind(n, 390238));
    return n => (0, r.jsx)(a, G(k({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function Y(e, t, i) {
  (0, s.ZDy)(async () => {
    if ((0, C.i)("openQuestOrbsRewardModal")) {
      let {
        default: a
      } = await n.e("74560").then(n.bind(n, 246855));
      return n => (0, r.jsx)(a, G(k({}, n), {
        quest: e,
        sourceQuestContent: i,
        location: t
      }))
    }
    let {
      default: a
    } = await Promise.all([n.e("93964"), n.e("13025")]).then(n.bind(n, 383294));
    return n => (0, r.jsx)(a, G(k({}, n), {
      quest: e,
      location: t
    }))
  })
}

function W(e, t, i, a) {
  (0, s.ZDy)(async () => {
    if ((0, C.i)("openQuestCollectibleRewardModal")) {
      let {
        default: o
      } = await n.e("41023").then(n.bind(n, 305815));
      return n => (0, r.jsx)(o, G(k({}, n), {
        quest: e,
        sourceQuestContent: i,
        location: t,
        preview: a
      }))
    }
    let {
      default: o
    } = await Promise.all([n.e("79589"), n.e("83175")]).then(n.bind(n, 920916));
    return n => (0, r.jsx)(o, G(k({}, n), {
      quest: e,
      location: t,
      preview: a
    }))
  })
}

function K(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("58641").then(n.bind(n, 828664));
    return n => (0, r.jsx)(a, G(k({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function z(e, t) {
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
    return n => (0, r.jsx)(i, G(k({}, n), {
      questContent: t.content,
      quest: e
    }))
  })
}

function q() {
  let {
    fromContent: e,
    questId: t,
    forceDiscoveryQuestHomeRoute: n = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  (0, Chunk150560.Z.getState().setUtmCurrentContext)({
    utmSourceCurrent: Z,
    utmMediumCurrent: B,
    utmCampaignCurrent: exports,
    utmContentCurrent: Object.keys(Chunk497505.jn).find(t => y.jn[t] === e)
  });
  let r = null != exports ? "#".concat(exports) : "",
    {
      enabled: i
    } = Chunk937797.m8.getConfig({
      location: Chunk46140.dr.NAVIGATE_TO_QUEST_HOME_UTIL
    }),
    a = Chunk772848 && !require;
  Chunk271579 || Chunk836768.Z.setState({
    selectedTab: Chunk49898.GlobalDiscoveryTab.QUESTS
  }), (0, Chunk342386.default)(), (0, Chunk703656.uL)((Chunk271579 ? Chunk981631.Z5c.QUEST_HOME_V2 : Chunk981631.Z5c.QUEST_HOME) + Chunk951288)
}
let X = .2;

function Q(e) {
  let t = (0, A.T)({
      quest: e
    }),
    n = {
      location: D.dr.QUESTS_BAR
    };
  if (!(0, S.j)(n) || Math.random() > X) return;
  let r = (0, N.Z)(e);
  t.log("Showing survey ".concat(r.id)), (0, P.C)({
    questId: e.id,
    survey: r
  })
}

function J() {
  return Promise.all([require.e("13193"), require.e("52407"), require.e("32249"), require.e("89828")]).then(require.bind(require, 536687))
}

function $(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: o,
    sourceQuestContentCTA: l,
    autoplay: c = true,
    skipEnrollmentCheck: u = false
  } = e;
  if ((0, g.HJ)(n)) {
    let e = n.config.features.includes(D.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE),
      {
        enabled: t
      } = I.S.getCurrentConfig({
        location: D.dr.VIDEO_MODAL
      }, {
        autoTrackExposure: e
      });
    if (t && e) return void ei(n)
  }
  let d = (0, i.Z)();
  if ((0, T.D)(D.dr.VIDEO_MODAL) && !u && (null == (t = n.userStatus) ? true : t.enrolledAt) == null && !(0, g.zi)(n)) {
    b.Z.isEnrolling(n.id) || (0, E.AH)(n.id, {
      questContent: a,
      questContentCTA: m.jZ.ACCEPT_QUEST,
      sourceQuestContent: o
    });
    let e = O.ZP.getState().getVideoProgress(n.id);
    null != e && e.timestampSec > 1 && ((0, E.lx)(n.id), p.default.track(L.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
      quest_id: n.id,
      source_quest_content: (0, m._b)(o),
      source_quest_content_cta: l,
      video_session_id: d
    }))
  }(0, s.ZDy)(async () => {
    let {
      default: e
    } = await J();
    return t => (0, r.jsx)(e, G(k({}, t), {
      openStartClockTime: performance.now(),
      questId: n.id,
      autoplay: c,
      videoSessionId: d,
      sourceQuestContent: o
    }))
  }, {
    modalKey: (0, g.u7)(n.id),
    backdropStyle: s.fCB.IMMERSIVE,
    onCloseCallback: () => (0, g.Mo)({
      questId: n.id,
      sourceQuestContent: o,
      videoSessionId: d
    })
  })
}

function ee(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest";
  if ("Android" === n || "iOS" === n) {
    let t = _.default.getFingerprint(),
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

function et(e) {
  let t = ee(e),
    n = (0, a.zS)(t);
  null != n && p.default.track(L.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, o.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), h.Z.launch(t, t => {
    if (!t) {
      let {
        enabled: t
      } = v.m8.getConfig({
        location: D.dr.QUEST_DEEP_LINK_UTIL
      });
      (0, d.dL)({
        pathname: t ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME,
        hash: e
      })
    }
  })
}

function en(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest-preview";
  if ("Android" === n || "iOS" === n) {
    let t = _.default.getFingerprint(),
      n = (0, a.WS)(),
      i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quest-preview/").concat(e);
    return (0, a.ZP)(i, {
      utmSource: r,
      fingerprint: t,
      attemptId: n
    })
  }
  return "discord://"
}

function er(e) {
  let t = en(e),
    n = (0, a.zS)(t);
  null != n && p.default.track(L.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, o.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), h.Z.launch(t, t => {
    if (!t) {
      let {
        enabled: t
      } = v.m8.getConfig({
        location: D.dr.QUEST_DEEP_LINK_UTIL
      });
      (0, d.dL)({
        pathname: t ? L.Z5c.QUEST_HOME_V2 : L.Z5c.QUEST_HOME,
        hash: e
      })
    }
  })
}

function ei(e) {
  (0, s.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("54569"), n.e("16794")]).then(n.bind(n, 570387));
    return n => (0, r.jsx)(t, G(k({}, n), {
      questId: e.id,
      questName: e.config.messages.questName
    }))
  })
}
async function ea(e, t) {
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
      $({
        quest: e,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        sourceQuestContentCTA: t.sourceQuestContentCTA
      });
      break;
    case E.wF.CAPTCHA_FAILED:
      l.Z.show({
        title: M.intl.string(M.t["/CidxO"]),
        body: M.intl.string(M.t.HQdHg6)
      });
      break;
    case E.wF.UNKNOWN_ERROR:
      l.Z.show({
        title: M.intl.string(M.t.R0RpRX),
        body: M.intl.string(M.t.OXD41D)
      });
    case E.wF.PREVIOUS_IN_FLIGHT_REQUEST:
  }
}