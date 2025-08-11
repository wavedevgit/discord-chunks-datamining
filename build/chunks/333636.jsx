/** Chunk was on 61323 **/
/** chunk id: 333636, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js"),
  Chunk332915 = require("./332915.js");
let c = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, [c, A] = s.useState(null), [d, u] = s.useState(null), [T, C] = s.useState(null), [h, p] = s.useState(""), f = async () => {
    if (c) {
      p("");
      try {
        await (0, r.qy)(c, {
          difficulty: null != d ? d : true,
          should_serve_invisible: null != T ? T : true
        })
      } catch (e) {
        p(e.message)
      }
    }
  };
  return <l.Y0X transitionState={a} parentComponent={"CaptchaTestModal"}>{<l.xBx className={o.header}>{<l.X6q variant={"heading-lg/semibold"}>{"Captcha Test Tool"}</l.X6q>}{<l.olH onClick={t} />}</l.xBx>}{<l.hzk className={o.content}>{<l.q4e value={c} options={i.p} onChange={e => {
          e !== r.fw.HCAPTCHA_RQDATA && e !== r.fw.SMITE_RQDATA && C(null), e !== r.fw.HCAPTCHA_RQDATA && u(null), A(e), p("")
        }} />}{c === r.fw.HCAPTCHA_RQDATA && <l.q4e value={d} options={i.Z} onChange={e => {
          c === r.fw.HCAPTCHA_RQDATA && u(e)
        }} />}{(c === r.fw.HCAPTCHA_RQDATA || c === r.fw.SMITE_RQDATA) && <l.XZJ value={null != T && T} onChange={(e, t) => C(t)}><l.Text variant={"text-md/normal"}>{"Should serve invisible?"}</l.Text></l.XZJ>}</l.hzk>}{<l.mzw className={o.footer}>{<l.zxk variant={"primary"} text={"Trigger Captcha"} onClick={f} disabled={!c} />}{"" !== h && <l.pdY error={h} />}</l.mzw>}</l.Y0X>
}