/** Chunk was on 75708 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk584973 = require("./584973.js"),
  Chunk60213 = require("./60213.js");

function o(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: r,
    textClassName: o,
    placeholderText: c,
    soloEmojiClassName: d,
    animate: u = true,
    hideTooltip: m = false,
    hideEmoji: p = false,
    children: g
  } = e;
  if (null == t) return null;
  let {
    emoji: h
  } = t, f = null != t.state && "" !== t.state ? t.state : c;
  return <div className={s()(l.__invalid_container, n)}>{p || null == h ? null : <a.Z emoji={h} className={s()(l.emoji, r, null != d ? {
        [d]: null == f || "" === f
      } : null)} animate={u} hideTooltip={m} />}{null != f && f.length > 0 ? <span className={o}>{f}</span> : null}{g}</div>
}