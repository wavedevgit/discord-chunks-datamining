/** Chunk was on web.js **/
/** chunk id: 950796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dg: () => A,
  On: () => E,
  TF: () => S,
  Y7: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk51596 = require("./51596.js"),
  Chunk823385 = require("./823385.js"),
  Chunk428548 = require("./428548.jsx"),
  Chunk679219 = require("./679219.jsx"),
  Chunk939039 = require("./939039.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107009 = require("./107009.js");
let g = 1e3;

function E(e) {
  let {
    isPopoutWindow: t
  } = e;
  return t ? "refresh-title-bar-small" : true
}

function b(e) {
  let {
    isPopoutWindow: t
  } = e;
  return t ? 16 : 24
}
let y = e => p.ZP.close(e),
  O = e => p.ZP.minimize(e),
  v = e => p.ZP.maximize(e);

function I(e) {
  e.stopPropagation()
}

function T(e) {
  let {
    windowKey: t,
    showDivider: n
  } = e, i = (0, r.jsx)(s.P3F, {
    className: o()(m.winButton, m.winButtonClose),
    onClick: () => y(t),
    "aria-label": h.intl.string(h.t.ZdNUj2),
    tabIndex: false,
    children: (0, r.jsx)(u.Z, {})
  }), a = (0, r.jsx)(s.P3F, {
    className: o()(m.winButton, m.winButtonMinMax),
    onClick: () => v(t),
    "aria-label": h.intl.string(h.t.G1u0hK),
    tabIndex: false,
    children: (0, r.jsx)(d.Z, {})
  }), l = (0, r.jsx)(s.P3F, {
    className: o()(m.winButton, m.winButtonMinMax),
    onClick: () => O(t),
    "aria-label": h.intl.string(h.t.CxOC4U),
    tabIndex: false,
    children: (0, r.jsx)(f.Z, {})
  });
  return (0, r.jsxs)("div", {
    className: o()(m.winButtons, {
      [m.winButtonsWithDivider]: n
    }),
    children: [l, a, i]
  })
}

function S(e) {
  let {
    leading: t,
    title: n,
    trailing: a,
    windowKey: s,
    className: l
  } = e, c = (0, _.getPlatform)(), u = i.useCallback(() => v(s), [s]), d = c === _.PlatformTypes.WINDOWS || c === _.PlatformTypes.LINUX;
  return (0, r.jsxs)("div", {
    className: o()(m.bar, l),
    onDoubleClick: u,
    children: [(0, r.jsx)("div", {
      className: m.leading,
      onDoubleClick: I,
      children: t
    }), (0, r.jsx)("div", {
      className: m.title,
      children: n
    }), (0, r.jsxs)("div", {
      className: m.trailing,
      onDoubleClick: I,
      children: [a, d && (0, r.jsx)(T, {
        windowKey: s,
        showDivider: null != a
      })]
    })]
  })
}

function A(e) {
  let {
    fixed: t = false,
    show: n,
    windowKey: a
  } = e, s = (0, _.getPlatform)(), u = i.useCallback(() => {
    c.Z.isOpen() && (0, l.Cp)()
  }, []), d = i.useCallback(() => {
    let e = c.Z.getLastShowTimestamp();
    null != e && Date.now() - e < g || v(a)
  }, [a]), f = s === _.PlatformTypes.WINDOWS;
  if (s === _.PlatformTypes.WEB) return null;
  let p = f || s === _.PlatformTypes.LINUX;
  return (0, r.jsx)("div", {
    className: o()(m.bar, m.systemBar, {
      [m.fixed]: t,
      [m.show]: n
    }),
    onClick: u,
    onDoubleClick: d,
    children: p && (0, r.jsx)("div", {
      className: m.trailing,
      onDoubleClick: I,
      children: (0, r.jsx)(T, {
        windowKey: a
      })
    })
  })
}