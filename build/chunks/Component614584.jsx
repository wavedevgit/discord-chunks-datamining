/** Chunk was on web.js **/
/** chunk id: 614584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk25209 = require("./25209.js"),
  Chunk39154 = require("./39154.js"),
  Chunk627050 = require("./627050.js"),
  Chunk35125 = require("./35125.js"),
  Chunk905405 = require("./905405.js"),
  Chunk628238 = require("./628238.js"),
  Chunk499401 = require("./499401.js"),
  Chunk693912 = require("./693912.js"),
  Chunk869765 = require("./869765.js"),
  Chunk699516 = require("./699516.js"),
  Chunk352736 = require("./352736.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = Chunk73800.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: T,
    channel: A,
    compact: C = false,
    referencedUsernameProfile: R,
    referencedAvatarProfile: P,
    setPopout: w,
    isReplySpineClickable: D,
    showReplySpine: L
  } = e, x = T.state === p.Y.LOADED ? T.message : true, M = (0, E.Uj)(x), j = (0, u.p)(), k = l.d.useExperiment({
    location: "repliedMessage"
  }).enabled, U = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), G = i.useMemo(() => {
    if (null == x) return null;
    let e = (0, s.Z)(x);
    if (e.type === v.uaV.USER_JOIN) return (0, a.Rp)(I.intl.formatToParts(m.Z.getSystemMessageUserJoin(e.id), {
      username: null != M ? M.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === v.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, c.PA)({
      username: null != M ? M.nick : e.author.username,
      guildId: null == A ? true : A.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, f.Y)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, _.B2)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, _.hj)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    else if (e.type === v.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : I.intl.string(I.t.wnn1DQ);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true,
          shouldFilterKeywords: j
        },
        n = e.isFirstMessageInForumPost(A) ? N(S({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: k
        }) : N(S({}, t), {
          formatInline: true,
          allowHeading: U,
          allowList: U,
          allowGameMentions: k
        });
      return (0, g.ZP)(e, n).content
    }
    return null
  }, [x, M, A, U, j, k]), {
    isReplyAuthorBlocked: B,
    isReplyAuthorIgnored: Z
  } = (0, o.cj)([h.Z], () => ({
    isReplyAuthorBlocked: null != x && h.Z.isBlockedForMessage(x),
    isReplyAuthorIgnored: null != x && h.Z.isIgnoredForMessage(x)
  }), [x]), F = (0, O.wq)(null == x ? true : x.author.id, A.id), V = (0, O.$3)(n, x), H = (0, O.Wl)(x, A, R, w), Y = (0, O.rY)(P, w), W = i.useCallback(() => {
    w({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [w]), K = (0, E.Uj)(n);
  return (0, r.jsx)(b.Z, {
    repliedAuthor: M,
    baseMessage: n,
    channel: A,
    baseAuthor: K,
    referencedMessage: T,
    content: G,
    compact: C,
    isReplyAuthorBlocked: B,
    isReplyAuthorIgnored: Z,
    showAvatarPopout: P,
    showUsernamePopout: R,
    renderPopout: y.Z,
    onClickAvatar: Y,
    onClickUsername: H,
    onClickReply: V,
    onContextMenu: F,
    onPopoutRequestClose: W,
    isReplySpineClickable: D,
    showReplySpine: L
  })
});

function R(e) {
  let {
    message: t,
    channel: n,
    compact: i,
    setPopout: o,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    replyReference: l,
    replyMessage: c,
    isReplySpineClickable: u,
    showReplySpine: d = true
  } = e;
  return null != l && (0, r.jsx)(C, {
    baseMessage: t,
    replyReference: l,
    referencedMessage: c,
    channel: n,
    compact: i,
    setPopout: o,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    isReplySpineClickable: u,
    showReplySpine: d
  })
}