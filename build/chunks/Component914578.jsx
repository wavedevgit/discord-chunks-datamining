/** Chunk was on 5550 **/
/** chunk id: 914578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk163379 = require("./163379.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk604227 = require("./604227.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989281 = require("./989281.js");

function E(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsx)(r.v2r, {
    navId: "settings-footer-more-menu",
    onClose: t,
    onSelect: () => {},
    "aria-label": "More options",
    children: (0, i.jsxs)(r.kSQ, {
      children: [(0, i.jsx)(r.sNh, {
        id: "changelog",
        label: d.intl.string(d.t.LRmNAg),
        action: () => (0, a.Z)(true)
      }), (0, i.jsx)(r.sNh, {
        id: "acknowledgements",
        label: d.intl.string(d.t["0nUKy8"]),
        action: () => (0, s.Z)(c.EYA.ACKNOWLEDGEMENTS)
      }), (0, i.jsx)(r.sNh, {
        id: "support",
        label: d.intl.string(d.t["Yl/Rio"]),
        action: () => (0, s.Z)(o.w)
      })]
    })
  })
}

function N() {
  let e = Chunk647438.useRef(null);
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk604227.Z, {
      compact: true
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk989281.links,
      children: [(0, Chunk951288.jsx)(Chunk481060.eee, {
        href: Chunk981631.EYA.PRIVACY,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t["Knf/f3"])
        })
      }), (0, Chunk951288.jsx)(Chunk481060.eee, {
        href: Chunk981631.EYA.TERMS,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t.uFSTGh)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: module,
        position: "top",
        align: "center",
        spacing: 0,
        animation: Chunk481060.yRy.Animation.NONE,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(E, {
            onClose: t
          })
        },
        children: t => {
          var n, l;
          return (0, i.jsx)(r.eee, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), l = l = {
            ref: e,
            children: (0, i.jsx)(r.Text, {
              tag: "span",
              variant: "text-xxs/normal",
              color: "text-muted",
              children: d.intl.string(d.t.UKOtz8)
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n))
        }
      })]
    })]
  })
}