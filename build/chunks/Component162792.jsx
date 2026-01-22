/** Chunk was on 97492 **/
/** chunk id: 162792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk436857 = require("./436857.js"),
  Chunk387408 = require("./387408.js"),
  Chunk352505 = require("./352505.js"),
  Chunk942075 = require("./942075.js"),
  Chunk384231 = require("./384231.js"),
  Chunk808829 = require("./808829.js"),
  Chunk552691 = require("./552691.js"),
  Chunk9842 = require("./9842.js"),
  Chunk994500 = require("./994500.js"),
  Chunk638075 = require("./638075.js"),
  Chunk465364 = require("./465364.js"),
  Chunk763754 = require("./763754.js"),
  Chunk448368 = require("./448368.jsx"),
  Chunk535421 = require("./535421.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
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
let _ = Chunk64700.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: _,
    channel: C,
    compact: S = false,
    referencedUsernameProfile: I,
    referencedAvatarProfile: N,
    setPopout: T,
    isReplySpineClickable: P,
    showReplySpine: w
  } = e, R = _.state === p.a.LOADED ? _.message : true, D = (0, m.X4)(R), M = o.m.useExperiment({
    location: "repliedMessage"
  }).enabled, L = (0, u.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), G = l.useMemo(() => {
    if (null == R) return null;
    let e = (0, s.A)(R);
    if (e.type === j.lAJ.USER_JOIN) return (0, a.$)(v.intl.formatToParts(b.A.getSystemMessageUserJoin(e.id), {
      username: null != D ? D.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === j.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.$)((0, c.WC)({
      username: null != D ? D.nick : e.author.username,
      guildId: null == C ? true : C.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === j.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.$)((0, d.P)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    if (e.type === j.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.$)((0, f.g6)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    if (e.type === j.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.$)((0, f.uk)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    else if (e.type === j.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : v.intl.string(v.t.wnn1Dc);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true
        },
        n = e.isFirstMessageInForumPost(C) ? E(x({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: M
        }) : E(x({}, t), {
          formatInline: true,
          allowHeading: L,
          allowList: L,
          allowGameMentions: M
        });
      return (0, g.Ay)(e, n).content
    }
    return null
  }, [R, D, C, L, M]), {
    isReplyAuthorBlocked: k,
    isReplyAuthorIgnored: U
  } = (0, i.cf)([h.A], () => ({
    isReplyAuthorBlocked: null != R && h.A.isBlockedForMessage(R),
    isReplyAuthorIgnored: null != R && h.A.isIgnoredForMessage(R)
  }), [R]), V = (0, O.r4)(null == R ? true : R.author.id, C.id), F = (0, O.Ck)(n, R), H = (0, O.H9)(R, C, I, T), B = (0, O.Ge)(N, T), K = l.useCallback(() => {
    T({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [T]), W = (0, m.X4)(n);
  return (0, r.jsx)(A.A, {
    repliedAuthor: D,
    baseMessage: n,
    channel: C,
    baseAuthor: W,
    referencedMessage: _,
    content: G,
    compact: S,
    isReplyAuthorBlocked: k,
    isReplyAuthorIgnored: U,
    showAvatarPopout: N,
    showUsernamePopout: I,
    renderPopout: y.A,
    onClickAvatar: B,
    onClickUsername: H,
    onClickReply: F,
    onContextMenu: V,
    onPopoutRequestClose: K,
    isReplySpineClickable: P,
    showReplySpine: w
  })
});

function C(e) {
  let {
    message: t,
    channel: n,
    compact: l,
    setPopout: i,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    replyReference: o,
    replyMessage: c,
    isReplySpineClickable: u,
    showReplySpine: d = true
  } = e;
  return null != o && (0, r.jsx)(_, {
    baseMessage: t,
    replyReference: o,
    referencedMessage: c,
    channel: n,
    compact: l,
    setPopout: i,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    isReplySpineClickable: u,
    showReplySpine: d
  })
}