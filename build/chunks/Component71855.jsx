/** Chunk was on web.js **/
/** chunk id: 71855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LI: () => y,
  cq: () => S,
  m2: () => E,
  v5: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk793322 = require("./793322.js"),
  Chunk174768 = require("./174768.js"),
  Chunk130412 = require("./130412.jsx"),
  Chunk155545 = require("./155545.jsx"),
  Chunk561155 = require("./561155.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk450295 = require("./450295.js");
let g = 1e3;

function E(e) {
  let {
    isPopoutWindow: t
  } = e;
  return t ? "refresh-title-bar-small" : true
}

function y(e) {
  let {
    isPopoutWindow: t
  } = e;
  return t ? 16 : 24
}
let b = e => _.Ay.close(e),
  O = e => _.Ay.minimize(e),
  v = e => _.Ay.maximize(e);

function A(e) {
  e.stopPropagation()
}

function I(e) {
  let {
    windowKey: t,
    showDivider: n
  } = e, i = (0, r.jsx)(s.DUT, {
    className: o()(m.R6, m.d1),
    onClick: () => b(t),
    "aria-label": h.intl.string(h.t.ZdNUj2),
    tabIndex: false,
    children: (0, r.jsx)(u.A, {})
  }), a = (0, r.jsx)(s.DUT, {
    className: o()(m.R6, m.T0),
    onClick: () => v(t),
    "aria-label": h.intl.string(h.t.G1u0hK),
    tabIndex: false,
    children: (0, r.jsx)(d.A, {})
  }), l = (0, r.jsx)(s.DUT, {
    className: o()(m.R6, m.T0),
    onClick: () => O(t),
    "aria-label": h.intl.string(h.t.CxOC4U),
    tabIndex: false,
    children: (0, r.jsx)(f.A, {})
  });
  return (0, r.jsxs)("div", {
    className: o()(m.kU, {
      [m.Fx]: n
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
  } = e, c = (0, p.getPlatform)(), u = i.useCallback(() => v(s), [s]), d = c === p.PlatformTypes.WINDOWS || c === p.PlatformTypes.LINUX;
  return (0, r.jsxs)("div", {
    className: o()(m.M0, l),
    onDoubleClick: u,
    children: [(0, r.jsx)("div", {
      className: m.R4,
      onDoubleClick: A,
      children: t
    }), (0, r.jsx)("div", {
      className: m.DD,
      children: n
    }), (0, r.jsxs)("div", {
      className: m.ZY,
      onDoubleClick: A,
      children: [a, d && (0, r.jsx)(I, {
        windowKey: s,
        showDivider: null != a
      })]
    })]
  })
}

function T(e) {
  let {
    fixed: t = false,
    show: n,
    windowKey: a
  } = e, s = (0, p.getPlatform)(), u = i.useCallback(() => {
    c.A.isOpen() && (0, l.jD)()
  }, []), d = i.useCallback(() => {
    let e = c.A.getLastShowTimestamp();
    null != e && Date.now() - e < g || v(a)
  }, [a]), f = s === p.PlatformTypes.WINDOWS;
  if (s === p.PlatformTypes.WEB) return null;
  let _ = f || s === p.PlatformTypes.LINUX;
  return (0, r.jsx)("div", {
    className: o()(m.M0, m.bN, {
      [m.Zu]: t,
      [m.WU]: n
    }),
    onClick: u,
    onDoubleClick: d,
    children: _ && (0, r.jsx)("div", {
      className: m.ZY,
      onDoubleClick: A,
      children: (0, r.jsx)(I, {
        windowKey: a
      })
    })
  })
}