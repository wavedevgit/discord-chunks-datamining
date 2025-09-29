/** Chunk was on 1272 **/
/** chunk id: 877109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk948789 = require("./948789.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk606033 = require("./606033.jsx"),
  Chunk778680 = require("./778680.jsx"),
  Chunk751586 = require("./751586.jsx"),
  Chunk981631 = require("./981631.js");
let g = function(e) {
  let {
    questId: t
  } = e, {
    questId: n,
    setQuestId: g
  } = function(e) {
    let [t, n] = i.useState(e), [r, a] = i.useState(false);
    return i.useEffect(() => {
      if (r) return;
      let t = new URLSearchParams(window.location.search).get(c.tR.QUEST_ID);
      null != t ? n(t) : null != e && n(e), a(true)
    }, [e, r]), i.useEffect(() => {
      if (!r || null == t) return;
      let e = new URLSearchParams;
      e.set(c.tR.TAB, c.e5.PREVIEW_TOOL), e.set(c.tR.QUEST_ID, t);
      let n = "".concat(h.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
      (0, l.uL)(n.toString())
    }, [t, r]), {
      questId: t,
      setQuestId: n
    }
  }(t), m = (0, a.e7)([u.Z], () => null != n ? u.Z.getQuest(n) : true, [n]);
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
  let [b, _] = i.useState([]);
  return (0, r.jsx)(p.Z, {
    controls: (0, r.jsx)(d.Z, {
      questId: n,
      setQuestId: g,
      quest: m,
      refreshQuest: () => {
        null != n && (0, s.MG)(n)
      }
    }),
    selectedSections: b,
    onSectionSelect: e => {
      "all" === e ? _([]) : _([e])
    },
    children: null != n ? (0, r.jsx)(f.UN, {
      questId: n,
      selectedSections: b
    }) : null
  })
}