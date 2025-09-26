/** Chunk was on 78712 **/
/** chunk id: 223164, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk314311 = require("./314311.js"),
  Chunk430864 = require("./430864.js");

function k(t) {
  let {
    channel: n,
    isFromComposer: e,
    transitionState: a,
    onClose: k
  } = t;
  return s.useEffect(() => () => {
    e && d.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE)
  }, [e]), (0, i.jsx)(c.Modal, {
    transitionState: a,
    onClose: k,
    title: p.intl.string(p.t["4d4T4u"]),
    actions: [{
      text: p.intl.string(p.t["NX+WJC"]),
      onClick: k
    }],
    children: (0, i.jsx)(r.Text, {
      className: o()(h.content, C.markup),
      variant: "text-sm/normal",
      color: "header-secondary",
      children: (0, i.jsx)("div", {
        children: l.Z.parseForumPostGuidelines(n.topic, true, {
          channelId: n.id,
          allowHeading: true,
          allowList: true
        })
      })
    })
  })
}