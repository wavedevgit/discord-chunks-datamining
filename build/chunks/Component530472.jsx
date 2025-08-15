/** Chunk was on 66866 **/
/** chunk id: 530472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk824203 = require("./824203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342526 = require("./342526.js");

function c(e) {
  var t;
  let n, {
      message: c,
      onDeleteMessage: u,
      children: d
    } = e,
    p = null == (t = c.interactionMetadata) ? true : t.ephemerality_reason,
    m = () => u(c, true);
  if (null != p) {
    let e = (0, l.i)(p);
    n = (0, r.jsx)("div", {
      className: s.userAppsBetaContent,
      children: o.intl.format(o.t.wx1tLS, {
        handleDelete: m,
        reason: e
      })
    })
  } else n = c.type === a.uaV.STAGE_RAISE_HAND ? o.intl.format(o.t["qDAX+/"], {
    handleDelete: m
  }) : o.intl.format(o.t.uX3ecH, {
    count: 1,
    countMessages: 1,
    handleDelete: m
  });
  return (0, r.jsxs)("div", {
    className: s.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, r.jsx)(i.tEF, {
      size: "xs",
      color: "currentColor",
      className: s.icon
    }), n, d]
  })
}