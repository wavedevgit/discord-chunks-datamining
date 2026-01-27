/** Chunk was on web.js **/
/** chunk id: 720371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./638769.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk354138 = require("./354138.js"),
  Chunk927813 = require("./927813.js"),
  Chunk60809 = require("./60809.js");

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
  } = e, [l, c] = r.useState(o.Ug.ALPHABETICAL), u = r.useMemo(() => {
    var e, r;
    return null != (e = null == (r = n.find(e => e.section.id === t)) ? true : r.data) ? e : []
  }, [n, t]), {
    popularSortedCommands: d,
    canSort: f
  } = s({
    alphabeticalSortedCommands: u
  });
  r.useEffect(() => {
    let e = t;
    i.Di(e, {
      dontRefetchMs: a.A.Millis.DAY
    })
  }, [t]), r.useLayoutEffect(() => {
    f && c(o.Ug.POPULAR)
  }, [f]);
  let p = u;
  switch (l) {
    case o.Ug.POPULAR:
      p = d;
      break;
    case o.Ug.ALPHABETICAL:
      p = u
  }
  return {
    sortOrder: l,
    setSortOrder: c,
    commands: p,
    canSort: f
  }
}