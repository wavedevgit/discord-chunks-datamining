/** Chunk was on 46592 **/
/** chunk id: 781040, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk640962 = require("./640962.js");

function m(e) {
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

function y(e, t) {
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
let j = e => {
    let {
      widgetTitle: t,
      children: r
    } = e, {
      isDragging: i
    } = (0, a.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, n.jsx)(l.ua7, {
      "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, {
        widgetTitle: t
      }),
      text: (0, n.jsx)(v, {}),
      position: "top",
      shouldShow: true !== i,
      children: r
    })
  },
  v = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk640962.dragClickTooltipText,
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
  h = e => {
    let {
      children: t,
      widget: i,
      targetRef: o,
      additionalMenuItems: a
    } = e, {
      trackUserProfileEditAction: s
    } = (0, d.KZ)(), O = e => {
      if (e.shiftKey) {
        (0, f.y8)(i.type), s({
          action: "WIDGET_REMOVED",
          widgetEdited: i.type
        }), (0, g.L$)(p.qb.WIDGET_REMOVED);
        return
      }(0, l.ZDy)(async () => {
        let {
          default: e
        } = await r.e("70887").then(r.bind(r, 37668));
        return t => (0, n.jsx)(e, y(m({}, t), {
          userId: u.default.getId(),
          widget: i,
          trackUserProfileEditAction: s
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, n.jsx)(l.yRy, {
      targetElementRef: o,
      align: "top",
      position: "right",
      disablePointerEvents: false,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)(l.v2r, {
          navId: "user-profile-widget-context-menu",
          onClose: () => {
            (0, c.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": b.intl.string(b.t.xpSHSk),
          children: (0, n.jsxs)(l.kSQ, {
            children: [a, (0, n.jsx)(l.sNh, {
              id: "remove-widget",
              label: b.intl.string(b.t.Mm07YW),
              action: O,
              color: "danger",
              icon: l.XHJ
            })]
          })
        })
      },
      children: t
    })
  },
  x = e => {
    let {
      widget: t,
      className: r,
      buttonRef: i,
      additionalMenuItems: a
    } = e, c = (0, f.mR)(t), u = (0, s.Dt)();
    return (0, n.jsx)(j, {
      widgetTitle: c,
      children: e => (0, n.jsx)(h, {
        targetRef: i,
        widget: t,
        additionalMenuItems: a,
        children: t => (0, n.jsxs)(l.P3F, y(m({
          innerRef: i,
          className: o()(O.dragHandleButton, r),
          "data-dnd-name": c,
          "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, {
            widgetTitle: c
          }),
          "aria-describedby": u
        }, e, t), {
          children: [(0, n.jsx)(l.Vni, {
            size: "sm"
          }), (0, n.jsx)(l.nn4, {
            id: u,
            children: b.intl.string(b.t.bsuqFh)
          })]
        }))
      })
    })
  }