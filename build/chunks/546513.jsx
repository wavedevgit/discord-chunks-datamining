/** Chunk was on 22988 **/
/** chunk id: 546513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk85960 = require("./85960.js"),
  Chunk489776 = require("./489776.jsx"),
  Chunk252121 = require("./252121.jsx"),
  Chunk564488 = require("./564488.js");

function o(e) {
  let {
    guildId: t,
    rules: n,
    triggerType: o,
    initWithEdit: c
  } = e, {
    perGuildMaxCount: d
  } = i.I6[o], u = 0 === n.length, m = d > n.length && !u;
  return <r.Fragment>{u && <a.Z guildId={t} triggerType={o} />}{n.map(e => <s.Z rule={e} initWithEdit={c} />)}{m && <l.Z guildId={t} triggerType={o} />}</r.Fragment>
}