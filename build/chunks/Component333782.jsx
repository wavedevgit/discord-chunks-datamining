/** Chunk was on 64935 **/
/** chunk id: 333782, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    message: t,
    usernameHook: n,
    compact: p,
    isForumPost: m
  } = e, f = (0, c.Ay)(t), g = n(f), _ = (0, i.bG)([o.A], () => {
    var e, n;
    return null != (e = null == (n = o.A.getChannel(t.channel_id)) ? true : n.isGroupDM()) && e
  });
  return (0, r.jsx)(u.A, {
    compact: p,
    iconNode: (0, r.jsx)(l.R2l, {
      size: "xs",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    children: _ ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
      username: f.nick,
      usernameHook: g,
      channelName: (0, r.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-strong",
        children: t.content
      }, "group-name-".concat(t.id)),
      editGroupButton: (0, r.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/medium",
        color: "text-link",
        children: d.intl.string(d.t["5Q9+/L"])
      }, "edit-group-button-".concat(t.id)),
      onEditGroup: () => (0, s.U)(t.channel_id, a.A.GROUP_DM_SYSTEM_MESSAGE_NAME)
    }) : d.intl.format(m ? d.t.SOQ4hJ : d.t.oItgEw, {
      username: f.nick,
      usernameHook: g,
      channelName: t.content
    })
  })
}