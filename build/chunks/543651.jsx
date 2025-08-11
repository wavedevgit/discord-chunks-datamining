/** Chunk was on web.js **/
/** chunk id: 543651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk925329 = require("./925329.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352665 = require("./352665.js");
let g = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: a,
    guildId: g,
    className: E
  } = e, b = (0, u.q)(i), y = (0, l.Wu)([_.default], () => {
    var e;
    return null != (e = n.map(e => _.default.getUser(e)).filter(p.lm)) ? e : []
  }), O = null == b ? true : b.name, v = s()(t).fromNow();
  return null == t ? null : <div className={o()(E, m.container)}>{<f.Z game={b} />}{<div className={m.textSection}>{null != a && "" !== a ? <c.Text variant={"text-md/semibold"} color={"interactive-active"}>{a}</c.Text> : <c.Text variant={"text-md/semibold"} color={"text-muted"}>{h.intl.string(h.t.Cyxddn)}</c.Text>}{<c.Text variant={"text-xs/medium"} color={"text-muted"}>{null != O ? "".concat(O, " • ") : null}{v}</c.Text>}</div>}{null != y && y.length > 0 && <d.Z maxUsers={4} users={y} guildId={g} aria-label={h.intl.string(h.t.WTozwc)} />}</div>
}