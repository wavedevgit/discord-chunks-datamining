/** Chunk was on 21738 **/
/** chunk id: 281489, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk988647 = require("./988647.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk641017 = require("./641017.js");
let h = e => {
    let {
      member: t,
      empty: n,
      guildId: l
    } = e, a = i.useRef(null);
    return n ? (0, r.jsx)("div", {
      className: p._b
    }) : null == t ? (0, r.jsx)("div", {
      className: p.j7,
      children: (0, r.jsx)(u.A, {
        className: p.s$
      })
    }) : (0, r.jsx)("div", {
      className: p.sR,
      children: (0, r.jsx)(c.A, {
        targetElementRef: a,
        userId: t.id,
        guildId: l,
        newAnalyticsLocations: [o.A.AVATAR],
        position: "left",
        clickTrap: true,
        children: e => {
          var n, i;
          return (0, r.jsx)(s.euF, (n = function(e) {
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
            size: s._3J.SIZE_24,
            className: p.pO
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
  g = e => {
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
    let g = a()(n).filter(d.Vq).take(l).map(e => (0, r.jsx)(h, {
      member: e,
      guildId: s
    }, e.id)).value();
    for (let e = 0; e < o && g.length < l; e++) g.push((0, r.jsx)(h, {
      guildId: s
    }, "unknown-member-".concat(e)));
    let m = c - u - o;
    for (let e = 0; e < m && g.length < l; e++) g.push((0, r.jsx)(h, {
      empty: true,
      guildId: s
    }, "empty-member-".concat(e)));
    let f = Math.max(Math.min(c - g.length, 99), 0);
    if (1 === f) {
      let e = n[l];
      g.push((0, r.jsx)(h, {
        member: e,
        guildId: s
      }, e.id))
    }
    return (0, r.jsx)("div", {
      className: p.iE,
      children: (0, r.jsxs)("div", {
        className: p.S3,
        children: [g, f > 1 ? (0, r.jsxs)("div", {
          className: p.Hi,
          children: ["+", f]
        }) : null]
      })
    })
  }