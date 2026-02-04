/** Chunk was on 88474 **/
/** chunk id: 592182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk573648 = require("./573648.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk338234 = require("./338234.js"),
  Chunk655724 = require("./655724.jsx"),
  Chunk82149 = require("./82149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk90644 = require("./90644.js"),
  Chunk61330 = require("./61330.js"),
  Chunk153331 = require("./153331.jsx"),
  Chunk33852 = require("./33852.jsx"),
  Chunk834425 = require("./834425.jsx"),
  Chunk284525 = require("./284525.jsx"),
  Chunk730430 = require("./730430.jsx"),
  Chunk443493 = require("./443493.jsx"),
  Chunk462226 = require("./462226.jsx"),
  Chunk329151 = require("./329151.jsx"),
  Chunk738080 = require("./738080.jsx"),
  Chunk648246 = require("./648246.jsx"),
  Chunk305637 = require("./305637.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk620452 = require("./620452.js");
let D = (0, Chunk707606.A)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: a,
    className: u,
    guildId: D,
    channelId: R,
    source: k,
    buttonVariant: U,
    type: M,
    onAction: V
  } = e, G = (0, s.bG)([b.default], () => {
    let e = b.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), F = M === v.O.STREAM_PREVIEW || null != a, H = (0, A.A)(t), W = H || F ? f.A.Direction.HORIZONTAL : f.A.Direction.VERTICAL, B = (null == t ? true : t.type) === w.$pd.HANG_STATUS, z = (0, s.bG)([h.A, y.A], () => {
    var e;
    return B ? y.A.getChannel(null == (e = h.A.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), K = (0, s.bG)([y.A], () => null != R ? y.A.getChannel(R) : null, [R]), {
    enableUserHoverActivities: Y
  } = (0, p.fC)({
    guildId: null != D ? D : null == K ? true : K.guild_id,
    location: "UserActivityActions"
  }), J = W === f.A.Direction.VERTICAL;
  return (0, r.jsx)(f.A, {
    grow: 0,
    align: f.A.Align.STRETCH,
    direction: W,
    wrap: J ? f.A.Wrap.WRAP : f.A.Wrap.NO_WRAP,
    className: l()(u, L.jx, J ? L.Vd : L.xM),
    children: (() => {
      if ((0, _.A)(t)) return (0, r.jsx)(O.A, {
        platform: d.A.get(w.fg2.XBOX),
        variant: U,
        onAction: V,
        icon: c.YWd
      });
      if ((null == t ? true : t.platform) === w.yTV.PS4 || (null == t ? true : t.platform) === w.yTV.PS5) return (0, r.jsx)(O.A, {
        variant: U,
        platform: d.A.get(w.fg2.PLAYSTATION),
        onAction: V,
        icon: c.Xj
      });
      if (H) {
        let e = (0, r.jsx)(C.A, {
            activity: t,
            user: i,
            guildId: D,
            channelId: R,
            source: k,
            onAction: V
          }),
          n = (0, r.jsx)(P.A, {
            activity: t,
            user: i,
            source: k,
            onAction: V
          });
        return (0, r.jsxs)(c.ButtonGroup, {
          size: "sm",
          fullWidth: true,
          children: [n, e]
        })
      }
      if ((0, g.Cy)(t)) {
        let e = (0, g.UW)(t);
        return null == e ? null : (0, r.jsx)(x.A, {
          guildId: e.guildId,
          channelId: e.channelId,
          variant: U,
          onAction: V
        })
      }
      return F ? (0, r.jsx)(N.A, {
        isCurrentUser: G.id === i.id,
        applicationStream: a,
        onAction: V
      }) : B && null != z ? (0, r.jsx)(I.A, {
        userId: i.id,
        variant: U,
        hangStatusChannel: z,
        onAction: V
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T.A, {
          activity: t,
          variant: U,
          onAction: V
        }), (0, r.jsx)(j.A, {
          activity: t,
          embeddedActivity: n,
          user: i,
          variant: U,
          onAction: V
        }), (0, r.jsx)(E.A, {
          activity: t,
          user: i,
          variant: U,
          onAction: V
        }), null != K && Y ? (0, r.jsx)(m.B, {
          userId: i.id,
          channel: K,
          onAction: V
        }) : null, (0, r.jsx)(S.A, {
          user: i,
          activity: t,
          variant: U,
          onAction: V
        })]
      })
    })()
  })
})