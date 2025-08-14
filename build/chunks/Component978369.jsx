/** Chunk was on 76708 **/
/** chunk id: 978369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function d() {
  let e = (0, Chunk73800.useRef)(null),
    {
      trackUserProfileAction: t
    } = (0, Chunk785717.KZ)(),
    [n, d] = (0, Chunk73800.useState)(new Set);
  return (0, Chunk255367.jsx)(Chunk481060.yRy, {
    targetElementRef: module,
    position: "right",
    align: "top",
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(i.v2r, {
        navId: "widget-game-tags",
        "aria-label": c.intl.string(c.t.r6EJOj),
        onClose: l,
        onSelect: () => {},
        children: Object.entries(a.aE).map(e => {
          let [l, o] = e, c = o.tags.map(e => {
            let l = a.XV[e];
            return null == l ? null : (0, r.jsx)(i.S89, {
              id: e,
              label: l.getText(),
              checked: n.has(e),
              action: () => {
                d(t => {
                  let n = new Set(t);
                  return n.has(e) ? n.delete(e) : n.add(e), n
                }), t({
                  action: "ADD_GAME_TAGS"
                })
              }
            }, e)
          }).filter(Boolean);
          return (0, r.jsx)(i.kSQ, {
            label: o.getLabel(),
            children: c
          }, l)
        })
      })
    },
    children: t => {
      var n, l;
      return (0, r.jsx)("div", {
        ref: e,
        children: (0, r.jsx)(i.P3F, (n = function(e) {
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
        }({}, t), l = l = {
          className: s.addButton,
          "aria-label": c.intl.string(c.t.r6EJOj),
          children: (0, r.jsx)(i.Text, {
            variant: "text-xxs/medium",
            color: "text-secondary",
            children: c.intl.string(c.t.fZSej4)
          })
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
      })
    }
  })
}