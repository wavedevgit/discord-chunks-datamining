/** Chunk was on 1272 **/
/** chunk id: 726581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk304106 = require("./304106.jsx"),
  Chunk649974 = require("./649974.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk525395 = require("./525395.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk73346 = require("./73346.js"),
  Chunk733789 = require("./733789.js"),
  Chunk4962 = require("./4962.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk868454 = require("./868454.js");
class E extends Chunk73800.Component {
  renderReasons(e, t, n) {
    return 0 === e.length && 0 === t.length ? null : <div className={O.section}><div className={O.sectionContent}>{e.map(e => <div className={O.unit}><m.Z reason={e} hidePersonalInformation={n} /></div>)}{t.map(e => <div className={O.unit}><s.Z reason={e} /></div>)}</div></div>
  }
  getReviewToRender() {
    let {
      storeListing: e
    } = this.props;
    return null != module.staffNotes ? {
      type: Chunk4962.Z.Types.STAFF_NOTES,
      staffNotes: module.staffNotes
    } : null
  }
  render() {
    let {
      socialReasons: e,
      nonSocialReasons: t,
      storeListing: n,
      hidePersonalInformation: i,
      className: l
    } = this.props;
    if (0 === module.length && 0 === exports.length && null == require.staffNotes) return null;
    let o = this.getReviewToRender();
    return <div className={a()(Chunk868454.root, Chunk120356)}>{<div className={Chunk868454.header}>{Chunk388032.intl.string(Chunk388032.t.qABFpa)}</div>}{this.renderReasons(module, exports, Chunk73800)}{null != Chunk442837 ? <Chunk4962.Z data={Chunk442837} className={Chunk868454.review} /> : null}</div>
  }
}
let y = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk594174.default, Chunk551428.Z, Chunk649974.Z, Chunk525395.Z, Chunk246946.Z], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, g.Gg)(t.id, f.Z, d.default, c.Z, p.Z),
    nonSocialReasons: (0, g.Ww)(t.id, f.Z, h.Z),
    hidePersonalInformation: u.Z.hidePersonalInformation
  }
})(E)