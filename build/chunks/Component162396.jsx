/** Chunk was on 47147 **/
/** chunk id: 162396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk212031 = require("./212031.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk809465 = require("./809465.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk535790 = require("./535790.js");

function f(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "settings-footer-more-menu",
    onClose: t,
    onSelect: () => {},
    "aria-label": "More options",
    children: (0, r.jsxs)(i.rXV, {
      children: [(0, r.jsx)(i.Drp, {
        id: "changelog",
        label: b.intl.string(b.t.LRmNAl),
        action: () => (0, s.j)(true)
      }), (0, r.jsx)(i.Drp, {
        id: "acknowledgements",
        label: b.intl.string(b.t["0nUKy3"]),
        action: () => (0, c.A)(_.X7G.ACKNOWLEDGEMENTS)
      }), (0, r.jsx)(i.Drp, {
        id: "support",
        label: b.intl.string(b.t["Yl/Riu"]),
        action: () => (0, c.A)(u.C)
      })]
    })
  })
}

function y() {
  let e = o.useRef(null);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.A, {
      compact: true
    }), (0, r.jsxs)("div", {
      className: p.yJ,
      children: [(0, r.jsx)(i.MzZ, {
        href: _.X7G.PRIVACY,
        children: (0, r.jsx)(i.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: b.intl.string(b.t["Knf/f/"])
        })
      }), (0, r.jsx)("span", {
        className: p.xE,
        "aria-hidden": "true",
        children: "•"
      }), (0, r.jsx)(i.MzZ, {
        href: _.X7G.TERMS,
        children: (0, r.jsx)(i.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: b.intl.string(b.t.uFSTGq)
        })
      }), (0, r.jsx)("span", {
        className: p.xE,
        "aria-hidden": "true",
        children: "•"
      }), (0, r.jsx)(i.YNO, {
        targetElementRef: e,
        position: "top",
        align: "center",
        spacing: 0,
        animation: i.YNO.Animation.NONE,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(f, {
            onClose: t
          })
        },
        children: (t, n) => {
          var o, a;
          return (0, r.jsx)(i.MzZ, (o = function(e) {
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
          }({}, t), a = a = {
            ref: e,
            useDefaultUnderlineStyles: false,
            className: l()(p.Mj, {
              [p.vu]: n.isShown
            }),
            children: (0, r.jsx)(i.Text, {
              tag: "span",
              variant: "text-xxs/normal",
              color: "currentColor",
              children: b.intl.string(b.t["UKOtz+"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
          }), o))
        }
      })]
    })]
  })
}