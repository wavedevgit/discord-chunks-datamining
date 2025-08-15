/** Chunk was on 78650 **/
/** chunk id: 109764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk228392 = require("./228392.js"),
  Chunk592125 = require("./592125.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  let f = (0, r.e7)([o.Z], () => null != e ? o.Z.getChannel(e.parent_id) : null);
  return null == e ? null : (0, i.jsx)(l.sNh, {
    id: "channel-copy-link",
    label: c.intl.string(c.t.WqhZsr),
    action: () => {
      e.isForumPost() && (0, a.B)({
        postId: e.id,
        location: {
          section: u.jXE.CONTEXT_MENU
        }
      }), (0, d.JG)((0, s.EO)(e, f, t, n))
    }
  })
}