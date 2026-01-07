/** Chunk was on 93671 **/
/** chunk id: 276486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => d,
  v: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888327 = require("./888327.js");

function d() {
  return (0, r.jsx)(s.PU, {
    className: u.editableRequirementContainer,
    icon: i.AtH,
    text: c.intl.string(c.t.woMjLV),
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: false,
    children: (0, r.jsx)(l.u, {
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
  return (0, r.jsx)(s.PU, {
    className: u.editableRequirementContainer,
    icon: i.AtH,
    text: l,
    footnote: c.intl.string(c.t["jMh+TY"]),
    meetsRequirement: t,
    children: (0, r.jsx)(i.Button, {
      variant: "primary",
      size: "sm",
      text: c.intl.string(c.t["13ofGu"]),
      onClick: () => {
        (0, i.ZDy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 607018));
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
            reason: a.L.GUILD_PHONE_REQUIRED
          }, t))
        }, {
          modalKey: o.M
        })
      }
    })
  })
}