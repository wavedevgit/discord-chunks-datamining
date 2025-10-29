/** Chunk was on 73726 **/
/** chunk id: 614584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Chunk647438.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: S,
    channel: P,
    compact: I = false,
    referencedUsernameProfile: Z,
    referencedAvatarProfile: T,
    setPopout: N,
    isReplySpineClickable: A,
    showReplySpine: w
  } = e, M = S.state === h.Y.LOADED ? S.message : true, R = (0, _.Uj)(M), D = (0, u.p)(), L = s.d.useExperiment({
    location: "repliedMessage"
  }).enabled, k = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), U = i.useMemo(() => {
    if (null == M) return null;
    let e = (0, o.Z)(M);
    if (e.type === x.uaV.USER_JOIN) return (0, a.Rp)(O.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
      username: null != R ? R.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, c.PA)({
      username: null != R ? R.nick : e.author.username,
      guildId: null == P ? true : P.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, p.Y)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, f.B2)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, f.hj)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : O.intl.string(O.t.wnn1Dc);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true,
          shouldFilterKeywords: D
        },
        n = e.isFirstMessageInForumPost(P) ? j(E({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: L
        }) : j(E({}, t), {
          formatInline: true,
          allowHeading: k,
          allowList: k,
          allowGameMentions: L
        });
      return (0, b.ZP)(e, n).content
    }
    return null
  }, [M, R, P, k, D, L]), {
    isReplyAuthorBlocked: B,
    isReplyAuthorIgnored: F
  } = (0, l.cj)([m.Z], () => ({
    isReplyAuthorBlocked: null != M && m.Z.isBlockedForMessage(M),
    isReplyAuthorIgnored: null != M && m.Z.isIgnoredForMessage(M)
  }), [M]), V = (0, v.wq)(null == M ? true : M.author.id, P.id), H = (0, v.$3)(n, M), G = (0, v.Wl)(M, P, Z, N), W = (0, v.rY)(T, N), z = i.useCallback(() => {
    N({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [N]), q = (0, _.Uj)(n);
  return (0, r.jsx)(y.Z, {
    repliedAuthor: R,
    baseMessage: n,
    channel: P,
    baseAuthor: q,
    referencedMessage: S,
    content: U,
    compact: I,
    isReplyAuthorBlocked: B,
    isReplyAuthorIgnored: F,
    showAvatarPopout: T,
    showUsernamePopout: Z,
    renderPopout: C.Z,
    onClickAvatar: W,
    onClickUsername: G,
    onClickReply: H,
    onContextMenu: V,
    onPopoutRequestClose: z,
    isReplySpineClickable: A,
    showReplySpine: w
  })
});

function P(e) {
  let {
    message: t,
    channel: n,
    compact: i,
    setPopout: l,
    referencedUsernameProfile: a,
    referencedAvatarProfile: o,
    replyReference: s,
    replyMessage: c,
    isReplySpineClickable: u,
    showReplySpine: d = true
  } = e;
  return null != s && (0, r.jsx)(S, {
    baseMessage: t,
    replyReference: s,
    referencedMessage: c,
    channel: n,
    compact: i,
    setPopout: l,
    referencedUsernameProfile: a,
    referencedAvatarProfile: o,
    isReplySpineClickable: u,
    showReplySpine: d
  })
}