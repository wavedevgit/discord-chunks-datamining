/** Chunk was on 30025 **/
/** chunk id: 52639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk566898 = require("./566898.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk252417 = require("./252417.jsx"),
  Chunk821179 = require("./821179.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk686625 = require("./686625.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398095 = require("./398095.js");

function y(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: y
  } = (0, l.ZP)(), {
    context: x
  } = (0, o.KZ)(), O = (0, i.Z)(), {
    mutualFriendsCount: j,
    mutualFriends: v,
    mutualGuilds: C
  } = (0, c.Z)(t), I = !t.bot && null != j && j > 0, S = null != C && C.length > 0;
  return I || S ? (0, r.jsxs)(g.Z.Overlay, {
    className: _.overlay,
    children: [S && (0, r.jsx)(m.Z, {
      section: "MUTUAL_GUILDS",
      header: b.intl.string(b.t["4lTDZq"]),
      listClassName: _.list,
      items: C.map(e => {
        let {
          guild: n,
          nick: i
        } = e;
        return (0, r.jsx)(f.Z, {
          user: t,
          guild: n,
          nick: i,
          onSelect: () => (0, s.X)(n.id)
        }, n.id)
      })
    }), S && I && (0, r.jsx)(p.Z, {
      className: _.divider
    }), I && (0, r.jsx)(m.Z, {
      section: "MUTUAL_FRIENDS",
      header: b.intl.string(b.t["0mTJ3j"]),
      listClassName: _.list,
      onExpand: () => (0, d.Z)(t.id, O),
      items: null == v ? Array.from({
        length: j
      }).map((e, t) => (0, r.jsxs)("div", {
        className: _.loadingMutualFriend,
        children: [(0, r.jsx)(a.ZT, {
          width: 40,
          opacity: .08
        }), (0, r.jsx)(a.ZT, {
          width: 135,
          opacity: .08
        })]
      }, t)) : v.map(e => {
        let {
          key: t,
          user: i,
          status: l
        } = e;
        return (0, r.jsx)(h.Z, {
          user: i,
          status: l,
          channelId: n,
          onSelect: () => {
            var e, t;
            (0, u.openUserProfileModal)((e = function(e) {
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
            }({}, x), t = t = {
              userId: i.id,
              sourceAnalyticsLocations: y
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
          }
        }, t)
      })
    })]
  }) : null
}