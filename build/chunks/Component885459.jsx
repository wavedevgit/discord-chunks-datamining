/** Chunk was on 21738 **/
/** chunk id: 885459, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk890687 = require("./890687.js"),
  Chunk306190 = require("./306190.jsx"),
  Chunk607976 = require("./607976.jsx"),
  Chunk886217 = require("./886217.jsx"),
  Chunk652215 = require("./652215.js");

function m(e) {
  return new URLSearchParams(e).get(u.L1.QUEST_ID)
}
let f = function(e) {
  let {
    questId: t
  } = e, {
    questId: n,
    setQuestId: f
  } = function(e) {
    let t = (0, l.W6)(),
      [n, r] = i.useState(e),
      {
        search: a
      } = (0, l.zy)();
    return i.useEffect(() => {
      let t = m(a);
      null != t ? r(t) : null != e && r(e)
    }, [e, a]), i.useEffect(() => {
      if (null == n || m(a) === n) return;
      let e = new URLSearchParams;
      e.set(u.L1.TAB, u.NC.PREVIEW_TOOL), e.set(u.L1.QUEST_ID, n), t.push("".concat(g.BVt.QUEST_HOME_V2, "?").concat(e.toString()))
    }, [n, t, a]), {
      questId: n,
      setQuestId: r
    }
  }(t), A = (0, a.bG)([c.A], () => null != n ? c.A.getQuest(n) : true, [n]), _ = (0, a.bG)([c.A], () => null != n ? c.A.getQuestLoadedViaPreview(n) : null, [n]);
  i.useEffect(() => {
    null != n && (0, o.dQ)(n).then(() => {
      (0, o.Gt)(n)
    })
  }, [n]), i.useEffect(() => {
    let e = e => {
      let {
        quest_id: t
      } = e;
      t === n && (0, o.dQ)(n)
    };
    return s.h.subscribe("QUEST_PREVIEW_UPDATE", e), () => {
      s.h.unsubscribe("QUEST_PREVIEW_UPDATE", e)
    }
  }, [n]);
  let [b, E] = i.useState([]);
  return (0, r.jsx)(p.A, {
    controls: (0, r.jsx)(d.A, {
      questId: n,
      setQuestId: f,
      quest: A,
      refreshQuest: () => {
        null != n && (0, o.dQ)(n)
      }
    }),
    selectedSections: b,
    onSectionSelect: e => {
      "all" === e ? E([]) : E([e])
    },
    children: (null == _ ? true : _.id) != null ? (0, r.jsx)(h.Ok, {
      questId: null == _ ? true : _.id,
      selectedSections: b
    }) : null
  })
}