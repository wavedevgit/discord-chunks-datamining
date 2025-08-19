/** Chunk was on 27069 **/
/** chunk id: 978369, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function d(e) {
  let {
    tags: t,
    widgetType: r,
    applicationId: d
  } = e, f = (0, l.useRef)(null), {
    trackUserProfileAction: g
  } = (0, a.KZ)(), p = null != t ? t : [];
  return (0, n.jsx)(i.yRy, {
    targetElementRef: f,
    position: "right",
    align: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(i.v2r, {
        navId: "widget-game-tags",
        "aria-label": s.intl.string(s.t.r6EJOj),
        onClose: t,
        onSelect: () => {},
        children: Object.entries(c.aE).map(e => {
          let [t, l] = e, a = l.tags.map(e => {
            let t = c.XV[e];
            return null == t ? null : (0, n.jsx)(i.S89, {
              id: e,
              label: t.getText(),
              checked: p.includes(e),
              action: () => (e => {
                let t = new Set(p);
                t.has(e) ? (t.delete(e), g({
                  action: "REMOVE_GAME_TAGS"
                })) : (t.add(e), g({
                  action: "ADD_GAME_TAGS"
                })), (0, o.n$)(r, d, Array.from(t))
              })(e)
            }, e)
          }).filter(Boolean);
          return (0, n.jsx)(i.kSQ, {
            label: l.getLabel(),
            children: a
          }, t)
        })
      })
    },
    children: e => {
      var t, r;
      return (0, n.jsx)("div", {
        ref: f,
        children: (0, n.jsx)(i.P3F, (t = function(e) {
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
        }({}, e), r = r = {
          className: u.addButton,
          "aria-label": s.intl.string(s.t.r6EJOj),
          children: (0, n.jsx)(i.Text, {
            variant: "text-xxs/medium",
            color: "text-secondary",
            children: s.intl.string(s.t.fZSej4)
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    }
  })
}