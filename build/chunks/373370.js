/** Chunk was on web.js **/
/** chunk id: 373370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => L,
  DD: () => P
}), require("./953529.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk5881 = require("./5881.js"),
  Chunk566078 = require("./566078.js"),
  Chunk46140 = require("./46140.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = (0, Chunk5881.T)({});

function b(e, t, n) {
  return n ? _.intl.formatToParts(e, t) : _.intl.formatToPlainString(e, t)
}

function y(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = u.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: c
    } = r,
    d = n.config.messages.gameTitle,
    f = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return b(t = o && f ? p ? _.t["eb/SnZ"] : _.t.ziB0HB : f || null != a ? _.t.AwuMRU : _.t.NIimTk, {
    gameTitle: d,
    streamingDurationRequirement: c,
    rewardNameWithArticle: l,
    duration: a,
    targetMinutes: c
  }, i)
}

function O(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = u.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: c
    } = r,
    d = n.config.messages.gameTitle,
    f = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return b(t = o && f ? p ? _.t["eb/SnZ"] : _.t.ziB0HB : f || null != a ? _.t.AwuMRU : _.t.NIimTk, {
    gameTitle: d,
    targetMinutes: c,
    rewardNameWithArticle: l,
    duration: a,
    streamingDurationRequirement: c
  }, i)
}

function v(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = u.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: c
    } = r,
    d = n.config.messages.gameTitle,
    f = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return b(t = o && f ? p ? _.t["eb/SnZ"] : _.t.ziB0HB : f || null != a ? _.t.AwuMRU : _.t.FZL5Q0, {
    gameTitle: d,
    streamingDurationRequirement: c,
    rewardNameWithArticle: l,
    duration: a,
    questReward: l
  }, i)
}

function I(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r
  } = e, {
    targetMinutes: i
  } = n, o = t.config.messages.gameTitle;
  return b(_.t["a/ia7O"], {
    gameTitle: o,
    streamingDurationRequirement: i
  }, r)
}

function T(e, t, n, r) {
  var i;
  let o, a = u.r.build(e.config).defaultWatchVideoTask,
    l = null != (i = null == a ? true : a.messages.videoTitle) ? i : "video",
    c = u.r.build(e.config).defaultRewardNameWithArticle,
    f = (0, s.f$)(e.config),
    p = (0, s._p)(e.config);
  return b(o = f && n ? p ? _.t["xqX+r6"] : _.t["vs/xBg"] : f || null != t ? _.t["W/HkLC"] : e.id === d.V6 ? _.t.Rsd5bG : _.t["g+InPD"], {
    videoTitle: l,
    rewardNameWithArticle: c,
    duration: t
  }, r)
}

function S(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r
  } = e, i = n.targetMinutes, o = u.r.build(t.config).defaultRewardNameWithArticle;
  return b(_.t.VYwSSk, {
    streamingDurationRequirement: i,
    questReward: o
  }, r)
}

function A(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: o,
      collectibleRewardDuration: a
    } = e,
    l = u.r.build(n.config).defaultRewardNameWithArticle,
    {
      targetMinutes: c
    } = r,
    d = n.config.messages.gameTitle,
    f = (0, s.f$)(n.config),
    p = (0, s._p)(n.config);
  return b(t = o && f ? p ? _.t["X8Yt//"] : _.t.smG9qq : f || null != a ? _.t.BLyDvL : _.t["hkJ+Gh"], {
    gameTitle: d,
    streamingDurationRequirement: c,
    duration: a,
    questReward: l
  }, i)
}

function N(e) {
  let {
    quest: t,
    taskDetails: n,
    thirdPartyTaskDetails: r,
    withoutMarkdown: i,
    currentUser: o
  } = e, l = (0, a.I5)(o, f.p9.TIER_2), c = (0, s.Kr)(t.config);
  if ((0, s.$J)(t) && (0, s.$H)(t)) return y({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.$J)(t)) return O({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.$H)(t)) return v({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  });
  if ((0, s.oo)({
      quest: t
    })) return I({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i
  });
  if ((0, s.q8)(t)) return T(t, c, l, i);
  else if ((0, s.pO)(t)) return S({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i
  });
  return null != r ? r.description : A({
    quest: t,
    taskDetails: n,
    withoutMarkdown: i,
    hasNitro: l,
    collectibleRewardDuration: c
  })
}
let C = e => {
  try {
    let t = "";
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) {
      for (let n of e) t += C(n.content);
      return t
    }
    return C(e.content)
  } catch (e) {
    return E.error("Failed to convert ASTNode to string", e), ""
  }
};

function R(e) {
  var t;
  let n = N(g(h({}, e), {
    currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser()
  }));
  return e.withoutMarkdown ? C(n) : n
}

function P(e) {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, a = (0, l.uA)({
    quest: t,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, i.e7)([o.default], () => o.default.getCurrentUser()), c = (0, l.Jf)(t);
  return R(g(h({}, e), {
    connectedConsoleLinkOnClick: a,
    withoutMarkdown: false,
    currentUser: s,
    thirdPartyTaskDetails: null != c ? c : true
  }))
}

function w(e) {
  return (0, s.$J)(e) || (0, s.pO)(e) ? 0 : (0, s.Dr)({
    quest: e
  }) ? 1 : (0, s.q8)(e) ? 2 : 3 * !!(0, s.Vl)(e)
}

function D(e) {
  return r.useMemo(() => w(e), [e])
}

function L(e) {
  let {
    quest: t
  } = e;
  switch (D(t)) {
    case 0:
    case 1:
      return _.intl.string(_.t.l7E81t);
    case 2:
      return _.intl.string(_.t.umdNio);
    case 3:
      return t.config.features.includes(d.S7.START_QUEST_CTA) ? _.intl.string(_.t.ToGcxM) : _.intl.string(_.t.l7E81t)
  }
}