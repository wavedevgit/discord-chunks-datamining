/** Chunk was on 61149 **/
/** chunk id: 781040, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk323946 = require("./323946.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176870 = require("./176870.js");

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

function p(e, t) {
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
let m = e => {
    let {
      children: t
    } = e, {
      isDragging: r
    } = (0, a.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, n.jsx)(o.ua7, {
      "aria-label": f.intl.string(f.t.HWNJJC),
      text: (0, n.jsx)(y, {}),
      position: "top",
      shouldShow: true !== r,
      children: t
    })
  },
  y = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk176870.dragClickTooltipText,
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
  O = e => {
    let {
      children: t,
      widget: a,
      targetRef: g
    } = e, {
      trackUserProfileAction: m
    } = (0, c.KZ)(), y = e => {
      if (e.shiftKey) {
        (0, s.y8)(a.type), (0, u.L$)(d.qb.WIDGET_REMOVED);
        return
      }(0, o.ZDy)(async () => {
        let {
          default: e
        } = await r.e("70887").then(r.bind(r, 37668));
        return t => (0, n.jsx)(e, p(b({}, t), {
          userId: l.default.getId(),
          widget: a,
          trackUserProfileAction: m
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, n.jsx)(o.yRy, {
      targetElementRef: g,
      align: "top",
      position: "right",
      disablePointerEvents: false,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)(o.v2r, {
          navId: "user-profile-widget-context-menu",
          onClose: () => {
            (0, i.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": f.intl.string(f.t.xpSHSk),
          children: (0, n.jsx)(o.kSQ, {
            children: (0, n.jsx)(o.sNh, {
              id: "remove-widget",
              label: f.intl.string(f.t.Mm07YW),
              action: y,
              color: "danger",
              icon: o.XHJ
            })
          })
        })
      },
      children: t
    })
  },
  j = e => {
    let {
      widget: t,
      className: r,
      buttonRef: a
    } = e;
    return (0, n.jsx)(m, {
      children: e => (0, n.jsx)(O, {
        targetRef: a,
        widget: t,
        children: t => (0, n.jsx)(o.P3F, p(b({
          innerRef: a,
          className: r
        }, e, t), {
          children: (0, n.jsx)(o.Vni, {
            size: "sm"
          })
        }))
      })
    })
  }