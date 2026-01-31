/** Chunk was on 64935 **/
/** chunk id: 295843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P,
  k: () => w
}), require("./896048.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk758879 = require("./758879.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk800342 = require("./800342.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk73861 = require("./73861.jsx"),
  Chunk740916 = require("./740916.jsx"),
  Chunk918085 = require("./918085.jsx"),
  Chunk863574 = require("./863574.jsx"),
  Chunk707606 = require("./707606.jsx"),
  Chunk456412 = require("./456412.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk189081 = require("./189081.js"),
  Chunk286805 = require("./286805.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk371794 = require("./371794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk187663 = require("./187663.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class I extends(r = Chunk64700.Component) {
  get analyticsLocation() {
    var e, t;
    let {
      analyticsContext: {
        location: n
      },
      analyticsSection: r
    } = this.props;
    return e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          C(e, t, n[t])
        })
      }
      return e
    }({}, n), t = t = {
      section: null != r ? r : x.JJy.APPLICATION_EMBED,
      object: x.ZSU.CARD
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == e || null == n) && (0, c.QB)(t)
  }
  renderViewInStoreButton() {
    return (0, i.jsx)(o.$n.Link, {
      to: this.getStoreListingLocation(),
      className: j.h,
      color: o.$n.Colors.GREEN,
      size: o.$n.Sizes.SMALL,
      children: E.intl.string(E.t["W+NB90"])
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: r,
      renderFallback: l
    } = this.props, s = n > f.Tm;
    return null == e || null == t ? r ? l() : (0, i.jsx)(f.Wb, {
      isHorizontal: s
    }) : e.productLine === x.EZt.COLLECTIBLES ? (0, i.jsx)(u.A, {
      section: x.JJy.APPLICATION_EMBED,
      children: this.renderApplicationTile(e, t)
    }) : (0, i.jsx)(u.A, {
      section: x.JJy.APPLICATION_EMBED,
      children: (0, i.jsx)(a.N_, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(e, t)
      })
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      playing: false,
      muted: true
    }), C(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), C(this, "handleMouseEnter", () => {
      this.setState({
        playing: true
      })
    }), C(this, "handleMouseLeave", () => {
      this.setState({
        playing: false
      })
    }), C(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, O.vy)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), C(this, "handleActionButtonClick", e => e.preventDefault()), C(this, "handleBuyButtonClick", e => e.preventDefault()), C(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), C(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: r,
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: s
      } = this.props, {
        playing: o,
        muted: c
      } = this.state, u = r > f.Tm;
      return (0, i.jsx)(m.A, {
        sku: e,
        storeListing: t,
        playing: o,
        muted: c,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: s,
        isHorizontal: u,
        isEmbed: true
      })
    }), C(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: r,
        libraryApplication: l,
        renderCustomActions: a
      } = this.props;
      if (null != a) return (0, i.jsx)("div", {
        className: j.i,
        children: a()
      });
      if (null == n) return null;
      let s = null != n && n.primarySkuId === r,
        o = null != l && l.hasFlag(x.hM6.HIDDEN);
      return (0, i.jsxs)("div", {
        className: j.i,
        children: [!s || o ? this.renderViewInStoreButton() : (0, i.jsx)(d.A, {
          application: n,
          disabledVariant: "primary",
          size: "sm",
          className: j.h,
          source: x.ThZ.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !o || e.premium ? null : (0, i.jsx)(p.A, {
          type: p.A.Types.EMBED,
          sku: e,
          inLibrary: false
        })]
      })
    })
  }
}
C(I, "defaultProps", {
  renderFallback: Chunk652215.tEg
});
let S = [Chunk67480.A, Chunk286805.A, Chunk189081.A, Chunk328968.A];

function T(e) {
  let {
    skuId: t
  } = e, n = A.A.get(t), r = null != n ? h.A.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: r,
    fetchFailed: A.A.didFetchingSkuFail(t),
    inLibrary: null != n && b.A.hasApplication(n.applicationId, n.applicationId, true),
    storeListing: null != n ? v.A.getForSKU(n.id) : null,
    libraryApplication: null != n ? b.A.getLibraryApplication(n.applicationId, n.applicationId, true) : null
  }
}
let N = (0, Chunk456412.A)((0, Chunk707606.A)(I)),
  P = Chunk311907.Ay.connectStores(S, T)(N),
  w = (0, Chunk707606.A)(Chunk311907.Ay.connectStores(S, T)(I))