/** Chunk was on 22988 **/
/** chunk id: 553204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk91218 = require("./91218.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973217 = require("./973217.js");
let h = (0, Chunk624138.Mg)(Chunk477690.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function f(e) {
  let {
    role: t,
    "aria-label": n = g.intl.string(g.t["MsUY/f"]),
    className: l,
    onClick: s,
    disabled: m = false
  } = e, f = i.useRef(null), b = i.useMemo(() => (0, d.Kz)(t, h), [t]), x = null != b ? <c.Z{...function(e) {
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
    enableTooltip: false,
    className: p.icon
  }, b)} /> : <o.FmF size={"md"} color={"currentColor"} className={p.icon} />;
  return <o.tEY ringTarget={f}><o.P3F aria-label={n} className={a()(p.container, l, {
        [p.disabled]: m
      })} onClick={m ? true : s} aria-disabled={m}>{<div ref={f} className={p.preview}>{x}</div>}{null != b ? <u.S className={p.uploaderIcon} /> : null}</o.P3F></o.tEY>
}