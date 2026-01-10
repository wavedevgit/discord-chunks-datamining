/** Chunk was on 81985 **/
/** chunk id: 201493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk99325 = require("./99325.js"),
  Chunk866112 = require("./866112.js"),
  Chunk273387 = require("./273387.js"),
  Chunk683818 = require("./683818.js"),
  Chunk102888 = require("./102888.jsx"),
  Chunk65839 = require("./65839.jsx"),
  Chunk453879 = require("./453879.js"),
  Chunk408310 = require("./408310.jsx"),
  Chunk486527 = require("./486527.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk960931 = require("./960931.js");
let C = e => {
  let {
    channel: t,
    guild: C
  } = e, {
    currentCategoryId: E,
    directoryEntries: S,
    categoryCounts: _,
    allEntriesCount: I,
    isLoading: P
  } = (0, l.cj)([f.Z], () => {
    let e = f.Z.getCurrentCategoryId(t.id),
      n = f.Z.getDirectoryEntries(t.id, e === v.AR.ALL ? null : e),
      r = f.Z.getDirectoryCategoryCounts(t.id);
    return {
      currentCategoryId: e,
      directoryEntries: n,
      categoryCounts: r,
      allEntriesCount: f.Z.getDirectoryAllEntriesCount(t.id),
      isLoading: f.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = c.ZP.lastMessageId(t.id);
    null != e && o.Z.wait(() => {
      (0, s.ack)(t.id, {
        object: O.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [t.id]);
  let Z = i.useMemo(() => null != S ? (0, b.v)(Object.values(S), E) : null, [S, E]),
    {
      mostRecentQuery: N,
      searchFetching: T,
      searchResults: A
    } = (0, l.cj)([p.Z], () => {
      let {
        mostRecentQuery: e,
        fetching: n
      } = p.Z.getSearchState(t.id);
      return {
        mostRecentQuery: e,
        searchFetching: n,
        searchResults: p.Z.getSearchResults(t.id, e)
      }
    }),
    [w, R] = i.useState(N),
    D = "" !== N,
    M = {
      mostRecentQuery: N
    },
    k = i.useRef(M);
  i.useEffect(() => {
    k.current = M
  }), i.useEffect(() => {
    let {
      mostRecentQuery: e
    } = k.current;
    d.c$(t.id), d.YZ(t.id), R(e)
  }, [t.id]), i.useEffect(() => {
    u.default.track(O.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: t.id,
      directory_guild_id: C.id,
      primary_category_id: E
    })
  }, [t.id, C.id, E]);
  let L = (0, h.G)(t),
    U = i.useMemo(() => L ? () => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("79764").then(n.bind(n, 533202));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), l = l = {
            directoryGuildName: C.name,
            directoryGuildId: C.id,
            directoryChannelId: t.id,
            currentCategoryId: E === v.AR.ALL ? null : E
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    } : true, [L, C.name, C.id, t.id, E]),
    G = e => {
      0 !== w.trim().length && e.key === j.vn.ENTER && (d.Rq(t.id, w), u.default.track(O.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: t.id,
        directory_guild_id: C.id
      }))
    },
    B = () => {
      R(""), d.So(t.id)
    };
  return D ? (0, r.jsx)(y.Z, {
    searchQuery: w,
    setSearchQuery: R,
    mostRecentQuery: N,
    handleSearchKeyPress: G,
    handleClearSearch: B,
    handleCreateOrAddGuild: U,
    searchResults: A,
    searchFetching: T
  }) : null == Z && null == E ? (0, r.jsx)("div", {
    className: x.pageContainer,
    children: (0, r.jsx)(a.$jN, {
      className: x.spinner
    })
  }) : (null == Z ? true : Z.length) === 0 && null == E ? (0, r.jsx)("div", {
    className: x.pageContainer,
    children: (0, r.jsx)(g.Z, {
      guild: C,
      onAddGuild: U
    })
  }) : (0, r.jsx)(m.Z, {
    channel: t,
    searchQuery: w,
    setSearchQuery: R,
    handleSearchKeyPress: G,
    handleClearSearch: B,
    handleCreateOrAddGuild: U,
    currentCategoryId: E,
    handleSelectCategory: e => {
      d.Su(t.id, e)
    },
    directoryEntries: Z,
    categoryCounts: _,
    allEntriesCount: I,
    isLoading: P
  })
}