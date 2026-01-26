/** Chunk was on 39048 **/
/** chunk id: 595303, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk11351 = require("./11351.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    guildId: t,
    application: g
  } = e, m = (0, i.bG)([o.A], () => o.A.getGuild(t)), p = (0, i.bG)([c.default], () => c.default.getCurrentUser()), f = (0, d.gN)();
  if (null == m || !(0, a.bM)(m, p)) return null;
  let h = g.team;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: f ? "text-muted" : "text-default",
      children: null != h ? u.intl.format(u.t.erxwWA, {
        teamName: h.name
      }) : u.intl.string(u.t.FGzLkK)
    }), (0, r.jsx)(s.hKd, {
      size: 16
    }), (0, r.jsx)(l.$nd, {
      text: null != h ? u.intl.string(u.t["/Fjq5P"]) : u.intl.string(u.t["6ih+b4"]),
      variant: null != h ? "secondary" : "primary",
      onClick: () => {
        (0, s.mMO)(async () => {
          let {
            default: e
          } = await n.e("71678").then(n.bind(n, 180493));
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