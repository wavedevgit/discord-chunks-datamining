/** Chunk was on 78431 **/
/** chunk id: 895737, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk891561 = require("./891561.jsx"),
  Chunk333866 = require("./333866.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3786 = require("./3786.js");

function u(e) {
  let {
    closePopout: t,
    sortOptionContext: r
  } = e, {
    sortOption: o,
    setSortOption: s,
    onReset: u
  } = r, C = i.useMemo(() => c.kL.map(e => (0, n.jsx)(l.k5B, {
    id: "".concat(e),
    group: "sort-by",
    label: (0, c.eJ)(e),
    action: () => s(e),
    checked: o === e
  }, e)), [s, o]);
  return (0, n.jsx)("div", {
    children: (0, n.jsxs)(l.v2r, {
      navId: "sort-and-view",
      "aria-label": a.intl.string(a.t["4jfWTK"]),
      hideScroller: true,
      onClose: t,
      onSelect: t,
      children: [(0, n.jsx)(l.kSQ, {
        label: a.intl.string(a.t.mBvLev),
        children: C
      }), (0, n.jsx)(l.kSQ, {
        children: (0, n.jsx)(l.sNh, {
          id: "reset-all",
          className: d.clearText,
          label: (0, n.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: a.intl.string(a.t["3b//lO"])
          }),
          action: u
        })
      })]
    })
  })
}

function C() {
  let e = (0, Chunk891561.s)(),
    t = (0, Chunk333866.eJ)(module.sortOption),
    r = Chunk647438.useRef(null);
  return (0, Chunk951288.jsx)(Chunk481060.yRy, {
    targetElementRef: require,
    renderPopout: t => {
      let {
        closePopout: r
      } = t;
      return (0, n.jsx)(u, {
        closePopout: r,
        sortOptionContext: e
      })
    },
    position: "bottom",
    align: "left",
    children: e => {
      var i, s;
      return (0, n.jsx)(o.zxk, (i = function(e) {
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
      }({}, e), s = s = {
        text: t,
        icon: l.uVW,
        variant: "secondary",
        buttonRef: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
}