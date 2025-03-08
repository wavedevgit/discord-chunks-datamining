/** Chunk was on 74329 **/
n.d(t, {
  E: () => E,
  Z: () => m
}), n(47120), n(230036);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(481060),
  a = n(239091),
  s = n(585237),
  c = n(812206),
  u = n(55563),
  d = n(73346),
  _ = n(388032);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {
  DropdownSizes: s.Z.DropdownSizes,
  Sizes: s.Z.Sizes,
  Colors: s.Z.Colors,
  Looks: s.Z.Looks
};
class f extends i.PureComponent {
  render() {
    var e, t;
    let n = this.props,
      {
        skus: i,
        children: o,
        applicationId: l,
        primarySKU: a,
        onSKUSelect: c
      } = n,
      u = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(n, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
    return (0, r.jsx)(s.Z, (e = function(e) {
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
    }({
      onClick: this.handleClick,
      onDropdownClick: i.length > 0 ? this.handleContextMenu : null,
      onContextMenu: i.length > 0 ? this.handleContextMenu : void 0
    }, u), t = t = {
      children: o
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
    super(...e), p(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, r.jsx)(l.v2r, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": _.NW.string(_.t.ogxXGh),
        onClose: a.Zy,
        children: e.map(e => (0, r.jsx)(l.sNh, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), p(this, "handleContextMenu", e => {
      e.stopPropagation(), a.vq(e, this.renderContextMenu)
    }), p(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
let m = o.ZP.connectStores([u.Z, c.Z], e => {
  var t;
  let {
    applicationId: n
  } = e, r = (0, d.uF)(n, c.Z, u.Z);
  return {
    skus: (null !== (t = u.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1),
    primarySKU: r
  }
})(f)