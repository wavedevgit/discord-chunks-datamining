/** Chunk was on 89250 **/
/** chunk id: 109764, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk228392 = require("./228392.js"),
  Chunk592125 = require("./592125.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(t, n, e) {
  let h = (0, l.e7)([s.Z], () => null != t ? s.Z.getChannel(t.parent_id) : null);
  return null == t ? null : (0, i.jsx)(a.sNh, {
    id: "channel-copy-link",
    label: c.intl.string(c.t.WqhZss),
    action: () => {
      t.isForumPost() && (0, r.B)({
        postId: t.id,
        location: {
          section: u.jXE.CONTEXT_MENU
        }
      }), (0, d.JG)((0, o.EO)(t, h, n, e))
    }
  })
}