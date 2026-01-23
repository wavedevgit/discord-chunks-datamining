/** Chunk was on 21738 **/
/** chunk id: 428899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830382 = require("./830382.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk67480 = require("./67480.js"),
  Chunk652215 = require("./652215.js"),
  Chunk190323 = require("./190323.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: n
    } = this.props;
    null == t || n || null == e || (0, s.EX)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, n = [], i = null;
    if (null != e) {
      let r = h.BVt.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      i = r, null != t && n.push({
        id: h.BVt.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), n.push({
        id: r,
        label: e.name
      })
    }
    return (0, r.jsx)(a.BIu, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: n,
      activeId: i
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleClick", e => {
      let {
        sku: t
      } = this.props;
      (0, d.pX)(e.id, {
        state: {
          analyticsSource: {
            object: h.ZSU.NAVIGATION_LINK,
            section: h.JJy.NAVIGATION,
            page: null == t ? h.liQ.STORE_DIRECTORY_BROWSE : h.liQ.STORE_LISTING
          }
        }
      })
    }), f(this, "renderCustomBreadcrumb", (e, t) => (0, r.jsx)(u.A.Title, {
      className: t ? null : g.Q,
      muted: !t,
      children: e.label
    }))
  }
}
let A = (0, Chunk707606.A)(Chunk311907.Ay.connectStores([Chunk587895.A, Chunk67480.A], e => {
  let {
    sku: t
  } = e, n = null != t ? c.A.getApplication(t.applicationId) : null, r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
  return {
    primarySkuId: r,
    isFetchingPrimarySku: null != r && p.A.isFetching(r),
    primarySku: null != r ? p.A.get(r) : null
  }
})(m))