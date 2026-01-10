/** Chunk was on 81985 **/
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

function C(e) {
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
let S = Chunk473749.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: S,
    channel: _,
    compact: I = false,
    referencedUsernameProfile: P,
    referencedAvatarProfile: Z,
    setPopout: N,
    isReplySpineClickable: T,
    showReplySpine: A
  } = e, w = S.state === f.Y.LOADED ? S.message : true, R = (0, b.Uj)(w), D = s.d.useExperiment({
    location: "repliedMessage"
  }).enabled, M = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), k = i.useMemo(() => {
    if (null == w) return null;
    let e = (0, o.Z)(w);
    if (e.type === j.uaV.USER_JOIN) return (0, a.Rp)(x.intl.formatToParts(g.Z.getSystemMessageUserJoin(e.id), {
      username: null != R ? R.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === j.uaV.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.Rp)((0, c.PA)({
      username: null != R ? R.nick : e.author.username,
      guildId: null == _ ? true : _.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === j.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.Rp)((0, d.Y)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    if (e.type === j.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.Rp)((0, p.B2)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    if (e.type === j.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.Rp)((0, p.hj)({
      application: null == e ? true : e.application,
      username: null == R ? true : R.nick
    }));
    else if (e.type === j.uaV.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : x.intl.string(x.t.wnn1Dc);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true
        },
        n = e.isFirstMessageInForumPost(_) ? E(C({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: D
        }) : E(C({}, t), {
          formatInline: true,
          allowHeading: M,
          allowList: M,
          allowGameMentions: D
        });
      return (0, m.ZP)(e, n).content
    }
    return null
  }, [w, R, _, M, D]), {
    isReplyAuthorBlocked: L,
    isReplyAuthorIgnored: U
  } = (0, l.cj)([h.Z], () => ({
    isReplyAuthorBlocked: null != w && h.Z.isBlockedForMessage(w),
    isReplyAuthorIgnored: null != w && h.Z.isIgnoredForMessage(w)
  }), [w]), G = (0, O.wq)(null == w ? true : w.author.id, _.id), B = (0, O.$3)(n, w), F = (0, O.Wl)(w, _, P, N), H = (0, O.rY)(Z, N), V = i.useCallback(() => {
    N({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [N]), z = (0, b.Uj)(n);
  return (0, r.jsx)(y.Z, {
    repliedAuthor: R,
    baseMessage: n,
    channel: _,
    baseAuthor: z,
    referencedMessage: S,
    content: k,
    compact: I,
    isReplyAuthorBlocked: L,
    isReplyAuthorIgnored: U,
    showAvatarPopout: Z,
    showUsernamePopout: P,
    renderPopout: v.Z,
    onClickAvatar: H,
    onClickUsername: F,
    onClickReply: B,
    onContextMenu: G,
    onPopoutRequestClose: V,
    isReplySpineClickable: T,
    showReplySpine: A
  })
});

function _(e) {
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