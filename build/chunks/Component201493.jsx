/** Chunk was on 86357 **/
/** chunk id: 201493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk806328 = require("./806328.js");
let O = e => {
  var t;
  let {
    channel: O,
    guild: E
  } = e, {
    currentCategoryId: S,
    directoryEntries: P,
    categoryCounts: I,
    allEntriesCount: Z,
    isLoading: T
  } = (0, l.cj)([m.Z], () => {
    let e = m.Z.getCurrentCategoryId(O.id),
      t = m.Z.getDirectoryEntries(O.id, e === x.AR.ALL ? null : e),
      n = m.Z.getDirectoryCategoryCounts(O.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: m.Z.getDirectoryAllEntriesCount(O.id),
      isLoading: m.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = u.ZP.lastMessageId(O.id);
    null != e && o.Z.wait(() => {
      (0, s.In)(O.id, {
        object: v.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: v.Qqv.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [O.id]);
  let N = i.useMemo(() => null != P ? (0, _.v)(Object.values(P), S) : null, [P, S]),
    {
      mostRecentQuery: A,
      searchFetching: w,
      searchResults: R
    } = (0, l.cj)([f.Z], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = f.Z.getSearchState(O.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: f.Z.getSearchResults(O.id, e)
      }
    }),
    [M, k] = i.useState(A),
    D = "" !== A,
    {
      showHubEventsList: L
    } = c.Z.useExperiment({
      guildId: null != (t = E.id) ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: false
    }),
    U = {
      mostRecentQuery: A,
      showHubEventsList: L
    },
    B = i.useRef(U);
  i.useEffect(() => {
    B.current = U
  }), i.useEffect(() => {
    let {
      mostRecentQuery: e,
      showHubEventsList: t
    } = B.current;
    h.c$(O.id), h.YZ(O.id), t && p.c(O.id), k(e)
  }, [O.id]), i.useEffect(() => {
    d.default.track(v.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: O.id,
      directory_guild_id: E.id,
      primary_category_id: S
    })
  }, [O.id, E.id, S]);
  let F = (0, g.G)(O) ? () => {
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
            directoryChannelId: O.id,
            currentCategoryId: S === x.AR.ALL ? null : S
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
    H = e => {
      0 !== M.trim().length && e.charCode === v.yXg.ENTER && (h.Rq(O.id, M), d.default.track(v.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: O.id,
        directory_guild_id: E.id
      }))
    },
    G = () => {
      k(""), h.So(O.id)
    };
  return D ? (0, r.jsx)(C.Z, {
    searchQuery: M,
    setSearchQuery: k,
    mostRecentQuery: A,
    handleSearchKeyPress: H,
    handleClearSearch: G,
    handleCreateOrAddGuild: F,
    searchResults: R,
    searchFetching: w
  }) : null == N && null == S ? (0, r.jsx)("div", {
    className: j.pageContainer,
    children: (0, r.jsx)(a.$jN, {
      className: j.spinner
    })
  }) : (null == N ? true : N.length) === 0 && null == S ? (0, r.jsx)("div", {
    className: j.pageContainer,
    children: (0, r.jsx)(b.Z, {
      guild: E,
      onAddGuild: F
    })
  }) : (0, r.jsx)(y.Z, {
    channel: O,
    searchQuery: M,
    setSearchQuery: k,
    handleSearchKeyPress: H,
    handleClearSearch: G,
    handleCreateOrAddGuild: F,
    currentCategoryId: S,
    handleSelectCategory: e => {
      h.Su(O.id, e)
    },
    directoryEntries: N,
    categoryCounts: I,
    allEntriesCount: Z,
    isLoading: T
  })
}