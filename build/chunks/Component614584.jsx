/** Chunk was on 40184 **/
/** chunk id: 614584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk25209 = require("./25209.js"),
  Chunk39154 = require("./39154.js"),
  Chunk627050 = require("./627050.js"),
  Chunk35125 = require("./35125.js"),
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Chunk473749.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: S,
    channel: _,
    compact: P = false,
    referencedUsernameProfile: I,
    referencedAvatarProfile: Z,
    setPopout: T,
    isReplySpineClickable: N,
    showReplySpine: A
  } = e, w = S.state === f.Y.LOADED ? S.message : true, M = (0, b.Uj)(w), R = s.d.useExperiment({
    location: "repliedMessage"
  }).enabled, D = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), k = r.useMemo(() => {
    if (null == w) return null;
    let e = (0, o.Z)(w);
    if (e.type === x.uaV.USER_JOIN) return (0, a.Rp)(O.intl.formatToParts(m.Z.getSystemMessageUserJoin(e.id), {
      username: null != M ? M.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, c.PA)({
      username: null != M ? M.nick : e.author.username,
      guildId: null == _ ? true : _.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, d.Y)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, p.B2)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, p.hj)({
      application: null == e ? true : e.application,
      username: null == M ? true : M.nick
    }));
    else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : O.intl.string(O.t.wnn1Dc);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true
        },
        n = e.isFirstMessageInForumPost(_) ? j(E({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: R
        }) : j(E({}, t), {
          formatInline: true,
          allowHeading: D,
          allowList: D,
          allowGameMentions: R
        });
      return (0, g.ZP)(e, n).content
    }
    return null
  }, [w, M, _, D, R]), {
    isReplyAuthorBlocked: L,
    isReplyAuthorIgnored: U
  } = (0, l.cj)([h.Z], () => ({
    isReplyAuthorBlocked: null != w && h.Z.isBlockedForMessage(w),
    isReplyAuthorIgnored: null != w && h.Z.isIgnoredForMessage(w)
  }), [w]), V = (0, v.wq)(null == w ? true : w.author.id, _.id), H = (0, v.$3)(n, w), F = (0, v.Wl)(w, _, I, T), B = (0, v.rY)(Z, T), G = r.useCallback(() => {
    T({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [T]), W = (0, b.Uj)(n);
  return (0, i.jsx)(y.Z, {
    repliedAuthor: M,
    baseMessage: n,
    channel: _,
    baseAuthor: W,
    referencedMessage: S,
    content: k,
    compact: P,
    isReplyAuthorBlocked: L,
    isReplyAuthorIgnored: U,
    showAvatarPopout: Z,
    showUsernamePopout: I,
    renderPopout: C.Z,
    onClickAvatar: B,
    onClickUsername: F,
    onClickReply: H,
    onContextMenu: V,
    onPopoutRequestClose: G,
    isReplySpineClickable: N,
    showReplySpine: A
  })
});

function _(e) {
  let {
    message: t,
    channel: n,
    compact: r,
    setPopout: l,
    referencedUsernameProfile: a,
    referencedAvatarProfile: o,
    replyReference: s,
    replyMessage: c,
    isReplySpineClickable: u,
    showReplySpine: d = true
  } = e;
  return null != s && (0, i.jsx)(S, {
    baseMessage: t,
    replyReference: s,
    referencedMessage: c,
    channel: n,
    compact: r,
    setPopout: l,
    referencedUsernameProfile: a,
    referencedAvatarProfile: o,
    isReplySpineClickable: u,
    showReplySpine: d
  })
}