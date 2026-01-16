/** Chunk was on 1272 **/
/** chunk id: 877109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk22095 = require("./22095.js"),
  Chunk616022 = require("./616022.js"),
  Chunk968843 = require("./968843.js"),
  Chunk606033 = require("./606033.jsx"),
  Chunk778680 = require("./778680.jsx"),
  Chunk751586 = require("./751586.jsx"),
  Chunk981631 = require("./981631.js");

function h(e) {
  return new URLSearchParams(e).get(u.tR.QUEST_ID)
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
      let t = h(a);
      null != t ? r(t) : null != e && r(e)
    }, [e, a]), i.useEffect(() => {
      if (null == n || h(a) === n) return;
      let e = new URLSearchParams;
      e.set(u.tR.TAB, u.e5.PREVIEW_TOOL), e.set(u.tR.QUEST_ID, n), t.push("".concat(g.Z5c.QUEST_HOME_V2, "?").concat(e.toString()))
    }, [n, t, a]), {
      questId: n,
      setQuestId: r
    }
  }(t), b = (0, a.e7)([c.Z], () => null != n ? c.Z.getQuest(n) : true, [n]), E = (0, a.e7)([c.Z], () => null != n ? c.Z.getQuestLoadedViaPreview(n) : null, [n]);
  i.useEffect(() => {
    null != n && (0, s.MG)(n).then(() => {
      (0, s.T0)(n)
    })
  }, [n]), i.useEffect(() => {
    let e = e => {
      let {
        quest_id: t
      } = e;
      t === n && (0, s.MG)(n)
    };
    return o.Z.subscribe("QUEST_PREVIEW_UPDATE", e), () => {
      o.Z.unsubscribe("QUEST_PREVIEW_UPDATE", e)
    }
  }, [n]);
  let [_, O] = i.useState([]);
  return (0, r.jsx)(p.Z, {
    controls: (0, r.jsx)(d.Z, {
      questId: n,
      setQuestId: m,
      quest: b,
      refreshQuest: () => {
        null != n && (0, s.MG)(n)
      }
    }),
    selectedSections: _,
    onSectionSelect: e => {
      "all" === e ? O([]) : O([e])
    },
    children: (null == E ? true : E.id) != null ? (0, r.jsx)(f.UN, {
      questId: null == E ? true : E.id,
      selectedSections: _
    }) : null
  })
}