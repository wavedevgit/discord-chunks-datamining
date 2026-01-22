/** Chunk was on 47841 **/
/** chunk id: 781289, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465932 = require("./465932.js"),
  Chunk250627 = require("./250627.js"),
  Chunk71393 = require("./71393.js"),
  Chunk599941 = require("./599941.js"),
  Chunk311750 = require("./311750.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    guildId: t,
    allPeriods: f
  } = e, g = (0, i.bG)([c.A], () => c.A.getGuild(t)), b = (0, o.uP)(t, {
    includeSoftDeleted: true
  }), m = (0, a.fZ)(t, {
    publishedOnly: false
  }), {
    allowSelfRemoveMonetization: p
  } = (0, s.nq)(t), x = f.filter(e => {
    var t;
    let n = Object.values(null != (t = e.ppgs) ? t : {})[0];
    return (null == n ? true : n.status) === d.U1.OPEN || (null == n ? true : n.status) === d.U1.PAYOUT_DEFERRED
  }), h = b.length > 0, j = m.length > 0, O = x.length > 0;
  return null == g ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: u.intl.format(u.t.fvOn6J, {
        guildName: g.name
      })
    }), (0, r.jsx)(l.hKd, {
      size: 16
    }), (0, r.jsx)(l.Button, {
      variant: "critical-primary",
      text: u.intl.string(u.t.FrOFSo),
      disabled: !p || h || j || O,
      onClick: () => {
        (0, l.mMO)(async () => {
          let {
            default: e
          } = await n.e("43224").then(n.bind(n, 201291));
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