/** Chunk was on web.js **/
/** chunk id: 850827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk750154 = require("./750154.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk942596 = require("./942596.jsx"),
  Chunk606925 = require("./606925.jsx"),
  Chunk719216 = require("./719216.jsx"),
  Chunk429589 = require("./429589.jsx"),
  Chunk276149 = require("./276149.jsx"),
  Chunk636245 = require("./636245.jsx"),
  Chunk697761 = require("./697761.jsx"),
  Chunk611459 = require("./611459.jsx"),
  Chunk544671 = require("./544671.jsx"),
  Chunk757182 = require("./757182.jsx"),
  Chunk910424 = require("./910424.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk964719 = require("./964719.js");
let D = (0, Chunk730749.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: a,
    className: u,
    guildId: D,
    channelId: x,
    source: L,
    buttonVariant: j,
    type: M,
    onAction: k
  } = e, U = (0, l.e7)([m.default], () => {
    let e = m.default.getCurrentUser();
    return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), G = M === b.Y.STREAM_PREVIEW || null != a, Z = (0, g.Z)(t), F = Z || G ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL, B = (null == t ? true : t.type) === R.IIU.HANG_STATUS, V = (0, l.e7)([h.Z, _.Z], () => {
    var e;
    return B ? _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), H = () => {
    if ((0, E.Z)(t)) return (0, r.jsx)(y.Z, {
      platform: d.Z.get(R.ABu.XBOX),
      variant: j,
      onAction: k,
      icon: c.Mko
    });
    if ((null == t ? true : t.platform) === R.M7m.PS4 || (null == t ? true : t.platform) === R.M7m.PS5) return (0, r.jsx)(y.Z, {
      variant: j,
      platform: d.Z.get(R.ABu.PLAYSTATION),
      onAction: k,
      icon: c.Tsp
    });
    if (Z) {
      let e = (0, r.jsx)(A.Z, {
          activity: t,
          user: i,
          guildId: D,
          channelId: x,
          source: L,
          onAction: k
        }),
        n = (0, r.jsx)(C.Z, {
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
    if ((0, p.dS)(t)) {
      let e = (0, p.rq)(t);
      return null == e ? null : (0, r.jsx)(I.Z, {
        guildId: e.guildId,
        channelId: e.channelId,
        variant: j,
        onAction: k
      })
    }
    return G ? (0, r.jsx)(P.Z, {
      isCurrentUser: U.id === i.id,
      applicationStream: a,
      onAction: k
    }) : B && null != V ? (0, r.jsx)(S.Z, {
      userId: i.id,
      variant: j,
      hangStatusChannel: V,
      onAction: k
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, {
        activity: t,
        variant: j,
        onAction: k
      }), (0, r.jsx)(v.Z, {
        activity: t,
        embeddedActivity: n,
        user: i,
        variant: j,
        onAction: k
      }), (0, r.jsx)(T.Z, {
        activity: t,
        user: i,
        variant: j,
        onAction: k
      }), (0, r.jsx)(O.Z, {
        user: i,
        activity: t,
        variant: j,
        onAction: k
      })]
    })
  }, Y = F === f.Z.Direction.VERTICAL;
  return (0, r.jsx)(f.Z, {
    grow: 0,
    align: f.Z.Align.STRETCH,
    direction: F,
    wrap: Y ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
    className: o()(u, w.buttonsWrapper, Y ? w.vertical : w.horizontal),
    children: H()
  })
})