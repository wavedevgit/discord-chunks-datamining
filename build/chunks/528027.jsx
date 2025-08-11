/** Chunk was on 2686 **/
/** chunk id: 528027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk596454 = require("./596454.js"),
  Chunk377171 = require("./377171.js"),
  Chunk403910 = require("./403910.js"),
  Chunk549631 = require("./549631.js"),
  Chunk366523 = require("./366523.js");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: f
  } = e, m = (0, a.Z)(n, i);
  return null != m || null != d ? <o.Z emojiId={null == m ? true : m.id} emojiName={null != d ? d : null == m ? true : m.name} animated={null != (t = null == m ? true : m.animated) && t} className={l()(s.emojiIcon, f)} /> : <c.Z className={l()(s.emojiIcon, f)} color={u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON} />
}