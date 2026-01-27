/** Chunk was on 21425 **/
/** chunk id: 968898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CS: () => T,
  GQ: () => N,
  O0: () => w,
  Pl: () => j,
  RE: () => I,
  X1: () => S,
  we: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function j(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: O.oB,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "text-strong",
      children: t
    })
  })
}
let S = 7e3;

function I(e, t) {
  return x((0, s.bG)([m.A], () => m.A.getWidget(e), [e]), t)
}

function x(e, t) {
  let n = i.useRef(null == e ? true : e.showExtrasHintTimestamp),
    [r, l] = i.useState(false),
    a = (0, h.A)(),
    s = i.useRef(true);
  return i.useEffect(() => {
    let r = null == e ? true : e.showExtrasHintTimestamp;
    r !== n.current && (n.current = r, l(true), s.current = setTimeout(() => {
      l(false)
    }, t))
  }, [t, null == e ? true : e.showExtrasHintTimestamp]), (0, f.Ay)(() => {
    let n = null == e ? true : e.showExtrasHintTimestamp;
    return null != n && Date.now() - n < t && (l(true), s.current = setTimeout(() => {
      l(false)
    }, t)), () => {
      null != s.current && clearTimeout(s.current)
    }
  }), r && a
}
let E = 8e3;

function P(e) {
  let {
    children: t,
    widgetId: n
  } = e, i = (0, s.bG)([m.A], () => m.A.getWidget(n), [n]);
  return x(i, E) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.A, {
      className: O.Z,
      children: (0, r.jsx)(u.DUT, {
        className: O.SM,
        onClick: () => {
          null != i && (p.A.setInputLocked(false, _.A.getTargetPID()), (0, g.YX)(i.type, {
            type: g.Z5.KEYBIND_HINT,
            value: g.IP.OVERLAY_UNLOCKED
          }))
        },
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-strong",
          children: (0, b.sI)((0, A.Jn)(), v.t["1XA04X"], v.intl.string(v.t.uZZGzf), {
            useFlexboxLayout: true,
            highlightAdminWarningIfElevated: false,
            keybindClassName: O.P
          })
        })
      })
    }), (0, r.jsx)("div", {
      className: O.Xk
    })]
  }) : (0, r.jsx)("div", {
    className: O.oB,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/semibold",
      color: "text-strong",
      children: t
    })
  })
}

function T(e) {
  let {
    onClick: t
  } = e;
  if ((0, h.A)()) return null;
  let n = v.intl.string(v.t["3D5yo/"]);
  return (0, r.jsx)(c.m, {
    text: n,
    "aria-label": n,
    children: (0, r.jsx)(u.DUT, {
      className: O.x6,
      onClick: t,
      children: (0, r.jsx)(u.Zes, {
        size: "xxs",
        color: o.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}

function N(e) {
  let {
    widgetId: t,
    showAllStreams: n
  } = e, i = n ? v.intl.string(v.t.q2B3rh) : v.intl.string(v.t.JKGi6o);
  return (0, h.A)() ? null : (0, r.jsx)(c.m, {
    text: i,
    "aria-label": i,
    children: (0, r.jsx)(u.DUT, {
      className: a()(O.x6, n && O.vu),
      onClick: () => {
        (0, d.cC)(t, {
          showAllStreams: !n
        })
      },
      children: (0, r.jsx)(u.kN9, {
        size: "xxs",
        color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}

function w(e) {
  let {
    id: t,
    pinned: n
  } = e, i = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm), l = (0, h.A)();
  return (0, r.jsx)(c.m, {
    text: i,
    "aria-label": i,
    asContainer: true,
    children: (0, r.jsx)(u.DUT, {
      className: a()(O.x6, n && O.vu),
      onClick: () => {
        l || (0, d.v0)(t)
      },
      children: (0, r.jsx)(u.qgw, {
        size: "xxs",
        color: n ? o.A.colors.BACKGROUND_BRAND : o.A.colors.INTERACTIVE_TEXT_ACTIVE
      })
    })
  })
}