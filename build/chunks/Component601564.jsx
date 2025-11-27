/** Chunk was on 1272 **/
/** chunk id: 601564, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x,
  getPageSize: () => j
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
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
  Chunk248687 = require("./248687.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk911314 = require("./911314.jsx"),
  Chunk429899 = require("./429899.jsx"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430355 = require("./430355.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = (0, Chunk663993.Un)({
  createPromise: () => Promise.all([require.e("88473"), require.e("87626")]).then(require.bind(require, 496691)),
  webpackId: 496691
});

function j(e) {
  return e < y.x ? y.b.SMALL : y.b.LARGE
}
Chunk442837.ZP.initialize();
class P extends Chunk473749.PureComponent {
  componentDidMount() {
    (0, Chunk930118.Y)(this.props.location), this.stopListeningToHistory = (0, Chunk703656.s1)().listen(e => {
      e.pathname.startsWith(I.Z5c.APPLICATION_STORE) && (0, o.Y)(e)
    }), this.props.isAuthenticated && (0, Chunk355467.tZ)(), Chunk714338.Z.disable(), Chunk714338.Z.setLayout(Chunk447269.r), Chunk714338.Z.enable(), (0, Chunk108427.e)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), Chunk714338.Z.disable(), Chunk714338.Z.setLayout(Chunk612226.oT), Chunk714338.Z.enable()
  }
  renderCustomErrorMessage() {
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)("p", {
        children: Chunk388032.intl.string(Chunk388032.t["1PZdF7"])
      }), (0, Chunk54381.jsx)("p", {
        children: Chunk388032.intl.string(Chunk388032.t.CvQlAH)
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, n = module ? (0, Chunk54381.jsx)("div", {
      className: Chunk430355.applicationStore,
      children: this.renderContent()
    }) : (0, Chunk54381.jsx)(N, {
      className: Chunk430355.applicationStore,
      location: exports,
      render: this.renderContent
    });
    return (0, Chunk54381.jsx)(Chunk248687.Z, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: require
    })
  }
  constructor(...e) {
    super(...e), T(this, "stopListeningToHistory", true), T(this, "renderStoreListing", e => {
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
        width: s
      } = this.props, o = (0, l.parse)(a.search);
      return (0, r.jsx)(u.Z, {
        page: I.ZY5.STORE_LISTING,
        root: true,
        children: (0, r.jsx)(v.Z, {
          skuId: t,
          applicationId: n,
          slug: i,
          location: a,
          storeListingId: o.store_listing_id,
          pageSize: j(s)
        })
      })
    }), T(this, "renderContent", () => (0, r.jsxs)(a.rs, {
      children: [(0, r.jsx)(a.AW, {
        path: I.Z5c.APPLICATION_STORE,
        exact: true,
        render: () => (0, r.jsx)(u.Z, {
          page: I.ZY5.STORE_DIRECTORY_HOME,
          root: true,
          children: (0, r.jsx)(O.Z, {})
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
let x = (0, Chunk828700.EN)((0, Chunk666743.Z)((0, Chunk112724.Z)(P)))