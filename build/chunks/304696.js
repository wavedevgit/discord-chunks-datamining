/** Chunk was on web.js **/
/** chunk id: 304696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AV: () => s,
  Fs: () => l,
  M1: () => h,
  NL: () => u,
  Nt: () => d,
  T2: () => f,
  V_: () => c,
  f2: () => m,
  zo: () => _
}), require("./415506.js");
var Chunk572004 = require("./572004.js"),
  Chunk617136 = require("./617136.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  var t, n;
  let {
    quest: r,
    taskDetails: i,
    thirdPartyTaskDetails: o
  } = e;
  if ((null == (t = r.userStatus) ? true : t.completedAt) != null) return a.intl.string(a.t.BzFeTF);
  if ((null == (n = r.userStatus) ? true : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = i, t = null != o ? o.percentComplete : e;
    return t >= .75 ? a.intl.string(a.t.gvCR4H) : t >= .45 && t <= .55 ? a.intl.string(a.t.JNx8sG) : t > 0 ? a.intl.string(a.t.JMbfnc) : a.intl.string(a.t["7e5k7L"])
  }
  return a.intl.formatToPlainString(a.t.EQa7os, {
    questName: r.config.messages.questName
  })
}

function l(e) {
  let {
    isTargetedDisclosure: t,
    gamePublisher: n,
    gameTitle: r,
    cosponsorName: i
  } = e;
  return t ? null == i ? a.intl.formatToPlainString(a.t.Piihy1, {
    gamePublisher: n
  }) : a.intl.formatToPlainString(a.t.DV47Gy, {
    gamePublisher: n,
    cosponsorName: i
  }) : a.intl.formatToPlainString(a.t.euizJY, {
    gamePublisher: n,
    gameTitle: r
  })
}

function c(e) {
  return e.config.ctaConfig.buttonLabel
}

function u(e) {
  switch (e) {
    case o.yq.SUGGESTED:
      return a.intl.string(a.t.gBfXPZ);
    case o.yq.MOST_RECENT:
      return a.intl.string(a.t.K6oEu2);
    case o.yq.EXPIRING_SOON:
      return a.intl.string(a.t.IB22n3);
    case o.yq.RECENTLY_ENROLLED:
      return a.intl.string(a.t["BB+2tX"])
  }
}

function d(e) {
  switch (e) {
    case o.UP.VIRTUAL_CURRENCY:
      return a.intl.string(a.t.ElYQFS);
    case o.UP.COLLECTIBLE:
      return a.intl.string(a.t.Jg17Ut);
    case o.UP.IN_GAME:
      return a.intl.string(a.t["O/J2kr"]);
    case o.oH.VIDEO:
      return a.intl.string(a.t.e0iISA);
    case o.oH.PLAY:
      return a.intl.string(a.t["1nJR4p"])
  }
}

function f(e) {
  switch (e) {
    case "reward":
      return a.intl.string(a.t.vjLqAU);
    case "task":
      return a.intl.string(a.t.Hufmss)
  }
}
let p = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function _(e) {
  return e.ctaConfig.link
}
let m = (e, t) => {
  (0, i._3)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, r.JG)(p(e))
};

function h(e) {
  if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
  return e.rewardsConfig.rewards[0]
}