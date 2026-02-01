/** Chunk was on 21738 **/
/** chunk id: 816015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk308528 = require("./308528.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk210714 = require("./210714.js"),
  Chunk851466 = require("./851466.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk341338 = require("./341338.jsx"),
  Chunk998515 = require("./998515.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk58682 = require("./58682.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class A extends Chunk64700.Component {
  componentDidMount() {
    this.fetchStoreListing(), (0, c.d)("channel_store_listing")
  }
  render() {
    return null != this.props.skuId ? (0, r.jsx)(d.A, {
      page: g.liQ.CHANNEL_STORE_LISTING,
      root: true,
      children: (0, r.jsx)("div", {
        className: m.gE,
        children: (0, r.jsx)(l.qh, {
          path: "*",
          render: this.renderApplicationListing
        })
      })
    }) : null
  }
  constructor(...e) {
    super(...e), f(this, "fetchStoreListing", e => {
      let {
        channel: t,
        inputSkuId: n
      } = this.props;
      return null != e ? s.A.fetchChannelStoreListing(t.id, e) : null != n ? s.A.fetchChannelStoreListing(t.id, n) : s.A.fetchChannelStoreListing(t.id)
    }), f(this, "renderApplicationListing", e => {
      let {
        location: t
      } = e, {
        channel: n,
        skuId: i,
        width: l
      } = this.props;
      return (0, r.jsx)(p.A, {
        channel: n,
        inputSkuId: i,
        fetchStoreListing: this.fetchStoreListing,
        location: t,
        pageSize: (0, h.getPageSize)(l)
      })
    })
  }
}
let _ = (0, Chunk456412.A)(Chunk311907.Ay.connectStores([Chunk851466.A], e => {
  let {
    channel: t,
    inputSkuId: n
  } = e;
  return {
    skuId: null != n ? n : u.A.getSkuIdForChannel(t.id)
  }
})(A))