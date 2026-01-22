/** Chunk was on 21738 **/
/** chunk id: 196661, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk800342 = require("./800342.js"),
  Chunk341338 = require("./341338.jsx");
class s extends Chunk64700.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: n,
      storeListingId: i,
      pageSize: l,
      location: s
    } = this.props;
    return (0, r.jsx)(a.A, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: n,
      storeListingId: i,
      location: s,
      pageSize: l
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "fetchStoreListing", e => {
        let {
          storeListingId: t,
          skuId: n,
          applicationId: r
        } = this.props, i = null != e ? e : n;
        return null != t ? (0, l.W6)(t) : null != i ? (0, l.QB)(i) : null != r ? (0, l.b)(r) : true
      })
  }
}
let o = s