/** Chunk was on 1272 **/
/** chunk id: 314451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk63063 = require("./63063.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
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
let d = () => (0, Chunk481060.ZDy)(async () => {
  let {
    default: e
  } = await require.e("83051").then(require.bind(require, 115072));
  return t => (0, r.jsx)(e, u({}, t))
});

function p(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(l.v2r, {
    onSelect: () => {},
    navId: "staff-help-popout",
    variant: "fixed",
    onClose: t,
    "aria-label": c.intl.string(c.t.HpQykc),
    children: (0, r.jsxs)(l.kSQ, {
      children: [(0, r.jsx)(l.sNh, {
        id: "staff-help-bug-reporter",
        label: c.intl.string(c.t["5LqopY"]),
        icon: l.nnZ,
        action: d
      }), (0, r.jsx)(l.sNh, {
        id: "staff-help-center",
        label: "Go to Help Center",
        icon: l.rgF,
        action: () => (0, a.Z)(o.w)
      })]
    })
  })
}

function f(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, [a, o] = i.useState(false), [f, g] = i.useState(0), m = i.useRef(null), h = e => {
    clearTimeout(f), g(setTimeout(() => {
      o(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => h(true),
    onMouseLeave: () => h(false),
    children: (0, r.jsx)(l.yRy, {
      targetElementRef: m,
      shouldShow: a,
      animation: l.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => o(true),
      onRequestClose: () => o(false),
      renderPopout: () => (0, r.jsx)(p, {
        onClose: () => o(false)
      }),
      children: (e, i) => {
        let {
          isShown: a
        } = i;
        return (0, r.jsx)(s.JO, u({
          ref: m,
          onClick: d,
          icon: l.nnZ,
          "aria-label": c.intl.string(c.t["5LqopY"]),
          selected: a,
          className: t
        }, n))
      }
    })
  })
}