/** Chunk was on 1267 **/
/** chunk id: 781040, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk323946 = require("./323946.js"),
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

function y(e) {
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

function j(e, t) {
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
      widgetTitle: t,
      children: r
    } = e, {
      isDragging: i
    } = (0, o.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, n.jsx)(a.ua7, {
      "aria-label": p.intl.formatToPlainString(p.t.HWNJJC, {
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
  x = e => {
    let {
      children: t,
      widget: i,
      targetRef: l
    } = e, {
      trackUserProfileEditAction: o
    } = (0, d.KZ)(), s = e => {
      if (e.shiftKey) {
        (0, f.y8)(i.type), o({
          action: "WIDGET_REMOVED",
          widgetEdited: i.type
        }), (0, g.L$)(b.qb.WIDGET_REMOVED);
        return
      }(0, a.ZDy)(async () => {
        let {
          default: e
        } = await r.e("70887").then(r.bind(r, 37668));
        return t => (0, n.jsx)(e, j(y({}, t), {
          userId: u.default.getId(),
          widget: i,
          trackUserProfileEditAction: o
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
            (0, c.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": p.intl.string(p.t.xpSHSk),
          children: (0, n.jsx)(a.kSQ, {
            children: (0, n.jsx)(a.sNh, {
              id: "remove-widget",
              label: p.intl.string(p.t.Mm07YW),
              action: s,
              color: "danger",
              icon: a.XHJ
            })
          })
        })
      },
      children: t
    })
  },
  h = e => {
    let {
      widget: t,
      className: r,
      buttonRef: i
    } = e, o = (0, f.mR)(t), c = (0, s.Dt)();
    return (0, n.jsx)(m, {
      widgetTitle: o,
      children: e => (0, n.jsx)(x, {
        targetRef: i,
        widget: t,
        children: t => (0, n.jsxs)(a.P3F, j(y({
          innerRef: i,
          className: l()(O.dragHandleButton, r),
          "data-dnd-name": o,
          "aria-label": p.intl.formatToPlainString(p.t.HWNJJC, {
            widgetTitle: o
          }),
          "aria-describedby": c
        }, e, t), {
          children: [(0, n.jsx)(a.Vni, {
            size: "sm"
          }), (0, n.jsx)(a.nn4, {
            id: c,
            children: p.intl.string(p.t.bsuqFh)
          })]
        }))
      })
    })
  }