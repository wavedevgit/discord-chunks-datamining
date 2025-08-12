/** Chunk was on web.js **/
/** chunk id: 950796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dg: () => v,
  TF: () => O,
  q8: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk428548 = require("./428548.jsx"),
  Chunk679219 = require("./679219.jsx"),
  Chunk939039 = require("./939039.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk762961 = require("./762961.js");
let h = 24,
  m = e => f.ZP.close(e),
  g = e => f.ZP.minimize(e),
  E = e => f.ZP.maximize(e);

function b(e) {
  e.stopPropagation()
}

function y(e) {
  let {
    windowKey: t,
    showDivider: n
  } = e, i = (0, r.jsx)(s.P3F, {
    className: a()(p.winButton, p.winButtonClose),
    onClick: () => m(t),
    "aria-label": _.intl.string(_.t.ZdNUj4),
    tabIndex: false,
    children: (0, r.jsx)(l.Z, {})
  }), o = (0, r.jsx)(s.P3F, {
    className: a()(p.winButton, p.winButtonMinMax),
    onClick: () => E(t),
    "aria-label": _.intl.string(_.t.G1u0hI),
    tabIndex: false,
    children: (0, r.jsx)(c.Z, {})
  }), d = (0, r.jsx)(s.P3F, {
    className: a()(p.winButton, p.winButtonMinMax),
    onClick: () => g(t),
    "aria-label": _.intl.string(_.t.CxOC4e),
    tabIndex: false,
    children: (0, r.jsx)(u.Z, {})
  });
  return (0, r.jsxs)("div", {
    className: a()(p.winButtons, {
      [p.winButtonsWithDivider]: n
    }),
    children: [d, o, i]
  })
}

function O(e) {
  let {
    leading: t,
    title: n,
    trailing: o,
    windowKey: s,
    short: l,
    className: c
  } = e, u = (0, d.getPlatform)(), f = i.useCallback(() => E(s), [s]);
  return (0, r.jsxs)("div", {
    className: a()(p.bar, c, {
      [p.shortBar]: l
    }),
    onDoubleClick: f,
    children: [(0, r.jsx)("div", {
      className: p.title,
      children: n
    }), (0, r.jsx)("div", {
      className: p.leading,
      onDoubleClick: b,
      children: t
    }), (0, r.jsxs)("div", {
      className: p.trailing,
      onDoubleClick: b,
      children: [o, u === d.PlatformTypes.WINDOWS && (0, r.jsx)(y, {
        windowKey: s,
        showDivider: null != o
      })]
    })]
  })
}

function v(e) {
  let {
    fixed: t = false,
    show: n,
    windowKey: o
  } = e, s = (0, d.getPlatform)(), l = i.useCallback(() => E(o), [o]), c = s === d.PlatformTypes.WINDOWS;
  return s === d.PlatformTypes.WEB ? null : (0, r.jsx)("div", {
    className: a()(p.bar, p.systemBar, {
      [p.fixed]: t,
      [p.show]: n
    }),
    onDoubleClick: l,
    children: c && (0, r.jsx)("div", {
      className: p.trailing,
      onDoubleClick: b,
      children: (0, r.jsx)(y, {
        windowKey: o
      })
    })
  })
}