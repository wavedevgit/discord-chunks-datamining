/** Chunk was on 18259 **/
/** chunk id: 1493, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk910282 = require("./910282.js");

function o(e) {
  let {
    onConfirm: t,
    onClose: r,
    validationText: o,
    errorText: c,
    header: d,
    className: x,
    cancelText: u,
    confirmText: h,
    instructionText: p,
    transitionState: m,
    children: j
  } = e, [f, b] = a.useState(""), [C, g] = a.useState(null), v = a.Children.count(j) > 0 ? <i.Zbd type={i.Zbd.Types.WARNING} className={l.card}><i.Text color={"currentColor"} variant={"text-md/normal"}>{j}</i.Text></i.Zbd> : null;
  return <i.Y0X transitionState={m} className={x} parentComponent={"TextEntryConfirm"}><form onSubmit={function(e) {
        if (e.preventDefault(), f.toLowerCase() !== o.toLowerCase()) return void g(c);
        null == t || t(), r()
      }}>{<i.xBx separator={false}><i.X6q variant={"heading-lg/semibold"}>{d}</i.X6q></i.xBx>}{<i.hzk>{v}{<i.xJW title={p} className={l.spacing}>{<i.oil id={"text-entry-confirm"} type={"text"} value={f} autoComplete={"off"} onChange={b} autoFocus={true} />}{null != C && "" !== C ? <i.Text color={"text-danger"} variant={"text-xs/normal"} className={l.error}>{C}</i.Text> : null}</i.xJW>}</i.hzk>}{<i.mzw><i.hE2 direction={"horizontal-reverse"}>{<i.zxk variant={"critical-primary"} text={null != h ? h : s.intl.string(s.t["cY+Ooa"])} type={"submit"} />}{<i.zxk variant={"secondary"} text={null != u ? u : s.intl.string(s.t["ETE/oK"])} onClick={r} />}</i.hE2></i.mzw>}</form></i.Y0X>
}