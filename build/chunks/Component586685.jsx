/** Chunk was on 32502 **/
/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  SB: () => p,
  VD: () => x,
  b0: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk820284 = require("./820284.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk459793 = require("./459793.jsx"),
  Chunk980545 = require("./980545.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk326911 = require("./326911.jsx"),
  Chunk265729 = require("./265729.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js");

function x() {
  return (0, i.jsx)(l.A, {
    section: g.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
    children: (0, i.jsx)(d.A, {})
  })
}

function p(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, i.jsx)(l.A, {
    section: g.JJy.QUESTS,
    children: (0, i.jsx)(o.A, {
      inOldSettings: t
    })
  })
}

function m(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, i.jsx)(l.A, {
    section: g.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
    children: (0, i.jsx)(u.A, {
      inOldSettings: t
    })
  })
}

function A() {
  let {
    analyticsLocations: e
  } = (0, r.Ay)(s.A.USER_SETTINGS_GIFT_INVENTORY);
  return (0, i.jsxs)(r.f5, {
    value: e,
    children: [(0, i.jsx)(c.x, {
      setting: h.H.GIFT_CODE_REDEMPTION,
      children: (0, i.jsx)(x, {})
    }), (0, i.jsx)(c.x, {
      setting: h.H.GIFT_INVENTORY_QUESTS,
      children: (0, i.jsx)(p, {
        inOldSettings: true
      })
    }), (0, i.jsx)(c.x, {
      setting: h.H.GIFT_INVENTORY_LIST,
      children: (0, i.jsx)(m, {
        inOldSettings: true
      })
    }), (0, i.jsx)(c.x, {
      setting: h.H.GIFT_BLOCKED_PAYMENTS,
      children: (0, i.jsx)(a.uK, {})
    })]
  })
}