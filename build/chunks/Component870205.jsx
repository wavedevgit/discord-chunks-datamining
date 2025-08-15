/** Chunk was on 35755 **/
/** chunk id: 870205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984168 = require("./984168.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54701 = require("./54701.js");

function d(e) {
  let t, {
      sortOrder: n,
      onSortOptionClick: d
    } = e,
    p = i.useRef(null);
  switch (n) {
    case s.bS.POPULAR:
      t = c.intl.string(c.t.SzxiqK);
      break;
    case s.bS.ALPHABETICAL:
      t = c.intl.string(c.t.m8xstr)
  }
  return (0, l.jsx)(a.yRy, {
    targetElementRef: p,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(o.Z, {
        sortOrder: n,
        onSortOptionClick: d,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, n) => {
      var i, o;
      let {
        isShown: s
      } = n;
      return (0, l.jsxs)(r.zx, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), o = o = {
        buttonRef: p,
        size: r.zx.Sizes.MIN,
        color: r.zx.Colors.CUSTOM,
        className: u.sortDropdown,
        innerClassName: u.sortDropdownInner,
        "aria-label": c.intl.string(c.t.yeYaHR),
        children: [(0, l.jsx)(a.uVW, {
          size: "xs",
          color: "currentColor",
          className: u.sortIconMargin
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: t
        }), s ? (0, l.jsx)(a.u04, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, l.jsx)(a.CJ0, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    }
  })
}