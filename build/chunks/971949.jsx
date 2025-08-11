/** Chunk was on 11166 **/
/** chunk id: 971949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685506 = require("./685506.js"),
  Chunk127453 = require("./127453.js"),
  Chunk860324 = require("./860324.js");

function y(t, n) {
  return <a.IGR text={t} className={p.newBadge} color={o.Z.unsafe_rawColors.BRAND_500.css} />
}

function O(t) {
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
  let O = function(t, n) {
      return <a.P3F className={d.learnMoreLink} tag={"span"} onClick={() => {
          e(), (0, i.z)()
        }}>{t}</a.P3F>
    },
    {
      analyticsLocations: g
    } = (0, c.ZP)(o);
  return <c.Gt value={g}><l.Z{...function(t) {
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
      title: f.intl.string(f.t.CoNXBw),
      body: n < u.DZw ? f.intl.format(f.t["5qLH7O"], {
        guildCount: n,
        onAndMore: O,
        newBadgeHook: y
      }) : f.intl.format(f.t.mk9CS0, {
        onAndMore: O,
        newBadgeHook: y
      }),
      context: n < u.DZw ? f.intl.formatToPlainString(f.t["C+Hqzs"], {
        guildCount: n
      }) : f.intl.string(f.t.m0xavb),
      glowUp: f.intl.format(f.t["6Dl5X1"], {
        onAndMore: O
      })
    }, p)} /></c.Gt>
}