/** Chunk was on web.js **/
/** chunk id: 753845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk859703 = require("./859703.js"),
  Chunk639214 = require("./639214.js"),
  Chunk73473 = require("./73473.js");
let c = e => {
  let {
    applicationId: t,
    children: n,
    questContent: c
  } = e, u = (0, a.bG)([o.A], () => o.A.quests), d = i.useMemo(() => (0, s.jm)(u, t), [u, t]), f = i.useRef(null);
  return d.length > 0 ? (0, r.jsx)(l.R, {
    questOrQuests: d[0],
    questContent: c,
    sourceQuestContent: c,
    children: n
  }) : (0, r.jsx)(r.Fragment, {
    children: n(f, f)
  })
}