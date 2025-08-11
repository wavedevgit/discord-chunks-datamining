/** Chunk was on 81709 **/
/** chunk id: 625881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk230916 = require("./230916.js"),
  Chunk798769 = require("./798769.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk828576 = require("./828576.js"),
  Chunk982404 = require("./982404.js"),
  Chunk299156 = require("./299156.js");
let j = function(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: a,
    onConfirm: j,
    userDiscountOffer: E
  } = e, [O, P] = r.useState(false), [v, N] = r.useState(false), I = async e => {
    try {
      N(true), P(false), await o.tn.post({
        url: x.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        },
        rejectWithError: true
      }), j()
    } catch (e) {
      P(true)
    }
    N(false)
  }, T = (0, u.ZP)(), S = (0, l.wj)(T) ? g : C, R = (0, _._)(t, b.Xh.PREMIUM_MONTH_TIER_2, E), w = (0, m.aS)(b.Xh.PREMIUM_MONTH_TIER_2, false, false, {
    currency: t.currency,
    paymentSourceId: t.paymentSourceId
  }), D = (0, p.T4)(w.amount, w.currency);
  return null == E ? null : <i.Fragment>{<f.Z premiumType={n} onClose={a} />}{<c.hzk data-migration-pending={true} className={h.body}><div className={h.confirmDiscountContent}>{<c.X6q variant={"heading-xl/bold"}>{y.intl.format(y.t.q9Vxu7, {
            percent: E.discount.amount
          })}</c.X6q>}{<div className={h.confirmDiscountDescription}>{<img alt={""} src={S} className={h.confirmDiscountIcon} />}{<c.Text variant={"text-sm/medium"}>{y.intl.format(y.t.Eq1RHB, {
              percent: E.discount.amount,
              numMonths: E.discount.user_usage_limit,
              price: D
            })}</c.Text>}</div>}{<div className={h.confirmDiscountLegalese}><c.Text variant={"text-xs/semibold"} className={h.confirmDiscountLegaleseText}>{y.intl.format(y.t.hrGTjI, {
              discountedPrice: R,
              billingPeriod: (0, m.JP)(E.discount.user_usage_limit_interval),
              numMonths: E.discount.user_usage_limit,
              fullPrice: D,
              helpdeskArticle: d.Z.getArticleURL(x.BhN.PAID_TERMS)
            })}</c.Text></div>}{O && <div className={h.redemptionFailedMessage}><c.Text variant={"text-xs/semibold"} className={h.redemptionFailedMessageCopy}>{y.intl.string(y.t.AD6odn)}</c.Text></div>}{<div className={s()(h.confirmDiscountButtons, {
            [h.confrimDiscountsButtonsError]: O,
            [h.confrimDiscountsButtonsNoError]: !O
          })}>{<c.Avr variant={"primary"} text={y.intl.string(y.t.zl7LZm)} onClick={() => a()} />}{<c.zxk variant={"primary"} size={"sm"} text={y.intl.string(y.t.CKSuZG)} loading={v} onClick={() => I(E.id)} />}</div>}</div></c.hzk>}</i.Fragment>
}