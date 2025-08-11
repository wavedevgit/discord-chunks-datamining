/** Chunk was on 18831 **/
/** chunk id: 41164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk181211 = require("./181211.js"),
  Chunk188879 = require("./188879.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.js"),
  Chunk688443 = require("./688443.js"),
  Chunk170143 = require("./170143.js");
let m = e => {
  let {
    transitionState: t,
    onClose: n,
    classificationId: m,
    source: f
  } = e, h = (0, r.Z)(), g = () => {
    n(), l.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING)
  };
  return <a.Y0X className={u.modalRoot} transitionState={t} parentComponent={"ClassificationDetailModal"}>{<div className={u.modalHeader}>{<img className={u.image} src={p} alt={""} />}{<a.olH className={u.modalClose} onClick={n} />}</div>}{<a.hzk className={u.modalContent}>{h ? (0, i.jsx)(a.$jN, {}) : (0, i.jsx)(o.Z, {
        classificationId: m,
        source: f,
        onError: g,
        onClose: g
      })}</a.hzk>}{<a.mzw><div data-button-hoisted-classname-wrapper={true}><a.zxk variant={"primary"} text={d.intl.string(d.t.elrEjI)} type={"button"} onClick={g} /></div></a.mzw>}</a.Y0X>
}