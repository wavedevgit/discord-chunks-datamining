/** Chunk was on 52030 **/
/** chunk id: 507453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895453 = require("./895453.js");
let o = {
  SlideContent: function(e) {
    let {
      children: t,
      scrollbarType: n
    } = e;
    return <r.hzk className={a.content} scrollbarType={n}>{t}</r.hzk>
  },
  SlideError: function(e) {
    let {
      error: t
    } = e;
    return null == t ? null : <r.Text className={a.error} variant={"text-sm/normal"} color={"text-danger"}>{t}</r.Text>
  },
  SlideFooter: function(e) {
    let {
      mfaChallenge: t,
      setSlide: n,
      leadingButton: i,
      showConfirm: a = false,
      disabled: o,
      submitting: d
    } = e, c = t.methods.length > 1;
    return null != i || c || a ? <r.mzw><r.hE2 fullWidth={true}>{i}{c && <r.zxk variant={"secondary"} text={s.intl.string(s.t.Tot4EB)} onClick={() => n("select")} />}{a && <r.zxk type={"submit"} variant={"primary"} text={s.intl.string(s.t["cY+Ooa"])} disabled={o} loading={d} />}</r.hE2></r.mzw> : null
  },
  SlideHeader: function(e) {
    let {
      subtitle: t,
      onClose: n,
      headerAlignStart: o
    } = e;
    return <r.xBx direction={i.Z.Direction.VERTICAL} className={a.header} separator={false} align={o ? i.Z.Align.START : true}>{<r.X6q variant={"heading-xl/semibold"}>{s.intl.string(s.t.saHocH)}</r.X6q>}{null != t && <r.Text color={"header-secondary"} variant={"text-md/normal"} className={a.subtitle}>{t}</r.Text>}{<r.olH className={a.closeButton} onClick={n} />}</r.xBx>
  }
}