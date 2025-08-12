/** Chunk was on 1272 **/
/** chunk id: 314451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk31336 = require("./31336.js"),
  Chunk906467 = require("./906467.js"),
  Chunk63063 = require("./63063.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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
let f = () => (0, Chunk481060.ZDy)(async () => {
  let {
    default: e
  } = await require.e("83051").then(require.bind(require, 115072));
  return t => (0, r.jsx)(e, h({}, t))
});

function g(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, g = (0, l.e7)([c.Z], () => c.Z.isDeveloper), [m, b] = i.useState(false), [_, O] = i.useState(0), E = i.useRef(null), y = e => {
    clearTimeout(_), O(setTimeout(() => {
      b(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => y(true),
    onMouseLeave: () => y(false),
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: E,
      shouldShow: m,
      animation: a.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => b(true),
      onRequestClose: () => b(false),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          isDiscordDeveloper: n
        } = e;
        return (0, r.jsx)(a.v2r, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": p.intl.string(p.t.HpQykZ),
          children: (0, r.jsxs)(a.kSQ, {
            children: [(0, r.jsx)(a.sNh, {
              id: "staff-help-bug-reporter",
              label: p.intl.string(p.t["5Lqopa"]),
              icon: a.nnZ,
              action: f
            }), n && (0, r.jsx)(a.sNh, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: a.Ymb,
              action: () => (0, s.SO)()
            }), (0, r.jsx)(a.sNh, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: a.rgF,
              action: () => (0, o.Z)(u.w)
            })]
          })
        })
      })({
        onClose: () => b(false),
        isDiscordDeveloper: g
      }),
      children: (e, i) => {
        let {
          isShown: l
        } = i;
        return (0, r.jsx)(d.JO, h({
          ref: E,
          onClick: f,
          icon: a.nnZ,
          "aria-label": p.intl.string(p.t.cqEoj4),
          selected: l,
          className: t
        }, n))
      }
    })
  })
}