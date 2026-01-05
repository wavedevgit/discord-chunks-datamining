/** Chunk was on web.js **/
/** chunk id: 633181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk616022 = require("./616022.js"),
  Chunk759479 = require("./759479.js"),
  Chunk602667 = require("./602667.jsx");
let c = e => {
  let {
    applicationId: t,
    children: n,
    questContent: c
  } = e, u = (0, a.e7)([o.Z], () => o.Z.quests), d = i.useMemo(() => (0, s.zs)(u, t).toArray(), [u, t]), f = i.useRef(null);
  return d.length > 0 ? (0, r.jsx)(l.A, {
    questOrQuests: d[0],
    questContent: c,
    sourceQuestContent: c,
    children: n
  }) : (0, r.jsx)(r.Fragment, {
    children: n(f, f)
  })
}