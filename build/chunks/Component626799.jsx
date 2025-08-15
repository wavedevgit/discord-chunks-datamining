/** Chunk was on 66866 **/
/** chunk id: 626799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => w,
  Z: () => A
}), require("./388685.js"), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk799899 = require("./799899.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk558381 = require("./558381.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk498179 = require("./498179.jsx"),
  Chunk86357 = require("./86357.jsx"),
  Chunk914602 = require("./914602.jsx"),
  Chunk568836 = require("./568836.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk112724 = require("./112724.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk283595 = require("./283595.js"),
  Chunk558314 = require("./558314.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk550125 = require("./550125.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S extends(r = Chunk647438.Component) {
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
          I(e, t, n[t])
        })
      }
      return e
    }({}, require), t = t = {
      section: null != r ? r : Chunk981631.jXE.APPLICATION_EMBED,
      object: Chunk981631.qAy.CARD
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == module || null == require) && (0, Chunk558381.km)(exports)
  }
  renderViewInStoreButton() {
    return (0, Chunk951288.jsx)(Chunk755721.zx.Link, {
      to: this.getStoreListingLocation(),
      className: Chunk550125.actionButton,
      color: Chunk755721.zx.Colors.GREEN,
      size: Chunk755721.zx.Sizes.SMALL,
      children: Chunk388032.intl.string(Chunk388032.t["W+NB9/"])
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: r,
      renderFallback: l
    } = this.props, o = require > Chunk568836.aL;
    return null == module || null == exports ? r ? Chunk647438() : (0, Chunk951288.jsx)(Chunk568836.OR, {
      isHorizontal: Chunk442837
    }) : module.productLine === Chunk981631.POd.COLLECTIBLES ? (0, Chunk951288.jsx)(Chunk410575.Z, {
      section: Chunk981631.jXE.APPLICATION_EMBED,
      children: this.renderApplicationTile(module, exports)
    }) : (0, Chunk951288.jsx)(Chunk410575.Z, {
      section: Chunk981631.jXE.APPLICATION_EMBED,
      children: (0, Chunk951288.jsx)(Chunk799899.rU, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(module, exports)
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      playing: false,
      muted: true
    }), I(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), I(this, "handleMouseEnter", () => {
      this.setState({
        playing: true
      })
    }), I(this, "handleMouseLeave", () => {
      this.setState({
        playing: false
      })
    }), I(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, O.ZI)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), I(this, "handleActionButtonClick", e => e.preventDefault()), I(this, "handleBuyButtonClick", e => e.preventDefault()), I(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), I(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: r,
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: o
      } = this.props, {
        playing: s,
        muted: c
      } = this.state, u = r > f.aL;
      return (0, i.jsx)(m.Z, {
        sku: e,
        storeListing: t,
        playing: s,
        muted: c,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: o,
        isHorizontal: u,
        isEmbed: true
      })
    }), I(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: r,
        libraryApplication: l,
        renderCustomActions: a
      } = this.props;
      if (null != a) return (0, i.jsx)("div", {
        className: j.tileActions,
        children: a()
      });
      if (null == n) return null;
      let o = null != n && n.primarySkuId === r,
        c = null != l && l.hasFlag(y.eHb.HIDDEN);
      return (0, i.jsxs)("div", {
        className: j.tileActions,
        children: [!o || c ? this.renderViewInStoreButton() : (0, i.jsx)(d.Z, {
          application: n,
          customDisabledColor: s.zx.Colors.PRIMARY,
          size: s.zx.Sizes.SMALL,
          className: j.actionButton,
          source: y.Sbl.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !c || e.premium ? null : (0, i.jsx)(p.Z, {
          type: p.Z.Types.EMBED,
          sku: e,
          inLibrary: false
        })]
      })
    })
  }
}
I(S, "defaultProps", {
  renderFallback: Chunk981631.dG4
});
let T = [Chunk55563.Z, Chunk558314.Z, Chunk283595.Z, Chunk551428.Z];

function P(e) {
  let {
    skuId: t
  } = e, n = C.Z.get(t), r = null != n ? h.Z.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: r,
    fetchFailed: C.Z.didFetchingSkuFail(t),
    inLibrary: null != n && b.Z.hasApplication(n.applicationId, n.applicationId, true),
    storeListing: null != n ? v.Z.getForSKU(n.id) : null,
    libraryApplication: null != n ? b.Z.getLibraryApplication(n.applicationId, n.applicationId, true) : null
  }
}
let N = (0, Chunk112724.Z)((0, Chunk730749.Z)(S)),
  A = Chunk442837.ZP.connectStores(T, P)(N),
  w = (0, Chunk730749.Z)(Chunk442837.ZP.connectStores(T, P)(S))