/** Chunk was on 22988 **/
/** chunk id: 331146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk723047 = require("./723047.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.js"),
  Chunk294916 = require("./294916.js");

function m(e) {
  let {
    emoji: t,
    onRemoveEmoji: n,
    disabled: i = false
  } = e, o = s.ZP.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return <div className={l()(u.emojiRow, {
      [u.disabled]: i
    })}>{<img className={u.emojiImage} src={o} alt={t.name} />}{<a.Text color={"header-primary"} variant={"text-md/medium"} className={u.emojiAlias}>{t.name}</a.Text>}{<div className={u.deleteButton}><a.hU variant={"secondary"} icon={a.XHJ} onClick={() => n(t)} aria-label={d.intl.string(d.t.dVS92d)} disabled={i} /></div>}</div>
}

function g(e) {
  let {
    tierEmojiIds: t,
    guildId: n,
    onRemoveEmoji: i
  } = e, l = (0, c.Z)(n), a = null != t ? l.filter(e => t.has(e.id)) : [], s = (0, o.mY)();
  return <div className={u.container}>{a.map(e => (0, r.jsx)(m, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: s
    }, e.id))}</div>
}