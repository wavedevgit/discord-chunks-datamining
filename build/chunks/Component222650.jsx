/** Chunk was on 20601 **/
/** chunk id: 222650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d,
  e: () => m
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

function d() {
  return (0, r.jsx)(a.ZK, {
    className: u.jm,
    icon: i.u6o,
    text: c.intl.string(c.t.woMjLV),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, r.jsx)(l.m, {
      asContainer: true,
      text: c.intl.string(c.t.mGlP30),
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: c.intl.string(c.t["13ofGu"])
      })
    })
  })
}

function m(e) {
  let {
    isUserVerified: t
  } = e, l = t ? c.intl.string(c.t.WWzQta) : c.intl.string(c.t.woMjLV);
  return (0, r.jsx)(a.ZK, {
    className: u.jm,
    icon: i.u6o,
    text: l,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, r.jsx)(i.Button, {
      variant: "primary",
      size: "sm",
      text: c.intl.string(c.t["13ofGu"]),
      onClick: () => {
        (0, i.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
          return t => (0, r.jsx)(e, function(e) {
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
          }({
            reason: s.d.GUILD_PHONE_REQUIRED
          }, t))
        }, {
          modalKey: o.V
        })
      }
    })
  })
}