/** Chunk was on 1272 **/
/** chunk id: 601564, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x,
  getPageSize: () => P
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk593473 = require("./593473.js"),
  Chunk114858 = require("./114858.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930118 = require("./930118.js"),
  Chunk355467 = require("./355467.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk666743 = require("./666743.jsx"),
  Chunk112724 = require("./112724.jsx"),
  Chunk447269 = require("./447269.js"),
  Chunk612226 = require("./612226.js"),
  Chunk714338 = require("./714338.js"),
  Chunk663993 = require("./663993.js"),
  Chunk628123 = require("./628123.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk911314 = require("./911314.jsx"),
  Chunk429899 = require("./429899.jsx"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356998 = require("./356998.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = (0, Chunk663993.Un)({
  createPromise: () => Promise.all([require.e("98315"), require.e("87626")]).then(require.bind(require, 496691)),
  webpackId: 496691
});

function P(e) {
  return e < v.x ? v.b.SMALL : v.b.LARGE
}
Chunk442837.ZP.initialize();
class j extends Chunk73800.PureComponent {
  componentDidMount() {
    (0, Chunk930118.Y)(this.props.location), this.stopListeningToHistory = (0, Chunk703656.s1)().listen(e => {
      e.pathname.startsWith(I.Z5c.APPLICATION_STORE) && (0, s.Y)(e)
    }), this.props.isAuthenticated && (0, Chunk355467.tZ)(), Chunk714338.Z.disable(), Chunk714338.Z.setLayout(Chunk447269.r), Chunk714338.Z.enable(), (0, Chunk108427.e)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), Chunk714338.Z.disable(), Chunk714338.Z.setLayout(Chunk612226.oT), Chunk714338.Z.enable()
  }
  renderCustomErrorMessage() {
    return (0, Chunk255367.jsxs)("div", {
      children: [(0, Chunk255367.jsx)("p", {
        children: Chunk388032.intl.string(Chunk388032.t["1PZdFx"])
      }), (0, Chunk255367.jsx)("p", {
        children: Chunk388032.intl.string(Chunk388032.t.CvQlAA)
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, n = module ? (0, Chunk255367.jsx)("div", {
      className: Chunk356998.applicationStore,
      children: this.renderContent()
    }) : (0, Chunk255367.jsx)(T, {
      className: Chunk356998.applicationStore,
      location: exports,
      render: this.renderContent
    });
    return (0, Chunk255367.jsx)(Chunk628123.Z, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: require
    })
  }
  constructor(...e) {
    super(...e), N(this, "stopListeningToHistory", true), N(this, "renderStoreListing", e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: n,
            slug: i
          }
        },
        location: a
      } = e, {
        width: o
      } = this.props, s = (0, l.parse)(a.search);
      return (0, r.jsx)(u.Z, {
        page: I.ZY5.STORE_LISTING,
        root: true,
        children: (0, r.jsx)(y.Z, {
          skuId: t,
          applicationId: n,
          slug: i,
          location: a,
          storeListingId: s.store_listing_id,
          pageSize: P(o)
        })
      })
    }), N(this, "renderContent", () => (0, r.jsxs)(a.rs, {
      children: [(0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE,
        exact: true,
        render: () => (0, r.jsx)(u.Z, {
          page: I.ZY5.STORE_DIRECTORY_HOME,
          root: true,
          children: (0, r.jsx)(E.Z, {})
        })
      }), (0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.l_, {
        to: I.Z5c.APP
      })]
    }))
  }
}
let x = (0, Chunk114858.EN)((0, Chunk666743.Z)((0, Chunk112724.Z)(j)))