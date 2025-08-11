/** Chunk was on 46746 **/
/** chunk id: 289989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960861 = require("./960861.js"),
  Chunk39540 = require("./39540.js"),
  Chunk152165 = require("./152165.jsx"),
  Chunk615161 = require("./615161.js"),
  Chunk70722 = require("./70722.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk148055 = require("./148055.js");

function j(e) {
  let {
    id: t,
    text: n,
    icon: i,
    selected: s,
    onClick: o
  } = e;
  return <c.P3F role={"radio"} aria-checked={s} onClick={() => o(t)} tabIndex={0} className={l()(v.nativeSourceTypeButton, v.nativePickerRadioItem, {
      [v.selected]: s
    })}><div className={v.nativeSourceTypeButtonInner}>{<i size={"lg"} />}{<a.xv variant={"text-sm/medium"} color={"none"}>{n}</a.xv>}</div></c.P3F>
}

function b(e) {
  let {
    onSourceSelect: t
  } = e;
  (0, f.UB)(), (0, m.Z)(t, g.Vq);
  let [{
    nativeSourceType: n
  }, i] = (0, p.E_)(), l = (0, u.isMac)() && o().satisfies(null === d.Z || true === d.Z ? true : d.Z.os.release, x.jR);
  return <div className={v.root}>{<a.X6 className={v.header} variant={"heading-lg/semibold"} color={"text-default"}>{_.intl.string(_.t.XyYoFR)}</a.X6>}{l ? <r.Fragment>{<a.xv className={v.body} variant={"text-sm/medium"} color={"text-secondary"}>{_.intl.format(_.t.sbbPhY, {
          buttonName: _.intl.string(_.t.FiBjwc)
        })}</a.xv>}{<h.Z />}</r.Fragment> : <div className={v.sourceTypeButtons}>{<j selected={"screen" === n} onClick={() => {
          i({
            type: "set_native_source_type",
            sourceType: "screen"
          })
        }} id={"screen"} text={_.intl.string(_.t.cVUFXV)} icon={c.pzj} />}{<j selected={"window" === n} onClick={() => {
          i({
            type: "set_native_source_type",
            sourceType: "window"
          })
        }} id={"window"} text={_.intl.string(_.t.dG2A1N)} icon={c.GON} />}</div>}</div>
}