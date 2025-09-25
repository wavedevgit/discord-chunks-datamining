/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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

function h(e) {
  let [t, n] = i.useState(e), [r, o] = i.useState(false);
  return i.useEffect(() => {
    if (r) return;
    let t = new URLSearchParams(window.location.search).get(c.tR.QUEST_ID);
    null != t ? n(t) : null != e && n(e), o(true)
  }, [e, r]), i.useEffect(() => {
    if (!r || null == t) return;
    let e = new URLSearchParams;
    e.set(c.tR.TAB, c.e5.PREVIEW_TOOL), e.set(c.tR.QUEST_ID, t);
    let n = "".concat(p.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
    (0, a.uL)(n.toString())
  }, [t, r]), {
    questId: t,
    setQuestId: n
  }
}
let m = function(e) {
  let {
    questId: t
  } = e, {
    questId: n,
    setQuestId: a
  } = h(t), c = (0, o.e7)([u.Z], () => null != n ? u.Z.getQuest(n) : true, [n]);
  i.useEffect(() => {
    null != n && (0, l.MG)(n).then(() => {
      (0, l.T0)(n)
    })
  }, [n]), i.useEffect(() => {
    let e = e => {
      let {
        quest_id: t
      } = e;
      t === n && (0, l.MG)(n)
    };
    return s.Z.subscribe("QUEST_PREVIEW_UPDATE", e), () => {
      s.Z.unsubscribe("QUEST_PREVIEW_UPDATE", e)
    }
  }, [n]);
  let p = () => {
      null != n && (0, l.MG)(n)
    },
    [m, g] = i.useState([]);
  return (0, r.jsx)(f.Z, {
    controls: (0, r.jsx)(d.Z, {
      questId: n,
      setQuestId: a,
      quest: c,
      refreshQuest: p
    }),
    selectedSections: m,
    onSectionSelect: e => {
      "all" === e ? g([]) : g([e])
    },
    children: null != n ? (0, r.jsx)(_.UN, {
      questId: n,
      selectedSections: m
    }) : null
  })
}