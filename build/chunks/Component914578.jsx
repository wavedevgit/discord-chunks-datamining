/** Chunk was on 47129 **/
/** chunk id: 914578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk163379 = require("./163379.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk604227 = require("./604227.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989281 = require("./989281.js");

function O(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.v2r, {
    navId: "settings-footer-more-menu",
    onClose: t,
    onSelect: () => {},
    "aria-label": "More options",
    children: (0, r.jsxs)(a.kSQ, {
      children: [(0, r.jsx)(a.sNh, {
        id: "changelog",
        label: f.intl.string(f.t.LRmNAg),
        action: () => (0, u.Z)(true)
      }), (0, r.jsx)(a.sNh, {
        id: "acknowledgements",
        label: f.intl.string(f.t["0nUKy8"]),
        action: () => (0, s.Z)(g.EYA.ACKNOWLEDGEMENTS)
      }), (0, r.jsx)(a.sNh, {
        id: "support",
        label: f.intl.string(f.t["Yl/Rio"]),
        action: () => (0, s.Z)(c.w)
      })]
    })
  })
}

function E() {
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
          color: "currentColor",
          children: Chunk388032.intl.string(Chunk388032.t["Knf/f3"])
        })
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk989281.bullet,
        "aria-hidden": "true",
        children: "•"
      }), (0, Chunk951288.jsx)(Chunk481060.eee, {
        href: Chunk981631.EYA.TERMS,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: Chunk388032.intl.string(Chunk388032.t.uFSTGh)
        })
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk989281.bullet,
        "aria-hidden": "true",
        children: "•"
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
          return (0, r.jsx)(O, {
            onClose: t
          })
        },
        children: (t, n) => {
          var i, l;
          return (0, r.jsx)(a.eee, (i = function(e) {
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
            ref: e,
            useDefaultUnderlineStyles: false,
            className: o()(y.moreButton, {
              [y.active]: n.isShown
            }),
            children: (0, r.jsx)(a.Text, {
              tag: "span",
              variant: "text-xxs/normal",
              color: "currentColor",
              children: f.intl.string(f.t.UKOtz8)
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })]
    })]
  })
}