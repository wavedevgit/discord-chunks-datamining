/** Chunk was on 23401 **/
/** chunk id: 666599, original params: e,r,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk126663 = require("./126663.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk388145 = require("./388145.js");
let c = e => {
    let {
      currentNumber: r,
      thresholdNumber: a,
      currentLabel: l,
      isPercent: c = false
    } = e, m = null != a ? Math.floor(r / a * 100) : 0, x = d.intl.formatToPlainString(d.t.YMor7u, {
      count: r
    }), h = null != a ? d.intl.formatToPlainString(d.t.YMor7u, {
      count: a
    }) : "--", u = (0, i.dQu)(n.Z.unsafe_rawColors.RED_400).hex(), g = (0, i.dQu)(n.Z.unsafe_rawColors.YELLOW_300).hex();
    return <t.Fragment>{<div className={o.progressWrapper}>{<div className={o.progressBackground} />}{<i.AMe from={{
            width: 0
          }} to={{
            width: m
          }} config={{
            tension: 200,
            friction: 20,
            mass: 50,
            clamp: true
          }} shouldAnimate={"animate-always"}>{e => {
            let {
              width: r
            } = e;
            return (0, t.jsx)(s.animated.div, {
              className: o.progressBar,
              style: {
                width: r.interpolate(e => "".concat(e, "%")),
                backgroundColor: r.interpolate(e => e < 33 ? u : g)
              }
            })
          }}</i.AMe>}</div>}{<div className={o.labelWrapper}>{<div className={o.__invalid_current}>{<i.Text variant={"text-md/semibold"} color={m < 33 ? "text-feedback-critical" : "text-feedback-warning"}>{c ? "".concat(x, "%") : x}</i.Text>}{<i.Text aria-describedby={"health-score-details-score-explain"} variant={"text-xs/normal"} color={"header-secondary"}>{l}{<sup aria-hidden={true}>{"1"}</sup>}</i.Text>}</div>}{<div className={o.requirement}>{<i.Text variant={"text-sm/semibold"}>{c ? "".concat(h, "%") : h}</i.Text>}{<i.Text aria-describedby={"health-score-details-requirement-explain"} variant={"text-xs/normal"} color={"header-secondary"}>{d.intl.string(d.t["A+mTPj"])}</i.Text>}</div>}</div>}</t.Fragment>
  },
  m = e => {
    let r, a, s, {
        guildChecklist: n,
        transitionState: m,
        onClose: x
      } = e,
      h = (0, l.Dt)(),
      {
        retentionHealthy: u,
        engagementHealthy: g,
        healthScore: p
      } = n,
      {
        avg_nonnew_participators: _,
        avg_nonnew_communicators: j,
        perc_ret_w1_intentful: b
      } = p;
    if (!g && null != _ && _ < 40 && (a = <div className={o.failingBlock}>{<i.X6q className={o.marginAfter} variant={"heading-md/semibold"}>{d.intl.string(d.t.sEzDIS)}</i.X6q>}{<i.Text variant={"text-sm/normal"}>{d.intl.string(d.t.zNp3Ki)}</i.Text>}{<c currentNumber={_} thresholdNumber={40} currentLabel={d.intl.string(d.t.BtTX9P)} />}</div>), !g && null != j && j < 20 && (s = <div className={o.failingBlock}>{<i.X6q className={o.marginAfter} variant={"heading-md/semibold"}>{d.intl.string(d.t.fWQTbm)}</i.X6q>}{<i.Text variant={"text-sm/normal"}>{d.intl.string(d.t.Tl8MR0)}</i.Text>}{<c currentNumber={j} thresholdNumber={20} currentLabel={d.intl.string(d.t.PFQI7u)} />}</div>), !u && null != b) {
      let e = Math.floor(100 * b);
      r = <div className={o.failingBlock}>{<i.X6q className={o.marginAfter} variant={"heading-md/semibold"}>{d.intl.string(d.t.YF6x29)}</i.X6q>}{<i.Text variant={"text-sm/normal"}>{d.intl.format(d.t.kMBzFh, {})}</i.Text>}{<c currentNumber={e} thresholdNumber={10} currentLabel={d.intl.string(d.t.WpwyIi)} isPercent={true} />}</div>
    }
    return <i.Y0X transitionState={m} size={i.CgR.MEDIUM} className={o.__invalid_modal} aria-labelledby={h} parentComponent={"HealthScoreDetailsModal"}>{<i.hzk className={o.content}>{<i.X6q variant={"heading-xl/semibold"} className={o.modalHeader} id={h}>{d.intl.string(d.t["+GHxPz"])}</i.X6q>}{<i.Text className={o.marginAfter} variant={"text-sm/normal"}>{d.intl.string(d.t.QOs3XF)}</i.Text>}{<div className={o.separator} />}{a}{s}{r}{<div className={o.separator} />}{<i.Text className={o.marginAfter} color={"header-secondary"} id={"health-score-details-score-explain"} variant={"text-sm/normal"}>{<sup aria-hidden={true}>{"1 "}</sup>}{d.intl.string(d.t.tN5kb2)}</i.Text>}</i.hzk>}{<i.olH onClick={x} className={o.closeButton} />}</i.Y0X>
  }