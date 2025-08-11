/** Chunk was on web.js **/
/** chunk id: 579612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GQ: () => g,
  MC: () => m,
  P: () => E,
  ZP: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk290082 = require("./290082.js");

function m(e) {
  let {
    channel: t
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = _.default.getUser(e);
    if (null == n) return null;
    let i = n.getAvatarURL(null, 20);
    return <a.qEK aria-hidden={true} className={h.searchResultDMChannelIcon} size={a.EFr.SIZE_20} src={i} />
  }
  if (t.isGroupDM()) return <c.Z aria-hidden={true} className={h.searchResultGDMChannelIcon} channel={t} size={a.EFr.SIZE_20} experimentLocation={"search_popout"} />;
  let n = (0, l.KS)(t);
  return null == n ? null : <n className={h.searchResultChannelIcon} />
}

function g(e) {
  let {
    channel: t
  } = e;
  return t.isDM() || t.isGroupDM() ? <span className={h.searchResultDMChannelName}>{(0, s.F6)(t, _.default, d.Z)}</span> : <strong>{(0, s.F6)(t, _.default, d.Z)}</strong>
}

function E(e) {
  let {
    channel: t
  } = e, n = u.Z.getChannel(t.parent_id);
  if (t.isDM()) {
    let e = t.getRecipientId(),
      n = _.default.getUser(e);
    return null == n ? null : <span className={h.searchResultDMUserName}>{p.ZP.getUserTag(n, {
        identifiable: f.Z.enabled && f.Z.hidePersonalInformation ? "never" : "always"
      })}</span>
  }
  if (null != n) return <span className={h.searchResultChannelCategory}>{(0, s.F6)(n, _.default, d.Z)}</span>
}

function b(e) {
  let {
    channel: t,
    text: n,
    channelContainerClassName: i,
    textContainerClassName: a
  } = e;
  return null == t ? <strong>{n}</strong> : <div className={o()(h.resultChannel, i)}>{<m channel={t} />}{<div className={a}>{<g channel={t} />}{<E channel={t} />}</div>}</div>
}