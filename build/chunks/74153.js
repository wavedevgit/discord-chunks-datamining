/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => b
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(16084),
  s = n(730749),
  c = n(812206),
  u = n(984370),
  d = n(703656),
  p = n(55563),
  h = n(981631),
  f = n(582803);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends i.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: n
    } = this.props;
    null == t || n || null == e || (0, a.$N)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, n = [], i = null;
    if (null != e) {
      let r = h.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      i = r, null != t && n.push({
        id: h.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), n.push({
        id: r,
        label: e.name
      })
    }
    return (0, r.jsx)(o.OoM, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: n,
      activeId: i
    })
  }
  constructor(...e) {
    super(...e), g(this, "handleClick", e => {
      let {
        sku: t
      } = this.props;
      (0, d.uL)(e.id, {
        state: {
          analyticsSource: {
            object: h.qAy.NAVIGATION_LINK,
            section: h.jXE.NAVIGATION,
            page: null == t ? h.ZY5.STORE_DIRECTORY_BROWSE : h.ZY5.STORE_LISTING
          }
        }
      })
    }), g(this, "renderCustomBreadcrumb", (e, t) => (0, r.jsx)(u.Z.Title, {
      className: t ? null : f.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
let b = (0, s.Z)(l.ZP.connectStores([c.Z, p.Z], e => {
  let {
    sku: t
  } = e, n = null != t ? c.Z.getApplication(t.applicationId) : null, r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
  return {
    primarySkuId: r,
    isFetchingPrimarySku: null != r && p.Z.isFetching(r),
    primarySku: null != r ? p.Z.get(r) : null
  }
})(m))