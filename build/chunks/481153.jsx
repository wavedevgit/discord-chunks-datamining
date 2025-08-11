/** Chunk was on 27978 **/
/** chunk id: 481153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk925329 = require("./925329.js"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk296848 = require("./296848.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378027 = require("./378027.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");
let O = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk812206.Z, Chunk509545.Z, Chunk594174.default], e => {
  let {
    giftCode: t
  } = e, n = g.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, _.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: f.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: l,
    sku: s,
    application: c,
    subscriptionPlan: f
  } = e, m = null == l ? E.intl.string(E.t.lTGZAg) : E.intl.formatToPlainString(E.t.TjWdPT, {
    username: l.username
  }), g = s.name;
  return null != f && (g = E.intl.formatToPlainString(f.interval === b.rV.MONTH ? E.t.CTpcCQ : E.t.rgPWGx, {
    skuName: s.name,
    intervalCount: f.intervalCount
  })), <i.Fragment>{null != n.giftStyle ? <p.Z defaultAnimationState={h.SR.LOOP} giftStyle={n.giftStyle} className={v.seasonalIcon} /> : <u.qE src={null != l ? l.getAvatarURL(true, 100) : null} size={a.EFr.DEPRECATED_SIZE_100} className={I.marginBottom20} />}{null != t ? <i.Fragment>{<u.DK>{E.intl.string(E.t.mDFGFh)}</u.DK>}{<u.Dx>{t}</u.Dx>}</i.Fragment> : <i.Fragment>{<u.DK>{m}</u.DK>}{<u.Dx className={o()(I.marginTop8, j.flexCenter)}>{s.productLine !== x.POd.COLLECTIBLES && <d.Z size={d.Z.Sizes.MEDIUM} className={v.applicationIcon} game={c} skuId={s.id} />}{g}</u.Dx>}</i.Fragment>}</i.Fragment>
})