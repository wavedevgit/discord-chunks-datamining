/** Chunk was on 1272 **/
/** chunk id: 599706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk463618 = require("./463618.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk436657 = require("./436657.js");
let f = e => {
    let {
      member: t,
      empty: n,
      guildId: l
    } = e, a = i.useRef(null);
    return n ? (0, r.jsx)("div", {
      className: p.partyMemberEmpty
    }) : null == t ? (0, r.jsx)("div", {
      className: p.partyMemberUnknown,
      children: (0, r.jsx)(u.Z, {
        className: p.partyMemberUnknownIcon
      })
    }) : (0, r.jsx)("div", {
      className: p.partyMemberKnown,
      children: (0, r.jsx)(c.Z, {
        targetElementRef: a,
        userId: t.id,
        guildId: l,
        newAnalyticsLocations: [o.Z.AVATAR],
        position: "left",
        clickTrap: true,
        children: e => {
          var n, i;
          return (0, r.jsx)(s.qEK, (n = function(e) {
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
          }({}, e), i = i = {
            ref: a,
            src: t.getAvatarURL(l, 24),
            "aria-label": t.username,
            size: s.EFr.SIZE_24,
            className: p.partyMember
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    })
  },
  m = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: l = 2,
      guildId: s
    } = e, {
      unknownSize: o,
      totalSize: c,
      knownSize: u
    } = t;
    if (c < i) return null;
    let m = a()(n).filter(d.lm).take(l).map(e => (0, r.jsx)(f, {
      member: e,
      guildId: s
    }, e.id)).value();
    for (let e = 0; e < o && m.length < l; e++) m.push((0, r.jsx)(f, {
      guildId: s
    }, "unknown-member-".concat(e)));
    let h = c - u - o;
    for (let e = 0; e < h && m.length < l; e++) m.push((0, r.jsx)(f, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let g = Math.max(Math.min(c - m.length, 99), 0);
    if (1 === g) {
      let e = n[l];
      m.push((0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: p.wrapper,
      children: (0, r.jsxs)("div", {
        className: p.partyMembers,
        children: [m, g > 1 ? (0, r.jsxs)("div", {
          className: p.partyMemberOverflow,
          children: ["+", g]
        }) : null]
      })
    })
  }