/** Chunk was on 384 **/
/** chunk id: 215124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk674180 = require("./674180.js"),
  Chunk267101 = require("./267101.js"),
  Chunk430824 = require("./430824.js"),
  Chunk584825 = require("./584825.js"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    guildId: t,
    allPeriods: g
  } = e, m = (0, i.e7)([o.Z], () => o.Z.getGuild(t)), p = (0, c.qi)(t, {
    includeSoftDeleted: true
  }), f = (0, s.ue)(t, {
    publishedOnly: false
  }), {
    allowSelfRemoveMonetization: h
  } = (0, a.gX)(t), b = g.filter(e => {
    var t;
    let n = Object.values(null != (t = e.ppgs) ? t : {})[0];
    return (null == n ? true : n.status) === u.x_.OPEN || (null == n ? true : n.status) === u.x_.PAYOUT_DEFERRED
  }), x = p.length > 0, j = f.length > 0, _ = b.length > 0;
  return null == m ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: d.intl.format(d.t.fvOn6J, {
        guildName: m.name
      })
    }), (0, r.jsx)(l.LZC, {
      size: 16
    }), (0, r.jsx)(l.Button, {
      variant: "critical-primary",
      text: d.intl.string(d.t.FrOFSo),
      disabled: !h || x || j || _,
      onClick: () => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("35282").then(n.bind(n, 157429));
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
              guild: m
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
      }
    })]
  })
}