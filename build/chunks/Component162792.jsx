/** Chunk was on 61344 **/
/** chunk id: 162792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Chunk64700.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: S,
    channel: x,
    compact: j = false,
    referencedUsernameProfile: I,
    referencedAvatarProfile: T,
    setPopout: N,
    isReplySpineClickable: P,
    showReplySpine: w
  } = e, R = S.state === p.a.LOADED ? S.message : true, D = (0, A.X4)(R), M = o.m.useExperiment({
    location: "repliedMessage"
  }).enabled, k = (0, u.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), L = r.useMemo(() => {
    if (null == R) return null;
    let e = (0, s.A)(R);
    if (e.type === v.lAJ.USER_JOIN) return (0, a.$)(E.intl.formatToParts(m.A.getSystemMessageUserJoin(e.id), {
      username: null != D ? D.nick : e.author.username,
      usernameHook: e => e
    }));
    if (e.type === v.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.$)((0, c.WC)({
      username: null != D ? D.nick : e.author.username,
      guildId: null == x ? true : x.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === v.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.$)((0, d.P)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    if (e.type === v.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.$)((0, h.g6)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    if (e.type === v.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.$)((0, h.uk)({
      application: null == e ? true : e.application,
      username: null == D ? true : D.nick
    }));
    else if (e.type === v.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : E.intl.string(E.t.wnn1Dc);
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: true,
          allowLinks: true
        },
        n = e.isFirstMessageInForumPost(x) ? C(O({}, t), {
          noStyleAndInteraction: true,
          allowHeading: true,
          allowList: true,
          allowGameMentions: M
        }) : C(O({}, t), {
          formatInline: true,
          allowHeading: k,
          allowList: k,
          allowGameMentions: M
        });
      return (0, g.Ay)(e, n).content
    }
    return null
  }, [R, D, x, k, M]), {
    isReplyAuthorBlocked: U,
    isReplyAuthorIgnored: G
  } = (0, i.cf)([f.A], () => ({
    isReplyAuthorBlocked: null != R && f.A.isBlockedForMessage(R),
    isReplyAuthorIgnored: null != R && f.A.isIgnoredForMessage(R)
  }), [R]), F = (0, y.r4)(null == R ? true : R.author.id, x.id), H = (0, y.Ck)(n, R), B = (0, y.H9)(R, x, I, N), V = (0, y.Ge)(T, N), K = r.useCallback(() => {
    N({
      referencedUsernameProfile: false,
      referencedAvatarProfile: false
    })
  }, [N]), W = (0, A.X4)(n);
  return (0, l.jsx)(b.A, {
    repliedAuthor: D,
    baseMessage: n,
    channel: x,
    baseAuthor: W,
    referencedMessage: S,
    content: L,
    compact: j,
    isReplyAuthorBlocked: U,
    isReplyAuthorIgnored: G,
    showAvatarPopout: T,
    showUsernamePopout: I,
    renderPopout: _.A,
    onClickAvatar: V,
    onClickUsername: B,
    onClickReply: H,
    onContextMenu: F,
    onPopoutRequestClose: K,
    isReplySpineClickable: P,
    showReplySpine: w
  })
});

function x(e) {
  let {
    message: t,
    channel: n,
    compact: r,
    setPopout: i,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    replyReference: o,
    replyMessage: c,
    isReplySpineClickable: u,
    showReplySpine: d = true
  } = e;
  return null != o && (0, l.jsx)(S, {
    baseMessage: t,
    replyReference: o,
    referencedMessage: c,
    channel: n,
    compact: r,
    setPopout: i,
    referencedUsernameProfile: a,
    referencedAvatarProfile: s,
    isReplySpineClickable: u,
    showReplySpine: d
  })
}