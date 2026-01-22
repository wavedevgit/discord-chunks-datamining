/** Chunk was on 97492 **/
/** chunk id: 274146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let x = e => {
  let {
    channel: t,
    guild: x
  } = e, {
    currentCategoryId: E,
    directoryEntries: _,
    categoryCounts: C,
    allEntriesCount: S,
    isLoading: I
  } = (0, i.cf)([p.A], () => {
    let e = p.A.getCurrentCategoryId(t.id),
      n = p.A.getDirectoryEntries(t.id, e === y.mU.ALL ? null : e),
      r = p.A.getDirectoryCategoryCounts(t.id);
    return {
      currentCategoryId: e,
      directoryEntries: n,
      categoryCounts: r,
      allEntriesCount: p.A.getDirectoryAllEntriesCount(t.id),
      isLoading: p.A.isFetching()
    }
  });
  l.useEffect(() => () => {
    let e = c.Ay.lastMessageId(t.id);
    null != e && s.h.wait(() => {
      (0, o.ack)(t.id, {
        object: O.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [t.id]);
  let N = l.useMemo(() => null != _ ? (0, m._)(Object.values(_), E) : null, [_, E]),
    {
      mostRecentQuery: T,
      searchFetching: P,
      searchResults: w
    } = (0, i.cf)([f.A], () => {
      let {
        mostRecentQuery: e,
        fetching: n
      } = f.A.getSearchState(t.id);
      return {
        mostRecentQuery: e,
        searchFetching: n,
        searchResults: f.A.getSearchResults(t.id, e)
      }
    }),
    [R, D] = l.useState(T),
    M = "" !== T,
    L = {
      mostRecentQuery: T
    },
    G = l.useRef(L);
  l.useEffect(() => {
    G.current = L
  }), l.useEffect(() => {
    let {
      mostRecentQuery: e
    } = G.current;
    d.Yc(t.id), d.YS(t.id), D(e)
  }, [t.id]), l.useEffect(() => {
    u.default.track(O.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: t.id,
      directory_guild_id: x.id,
      primary_category_id: E
    })
  }, [t.id, x.id, E]);
  let k = (0, h.b)(t),
    U = l.useMemo(() => k ? () => {
      (0, a.mMO)(async () => {
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
            directoryGuildName: x.name,
            directoryGuildId: x.id,
            directoryChannelId: t.id,
            currentCategoryId: E === y.mU.ALL ? null : E
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
    } : true, [k, x.name, x.id, t.id, E]),
    V = e => {
      0 !== R.trim().length && e.key === j.dh.ENTER && (d.Se(t.id, R), u.default.track(O.HAw.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: t.id,
        directory_guild_id: x.id
      }))
    },
    F = () => {
      D(""), d.BA(t.id)
    };
  return M ? (0, r.jsx)(A.A, {
    searchQuery: R,
    setSearchQuery: D,
    mostRecentQuery: T,
    handleSearchKeyPress: V,
    handleClearSearch: F,
    handleCreateOrAddGuild: U,
    searchResults: w,
    searchFetching: P
  }) : null == N && null == E ? (0, r.jsx)("div", {
    className: v.$$,
    children: (0, r.jsx)(a.y$y, {
      className: v.u1
    })
  }) : (null == N ? true : N.length) === 0 && null == E ? (0, r.jsx)("div", {
    className: v.$$,
    children: (0, r.jsx)(b.A, {
      guild: x,
      onAddGuild: U
    })
  }) : (0, r.jsx)(g.A, {
    channel: t,
    searchQuery: R,
    setSearchQuery: D,
    handleSearchKeyPress: V,
    handleClearSearch: F,
    handleCreateOrAddGuild: U,
    currentCategoryId: E,
    handleSelectCategory: e => {
      d.uU(t.id, e)
    },
    directoryEntries: N,
    categoryCounts: C,
    allEntriesCount: S,
    isLoading: I
  })
}