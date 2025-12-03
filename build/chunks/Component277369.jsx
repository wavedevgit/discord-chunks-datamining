/** Chunk was on 384 **/
/** chunk id: 277369, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk723047 = require("./723047.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    guildId: t,
    application: g
  } = e, m = (0, i.e7)([o.Z], () => o.Z.getGuild(t)), p = (0, i.e7)([c.default], () => c.default.getCurrentUser()), f = (0, u.mY)();
  if (null == m || !(0, s.eM)(m, p)) return null;
  let h = g.team;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: f ? "text-muted" : "text-default",
      children: null != h ? d.intl.format(d.t.erxwWA, {
        teamName: h.name
      }) : d.intl.string(d.t.FGzLkK)
    }), (0, r.jsx)(a.LZC, {
      size: 16
    }), (0, r.jsx)(l.zxk, {
      text: null != h ? d.intl.string(d.t["/Fjq5P"]) : d.intl.string(d.t["6ih+b4"]),
      variant: null != h ? "secondary" : "primary",
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("83942").then(n.bind(n, 743582));
          return t => {
            var n, i;
            return (0, r.jsx)(e, (n = function(e) {
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
            }({}, t), i = i = {
              application: g
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n))
          }
        })
      },
      disabled: f
    })]
  })
}