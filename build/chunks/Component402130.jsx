/** Chunk was on 21087 **/
/** chunk id: 402130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk365943 = require("./365943.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk788111 = require("./788111.js"),
  Chunk60577 = require("./60577.js"),
  Chunk184301 = require("./184301.js"),
  Chunk124823 = require("./124823.jsx"),
  Chunk550818 = require("./550818.jsx"),
  Chunk983559 = require("./983559.jsx"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
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

function y(e) {
  let {
    channel: t
  } = e, [n] = t.recipients, y = (0, l.e7)([o.default], () => o.default.getUser(n)), x = (0, l.e7)([o.default], () => o.default.getCurrentUser()), j = (0, d.Z)(), [_, O] = (0, u.Z)(n);
  if (i.useEffect(() => {
      (0, s.t)()
    }, []), i.useEffect(() => {
      (0, h.Z)(null != y ? y : n, {
        type: "sidebar",
        withMutualFriendsCount: (null == y ? true : y.bot) !== true,
        withMutualFriends: false,
        withMutualGuilds: true,
        channelId: t.id
      })
    }, [y, n, t.id]), null == y || null == x || !j) return null;
  let v = "user-profile-sidebar-heading-".concat(y.id),
    C = c.ZP.getName(null, t.id, y);
  return (0, r.jsx)("aside", {
    "aria-labelledby": v,
    children: (0, r.jsx)(a.y5t, {
      component: (0, r.jsx)(a.nn4, {
        children: (0, r.jsx)(a.H, {
          id: v,
          children: m.intl.format(m.t.KRe1Fh, {
            name: C
          })
        })
      }),
      children: _ ? (0, r.jsx)(f.Z, b({
        user: y,
        currentUser: x,
        onHide: O
      }, e)) : y.isNonUserBot() ? (0, r.jsx)(p.Z, b({
        user: y,
        currentUser: x
      }, e)) : (0, r.jsx)(g.Z, b({
        user: y,
        currentUser: x
      }, e))
    })
  })
}