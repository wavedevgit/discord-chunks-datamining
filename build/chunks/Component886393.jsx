/** Chunk was on 99041 **/
/** chunk id: 886393, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk853742 = require("./853742.js"),
  Chunk734057 = require("./734057.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(n, t, l) {
  let h = (0, e.bG)([s.A], () => null != n ? s.A.getChannel(n.parent_id) : null);
  return null == n ? null : (0, i.jsx)(a.Drp, {
    id: "channel-copy-link",
    label: u.intl.string(u.t.WqhZss),
    action: () => {
      n.isForumPost() && (0, r.jC)({
        postId: n.id,
        location: {
          section: d.JJy.CONTEXT_MENU
        }
      }), (0, o.C)((0, c.af)(n, h, t, l))
    }
  })
}