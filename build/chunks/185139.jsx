/** Chunk was on web.js **/
/** chunk id: 185139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk245364 = require("./245364.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk609194 = require("./609194.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js");
require("./51499.jsx"), require("./27034.jsx");
var Chunk122289 = require("./122289.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk106194 = require("./106194.js");
let y = new Set([Chunk409813.h8.SKU_SELECT, Chunk409813.h8.AWAITING_AUTHENTICATION, Chunk409813.h8.AWAITING_PURCHASE_TOKEN_AUTH, Chunk409813.h8.CONFIRM]);

function O(e) {
  let {
    steps: t,
    currentStep: n,
    body: a,
    overrideKey: O,
    paymentError: v,
    header: I,
    footer: T,
    isGift: S = false,
    giftMessage: A = E.intl.string(E.t.DrgnS0),
    hideBreadcrumbs: N = false,
    isLoading: C = false,
    purchaseError: R,
    purchaseErrorBlockRef: P,
    planError: w,
    onScroll: D,
    scrollerClassName: L,
    hasCurrencies: x = false
  } = e, M = null;
  null != v && null == (0, p.ly)(v) ? M = v : null != R ? M = R : null != w && (M = w);
  let k = null != M ? M.message : "";
  null != M && M instanceof d.HF && (M.code === f.SM.CARD_DECLINED && x && (k += " ".concat(E.intl.string(E.t.iWvwQU))), M.code === f.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = E.intl.string(E.t.ypuSd3)), M.code === g.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = E.intl.string(E.t.mXMmWF)));
  let {
    stripe: j
  } = (0, _.JL)();
  C = C || null == j;
  let U = i.useRef(new l.V7);
  i.useEffect(() => {
    let e = U.current;
    return null != j || e.isStarted() ? null != j && e.stop() : e.start(10 * m.Z.Millis.SECOND, () => {
      let e = Error("Stripe took too long to load");
      (0, h.q2)(e)
    }), () => {
      e.stop()
    }
  }, [j]);
  let G = t.includes(p.h8.PAYMENT_TYPE) ? p.h8.PAYMENT_TYPE : p.h8.ADD_PAYMENT_STEPS;
  return <o.Elements options={g.OBo} stripe={j}>{I}{<div className={s()("paymentModalContent", b.content)}>{S && n !== p.h8.CONFIRM ? <u.Z className={b.paymentNote} iconSize={u.Z.Sizes.SMALL} icon={c.OgN} color={null == A ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY}>{A}</u.Z> : null}{N ? null : <div className={b.breadcrumbsWrapper}><c.OoM activeId={p.Ck.has(n) ? G : n} breadcrumbs={t.filter(e => !p.Ck.has(e) && !y.has(e)).map(e => ({
            id: e,
            label: (0, p.DJ)(e)
          }))} /></div>}{<div className={b.bodyWrapper}>{null == M ? null : <div className={b.errorBlockWrapper}><c.kzN ref={P}>{k}</c.kzN></div>}{C ? <c.$jN className={b.loadingBlock} /> : <c.qBt className={b.sequencer} overrideKey={O} staticClassName={b.sequencerStatic} animatedNodeClassName={b.sequencerAnimatedNode} fillParent={true} step={n} steps={t} sideMargin={20}><c.h21 onScroll={D} className={s()(b.scroller, L)}>{a}</c.h21></c.qBt>}</div>}</div>}{T}</o.Elements>
}