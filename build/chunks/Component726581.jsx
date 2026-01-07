/** Chunk was on 1272 **/
/** chunk id: 726581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk142882 = require("./142882.js");
class O extends Chunk473749.Component {
  renderReasons(e, t, n) {
    return 0 === e.length && 0 === t.length ? null : (0, r.jsx)("div", {
      className: E.section,
      children: (0, r.jsxs)("div", {
        className: E.sectionContent,
        children: [e.map(e => (0, r.jsx)("div", {
          className: E.unit,
          children: (0, r.jsx)(h.Z, {
            reason: e,
            hidePersonalInformation: n
          })
        }, e.type)), t.map(e => (0, r.jsx)("div", {
          className: E.unit,
          children: (0, r.jsx)(s.Z, {
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
    return null != e.staffNotes ? {
      type: b.Z.Types.STAFF_NOTES,
      staffNotes: e.staffNotes
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
    if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
    let o = this.getReviewToRender();
    return (0, r.jsxs)("div", {
      className: a()(E.root, l),
      children: [(0, r.jsx)("div", {
        className: E.header,
        children: _.intl.string(_.t.qABFpX)
      }), this.renderReasons(e, t, i), null != o ? (0, r.jsx)(b.Z, {
        data: o,
        className: E.review
      }) : null]
    })
  }
}
let v = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk594174.default, Chunk551428.Z, Chunk649974.Z, Chunk525395.Z, Chunk246946.Z], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, m.Gg)(t.id, f.Z, d.default, c.Z, p.Z),
    nonSocialReasons: (0, m.Ww)(t.id, f.Z, g.Z),
    hidePersonalInformation: u.Z.hidePersonalInformation
  }
})(O)