/** Chunk was on 1272 **/
/** chunk id: 178071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  y: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk585237 = require("./585237.jsx"),
  Chunk551428 = require("./551428.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {
  DropdownSizes: Chunk585237.Z.DropdownSizes,
  Sizes: Chunk585237.Z.Sizes,
  Colors: Chunk585237.Z.Colors,
  Looks: Chunk585237.Z.Looks
};
class f extends Chunk473749.PureComponent {
  render() {
    var e, t;
    let n = this.props,
      {
        storeListings: i,
        primaryStoreListing: l,
        skuId: a,
        onStoreListingSelect: o,
        currentStoreListingId: c
      } = require,
      p = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(require, ["storeListings", "primaryStoreListing", "skuId", "onStoreListingSelect", "currentStoreListingId"]),
      f = +(null != Chunk442837);
    return (f += Chunk473749.length) < 2 ? null : (0, Chunk54381.jsx)(Chunk585237.Z, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          d(e, t, n[t])
        })
      }
      return e
    }({
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu
    }, p), t = t = {
      children: Chunk388032.intl.string(Chunk388032.t.hElye1)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module))
  }
  constructor(...e) {
    super(...e), d(this, "renderContextMenu", () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: n,
        onMenuSelect: i
      } = this.props, l = e.map(e => e.id !== n ? (0, r.jsx)(a.sNh, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          o.Zy(), null == t || t(e)
        }
      }) : null);
      return (0, r.jsx)(a.v2r, {
        onSelect: i,
        navId: "test-store-listing",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: o.Zy,
        children: l
      })
    }), d(this, "handleContextMenu", e => {
      e.stopPropagation(), o.vq(e, this.renderContextMenu)
    })
  }
}
let g = Chunk442837.ZP.connectStores([Chunk551428.Z], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: c.Z.getUnpublishedForSKU(t),
    primaryStoreListing: c.Z.getForSKU(t)
  }
})(f)