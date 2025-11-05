/** Chunk was on 94072 **/
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
      showIcons: h = false
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
    item: S,
    isOwner: v,
    giftingOrigin: w = g.Wt.USER_PROFILE_WISHLIST
  } = P, k = S.sku, x = k.applicationId, C = (0, a.q)(x), E = i.useRef(null), [N] = (0, l.Wu)([d.Z], () => [d.Z.hasSentGift(S.skuId, j.id)], [S.skuId, j.id]), T = S.skuName, Z = v ? I.intl.string(I.t.FdGl5A) : I.intl.string(I.t.ilhtIa), L = v ? true : o.OgN, R = i.useCallback(() => {
    if (v && (null == C ? true : C.guildId) != null)(0, u.closeUserProfileModal)(), (0, c.uL)(m.Z5c.CHANNELS_GAME_SHOP(C.guildId, 0, S.skuId, k.slug));
    else {
      if (N) return;
      (0, b.P)(k, {
        isGift: true,
        giftRecipient: j,
        giftingOrigin: w
      })
    }
  }, [v, null == C ? true : C.guildId, S.skuId, k, N, j, w]), _ = i.useCallback(() => h ? (0, n.jsx)("div", {
    className: y.itemIcon,
    children: (0, n.jsx)(s.u, {
      text: I.intl.formatToPlainString(I.t.p3RmJF, {
        username: O.ZP.getName(j)
      }),
      position: "top",
      children: (0, n.jsx)(o.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: y.itemIconHeart
      })
    })
  }) : null, [h, j]), A = i.useCallback(() => (0, n.jsx)(p.A, {
    shape: "custom",
    containerClassName: y.card,
    backgroundImageClassName: y.cardBackgroundImage,
    foregroundImageClassName: y.cardImage,
    sku: k
  }), [k]);
  return (0, n.jsx)(f.Z, (t = function(e) {
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
    cardRef: E,
    accessibleLabel: T,
    onCardClick: R,
    buttonCTALabel: Z,
    buttonIcon: L,
    isOwned: N,
    renderItemPreview: A,
    renderSourceIcon: _
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