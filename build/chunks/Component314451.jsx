/** Chunk was on 1272 **/
/** chunk id: 314451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk31336 = require("./31336.js"),
  Chunk678717 = require("./678717.jsx"),
  Chunk252899 = require("./252899.jsx"),
  Chunk478057 = require("./478057.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk63063 = require("./63063.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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
let _ = () => (0, Chunk481060.ZDy)(async () => {
  let {
    default: e
  } = await require.e("83051").then(require.bind(require, 115072));
  return t => (0, r.jsx)(e, g({}, t))
});

function b(e) {
  let {
    onClose: t,
    isDiscordDeveloper: n
  } = e, i = (0, c.useDevToolsTabConfig)(), l = (0, u.F)(i, o.d8), p = (0, d.Z)();
  return (0, r.jsx)(a.v2r, {
    onSelect: () => {},
    navId: "staff-help-popout",
    variant: "fixed",
    onClose: t,
    "aria-label": m.intl.string(m.t.HpQykc),
    children: (0, r.jsxs)(a.kSQ, {
      children: [(0, r.jsx)(a.sNh, {
        id: "staff-help-bug-reporter",
        label: m.intl.string(m.t["5LqopY"]),
        icon: a.nnZ,
        action: _
      }), n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.sNh, {
          id: "staff-devtools",
          label: "DevTools",
          action: () => (0, o.d8)(),
          children: l
        }), p]
      }), (0, r.jsx)(a.sNh, {
        id: "staff-help-center",
        label: "Go to Help Center",
        icon: a.rgF,
        action: () => (0, s.Z)(f.w)
      })]
    })
  })
}

function E(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, s = (0, l.e7)([p.Z], () => p.Z.isDeveloper), [o, c] = i.useState(false), [u, d] = i.useState(0), f = i.useRef(null), E = e => {
    clearTimeout(u), d(setTimeout(() => {
      c(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => E(true),
    onMouseLeave: () => E(false),
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: f,
      shouldShow: o,
      animation: a.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => c(true),
      onRequestClose: () => c(false),
      renderPopout: () => (0, r.jsx)(b, {
        onClose: () => c(false),
        isDiscordDeveloper: s
      }),
      children: (e, i) => {
        let {
          isShown: l
        } = i;
        return (0, r.jsx)(h.JO, g({
          ref: f,
          onClick: _,
          icon: a.nnZ,
          "aria-label": m.intl.string(m.t["cqEoj/"]),
          selected: l,
          className: t
        }, n))
      }
    })
  })
}