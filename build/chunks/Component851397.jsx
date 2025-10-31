/** Chunk was on 94758 **/
/** chunk id: 851397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk703656 = require("./703656.js"),
  Chunk892001 = require("./892001.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk89196 = require("./89196.js"),
  Chunk51144 = require("./51144.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63602 = require("./63602.js");

function I(e) {
  var t, r, {
      profileOwner: I,
      showIcons: j = false
    } = e,
    P = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["profileOwner", "showIcons"]);
  let {
    item: v,
    isOwner: w
  } = P, y = v.sku, S = y.applicationId, x = (0, o.q)(S), k = i.useRef(null), [E] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(v.skuId, I.id)], [v.skuId, I.id]), N = v.skuName, C = w ? h.intl.string(h.t.FdGl5A) : h.intl.string(h.t.ilhtIa), T = w ? true : a.OgN, L = i.useCallback(() => {
    if (w && (null == x ? true : x.guildId) != null)(0, u.closeUserProfileModal)(), (0, c.uL)(g.Z5c.CHANNELS_GAME_SHOP(x.guildId, 0, v.skuId, y.slug));
    else {
      if (E) return;
      (0, p.P)(y, {
        isGift: true
      })
    }
  }, [w, null == x ? true : x.guildId, v.skuId, y, E]), Z = i.useCallback(() => j ? (0, n.jsx)("div", {
    className: b.itemIcon,
    children: (0, n.jsx)(s.u, {
      text: h.intl.formatToPlainString(h.t.p3RmJF, {
        username: m.ZP.getName(I)
      }),
      position: "top",
      children: (0, n.jsx)(a.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: b.itemIconHeart
      })
    })
  }) : null, [j, I]), _ = i.useCallback(() => (0, n.jsx)(O.A, {
    shape: "custom",
    containerClassName: b.card,
    backgroundImageClassName: b.cardBackgroundImage,
    foregroundImageClassName: b.cardImage,
    sku: y
  }), [y]);
  return (0, n.jsx)(d.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, P), r = r = {
    cardRef: k,
    accessibleLabel: N,
    onCardClick: L,
    buttonCTALabel: C,
    buttonIcon: T,
    isOwned: E,
    renderItemPreview: _,
    renderSourceIcon: Z
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}