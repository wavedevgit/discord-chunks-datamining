/** Chunk was on 67544 **/
/** chunk id: 363307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk668826 = require("./668826.js"),
  Chunk18582 = require("./18582.jsx"),
  Chunk483601 = require("./483601.jsx"),
  Chunk81829 = require("./81829.jsx"),
  Chunk892689 = require("./892689.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk511479 = require("./511479.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640705 = require("./640705.js");

function x(e) {
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
}
let v = () => [{
  title: Chunk388032.intl.string(Chunk511479.default.edfgq6),
  color: Chunk377171.Z.BUTTON_POSITIVE_BACKGROUND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk388032.t.BddRzc),
  secondaryButtonCTA: Chunk388032.intl.string(Chunk388032.t.f3Pet7),
  primaryButtonPoints: 1e3,
  secondaryButtonPoints: 500,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default.isjTh4),
  color: Chunk377171.Z.BUTTON_DANGER_BACKGROUND,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default["1aOLws"]),
  color: Chunk377171.Z.BG_BRAND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk388032.t["+TBKLy"]),
  primaryButtonPoints: false,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default.M3lUXV),
  color: Chunk377171.Z.BG_BRAND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk388032.t.f3Pet7),
  primaryButtonPoints: 700,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default.StUVd3),
  color: Chunk377171.Z.BUTTON_POSITIVE_BACKGROUND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk388032.t["3xjX0d"]),
  primaryButtonPoints: 2e3,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default.vHm2PD),
  color: Chunk377171.Z.BUTTON_POSITIVE_BACKGROUND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk511479.default.ZOqU29),
  primaryButtonPoints: 1e3,
  closeButtonPoints: 200
}, {
  title: Chunk388032.intl.string(Chunk511479.default.vNywt7),
  color: Chunk377171.Z.BUTTON_DANGER_BACKGROUND,
  primaryButtonCTA: Chunk388032.intl.string(Chunk388032.t["9iFR6+"]),
  primaryButtonPoints: false,
  closeButtonPoints: 200
}];

function O(e) {
  let {
    isPaused: t
  } = e, n = (0, s.useRef)(null), [l, b] = (0, s.useState)((0, o.sample)(v())), [y, O] = (0, s.useState)({}), [j, N] = (0, s.useState)({
    x: 0,
    y: 0
  }), P = (e, t) => {
    var n, r;
    N({
      x: e.clientX,
      y: e.clientY
    }), O((n = x({}, y), r = r = {
      [(0, a.Z)()]: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n)), (0, u.KH)(g.yN.NAGBAR, t)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {
      ref: n,
      isPaused: t,
      itemId: g.yN.NAGBAR,
      chance: .2,
      points: 0,
      maxDrops: 1,
      width: 0,
      height: 0,
      children: e => (0, r.jsxs)("div", {
        className: h.container,
        style: {
          backgroundColor: null == l ? true : l.color
        },
        children: [null == l ? true : l.title, (null == l ? true : l.primaryButtonCTA) != null && (0, r.jsx)(f.Z, {
          size: i.zx.Sizes.TINY,
          look: i.zx.Looks.OUTLINED,
          color: i.zx.Colors.WHITE,
          onClick: t => {
            var r;
            P(t, l.primaryButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v()))
          },
          children: l.primaryButtonCTA
        }), (null == l ? true : l.secondaryButtonCTA) != null && (0, r.jsx)(f.Z, {
          size: i.zx.Sizes.TINY,
          look: i.zx.Looks.OUTLINED,
          color: i.zx.Colors.WHITE,
          onClick: t => {
            var r;
            P(t, l.secondaryButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v()))
          },
          children: l.secondaryButtonCTA
        }), null != l && (0, r.jsx)(d.Z, {
          className: h.closeButton,
          focusProps: {
            offset: 6
          },
          onClick: t => {
            var r;
            P(t, l.closeButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v()))
          },
          children: (0, r.jsx)(c.Dio, {
            size: "md",
            color: "white"
          })
        })]
      })
    }), (0, r.jsx)(p.Z, {
      renderedPoints: y,
      onRemovePoint: e => {
        O(t => {
          let n = x({}, t);
          return delete n[e], n
        })
      },
      offset: j,
      fullWidth: false
    })]
  })
}