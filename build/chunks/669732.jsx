/** Chunk was on 41281 **/
/** chunk id: 669732, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804315 = require("./804315.js"),
  Chunk337667 = require("./337667.js");
let u = t => {
  let {
    onClose: e,
    transitionState: n,
    showHideSuppressWarning: a = false
  } = t;
  return <o.Y0X transitionState={n} className={d.container} aria-label={m.intl.string(m.t["4Y2AS0"])} parentComponent={"HubStudyRoomSuppressModal"}><form onSubmit={t => {
        null == t || t.preventDefault(), l.Z.clearSuppressWarning(), null == e || e()
      }} className={d.form}>{<o.hzk className={d.modalContent}>{<img src={p} alt={""} className={d.hero} />}{<o.Text className={d.title} color={"header-primary"} variant={"text-md/semibold"}>{m.intl.string(m.t.sDvH0d)}</o.Text>}{<o.Text className={d.description} color={"header-secondary"} variant={"text-sm/normal"}>{m.intl.string(m.t["CLpr//"])}</o.Text>}</o.hzk>}{<o.mzw justify={c.Z.Justify.BETWEEN} wrap={c.Z.Wrap.WRAP}>{<s.zx type={"submit"} size={s.zx.Sizes.LARGE} className={i()(d.primaryButton, d.gutter)} autoFocus={true}>{m.intl.string(m.t["NX+WJC"])}</s.zx>}{a && <o.P3F onClick={() => l.Z.clearSuppressWarning(true)} className={d.minorContainer}><o.Text className={d.minorAction} variant={"text-xs/normal"}>{m.intl.string(m.t["5E9SBw"])}</o.Text></o.P3F>}</o.mzw>}</form></o.Y0X>
}