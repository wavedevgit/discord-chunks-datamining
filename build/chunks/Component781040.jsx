/** Chunk was on 8188 **/
/** chunk id: 781040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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

function p(e, t) {
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
let m = e => {
    let {
      children: t
    } = e, {
      isDragging: n
    } = (0, i.f)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, r.jsx)(l.ua7, {
      "aria-label": f.intl.string(f.t.HWNJJC),
      text: (0, r.jsx)(O, {}),
      position: "top",
      shouldShow: true !== n,
      children: t
    })
  },
  O = () => (0, Chunk951288.jsxs)("div", {
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
  j = e => {
    let {
      children: t,
      widget: i,
      targetRef: g
    } = e, {
      trackUserProfileAction: m
    } = (0, c.KZ)(), O = e => {
      if (e.shiftKey) {
        (0, s.y8)(i.type), (0, u.L$)(d.qb.WIDGET_REMOVED);
        return
      }(0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("70887").then(n.bind(n, 37668));
        return t => (0, r.jsx)(e, p(b({}, t), {
          userId: o.default.getId(),
          widget: i,
          trackUserProfileAction: m
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, r.jsx)(l.yRy, {
      targetElementRef: g,
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
            (0, a.Zy)(), t()
          },
          onSelect: () => {},
          "aria-label": f.intl.string(f.t.xpSHSk),
          children: (0, r.jsx)(l.kSQ, {
            children: (0, r.jsx)(l.sNh, {
              id: "remove-widget",
              label: f.intl.string(f.t.Mm07YW),
              action: O,
              color: "danger",
              icon: l.XHJ
            })
          })
        })
      },
      children: t
    })
  },
  y = e => {
    let {
      widget: t,
      className: n,
      buttonRef: i
    } = e;
    return (0, r.jsx)(m, {
      children: e => (0, r.jsx)(j, {
        targetRef: i,
        widget: t,
        children: t => (0, r.jsx)(l.P3F, p(b({
          innerRef: i,
          className: n
        }, e, t), {
          children: (0, r.jsx)(l.Vni, {
            size: "sm"
          })
        }))
      })
    })
  }