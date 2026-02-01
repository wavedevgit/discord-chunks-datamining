/** Chunk was on 42402 **/
/** chunk id: 586685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => b,
  SB: () => f,
  VD: () => g,
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

function g() {
  return (0, r.jsx)(l.A, {
    section: h.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
    children: (0, r.jsx)(u.A, {})
  })
}

function f(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, r.jsx)(l.A, {
    section: h.JJy.QUESTS,
    children: (0, r.jsx)(o.A, {
      inOldSettings: t
    })
  })
}

function m(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, r.jsx)(l.A, {
    section: h.JJy.LIBRARY_INVENTORY_GIFTS_LIST,
    children: (0, r.jsx)(d.A, {
      inOldSettings: t
    })
  })
}

function b() {
  let {
    analyticsLocations: e
  } = (0, s.Ay)(i.A.USER_SETTINGS_GIFT_INVENTORY);
  return (0, r.jsxs)(s.f5, {
    value: e,
    children: [(0, r.jsx)(c.x, {
      setting: p.H.GIFT_CODE_REDEMPTION,
      children: (0, r.jsx)(g, {})
    }), (0, r.jsx)(c.x, {
      setting: p.H.GIFT_INVENTORY_QUESTS,
      children: (0, r.jsx)(f, {
        inOldSettings: true
      })
    }), (0, r.jsx)(c.x, {
      setting: p.H.GIFT_INVENTORY_LIST,
      children: (0, r.jsx)(m, {
        inOldSettings: true
      })
    }), (0, r.jsx)(c.x, {
      setting: p.H.GIFT_BLOCKED_PAYMENTS,
      children: (0, r.jsx)(a.uK, {})
    })]
  })
}