/** Chunk was on 36605 **/
/** chunk id: 276486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => u,
  v: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk489813 = require("./489813.jsx"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624463 = require("./624463.js");

function u() {
  return (0, Chunk951288.jsx)(Chunk489813.PU, {
    className: Chunk624463.editableRequirementContainer,
    icon: Chunk481060.AtH,
    text: Chunk388032.intl.string(Chunk388032.t.woMjLS),
    footnote: Chunk388032.intl.string(Chunk388032.t["jMh+TU"]),
    meetsRequirement: false,
    children: (0, Chunk951288.jsx)(Chunk481060.DY3, {
      text: Chunk388032.intl.string(Chunk388032.t.mGlP39),
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        disabled: true,
        text: Chunk388032.intl.string(Chunk388032.t["13ofGh"])
      })
    })
  })
}

function d(e) {
  let {
    isUserVerified: t
  } = e, u = t ? o.intl.string(o.t.WWzQtb) : o.intl.string(o.t.woMjLS);
  return (0, r.jsx)(s.PU, {
    className: c.editableRequirementContainer,
    icon: l.AtH,
    text: u,
    footnote: o.intl.string(o.t["jMh+TU"]),
    meetsRequirement: t,
    children: (0, r.jsx)(l.zxk, {
      variant: "primary",
      size: "sm",
      text: o.intl.string(o.t["13ofGh"]),
      onClick: () => {
        (0, l.ZDy)(async () => {
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
            reason: i.L.GUILD_PHONE_REQUIRED
          }, t))
        }, {
          modalKey: a.M
        })
      }
    })
  })
}