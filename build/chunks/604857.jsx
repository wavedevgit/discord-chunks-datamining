/** Chunk was on 99014 **/
/** chunk id: 604857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.js"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737174 = require("./737174.js");

function f(e) {
  let {
    className: t,
    guildId: n,
    powerup: o,
    onError: f,
    onClose: b
  } = e, m = (0, c.ZP)(n, o), O = m.type === u.A3.TIER_OVERRIDE_ACTIVATED, j = (0, s.Z)(n), x = null == m.sourceEntitlement || !j;
  return <div className={i()(p.container, {
      [p.disabled]: x
    }, t)}>{!O && j && <l.Z guildId={n} powerup={o} onError={f} grow={false} compact={!x} />}{<a.zx color={x ? a.Tt.PRIMARY : a.Tt.BRAND} onClick={b}>{d.intl.string(d.t.cpT0Cg)}</a.zx>}</div>
}