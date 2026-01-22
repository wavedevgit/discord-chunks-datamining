/** Chunk was on 4918 **/
/** chunk id: 792852, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  P: () => i
}), require("./896048.js");
var Chunk353640 = require("./353640.js");
let r = {
    query: "",
    sortOrder: "descending",
    selectedGameId: null,
    selectedUserIds: new Set,
    selectedActivity: null,
    selectedGuildId: null,
    selectedYear: null
  },
  i = (0, Chunk353640.v)(e => {
    var t, l;
    return t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, r), l = l = {
      setQuery: t => e({
        query: t
      }),
      setSortOrder: t => e({
        sortOrder: t
      }),
      setSelectedGameId: t => e({
        selectedGameId: t
      }),
      setSelectedUserIds: t => e({
        selectedUserIds: t
      }),
      toggleUserId: t => e(e => {
        let l = new Set(e.selectedUserIds);
        return l.has(t) ? l.delete(t) : l.add(t), {
          selectedUserIds: l
        }
      }),
      setSelectedActivity: t => e({
        selectedActivity: t
      }),
      setSelectedGuildId: t => e({
        selectedGuildId: t
      }),
      setSelectedYear: t => e({
        selectedYear: t
      }),
      clearFilters: () => e({
        selectedUserIds: new Set,
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null
      }),
      resetFilters: () => e(r)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        l.push.apply(l, n)
      }
      return l
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
    }), t
  })