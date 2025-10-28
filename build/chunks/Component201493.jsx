/** Chunk was on 91053 **/
/** chunk id: 201493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk75666 = require("./75666.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk806328 = require("./806328.js");
let O = e => {
  let {
    channel: t,
    guild: O
  } = e, {
    currentCategoryId: C,
    directoryEntries: I,
    categoryCounts: S,
    allEntriesCount: E,
    isLoading: Z
  } = (0, l.cj)([h.Z], () => {
    let e = h.Z.getCurrentCategoryId(t.id),
      n = h.Z.getDirectoryEntries(t.id, e === y.AR.ALL ? null : e),
      r = h.Z.getDirectoryCategoryCounts(t.id);
    return {
      currentCategoryId: e,
      directoryEntries: n,
      categoryCounts: r,
      allEntriesCount: h.Z.getDirectoryAllEntriesCount(t.id),
      isLoading: h.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = c.ZP.lastMessageId(t.id);
    null != e && s.Z.wait(() => {
      (0, o.ack)(t.id, {
        object: x.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: x.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [t.id]);
  let P = i.useMemo(() => null != I ? (0, b.v)(Object.values(I), C) : null, [I, C]),
    {
      mostRecentQuery: T,
      searchFetching: N,
      searchResults: R
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
    [w, A] = i.useState(T),
    D = "" !== T,
    L = {
      mostRecentQuery: T
    },
    M = i.useRef(L);
  i.useEffect(() => {
    M.current = L
  }), i.useEffect(() => {
    let {
      mostRecentQuery: e
    } = M.current;
    u.c$(t.id), u.YZ(t.id), A(e)
  }, [t.id]), i.useEffect(() => {
    d.default.track(x.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: t.id,
      directory_guild_id: O.id,
      primary_category_id: C
    })
  }, [t.id, O.id, C]);
  let k = (0, f.G)(t) ? () => {
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
            directoryGuildName: O.name,
            directoryGuildId: O.id,
            directoryChannelId: t.id,
            currentCategoryId: C === y.AR.ALL ? null : C
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
    } : true,
    U = e => {
      0 !== w.trim().length && e.key === v.vn.ENTER && (u.Rq(t.id, w), d.default.track(x.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: t.id,
        directory_guild_id: O.id
      }))
    },
    G = () => {
      A(""), u.So(t.id)
    };
  return D ? (0, r.jsx)(_.Z, {
    searchQuery: w,
    setSearchQuery: A,
    mostRecentQuery: T,
    handleSearchKeyPress: U,
    handleClearSearch: G,
    handleCreateOrAddGuild: k,
    searchResults: R,
    searchFetching: N
  }) : null == P && null == C ? (0, r.jsx)("div", {
    className: j.pageContainer,
    children: (0, r.jsx)(a.$jN, {
      className: j.spinner
    })
  }) : (null == P ? true : P.length) === 0 && null == C ? (0, r.jsx)("div", {
    className: j.pageContainer,
    children: (0, r.jsx)(g.Z, {
      guild: O,
      onAddGuild: k
    })
  }) : (0, r.jsx)(m.Z, {
    channel: t,
    searchQuery: w,
    setSearchQuery: A,
    handleSearchKeyPress: U,
    handleClearSearch: G,
    handleCreateOrAddGuild: k,
    currentCategoryId: C,
    handleSelectCategory: e => {
      u.Su(t.id, e)
    },
    directoryEntries: P,
    categoryCounts: S,
    allEntriesCount: E,
    isLoading: Z
  })
}