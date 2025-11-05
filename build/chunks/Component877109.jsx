/** Chunk was on 1272 **/
/** chunk id: 877109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk22095 = require("./22095.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk606033 = require("./606033.jsx"),
  Chunk778680 = require("./778680.jsx"),
  Chunk751586 = require("./751586.jsx"),
  Chunk981631 = require("./981631.js");

function g(e) {
  return new URLSearchParams(e).get(c.tR.QUEST_ID)
}
let m = function(e) {
  let {
    questId: t
  } = e, {
    questId: n,
    setQuestId: m
  } = function(e) {
    let t = (0, l.k6)(),
      [n, r] = i.useState(e),
      {
        search: a
      } = (0, l.TH)();
    return i.useEffect(() => {
      let t = g(a);
      null != t ? r(t) : null != e && r(e)
    }, [e, a]), i.useEffect(() => {
      if (null == n || g(a) === n) return;
      let e = new URLSearchParams;
      e.set(c.tR.TAB, c.e5.PREVIEW_TOOL), e.set(c.tR.QUEST_ID, n), t.push("".concat(h.Z5c.QUEST_HOME_V2, "?").concat(e.toString()))
    }, [n, t, a]), {
      questId: n,
      setQuestId: r
    }
  }(t), _ = (0, a.e7)([u.Z], () => null != n ? u.Z.getQuest(n) : true, [n]), b = (0, a.e7)([u.Z], () => null != n ? u.Z.getQuestLoadedViaPreview(n) : null, [n]);
  i.useEffect(() => {
    null != n && (0, o.MG)(n).then(() => {
      (0, o.T0)(n)
    })
  }, [n]), i.useEffect(() => {
    let e = e => {
      let {
        quest_id: t
      } = e;
      t === n && (0, o.MG)(n)
    };
    return s.Z.subscribe("QUEST_PREVIEW_UPDATE", e), () => {
      s.Z.unsubscribe("QUEST_PREVIEW_UPDATE", e)
    }
  }, [n]);
  let [E, O] = i.useState([]);
  return (0, r.jsx)(p.Z, {
    controls: (0, r.jsx)(d.Z, {
      questId: n,
      setQuestId: m,
      quest: _,
      refreshQuest: () => {
        null != n && (0, o.MG)(n)
      }
    }),
    selectedSections: E,
    onSectionSelect: e => {
      "all" === e ? O([]) : O([e])
    },
    children: (null == b ? true : b.id) != null ? (0, r.jsx)(f.UN, {
      questId: null == b ? true : b.id,
      selectedSections: E
    }) : null
  })
}