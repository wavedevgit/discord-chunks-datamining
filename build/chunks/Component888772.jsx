/** Chunk was on web.js **/
/** chunk id: 888772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./228524.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk260762 = require("./260762.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk294433 = require("./294433.js"),
  Chunk426190 = require("./426190.js"),
  Chunk438732 = require("./438732.js"),
  Chunk834981 = require("./834981.js"),
  Chunk469696 = require("./469696.jsx"),
  Chunk796497 = require("./796497.jsx"),
  Chunk148131 = require("./148131.jsx"),
  Chunk845197 = require("./845197.jsx"),
  Chunk442671 = require("./442671.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk327337 = require("./327337.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk896498 = require("./896498.js"),
  Chunk205806 = require("./205806.js"),
  Chunk473169 = require("./473169.js"),
  Chunk525351 = require("./525351.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = D(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function x(e) {
  let {
    header: t,
    description: n,
    stepNumber: i
  } = e;
  return (0, r.jsxs)("div", {
    className: T.PM,
    children: [(0, r.jsx)("div", {
      className: T.CD,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, r.jsx)(c.Fmo, {
          children: i
        })
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-sm/bold",
        children: (0, r.jsx)(c.Fmo, {
          children: t
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function L() {
  return (0, r.jsxs)("div", {
    className: s()(T.aP, S.a, T.dO, T.p2),
    children: [(0, r.jsxs)("div", {
      className: T.Np,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
          className: C.QB,
          variant: "heading-xl/medium",
          children: (0, r.jsx)(c.Fmo, {
            children: I.intl.string(A.default.pHEnV5)
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: C.SX,
          children: I.intl.string(A.default["1J/gZ4"])
        })]
      }), (0, r.jsx)("img", {
        className: T._u,
        src: N,
        alt: I.intl.string(A.default["r+PDmu"])
      })]
    }), (0, r.jsxs)("div", {
      className: T.Ci,
      children: [(0, r.jsx)(x, {
        header: I.intl.string(A.default["7xxAni"]),
        description: I.intl.string(A.default["1M9So2"]),
        stepNumber: 1
      }), (0, r.jsx)(x, {
        header: I.intl.string(A.default["AXgx+a"]),
        description: I.intl.string(A.default.GzMFnb),
        stepNumber: 2
      }), (0, r.jsx)(x, {
        header: I.intl.string(A.default.MZn1tG),
        description: I.intl.string(A.default["8rLBxD"]),
        stepNumber: 3
      })]
    })]
  })
}

function j() {
  let e = (0, h.xr)();
  return (0, r.jsxs)("div", {
    className: s()(T.aP, S.a, T.dO),
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        className: C.QB,
        variant: "heading-xl/medium",
        children: (0, r.jsx)(c.Fmo, {
          children: I.intl.string(A.default.zUCWEL)
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.SX,
        children: I.intl.format(A.default.yMnoDl, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, r.jsx)(g.A, {})]
    }), (0, r.jsx)("img", {
      className: T._u,
      src: N,
      alt: I.intl.string(A.default["r+PDmu"])
    })]
  })
}

function M(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: a
  } = e, s = i.useRef(null), o = "".concat(t, "-list"), f = (0, u.A)(o), p = i.useCallback(e => {
    let {
      row: n,
      listIndex: i
    } = e, s = a[n], o = i === a.length;
    return null == s ? null : (0, r.jsx)(b.A, {
      userId: s.id,
      isLast: o,
      children: () => t === O.Ef.ACTIVE ? (0, r.jsx)(E.w, {
        user: s
      }) : (0, r.jsx)(y.M, {
        user: s
      })
    }, s.id)
  }, [a, t]), _ = i.useCallback(() => (0, r.jsx)(d.A, {
    children: (0, r.jsx)(c.Text, {
      className: C.QB,
      variant: "eyebrow",
      color: "text-default",
      children: n
    })
  }, "title"), [n]);
  return (0, r.jsx)("div", {
    className: T.uW,
    children: (0, r.jsx)(l.hD, {
      navigator: f,
      children: (0, r.jsx)(l.PR, {
        children: e => {
          let {
            ref: t,
            role: i
          } = e, l = P(e, ["ref", "role"]);
          return (0, r.jsx)(c.B8B, R({
            innerRole: i,
            innerAriaLabel: n,
            ref: e => {
              var n;
              s.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            sectionHeight: O.h4,
            rowHeight: O.Gg,
            renderSection: _,
            renderRow: p,
            sections: [a.length],
            chunkSize: 30,
            fade: true
          }, l), o)
        }
      })
    })
  })
}
let k = () => {
    let e = (0, _.A)(),
      t = (0, h.GR)(),
      n = e ? O.Y7 : O.kp,
      i = {
        count: t.length,
        max: n
      },
      a = (0, f.y)(I.intl.formatToPlainString(A.default["+tnO34"], i), I.intl.formatToPlainString(A.default["pu6/U0"], i));
    return t.length > 0 ? (0, r.jsx)(M, {
      sectionType: O.Ef.ACTIVE,
      sectionTitle: a,
      requests: t
    }) : (0, r.jsxs)("div", {
      className: T.uW,
      children: [(0, r.jsx)(c.Text, {
        className: C.QB,
        variant: "eyebrow",
        color: "text-default",
        children: a
      }), (0, r.jsx)("div", {
        className: T.aP,
        children: (0, r.jsx)(m.A, {
          text: I.intl.string(A.default.C4ScLD)
        })
      })]
    })
  },
  U = () => {
    let e = (0, h.xr)(),
      t = (0, _.A)() ? O.Y7 : O.kp,
      n = (0, f.y)(I.intl.formatToPlainString(A.default["1/PzIj"], {
        maxConnections: t
      }), I.intl.formatToPlainString(A.default.RcTgiE, {
        maxConnections: t
      }));
    return e ? (0, r.jsx)("div", {
      className: T.rv,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  G = () => {
    let e = (0, p.N)(),
      t = (0, p.z)(),
      n = (0, o.YW)({
        helpline: e,
        throughline: t
      }).with({
        helpline: true
      }, () => I.intl.format(A.default["KOwsf/"], {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => I.intl.format(A.default["6tsC8u"], {
        helpLink: v.CL
      })).otherwise(() => null);
    return null == n ? null : (0, r.jsxs)("div", {
      className: C.QX,
      children: [(0, r.jsx)(c.Heading, {
        className: T.rH,
        variant: "heading-sm/semibold",
        children: (0, r.jsx)(c.Fmo, {
          children: I.intl.string(A.default["7/tVhv"])
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: n
      })]
    })
  },
  V = () => {
    let e = (0, h.xk)(O.Ef.PENDING),
      t = (0, f.y)(I.intl.formatToPlainString(A.default.IkAgkG, {
        count: e.length
      }), I.intl.formatToPlainString(A.default.Q8XnAa, {
        count: e.length
      }));
    return 0 === e.length ? null : (0, r.jsx)(M, {
      sectionType: O.Ef.PENDING,
      sectionTitle: t,
      requests: e
    })
  },
  F = () => {
    let e = (0, _.A)();
    return (0, r.jsxs)("div", {
      className: T.kL,
      children: [e ? (0, r.jsx)(L, {}) : (0, r.jsx)(j, {}), (0, r.jsx)(k, {}), (0, r.jsx)(V, {}), (0, r.jsx)(U, {}), (0, r.jsx)(G, {})]
    })
  }