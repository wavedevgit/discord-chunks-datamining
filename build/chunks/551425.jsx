/** Chunk was on 92446 **/
/** chunk id: 551425, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.js"),
  Chunk876917 = require("./876917.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk609887 = require("./609887.js");
let g = Chunk481060.EFr.SIZE_152,
  y = (0, Chunk1585.y9)(g),
  O = t => {
    var e, n;
    let {
      item: r
    } = t, a = (0, s.e7)([p.default], () => p.default.getCurrentUser()), {
      avatarDecorationSrc: c,
      avatarPlaceholderSrc: u,
      eventHandlers: d
    } = (0, o.Z)({
      user: a,
      avatarDecorationOverride: r,
      size: y
    });
    return <div className={m.avatarDecorationPreview}><l.qEK{...e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, d), n = n = {
        "aria-label": r.label,
        src: u,
        avatarDecoration: c,
        size: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e} /></div>
  },
  b = t => {
    let {
      item: e
    } = t;
    return <div className={m.profileEffectPreview}><d.Z isHovering={true} profileEffectId={null == e ? true : e.id} /></div>
  },
  j = t => {
    let {
      item: e
    } = t;
    return <div className={m.nameplatePreview}><h.Z nameplate={e} className={m.nameplate} nameplatePreviewSize={"xlarge"} isHighlighted={true} showPlaceholderUser={true} /></div>
  },
  S = t => {
    let {
      giftCode: e
    } = t, n = (0, s.e7)([f.Z], () => f.Z.getProduct(e.skuId)), l = null == n ? true : n.items[0];
    switch (null == l ? true : l.type) {
      case r.Z.AVATAR_DECORATION:
        return <O item={l} />;
      case r.Z.PROFILE_EFFECT:
        return <b item={l} />;
      case r.Z.NAMEPLATE:
        return <j item={l} />;
      default:
        return null != e.giftStyle ? <u.Z defaultAnimationState={c.SR.ACTION} idleAnimationState={c.SR.LOOP} className={m.giftAnimation} giftStyle={e.giftStyle} /> : null
    }
  }