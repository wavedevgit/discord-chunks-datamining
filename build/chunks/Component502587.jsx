/** Chunk was on 21585 **/
/** chunk id: 502587, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function p(e) {
  let {
    widget: t
  } = e, p = a.useRef(null), {
    trackUserProfileAction: m
  } = (0, c.KZ)(), O = e => {
    if (e.shiftKey) {
      (0, s.y8)(t.type), m({
        action: "EDIT_ACTION"
      }), (0, u.L$)(d.qb.WIDGET_REMOVED);
      return
    }(0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("70887").then(r.bind(r, 37668));
      return r => (0, n.jsx)(e, b(g({}, r), {
        userId: o.default.getId(),
        widget: t,
        trackUserProfileAction: m
      }))
    }, {
      stackingBehavior: "stack"
    })
  };
  return (0, n.jsx)(i.yRy, {
    targetElementRef: p,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(i.v2r, {
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, l.Zy)(), t()
        },
        onSelect: () => {},
        "aria-label": f.intl.string(f.t.xpSHSk),
        children: (0, n.jsx)(i.kSQ, {
          children: (0, n.jsx)(i.sNh, {
            id: "remove-widget",
            label: f.intl.string(f.t.Mm07YW),
            action: O,
            color: "danger",
            icon: i.XHJ
          })
        })
      })
    },
    children: e => (0, n.jsx)(i.hU, b(g({}, e), {
      buttonRef: p,
      icon: i.xhG,
      variant: "secondary",
      "aria-label": f.intl.string(f.t.xpSHSk),
      size: "sm"
    }))
  })
}