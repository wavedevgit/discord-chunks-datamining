/** Chunk was on 49941 **/
/** chunk id: 939974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk85707 = require("./85707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680604 = require("./680604.js");

function v(e) {
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

function j(e, t) {
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

function x(e) {
  let {
    widget: t,
    className: n,
    buttonRef: i,
    additionalMenuItems: a
  } = e, o = (0, m.mR)(t), s = (0, f.Dt)();
  return (0, r.jsx)(_, {
    targetRef: i,
    widget: t,
    additionalMenuItems: a,
    children: e => (0, r.jsx)(P, {
      children: (0, r.jsxs)(c.P3F, j(v({
        innerRef: i,
        className: l()(O.button, n),
        "data-dnd-name": o,
        "aria-label": y.intl.formatToPlainString(y.t.HWNJJN, {
          widgetTitle: o
        }),
        "aria-describedby": s,
        "aria-keyshortcuts": "Control+D, Meta+D"
      }, e), {
        children: [(0, r.jsx)(c.Vni, {
          size: "sm"
        }), (0, r.jsx)(c.nn4, {
          id: s,
          children: y.intl.string(y.t.bsuqFn)
        })]
      }))
    })
  })
}
let P = e => {
    let {
      children: t
    } = e, n = (0, o.e7)([d.Z], () => d.Z.keyboardModeEnabled), {
      isDragging: i
    } = (0, a.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, r.jsx)(s.u, {
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: O.tooltipText,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: y.intl.format(n ? y.t["zvln/l"] : y.t["7cdwhg"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: y.intl.format(y.t["4e0rM4"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        })]
      }),
      position: "top",
      shouldShow: true !== i,
      ariaHidden: true,
      children: t
    })
  },
  _ = e => {
    let {
      children: t,
      widget: i,
      targetRef: l,
      additionalMenuItems: a
    } = e, {
      trackUserProfileEditAction: o
    } = (0, p.KZ)(), s = e => {
      if (e.shiftKey) {
        (0, m.y8)(i.type), o(v({
          action: "WIDGET_REMOVED"
        }, i.getProfileEditAnalyticsOptions())), (0, b.L$)(h.qb.WIDGET_REMOVED);
        return
      }(0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("70887").then(n.bind(n, 37668));
        return t => (0, r.jsx)(e, j(v({}, t), {
          userId: g.default.getId(),
          widget: i,
          trackUserProfileEditAction: o
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, r.jsx)(c.yRy, {
      targetElementRef: l,
      align: "top",
      position: "right",
      disablePointerEvents: false,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.v2r, {
          navId: "user-profile-widget-context-menu",
          onClose: () => {
            (0, u.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": y.intl.string(y.t.xpSHSk),
          className: O.menu,
          children: (0, r.jsxs)(c.kSQ, {
            children: [a, (0, r.jsx)(c.sNh, {
              id: "remove-widget",
              label: y.intl.string(y.t.Mm07Yc),
              action: s,
              color: "danger",
              icon: c.XHJ
            })]
          })
        })
      },
      children: t
    })
  }