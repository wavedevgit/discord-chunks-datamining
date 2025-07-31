/** Chunk was on 96887 **/
r.d(t, {
  R: () => p
});
var a = r(255367);
r(73800);
var n = r(120356),
  i = r.n(n),
  s = r(979554),
  o = r(481060),
  l = r(1585),
  c = r(125988),
  d = r(998502),
  u = r(388032),
  f = r(614490);
let v = d.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK,
  p = e => {
    var t, r;
    let {
      item: n,
      user: d,
      isHighlighted: p = !1,
      isPurchased: h = !1,
      avatarSize: m = o.EFr.SIZE_152,
      avatarPlaceholderSrc: g
    } = e, y = (0, l.y9)(m), {
      avatarDecorationSrc: P,
      eventHandlers: b,
      avatarPlaceholderSrc: w
    } = (0, c.Z)({
      user: d,
      avatarDecorationOverride: (null == n ? void 0 : n.type) === s.Z.AVATAR_DECORATION ? n : void 0,
      size: y,
      onlyAnimateOnHover: !p
    }), O = u.intl.formatToPlainString(u.t.Do2lxM, {
      a11y_text: n.label
    });
    return (0, a.jsx)(v, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = r[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a
        })
      }
      return e
    }({}, b), r = r = {
      avatarDecoration: P,
      src: p ? null == d ? void 0 : d.getAvatarURL(void 0, 152, !0) : null != g ? g : w,
      imageClassName: p ? f.fadeInAvatarImg : void 0,
      className: i()(f.avatar, {
        [f.avatarPurchased]: h && !p
      }),
      size: m,
      "aria-label": O
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r.push.apply(r, a)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }