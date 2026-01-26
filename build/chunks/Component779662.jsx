/** Chunk was on 73091 **/
/** chunk id: 779662, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk33851 = require("./33851.js"),
  a = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk70738 = require("./70738.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let D = [Chunk70738.mF.ORDER_BY_GUILD_JOINED_AT_DESC, Chunk70738.mF.ORDER_BY_GUILD_JOINED_AT_ASC, Chunk70738.mF.ORDER_BY_USER_ID_DESC, Chunk70738.mF.ORDER_BY_USER_ID_ASC];

function E(e) {
  let {
    guildId: t,
    onClose: r
  } = e, l = (0, o.bG)([_.A], () => _.A.getSearchStateByGuildId(t), [t], a()), E = c.useCallback(e => {
    var r, n;
    (0, u.Ld)(t, (r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, l), n = n = {
      selectedSort: e
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
    }), r))
  }, [t, l]);
  return (0, n.jsx)(s.W1t, {
    "data-menu-migrated": true,
    navId: "members-table-sort-menu",
    onClose: () => {
      null == r || r()
    },
    "aria-label": O.intl.string(O.t["u/7Rdc"]),
    onSelect: b.tEg,
    children: (0, n.jsx)(s.rXV, {
      children: D.map(e => {
        var t;
        let r = function(e) {
          switch (e) {
            case i.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
              return O.intl.string(O.t.V7zCwB);
            case i.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
              return O.intl.string(O.t.l2Zaet);
            case i.mF.ORDER_BY_USER_ID_DESC:
              return O.intl.string(O.t.xMA6RG);
            case i.mF.ORDER_BY_USER_ID_ASC:
              return O.intl.string(O.t.bUKkZx);
            default:
              return null
          }
        }(e);
        return null != r && (0, n.jsx)(s.iDA, {
          id: "members-table-sort-".concat(e),
          label: r,
          checked: (t = l.selectedSort) === i.mF.ORDER_BY_UNSPECIFIED || null == t ? e === i.mF.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
          disabled: false,
          action: () => E(e),
          group: "members-table-sort"
        }, "members-table-sort-".concat(e))
      })
    })
  })
}