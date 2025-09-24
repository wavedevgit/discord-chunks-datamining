/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk948789 = require("./948789.js"),
  Chunk442837 = require("./442837.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk606033 = require("./606033.jsx"),
  Chunk778680 = require("./778680.jsx"),
  Chunk751586 = require("./751586.jsx"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let [t, n] = i.useState(e), [r, o] = i.useState(false);
  return i.useEffect(() => {
    if (r) return;
    let t = new URLSearchParams(window.location.search).get(l.tR.QUEST_ID);
    null != t ? n(t) : null != e && n(e), o(true)
  }, [e, r]), i.useEffect(() => {
    if (!r || null == t) return;
    let e = new URLSearchParams;
    e.set(l.tR.TAB, l.e5.PREVIEW_TOOL), e.set(l.tR.QUEST_ID, t);
    let n = "".concat(_.Z5c.QUEST_HOME_V2, "?").concat(e.toString());
    (0, a.uL)(n.toString())
  }, [t, r]), {
    questId: t,
    setQuestId: n
  }
}
let h = function(e) {
  let {
    questId: t
  } = e, {
    questId: n,
    setQuestId: a
  } = p(t), l = (0, o.e7)([c.Z], () => null != n ? c.Z.getQuest(n) : true, [n]);
  i.useEffect(() => {
    null != n && (0, s.MG)(n).then(() => {
      (0, s.T0)(n)
    })
  }, [n]);
  let _ = () => {
      null != n && (0, s.MG)(n)
    },
    [h, m] = i.useState([]);
  return (0, r.jsx)(d.Z, {
    controls: (0, r.jsx)(u.Z, {
      questId: n,
      setQuestId: a,
      quest: l,
      refreshQuest: _
    }),
    selectedSections: h,
    onSectionSelect: e => {
      "all" === e ? m([]) : m([e])
    },
    children: null != n ? (0, r.jsx)(f.UN, {
      questId: n,
      selectedSections: h
    }) : null
  })
}