/** Chunk was on 67753 **/
/** chunk id: 873809, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk724723 = require("./724723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk78349 = require("./78349.js");

function l(e) {
  let {
    transitionState: t,
    header: l,
    body: d,
    confirmText: x,
    onClose: h,
    onConfirm: p
  } = e, m = r.Z.useExperiment({
    location: "VideoDevicesWarningModal"
  }, {
    autoTrackExposure: true
  }).enabled, u = () => {
    h(), null == p || p()
  };
  return m ? <i.Modal title={l} subtitle={d} transitionState={t} onClose={h} actions={[{
      text: x,
      onClick: u,
      variant: "primary"
    }]} /> : <s.Y0X data-migration-pending={true} transitionState={t} aria-label={l} parentComponent={"VideoDevicesWarningModal"}>{<s.hzk className={c.content}>{<img src={a(568533)} alt={l} />}{<s.X6q variant={"heading-xl/semibold"} className={c.header}>{l}</s.X6q>}{<s.Text variant={"text-md/normal"}>{d}</s.Text>}</s.hzk>}{<s.mzw className={c.footer}><s.hE2 direction={"horizontal-reverse"}>{<s.zxk variant={"primary"} size={"sm"} text={x} onClick={u} />}{<s.zxk variant={"secondary"} size={"sm"} text={o.intl.string(o.t.cpT0Cg)} onClick={h} />}</s.hE2></s.mzw>}</s.Y0X>
}