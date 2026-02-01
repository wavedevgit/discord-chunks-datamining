/** Chunk was on 42402 **/
/** chunk id: 573956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk826673 = require("./826673.js"),
  Chunk591552 = require("./591552.js"),
  Chunk202776 = require("./202776.js"),
  Chunk454058 = require("./454058.js"),
  Chunk976860 = require("./976860.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk32603 = require("./32603.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    guild: t,
    selected: _
  } = e, v = (0, p.A)(t), E = (0, u.JZ)(s.M.CHANNEL_BROWSER_NEW_BADGE_NUX), C = (0, i.yK)([h.A], () => Array.from(h.A.getNewChannelIds(t.id)).filter(e => h.A.shouldIndicateNewChannel(t.id, e))), S = (0, i.bG)([f.Ay], () => f.Ay.hasUnread(t.id, j.P.GUILD_ONBOARDING_QUESTION)), I = C.length > b.rR, N = (0, i.bG)([d.A, f.Ay], () => {
    let e = d.A.lastFetchedAt(t.id),
      n = f.Ay.lastMessageId(t.id, j.P.GUILD_ONBOARDING_QUESTION);
    if (null == n) returnfalse;
    let r = m.default.extractTimestamp(n);
    return null != e && e > r
  }), T = l.useCallback(() => {
    (0, g.pX)(y.BVt.CHANNEL(t.id, v ? O.VV.CUSTOMIZE_COMMUNITY : O.VV.CHANNEL_BROWSER))
  }, [t.id, v]), P = l.useCallback(e => {
    (0, c.L3)(e, async () => {
      let {
        default: e
      } = await n.e("30412").then(n.bind(n, 807431));
      return n => {
        var l, i;
        return (0, r.jsx)(e, (l = function(e) {
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
        }({}, n), i = i = {
          guild: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    })
  }, [t]), w = null;
  return E && !S && !I || _ || N || (w = (0, r.jsx)(o.LpS, {
    color: a.A.colors.BADGE_BACKGROUND_BRAND.css,
    text: x.intl.string(x.t.y2b7CA)
  })), (0, r.jsx)(A.G, {
    id: "channels-".concat(t.id),
    renderIcon: e => (0, r.jsx)(o.kiI, {
      size: "md",
      color: "currentColor",
      className: e
    }),
    text: v ? x.intl.string(x.t.h9mGOP) : x.intl.string(x.t.et6wav),
    selected: _,
    onClick: T,
    onContextMenu: P,
    trailing: w
  })
}