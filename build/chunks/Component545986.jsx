/** Chunk was on web.js **/
/** chunk id: 545986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Df: () => F,
  Fy: () => ee,
  Oz: () => en,
  QA: () => Q,
  Zc: () => Y,
  cf: () => V,
  d5: () => Z,
  e0: () => et,
  hJ: () => B,
  l9: () => q,
  m6: () => H,
  navigateToQuestHome: () => W,
  q$: () => $,
  rx: () => G,
  z6: () => z
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk835245 = require("./835245.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk726845 = require("./726845.js"),
  Chunk976860 = require("./976860.js"),
  Chunk12901 = require("./12901.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk877062 = require("./877062.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk972495 = require("./972495.js"),
  Chunk943849 = require("./943849.js"),
  Chunk437343 = require("./437343.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk753386 = require("./753386.js"),
  Chunk964168 = require("./964168.jsx"),
  Chunk419818 = require("./419818.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx");

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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = "in-app",
  U = "Discord Widget";

function G(e) {
  let {
    quest: t,
    sourceQuestContent: i
  } = e;
  (0, o.mMO)(async () => {
    let {
      default: e
    } = await n.e("67299").then(n.bind(n, 975726));
    return n => (0, r.jsx)(e, M(L({}, n), {
      initialQuest: t,
      sourceQuestContent: i
    }))
  })
}

function V(e, t, i) {
  (0, o.mMO)(async () => {
    let {
      default: a
    } = await n.e("26747").then(n.bind(n, 529398));
    return n => (0, r.jsx)(a, M(L({}, n), {
      initialQuest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function F(e, t, i) {
  (0, o.mMO)(async () => {
    let {
      default: a
    } = await n.e("67426").then(n.bind(n, 268473));
    return n => (0, r.jsx)(a, M(L({}, n), {
      initialQuest: e,
      sourceQuestContent: i,
      location: t
    }))
  })
}

function B(e, t, i, a) {
  (0, o.mMO)(async () => {
    let {
      default: s
    } = await n.e("90948").then(n.bind(n, 651663));
    return n => (0, r.jsx)(s, M(L({}, n), {
      initialQuest: e,
      sourceQuestContent: i,
      location: t,
      preview: a
    }))
  })
}

function H(e, t, i) {
  (0, o.mMO)(async () => {
    let {
      default: a
    } = await n.e("81169").then(n.bind(n, 124232));
    return n => (0, r.jsx)(a, M(L({}, n), {
      quest: e,
      location: t,
      sourceQuestContent: i
    }))
  })
}

function Y(e, t) {
  (0, m.Y5)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, o.mMO)(async () => {
    let {
      default: i
    } = await n.e("132").then(n.bind(n, 348559));
    return n => (0, r.jsx)(i, M(L({}, n), {
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
  (0, N.A.getState().setUtmCurrentContext)({
    utmSourceCurrent: U,
    utmMediumCurrent: k,
    utmCampaignCurrent: t,
    utmContentCurrent: Object.keys(E.uF).find(t => E.uF[t] === e)
  });
  let r = null != t ? "#".concat(t) : "";
  n && c.A.setState({
    selectedTab: P.GlobalDiscoveryTab.QUESTS
  }), (0, d.default)(), (0, u.pX)((n ? R.BVt.QUEST_HOME : R.BVt.QUEST_HOME_V2) + r)
}
let K = .2;

function z(e) {
  let t = (0, O.L)({
      quest: e
    }),
    n = {
      location: w.rE.QUESTS_BAR
    };
  if (!(0, b.l)(n) || Math.random() > K) return;
  let r = (0, v.A)(e);
  t.log("Showing survey ".concat(r.id)), (0, C.m)({
    questId: e.id,
    survey: r
  })
}

function q() {
  return Promise.all([n.e("35584"), n.e("23628"), n.e("29")]).then(n.bind(n, 717415))
}

function Z(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: s,
    sourceQuestContentCTA: l,
    autoplay: c = true,
    skipEnrollmentCheck: u = false
  } = e;
  if ((0, I.BS)(n)) return void ee(n);
  let d = (0, i.A)();
  if (!u && (null == (t = n.userStatus) ? true : t.enrolledAt) == null && !(0, A.Ic)(n)) {
    g.A.isEnrolling(n.id) || (0, h.Oy)(n.id, {
      questContent: a,
      questContentCTA: m.Cy.ACCEPT_QUEST,
      sourceQuestContent: s
    });
    let e = y.Ay.getState().getVideoProgress(n.id);
    null != e && e.timestampSec > 1 && ((0, h.QG)(n.id), p.default.track(R.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
      quest_id: n.id,
      source_quest_content: (0, m.jO)(s),
      source_quest_content_cta: l,
      video_session_id: d
    }))
  }(0, o.mMO)(async () => {
    let {
      default: e
    } = await q();
    return t => (0, r.jsx)(e, M(L({}, t), {
      openStartClockTime: performance.now(),
      questId: n.id,
      autoplay: c,
      videoSessionId: d,
      sourceQuestContent: s
    }))
  }, {
    modalKey: (0, T.cZ)(n.id),
    backdropStyle: o.F2Z.IMMERSIVE,
    onCloseCallback: () => (0, T.vm)({
      questId: n.id,
      sourceQuestContent: s,
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
      n = (0, a.I_)(),
      i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quests/").concat(e);
    return (0, a.Ay)(i, {
      utmSource: r,
      fingerprint: t,
      attemptId: n
    })
  }
  return "discord://"
}

function Q(e) {
  let t = X(e),
    n = (0, a.X7)(t);
  null != n && p.default.track(R.HAw.DEEP_LINK_CLICKED, {
    fingerprint: (0, s.v)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.A.launch(t, t => {
    t || (0, u.bG)({
      pathname: R.BVt.QUEST_HOME_V2,
      hash: e
    })
  })
}

function J(e) {
  var t;
  let n = null == (t = platform.os) ? true : t.family,
    r = "quest-preview";
  if ("Android" === n || "iOS" === n) {
    let t = f.default.getFingerprint(),
      n = (0, a.I_)(),
      i = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/quest-preview/").concat(e);
    return (0, a.Ay)(i, {
      utmSource: r,
      fingerprint: t,
      attemptId: n
    })
  }
  return "discord://"
}

function $(e) {
  let t = J(e),
    n = (0, a.X7)(t);
  null != n && p.default.track(R.HAw.DEEP_LINK_CLICKED, {
    fingerprint: (0, s.v)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.A.launch(t, t => {
    t || (0, u.bG)({
      pathname: R.BVt.QUEST_HOME_V2,
      hash: e
    })
  })
}

function ee(e) {
  (0, o.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("14882"), n.e("77828")]).then(n.bind(n, 491390));
    return n => (0, r.jsx)(t, M(L({}, n), {
      questId: e.id
    }))
  })
}
async function et(e, t) {
  let {
    type: n
  } = await (0, h.Oy)(e.id, {
    questContent: t.questContent,
    questContentCTA: t.questContentCTA,
    sourceQuestContent: t.sourceQuestContent,
    questContentPosition: t.questContentPosition,
    questContentRowIndex: t.questContentRowIndex
  });
  switch (n) {
    case h.WM.SUCCESS:
      Z({
        quest: e,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        sourceQuestContentCTA: t.sourceQuestContentCTA
      });
      break;
    case h.WM.CAPTCHA_FAILED:
      l.A.show({
        title: D.intl.string(D.t["/CidxO"]),
        body: D.intl.string(D.t.HQdHg6)
      });
      break;
    case h.WM.UNKNOWN_ERROR:
      l.A.show({
        title: D.intl.string(D.t.R0RpRX),
        body: D.intl.string(D.t.OXD41D)
      });
    case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
  }
}

function en(e) {
  if ((0, S.vA)(e)) return e.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY) ? o.hpF : o._xR
}