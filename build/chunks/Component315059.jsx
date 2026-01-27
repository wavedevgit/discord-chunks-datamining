/** Chunk was on 52199 **/
/** chunk id: 315059, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk598104 = require("./598104.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk996316 = require("./996316.js");
let c = function(e) {
  let {
    channel: t,
    avatarSize: r,
    iconSize: c,
    iconClassName: u
  } = e;
  if (t.isDM()) {
    let e = t.getRecipientId(),
      s = i.default.getUser(e);
    if (null == s) return null;
    let a = s.getAvatarURL(null, l.vCh[r].size);
    return (0, n.jsx)(l.euF, {
      "aria-hidden": true,
      className: o.B7,
      size: r,
      src: a
    })
  }
  if (t.isGroupDM()) return (0, n.jsx)(a.A, {
    "aria-hidden": true,
    className: o.w$,
    channel: t,
    size: r
  });
  let d = (0, s.gU)(t);
  return null == d ? null : (0, n.jsx)(d, {
    className: u,
    color: "currentColor",
    size: c
  })
}