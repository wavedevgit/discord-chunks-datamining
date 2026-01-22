/** Chunk was on 38663 **/
/** chunk id: 19333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk688807 = require("./688807.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk775602 = require("./775602.js"),
  Chunk915089 = require("./915089.js"),
  Chunk961350 = require("./961350.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk10241 = require("./10241.js");

function x(e) {
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

function h(e, t) {
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

function v(e) {
  let {
    widget: t,
    className: n,
    buttonRef: l,
    additionalMenuItems: a
  } = e, s = (0, g.L)(t), o = (0, f.GV)();
  return (0, r.jsx)(w, {
    targetRef: l,
    widget: t,
    additionalMenuItems: a,
    children: e => (0, r.jsx)(A, {
      children: (0, r.jsxs)(c.DUT, h(x({
        innerRef: l,
        className: i()(j.x6, n),
        "data-dnd-name": s,
        "aria-label": O.intl.formatToPlainString(O.t.HWNJJN, {
          widgetTitle: s
        }),
        "aria-describedby": o,
        "aria-keyshortcuts": "Control+D, Meta+D"
      }, e), {
        children: [(0, r.jsx)(c.WP0, {
          size: "sm"
        }), (0, r.jsx)(c.AC4, {
          id: o,
          children: O.intl.string(O.t.bsuqFn)
        })]
      }))
    })
  })
}
let A = e => {
    let {
      children: t
    } = e, n = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled), {
      isDragging: l
    } = (0, a.V)(e => ({
      isDragging: e.isDragging()
    }));
    return (0, r.jsx)(o.m_, {
      __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
        className: j.HE,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: O.intl.format(n ? O.t["zvln/l"] : O.t["7cdwhg"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "none",
          children: O.intl.format(O.t["4e0rM4"], {
            emphasizeHook: e => (0, r.jsx)("strong", {
              children: e
            })
          })
        })]
      }),
      position: "top",
      shouldShow: true !== l,
      ariaHidden: true,
      children: t
    })
  },
  w = e => {
    let {
      children: t,
      widget: l,
      targetRef: i,
      additionalMenuItems: a
    } = e, {
      trackUserProfileEditAction: s
    } = (0, b.NJ)(), o = e => {
      if (e.shiftKey) {
        (0, g.qA)(l), s(x({
          action: "WIDGET_REMOVED"
        }, l.getProfileEditAnalyticsOptions())), (0, m.XA)(y.jM.WIDGET_REMOVED);
        return
      }(0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("53600").then(n.bind(n, 380035));
        return t => (0, r.jsx)(e, h(x({}, t), {
          userId: p.default.getId(),
          widget: l,
          trackUserProfileEditAction: s
        }))
      }, {
        stackingBehavior: "stack"
      })
    };
    return (0, r.jsx)(c.YNO, {
      targetElementRef: i,
      align: "top",
      position: "right",
      disablePointerEvents: false,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.W1t, {
          navId: "user-profile-widget-context-menu",
          onClose: () => {
            (0, u.Z_)(), t()
          },
          onSelect: () => {},
          "aria-label": O.intl.string(O.t.xpSHSk),
          className: j.MK,
          children: (0, r.jsxs)(c.rXV, {
            children: [a, (0, r.jsx)(c.Drp, {
              id: "remove-widget",
              label: O.intl.string(O.t.Mm07Yc),
              action: o,
              color: "danger",
              icon: c.ucK
            })]
          })
        })
      },
      children: t
    })
  }