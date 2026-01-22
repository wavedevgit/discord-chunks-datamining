/** Chunk was on 97492 **/
/** chunk id: 328776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk215530 = require("./215530.js"),
  Chunk168015 = require("./168015.js"),
  Chunk454719 = require("./454719.js"),
  Chunk10635 = require("./10635.jsx"),
  Chunk318162 = require("./318162.jsx"),
  Chunk762561 = require("./762561.jsx"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
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

function m(e) {
  let {
    channel: t
  } = e, [n] = t.recipients, m = (0, i.bG)([s.default], () => s.default.getUser(n)), A = (0, i.bG)([s.default], () => s.default.getCurrentUser()), y = (0, u.A)(), [O, j] = (0, c.A)(n);
  if (l.useEffect(() => {
      (0, d.A)(null != m ? m : n, {
        type: "sidebar",
        withMutualFriendsCount: (null == m ? true : m.bot) !== true,
        withMutualFriends: false,
        withMutualGuilds: true,
        channelId: t.id
      })
    }, [m, n, t.id]), null == m || null == A || !y) return null;
  let v = "user-profile-sidebar-heading-".concat(m.id),
    x = o.Ay.getName(null, t.id, m);
  return (0, r.jsx)("aside", {
    "aria-labelledby": v,
    children: (0, r.jsx)(a.Fmo, {
      component: (0, r.jsx)(a.AC4, {
        children: (0, r.jsx)(a.H, {
          id: v,
          children: b.intl.format(b.t.KRe1Fk, {
            name: x
          })
        })
      }),
      children: O ? (0, r.jsx)(p.A, g({
        user: m,
        currentUser: A,
        onHide: j
      }, e)) : m.isNonUserBot() ? (0, r.jsx)(f.A, g({
        user: m,
        currentUser: A
      }, e)) : (0, r.jsx)(h.A, g({
        user: m,
        currentUser: A
      }, e))
    })
  })
}