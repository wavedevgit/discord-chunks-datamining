/** Chunk was on 9536 **/
/** chunk id: 231610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk893729 = require("./893729.jsx"),
  Chunk619326 = require("./619326.jsx"),
  Chunk553204 = require("./553204.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357923 = require("./357923.js");

function f() {
  let {
    editStateId: e,
    guildId: t
  } = (0, a.N)(), [, f] = s.p9(e, t), [b, p] = s.Ek(e, t), h = s.qs(e, t);

  function x() {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("63635").then(n.bind(n, 660727));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          guildId: t,
          onUploadIcon: e => f({
            icon: e,
            unicodeEmoji: null
          }),
          onSelectUnicodeEmoji: e => f({
            icon: null,
            unicodeEmoji: e
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
    })
  }
  let j = (0, l.mY)();
  return (0, r.jsx)(o.Z, {
    title: g.intl.string(g.t["Ah+sQ9"]),
    description: g.intl.string(g.t.ixbWiB),
    children: (0, r.jsxs)(i.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsx)(i.gNt, {
        label: g.intl.string(g.t["6OUqDa"]),
        disabled: j,
        children: (0, r.jsx)(d.Z, {
          value: b,
          onChange: p,
          disabled: j
        })
      }), (0, r.jsx)(i.gNt, {
        label: g.intl.string(g.t["zn8/AX"]),
        disabled: j,
        description: g.intl.string(g.t.AqHUrU),
        children: (0, r.jsxs)(i.Kqy, {
          direction: "horizontal",
          gap: 16,
          children: [(0, r.jsx)(u.Z, {
            role: h,
            "aria-label": g.intl.string(g.t.mD1oGB),
            onClick: x,
            disabled: j
          }), (0, r.jsx)(i.Button, {
            variant: "secondary",
            onClick: x,
            disabled: j,
            text: g.intl.string(g.t.mD1oGB)
          })]
        })
      }), (0, r.jsx)(i.Rny, {
        children: (0, r.jsxs)("div", {
          className: m.previewContainer,
          "aria-hidden": true,
          children: [(0, r.jsx)(c.Z, {
            guildId: t,
            role: h,
            className: m.messageContainer,
            theme: "light"
          }), (0, r.jsx)(c.Z, {
            guildId: t,
            role: h,
            className: m.messageContainer,
            theme: "dark"
          })]
        })
      })]
    })
  })
}