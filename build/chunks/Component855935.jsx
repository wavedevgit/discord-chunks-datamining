/** Chunk was on 6850 **/
/** chunk id: 855935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk498607 = require("./498607.js"),
  o = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588215 = require("./588215.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = [Chunk588215.d$.ORDER_BY_GUILD_JOINED_AT_DESC, Chunk588215.d$.ORDER_BY_GUILD_JOINED_AT_ASC, Chunk588215.d$.ORDER_BY_USER_ID_DESC, Chunk588215.d$.ORDER_BY_USER_ID_ASC];

function f(e) {
  let {
    guildId: t,
    onClose: n
  } = e, i = (0, a.e7)([u.Z], () => u.Z.getSearchStateByGuildId(t), [t], o()), f = l.useCallback(e => {
    var n, r;
    (0, d.Dr)(t, (n = function(e) {
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
    }({}, i), r = r = {
      selectedSort: e
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n))
  }, [t, i]);
  return (0, r.jsx)(s.v2r, {
    navId: "members-table-sort-menu",
    onClose: () => {
      null == n || n()
    },
    "aria-label": m.intl.string(m.t["u/7Rdc"]),
    onSelect: C.dG4,
    children: (0, r.jsx)(s.kSQ, {
      children: b.map(e => {
        var t;
        return (0, r.jsx)(s.k5B, {
          id: "members-table-sort-".concat(e),
          label: function(e) {
            switch (e) {
              case c.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
                return m.intl.string(m.t.V7zCwB);
              case c.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
                return m.intl.string(m.t.l2Zaet);
              case c.d$.ORDER_BY_USER_ID_DESC:
                return m.intl.string(m.t.xMA6RG);
              case c.d$.ORDER_BY_USER_ID_ASC:
                return m.intl.string(m.t.bUKkZx);
              default:
                return null
            }
          }(e),
          checked: (t = i.selectedSort) === c.d$.ORDER_BY_UNSPECIFIED || null == t ? e === c.d$.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
          disabled: false,
          action: () => f(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}