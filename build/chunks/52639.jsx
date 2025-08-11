/** Chunk was on 49152 **/
/** chunk id: 52639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.js"),
  Chunk566898 = require("./566898.js"),
  Chunk769654 = require("./769654.js"),
  Chunk785717 = require("./785717.js"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk483517 = require("./483517.js"),
  Chunk252417 = require("./252417.js"),
  Chunk821179 = require("./821179.js"),
  Chunk502762 = require("./502762.js"),
  Chunk686625 = require("./686625.js"),
  Chunk388032 = require("./388032.js"),
  Chunk954767 = require("./954767.js");

function x(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: x
  } = (0, l.ZP)(), {
    context: _
  } = (0, o.KZ)(), j = (0, i.Z)(), {
    mutualFriendsCount: O,
    mutualFriends: v,
    mutualGuilds: C
  } = (0, c.Z)(t), E = !t.bot && null != O && O > 0, S = null != C && C.length > 0;
  return E || S ? <g.Z.Overlay className={y.overlay}>{S && <m.Z section={"MUTUAL_GUILDS"} header={b.intl.string(b.t["4lTDZm"])} listClassName={y.list} items={C.map(e => {
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
      })} />}{S && E && <h.Z className={y.divider} />}{E && <m.Z section={"MUTUAL_FRIENDS"} header={b.intl.string(b.t["0mTJ3t"])} listClassName={y.list} onExpand={() => (0, u.Z)(t.id, j)} items={null == v ? Array.from({
        length: O
      }).map((e, t) => (0, r.jsxs)("div", {
        className: y.loadingMutualFriend,
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
        return (0, r.jsx)(p.Z, {
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
            }({}, _), t = t = {
              userId: i.id,
              sourceAnalyticsLocations: x
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
      })} />}</g.Z.Overlay> : null
}