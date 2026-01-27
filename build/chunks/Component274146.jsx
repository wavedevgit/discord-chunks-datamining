/** Chunk was on 77870 **/
/** chunk id: 274146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk208882 = require("./208882.js"),
  Chunk938764 = require("./938764.js"),
  Chunk519480 = require("./519480.js"),
  Chunk352123 = require("./352123.js"),
  Chunk372536 = require("./372536.jsx"),
  Chunk268965 = require("./268965.jsx"),
  Chunk667369 = require("./667369.js"),
  Chunk647026 = require("./647026.jsx"),
  Chunk946116 = require("./946116.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk10544 = require("./10544.js");
let v = e => {
  let {
    channel: t,
    guild: v
  } = e, {
    currentCategoryId: x,
    directoryEntries: E,
    categoryCounts: C,
    allEntriesCount: S,
    isLoading: I
  } = (0, i.cf)([h.A], () => {
    let e = h.A.getCurrentCategoryId(t.id),
      n = h.A.getDirectoryEntries(t.id, e === y.mU.ALL ? null : e),
      r = h.A.getDirectoryCategoryCounts(t.id);
    return {
      currentCategoryId: e,
      directoryEntries: n,
      categoryCounts: r,
      allEntriesCount: h.A.getDirectoryAllEntriesCount(t.id),
      isLoading: h.A.isFetching()
    }
  });
  l.useEffect(() => () => {
    let e = c.Ay.lastMessageId(t.id);
    null != e && a.h.wait(() => {
      (0, o.ack)(t.id, {
        object: _.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: _.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [t.id]);
  let N = l.useMemo(() => null != E ? (0, b._)(Object.values(E), x) : null, [E, x]),
    {
      mostRecentQuery: T,
      searchFetching: P,
      searchResults: w
    } = (0, i.cf)([p.A], () => {
      let {
        mostRecentQuery: e,
        fetching: n
      } = p.A.getSearchState(t.id);
      return {
        mostRecentQuery: e,
        searchFetching: n,
        searchResults: p.A.getSearchResults(t.id, e)
      }
    }),
    [R, D] = l.useState(T),
    M = "" !== T,
    L = {
      mostRecentQuery: T
    },
    k = l.useRef(L);
  l.useEffect(() => {
    k.current = L
  }), l.useEffect(() => {
    let {
      mostRecentQuery: e
    } = k.current;
    d.Yc(t.id), d.YS(t.id), D(e)
  }, [t.id]), l.useEffect(() => {
    u.default.track(_.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: t.id,
      directory_guild_id: v.id,
      primary_category_id: x
    })
  }, [t.id, v.id, x]);
  let G = (0, f.b)(t),
    U = l.useMemo(() => G ? () => {
      (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("6759").then(n.bind(n, 953722));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
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
          }({}, n), i = i = {
            directoryGuildName: v.name,
            directoryGuildId: v.id,
            directoryChannelId: t.id,
            currentCategoryId: x === y.mU.ALL ? null : x
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    } : true, [G, v.name, v.id, t.id, x]),
    B = e => {
      0 !== R.trim().length && e.key === O.dh.ENTER && (d.Se(t.id, R), u.default.track(_.HAw.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: t.id,
        directory_guild_id: v.id
      }))
    },
    V = () => {
      D(""), d.BA(t.id)
    };
  return M ? (0, r.jsx)(A.A, {
    searchQuery: R,
    setSearchQuery: D,
    mostRecentQuery: T,
    handleSearchKeyPress: B,
    handleClearSearch: V,
    handleCreateOrAddGuild: U,
    searchResults: w,
    searchFetching: P
  }) : null == N && null == x ? (0, r.jsx)("div", {
    className: j.$$,
    children: (0, r.jsx)(s.y$y, {
      className: j.u1
    })
  }) : (null == N ? true : N.length) === 0 && null == x ? (0, r.jsx)("div", {
    className: j.$$,
    children: (0, r.jsx)(g.A, {
      guild: v,
      onAddGuild: U
    })
  }) : (0, r.jsx)(m.A, {
    channel: t,
    searchQuery: R,
    setSearchQuery: D,
    handleSearchKeyPress: B,
    handleClearSearch: V,
    handleCreateOrAddGuild: U,
    currentCategoryId: x,
    handleSelectCategory: e => {
      d.uU(t.id, e)
    },
    directoryEntries: N,
    categoryCounts: C,
    allEntriesCount: S,
    isLoading: I
  })
}