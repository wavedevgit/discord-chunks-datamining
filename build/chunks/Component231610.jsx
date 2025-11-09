/** Chunk was on 29679 **/
/** chunk id: 231610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk893729 = require("./893729.jsx"),
  Chunk619326 = require("./619326.jsx"),
  Chunk553204 = require("./553204.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk510569 = require("./510569.js");

function p() {
  let {
    editStateId: e,
    guildId: t
  } = (0, Chunk727843.N)(), [, p] = Chunk290348.p9(module, exports), [f, h] = Chunk290348.Ek(module, exports), b = Chunk290348.qs(module, exports);

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
          onUploadIcon: e => p({
            icon: e,
            unicodeEmoji: null
          }),
          onSelectUnicodeEmoji: e => p({
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
  return (0, Chunk951288.jsx)(Chunk783454.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["Ah+sQ9"]),
    description: Chunk388032.intl.string(Chunk388032.t.ixbWiB),
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      direction: "vertical",
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["6OUqDa"]),
        disabled: j,
        children: (0, Chunk951288.jsx)(Chunk619326.Z, {
          value: f,
          onChange: h,
          disabled: j
        })
      }), (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: Chunk388032.intl.string(Chunk388032.t["zn8/AX"]),
        disabled: j,
        description: Chunk388032.intl.string(Chunk388032.t.AqHUrU),
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          gap: 16,
          children: [(0, Chunk951288.jsx)(Chunk553204.Z, {
            role: b,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.mD1oGB),
            onClick: x,
            disabled: j
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "secondary",
            onClick: x,
            disabled: j,
            text: Chunk388032.intl.string(Chunk388032.t.mD1oGB)
          })]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Rny, {
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk510569.previewContainer,
          "aria-hidden": true,
          children: [(0, Chunk951288.jsx)(Chunk893729.Z, {
            guildId: exports,
            role: b,
            className: Chunk510569.messageContainer,
            theme: "light"
          }), (0, Chunk951288.jsx)(Chunk893729.Z, {
            guildId: exports,
            role: b,
            className: Chunk510569.messageContainer,
            theme: "dark"
          })]
        })
      })]
    })
  })
}