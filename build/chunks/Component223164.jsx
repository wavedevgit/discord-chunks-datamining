/** Chunk was on 78712 **/
/** chunk id: 223164, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk314311 = require("./314311.js"),
  Chunk430864 = require("./430864.js");

function f(t) {
  let {
    channel: n,
    isFromComposer: e,
    transitionState: a,
    onClose: f
  } = t;
  return s.useEffect(() => () => {
    e && d.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE)
  }, [e]), (0, i.jsx)(c.Modal, {
    transitionState: a,
    onClose: f,
    title: p.intl.string(p.t["4d4T4l"]),
    actions: [{
      text: p.intl.string(p.t["NX+WJN"]),
      onClick: f
    }],
    children: (0, i.jsx)(l.Text, {
      className: o()(h.content, x.markup),
      variant: "text-sm/normal",
      color: "text-default",
      children: (0, i.jsx)("div", {
        children: r.Z.parseForumPostGuidelines(n.topic, true, {
          channelId: n.id,
          allowHeading: true,
          allowList: true
        })
      })
    })
  })
}