/** Chunk was on web.js **/
/** chunk id: 660090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./642613.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk471518 = require("./471518.js"),
  Chunk70956 = require("./70956.js"),
  Chunk314734 = require("./314734.js");

function s(e) {
  let {
    alphabeticalSortedCommands: t
  } = e;
  return r.useMemo(() => {
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
        r = t.command.global_popularity_rank;
      if (null != n && null != r) {
        if (n !== r) return n - r
      } else if (null != n) return false;
      else if (null != r) return 1;
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
}

function l(e) {
  let {
    sectionId: t,
    commandsByActiveSection: n
  } = e, [l, c] = r.useState(o.bS.ALPHABETICAL), u = r.useMemo(() => {
    var e, r;
    return null != (r = null == (e = n.find(e => e.section.id === t)) ? true : e.data) ? r : []
  }, [n, t]), {
    popularSortedCommands: d,
    canSort: f
  } = s({
    alphabeticalSortedCommands: u
  });
  r.useEffect(() => {
    let e = t;
    i.i6(e, {
      dontRefetchMs: a.Z.Millis.DAY
    })
  }, [t]), r.useLayoutEffect(() => {
    f && c(o.bS.POPULAR)
  }, [f]);
  let _ = u;
  switch (l) {
    case o.bS.POPULAR:
      _ = d;
      break;
    case o.bS.ALPHABETICAL:
      _ = u
  }
  return {
    sortOrder: l,
    setSortOrder: c,
    commands: _,
    canSort: f
  }
}