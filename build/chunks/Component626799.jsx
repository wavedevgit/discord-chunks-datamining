/** Chunk was on web.js **/
/** chunk id: 626799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => j,
  Z: () => L
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk319498 = require("./319498.js"),
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class R extends(r = Chunk473749.Component) {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      },
      analyticsSection: t
    } = this.props;
    return P(C({}, module), {
      section: null != exports ? exports : Chunk981631.jXE.APPLICATION_EMBED,
      object: Chunk981631.qAy.CARD
    })
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
    return (0, Chunk54381.jsx)(Chunk755721.zx.Link, {
      to: this.getStoreListingLocation(),
      className: Chunk550125.actionButton,
      color: Chunk755721.zx.Colors.GREEN,
      size: Chunk755721.zx.Sizes.SMALL,
      children: Chunk388032.intl.string(Chunk388032.t["W+NB90"])
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: r,
      renderFallback: a
    } = this.props, s = require > Chunk568836.aL;
    return null == module || null == exports ? r ? Chunk473749() : (0, Chunk54381.jsx)(Chunk568836.OR, {
      isHorizontal: Chunk442837
    }) : module.productLine === Chunk981631.POd.COLLECTIBLES ? (0, Chunk54381.jsx)(Chunk410575.Z, {
      section: Chunk981631.jXE.APPLICATION_EMBED,
      children: this.renderApplicationTile(module, exports)
    }) : (0, Chunk54381.jsx)(Chunk410575.Z, {
      section: Chunk981631.jXE.APPLICATION_EMBED,
      children: (0, Chunk54381.jsx)(Chunk319498.rU, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(module, exports)
      })
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      playing: false,
      muted: true
    }), A(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), A(this, "handleMouseEnter", () => {
      this.setState({
        playing: true
      })
    }), A(this, "handleMouseLeave", () => {
      this.setState({
        playing: false
      })
    }), A(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, v.ZI)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), A(this, "handleActionButtonClick", e => e.preventDefault()), A(this, "handleBuyButtonClick", e => e.preventDefault()), A(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), A(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: r,
        renderCustomTitle: a,
        renderCustomTagline: o,
        renderCustomMedia: s
      } = this.props, {
        playing: l,
        muted: c
      } = this.state, u = r > _.aL;
      return (0, i.jsx)(p.Z, {
        sku: e,
        storeListing: t,
        playing: l,
        muted: c,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: a,
        renderCustomTagline: o,
        renderCustomMedia: s,
        isHorizontal: u,
        isEmbed: true
      })
    }), A(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: r,
        libraryApplication: a,
        renderCustomActions: o
      } = this.props;
      if (null != o) return (0, i.jsx)("div", {
        className: T.tileActions,
        children: o()
      });
      if (null == n) return null;
      let s = null != n && n.primarySkuId === r,
        c = null != a && a.hasFlag(S.eHb.HIDDEN);
      return (0, i.jsxs)("div", {
        className: T.tileActions,
        children: [!s || c ? this.renderViewInStoreButton() : (0, i.jsx)(d.Z, {
          application: n,
          customDisabledColor: l.zx.Colors.PRIMARY,
          size: l.zx.Sizes.SMALL,
          className: T.actionButton,
          source: S.Sbl.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !c || e.premium ? null : (0, i.jsx)(f.Z, {
          type: f.Z.Types.EMBED,
          sku: e,
          inLibrary: false
        })]
      })
    })
  }
}
A(R, "defaultProps", {
  renderFallback: Chunk981631.dG4
});
let w = [Chunk55563.Z, Chunk558314.Z, Chunk283595.Z, Chunk551428.Z];

function D(e) {
  let {
    skuId: t
  } = e, n = y.Z.get(t), r = null != n ? g.Z.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: r,
    fetchFailed: y.Z.didFetchingSkuFail(t),
    inLibrary: null != n && E.Z.hasApplication(n.applicationId, n.applicationId, true),
    storeListing: null != n ? O.Z.getForSKU(n.id) : null,
    libraryApplication: null != n ? E.Z.getLibraryApplication(n.applicationId, n.applicationId, true) : null
  }
}
let x = (0, Chunk112724.Z)((0, Chunk730749.Z)(R)),
  L = Chunk442837.ZP.connectStores(w, D)(x),
  j = (0, Chunk730749.Z)(Chunk442837.ZP.connectStores(w, D)(R))