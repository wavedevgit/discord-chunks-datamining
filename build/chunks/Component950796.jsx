/** Chunk was on web.js **/
/** chunk id: 950796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dg: () => I,
  On: () => h,
  TF: () => v,
  Y7: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk428548 = require("./428548.jsx"),
  Chunk679219 = require("./679219.jsx"),
  Chunk939039 = require("./939039.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107009 = require("./107009.js");

function h(e) {
  let {
    isPopoutWindow: t,
    isSearchDesktopTopLevelEnabled: n
  } = e;
  return t ? "refresh-title-bar-small" : n ? "refresh-title-bar-large" : true
}

function m(e) {
  let {
    isPopoutWindow: t,
    isSearchDesktopTopLevelEnabled: n
  } = e;
  return t ? 16 : n ? 32 : 24
}
let g = e => f.ZP.close(e),
  E = e => f.ZP.minimize(e),
  b = e => f.ZP.maximize(e);

function y(e) {
  e.stopPropagation()
}

function O(e) {
  let {
    windowKey: t,
    showDivider: n
  } = e, i = (0, r.jsx)(s.P3F, {
    className: o()(p.winButton, p.winButtonClose),
    onClick: () => g(t),
    "aria-label": _.intl.string(_.t.ZdNUj4),
    tabIndex: false,
    children: (0, r.jsx)(l.Z, {})
  }), a = (0, r.jsx)(s.P3F, {
    className: o()(p.winButton, p.winButtonMinMax),
    onClick: () => b(t),
    "aria-label": _.intl.string(_.t.G1u0hI),
    tabIndex: false,
    children: (0, r.jsx)(c.Z, {})
  }), d = (0, r.jsx)(s.P3F, {
    className: o()(p.winButton, p.winButtonMinMax),
    onClick: () => E(t),
    "aria-label": _.intl.string(_.t.CxOC4e),
    tabIndex: false,
    children: (0, r.jsx)(u.Z, {})
  });
  return (0, r.jsxs)("div", {
    className: o()(p.winButtons, {
      [p.winButtonsWithDivider]: n
    }),
    children: [d, a, i]
  })
}

function v(e) {
  let {
    leading: t,
    title: n,
    trailing: a,
    windowKey: s,
    className: l
  } = e, c = (0, d.getPlatform)(), u = i.useCallback(() => b(s), [s]);
  return (0, r.jsxs)("div", {
    className: o()(p.bar, l),
    onDoubleClick: u,
    children: [(0, r.jsx)("div", {
      className: p.title,
      children: n
    }), (0, r.jsx)("div", {
      className: p.leading,
      onDoubleClick: y,
      children: t
    }), (0, r.jsxs)("div", {
      className: p.trailing,
      onDoubleClick: y,
      children: [a, c === d.PlatformTypes.WINDOWS && (0, r.jsx)(O, {
        windowKey: s,
        showDivider: null != a
      })]
    })]
  })
}

function I(e) {
  let {
    fixed: t = false,
    show: n,
    windowKey: a
  } = e, s = (0, d.getPlatform)(), l = i.useCallback(() => b(a), [a]), c = s === d.PlatformTypes.WINDOWS;
  return s === d.PlatformTypes.WEB ? null : (0, r.jsx)("div", {
    className: o()(p.bar, p.systemBar, {
      [p.fixed]: t,
      [p.show]: n
    }),
    onDoubleClick: l,
    children: c && (0, r.jsx)("div", {
      className: p.trailing,
      onDoubleClick: y,
      children: (0, r.jsx)(O, {
        windowKey: a
      })
    })
  })
}