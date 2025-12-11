/** Chunk was on web.js **/
/** chunk id: 110560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  enrollAndStartVideoQuestWithErrorHandling: () => en,
  getPrimaryCtaIcon: () => er,
  loadVideoQuestModal: () => q,
  maybeShowSurveyForQuest: () => z,
  navigateToQuestHome: () => W,
  openAppWithQuest: () => J,
  openAppWithQuestPreview: () => ee,
  openDisclosureModal: () => Y,
  openPushToPhoneModal: () => et,
  openQuestCollectibleRewardModal: () => V,
  openQuestInGameRewardModal: () => F,
  openQuestMinorEnrollmentBlockModal: () => H,
  openQuestOrbsRewardModal: () => B,
  openQuestsRewardCodeModal: () => Z,
  openVideoQuestModal: () => Q
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk772848 = require("./772848.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk836768 = require("./836768.js"),
  Chunk703656 = require("./703656.js"),
  Chunk342386 = require("./342386.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk775065 = require("./775065.js"),
  Chunk535584 = require("./535584.js"),
  Chunk66340 = require("./66340.js"),
  Chunk492112 = require("./492112.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk542347 = require("./542347.js"),
  Chunk61115 = require("./61115.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = "in-app",
  G = "Discord Widget";

function Z(e) {
  let {
    quest: t,
    sourceQuestContent: i
  } = e;
  (0, s.ZDy)(async () => {
    let {
      default: e
    } = await n.e("96861").then(n.bind(n, 188209));
    return n => (0, r.jsx)(e, k(j({}, n), {
      initialQuest: t,
      sourceQuestContent: i
    }))
  })
}

function F(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("76418").then(n.bind(n, 34251));
    return n => (0, r.jsx)(a, k(j({}, n), {
      initialQuest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function B(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("74560").then(n.bind(n, 246855));
    return n => (0, r.jsx)(a, k(j({}, n), {
      initialQuest: e,
      sourceQuestContent: i,
      location: t
    }))
  })
}

function V(e, t, i, a) {
  (0, s.ZDy)(async () => {
    let {
      default: o
    } = await n.e("41023").then(n.bind(n, 305815));
    return n => (0, r.jsx)(o, k(j({}, n), {
      initialQuest: e,
      sourceQuestContent: i,
      location: t,
      preview: a
    }))
  })
}

function H(e, t, i) {
  (0, s.ZDy)(async () => {
    let {
      default: a
    } = await n.e("52040").then(n.bind(n, 636494));
    return n => (0, r.jsx)(a, k(j({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function Y(e, t) {
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
    } = await n.e("27333").then(n.bind(n, 404088));
    return n => (0, r.jsx)(i, k(j({}, n), {
      questContent: t.content,
      quest: e
    }))
  })
}

function W() {
  let {
    fromContent: e,
    questId: t,
    forceDiscoveryQuestHomeRoute: n = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  (0, Chunk150560.Z.getState().setUtmCurrentContext)({
    utmSourceCurrent: G,
    utmMediumCurrent: U,
    utmCampaignCurrent: exports,
    utmContentCurrent: Object.keys(Chunk49436.jn).find(t => E.jn[t] === e)
  });
  let r = null != exports ? "#".concat(exports) : "";
  require && Chunk836768.Z.setState({
    selectedTab: Chunk49898.GlobalDiscoveryTab.QUESTS
  }), (0, Chunk342386.default)(), (0, Chunk703656.uL)((require ? Chunk981631.Z5c.QUEST_HOME : Chunk981631.Z5c.QUEST_HOME_V2) + Chunk54381)
}
let K = .2;

function z(e) {
  let t = (0, O.T)({
      quest: e
    }),
    n = {
      location: R.dr.QUESTS_BAR
    };
  if (!(0, y.j)(n) || Math.random() > K) return;
  let r = (0, S.Z)(e);
  t.log("Showing survey ".concat(r.id)), (0, N.C)({
    questId: e.id,
    survey: r
  })
}

function q() {
  return Promise.all([require.e("13193"), require.e("75909"), require.e("11941")]).then(require.bind(require, 215113))
}

function Q(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: o,
    sourceQuestContentCTA: l,
    autoplay: c = true,
    skipEnrollmentCheck: u = false
  } = e;
  if ((0, T.HJ)(n)) return void et(n);
  let d = (0, i.Z)();
  if ((0, v.D)(R.dr.VIDEO_MODAL) && !u && (null == (t = n.userStatus) ? true : t.enrolledAt) == null && !(0, I.zi)(n)) {
    g.Z.isEnrolling(n.id) || (0, m.AH)(n.id, {
      questContent: a,
      questContentCTA: h.jZ.ACCEPT_QUEST,
      sourceQuestContent: o
    });
    let e = b.ZP.getState().getVideoProgress(n.id);
    null != e && e.timestampSec > 1 && ((0, m.lx)(n.id), p.default.track(w.rMx.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
      quest_id: n.id,
      source_quest_content: (0, h._b)(o),
      source_quest_content_cta: l,
      video_session_id: d
    }))
  }(0, s.ZDy)(async () => {
    let {
      default: e
    } = await q();
    return t => (0, r.jsx)(e, k(j({}, t), {
      openStartClockTime: performance.now(),
      questId: n.id,
      autoplay: c,
      videoSessionId: d,
      sourceQuestContent: o
    }))
  }, {
    modalKey: (0, A.u7)(n.id),
    backdropStyle: s.fCB.IMMERSIVE,
    onCloseCallback: () => (0, A.Mo)({
      questId: n.id,
      sourceQuestContent: o,
      videoSessionId: d
    })
  })
}

function X(e) {
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

function J(e) {
  let t = X(e),
    n = (0, a.zS)(t);
  null != n && p.default.track(w.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, o.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.Z.launch(t, t => {
    t || (0, u.dL)({
      pathname: w.Z5c.QUEST_HOME_V2,
      hash: e
    })
  })
}

function $(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest-preview";
  if ("Android" === n || "iOS" === n) {
    let t = f.default.getFingerprint(),
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

function ee(e) {
  let t = $(e),
    n = (0, a.zS)(t);
  null != n && p.default.track(w.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, o.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.Z.launch(t, t => {
    t || (0, u.dL)({
      pathname: w.Z5c.QUEST_HOME_V2,
      hash: e
    })
  })
}

function et(e) {
  (0, s.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("10695"), n.e("53145")]).then(n.bind(n, 627080));
    return n => (0, r.jsx)(t, k(j({}, n), {
      questId: e.id,
      questName: e.config.messages.questName
    }))
  })
}
async function en(e, t) {
  let {
    type: n
  } = await (0, m.AH)(e.id, {
    questContent: t.questContent,
    questContentCTA: t.questContentCTA,
    sourceQuestContent: t.sourceQuestContent,
    questContentPosition: t.questContentPosition,
    questContentRowIndex: t.questContentRowIndex
  });
  switch (n) {
    case m.wF.SUCCESS:
      Q({
        quest: e,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        sourceQuestContentCTA: t.sourceQuestContentCTA
      });
      break;
    case m.wF.CAPTCHA_FAILED:
      l.Z.show({
        title: x.intl.string(x.t["/CidxO"]),
        body: x.intl.string(x.t.HQdHg6)
      });
      break;
    case m.wF.UNKNOWN_ERROR:
      l.Z.show({
        title: x.intl.string(x.t.R0RpRX),
        body: x.intl.string(x.t.OXD41D)
      });
    case m.wF.PREVIOUS_IN_FLIGHT_REQUEST:
  }
}

function er(e) {
  if ((0, C.Rt)(e)) return e.config.features.includes(R.S7.CLOUD_GAMING_ACTIVITY) ? s.v3n : s.iWm
}