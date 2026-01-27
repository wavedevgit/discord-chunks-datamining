/** Chunk was on 60667 **/
/** chunk id: 888772, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
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

function N(e) {
  let {
    header: t,
    description: n,
    stepNumber: i
  } = e;
  return (0, r.jsxs)("div", {
    className: S.PM,
    children: [(0, r.jsx)("div", {
      className: S.CD,
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

function y() {
  return (0, r.jsxs)("div", {
    className: s()(S.aP, T.a, S.dO, S.p2),
    children: [(0, r.jsxs)("div", {
      className: S.Np,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
          className: j.QB,
          variant: "heading-xl/medium",
          children: (0, r.jsx)(c.Fmo, {
            children: I.intl.string(C.default.pHEnV5)
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: j.SX,
          children: I.intl.string(C.default["1J/gZ4"])
        })]
      }), (0, r.jsx)("img", {
        className: S._u,
        src: v,
        alt: I.intl.string(C.default["r+PDmu"])
      })]
    }), (0, r.jsxs)("div", {
      className: S.Ci,
      children: [(0, r.jsx)(N, {
        header: I.intl.string(C.default["7xxAni"]),
        description: I.intl.string(C.default["1M9So2"]),
        stepNumber: 1
      }), (0, r.jsx)(N, {
        header: I.intl.string(C.default["AXgx+a"]),
        description: I.intl.string(C.default.GzMFnb),
        stepNumber: 2
      }), (0, r.jsx)(N, {
        header: I.intl.string(C.default.MZn1tG),
        description: I.intl.string(C.default["8rLBxD"]),
        stepNumber: 3
      })]
    })]
  })
}

function P() {
  let e = (0, g.xr)();
  return (0, r.jsxs)("div", {
    className: s()(S.aP, T.a, S.dO),
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        className: j.QB,
        variant: "heading-xl/medium",
        children: (0, r.jsx)(c.Fmo, {
          children: I.intl.string(C.default.zUCWEL)
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: j.SX,
        children: I.intl.format(C.default.yMnoDl, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, r.jsx)(f.A, {})]
    }), (0, r.jsx)("img", {
      className: S._u,
      src: v,
      alt: I.intl.string(C.default["r+PDmu"])
    })]
  })
}

function R(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: l
  } = e, s = i.useRef(null), a = "".concat(t, "-list"), _ = (0, d.A)(a), p = i.useCallback(e => {
    let {
      row: n,
      listIndex: i
    } = e, s = l[n], a = i === l.length;
    return null == s ? null : (0, r.jsx)(E.A, {
      userId: s.id,
      isLast: a,
      children: () => t === x.Ef.ACTIVE ? (0, r.jsx)(h.w, {
        user: s
      }) : (0, r.jsx)(b.M, {
        user: s
      })
    }, s.id)
  }, [l, t]), m = i.useCallback(() => (0, r.jsx)(u.A, {
    children: (0, r.jsx)(c.Text, {
      className: j.QB,
      variant: "eyebrow",
      color: "text-default",
      children: n
    })
  }, "title"), [n]);
  return (0, r.jsx)("div", {
    className: S.uW,
    children: (0, r.jsx)(o.hD, {
      navigator: _,
      children: (0, r.jsx)(o.PR, {
        children: e => {
          let {
            ref: t,
            role: i
          } = e, o = function(e, t) {
            if (null == e) return {};
            var n, r, i, l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
              return l
            }
            if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                  l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
              }(e, t), Object.getOwnPropertySymbols)
              for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }(e, ["ref", "role"]);
          return (0, r.jsx)(c.B8B, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            innerRole: i,
            innerAriaLabel: n,
            ref: e => {
              var n;
              s.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            sectionHeight: x.h4,
            rowHeight: x.Gg,
            renderSection: m,
            renderRow: p,
            sections: [l.length],
            chunkSize: 30,
            fade: true
          }, o), a)
        }
      })
    })
  })
}
let D = () => {
    let e = (0, m.A)(),
      t = (0, g.GR)(),
      n = e ? x.Y7 : x.kp,
      i = {
        count: t.length,
        max: n
      },
      l = (0, _.y)(I.intl.formatToPlainString(C.default["+tnO34"], i), I.intl.formatToPlainString(C.default["pu6/U0"], i));
    return t.length > 0 ? (0, r.jsx)(R, {
      sectionType: x.Ef.ACTIVE,
      sectionTitle: l,
      requests: t
    }) : (0, r.jsxs)("div", {
      className: S.uW,
      children: [(0, r.jsx)(c.Text, {
        className: j.QB,
        variant: "eyebrow",
        color: "text-default",
        children: l
      }), (0, r.jsx)("div", {
        className: S.aP,
        children: (0, r.jsx)(A.A, {
          text: I.intl.string(C.default.C4ScLD)
        })
      })]
    })
  },
  w = () => {
    let e = (0, g.xr)(),
      t = (0, m.A)() ? x.Y7 : x.kp,
      n = (0, _.y)(I.intl.formatToPlainString(C.default["1/PzIj"], {
        maxConnections: t
      }), I.intl.formatToPlainString(C.default.RcTgiE, {
        maxConnections: t
      }));
    return e ? (0, r.jsx)("div", {
      className: S.rv,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  L = () => {
    let e = (0, p.N)(),
      t = (0, p.z)(),
      n = (0, a.YW)({
        helpline: e,
        throughline: t
      }).with({
        helpline: true
      }, () => I.intl.format(C.default["KOwsf/"], {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => I.intl.format(C.default["6tsC8u"], {
        helpLink: O.CL
      })).otherwise(() => null);
    return null == n ? null : (0, r.jsxs)("div", {
      className: j.QX,
      children: [(0, r.jsx)(c.Heading, {
        className: S.rH,
        variant: "heading-sm/semibold",
        children: (0, r.jsx)(c.Fmo, {
          children: I.intl.string(C.default["7/tVhv"])
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: n
      })]
    })
  },
  M = () => {
    let e = (0, g.xk)(x.Ef.PENDING),
      t = (0, _.y)(I.intl.formatToPlainString(C.default.IkAgkG, {
        count: e.length
      }), I.intl.formatToPlainString(C.default.Q8XnAa, {
        count: e.length
      }));
    return 0 === e.length ? null : (0, r.jsx)(R, {
      sectionType: x.Ef.PENDING,
      sectionTitle: t,
      requests: e
    })
  },
  U = () => {
    let e = (0, m.A)();
    return (0, r.jsxs)("div", {
      className: S.kL,
      children: [e ? (0, r.jsx)(y, {}) : (0, r.jsx)(P, {}), (0, r.jsx)(D, {}), (0, r.jsx)(M, {}), (0, r.jsx)(w, {}), (0, r.jsx)(L, {})]
    })
  }