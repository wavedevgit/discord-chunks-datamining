/** Chunk was on 83789 **/
/** chunk id: 471892, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk323946 = require("./323946.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk778364 = require("./778364.js");

function b(e) {
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

function m(e, t) {
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
let O = e => {
    let {
      children: t
    } = e, {
      isDragging: r
    } = (0, l.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, n.jsx)(a.ua7, {
      "aria-label": g.intl.string(g.t.HWNJJC),
      text: (0, n.jsx)(j, {}),
      position: "top",
      shouldShow: true !== r,
      children: t
    })
  },
  j = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk778364.dragClickTooltipText,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["7cdwho"], {
        emphasizeHook: e => (0, n.jsx)("strong", {
          children: e
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["4e0rMz"], {
        emphasizeHook: e => (0, n.jsx)("strong", {
          children: e
        })
      })
    })]
  }),
  y = e => {
    let {
      children: t,
      widget: i,
      buttonRef: l
    } = e, {
      trackUserProfileAction: p
    } = (0, s.KZ)(), O = e => {
      if (e.shiftKey) {
        (0, u.y8)(i.type), (0, d.L$)(f.qb.WIDGET_REMOVED);
        return
      }(0, a.ZDy)(async () => {
        let {
          default: e
        } = await r.e("70887").then(r.bind(r, 37668));
        return t => (0, n.jsx)(e, m(b({}, t), {
          userId: c.default.getId(),
          widget: i,
          trackUserProfileAction: p
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, n.jsx)(a.yRy, {
      targetElementRef: l,
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
            children: (0, n.jsx)(a.sNh, {
              id: "remove-widget",
              label: g.intl.string(g.t.Mm07YW),
              action: O,
              color: "danger",
              icon: a.XHJ
            })
          })
        })
      },
      children: t
    })
  },
  x = e => {
    let {
      widget: t
    } = e, r = (0, i.useRef)(null);
    return (0, n.jsx)(O, {
      children: e => (0, n.jsx)(y, {
        buttonRef: r,
        widget: t,
        children: t => (0, n.jsx)(a.P3F, m(b({
          innerRef: r
        }, e, t), {
          children: (0, n.jsx)(a.Vni, {
            size: "sm"
          })
        }))
      })
    })
  }