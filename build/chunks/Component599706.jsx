/** Chunk was on 1272 **/
/** chunk id: 599706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk456077 = require("./456077.jsx"),
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
  h = e => {
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
    let h = a()(n).filter(d.lm).take(l).map(e => (0, r.jsx)(f, {
      member: e,
      guildId: s
    }, e.id)).value();
    for (let e = 0; e < o && h.length < l; e++) h.push((0, r.jsx)(f, {
      guildId: s
    }, "unknown-member-".concat(e)));
    let g = c - u - o;
    for (let e = 0; e < g && h.length < l; e++) h.push((0, r.jsx)(f, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let m = Math.max(Math.min(c - h.length, 99), 0);
    if (1 === m) {
      let e = n[l];
      h.push((0, r.jsx)(f, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: p.wrapper,
      children: (0, r.jsxs)("div", {
        className: p.partyMembers,
        children: [h, m > 1 ? (0, r.jsxs)("div", {
          className: p.partyMemberOverflow,
          children: ["+", m]
        }) : null]
      })
    })
  }