/** Chunk was on web.js **/
/** chunk id: 322337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  p: () => b
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let b = {
  DropdownSizes: Chunk543594.A.DropdownSizes,
  Sizes: Chunk543594.A.Sizes,
  Colors: Chunk543594.A.Colors,
  Looks: Chunk543594.A.Looks
};
class y extends Chunk64700.PureComponent {
  render() {
    let e = this.props,
      {
        skus: t,
        children: n,
        applicationId: i,
        primarySKU: a,
        onSKUSelect: s
      } = e,
      o = g(e, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
    return (0, r.jsx)(l.A, m(_({
      onClick: this.handleClick,
      onDropdownClick: t.length > 0 ? this.handleContextMenu : null,
      onContextMenu: t.length > 0 ? this.handleContextMenu : true
    }, o), {
      children: n
    }))
  }
  constructor(...e) {
    super(...e), p(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, r.jsx)(s.W1t, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": f.intl.string(f.t.ogxXGq),
        onClose: o.Z_,
        children: e.map(e => (0, r.jsx)(s.Drp, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), p(this, "handleContextMenu", e => {
      e.stopPropagation(), o.jA(e, this.renderContextMenu)
    }), p(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
let O = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk587895.A], e => {
  var t;
  let {
    applicationId: n
  } = e, r = (0, d.VH)(n, c.A, u.A);
  return {
    skus: (null != (t = u.A.getForApplication(n)) ? t : []).sort((e, t) => null != r && e.id === r.id ? false : null != r && t.id === r.id ? 1 : e.name >= t.name ? false : 1),
    primarySKU: r
  }
})(y)