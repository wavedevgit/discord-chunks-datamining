/** Chunk was on 39048 **/
/** chunk id: 57731, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk963175 = require("./963175.jsx"),
  Chunk792105 = require("./792105.jsx"),
  Chunk389082 = require("./389082.jsx"),
  Chunk136230 = require("./136230.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk436151 = require("./436151.js");

function p() {
  let {
    editStateId: e,
    guildId: t
  } = (0, s.O)(), [, p] = a.$7(e, t), [f, h] = a.xR(e, t), b = a.It(e, t);

  function x() {
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("64939").then(n.bind(n, 836774));
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
  let j = (0, l.gN)();
  return (0, r.jsx)(o.A, {
    title: g.intl.string(g.t["Ah+sQ9"]),
    description: g.intl.string(g.t.ixbWiB),
    children: (0, r.jsxs)(i.BJc, {
      direction: "vertical",
      gap: 24,
      children: [(0, r.jsx)(i.D0$, {
        label: g.intl.string(g.t["6OUqDa"]),
        disabled: j,
        children: (0, r.jsx)(d.A, {
          value: f,
          onChange: h,
          disabled: j
        })
      }), (0, r.jsx)(i.D0$, {
        label: g.intl.string(g.t["zn8/AX"]),
        disabled: j,
        description: g.intl.string(g.t.AqHUrU),
        children: (0, r.jsxs)(i.BJc, {
          direction: "horizontal",
          gap: 16,
          children: [(0, r.jsx)(u.A, {
            role: b,
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
      }), (0, r.jsx)(i.M1G, {
        children: (0, r.jsxs)("div", {
          className: m.i,
          "aria-hidden": true,
          children: [(0, r.jsx)(c.A, {
            guildId: t,
            role: b,
            className: m.z,
            theme: "light"
          }), (0, r.jsx)(c.A, {
            guildId: t,
            role: b,
            className: m.z,
            theme: "dark"
          })]
        })
      })]
    })
  })
}