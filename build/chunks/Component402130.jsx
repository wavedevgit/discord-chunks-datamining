/** Chunk was on 91053 **/
/** chunk id: 402130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk788111 = require("./788111.js"),
  Chunk60577 = require("./60577.js"),
  Chunk184301 = require("./184301.js"),
  Chunk124823 = require("./124823.jsx"),
  Chunk550818 = require("./550818.jsx"),
  Chunk983559 = require("./983559.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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
}

function b(e) {
  let {
    channel: t
  } = e, [n] = t.recipients, b = (0, l.e7)([s.default], () => s.default.getUser(n)), _ = (0, l.e7)([s.default], () => s.default.getCurrentUser()), y = (0, d.Z)(), [x, v] = (0, c.Z)(n);
  if (i.useEffect(() => {
      (0, u.Z)(null != b ? b : n, {
        type: "sidebar",
        withMutualFriendsCount: (null == b ? true : b.bot) !== true,
        withMutualFriends: false,
        withMutualGuilds: true,
        channelId: t.id
      })
    }, [b, n, t.id]), null == b || null == _ || !y) return null;
  let j = "user-profile-sidebar-heading-".concat(b.id),
    O = o.ZP.getName(null, t.id, b);
  return (0, r.jsx)("aside", {
    "aria-labelledby": j,
    children: (0, r.jsx)(a.y5t, {
      component: (0, r.jsx)(a.nn4, {
        children: (0, r.jsx)(a.H, {
          id: j,
          children: g.intl.format(g.t.KRe1Fk, {
            name: O
          })
        })
      }),
      children: x ? (0, r.jsx)(h.Z, m({
        user: b,
        currentUser: _,
        onHide: v
      }, e)) : b.isNonUserBot() ? (0, r.jsx)(p.Z, m({
        user: b,
        currentUser: _
      }, e)) : (0, r.jsx)(f.Z, m({
        user: b,
        currentUser: _
      }, e))
    })
  })
}