/** Chunk was on web.js **/
/** chunk id: 333782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk73028 = require("./73028.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    message: t,
    usernameHook: n,
    compact: f,
    isForumPost: p
  } = e, _ = (0, c.Ay)(t), h = n(_), m = (0, i.bG)([l.A], () => {
    var e, n;
    return null != (e = null == (n = l.A.getChannel(t.channel_id)) ? true : n.isGroupDM()) && e
  });
  return (0, r.jsx)(u.A, {
    compact: f,
    iconNode: (0, r.jsx)(a.R2l, {
      size: "xs",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    children: m ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
      username: _.nick,
      usernameHook: h,
      channelName: (0, r.jsx)(a.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-strong",
        children: t.content
      }, "group-name-".concat(t.id)),
      editGroupButton: (0, r.jsx)(a.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: d.intl.string(d.t["5Q9+/L"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, o.U)(t.channel_id, s.A.GROUP_DM_SYSTEM_MESSAGE_NAME)
    }) : d.intl.format(p ? d.t.SOQ4hJ : d.t.oItgEw, {
      username: _.nick,
      usernameHook: h,
      channelName: t.content
    })
  })
}