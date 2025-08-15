/** Chunk was on 86357 **/
/** chunk id: 900902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk901461 = require("./901461.js"),
  Chunk453687 = require("./453687.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk981631 = require("./981631.js");
let p = Chunk73800.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: l = false,
      groupId: a,
      isGroupStart: s,
      usernameProfile: p,
      avatarProfile: h,
      setPopout: f,
      author: m,
      repliedMessage: g,
      roleIcon: b
    } = e, y = (0, u.wq)(t.author.id, n.id), _ = (0, u.XO)(t, n, p, f), C = (0, u.R9)(h, f), x = i.useCallback(() => {
      f({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [f]);
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
      showAvatarPopout: h,
      showUsernamePopout: p,
      onClickAvatar: C,
      onClickUsername: _,
      onContextMenu: y,
      onPopoutRequestClose: x,
      roleIcon: b
    })
  }),
  h = Chunk73800.memo(Chunk318713.Z);

function f(e) {
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
    compact: f,
    channel: m,
    groupId: g
  } = t, {
    usernameProfile: b,
    avatarProfile: y
  } = i;
  if ((0, l.Z)(d)) return null;
  let _ = d.id === g;
  return _ || f || null != o ? (0, r.jsx)(p, {
    message: d,
    channel: m,
    compact: f,
    subscribeToGroupId: g,
    isGroupStart: _,
    groupId: g,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: y,
    author: s,
    repliedMessage: c,
    roleIcon: u
  }) : (0, r.jsx)(h, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.Dv)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}