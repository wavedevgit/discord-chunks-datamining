/** Chunk was on 92917 **/
/** chunk id: 855532, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk73028 = require("./73028.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    message: t,
    usernameHook: n,
    compact: u
  } = e, d = (0, s.Ay)(t), p = n(d);
  return (0, r.jsx)(o.A, {
    iconNode: (0, r.jsx)(i.R2l, {
      size: "xs",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: u,
    children: c.intl.format(c.t["4wLp25"], {
      username: d.nick,
      usernameHook: p,
      editGroupButton: (0, r.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: c.intl.string(c.t["5Q9+/L"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, a.U)(t.channel_id, l.A.GROUP_DM_SYSTEM_MESSAGE_ICON)
    })
  })
}