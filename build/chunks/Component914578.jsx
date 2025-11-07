/** Chunk was on 18729 **/
/** chunk id: 914578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk163379 = require("./163379.jsx"),
  Chunk31336 = require("./31336.js"),
  Chunk906467 = require("./906467.js"),
  Chunk63063 = require("./63063.js"),
  Chunk604227 = require("./604227.jsx"),
  Chunk924983 = require("./924983.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989281 = require("./989281.js");

function v(e) {
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
        label: j.intl.string(j.t.LRmNAl),
        action: () => (0, s.Z)(true)
      }), (0, r.jsx)(a.sNh, {
        id: "acknowledgements",
        label: j.intl.string(j.t["0nUKy3"]),
        action: () => (0, c.Z)(y.EYA.ACKNOWLEDGEMENTS)
      }), (0, r.jsx)(a.sNh, {
        id: "support",
        label: j.intl.string(j.t["Yl/Riu"]),
        action: () => (0, c.Z)(f.w)
      })]
    })
  })
}

function g() {
  let e = Chunk647438.useRef(null),
    t = Chunk906467.Z.isDeveloper;
  return (0, Chunk951288.jsxs)("div", {
    children: [exports && (0, Chunk951288.jsx)(Chunk481060.P3F, {
      className: Chunk989281.devToolsEducation,
      onClick: () => (0, Chunk31336.d8)(),
      children: (0, Chunk951288.jsx)(Chunk924983.$, {
        legacy: false
      })
    }), (0, Chunk951288.jsx)(Chunk604227.Z, {
      compact: true
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk989281.links,
      children: [(0, Chunk951288.jsx)(Chunk481060.Anchor, {
        href: Chunk981631.EYA.PRIVACY,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: Chunk388032.intl.string(Chunk388032.t["Knf/f/"])
        })
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk989281.bullet,
        "aria-hidden": "true",
        children: "•"
      }), (0, Chunk951288.jsx)(Chunk481060.Anchor, {
        href: Chunk981631.EYA.TERMS,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: Chunk388032.intl.string(Chunk388032.t.uFSTGq)
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
          return (0, r.jsx)(v, {
            onClose: t
          })
        },
        children: (t, n) => {
          var l, o;
          return (0, r.jsx)(a.Anchor, (l = function(e) {
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
          }({}, t), o = o = {
            ref: e,
            useDefaultUnderlineStyles: false,
            className: i()(m.moreButton, {
              [m.active]: n.isShown
            }),
            children: (0, r.jsx)(a.Text, {
              tag: "span",
              variant: "text-xxs/normal",
              color: "currentColor",
              children: j.intl.string(j.t["UKOtz+"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
          }), l))
        }
      })]
    })]
  })
}