/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(558381),
  o = n(613311);
class a extends i.Component {
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
      location: a
    } = this.props;
    return (0, r.jsx)(o.Z, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: n,
      storeListingId: i,
      location: a,
      pageSize: l
    })
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "fetchStoreListing", n = e => {
      let {
        storeListingId: t,
        skuId: n,
        applicationId: r
      } = this.props, i = null != e ? e : n;
      return null != t ? (0, l.rV)(t) : null != i ? (0, l.km)(i) : null != r ? (0, l.Hq)(r) : void 0
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[t] = n
  }
}
let s = a