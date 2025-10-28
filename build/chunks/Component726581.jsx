/** Chunk was on 1272 **/
/** chunk id: 726581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk733789 = require("./733789.jsx"),
  Chunk4962 = require("./4962.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796787 = require("./796787.js");
class O extends Chunk647438.Component {
  renderReasons(e, t, n) {
    return 0 === e.length && 0 === t.length ? null : (0, r.jsx)("div", {
      className: E.section,
      children: (0, r.jsxs)("div", {
        className: E.sectionContent,
        children: [e.map(e => (0, r.jsx)("div", {
          className: E.unit,
          children: (0, r.jsx)(g.Z, {
            reason: e,
            hidePersonalInformation: n
          })
        }, e.type)), t.map(e => (0, r.jsx)("div", {
          className: E.unit,
          children: (0, r.jsx)(o.Z, {
            reason: e
          })
        }, e.type))]
      })
    })
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
    let s = this.getReviewToRender();
    return (0, Chunk951288.jsxs)("div", {
      className: a()(Chunk796787.root, Chunk120356),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk796787.header,
        children: Chunk388032.intl.string(Chunk388032.t.qABFpX)
      }), this.renderReasons(module, exports, Chunk647438), null != Chunk442837 ? (0, Chunk951288.jsx)(Chunk4962.Z, {
        data: Chunk442837,
        className: Chunk796787.review
      }) : null]
    })
  }
}
let I = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk594174.default, Chunk551428.Z, Chunk649974.Z, Chunk525395.Z, Chunk246946.Z], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, h.Gg)(t.id, f.Z, d.default, c.Z, p.Z),
    nonSocialReasons: (0, h.Ww)(t.id, f.Z, m.Z),
    hidePersonalInformation: u.Z.hidePersonalInformation
  }
})(O)