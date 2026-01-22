/** Chunk was on web.js **/
/** chunk id: 968898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CS: () => w,
  GQ: () => P,
  O0: () => D,
  Pl: () => v,
  RE: () => I,
  X1: () => S,
  we: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk964486 = require("./964486.js"),
  Chunk555528 = require("./555528.js"),
  Chunk810412 = require("./810412.js"),
  Chunk302614 = require("./302614.jsx"),
  Chunk395011 = require("./395011.js"),
  Chunk119191 = require("./119191.jsx"),
  Chunk581730 = require("./581730.js"),
  Chunk481484 = require("./481484.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk859804 = require("./859804.js");

function v(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: A.oB,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "text-strong",
      children: t
    })
  })
}
let S = 7e3;

function I(e, t) {
  return C((0, o.bG)([_.A], () => _.A.getWidget(e), [e]), t)
}
let T = (e, t) => Date.now() - e < t;

function C(e, t) {
  let n = i.useRef(null == e ? true : e.showExtrasHintTimestamp),
    [r, a] = i.useState(false),
    s = (0, y.A)(),
    o = i.useRef(true);
  return i.useEffect(() => {
    let r = null == e ? true : e.showExtrasHintTimestamp;
    r !== n.current && (n.current = r, a(true), o.current = setTimeout(() => {
      a(false)
    }, t))
  }, [t, null == e ? true : e.showExtrasHintTimestamp]), (0, p.Ay)(() => {
    let n = null == e ? true : e.showExtrasHintTimestamp;
    return null != n && T(n, t) && (a(true), o.current = setTimeout(() => {
      a(false)
    }, t)), () => {
      null != o.current && clearTimeout(o.current)
    }
  }), r && s
}
let N = 8e3;

function R(e) {
  let {
    children: t,
    widgetId: n
  } = e, i = (0, o.bG)([_.A], () => _.A.getWidget(n), [n]), a = C(i, N), s = () => (0, E.sI)((0, b.Jn)(), O.t["1XA04X"], O.intl.string(O.t.uZZGzf), {
    useFlexboxLayout: true,
    highlightAdminWarningIfElevated: false,
    keybindClassName: A.P
  });
  return a ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.A, {
      className: A.Z,
      children: (0, r.jsx)(u.DUT, {
        className: A.SM,
        onClick: () => {
          null != i && (f.A.setInputLocked(false, g.A.getTargetPID()), (0, h.YX)(i.type, {
            type: h.Z5.KEYBIND_HINT,
            value: h.IP.OVERLAY_UNLOCKED
          }))
        },
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-strong",
          children: s()
        })
      })
    }), (0, r.jsx)("div", {
      className: A.Xk
    })]
  }) : (0, r.jsx)("div", {
    className: A.oB,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "text-strong",
      children: t
    })
  })
}

function w(e) {
  let {
    onClick: t
  } = e;
  if ((0, y.A)()) return null;
  let n = O.intl.string(O.t["3D5yo/"]);
  return (0, r.jsx)(c.m, {
    text: n,
    "aria-label": n,
    children: (0, r.jsx)(u.DUT, {
      className: A.x6,
      onClick: t,
      children: (0, r.jsx)(u.Zes, {
        size: "xxs",
        color: l.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}

function P(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? O.intl.string(O.t.q2B3rh) : O.intl.string(O.t.JKGi6o), a = () => {
    (0, d.cC)(t, {
      showAllStreams: !n
    })
  };
  return (0, y.A)() ? null : (0, r.jsx)(c.m, {
    text: i,
    "aria-label": i,
    children: (0, r.jsx)(u.DUT, {
      className: s()(A.x6, n && A.vu),
      onClick: a,
      children: (0, r.jsx)(u.kN9, {
        size: "xxs",
        color: n ? l.A.colors.BACKGROUND_BRAND : l.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}

function D(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? O.intl.string(O.t.cSu80j) : O.intl.string(O.t.cM8Vnm), a = (0, y.A)();
  return (0, r.jsx)(c.m, {
    text: i,
    "aria-label": i,
    asContainer: true,
    children: (0, r.jsx)(u.DUT, {
      className: s()(A.x6, n && A.vu),
      onClick: () => {
        a || (0, d.v0)(t)
      },
      children: (0, r.jsx)(u.qgw, {
        size: "xxs",
        color: n ? l.A.colors.BACKGROUND_BRAND : l.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}