/** Chunk was on 5665 **/
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

function j(e) {
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

function E(e, t) {
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
  } = e, R = S.state === f.Y.LOADED ? S.message : true, M = (0, y.Uj)(R), k = (0, u.p)(), D = s.d.useExperiment({
    location: "repliedMessage"
  }).enabled, L = (0, d.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), U = i.useMemo(() => {
    if (null == R) return null;
    let e = (0, o.Z)(R);
    if (e.type === v.uaV.USER_JOIN) return (0, a.Rp)(O.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
      username: null != M ? M.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === v.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, c.PA)({
      username: null != M ? M.nick : e.author.username,
      guildId: null == P ? true : P.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === v.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, p.Y)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, h.B2)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === v.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, h.hj)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    else if (e.type === v.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : O.intl.string(O.t.wnn1DQ);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true,
          shouldFilterKeywords: k
        },
        n = e.isFirstMessageInForumPost(P) ? E(j({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: D
        }) : E(j({}, t), {
          formatInline: true,
          allowHeading: L,
          allowList: L,
          allowGameMentions: D
        });
      return (0, b.ZP)(e, n).content
    }
    return null
  }, [R, M, P, L, k, D]), {
    isReplyAuthorBlocked: B,
    isReplyAuthorIgnored: F
  } = (0, l.cj)([m.Z], () => ({
    isReplyAuthorBlocked: null != R && m.Z.isBlockedForMessage(R),
    isReplyAuthorIgnored: null != R && m.Z.isIgnoredForMessage(R)
  }), [R]), H = (0, x.wq)(null == R ? true : R.author.id, P.id), G = (0, x.$3)(n, R), V = (0, x.Wl)(R, P, Z, N), z = (0, x.rY)(T, N), W = i.useCallback(() => {
    N({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [N]), q = (0, y.Uj)(n);
  return (0, r.jsx)(_.Z, {
    repliedAuthor: M,
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
    onClickAvatar: z,
    onClickUsername: V,
    onClickReply: G,
    onContextMenu: H,
    onPopoutRequestClose: W,
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