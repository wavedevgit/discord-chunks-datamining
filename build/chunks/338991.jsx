/** Chunk was on 56049 **/
/** chunk id: 338991, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk714447 = require("./714447.js"),
  Chunk439827 = require("./439827.js"),
  Chunk388032 = require("./388032.js");

function b(e) {
  let {
    guildId: t,
    onSelect: r,
    onPickerClose: l,
    onInteraction: i
  } = e, b = (0, u.Z)(t, l), p = (0, a.Z)();
  return <o.v2r navId={"user-context"} onClose={c.Zy} aria-label={s.intl.string(s.t.liqwPD)} onSelect={r} onInteraction={i}><o.kSQ>{p}{b}</o.kSQ></o.v2r>
}

function p(e) {
  let {
    analyticsLocations: t
  } = (0, i.ZP)(e.sourceAnalyticsLocations, l.Z.SOUNDBOARD_CONTEXT_MENU);
  return <i.Gt value={t}><b{...function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e)} /></i.Gt>
}