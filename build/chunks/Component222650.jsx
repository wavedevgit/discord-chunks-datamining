/** Chunk was on 20601 **/
/** chunk id: 222650, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u,
  e: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk557722 = require("./557722.js"),
  Chunk31457 = require("./31457.jsx"),
  Chunk53516 = require("./53516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712104 = require("./712104.js");

function u() {
  return (0, n.jsx)(a.ZK, {
    className: d.jm,
    icon: s.u6o,
    text: c.intl.string(c.t.woMjLV),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, n.jsx)(r.m, {
      asContainer: true,
      text: c.intl.string(c.t.mGlP30),
      children: (0, n.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: c.intl.string(c.t["13ofGu"])
      })
    })
  })
}

function f(e) {
  let {
    isUserVerified: t
  } = e, r = t ? c.intl.string(c.t.WWzQta) : c.intl.string(c.t.woMjLV);
  return (0, n.jsx)(a.ZK, {
    className: d.jm,
    icon: s.u6o,
    text: r,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, n.jsx)(s.Button, {
      variant: "primary",
      size: "sm",
      text: c.intl.string(c.t["13ofGu"]),
      onClick: () => {
        (0, s.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(l.bind(l, 615715));
          return t => (0, n.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({
            reason: i.d.GUILD_PHONE_REQUIRED
          }, t))
        }, {
          modalKey: o.V
        })
      }
    })
  })
}