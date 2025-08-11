/** Chunk was on 67544 **/
/** chunk id: 987752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk120421 = require("./120421.js"),
  Chunk340078 = require("./340078.js"),
  Chunk702319 = require("./702319.jsx"),
  Chunk666884 = require("./666884.js"),
  Chunk763283 = require("./763283.jsx"),
  Chunk424984 = require("./424984.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk231338 = require("./231338.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk313273 = require("./313273.js"),
  Chunk225893 = require("./225893.js"),
  Chunk35356 = require("./35356.js");

function j(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("td", {
    className: x.statColumn,
    children: t
  })
}

function N(e) {
  let {
    name: t,
    iconSrc: n,
    valueTotal: s,
    valuePerSecond: o
  } = e, i = o >= 0 ? y.default.QMkrPj : y.default.VN4aTU;
  return (0, r.jsxs)("tr", {
    className: x.statRow,
    children: [(0, r.jsx)(j, {
      children: (0, r.jsx)("img", {
        className: x.statIcon,
        src: n,
        alt: ""
      })
    }), (0, r.jsx)(j, {
      children: (0, r.jsx)(p.Z, {
        variant: "text-xs/medium",
        className: x.statName,
        children: t
      })
    }), (0, r.jsx)(j, {
      children: (0, r.jsxs)("div", {
        className: x.statValue,
        children: [(0, r.jsx)("img", {
          className: x.pointsIcon,
          src: v,
          alt: ""
        }), (0, r.jsx)(c.Text, {
          className: x.monospace,
          variant: "text-xs/medium",
          children: (0, u.v)(Math.floor(s))
        })]
      })
    }), (0, r.jsx)(j, {
      children: (0, r.jsx)(c.Text, {
        className: a()(x.statValuePerSecond, x.monospace),
        variant: "text-xs/medium",
        children: h.intl.format(i, {
          points: Math.abs(o),
          grassIconHook: (e, t, n) => (0, d.Z)(e, t, n, x.pointsIcon)
        })
      })
    })]
  })
}

function P(e) {
  let {
    itemId: t,
    isPaused: n
  } = e, s = (0, i.e7)([l.Z], () => {
    var e;
    return null != (e = l.Z.pointsByItem[t]) ? e : 0
  }), o = (0, g.w2)()[t], a = (0, f.Z)(s, n);
  return (0, r.jsx)(N, {
    name: o.name,
    valueTotal: s,
    valuePerSecond: a,
    iconSrc: o.purchaseIconSrc
  })
}

function _(e) {
  let {
    transitionState: t,
    isPaused: n
  } = e, o = (0, i.e7)([l.Z], () => l.Z.pointsByItem), a = (0, i.e7)([l.Z], () => l.Z.lifetimePoints), u = (0, f.Z)(a, n), d = (0, i.e7)([l.Z], () => l.Z.pointsByItem), m = (0, s.useMemo)(() => Object.keys(o).sort((e, t) => {
    var n, r;
    return (null != (n = null == d ? true : d[t]) ? n : 0) - (null != (r = null == d ? true : d[e]) ? r : 0)
  }), []);
  return (0, r.jsx)(c.f6W, {
    theme: b.BR.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, r.jsxs)(c.Y0X, {
      className: e,
      transitionState: t,
      parentComponent: "ClickerStats",
      children: [(0, r.jsxs)(c.xBx, {
        className: x.header,
        separator: false,
        children: [(0, r.jsx)(p.Z, {
          variant: "heading-lg/semibold",
          children: h.intl.string(y.default.bS8cBA)
        }), (0, r.jsx)(p.Z, {
          className: x.subtitle,
          variant: "text-xs/medium",
          children: h.intl.string(y.default.fdvpl5)
        })]
      }), (0, r.jsx)(c.hzk, {
        children: (0, r.jsx)("table", {
          className: x.statsTable,
          children: (0, r.jsxs)("tbody", {
            children: [(0, r.jsx)(N, {
              name: h.intl.string(y.default.wAfrVl),
              iconSrc: v,
              valueTotal: a,
              valuePerSecond: u
            }), m.map(e => (0, r.jsx)(P, {
              itemId: e,
              isPaused: n
            }, e))]
          })
        })
      })]
    })
  })
}

function C(e) {
  let {
    isPaused: t
  } = e;
  return (0, r.jsx)(m.O, {
    iconSrc: O,
    title: h.intl.string(y.default.bS8cBA),
    onClick: () => {
      (0, c.ZDy)(() => Promise.resolve(e => {
        var n, s;
        return (0, r.jsx)(_, (n = function(e) {
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
        }({}, e), s = s = {
          isPaused: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
        }), n))
      }))
    }
  })
}