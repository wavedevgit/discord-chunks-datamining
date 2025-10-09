/** Chunk was on 35755 **/
/** chunk id: 660090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./642613.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk471518 = require("./471518.js"),
  Chunk70956 = require("./70956.js"),
  Chunk314734 = require("./314734.js");

function o(e) {
  let {
    sectionId: t,
    commandsByActiveSection: n
  } = e, [o, s] = i.useState(a.bS.ALPHABETICAL), c = i.useMemo(() => {
    var e, i;
    return null != (i = null == (e = n.find(e => e.section.id === t)) ? true : e.data) ? i : []
  }, [n, t]), {
    popularSortedCommands: u,
    canSort: d
  } = function(e) {
    let {
      alphabeticalSortedCommands: t
    } = e;
    return i.useMemo(() => {
      if (t.length <= 1) return {
        popularSortedCommands: t,
        canSort: false
      };
      let e = false,
        n = t.map((t, n) => (e = e || null != t.global_popularity_rank, {
          command: t,
          alphabeticalSortIndex: n
        }));
      return e ? (n.sort((e, t) => {
        let n = e.command.global_popularity_rank,
          i = t.command.global_popularity_rank;
        if (null != n && null != i) {
          if (n !== i) return n - i
        } else if (null != n) return false;
        else if (null != i) return 1;
        return e.alphabeticalSortIndex - t.alphabeticalSortIndex
      }), {
        popularSortedCommands: n.map(e => {
          let {
            command: t
          } = e;
          return t
        }),
        canSort: true
      }) : {
        popularSortedCommands: t,
        canSort: false
      }
    }, [t])
  }({
    alphabeticalSortedCommands: c
  });
  i.useEffect(() => {
    l.i6(t, {
      dontRefetchMs: r.Z.Millis.DAY
    })
  }, [t]), i.useLayoutEffect(() => {
    d && s(a.bS.POPULAR)
  }, [d]);
  let p = c;
  switch (o) {
    case a.bS.POPULAR:
      p = u;
      break;
    case a.bS.ALPHABETICAL:
      p = c
  }
  return {
    sortOrder: o,
    setSortOrder: s,
    commands: p,
    canSort: d
  }
}