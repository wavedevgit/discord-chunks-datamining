/** Chunk was on 27069 **/
/** chunk id: 825354, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk726521 = require("./726521.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function O(e) {
  let {
    widget: t,
    userId: O
  } = e, m = l.useRef(null), y = e => {
    if (e.shiftKey) {
      (0, u.y8)(t.type), (0, d.L$)(f.qb.WIDGET_REMOVED);
      return
    }(0, a.ZDy)(async () => {
      let {
        default: e
      } = await r.e("70887").then(r.bind(r, 37668));
      return r => (0, n.jsx)(e, b(p({}, r), {
        userId: s.default.getId(),
        widget: t
      }))
    }, {
      stackingBehavior: "stack"
    })
  }, j = () => {
    (0, c.G1)(O, t)
  }, v = (0, i.e7)([s.default], () => s.default.getId() === O);
  return (0, n.jsx)(a.yRy, {
    targetElementRef: m,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.v2r, {
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, o.Zy)(), t()
        },
        onSelect: () => {},
        "aria-label": g.intl.string(g.t.xpSHSk),
        children: (0, n.jsx)(a.kSQ, {
          children: v ? (0, n.jsx)(a.sNh, {
            id: "remove-widget",
            label: g.intl.string(g.t.Mm07YW),
            action: y,
            color: "danger",
            icon: a.XHJ
          }) : (0, n.jsx)(a.sNh, {
            id: "flag-widget",
            label: g.intl.string(g.t.D4GvHB),
            action: j,
            color: "danger",
            icon: a.U65
          })
        })
      })
    },
    children: e => (0, n.jsx)(a.hU, b(p({}, e), {
      buttonRef: m,
      icon: a.xhG,
      variant: "secondary",
      "aria-label": g.intl.string(g.t.xpSHSk),
      size: "sm"
    }))
  })
}