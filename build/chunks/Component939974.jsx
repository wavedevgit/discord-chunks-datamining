/** Chunk was on 11080 **/
/** chunk id: 939974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk85707 = require("./85707.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk249018 = require("./249018.js");

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

function v(e, t) {
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

function j(e) {
  let {
    widget: t,
    className: n,
    buttonRef: i,
    additionalMenuItems: l
  } = e, o = (0, p.mR)(t), s = (0, d.Dt)();
  return (0, r.jsx)(x, {
    children: e => (0, r.jsx)(_, {
      targetRef: i,
      widget: t,
      additionalMenuItems: l,
      children: t => (0, r.jsxs)(c.P3F, v(O({
        innerRef: i,
        className: a()(y.button, n),
        "data-dnd-name": o,
        "aria-label": h.intl.formatToPlainString(h.t.HWNJJN, {
          widgetTitle: o
        }),
        "aria-describedby": s,
        "aria-keyshortcuts": "Control+D, Meta+D"
      }, e, t), {
        children: [(0, r.jsx)(c.Vni, {
          size: "sm"
        }), (0, r.jsx)(c.nn4, {
          id: s,
          children: h.intl.string(h.t.bsuqFn)
        })]
      }))
    })
  })
}
let x = e => {
    let {
      children: t
    } = e, n = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled), {
      isDragging: i
    } = (0, l.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, r.jsx)(c.aML, {
      "aria-label": false,
      text: () => (0, r.jsxs)("div", {
        className: y.tooltipText,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: h.intl.format(n ? h.t["zvln/l"] : h.t["7cdwhg"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: h.intl.format(h.t["4e0rM4"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        })]
      }),
      position: "top",
      shouldShow: true !== i,
      children: t
    })
  },
  _ = e => {
    let {
      children: t,
      widget: i,
      targetRef: a,
      additionalMenuItems: l
    } = e, {
      trackUserProfileEditAction: o
    } = (0, g.KZ)(), u = e => {
      if (e.shiftKey) {
        (0, p.y8)(i.type), o({
          action: "WIDGET_REMOVED",
          widgetEdited: i.type
        }), (0, m.L$)(b.qb.WIDGET_REMOVED);
        return
      }(0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("70887").then(n.bind(n, 37668));
        return t => (0, r.jsx)(e, v(O({}, t), {
          userId: f.default.getId(),
          widget: i,
          trackUserProfileEditAction: o
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, r.jsx)(c.yRy, {
      targetElementRef: a,
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
            (0, s.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": h.intl.string(h.t.xpSHSk),
          className: y.menu,
          children: (0, r.jsxs)(c.kSQ, {
            children: [l, (0, r.jsx)(c.sNh, {
              id: "remove-widget",
              label: h.intl.string(h.t.Mm07Yc),
              action: u,
              color: "danger",
              icon: c.XHJ
            })]
          })
        })
      },
      children: t
    })
  }