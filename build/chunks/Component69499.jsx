/** Chunk was on web.js **/
/** chunk id: 69499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => b,
  Z: () => O
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk585237 = require("./585237.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk55563 = require("./55563.js"),
  Chunk73346 = require("./73346.js"),
  Chunk388032 = require("./388032.jsx");

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
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = {
  DropdownSizes: Chunk585237.Z.DropdownSizes,
  Sizes: Chunk585237.Z.Sizes,
  Colors: Chunk585237.Z.Colors,
  Looks: Chunk585237.Z.Looks
};
class y extends Chunk473749.PureComponent {
  render() {
    let e = this.props,
      {
        skus: t,
        children: n,
        applicationId: i,
        primarySKU: a,
        onSKUSelect: o
      } = e,
      s = g(e, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
    return (0, r.jsx)(l.Z, m(_({
      onClick: this.handleClick,
      onDropdownClick: t.length > 0 ? this.handleContextMenu : null,
      onContextMenu: t.length > 0 ? this.handleContextMenu : true
    }, s), {
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
      return (0, r.jsx)(o.v2r, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": f.intl.string(f.t.ogxXGq),
        onClose: s.Zy,
        children: e.map(e => (0, r.jsx)(o.sNh, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), p(this, "handleContextMenu", e => {
      e.stopPropagation(), s.vq(e, this.renderContextMenu)
    }), p(this, "handleClick", () => {
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
  } = e, r = (0, d.uF)(n, c.Z, u.Z);
  return {
    skus: (null != (t = u.Z.getForApplication(n)) ? t : []).sort((e, t) => null != r && e.id === r.id ? false : null != r && t.id === r.id ? 1 : e.name >= t.name ? false : 1),
    primarySKU: r
  }
})(y)