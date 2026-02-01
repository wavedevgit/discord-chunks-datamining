/** Chunk was on 21738 **/
/** chunk id: 558416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk975571 = require("./975571.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk985018 = require("./985018.jsx");

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
let d = () => (0, l.mMO)(async () => {
  let {
    default: e
  } = await n.e("81008").then(n.bind(n, 572723));
  return t => (0, r.jsx)(e, u({}, t))
});

function p(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(l.W1t, {
    "data-menu-migrated": true,
    onSelect: () => {},
    navId: "staff-help-popout",
    variant: "fixed",
    onClose: t,
    "aria-label": c.intl.string(c.t.HpQykc),
    children: (0, r.jsxs)(l.rXV, {
      children: [(0, r.jsx)(l.Drp, {
        id: "staff-help-bug-reporter",
        label: c.intl.string(c.t["5LqopY"]),
        icon: l.Q5O,
        leadingAccessory: {
          type: "icon",
          icon: l.Q5O
        },
        action: d
      }), (0, r.jsx)(l.Drp, {
        id: "staff-help-center",
        label: "Go to Help Center",
        icon: l.I9m,
        leadingAccessory: {
          type: "icon",
          icon: l.cBN
        },
        trailingIndicator: {
          type: "icon",
          icon: l.I9m
        },
        action: () => (0, a.A)(s.C)
      })]
    })
  })
}

function h(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, [a, s] = i.useState(false), [h, g] = i.useState(0), m = i.useRef(null), f = e => {
    clearTimeout(h), g(setTimeout(() => {
      s(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => f(true),
    onMouseLeave: () => f(false),
    children: (0, r.jsx)(l.YNO, {
      targetElementRef: m,
      shouldShow: a,
      animation: l.YNO.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: () => (0, r.jsx)(p, {
        onClose: () => s(false)
      }),
      children: (e, i) => {
        let {
          isShown: a
        } = i;
        return (0, r.jsx)(o.In, u({
          ref: m,
          onClick: d,
          icon: l.Q5O,
          "aria-label": c.intl.string(c.t["5LqopY"]),
          selected: a,
          className: t
        }, n))
      }
    })
  })
}