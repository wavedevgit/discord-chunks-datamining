/** Chunk was on 31253 **/
/** chunk id: 69499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => I,
  Z: () => O
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk585237 = require("./585237.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk55563 = require("./55563.js"),
  Chunk73346 = require("./73346.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = {
  DropdownSizes: Chunk585237.Z.DropdownSizes,
  Sizes: Chunk585237.Z.Sizes,
  Colors: Chunk585237.Z.Colors,
  Looks: Chunk585237.Z.Looks
};
class T extends Chunk73800.PureComponent {
  render() {
    var e, t;
    let n = this.props,
      {
        skus: i,
        children: l,
        applicationId: o,
        primarySKU: a,
        onSKUSelect: s
      } = require,
      u = function(e, t) {
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
      }(require, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
    return (0, Chunk255367.jsx)(Chunk585237.Z, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          E(e, t, n[t])
        })
      }
      return e
    }({
      onClick: this.handleClick,
      onDropdownClick: Chunk73800.length > 0 ? this.handleContextMenu : null,
      onContextMenu: Chunk73800.length > 0 ? this.handleContextMenu : true
    }, Chunk55563), t = t = {
      children: Chunk442837
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
    super(...e), E(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, r.jsx)(o.v2r, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": d.intl.string(d.t.ogxXGh),
        onClose: a.Zy,
        children: e.map(e => (0, r.jsx)(o.sNh, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), E(this, "handleContextMenu", e => {
      e.stopPropagation(), a.vq(e, this.renderContextMenu)
    }), E(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
let O = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk812206.Z], e => {
  var t;
  let {
    applicationId: n
  } = e, r = (0, _.uF)(n, s.Z, u.Z);
  return {
    skus: (null != (t = u.Z.getForApplication(n)) ? t : []).sort((e, t) => null != r && e.id === r.id ? false : null != r && t.id === r.id ? 1 : e.name >= t.name ? false : 1),
    primarySKU: r
  }
})(T)