/** Chunk was on 21738 **/
/** chunk id: 575613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  J: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk543594 = require("./543594.jsx"),
  Chunk328968 = require("./328968.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {
  DropdownSizes: Chunk543594.A.DropdownSizes,
  Sizes: Chunk543594.A.Sizes,
  Colors: Chunk543594.A.Colors,
  Looks: Chunk543594.A.Looks
};
class h extends Chunk64700.PureComponent {
  render() {
    var e, t;
    let n = this.props,
      {
        storeListings: i,
        primaryStoreListing: l,
        skuId: a,
        onStoreListingSelect: s,
        currentStoreListingId: c
      } = n,
      p = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(n, ["storeListings", "primaryStoreListing", "skuId", "onStoreListingSelect", "currentStoreListingId"]),
      h = +(null != l);
    return (h += i.length) < 2 ? null : (0, r.jsx)(o.A, (e = function(e) {
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
      children: u.intl.string(u.t.hElye1)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }
  constructor(...e) {
    super(...e), d(this, "renderContextMenu", () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: n,
        onMenuSelect: i
      } = this.props, l = e.map(e => e.id !== n ? (0, r.jsx)(a.Drp, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          s.Z_(), null == t || t(e)
        }
      }) : null);
      return (0, r.jsx)(a.W1t, {
        onSelect: i,
        navId: "test-store-listing",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: s.Z_,
        children: l
      })
    }), d(this, "handleContextMenu", e => {
      e.stopPropagation(), s.jA(e, this.renderContextMenu)
    })
  }
}
let g = Chunk311907.Ay.connectStores([Chunk328968.A], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: c.A.getUnpublishedForSKU(t),
    primaryStoreListing: c.A.getForSKU(t)
  }
})(h)