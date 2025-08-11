/** Chunk was on 49152 **/
/** chunk id: 201493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk147754 = require("./147754.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk597 = require("./597.js"),
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
  Chunk400816 = require("./400816.js");
let C = e => {
  var t;
  let {
    channel: C,
    guild: E
  } = e, {
    currentCategoryId: S,
    directoryEntries: I,
    categoryCounts: Z,
    allEntriesCount: P,
    isLoading: T
  } = (0, l.cj)([g.Z], () => {
    let e = g.Z.getCurrentCategoryId(C.id),
      t = g.Z.getDirectoryEntries(C.id, e === j.AR.ALL ? null : e),
      n = g.Z.getDirectoryCategoryCounts(C.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: g.Z.getDirectoryAllEntriesCount(C.id),
      isLoading: g.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = u.ZP.lastMessageId(C.id);
    null != e && s.Z.wait(() => {
      (0, o.In)(C.id, {
        object: O.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: O.Qqv.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [C.id]);
  let N = i.useMemo(() => null != I ? (0, x.v)(Object.values(I), S) : null, [I, S]),
    {
      mostRecentQuery: R,
      searchFetching: w,
      searchResults: A
    } = (0, l.cj)([f.Z], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = f.Z.getSearchState(C.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: f.Z.getSearchResults(C.id, e)
      }
    }),
    [D, k] = i.useState(R),
    L = "" !== R,
    {
      showHubEventsList: M
    } = c.Z.useExperiment({
      guildId: null != (t = E.id) ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: false
    }),
    U = {
      mostRecentQuery: R,
      showHubEventsList: M
    },
    F = i.useRef(U);
  i.useEffect(() => {
    F.current = U
  }), i.useEffect(() => {
    let {
      mostRecentQuery: e,
      showHubEventsList: t
    } = F.current;
    p.c$(C.id), p.YZ(C.id), t && h.c(C.id), k(e)
  }, [C.id]), i.useEffect(() => {
    d.default.track(O.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: C.id,
      directory_guild_id: E.id,
      primary_category_id: S
    })
  }, [C.id, E.id, S]);
  let H = (0, m.G)(C) ? () => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("79764").then(n.bind(n, 533202));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), i = i = {
            directoryGuildName: E.name,
            directoryGuildId: E.id,
            directoryChannelId: C.id,
            currentCategoryId: S === j.AR.ALL ? null : S
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    } : true,
    G = e => {
      0 !== D.trim().length && e.charCode === O.yXg.ENTER && (p.Rq(C.id, D), d.default.track(O.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: C.id,
        directory_guild_id: E.id
      }))
    },
    B = () => {
      k(""), p.So(C.id)
    };
  return L ? (0, r.jsx)(_.Z, {
    searchQuery: D,
    setSearchQuery: k,
    mostRecentQuery: R,
    handleSearchKeyPress: G,
    handleClearSearch: B,
    handleCreateOrAddGuild: H,
    searchResults: A,
    searchFetching: w
  }) : null == N && null == S ? (0, r.jsx)("div", {
    className: v.pageContainer,
    children: (0, r.jsx)(a.$jN, {
      className: v.spinner
    })
  }) : (null == N ? true : N.length) === 0 && null == S ? (0, r.jsx)("div", {
    className: v.pageContainer,
    children: (0, r.jsx)(b.Z, {
      guild: E,
      onAddGuild: H
    })
  }) : (0, r.jsx)(y.Z, {
    channel: C,
    searchQuery: D,
    setSearchQuery: k,
    handleSearchKeyPress: G,
    handleClearSearch: B,
    handleCreateOrAddGuild: H,
    currentCategoryId: S,
    handleSelectCategory: e => {
      p.Su(C.id, e)
    },
    directoryEntries: N,
    categoryCounts: Z,
    allEntriesCount: P,
    isLoading: T
  })
}