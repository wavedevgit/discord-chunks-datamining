/** Chunk was on 61670 **/
/** chunk id: 382263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PT: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk600164 = require("./600164.js"),
  Chunk927699 = require("./927699.js"),
  Chunk987716 = require("./987716.js"),
  Chunk311821 = require("./311821.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk565121 = require("./565121.js");
let x = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => <O{...function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, e)} />,
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+f"])
  }
};

function v(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: a = false,
    disabled: s = false,
    loading: r = false
  } = e, {
    hasPaymentSources: o
  } = (0, m.JL)(), c = o ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS;
  return <i.Fragment>{<l.zxk onClick={() => t(c)} disabled={s} loading={r} text={y.intl.string(y.t.XiOHRU)} />}{a ? <u.Z onClick={n} /> : null}</i.Fragment>
}

function O(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: u
  } = e, {
    customGiftMessage: b = "",
    setCustomGiftMessage: x,
    giftRecipient: O
  } = (0, p.wD)(), {
    selectedSkuId: C
  } = (0, m.JL)(), T = (0, a.e7)([d.default], () => d.default.getCurrentUser()), P = (0, a.e7)([f.Z], () => null != C ? f.Z.get(C) : null, [C]), k = async (e, t) => {};
  return <i.Fragment>{<g.C3><div className={j.stepBody}>{<div className={j.bodyColumnLeft}>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={j.title}>{y.intl.formatToPlainString(y.t.UIOtjo, {
              skuName: null != (t = null == P ? true : P.name) ? t : "this app"
            })}</l.X6q>}{<l.Text variant={"text-md/normal"} color={"header-secondary"} className={j.subtitle}>{y.intl.string(y.t.GHZfIC)}</l.Text>}{<c.q />}</div>}{<div className={j.bodyColumnRight}>{<s.Z selectedSkuId={C} validateSelectedGift={k} className={j.sendTo} />}{<o.Z sectionTitle={y.intl.string(y.t.B3miEx)} onTextChange={e => null == x ? true : x(e)} pendingText={b} currentText={b} disableThemedBackground={true} className={j.customGiftMessageWrapper} innerClassName={j.customGiftMessage} />}</div>}</div></g.C3>}{<g.O3><l.mzw justify={r.Z.Justify.BETWEEN} align={r.Z.Align.CENTER}><v onStepChange={n} onBackClick={u} disabled={null == O || O.id === (null == T ? true : T.id) || b.length > h.$n} /></l.mzw></g.O3>}</i.Fragment>
}