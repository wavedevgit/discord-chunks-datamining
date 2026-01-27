/** Chunk was on 20941 **/
/** chunk id: 879815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk796104 = require("./796104.js"),
  Chunk719718 = require("./719718.js"),
  Chunk113493 = require("./113493.js"),
  Chunk101492 = require("./101492.js"),
  Chunk532294 = require("./532294.js"),
  Chunk420627 = require("./420627.js");
let b = {
    tension: 1200,
    friction: 70
  },
  g = {
    [Chunk532294.P7.WELCOME]: Chunk397927.fAJ,
    [Chunk532294.P7.MESSAGES]: Chunk397927.oyn,
    [Chunk532294.P7.EMOJIS]: Chunk397927.nm2,
    [Chunk532294.P7.VOICE]: Chunk397927.cNw,
    [Chunk532294.P7.GUILDS]: Chunk397927.RR9,
    [Chunk532294.P7.FRIENDS]: Chunk397927.$yI,
    [Chunk532294.P7.GAMING]: Chunk397927._xR,
    [Chunk532294.P7.QUESTS]: Chunk397927.r2v,
    [Chunk532294.P7.END]: Chunk397927.MZT
  };

function x(e) {
  let {
    isSelected: t,
    icon: n,
    color: a,
    onClick: i
  } = e, [o, u] = l.useState(false), d = (0, c.zhh)({
    from: {
      scale: 0
    },
    to: {
      scale: 1
    },
    config: b
  });
  return (0, r.jsx)(s.animated.div, {
    style: function(e) {
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
    }({}, d),
    children: (0, r.jsx)(c.DUT, {
      onClick: i,
      className: h.vk,
      onMouseEnter: () => u(true),
      onMouseLeave: () => u(false),
      children: (0, r.jsx)(n, {
        colorClass: h.gM,
        color: a,
        style: {
          opacity: t || o ? 1 : .5
        }
      })
    })
  })
}

function y(e) {
  let t, {
      activeSlide: n,
      setActiveSlide: a,
      color: s,
      className: c
    } = e,
    p = Number.parseInt(n.toString(), 10),
    b = (0, o.bG)([d.A], () => Number.parseInt(d.A.highestSlideSeen)),
    y = (t = (0, f.A)(), (0, m.A)(t).map(e => ({
      slide: e,
      icon: g[e]
    })));
  return l.useEffect(() => {
    p > b && (0, u.Rq)("".concat(p))
  }, [p, b]), (0, r.jsx)("div", {
    className: i()(h.kL, c),
    children: y.map((e, t) => {
      let {
        icon: n,
        slide: l
      } = e, i = Number.parseInt(l, 10);
      return b >= i ? (0, r.jsx)(x, {
        isSelected: p === i,
        icon: n,
        onClick: () => a(l),
        color: s
      }, "step-indicator-".concat(t)) : (0, r.jsx)("div", {
        className: h.Gc,
        style: {
          borderColor: s,
          opacity: .5
        }
      }, "step-indicator-".concat(t))
    })
  })
}