/** Chunk was on 15647 **/
/** chunk id: 995993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk88448 = require("./88448.js");

function E(e) {
  let {
    guild: t,
    selected: E
  } = e, x = (0, p.Z)(t), S = (0, u.Nj)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX), I = (0, l.Wu)([f.Z], () => Array.from(f.Z.getNewChannelIds(t.id)).filter(e => f.Z.shouldIndicateNewChannel(t.id, e))), P = (0, l.e7)([g.ZP], () => g.ZP.hasUnread(t.id, v.W.GUILD_ONBOARDING_QUESTION)), N = I.length > b.Cb, Z = (0, l.e7)([d.Z, g.ZP], () => {
    let e = d.Z.lastFetchedAt(t.id),
      n = g.ZP.lastMessageId(t.id, v.W.GUILD_ONBOARDING_QUESTION);
    if (null == n) returnfalse;
    let r = m.default.extractTimestamp(n);
    return null != e && e > r
  }), T = i.useCallback(() => {
    (0, h.uL)(O.Z5c.CHANNEL(t.id, x ? y.oC.CUSTOMIZE_COMMUNITY : y.oC.CHANNEL_BROWSER))
  }, [t.id, x]), w = i.useCallback(e => {
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
  return S && !P && !N || E || Z || (A = (0, r.jsx)(s.IGR, {
    color: a.Z.colors.BADGE_BRAND_BG.css,
    text: j.intl.string(j.t.y2b7CA),
    className: C.newChannel
  })), (0, r.jsx)(_.m, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, r.jsx)(s.H$4, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: x ? j.intl.string(j.t.h9mGOP) : j.intl.string(j.t.et6wav),
    selected: E,
    onClick: T,
    onContextMenu: w,
    trailing: A
  })
}