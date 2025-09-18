/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk606033 = require("./606033.jsx"),
  Chunk778680 = require("./778680.jsx"),
  Chunk751586 = require("./751586.jsx");
let d = function(e) {
  let {
    questId: t
  } = e, [n, d] = i.useState(t), f = (0, a.e7)([s.Z], () => null != n ? s.Z.getQuest(n) : true, [n]);
  i.useEffect(() => {
    null != t && d(t)
  }, [t]), i.useEffect(() => {
    null != n && (0, o.MG)(n)
  }, [n]);
  let _ = () => {
      null != n && (0, o.MG)(n)
    },
    [p, h] = i.useState([]);
  return (0, r.jsx)(c.Z, {
    controls: (0, r.jsx)(l.Z, {
      questId: n,
      setQuestId: d,
      quest: f,
      refreshQuest: _
    }),
    selectedSections: p,
    onSectionSelect: e => {
      "all" === e ? h([]) : h([e])
    },
    children: null != n ? (0, r.jsx)(u.UN, {
      questId: n,
      selectedSections: p
    }) : null
  })
}