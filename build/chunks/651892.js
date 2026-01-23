/** Chunk was on web.js **/
/** chunk id: 651892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JM: () => d,
  Js: () => p,
  Jx: () => g,
  Xm: () => E,
  YT: () => u,
  fx: () => h,
  oK: () => b,
  up: () => _,
  wr: () => f,
  xv: () => y
}), require("./65821.js");
var Chunk957565 = require("./957565.js"),
  Chunk723702 = require("./723702.js"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk261331 = require("./261331.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  var t, n;
  let {
    quest: r,
    taskDetails: i,
    thirdPartyTaskDetails: a
  } = e;
  if ((null == (t = r.userStatus) ? true : t.completedAt) != null) return c.intl.string(c.t.BzFeTF);
  if ((null == (n = r.userStatus) ? true : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = i, t = null != a ? a.percentComplete : e;
    return t >= .75 ? c.intl.string(c.t.gvCR4H) : t >= .45 && t <= .55 ? c.intl.string(c.t.JNx8sG) : t > 0 ? c.intl.string(c.t.JMbfnc) : c.intl.string(c.t["7e5k7L"])
  }
  return c.intl.formatToPlainString(c.t.EQa7os, {
    questName: r.config.messages.questName
  })
}

function d(e) {
  let {
    isTargetedDisclosure: t,
    isVideoQuest: n,
    gamePublisher: r,
    gameTitle: i,
    cosponsorName: a
  } = e;
  return t ? null == a ? c.intl.formatToPlainString(c.t.Piihy1, {
    gamePublisher: r
  }) : c.intl.formatToPlainString(c.t.DV47Gy, {
    gamePublisher: r,
    cosponsorName: a
  }) : n && "en-US" === c.intl.currentLocale ? c.intl.formatToPlainString(c.t.zDHY3s, {
    gamePublisher: r
  }) : c.intl.formatToPlainString(c.t.euizJY, {
    gamePublisher: r,
    gameTitle: i
  })
}

function f(e) {
  return e.config.ctaConfig.buttonLabel
}

function p(e) {
  switch (e) {
    case l.kL.SUGGESTED:
      return c.intl.string(c.t.gBfXPZ);
    case l.kL.MOST_RECENT:
      return c.intl.string(c.t.K6oEu2);
    case l.kL.EXPIRING_SOON:
      return c.intl.string(c.t.IB22n3);
    case l.kL.RECENTLY_ENROLLED:
      return c.intl.string(c.t["BB+2tX"])
  }
}

function _(e) {
  switch (e) {
    case l.BQ.VIRTUAL_CURRENCY:
      return c.intl.string(c.t.ElYQFS);
    case l.BQ.COLLECTIBLE:
      return c.intl.string(c.t.Jg17Ut);
    case l.BQ.IN_GAME:
      return c.intl.string(c.t["O/J2kr"]);
    case l.Pc.VIDEO:
      return c.intl.string(c.t.e0iISA);
    case l.Pc.PLAY:
      return c.intl.string(c.t["1nJR4p"])
  }
}

function h(e) {
  switch (e) {
    case "reward":
      return c.intl.string(c.t.vjLqAU);
    case "task":
      return c.intl.string(c.t.Hufmss)
  }
}
let m = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function g(e) {
  return e.ctaConfig.link
}
let E = (e, t) => {
  (0, a.Y5)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, r.C)(m(e))
};

function y(e) {
  if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
  return e.rewardsConfig.rewards[0]
}
let b = e => {
  let {
    hasVideoAsset: t,
    playerState: n,
    pauseReason: r
  } = e;
  return t ? n === o.Q6.PAUSED && r === s.Yg.LOST_FOCUS ? c.intl.string(c.t["U7Xrb+"]) : null : (0, i.isWeb)() ? c.intl.string(c.t["E1du/q"]) : c.intl.string(c.t["rStN/7"])
}