/** Chunk was on 73755 **/
/** chunk id: 900902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk901461 = require("./901461.js"),
  Chunk453687 = require("./453687.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk318713 = require("./318713.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk981631 = require("./981631.js");
let p = Chunk473749.memo(function(e) {
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
    } = e, C = (0, u.wq)(t.author.id, n.id), y = (0, u.XO)(t, n, p, f), _ = (0, u.R9)(h, f), v = r.useCallback(() => {
      f({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [f]);
    return (0, i.jsx)(o.ZP, {
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
      onClickAvatar: _,
      onClickUsername: y,
      onContextMenu: C,
      onPopoutRequestClose: v,
      roleIcon: b
    })
  }),
  h = Chunk473749.memo(Chunk318713.Z);

function f(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: r,
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
    avatarProfile: C
  } = r;
  if ((0, l.Z)(d)) return null;
  let y = d.id === g;
  return y || f || null != o ? (0, i.jsx)(p, {
    message: d,
    channel: m,
    compact: f,
    subscribeToGroupId: g,
    isGroupStart: y,
    groupId: g,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: C,
    author: s,
    repliedMessage: c,
    roleIcon: u
  }) : (0, i.jsx)(h, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.Dv)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}