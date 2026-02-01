/** Chunk was on 21738 **/
/** chunk id: 467201, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk804052 = require("./804052.jsx"),
  Chunk783592 = require("./783592.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk609276 = require("./609276.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk371794 = require("./371794.js"),
  Chunk681613 = require("./681613.jsx"),
  Chunk110434 = require("./110434.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk589757 = require("./589757.js");
class E extends Chunk64700.Component {
  renderReasons(e, t, n) {
    return 0 === e.length && 0 === t.length ? null : (0, r.jsx)("div", {
      className: b.uW,
      children: (0, r.jsxs)("div", {
        className: b.f5,
        children: [e.map(e => (0, r.jsx)("div", {
          className: b.zA,
          children: (0, r.jsx)(f.A, {
            reason: e,
            hidePersonalInformation: n
          })
        }, e.type)), t.map(e => (0, r.jsx)("div", {
          className: b.zA,
          children: (0, r.jsx)(o.A, {
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
      type: A.A.Types.STAFF_NOTES,
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
    let s = this.getReviewToRender();
    return (0, r.jsxs)("div", {
      className: a()(b.zr, l),
      children: [(0, r.jsx)("div", {
        className: b.wx,
        children: _.intl.string(_.t.qABFpX)
      }), this.renderReasons(e, t, i), null != s ? (0, r.jsx)(A.A, {
        data: s,
        className: b.NQ
      }) : null]
    })
  }
}
let O = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk287809.default, Chunk328968.A, Chunk783592.A, Chunk609276.A, Chunk351906.A], e => {
  let {
    sku: t
  } = e;
  return {
    socialReasons: (0, m.my)(t.id, h.A, d.default, c.A, p.A),
    nonSocialReasons: (0, m.ZH)(t.id, h.A, g.A),
    hidePersonalInformation: u.A.hidePersonalInformation
  }
})(E)