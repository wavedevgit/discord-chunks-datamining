/** Chunk was on 1272 **/
/** chunk id: 74153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk55563 = require("./55563.js"),
  Chunk981631 = require("./981631.js"),
  Chunk913279 = require("./913279.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: n
    } = this.props;
    null == t || n || null == e || (0, o.$N)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, n = [], i = null;
    if (null != e) {
      let r = f.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      i = r, null != t && n.push({
        id: f.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), n.push({
        id: r,
        label: e.name
      })
    }
    return (0, r.jsx)(a.OoM, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: n,
      activeId: i
    })
  }
  constructor(...e) {
    super(...e), m(this, "handleClick", e => {
      let {
        sku: t
      } = this.props;
      (0, d.uL)(e.id, {
        state: {
          analyticsSource: {
            object: f.qAy.NAVIGATION_LINK,
            section: f.jXE.NAVIGATION,
            page: null == t ? f.ZY5.STORE_DIRECTORY_BROWSE : f.ZY5.STORE_LISTING
          }
        }
      })
    }), m(this, "renderCustomBreadcrumb", (e, t) => (0, r.jsx)(u.Z.Title, {
      className: t ? null : g.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
let b = (0, Chunk730749.Z)(Chunk442837.ZP.connectStores([Chunk812206.Z, Chunk55563.Z], e => {
  let {
    sku: t
  } = e, n = null != t ? c.Z.getApplication(t.applicationId) : null, r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
  return {
    primarySkuId: r,
    isFetchingPrimarySku: null != r && p.Z.isFetching(r),
    primarySku: null != r ? p.Z.get(r) : null
  }
})(h))