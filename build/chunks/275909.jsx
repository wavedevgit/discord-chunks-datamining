/** Chunk was on 75708 **/
/** chunk id: 275909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk283029 = require("./283029.js"),
  Chunk60667 = require("./60667.js");
let o = function(e) {
  let {
    className: t,
    hasCooldown: r,
    isCanceled: o,
    useReducedMotion: c
  } = e;
  return <div className={s()(l.boostIconContainer, t)}>{o ? <img className={s()(l.boostIcon, l.boostIconCanceled)} src={n(457026)} alt={""} /> : <a.Z className={l.boostIcon} boostInCooldown={r} useReducedMotion={c} />}{!o && r && <img className={l.snowflake} src={n(765028)} alt={""} />}</div>
}