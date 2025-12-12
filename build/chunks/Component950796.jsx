/** Chunk was on web.js **/
/** chunk id: 950796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dg: () => C,
  On: () => E,
  TF: () => T,
  Y7: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let y = e => _.ZP.close(e),
  O = e => _.ZP.minimize(e),
  v = e => _.ZP.maximize(e);

function S(e) {
  e.stopPropagation()
}

function I(e) {
  let {
    windowKey: t,
    showDivider: n
  } = e, i = (0, r.jsx)(s.P3F, {
    className: a()(h.winButton, h.winButtonClose),
    onClick: () => y(t),
    "aria-label": m.intl.string(m.t.ZdNUj2),
    tabIndex: false,
    children: (0, r.jsx)(u.Z, {})
  }), o = (0, r.jsx)(s.P3F, {
    className: a()(h.winButton, h.winButtonMinMax),
    onClick: () => v(t),
    "aria-label": m.intl.string(m.t.G1u0hK),
    tabIndex: false,
    children: (0, r.jsx)(d.Z, {})
  }), l = (0, r.jsx)(s.P3F, {
    className: a()(h.winButton, h.winButtonMinMax),
    onClick: () => O(t),
    "aria-label": m.intl.string(m.t.CxOC4U),
    tabIndex: false,
    children: (0, r.jsx)(f.Z, {})
  });
  return (0, r.jsxs)("div", {
    className: a()(h.winButtons, {
      [h.winButtonsWithDivider]: n
    }),
    children: [l, o, i]
  })
}

function T(e) {
  let {
    leading: t,
    title: n,
    trailing: o,
    windowKey: s,
    className: l
  } = e, c = (0, p.getPlatform)(), u = i.useCallback(() => v(s), [s]), d = c === p.PlatformTypes.WINDOWS || c === p.PlatformTypes.LINUX;
  return (0, r.jsxs)("div", {
    className: a()(h.bar, l),
    onDoubleClick: u,
    children: [(0, r.jsx)("div", {
      className: h.leading,
      onDoubleClick: S,
      children: t
    }), (0, r.jsx)("div", {
      className: h.title,
      children: n
    }), (0, r.jsxs)("div", {
      className: h.trailing,
      onDoubleClick: S,
      children: [o, d && (0, r.jsx)(I, {
        windowKey: s,
        showDivider: null != o
      })]
    })]
  })
}

function C(e) {
  let {
    fixed: t = false,
    show: n,
    windowKey: o
  } = e, s = (0, p.getPlatform)(), u = i.useCallback(() => {
    c.Z.isOpen() && (0, l.Cp)()
  }, []), d = i.useCallback(() => {
    let e = c.Z.getLastShowTimestamp();
    null != e && Date.now() - e < g || v(o)
  }, [o]), f = s === p.PlatformTypes.WINDOWS;
  if (s === p.PlatformTypes.WEB) return null;
  let _ = f || s === p.PlatformTypes.LINUX;
  return (0, r.jsx)("div", {
    className: a()(h.bar, h.systemBar, {
      [h.fixed]: t,
      [h.show]: n
    }),
    onClick: u,
    onDoubleClick: d,
    children: _ && (0, r.jsx)("div", {
      className: h.trailing,
      onDoubleClick: S,
      children: (0, r.jsx)(I, {
        windowKey: o
      })
    })
  })
}