/** Chunk was on 61222 **/
/** chunk id: 322337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I,
  p: () => A
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk543594 = require("./543594.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk67480 = require("./67480.js"),
  Chunk371794 = require("./371794.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = {
  DropdownSizes: Chunk543594.A.DropdownSizes,
  Sizes: Chunk543594.A.Sizes,
  Colors: Chunk543594.A.Colors,
  Looks: Chunk543594.A.Looks
};
class T extends Chunk64700.PureComponent {
  render() {
    var e, t;
    let n = this.props,
      {
        skus: i,
        children: l,
        applicationId: o,
        primarySKU: a,
        onSKUSelect: c
      } = n,
      u = function(e, t) {
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
      }(n, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
    return (0, r.jsx)(s.A, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          _(e, t, n[t])
        })
      }
      return e
    }({
      onClick: this.handleClick,
      onDropdownClick: i.length > 0 ? this.handleContextMenu : null,
      onContextMenu: i.length > 0 ? this.handleContextMenu : true
    }, u), t = t = {
      children: l
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
    super(...e), _(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, r.jsx)(o.W1t, {
        "data-menu-migrated": true,
        onSelect: n,
        navId: "test-skus",
        "aria-label": d.intl.string(d.t.ogxXGq),
        onClose: a.Z_,
        children: e.map(e => (0, r.jsx)(o.Drp, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), _(this, "handleContextMenu", e => {
      e.stopPropagation(), a.jA(e, this.renderContextMenu)
    }), _(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
let I = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk587895.A], e => {
  var t;
  let {
    applicationId: n
  } = e, r = (0, E.VH)(n, c.A, u.A);
  return {
    skus: (null != (t = u.A.getForApplication(n)) ? t : []).sort((e, t) => null != r && e.id === r.id ? false : null != r && t.id === r.id ? 1 : e.name >= t.name ? false : 1),
    primarySKU: r
  }
})(T)