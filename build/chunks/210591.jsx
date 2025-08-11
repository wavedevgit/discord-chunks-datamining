/** Chunk was on 22988 **/
/** chunk id: 210591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.js"),
  Chunk218801 = require("./218801.js");

function p(e) {
  let {
    checked: t,
    children: n
  } = e;
  return <div className={g.row}>{<c.Text variant={"text-md/normal"} color={"interactive-active"} className={g.rowText}>{n}</c.Text>}{t ? <c.owK size={"md"} color={"currentColor"} secondaryColor={o.Z.unsafe_rawColors.WHITE_500.css} className={a()(g.rowIcon, g.rowIconChecked)} /> : <div className={a()(g.rowIcon, g.rowIconEmpty)} />}</div>
}

function h(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false), a = t.flatMap(e => e.items.map(e => e.completed)), o = a.filter(e => e).length / a.length, h = 1 === o, f = (0, c.q_F)({
    width: "".concat(100 * o, "%")
  }), b = [m.intl.format(m.t.wtQtXl, {
    promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE
  }), m.intl.format(m.t["0Fo0wc"], {
    caseStudiesUrl: u.iv.CASE_STUDIES
  }), m.intl.format(m.t["7JdzjI"], {
    subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE
  }), m.intl.format(m.t.zkXN6O, {
    tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE
  })], x = n ? null : <r.Fragment>{!h && t.map((e, t) => {
      let {
        title: n,
        items: l
      } = e;
      return <i.Fragment>{t > 0 && <c.$i$ className={g.divider} />}{<c.vwX className={g.categoryTitle}>{n}</c.vwX>}{l.map((e, t) => <p checked={e.completed}>{e.description}</p>)}</i.Fragment>
    })}{<c.$i$ className={g.divider} />}{<c.vwX className={g.categoryTitle}>{m.intl.string(m.t.FO0AIS)}</c.vwX>}{b.map((e, t) => <div className={g.row}><c.Text variant={"text-md/normal"}>{e}</c.Text></div>)}</r.Fragment>;
  return <div className={g.checklist}><div className={g.container}>{<c.P3F className={g.headerBar} onClick={() => l(e => !e)}>{<c.X6q variant={"heading-md/semibold"} className={g.headerText}>{m.intl.string(m.t["2Xbd/P"])}</c.X6q>}{<d.Z direction={n ? d.Z.Directions.DOWN : d.Z.Directions.UP} className={g.headerCaret} />}</c.P3F>}{!h && <div className={g.progressBarOuter}><s.animated.div className={g.progressBarInner} style={f} /></div>}{x}</div></div>
}