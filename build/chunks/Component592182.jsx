/** Chunk was on web.js **/
/** chunk id: 592182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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
let D = (0, Chunk707606.A)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: s,
    className: u,
    guildId: D,
    channelId: x,
    source: L,
    buttonVariant: j,
    type: M,
    onAction: k
  } = e, U = (0, l.bG)([h.default], () => {
    let e = h.default.getCurrentUser();
    return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), G = M === y.O.STREAM_PREVIEW || null != s, V = (0, g.A)(t), F = V || G ? f.A.Direction.HORIZONTAL : f.A.Direction.VERTICAL, B = (null == t ? true : t.type) === w.$pd.HANG_STATUS, H = (0, l.bG)([m.A, _.A], () => {
    var e;
    return B ? _.A.getChannel(null == (e = m.A.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), Y = () => {
    if ((0, E.A)(t)) return (0, r.jsx)(b.A, {
      platform: d.A.get(w.fg2.XBOX),
      variant: j,
      onAction: k,
      icon: c.YWd
    });
    if ((null == t ? true : t.platform) === w.yTV.PS4 || (null == t ? true : t.platform) === w.yTV.PS5) return (0, r.jsx)(b.A, {
      variant: j,
      platform: d.A.get(w.fg2.PLAYSTATION),
      onAction: k,
      icon: c.Xj
    });
    if (V) {
      let e = (0, r.jsx)(C.A, {
          activity: t,
          user: i,
          guildId: D,
          channelId: x,
          source: L,
          onAction: k
        }),
        n = (0, r.jsx)(T.A, {
          activity: t,
          user: i,
          source: L,
          onAction: k
        });
      return (0, r.jsxs)(c.ButtonGroup, {
        size: "sm",
        fullWidth: true,
        children: [n, e]
      })
    }
    if ((0, p.Cy)(t)) {
      let e = (0, p.UW)(t);
      return null == e ? null : (0, r.jsx)(I.A, {
        guildId: e.guildId,
        channelId: e.channelId,
        variant: j,
        onAction: k
      })
    }
    return G ? (0, r.jsx)(R.A, {
      isCurrentUser: U.id === i.id,
      applicationStream: s,
      onAction: k
    }) : B && null != H ? (0, r.jsx)(A.A, {
      userId: i.id,
      variant: j,
      hangStatusChannel: H,
      onAction: k
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.A, {
        activity: t,
        variant: j,
        onAction: k
      }), (0, r.jsx)(v.A, {
        activity: t,
        embeddedActivity: n,
        user: i,
        variant: j,
        onAction: k
      }), (0, r.jsx)(S.A, {
        activity: t,
        user: i,
        variant: j,
        onAction: k
      }), (0, r.jsx)(O.A, {
        user: i,
        activity: t,
        variant: j,
        onAction: k
      })]
    })
  }, W = F === f.A.Direction.VERTICAL;
  return (0, r.jsx)(f.A, {
    grow: 0,
    align: f.A.Align.STRETCH,
    direction: F,
    wrap: W ? f.A.Wrap.WRAP : f.A.Wrap.NO_WRAP,
    className: a()(u, P.jx, W ? P.Vd : P.xM),
    children: Y()
  })
})