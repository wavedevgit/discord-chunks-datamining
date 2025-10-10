/** Chunk was on 36073 **/
/** chunk id: 781040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk79116 = require("./79116.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176870 = require("./176870.js");

function O(e) {
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = e => {
    let {
      widgetTitle: t,
      children: n
    } = e, {
      isDragging: i
    } = (0, o.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, r.jsx)(l.aML, {
      "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, {
        widgetTitle: t
      }),
      text: (0, r.jsx)(x, {}),
      position: "top",
      shouldShow: true !== i,
      children: n
    })
  },
  x = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk176870.dragClickTooltipText,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["7cdwho"], {
        emphasizeHook: e => (0, r.jsx)("strong", {
          children: e
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["4e0rMz"], {
        emphasizeHook: e => (0, r.jsx)("strong", {
          children: e
        })
      })
    })]
  }),
  v = e => {
    let {
      children: t,
      widget: i,
      targetRef: a,
      additionalMenuItems: o
    } = e, {
      trackUserProfileEditAction: s
    } = (0, d.KZ)(), m = e => {
      if (e.shiftKey) {
        (0, f.y8)(i.type), s({
          action: "WIDGET_REMOVED",
          widgetEdited: i.type
        }), (0, g.L$)(p.qb.WIDGET_REMOVED);
        return
      }(0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("70887").then(n.bind(n, 37668));
        return t => (0, r.jsx)(e, y(O({}, t), {
          userId: u.default.getId(),
          widget: i,
          trackUserProfileEditAction: s
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, r.jsx)(l.yRy, {
      targetElementRef: a,
      align: "top",
      position: "right",
      disablePointerEvents: false,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(l.v2r, {
          navId: "user-profile-widget-context-menu",
          onClose: () => {
            (0, c.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": b.intl.string(b.t.xpSHSk),
          children: (0, r.jsxs)(l.kSQ, {
            children: [o, (0, r.jsx)(l.sNh, {
              id: "remove-widget",
              label: b.intl.string(b.t.Mm07YW),
              action: m,
              color: "danger",
              icon: l.XHJ
            })]
          })
        })
      },
      children: t
    })
  },
  h = e => {
    let {
      widget: t,
      className: n,
      buttonRef: i,
      additionalMenuItems: o
    } = e, c = (0, f.mR)(t), u = (0, s.Dt)();
    return (0, r.jsx)(j, {
      widgetTitle: c,
      children: e => (0, r.jsx)(v, {
        targetRef: i,
        widget: t,
        additionalMenuItems: o,
        children: t => (0, r.jsxs)(l.P3F, y(O({
          innerRef: i,
          className: a()(m.dragHandleButton, n),
          "data-dnd-name": c,
          "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, {
            widgetTitle: c
          }),
          "aria-describedby": u
        }, e, t), {
          children: [(0, r.jsx)(l.Vni, {
            size: "sm"
          }), (0, r.jsx)(l.nn4, {
            id: u,
            children: b.intl.string(b.t.bsuqFh)
          })]
        }))
      })
    })
  }