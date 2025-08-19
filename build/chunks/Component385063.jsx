/** Chunk was on 91173 **/
/** chunk id: 385063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk769409 = require("./769409.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    message: t,
    usernameHook: n,
    compact: p,
    isForumPost: m
  } = e, f = (0, c.ZP)(t), g = n(f), _ = (0, i.e7)([s.Z], () => {
    var e, n;
    return null != (n = null == (e = s.Z.getChannel(t.channel_id)) ? true : e.isGroupDM()) && n
  });
  return (0, r.jsx)(u.Z, {
    compact: p,
    iconNode: (0, r.jsx)(l.vdY, {
      size: "xs",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    children: _ ? d.intl.format("" === t.content ? d.t.AI1ZZm : d.t.geP3ra, {
      username: f.nick,
      usernameHook: g,
      channelName: (0, r.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-primary",
        children: t.content
      }, "group-name-".concat(t.id)),
      editGroupButton: (0, r.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: d.intl.string(d.t["5Q9+/P"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, o.B)(t.channel_id, a.Z.GROUP_DM_SYSTEM_MESSAGE_NAME)
    }) : d.intl.format(m ? d.t.SOQ4hI : d.t.oItgEx, {
      username: f.nick,
      usernameHook: g,
      channelName: t.content
    })
  })
}