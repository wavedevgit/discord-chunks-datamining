/** Chunk was on 66866 **/
/** chunk id: 303135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk769409 = require("./769409.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    message: t,
    usernameHook: n,
    compact: u
  } = e, d = (0, o.ZP)(t), p = n(d);
  return (0, r.jsx)(s.Z, {
    iconNode: (0, r.jsx)(i.vdY, {
      size: "xs",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: u,
    children: c.intl.format(c.t["4wLp29"], {
      username: d.nick,
      usernameHook: p,
      editGroupButton: (0, r.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: c.intl.string(c.t["5Q9+/P"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, a.B)(t.channel_id, l.Z.GROUP_DM_SYSTEM_MESSAGE_ICON)
    })
  })
}