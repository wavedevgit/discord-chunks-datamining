/** Chunk was on 94072 **/
/** chunk id: 851397, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk892001 = require("./892001.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk89196 = require("./89196.js"),
  Chunk51144 = require("./51144.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk897986 = require("./897986.js");

function y(e) {
  var t, r, {
      profileOwner: y,
      showIcons: j = false
    } = e,
    h = function(e, t) {
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
    item: P,
    isOwner: S,
    giftingOrigin: v = m.Wt.USER_PROFILE_WISHLIST
  } = h, w = P.sku, k = w.applicationId, x = (0, a.q)(k), C = i.useRef(null), [E] = (0, l.Wu)([f.Z], () => [f.Z.hasSentGift(P.skuId, y.id)], [P.skuId, y.id]), N = P.skuName, T = S ? g.intl.string(g.t.FdGl5A) : g.intl.string(g.t.ilhtIa), Z = S ? true : o.OgN, L = i.useCallback(() => {
    if (S && (null == x ? true : x.guildId) != null)(0, c.closeUserProfileModal)(), (0, O.g)({
      skuId: w.id,
      applicationId: x.id,
      guildId: x.guildId,
      isStorefront: false
    });
    else {
      if (E) return;
      (0, p.P)(w, {
        isGift: true,
        giftRecipient: y,
        giftingOrigin: v
      })
    }
  }, [S, x, E, w, y, v]), R = i.useCallback(() => j ? (0, n.jsx)("div", {
    className: I.itemIcon,
    children: (0, n.jsx)(s.u, {
      text: g.intl.formatToPlainString(g.t.p3RmJF, {
        username: d.ZP.getName(y)
      }),
      position: "top",
      children: (0, n.jsx)(o.h_8, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        colorClass: I.itemIconHeart
      })
    })
  }) : null, [j, y]), _ = i.useCallback(() => (0, n.jsx)(b.A, {
    shape: "custom",
    containerClassName: I.card,
    backgroundImageClassName: I.cardBackgroundImage,
    foregroundImageClassName: I.cardImage,
    sku: w
  }), [w]);
  return (0, n.jsx)(u.Z, (t = function(e) {
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
  }({}, h), r = r = {
    cardRef: C,
    accessibleLabel: N,
    onCardClick: L,
    buttonCTALabel: T,
    buttonIcon: Z,
    isOwned: E,
    renderItemPreview: _,
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