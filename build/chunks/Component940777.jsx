/** Chunk was on 65354 **/
/** chunk id: 940777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk499951 = require("./499951.js");

function T(e) {
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
let A = {
  analyticsSource: {
    page: Chunk981631.ZY5.GUILD_CHANNEL,
    section: Chunk981631.jXE.CHANNEL_LIST,
    object: Chunk981631.qAy.CHANNEL
  }
};

function R() {
  var e, t;
  let l = (0, Chunk91192.Ie)("favorites"),
    {
      favoriteAdded: R,
      clearFavoriteAdded: D
    } = (0, Chunk593214.up)(),
    [L, M] = Chunk473749.useState(false),
    {
      favoriteServerMuted: k,
      favoriteChannels: G
    } = (0, Chunk442837.cj)([Chunk853856.Z], () => ({
      favoriteChannels: Chunk853856.Z.getFavoriteChannels(),
      favoriteServerMuted: Chunk853856.Z.favoriteServerMuted
    })),
    U = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId(Chunk981631.I_8)),
    B = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(U)),
    F = (0, Chunk905423.Z)(e => e.guildId) === Chunk981631.I_8,
    {
      badge: V,
      unread: H
    } = (0, Chunk919755.Z)(G),
    W = function(e) {
      let t = (0, s.e7)([v.Z], () => v.Z.getVoiceChannelId()),
        n = null != t && null != e[t],
        r = (0, s.e7)([y.Z], () => {
          if (!n) returnfalse;
          let t = y.Z.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        i = (0, s.e7)([y.Z], () => y.Z.getAllApplicationStreams().some(t => null != e[t.channelId])),
        l = (0, s.e7)([j.Z], () => n && null != t && j.Z.hasVideo(t), [n, t]),
        o = (0, s.Wu)([f.ZP], () => x.default.keys(e).reduce((e, t) => (e.push(...f.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
        a = (0, s.e7)([f.ZP], () => Array.from(f.ZP.getSelfEmbeddedActivities().values()).some(t => {
          let {
            location: n
          } = t, r = (0, p.p)(n);
          return null != r && null != e[r]
        })),
        c = o.length > 0,
        u = false,
        d = false,
        h = false,
        g = false;
      return n ? (u = !l, d = l, h = r, g = a) : (h = i, g = c), (0, m.Or)({
        audio: u,
        video: d,
        screenshare: h,
        liveStage: false,
        isCurrentUserConnected: n,
        activity: g
      })
    }(G),
    z = V > 0 ? (0, Chunk593364.N)(V) : null,
    K = Chunk473749.useCallback(() => {
      D()
    }, [D]);
  return (0, Chunk54381.jsxs)(Chunk682662.H, {
    children: [(0, Chunk54381.jsx)(Chunk276952.Z, {
      selected: F,
      hovered: L,
      unread: H && !k,
      className: Chunk499951.pill
    }), (0, Chunk54381.jsx)(Chunk603274.Z, {
      onShow: K,
      children: (0, Chunk54381.jsx)(Chunk110977.S, {
        children: (0, Chunk54381.jsx)(Chunk481060.aRk, {
          selected: true,
          upperBadge: W,
          lowerBadge: z,
          children: (0, Chunk54381.jsx)(Chunk481060.LYs, (e = T({}, Chunk120356), t = t = {
            ariaLabel: Chunk388032.intl.formatToPlainString(Chunk388032.t["/uzRss"], {
              guildName: Chunk388032.intl.string(Chunk388032.t.wMWyci),
              mentions: V
            }),
            "aria-selected": F,
            to: {
              pathname: Chunk981631.Z5c.CHANNEL(Chunk981631.I_8, U),
              state: A
            },
            selected: F || L,
            onMouseEnter: () => M(true),
            onMouseLeave: () => M(false),
            onMouseDown: function() {
              null != B && Chunk493683.Z.preload(B.guild_id, B.id)
            },
            onContextMenu: function(e) {
              (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("3190").then(n.bind(n, 631981));
                return t => (0, r.jsx)(e, T({}, t))
              })
            },
            children: (0, Chunk54381.jsx)("div", {
              className: o()(Chunk499951.ring, {
                [Chunk499951.ringActive]: R
              }),
              children: (0, Chunk54381.jsx)(Chunk481060.r7p, {
                size: "custom",
                color: "currentColor",
                className: Chunk499951.favoriteIcon,
                width: 20,
                height: 20
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(exports)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), module))
        })
      })
    })]
  })
}