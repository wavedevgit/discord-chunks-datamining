/** Chunk was on 95468 **/
/** chunk id: 999464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257356 = require("./257356.js");
let p = (0, Chunk313201.hQ)(),
  g = e => {
    let {
      email: t,
      setStep: n,
      onBack: i,
      school: u,
      setSchool: g
    } = e, [_, v] = l.useState(null), [N, E] = l.useState(false), S = async () => {
      v(null), E(true);
      try {
        await c.Z.signup(t, u), n(m.tF.EMAIL_WAITLIST)
      } catch (e) {
        v(new d.Hx(e))
      } finally {
        E(false)
      }
    }, y = async e => {
      null != u && "" !== u && e.charCode === h.yXg.ENTER && await S()
    };
    return <div className={x.container}>{<div className={x.__invalid_topImage} />}{<o.X6q className={a()(x.centerText, x.header)} variant={"heading-xl/semibold"}>{f.intl.string(f.t["2FNWBA"])}</o.X6q>}{<div className={x.descriptionWidth}><o.Text className={x.centerText} variant={"text-sm/normal"} color={"header-secondary"}>{f.intl.string(f.t["/4y6o6"])}</o.Text></div>}{<o.xJW className={x.formItem}>{<o.vwX id={p}>{f.intl.string(f.t["L+AfJi"])}</o.vwX>}{<o.oil onKeyPress={y} placeholder={f.intl.string(f.t.Y1btJS)} onChange={e => {
            g(e)
          }} error={null == _ ? true : _.getAnyErrorMessage()} aria-labelledby={p} />}</o.xJW>}{<div className={x.footer}>{<s.zx className={x.backButton} onClick={i} look={s.zx.Looks.LINK} size={s.zx.Sizes.NONE} color={s.zx.Colors.PRIMARY}>{f.intl.string(f.t["13/7kZ"])}</s.zx>}{<div data-button-hoisted-classname-wrapper={true} className={x.__invalid_submitButton}><o.zxk variant={"primary"} text={f.intl.string(f.t.PDsYAg)} onClick={S} loading={N} /></div>}</div>}</div>
  }