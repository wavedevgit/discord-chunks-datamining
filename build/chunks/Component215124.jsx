/** Chunk was on 29679 **/
/** chunk id: 215124, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk674180 = require("./674180.js"),
  Chunk267101 = require("./267101.js"),
  Chunk430824 = require("./430824.js"),
  Chunk584825 = require("./584825.js"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    guildId: t,
    allPeriods: m
  } = e, g = (0, i.e7)([o.Z], () => o.Z.getGuild(t)), p = (0, c.qi)(t, {
    includeSoftDeleted: true
  }), f = (0, a.ue)(t, {
    publishedOnly: false
  }), {
    allowSelfRemoveMonetization: h
  } = (0, s.gX)(t), x = m.filter(e => {
    var t;
    let n = Object.values(null != (t = e.ppgs) ? t : {})[0];
    return (null == n ? true : n.status) === d.x_.OPEN || (null == n ? true : n.status) === d.x_.PAYOUT_DEFERRED
  }), b = p.length > 0, j = f.length > 0, v = x.length > 0;
  return null == g ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.R94, {
      type: l.R94.Types.DESCRIPTION,
      children: u.intl.format(u.t.fvOn6O, {
        guildName: g.name
      })
    }), (0, r.jsx)(l.LZC, {
      size: 16
    }), (0, r.jsx)(l.zxk, {
      variant: "critical-primary",
      text: u.intl.string(u.t.FrOFSk),
      disabled: !h || b || j || v,
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
              guild: g
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