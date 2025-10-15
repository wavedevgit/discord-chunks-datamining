/** Chunk was on 46154 **/
/** chunk id: 109764, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk228392 = require("./228392.js"),
  Chunk592125 = require("./592125.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(t, n, e) {
  let f = (0, l.e7)([o.Z], () => null != t ? o.Z.getChannel(t.parent_id) : null);
  return null == t ? null : (0, i.jsx)(a.sNh, {
    id: "channel-copy-link",
    label: c.intl.string(c.t.WqhZsr),
    action: () => {
      t.isForumPost() && (0, r.B)({
        postId: t.id,
        location: {
          section: u.jXE.CONTEXT_MENU
        }
      }), (0, d.JG)((0, s.EO)(t, f, n, e))
    }
  })
}