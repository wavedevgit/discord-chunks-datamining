/** Chunk was on 35894 **/
/** chunk id: 779662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk70738 = require("./70738.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = [Chunk70738.mF.ORDER_BY_GUILD_JOINED_AT_DESC, Chunk70738.mF.ORDER_BY_GUILD_JOINED_AT_ASC, Chunk70738.mF.ORDER_BY_USER_ID_DESC, Chunk70738.mF.ORDER_BY_USER_ID_ASC];

function b(e) {
  let {
    guildId: t,
    onClose: n
  } = e, i = (0, a.bG)([u.A], () => u.A.getSearchStateByGuildId(t), [t], o()), b = l.useCallback(e => {
    var n, r;
    (0, d.Ld)(t, (n = function(e) {
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
  return (0, r.jsx)(s.W1t, {
    navId: "members-table-sort-menu",
    onClose: () => {
      null == n || n()
    },
    "aria-label": m.intl.string(m.t["u/7Rdc"]),
    onSelect: C.tEg,
    children: (0, r.jsx)(s.rXV, {
      children: p.map(e => {
        var t;
        return (0, r.jsx)(s.iDA, {
          id: "members-table-sort-".concat(e),
          label: function(e) {
            switch (e) {
              case c.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                return m.intl.string(m.t.V7zCwB);
              case c.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                return m.intl.string(m.t.l2Zaet);
              case c.mF.ORDER_BY_USER_ID_DESC:
                return m.intl.string(m.t.xMA6RG);
              case c.mF.ORDER_BY_USER_ID_ASC:
                return m.intl.string(m.t.bUKkZx);
              default:
                return null
            }
          }(e),
          checked: (t = i.selectedSort) === c.mF.ORDER_BY_UNSPECIFIED || null == t ? e === c.mF.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
          disabled: false,
          action: () => b(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}