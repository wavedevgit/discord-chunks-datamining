/** Chunk was on web.js **/
/** chunk id: 661824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk38068 = require("./38068.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk735167 = require("./735167.js");
let u = Chunk73800.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: i,
    isUnread: o,
    children: u,
    id: d,
    role: f,
    "aria-label": _
  } = e;
  return <div className={a()(n, {
      [c.divider]: true,
      [c.isUnread]: o,
      [c.hasContent]: null != u
    })} ref={t} id={d} role={f} aria-label={_}>{null != u ? <span className={a()(c.content, i)}>{u}</span> : null}{o ? <span className={c.unreadPill}>{<s.Z foreground={c.unreadPillCapStroke} className={c.unreadPillCap} />}{l.intl.string(l.t.y2b7CA)}</span> : null}</div>
})