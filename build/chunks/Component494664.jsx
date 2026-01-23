/** Chunk was on 45457 **/
/** chunk id: 494664, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk303982 = require("./303982.js"),
  Chunk206314 = require("./206314.js");

function _(t) {
  let {
    channel: e,
    isFromComposer: i,
    transitionState: a,
    onClose: _
  } = t;
  return s.useEffect(() => () => {
    i && r._.dispatch(p.jej.FOCUS_COMPOSER_TITLE)
  }, [i]), (0, n.jsx)(o.Modal, {
    transitionState: a,
    onClose: _,
    title: u.intl.string(u.t["4d4T4l"]),
    actions: [{
      text: u.intl.string(u.t["NX+WJN"]),
      onClick: _
    }],
    children: (0, n.jsx)(c.Text, {
      className: l()(h.Q, x.PT),
      variant: "text-sm/normal",
      color: "text-default",
      children: (0, n.jsx)("div", {
        children: d.A.parseForumPostGuidelines(e.topic, true, {
          channelId: e.id,
          allowHeading: true,
          allowList: true
        })
      })
    })
  })
}