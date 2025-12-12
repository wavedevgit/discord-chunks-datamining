/** Chunk was on web.js **/
/** chunk id: 387747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => g,
  nJ: () => h,
  od: () => _,
  rX: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk410575 = require("./410575.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk89057 = require("./89057.jsx"),
  Chunk625252 = require("./625252.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk541540 = require("./541540.jsx"),
  Chunk29599 = require("./29599.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js");

function _() {
  return (0, Chunk54381.jsx)(Chunk410575.Z, {
    section: Chunk981631.jXE.LIBRARY_INVENTORY_CODE_REDEMPTION,
    children: (0, Chunk54381.jsx)(Chunk541540.Z, {})
  })
}

function m(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, r.jsx)(i.Z, {
    section: p.jXE.QUESTS,
    children: (0, r.jsx)(l.Z, {
      inOldSettings: t
    })
  })
}

function h(e) {
  let {
    inOldSettings: t = false
  } = e;
  return (0, r.jsx)(i.Z, {
    section: p.jXE.LIBRARY_INVENTORY_GIFTS_LIST,
    children: (0, r.jsx)(d.Z, {
      inOldSettings: t
    })
  })
}

function g() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS_GIFT_INVENTORY);
  return (0, Chunk54381.jsxs)(Chunk906732.Gt, {
    value: module,
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.GIFT_CODE_REDEMPTION,
      children: (0, Chunk54381.jsx)(_, {})
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.GIFT_INVENTORY_QUESTS,
      children: (0, Chunk54381.jsx)(m, {
        inOldSettings: true
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.GIFT_INVENTORY_LIST,
      children: (0, Chunk54381.jsx)(h, {
        inOldSettings: true
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.GIFT_BLOCKED_PAYMENTS,
      children: (0, Chunk54381.jsx)(Chunk89057.c8, {})
    })]
  })
}