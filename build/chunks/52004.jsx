/** Chunk was on 48748 **/
/** chunk id: 52004, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk981860 = require("./981860.js");
let x = Chunk63063.Z.getArticleURL(Chunk981631.BhN.MISSING_ENTITLEMENT),
  d = Chunk442837.ZP.connectStores([Chunk812206.Z], t => {
    let {
      applicationId: i
    } = t;
    return {
      application: l.Z.getApplication(i)
    }
  })(function(t) {
    let {
      application: i,
      transitionState: n,
      onClose: a
    } = t;
    return <s.Y0X transitionState={n} size={s.CgR.MEDIUM} parentComponent={"MissingEntitlementModal"}>{<s.xBx align={r.Z.Align.CENTER} justify={r.Z.Justify.BETWEEN}>{<s.vwX tag={s.RB0.H4}>{null != i ? m.intl.formatToPlainString(m.t.N2mILi, {
            applicationName: i.name
          }) : m.intl.string(m.t.nS8PUV)}</s.vwX>}{<s.olH onClick={a} />}</s.xBx>}{<s.hzk>{<div className={p.missingEntitlementImage} />}{<s.Text className={p.text} variant={"text-md/normal"}>{null != i ? m.intl.format(m.t["MM/7q6"], {
            applicationName: i.name,
            supportArticleURL: x
          }) : m.intl.format(m.t.IfQUx8, {
            supportArticleURL: x
          })}</s.Text>}</s.hzk>}{<s.mzw><s.zxk variant={"primary"} text={m.intl.string(m.t.BddRzc)} onClick={a} /></s.mzw>}</s.Y0X>
  })