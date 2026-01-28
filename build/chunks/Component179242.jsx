/** Chunk was on 78528 **/
/** chunk id: 179242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk163126 = require("./163126.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk114212 = require("./114212.jsx"),
  Chunk345942 = require("./345942.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk229187 = require("./229187.js"),
  Chunk657331 = require("./657331.js"),
  Chunk21241 = require("./21241.jsx"),
  Chunk503062 = require("./503062.jsx"),
  Chunk51943 = require("./51943.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk359656 = require("./359656.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk576968 = require("./576968.js");

function y(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: y
  } = (0, i.Ay)(), {
    context: _
  } = (0, o.NJ)(), O = (0, l.A)(), {
    mutualFriendsCount: j,
    mutualFriends: v,
    mutualGuilds: x
  } = (0, c.A)(t), E = !t.bot && null != j && j > 0, C = null != x && x.length > 0;
  return E || C ? (0, r.jsxs)(g.A.Overlay, {
    className: A.Lw,
    children: [C && (0, r.jsx)(m.A, {
      section: "MUTUAL_GUILDS",
      header: b.intl.string(b.t["4lTDZq"]),
      listClassName: A.p_,
      items: x.map(e => {
        let {
          guild: n,
          nick: l
        } = e;
        return (0, r.jsx)(f.A, {
          user: t,
          guild: n,
          nick: l,
          onSelect: () => (0, a.u)(n.id)
        }, n.id)
      })
    }), C && E && (0, r.jsx)(p.A, {
      className: A.yF
    }), E && (0, r.jsx)(m.A, {
      section: "MUTUAL_FRIENDS",
      header: b.intl.string(b.t["0mTJ3j"]),
      listClassName: A.p_,
      onExpand: () => (0, u.A)(t.id, O),
      items: null == v ? Array.from({
        length: j
      }).map((e, t) => (0, r.jsxs)("div", {
        className: A.nC,
        children: [(0, r.jsx)(s.FQ, {
          width: 40,
          opacity: .08
        }), (0, r.jsx)(s.FQ, {
          width: 135,
          opacity: .08
        })]
      }, t)) : v.map(e => {
        let {
          key: t,
          user: l,
          status: i
        } = e;
        return (0, r.jsx)(h.A, {
          user: l,
          status: i,
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
              userId: l.id,
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