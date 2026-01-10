/** Chunk was on 81985 **/
/** chunk id: 940777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk593364 = require("./593364.jsx"),
  Chunk905423 = require("./905423.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk709054 = require("./709054.js"),
  Chunk853856 = require("./853856.js"),
  Chunk593214 = require("./593214.js"),
  Chunk919755 = require("./919755.js"),
  Chunk110977 = require("./110977.jsx"),
  Chunk603274 = require("./603274.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547355 = require("./547355.js");

function A(e) {
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
let w = {
  analyticsSource: {
    page: Chunk981631.ZY5.GUILD_CHANNEL,
    section: Chunk981631.jXE.CHANNEL_LIST,
    object: Chunk981631.qAy.CHANNEL
  }
};

function R() {
  var e, t;
  let l = (0, o.Ie)("favorites"),
    {
      favoriteAdded: R,
      clearFavoriteAdded: D
    } = (0, S.up)(),
    [M, k] = i.useState(false),
    {
      favoriteServerMuted: L,
      favoriteChannels: U
    } = (0, s.cj)([E.Z], () => ({
      favoriteChannels: E.Z.getFavoriteChannels(),
      favoriteServerMuted: E.Z.favoriteServerMuted
    })),
    G = (0, s.e7)([j.Z], () => j.Z.getChannelId(Z.I_8)),
    B = (0, s.e7)([O.Z], () => O.Z.getChannel(G)),
    F = (0, y.Z)(e => e.guildId) === Z.I_8,
    {
      badge: H,
      unread: V
    } = (0, _.Z)(U),
    z = function(e) {
      let t = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
        n = null != t && null != e[t],
        r = (0, s.e7)([v.Z], () => {
          if (!n) returnfalse;
          let t = v.Z.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        i = (0, s.e7)([v.Z], () => v.Z.getAllApplicationStreams().some(t => null != e[t.channelId])),
        l = (0, s.e7)([x.Z], () => n && null != t && x.Z.hasVideo(t), [n, t]),
        a = (0, s.Wu)([p.ZP], () => C.default.keys(e).reduce((e, t) => (e.push(...p.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
        o = (0, s.e7)([p.ZP], () => Array.from(p.ZP.getSelfEmbeddedActivities().values()).some(t => {
          let {
            location: n
          } = t, r = (0, f.p)(n);
          return null != r && null != e[r]
        })),
        c = a.length > 0,
        u = false,
        d = false,
        h = false,
        g = false;
      return n ? (u = !l, d = l, h = r, g = o) : (h = i, g = c), (0, m.Or)({
        audio: u,
        video: d,
        screenshare: h,
        liveStage: false,
        isCurrentUserConnected: n,
        activity: g
      })
    }(U),
    W = H > 0 ? (0, b.N)(H) : null,
    K = i.useCallback(() => {
      D()
    }, [D]);
  return (0, r.jsxs)(g.H, {
    children: [(0, r.jsx)(h.Z, {
      selected: F,
      hovered: M,
      unread: V && !L,
      className: T.pill
    }), (0, r.jsx)(P.Z, {
      onShow: K,
      children: (0, r.jsx)(I.S, {
        children: (0, r.jsx)(c.aRk, {
          selected: true,
          upperBadge: z,
          lowerBadge: W,
          children: (0, r.jsx)(c.LYs, (e = A({}, l), t = t = {
            ariaLabel: N.intl.formatToPlainString(N.t["/uzRss"], {
              guildName: N.intl.string(N.t.wMWyci),
              mentions: H
            }),
            "aria-selected": F,
            to: {
              pathname: Z.Z5c.CHANNEL(Z.I_8, G),
              state: w
            },
            selected: F || M,
            onMouseEnter: () => k(true),
            onMouseLeave: () => k(false),
            onMouseDown: function() {
              null != B && u.Z.preload(B.guild_id, B.id)
            },
            onContextMenu: function(e) {
              (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("3190").then(n.bind(n, 631981));
                return t => (0, r.jsx)(e, A({}, t))
              })
            },
            children: (0, r.jsx)("div", {
              className: a()(T.ring, {
                [T.ringActive]: R
              }),
              children: (0, r.jsx)(c.r7p, {
                size: "custom",
                color: "currentColor",
                className: T.favoriteIcon,
                width: 20,
                height: 20
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e))
        })
      })
    })]
  })
}