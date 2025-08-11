/** Chunk was on 17938 **/
/** chunk id: 789155, original params: e,s,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk615836 = require("./615836.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");
let d = function(e) {
  let {
    churnUserDiscountOffer: s,
    onDiscountClaim: r,
    onContinue: d
  } = e, p = (0, o.ZP)(), x = (0, n.wj)(p) ? u : m;
  return null == s ? null : <div className={c.churnFooterContainer}>{<div className={c.churnFooterGlow} />}{<div className={c.churnFooterTopBorder} />}{<div className={c.churnFooterContent}><div className={c.churnFooterContentBody}>{<img alt={""} src={x} className={c.churnFooterIcon} />}{<div className={c.churnFooterContentBodyInner}>{<i.Text variant={"text-md/medium"} className={c.churnFooterCopy}>{l.intl.format(l.t["2gem09"], {
              percent: s.discount.amount,
              numMonths: s.discount.user_usage_limit
            })}</i.Text>}{<div className={c.churnFooterCTAs}>{<i.gtL className={c.churnFooterClaimCTA} innerClassName={c.churnFooterClaimCTAInner} look={a.iL.OUTLINED} color={a.Tt.CUSTOM} onClick={() => null == r ? true : r()}>{<i.SrA size={"xs"} color={"currentColor"} className={c.churnFooterClaimIcon} />}{<i.Text variant={"text-sm/semibold"} className={c.churnFooterClaimCopy}>{l.intl.string(l.t.zrCzVF)}</i.Text>}</i.gtL>}{<i.zxk variant={"primary"} text={l.intl.string(l.t["3PatS0"])} onClick={() => null == d ? true : d()} />}</div>}</div>}</div></div>}</div>
}