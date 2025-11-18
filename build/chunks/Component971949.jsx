/** Chunk was on 11166 **/
/** chunk id: 971949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk190230 = require("./190230.js"),
  Chunk418548 = require("./418548.js"),
  Chunk860324 = require("./860324.js");

function y(t, n) {
  return (0, r.jsx)(a.IGR, {
    text: t,
    className: p.newBadge,
    color: o.Z.unsafe_rawColors.BRAND_500.css
  }, n)
}

function g(t) {
  var {
    guildCount: n,
    onClose: e,
    analyticsLocations: o
  } = t, p = function(t, n) {
    if (null == t) return {};
    var e, r, o = function(t, n) {
      if (null == t) return {};
      var e, r, o = {},
        a = Object.keys(t);
      for (r = 0; r < a.length; r++) e = a[r], n.indexOf(e) >= 0 || (o[e] = t[e]);
      return o
    }(t, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) e = a[r], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
    }
    return o
  }(t, ["guildCount", "onClose", "analyticsLocations"]);
  let g = function(t, n) {
      return (0, r.jsx)(a.P3F, {
        className: d.learnMoreLink,
        tag: "span",
        onClick: () => {
          e(), (0, i.z)()
        },
        children: t
      }, n)
    },
    {
      analyticsLocations: O
    } = (0, c.ZP)(o);
  return (0, r.jsx)(c.Gt, {
    value: O,
    children: (0, r.jsx)(l.Z, function(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.forEach(function(n) {
          var r;
          r = e[n], n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[n] = r
        })
      }
      return t
    }({
      artURL: b.Z,
      onClose: e,
      type: s.cd.GUILD_CAP_MODAL_UPSELL,
      title: f.intl.string(f.t["CoNXB+"]),
      body: n < u.DZw ? f.intl.format(f.t["5qLH7B"], {
        guildCount: n,
        onAndMore: g,
        newBadgeHook: y
      }) : f.intl.format(f.t.mk9CS6, {
        onAndMore: g,
        newBadgeHook: y
      }),
      context: n < u.DZw ? f.intl.formatToPlainString(f.t["C+Hqzs"], {
        guildCount: n
      }) : f.intl.string(f.t.m0xavd),
      glowUp: f.intl.format(f.t["6Dl5X1"], {
        onAndMore: g
      })
    }, p))
  })
}