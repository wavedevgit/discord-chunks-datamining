/** Chunk was on web.js **/
/** chunk id: 303135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk769409 = require("./769409.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.js");

function u(e) {
  let {
    message: t,
    usernameHook: n,
    compact: u
  } = e, d = (0, s.ZP)(t), f = n(d);
  return <l.Z iconNode={(0, r.jsx)(i.vdY, {
      size: "xs",
      color: "currentColor"
    })} timestamp={t.timestamp} compact={u}>{c.intl.format(c.t["4wLp29"], {
      username: d.nick,
      usernameHook: f,
      editGroupButton: (0, r.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: c.intl.string(c.t["5Q9+/P"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, a.B)(t.channel_id, o.Z.GROUP_DM_SYSTEM_MESSAGE_ICON)
    })}</l.Z>
}