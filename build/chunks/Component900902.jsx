/** Chunk was on 13873 **/
/** chunk id: 900902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk901461 = require("./901461.js"),
  Chunk453687 = require("./453687.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk981631 = require("./981631.js");
let p = Chunk647438.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: l = false,
      groupId: a,
      isGroupStart: s,
      usernameProfile: p,
      avatarProfile: f,
      setPopout: h,
      author: m,
      repliedMessage: g,
      roleIcon: b
    } = e, _ = (0, u.wq)(t.author.id, n.id), y = (0, u.XO)(t, n, p, h), C = (0, u.R9)(f, h), v = i.useCallback(() => {
      h({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [h]);
    return (0, r.jsx)(o.ZP, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: g,
      author: m,
      compact: l,
      subscribeToGroupId: a,
      showTimestampOnHover: !s && l && t.type !== d.uaV.REPLY,
      renderPopout: c.Z,
      showAvatarPopout: f,
      showUsernamePopout: p,
      onClickAvatar: C,
      onClickUsername: y,
      onContextMenu: _,
      onPopoutRequestClose: v,
      roleIcon: b
    })
  }),
  f = Chunk647438.memo(Chunk318713.Z);

function h(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: i,
    replyReference: o,
    author: s,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: h,
    channel: m,
    groupId: g
  } = t, {
    usernameProfile: b,
    avatarProfile: _
  } = i;
  if ((0, l.Z)(d)) return null;
  let y = d.id === g;
  return y || h || null != o ? (0, r.jsx)(p, {
    message: d,
    channel: m,
    compact: h,
    subscribeToGroupId: g,
    isGroupStart: y,
    groupId: g,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: _,
    author: s,
    repliedMessage: c,
    roleIcon: u
  }) : (0, r.jsx)(f, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.Dv)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}