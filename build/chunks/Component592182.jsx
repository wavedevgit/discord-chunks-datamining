/** Chunk was on 78572 **/
/** chunk id: 592182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk573648 = require("./573648.js"),
  Chunk235986 = require("./235986.jsx"),
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
let C = (0, Chunk707606.A)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: a,
    className: u,
    guildId: C,
    channelId: D,
    source: L,
    buttonVariant: k,
    type: R,
    onAction: M
  } = e, V = (0, o.bG)([g.default], () => {
    let e = g.default.getCurrentUser();
    return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), U = R === h.O.STREAM_PREVIEW || null != a, G = (0, b.A)(t), W = G || U ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, z = (null == t ? true : t.type) === w.$pd.HANG_STATUS, H = (0, o.bG)([y.A, m.A], () => {
    var e;
    return z ? m.A.getChannel(null == (e = y.A.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), F = W === p.A.Direction.VERTICAL;
  return (0, r.jsx)(p.A, {
    grow: 0,
    align: p.A.Align.STRETCH,
    direction: W,
    wrap: F ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
    className: l()(u, N.jx, F ? N.Vd : N.xM),
    children: (() => {
      if ((0, _.A)(t)) return (0, r.jsx)(A.A, {
        platform: d.A.get(w.fg2.XBOX),
        variant: k,
        onAction: M,
        icon: c.YWd
      });
      if ((null == t ? true : t.platform) === w.yTV.PS4 || (null == t ? true : t.platform) === w.yTV.PS5) return (0, r.jsx)(A.A, {
        variant: k,
        platform: d.A.get(w.fg2.PLAYSTATION),
        onAction: M,
        icon: c.Xj
      });
      if (G) {
        let e = (0, r.jsx)(T.A, {
            activity: t,
            user: i,
            guildId: C,
            channelId: D,
            source: L,
            onAction: M
          }),
          n = (0, r.jsx)(I.A, {
            activity: t,
            user: i,
            source: L,
            onAction: M
          });
        return (0, r.jsxs)(c.ButtonGroup, {
          size: "sm",
          fullWidth: true,
          children: [n, e]
        })
      }
      if ((0, f.Cy)(t)) {
        let e = (0, f.UW)(t);
        return null == e ? null : (0, r.jsx)(j.A, {
          guildId: e.guildId,
          channelId: e.channelId,
          variant: k,
          onAction: M
        })
      }
      return U ? (0, r.jsx)(E.A, {
        isCurrentUser: V.id === i.id,
        applicationStream: a,
        onAction: M
      }) : z && null != H ? (0, r.jsx)(S.A, {
        userId: i.id,
        variant: k,
        hangStatusChannel: H,
        onAction: M
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(P.A, {
          activity: t,
          variant: k,
          onAction: M
        }), (0, r.jsx)(O.A, {
          activity: t,
          embeddedActivity: n,
          user: i,
          variant: k,
          onAction: M
        }), (0, r.jsx)(x.A, {
          activity: t,
          user: i,
          variant: k,
          onAction: M
        }), (0, r.jsx)(v.A, {
          user: i,
          activity: t,
          variant: k,
          onAction: M
        })]
      })
    })()
  })
})