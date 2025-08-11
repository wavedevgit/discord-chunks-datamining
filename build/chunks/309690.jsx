/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk458725 = require("./458725.js"),
  Chunk386146 = require("./386146.js"),
  Chunk388032 = require("./388032.js"),
  Chunk463672 = require("./463672.js");

function c(t) {
  var e;
  let {
    onClose: r,
    transitionState: c
  } = t, {
    avErrorUIEnabled: u
  } = (0, l.JN)({
    location: "StreamWarning"
  }), x = null == (e = (0, i.hp)(i.u.STREAM_FULL)) ? true : e.errorCode, m = o.intl.formatToPlainString(o.t["ejOT9/"], {
    errorCode: x
  });
  return <n.Y0X size={n.CgR.SMALL} transitionState={c} parentComponent={"StreamFullModal"}>{<n.xBx justify={a.Z.Justify.BETWEEN}>{<n.vwX tag={"h2"} className={d.header}>{o.intl.string(o.t.GzjdOz)}</n.vwX>}{<n.olH onClick={r} className={d.modalCloseButton} />}</n.xBx>}{<n.hzk>{<n.Text variant={"text-md/medium"}>{o.intl.string(o.t.VVZDBA)}</n.Text>}{u && <n.Text variant={"text-md/medium"} selectable={true} color={"text-muted"} className={d.errorCode}>{m}</n.Text>}{<div className={d.fullArt} />}</n.hzk>}{<n.mzw><n.zxk variant={"primary"} text={o.intl.string(o.t.BddRzc)} onClick={r} /></n.mzw>}</n.Y0X>
}