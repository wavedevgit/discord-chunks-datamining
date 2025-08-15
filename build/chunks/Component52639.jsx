/** Chunk was on 73551 **/
/** chunk id: 52639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk439178 = require("./439178.js");

function _(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: _
  } = (0, l.ZP)(), {
    context: C
  } = (0, s.KZ)(), x = (0, i.Z)(), {
    mutualFriendsCount: v,
    mutualFriends: j,
    mutualGuilds: O
  } = (0, c.Z)(t), E = !t.bot && null != v && v > 0, S = null != O && O.length > 0;
  return E || S ? (0, r.jsxs)(m.Z.Overlay, {
    className: y.overlay,
    children: [S && (0, r.jsx)(g.Z, {
      section: "MUTUAL_GUILDS",
      header: b.intl.string(b.t["4lTDZm"]),
      listClassName: y.list,
      items: O.map(e => {
        let {
          guild: n,
          nick: i
        } = e;
        return (0, r.jsx)(f.Z, {
          user: t,
          guild: n,
          nick: i,
          onSelect: () => (0, o.X)(n.id)
        }, n.id)
      })
    }), S && E && (0, r.jsx)(p.Z, {
      className: y.divider
    }), E && (0, r.jsx)(g.Z, {
      section: "MUTUAL_FRIENDS",
      header: b.intl.string(b.t["0mTJ3t"]),
      listClassName: y.list,
      onExpand: () => (0, u.Z)(t.id, x),
      items: null == j ? Array.from({
        length: v
      }).map((e, t) => (0, r.jsxs)("div", {
        className: y.loadingMutualFriend,
        children: [(0, r.jsx)(a.ZT, {
          width: 40,
          opacity: .08
        }), (0, r.jsx)(a.ZT, {
          width: 135,
          opacity: .08
        })]
      }, t)) : j.map(e => {
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
            (0, d.openUserProfileModal)((e = function(e) {
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
            }({}, C), t = t = {
              userId: i.id,
              sourceAnalyticsLocations: _
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