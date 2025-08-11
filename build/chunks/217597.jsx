/** Chunk was on 22988 **/
/** chunk id: 217597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk380544 = require("./380544.js");

function a(e) {
  let {
    label: t,
    sublabel: n,
    value: a,
    additionalContent: s,
    tooltip: o
  } = e;
  return <div className={l.metricCard} aria-label={t}>{<div className={l.metricCardLabelContainer}>{<i.Text className={l.metricCardLabel} variant={"text-xs/medium"} color={"interactive-normal"} aria-hidden={true}>{t}</i.Text>}{null != o && <i.ua7 text={o}>{e => (0, r.jsx)(i.d3s, function(e) {
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
          size: "xs",
          color: "currentColor",
          className: l.__invalid_labelTooltipIcon
        }, e))}</i.ua7>}{null != n ? <i.Text variant={"text-xs/normal"} color={"text-muted"}>{n}</i.Text> : null}</div>}{<i.Text tag={"span"} variant={"heading-xl/medium"} color={"header-primary"}>{a}</i.Text>}{s}</div>
}