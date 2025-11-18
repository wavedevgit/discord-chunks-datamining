/** Chunk was on web.js **/
/** chunk id: 850827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk468812 = require("./468812.js");
let w = (0, Chunk730749.Z)(e => {
  let {
    activity: t,
    embeddedActivity: n,
    user: i,
    applicationStream: o,
    className: u,
    guildId: w,
    channelId: L,
    source: x,
    buttonVariant: M,
    type: k,
    onAction: j
  } = e, U = (0, l.e7)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
  }), G = k === b.Y.STREAM_PREVIEW || null != o, B = (0, g.Z)(t), Z = B || G ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL, F = (null == t ? true : t.type) === P.IIU.HANG_STATUS, V = (0, l.e7)([m.Z, p.Z], () => {
    var e;
    return F ? p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(i.id)) ? true : e.channelId) : null
  }), H = () => {
    if ((0, E.Z)(t)) return (0, r.jsx)(y.Z, {
      platform: d.Z.get(P.ABu.XBOX),
      variant: M,
      onAction: j,
      icon: c.Mko
    });
    if ((null == t ? true : t.platform) === P.M7m.PS4 || (null == t ? true : t.platform) === P.M7m.PS5) return (0, r.jsx)(y.Z, {
      variant: M,
      platform: d.Z.get(P.ABu.PLAYSTATION),
      onAction: j,
      icon: c.Tsp
    });
    if (B) {
      let e = (0, r.jsx)(C.Z, {
          activity: t,
          user: i,
          guildId: w,
          channelId: L,
          source: x,
          onAction: j
        }),
        n = (0, r.jsx)(A.Z, {
          activity: t,
          user: i,
          source: x,
          onAction: j
        });
      return (0, r.jsxs)(c.ButtonGroup, {
        size: "sm",
        fullWidth: true,
        children: [n, e]
      })
    }
    if ((0, _.dS)(t)) {
      let e = (0, _.rq)(t);
      return null == e ? null : (0, r.jsx)(T.Z, {
        guildId: e.guildId,
        channelId: e.channelId,
        variant: M,
        onAction: j
      })
    }
    return G ? (0, r.jsx)(R.Z, {
      isCurrentUser: U.id === i.id,
      applicationStream: o,
      onAction: j
    }) : F && null != V ? (0, r.jsx)(I.Z, {
      userId: i.id,
      variant: M,
      hangStatusChannel: V,
      onAction: j
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, {
        activity: t,
        variant: M,
        onAction: j
      }), (0, r.jsx)(v.Z, {
        activity: t,
        embeddedActivity: n,
        user: i,
        variant: M,
        onAction: j
      }), (0, r.jsx)(S.Z, {
        activity: t,
        user: i,
        variant: M,
        onAction: j
      }), (0, r.jsx)(O.Z, {
        user: i,
        activity: t,
        variant: M,
        onAction: j
      })]
    })
  }, Y = Z === f.Z.Direction.VERTICAL;
  return (0, r.jsx)(f.Z, {
    grow: 0,
    align: f.Z.Align.STRETCH,
    direction: Z,
    wrap: Y ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
    className: a()(u, D.buttonsWrapper, Y ? D.vertical : D.horizontal),
    children: H()
  })
})