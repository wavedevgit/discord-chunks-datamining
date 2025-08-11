/** Chunk was on 75708 **/
/** chunk id: 521450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk688642 = require("./688642.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk930441 = require("./930441.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk128607 = require("./128607.js"),
  Chunk20493 = require("./20493.js");
let E = () => {
  let e = Chunk695346.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
  return Chunk73800.useEffect(() => {
    null == require && (0, Chunk960412.Y7)()
  }, [require]), <div className={Chunk128607.container}>{<Chunk481060.Text variant={"eyebrow"} color={"text-muted"}>{Chunk388032.intl.string(Chunk916723.default.USIXU1)}</Chunk481060.Text>}{<Chunk481060.j7V className={a()(Chunk20493.marginTop8, Chunk20493.marginBottom20)} value={module} note={Chunk388032.intl.string(Chunk916723.default["5MdB3t"])} hideBorder={true} onChange={Chunk695346.Ex.updateSetting}>{Chunk388032.intl.string(Chunk916723.default.zkEceX)}</Chunk481060.j7V>}{module ? <Chunk481060.Zbd className={Chunk128607.enableCard} type={Chunk481060.Zbd.Types.CUSTOM} outline={true}><Chunk435935.k justify={Chunk435935.k.Justify.END}>{<Chunk435935.k.Child><Chunk481060.Text variant={"text-sm/semibold"} color={"text-default"}>{Chunk388032.intl.string(Chunk916723.default.xAVm7O)}</Chunk481060.Text></Chunk435935.k.Child>}{<Chunk481060.P3F><Chunk688642.rU onClick={Chunk37234.xf} to={{
              pathname: Chunk981631.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: false
              }
            }}>{Chunk388032.intl.string(Chunk916723.default.cUIXFR)}</Chunk688642.rU></Chunk481060.P3F>}{<Chunk481060.G2e icon={Chunk481060.ZSh} className={Chunk128607.arrow} disableColor={true} />}</Chunk435935.k></Chunk481060.Zbd> : null}{<Chunk481060.j7V className={a()(Chunk20493.marginTop20, Chunk20493.marginBottom20)} value={!!exports[Chunk930441.$Z.FAMILY_CENTER_DIGEST]} note={Chunk388032.intl.string(Chunk916723.default["y34S4+"])} hideBorder={true} onChange={function(e) {
        (0, m.pR)(f.$Z.FAMILY_CENTER_DIGEST, e)
      }}>{Chunk388032.intl.string(Chunk916723.default.irvJKS)}</Chunk481060.j7V>}</div>
}