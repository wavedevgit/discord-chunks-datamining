/** Chunk was on web.js **/
/** chunk id: 66420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk834129 = require("./834129.js"),
  Chunk510064 = require("./510064.js");

function l(e) {
  let {
    channel: t,
    message: n,
    content: l,
    subtitle: c,
    compact: u,
    action: d
  } = e, f = n.reactions.length > 0;
  return <a.Z iconNode={t.isGroupDM() ? (0, r.jsx)(i.Dkj, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }) : (0, r.jsx)(i.vdY, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    })} iconContainerClassName={s.iconContainer} compact={u} contentClassName={s.content} className={f ? s.withReactions : s.noReactions}>{<div className={s.textContainer}>{<o.xv variant={"text-md/medium"} color={"header-primary"}>{l}</o.xv>}{null != c && <o.xv variant={"text-sm/medium"} color={"text-secondary"}>{c}</o.xv>}</div>}{d}</a.Z>
}