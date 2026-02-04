/** Chunk was on 21738 **/
/** chunk id: 998515, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x,
  getPageSize: () => T
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk255363 = require("./255363.js"),
  Chunk384904 = require("./384904.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk490415 = require("./490415.jsx"),
  Chunk456412 = require("./456412.jsx"),
  Chunk441271 = require("./441271.js"),
  Chunk915967 = require("./915967.js"),
  Chunk775121 = require("./775121.js"),
  Chunk268218 = require("./268218.js"),
  Chunk670735 = require("./670735.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk75587 = require("./75587.jsx"),
  Chunk196661 = require("./196661.jsx"),
  Chunk590858 = require("./590858.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58682 = require("./58682.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let N = (0, Chunk268218.Fe)({
  createPromise: () => Promise.all([n.e("19846"), n.e("41031")]).then(n.bind(n, 554238)),
  webpackId: 554238
});

function T(e) {
  return e < 1e3 ? y.q.SMALL : y.q.LARGE
}
Chunk311907.Ay.initialize();
class j extends Chunk64700.PureComponent {
  componentDidMount() {
    (0, o.N)(this.props.location), this.stopListeningToHistory = (0, _.JK)().listen(e => {
      e.pathname.startsWith(I.BVt.APPLICATION_STORE) && (0, o.N)(e)
    }), this.props.isAuthenticated && (0, c.$o)(), g.A.disable(), g.A.setLayout(h.E), g.A.enable(), (0, b.d)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), g.A.disable(), g.A.setLayout(f.zR), g.A.enable()
  }
  renderCustomErrorMessage() {
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)("p", {
        children: v.intl.string(v.t["1PZdF7"])
      }), (0, r.jsx)("p", {
        children: v.intl.string(v.t.CvQlAH)
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, n = e ? (0, r.jsx)("div", {
      className: S.gE,
      children: this.renderContent()
    }) : (0, r.jsx)(N, {
      className: S.gE,
      location: t,
      render: this.renderContent
    });
    return (0, r.jsx)(A.A, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: n
    })
  }
  constructor(...e) {
    super(...e), C(this, "stopListeningToHistory", true), C(this, "renderStoreListing", e => {
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
      return (0, r.jsx)(u.A, {
        page: I.liQ.STORE_LISTING,
        root: true,
        children: (0, r.jsx)(O.A, {
          skuId: t,
          applicationId: n,
          slug: i,
          location: a,
          storeListingId: o.store_listing_id,
          pageSize: T(s)
        })
      })
    }), C(this, "renderContent", () => (0, r.jsxs)(a.dO, {
      children: [(0, r.jsx)(a.qh, {
        path: I.BVt.APPLICATION_STORE,
        exact: true,
        render: () => (0, r.jsx)(u.A, {
          page: I.liQ.STORE_DIRECTORY_HOME,
          root: true,
          children: (0, r.jsx)(E.A, {})
        })
      }), (0, r.jsx)(a.qh, {
        path: I.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.qh, {
        path: I.BVt.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.qh, {
        path: I.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.qh, {
        path: I.BVt.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, r.jsx)(a.rd, {
        to: I.BVt.APP
      })]
    }))
  }
}
let x = (0, Chunk960488.y)((0, Chunk490415.A)((0, Chunk456412.A)(j)))