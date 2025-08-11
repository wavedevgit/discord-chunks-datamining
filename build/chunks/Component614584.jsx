/** Chunk was on web.js **/
/** chunk id: 614584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk25209 = require("./25209.js"),
  Chunk39154 = require("./39154.js"),
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = Chunk73800.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: I,
    channel: S,
    compact: N = false,
    referencedUsernameProfile: C,
    referencedAvatarProfile: R,
    setPopout: P,
    isReplySpineClickable: w,
    showReplySpine: D
  } = e, L = I.state === _.Y.LOADED ? I.message : true, x = (0, g.Uj)(L), M = (0, c.p)(), k = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), j = i.useMemo(() => {
    if (null == L) return null;
    let e = (0, s.Z)(L);
    if (e.type === O.uaV.USER_JOIN) return (0, a.Rp)(v.intl.formatToParts(h.Z.getSystemMessageUserJoin(e.id), {
      username: null != x ? x.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === O.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, l.PA)({
      username: null != x ? x.nick : e.author.username,
      guildId: null == S ? true : S.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === O.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, d.Y)({
      application: null == e ? true : e.application,
      username: null == x ? true : x.nick
    }));
    if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, f.B2)({
      application: null == e ? true : e.application,
      username: null == x ? true : x.nick
    }));
    if (e.type === O.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, f.hj)({
      application: null == e ? true : e.application,
      username: null == x ? true : x.nick
    }));
    else if (e.type === O.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : v.intl.string(v.t.wnn1DQ);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true,
          shouldFilterKeywords: M
        },
        n = e.isFirstMessageInForumPost(S) ? A(T({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true
        }) : A(T({}, t), {
          formatInline: true,
          allowHeading: k,
          allowList: k
        });
      return (0, m.ZP)(e, n).content
    }
    return null
  }, [L, x, S, k, M]), {
    isReplyAuthorBlocked: U,
    isReplyAuthorIgnored: G
  } = (0, o.cj)([p.Z], () => ({
    isReplyAuthorBlocked: null != L && p.Z.isBlockedForMessage(L),
    isReplyAuthorIgnored: null != L && p.Z.isIgnoredForMessage(L)
  }), [L]), B = (0, y.wq)(null == L ? true : L.author.id, S.id), Z = (0, y.$3)(n, L), F = (0, y.Wl)(L, S, C, P), V = (0, y.rY)(R, P), H = i.useCallback(() => {
    P({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [P]), Y = (0, g.Uj)(n);
  return (0, r.jsx)(E.Z, {
    repliedAuthor: x,
    baseMessage: n,
    channel: S,
    baseAuthor: Y,
    referencedMessage: I,
    content: j,
    compact: N,
    isReplyAuthorBlocked: U,
    isReplyAuthorIgnored: G,
    showAvatarPopout: R,
    showUsernamePopout: C,
    renderPopout: b.Z,
    onClickAvatar: V,
    onClickUsername: F,
    onClickReply: Z,
    onContextMenu: B,
    onPopoutRequestClose: H,
    isReplySpineClickable: w,
    showReplySpine: D
  })
});

function C(e) {
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
  return null != l && (0, r.jsx)(N, {
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