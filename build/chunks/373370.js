/** Chunk was on web.js **/
/** chunk id: 373370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => P,
  DD: () => N
}), require("./953529.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk566078 = require("./566078.js"),
  Chunk46140 = require("./46140.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return r && !n ? f.intl.format(e, t) : f.intl.formatToPlainString(e, t)
}

function E(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = c.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: u,
      isSponsoredQuest: d
    } = r,
    _ = n.config.messages.gameTitle,
    p = (0, s.f$)(n.config),
    h = (0, s._p)(n.config);
  return g(t = d ? f.t.BfgxRk : o && p ? h ? f.t["eb/SnZ"] : f.t.ziB0HB : p || null != a ? f.t.AwuMRU : f.t.NIimTk, {
    gameTitle: _,
    streamingDurationRequirement: u,
    rewardNameWithArticle: l,
    duration: a,
    targetMinutes: u,
    onClick: () => {}
  }, i, d)
}

function b(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = c.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: u
    } = r,
    d = n.config.messages.gameTitle,
    _ = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return g(t = o && _ ? p ? f.t["eb/SnZ"] : f.t.ziB0HB : _ || null != a ? f.t.AwuMRU : f.t.NIimTk, {
    gameTitle: d,
    targetMinutes: u,
    rewardNameWithArticle: l,
    duration: a,
    streamingDurationRequirement: u
  }, i)
}

function y(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = c.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: u,
      isSponsoredQuest: d
    } = r,
    _ = n.config.messages.gameTitle,
    p = (0, s.f$)(n.config),
    h = (0, s._p)(n.config);
  return g(t = d ? f.t.BfgxRk : o && p ? h ? f.t["eb/SnZ"] : f.t.ziB0HB : p || null != a ? f.t.AwuMRU : f.t.FZL5Q0, {
    gameTitle: _,
    streamingDurationRequirement: u,
    rewardNameWithArticle: l,
    duration: a,
    questReward: l,
    targetMinutes: u,
    onClick: () => {}
  }, i)
}

function O(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r
  } = e, {
    targetMinutes: i
  } = n, o = t.config.messages.gameTitle;
  return g(f.t["a/ia7O"], {
    gameTitle: o,
    streamingDurationRequirement: i
  }, r)
}

function v(e, t, n, r) {
  var i;
  let o, a = c.r.build(e.config).defaultWatchVideoTask,
    l = null != (i = null == a ? true : a.messages.videoTitle) ? i : "video",
    d = c.r.build(e.config).defaultRewardNameWithArticle,
    _ = (0, s.f$)(e.config),
    p = (0, s._p)(e.config);
  return g(o = _ && n ? p ? f.t["xqX+r6"] : f.t["vs/xBg"] : _ || null != t ? f.t["W/HkLC"] : e.id === u.V6 ? f.t.Rsd5bG : f.t["g+InPD"], {
    videoTitle: l,
    rewardNameWithArticle: d,
    duration: t
  }, r)
}

function I(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r
  } = e, i = n.targetMinutes, o = c.r.build(t.config).defaultRewardNameWithArticle;
  return g(f.t.VYwSSk, {
    streamingDurationRequirement: i,
    questReward: o
  }, r)
}

function T(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = c.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: u
    } = r,
    d = n.config.messages.gameTitle,
    _ = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return g(t = o && _ ? p ? f.t["X8Yt//"] : f.t.smG9qq : _ || null != a ? f.t.BLyDvL : f.t["hkJ+Gh"], {
    gameTitle: d,
    streamingDurationRequirement: u,
    duration: a,
    questReward: l
  }, i)
}

function S(e) {
  let {
    quest: t,
    taskDetails: n,
    thirdPartyTaskDetails: r,
    withoutMarkdown: i,
    currentUser: o
  } = e, l = (0, a.I5)(o, d.p9.TIER_2), c = (0, s.Kr)(t.config);
  if ((0, s.$J)(t) && (0, s.$H)(t)) return E({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.$J)(t)) return b({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.$H)(t)) return y({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.oo)({
      quest: t
    })) return O({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i
  });
  if ((0, s.q8)(t)) return v(t, c, l, i);
  else if ((0, s.pO)(t)) return I({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i
  });
  return null != r ? r.description : T({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  })
}

function A(e) {
  var t;
  return S(m(p({}, e), {
    currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser()
  }))
}

function N(e) {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, a = (0, l.uA)({
    quest: t,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, i.e7)([o.default], () => o.default.getCurrentUser()), c = (0, l.Jf)(t);
  return A(m(p({}, e), {
    connectedConsoleLinkOnClick: a,
    currentUser: s,
    withoutMarkdown: false,
    thirdPartyTaskDetails: null != c ? c : true
  }))
}

function C(e) {
  return (0, s.$J)(e) || (0, s.pO)(e) ? 0 : (0, s.Dr)({
    quest: e
  }) ? 1 : (0, s.q8)(e) ? 2 : 3 * !!(0, s.Vl)(e)
}

function R(e) {
  return r.useMemo(() => C(e), [e])
}

function P(e) {
  let {
    quest: t
  } = e;
  switch (R(t)) {
    case 0:
    case 1:
      return f.intl.string(f.t.l7E81t);
    case 2:
      return f.intl.string(f.t.umdNio);
    case 3:
      return t.config.features.includes(u.S7.START_QUEST_CTA) ? f.intl.string(f.t.ToGcxM) : f.intl.string(f.t.l7E81t)
  }
}