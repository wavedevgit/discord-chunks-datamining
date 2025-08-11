/** Chunk was on 82875 **/
/** chunk id: 345861, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.js");

function s(e) {
  var n, t, {
      buttonCTA: o,
      onChange: s,
      onFileSizeError: d,
      "aria-label": u,
      multiple: _ = false,
      disabled: b = false,
      submitting: p = false,
      maxFileSizeBytes: f,
      filters: h,
      className: m
    } = e,
    g = function(e, n) {
      if (null == e) return {};
      var t, r, o = function(e, n) {
        if (null == e) return {};
        var t, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["buttonCTA", "onChange", "onFileSizeError", "aria-label", "multiple", "disabled", "submitting", "maxFileSizeBytes", "filters", "className"]);
  return <l.tEY within={true}><div className={i()((0, a.nY)((n = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = r
          })
        }
        return e
      }({}, g), t = t = {
        submitting: p,
        disabled: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n)), m)} style={{
        width: "max-content"
      }} aria-disabled={b}>{<span aria-hidden={true}>{o}</span>}{<c.ZP tabIndex={0} onChange={s} onFileSizeError={d} multiple={_} maxFileSizeBytes={f} filters={h} aria-label={null != u ? u : o} disabled={b} />}</div></l.tEY>
}