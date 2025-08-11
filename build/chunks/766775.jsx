/** Chunk was on 44044 **/
/** chunk id: 766775, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk659900 = require("./659900.jsx"),
  Chunk473855 = require("./473855.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430537 = require("./430537.js");

function m(e) {
  let {
    transitionState: i,
    onClose: n,
    guildTemplate: t
  } = e, {
    form: m,
    preview: p,
    handleSubmit: h
  } = (0, d.Z)(t, false), C = (0, l.Dt)();
  return <div><o.Y0X size={o.CgR.DYNAMIC} transitionState={i} className={f.modalRoot} aria-labelledby={C} parentComponent={"GuildTemplateModal"}>{<div className={f.modalContainer}>{<div className={c()(f.modalSection, f.ctaSection)}><div className={f.ctaContainer}><_.Z guildTemplate={t} headerId={C} /></div></div>}{<div className={c()(f.modalSection, f.formSection)}><o.Ttm className={f.formContainer}>{<r.Dx className={f.header}>{s.intl.string(s.t.UNFvtL)}</r.Dx>}{m}{p}</o.Ttm></div>}</div>}{<o.mzw className={f.modalFooter}>{<o.zxk variant={"secondary"} text={s.intl.string(s.t.cpT0Cg)} onClick={n} />}{<o.zxk variant={"active"} text={s.intl.string(s.t.CumH4u)} onClick={async () => {
            null != await h() && n()
          }} />}</o.mzw>}</o.Y0X></div>
}