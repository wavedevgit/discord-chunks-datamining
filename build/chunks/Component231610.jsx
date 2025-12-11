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
  } = (0, Chunk727843.N)(), [, f] = Chunk290348.p9(module, exports), [p, b] = Chunk290348.Ek(module, exports), h = Chunk290348.qs(module, exports);

  function x() {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("22942").then(require.bind(require, 660727));
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
  let j = (0, Chunk723047.mY)();
  return (0, Chunk54381.jsx)(Chunk783454.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["Ah+sQ9"]),
    description: Chunk388032.intl.string(Chunk388032.t.ixbWiB),
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["6OUqDa"]),
        disabled: j,
        children: (0, Chunk54381.jsx)(Chunk619326.Z, {
          value: p,
          onChange: b,
          disabled: j
        })
      }), (0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["zn8/AX"]),
        disabled: j,
        description: Chunk388032.intl.string(Chunk388032.t.AqHUrU),
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          gap: 16,
          children: [(0, Chunk54381.jsx)(Chunk553204.Z, {
            role: h,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.mD1oGB),
            onClick: x,
            disabled: j
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "secondary",
            onClick: x,
            disabled: j,
            text: Chunk388032.intl.string(Chunk388032.t.mD1oGB)
          })]
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Rny, {
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk357923.previewContainer,
          "aria-hidden": true,
          children: [(0, Chunk54381.jsx)(Chunk893729.Z, {
            guildId: exports,
            role: h,
            className: Chunk357923.messageContainer,
            theme: "light"
          }), (0, Chunk54381.jsx)(Chunk893729.Z, {
            guildId: exports,
            role: h,
            className: Chunk357923.messageContainer,
            theme: "dark"
          })]
        })
      })]
    })
  })
}