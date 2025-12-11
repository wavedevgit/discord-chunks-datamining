/** Chunk was on 82477 **/
/** chunk id: 995993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk266454 = require("./266454.js"),
  Chunk45966 = require("./45966.js"),
  Chunk31445 = require("./31445.js"),
  Chunk22082 = require("./22082.js"),
  Chunk703656 = require("./703656.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk540126 = require("./540126.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk884874 = require("./884874.js");

function E(e) {
  let {
    guild: t,
    selected: E
  } = e, S = (0, f.Z)(t), I = (0, u.Nj)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX), _ = (0, l.Wu)([h.Z], () => Array.from(h.Z.getNewChannelIds(t.id)).filter(e => h.Z.shouldIndicateNewChannel(t.id, e))), P = (0, l.e7)([g.ZP], () => g.ZP.hasUnread(t.id, j.W.GUILD_ONBOARDING_QUESTION)), N = _.length > m.Cb, Z = (0, l.e7)([d.Z, g.ZP], () => {
    let e = d.Z.lastFetchedAt(t.id),
      n = g.ZP.lastMessageId(t.id, j.W.GUILD_ONBOARDING_QUESTION);
    if (null == n) returnfalse;
    let r = b.default.extractTimestamp(n);
    return null != e && e > r
  }), w = i.useCallback(() => {
    (0, p.uL)(O.Z5c.CHANNEL(t.id, S ? v.oC.CUSTOMIZE_COMMUNITY : v.oC.CHANNEL_BROWSER))
  }, [t.id, S]), T = i.useCallback(e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("8926").then(n.bind(n, 156673));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), l = l = {
          guild: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t]), A = null;
  return I && !P && !N || E || Z || (A = (0, r.jsx)(s.IGR, {
    color: o.Z.colors.BADGE_BACKGROUND_DEFAULT.css,
    text: C.intl.string(C.t.y2b7CA),
    className: x.newChannel
  })), (0, r.jsx)(y.m, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, r.jsx)(s.H$4, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: S ? C.intl.string(C.t.h9mGOP) : C.intl.string(C.t.et6wav),
    selected: E,
    onClick: w,
    onContextMenu: T,
    trailing: A
  })
}