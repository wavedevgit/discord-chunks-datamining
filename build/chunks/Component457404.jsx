/** Chunk was on 1113 **/
/** chunk id: 457404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk245205 = require("./245205.js"),
  Chunk985018 = require("./985018.jsx");
let c = e => {
    let {
      item: t,
      closePopout: n
    } = e;
    return (0, r.jsx)(s.W1t, {
      "data-menu-migrated": true,
      navId: "notification-actions",
      onClose: n,
      onSelect: n,
      "aria-label": o.intl.string(o.t.ljs3Oe),
      children: (0, r.jsx)(s.Drp, {
        id: "delete",
        label: o.intl.string(o.t.oyYWHE),
        icon: s.ucK,
        leadingAccessory: {
          type: "icon",
          icon: s.ucK
        },
        action: async () => {
          await (0, a.VP)(t)
        }
      })
    })
  },
  u = Chunk64700.memo(function(e) {
    let {
      item: t
    } = e, n = l.useRef(null);
    return (0, r.jsx)(s.YNO, {
      targetElementRef: n,
      renderPopout: e => {
        var n, l;
        return (0, r.jsx)(c, (n = function(e) {
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
        }({}, e), l = l = {
          item: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      },
      position: "bottom",
      align: "right",
      animation: s.YNO.Animation.NONE,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)(i.m, {
          text: o.intl.string(o.t["UKOtz+"]),
          asContainer: true,
          children: (0, r.jsx)(s.K0, {
            buttonRef: n,
            size: "sm",
            icon: s.jNK,
            variant: "icon-only",
            "aria-label": o.intl.string(o.t["UKOtz+"]),
            "aria-haspopup": "menu",
            onClick: e => {
              e.stopPropagation(), t(e)
            },
            role: "button"
          })
        })
      }
    })
  })