/** Chunk was on 1272 **/
/** chunk id: 409292, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493683 = require("./493683.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk184107 = require("./184107.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk613311 = require("./613311.jsx"),
  Chunk601564 = require("./601564.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk763032 = require("./763032.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk647438.Component {
  componentDidMount() {
    this.fetchStoreListing(), (0, Chunk108427.e)("channel_store_listing")
  }
  render() {
    return null != this.props.skuId ? (0, Chunk951288.jsx)(Chunk410575.Z, {
      page: Chunk981631.ZY5.CHANNEL_STORE_LISTING,
      root: true,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk763032.applicationStore,
        children: (0, Chunk951288.jsx)(Chunk843611.AW, {
          path: "*",
          render: this.renderApplicationListing
        })
      })
    }) : null
  }
  constructor(...e) {
    super(...e), g(this, "fetchStoreListing", e => {
      let {
        channel: t,
        inputSkuId: n
      } = this.props;
      return null != e ? s.Z.fetchChannelStoreListing(t.id, e) : null != n ? s.Z.fetchChannelStoreListing(t.id, n) : s.Z.fetchChannelStoreListing(t.id)
    }), g(this, "renderApplicationListing", e => {
      let {
        location: t
      } = e, {
        channel: n,
        skuId: i,
        width: l
      } = this.props;
      return (0, r.jsx)(p.Z, {
        channel: n,
        inputSkuId: i,
        fetchStoreListing: this.fetchStoreListing,
        location: t,
        pageSize: (0, f.getPageSize)(l)
      })
    })
  }
}
let b = (0, Chunk112724.Z)(Chunk442837.ZP.connectStores([Chunk184107.Z], e => {
  let {
    channel: t,
    inputSkuId: n
  } = e;
  return {
    skuId: null != n ? n : u.Z.getSkuIdForChannel(t.id)
  }
})(_))