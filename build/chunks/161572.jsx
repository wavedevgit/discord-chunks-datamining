/** Chunk was on web.js **/
/** chunk id: 161572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk837411 = require("./837411.js"),
  Chunk705556 = require("./705556.js"),
  Chunk955418 = require("./955418.js"),
  Chunk200669 = require("./200669.js");

function l(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    onClose: c,
    appContext: u,
    disableAutoFocus: d = false
  } = e, f = (0, i.Z)(t.id, n);
  return <div className={s.footer}>{f && <a.Z user={t} guildId={n} channelId={l} onClose={c} disableAutoFocus={d} />}{!f && <o.Z user={t} guildId={n} onClose={c} fullWidth={true} appContext={u} />}</div>
}