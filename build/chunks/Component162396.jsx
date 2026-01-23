/** Chunk was on 65076 **/
/** chunk id: 162396, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk212031 = require("./212031.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk809465 = require("./809465.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk535790 = require("./535790.js");

function p(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsx)(i.W1t, {
    "data-menu-migration-ready": true,
    navId: "settings-footer-more-menu",
    onClose: t,
    onSelect: () => {},
    "aria-label": "More options",
    children: (0, n.jsxs)(i.rXV, {
      children: [(0, n.jsx)(i.Drp, {
        id: "changelog",
        label: b.intl.string(b.t.LRmNAl),
        action: () => (0, s.j)(true)
      }), (0, n.jsx)(i.Drp, {
        id: "acknowledgements",
        label: b.intl.string(b.t["0nUKy3"]),
        action: () => (0, c.A)(f.X7G.ACKNOWLEDGEMENTS)
      }), (0, n.jsx)(i.Drp, {
        id: "support",
        label: b.intl.string(b.t["Yl/Riu"]),
        action: () => (0, c.A)(u.C)
      })]
    })
  })
}

function g() {
  let e = l.useRef(null);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(y.A, {
      compact: true
    }), (0, n.jsxs)("div", {
      className: d.yJ,
      children: [(0, n.jsx)(i.MzZ, {
        href: f.X7G.PRIVACY,
        children: (0, n.jsx)(i.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: b.intl.string(b.t["Knf/f/"])
        })
      }), (0, n.jsx)("span", {
        className: d.xE,
        "aria-hidden": "true",
        children: "•"
      }), (0, n.jsx)(i.MzZ, {
        href: f.X7G.TERMS,
        children: (0, n.jsx)(i.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "currentColor",
          children: b.intl.string(b.t.uFSTGq)
        })
      }), (0, n.jsx)("span", {
        className: d.xE,
        "aria-hidden": "true",
        children: "•"
      }), (0, n.jsx)(i.YNO, {
        targetElementRef: e,
        position: "top",
        align: "center",
        spacing: 0,
        animation: i.YNO.Animation.NONE,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(p, {
            onClose: t
          })
        },
        children: (t, r) => {
          var l, o;
          return (0, n.jsx)(i.MzZ, (l = function(e) {
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
          }({}, t), o = o = {
            ref: e,
            useDefaultUnderlineStyles: false,
            className: a()(d.Mj, {
              [d.vu]: r.isShown
            }),
            children: (0, n.jsx)(i.Text, {
              tag: "span",
              variant: "text-xxs/normal",
              color: "currentColor",
              children: b.intl.string(b.t["UKOtz+"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
          }), l))
        }
      })]
    })]
  })
}