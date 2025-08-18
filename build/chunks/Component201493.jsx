/** Chunk was on 36499 **/
/** chunk id: 201493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk420212 = require("./420212.js"),
  Chunk806328 = require("./806328.js");
let E = e => {
  var t;
  let {
    channel: E,
    guild: S
  } = e, {
    currentCategoryId: P,
    directoryEntries: I,
    categoryCounts: Z,
    allEntriesCount: T,
    isLoading: N
  } = (0, l.cj)([m.Z], () => {
    let e = m.Z.getCurrentCategoryId(E.id),
      t = m.Z.getDirectoryEntries(E.id, e === x.AR.ALL ? null : e),
      n = m.Z.getDirectoryCategoryCounts(E.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: m.Z.getDirectoryAllEntriesCount(E.id),
      isLoading: m.Z.isFetching()
    }
  });
  i.useEffect(() => () => {
    let e = u.ZP.lastMessageId(E.id);
    null != e && o.Z.wait(() => {
      (0, s.In)(E.id, {
        object: v.qAy.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
        objectType: v.Qqv.ACK_AUTOMATIC
      }, true, true, e)
    })
  }, [E.id]);
  let A = i.useMemo(() => null != I ? (0, _.v)(Object.values(I), P) : null, [I, P]),
    {
      mostRecentQuery: w,
      searchFetching: R,
      searchResults: M
    } = (0, l.cj)([f.Z], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = f.Z.getSearchState(E.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: f.Z.getSearchResults(E.id, e)
      }
    }),
    [k, D] = i.useState(w),
    L = "" !== w,
    {
      showHubEventsList: U
    } = c.Z.useExperiment({
      guildId: null != (t = S.id) ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: false
    }),
    B = {
      mostRecentQuery: w,
      showHubEventsList: U
    },
    F = i.useRef(B);
  i.useEffect(() => {
    F.current = B
  }), i.useEffect(() => {
    let {
      mostRecentQuery: e,
      showHubEventsList: t
    } = F.current;
    h.c$(E.id), h.YZ(E.id), t && p.c(E.id), D(e)
  }, [E.id]), i.useEffect(() => {
    d.default.track(v.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: E.id,
      directory_guild_id: S.id,
      primary_category_id: P
    })
  }, [E.id, S.id, P]);
  let H = (0, g.G)(E) ? () => {
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
            directoryGuildName: S.name,
            directoryGuildId: S.id,
            directoryChannelId: E.id,
            currentCategoryId: P === x.AR.ALL ? null : P
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
      0 !== k.trim().length && e.key === j.vn.ENTER && (h.Rq(E.id, k), d.default.track(v.rMx.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: E.id,
        directory_guild_id: S.id
      }))
    },
    V = () => {
      D(""), h.So(E.id)
    };
  return L ? (0, r.jsx)(C.Z, {
    searchQuery: k,
    setSearchQuery: D,
    mostRecentQuery: w,
    handleSearchKeyPress: G,
    handleClearSearch: V,
    handleCreateOrAddGuild: H,
    searchResults: M,
    searchFetching: R
  }) : null == A && null == P ? (0, r.jsx)("div", {
    className: O.pageContainer,
    children: (0, r.jsx)(a.$jN, {
      className: O.spinner
    })
  }) : (null == A ? true : A.length) === 0 && null == P ? (0, r.jsx)("div", {
    className: O.pageContainer,
    children: (0, r.jsx)(b.Z, {
      guild: S,
      onAddGuild: H
    })
  }) : (0, r.jsx)(y.Z, {
    channel: E,
    searchQuery: k,
    setSearchQuery: D,
    handleSearchKeyPress: G,
    handleClearSearch: V,
    handleCreateOrAddGuild: H,
    currentCategoryId: P,
    handleSelectCategory: e => {
      h.Su(E.id, e)
    },
    directoryEntries: A,
    categoryCounts: Z,
    allEntriesCount: T,
    isLoading: N
  })
}