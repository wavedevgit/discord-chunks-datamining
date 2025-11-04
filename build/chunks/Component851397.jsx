/** Chunk was on 94758 **/
/** chunk id: 851397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63602 = require("./63602.js");

function j(e) {
  var t, r, {
      profileOwner: j,
      showIcons: P = false
    } = e,
    v = function(e, t) {
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
    item: w,
    isOwner: y,
    giftingOrigin: S = h.Wt.USER_PROFILE_WISHLIST
  } = v, x = w.sku, E = x.applicationId, k = (0, o.q)(E), N = i.useRef(null), [C] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(w.skuId, j.id)], [w.skuId, j.id]), T = w.skuName, L = y ? I.intl.string(I.t.FdGl5A) : I.intl.string(I.t.ilhtIa), _ = y ? true : a.OgN, Z = i.useCallback(() => {
    if (y && (null == k ? true : k.guildId) != null)(0, u.closeUserProfileModal)(), (0, c.uL)(g.Z5c.CHANNELS_GAME_SHOP(k.guildId, 0, w.skuId, x.slug));
    else {
      if (C) return;
      (0, p.P)(x, {
        isGift: true,
        giftRecipient: j,
        giftingOrigin: S
      })
    }
  }, [y, null == k ? true : k.guildId, w.skuId, x, C, j, S]), R = i.useCallback(() => P ? (0, n.jsx)("div", {
    className: b.itemIcon,
    children: (0, n.jsx)(s.u, {
      text: I.intl.formatToPlainString(I.t.p3RmJF, {
        username: m.ZP.getName(j)
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
  }) : null, [P, j]), F = i.useCallback(() => (0, n.jsx)(O.A, {
    shape: "custom",
    containerClassName: b.card,
    backgroundImageClassName: b.cardBackgroundImage,
    foregroundImageClassName: b.cardImage,
    sku: x
  }), [x]);
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
  }({}, v), r = r = {
    cardRef: N,
    accessibleLabel: T,
    onCardClick: Z,
    buttonCTALabel: L,
    buttonIcon: _,
    isOwned: C,
    renderItemPreview: F,
    renderSourceIcon: R
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