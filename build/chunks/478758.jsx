/** Chunk was on web.js **/
/** chunk id: 478758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk730749 = require("./730749.js"),
  Chunk823379 = require("./823379.js"),
  Chunk534733 = require("./534733.js");
let u = 99,
  d = e => {
    let {
      member: t,
      empty: n,
      guildId: i
    } = e;
    return n || null == t ? <div className={c.partyMember} /> : <div className={c.partyMember}><a.qEK src={t.getAvatarURL(i, 16)} aria-label={t.username} size={a.EFr.SIZE_16} className={c.partyMember} /></div>
  },
  f = (0, Chunk730749.Z)(d),
  _ = e => {
    let {
      partySize: t,
      members: n,
      minAvatarsShown: i = 1,
      maxAvatarsShown: a = 2,
      guildId: s
    } = e, {
      totalSize: d,
      knownSize: _
    } = t;
    if (d < i) return null;
    let p = o()(n).filter(l.lm).take(a).map(e => <f member={e} guildId={s} />).value(),
      h = d - _;
    for (let e = 0; e < h && p.length < a; e++) p.push(<f empty={true} guildId={s} />);
    let m = Math.max(Math.min(d - p.length, u), 0);
    if (1 === m) {
      let e = n[a];
      p.push(<f member={e} guildId={s} />)
    }
    return <div className={c.wrapper}><div className={c.partyMembers}>{p}{m > 1 ? <div className={c.partyMemberOverflow}>{"+"}{m}</div> : null}</div></div>
  }