/** Chunk was on 1272 **/
/** chunk id: 841710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u,
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk376316 = require("./376316.js");

function c(e) {
  let {
    user: t,
    status: n,
    isFocused: i,
    guildId: l
  } = e;
  return <div className={s.memberItem}>{<a.qEK src={t.getAvatarURL(l, 24)} className={s.avatar} aria-label={t.username} size={a.EFr.SIZE_24} status={n} statusColor={i ? "currentColor" : true} />}{<o.Z user={t} hideDiscriminator={true} />}</div>
}

function u(e) {
  let {
    label: t
  } = e;
  return <div className={s.memberItem}>{<div className={l()(s.avatar, s.unknown)} />}{<div>{t}</div>}</div>
}