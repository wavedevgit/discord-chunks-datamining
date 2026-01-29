/** Chunk was on 1113 **/
/** chunk id: 730253, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk65611 = require("./65611.jsx"),
  Chunk855725 = require("./855725.jsx"),
  Chunk366811 = require("./366811.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk661191 = require("./661191.js"),
  Chunk181079 = require("./181079.js"),
  Chunk93055 = require("./93055.js"),
  Chunk210082 = require("./210082.js"),
  Chunk595567 = require("./595567.jsx"),
  Chunk332396 = require("./332396.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk299446 = require("./299446.js");

function w(e) {
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
let R = {
  analyticsSource: {
    page: Chunk652215.liQ.GUILD_CHANNEL,
    section: Chunk652215.JJy.CHANNEL_LIST,
    object: Chunk652215.ZSU.CHANNEL
  }
};

function D() {
  var e, t;
  let i, D, L, M, k, G, U, V, B, H, F, K, Y = (0, a.Vd)("favorites"),
    {
      favoriteAdded: W,
      clearFavoriteAdded: z
    } = (0, E.CJ)(),
    [q, X] = l.useState(false),
    {
      favoriteServerMuted: J,
      favoriteChannels: Q
    } = (0, o.cf)([v.A], () => ({
      favoriteChannels: v.A.getFavoriteChannels(),
      favoriteServerMuted: v.A.favoriteServerMuted
    })),
    Z = (0, o.bG)([_.A], () => _.A.getChannelId(N.YYv)),
    $ = (0, o.bG)([O.A], () => O.A.getChannel(Z)),
    ee = (0, A.A)(e => e.guildId) === N.YYv,
    {
      badge: et,
      unread: en
    } = (0, C.A)(Q),
    er = (D = null != (i = (0, o.bG)([_.A], () => _.A.getVoiceChannelId())) && null != Q[i], L = (0, o.bG)([y.A], () => {
      if (!D) returnfalse;
      let e = y.A.getCurrentUserActiveStream();
      return null != e && null != Q[e.channelId]
    }), M = (0, o.bG)([y.A], () => y.A.getAllApplicationStreams().some(e => null != Q[e.channelId])), k = (0, o.bG)([x.A], () => D && null != i && x.A.hasVideo(i), [D, i]), G = (0, o.yK)([h.Ay], () => j.default.keys(Q).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), [])), U = (0, o.bG)([h.Ay], () => Array.from(h.Ay.getSelfEmbeddedActivities().values()).some(e => {
      let {
        location: t
      } = e, n = (0, p.H)(t);
      return null != n && null != Q[n]
    })), V = G.length > 0, B = false, H = false, F = false, K = false, D ? (B = !k, H = k, F = L, K = U) : (F = M, K = V), (0, m.oi)({
      audio: B,
      video: H,
      screenshare: F,
      liveStage: false,
      isCurrentUserConnected: D,
      activity: K
    })),
    el = et > 0 ? (0, b.w)(et) : null,
    ei = l.useCallback(() => {
      z()
    }, [z]);
  return (0, r.jsxs)(f.c, {
    children: [(0, r.jsx)(g.A, {
      selected: ee,
      hovered: q,
      unread: en && !J,
      className: P.Io
    }), (0, r.jsx)(I.A, {
      onShow: ei,
      children: (0, r.jsx)(S.Q, {
        children: (0, r.jsx)(c.Qk9, {
          selected: true,
          upperBadge: er,
          lowerBadge: el,
          children: (0, r.jsx)(c.jlP, (e = w({}, Y), t = t = {
            ariaLabel: T.intl.formatToPlainString(T.t["/uzRss"], {
              guildName: T.intl.string(T.t.wMWyci),
              mentions: et
            }),
            "aria-selected": ee,
            to: {
              pathname: N.BVt.CHANNEL(N.YYv, Z),
              state: R
            },
            selected: ee || q,
            onMouseEnter: () => X(true),
            onMouseLeave: () => X(false),
            onMouseDown: function() {
              null != $ && u.A.preload($.guild_id, $.id)
            },
            onContextMenu: function(e) {
              (0, d.L3)(e, async () => {
                let {
                  default: e
                } = await n.e("74654").then(n.bind(n, 521709));
                return t => (0, r.jsx)(e, w({}, t))
              })
            },
            children: (0, r.jsx)("div", {
              className: s()(P.hN, {
                [P.b1]: W
              }),
              children: (0, r.jsx)(c.Gg5, {
                size: "custom",
                color: "currentColor",
                className: P.wB,
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