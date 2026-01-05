/** Chunk was on 40184 **/
/** chunk id: 900902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
      avatarProfile: f,
      setPopout: h,
      author: m,
      repliedMessage: g,
      roleIcon: b
    } = e, C = (0, u.wq)(t.author.id, n.id), y = (0, u.XO)(t, n, p, h), v = (0, u.R9)(f, h), x = r.useCallback(() => {
      h({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [h]);
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
      showAvatarPopout: f,
      showUsernamePopout: p,
      onClickAvatar: v,
      onClickUsername: y,
      onContextMenu: C,
      onPopoutRequestClose: x,
      roleIcon: b
    })
  }),
  f = Chunk473749.memo(Chunk318713.Z);

function h(e) {
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
    compact: h,
    channel: m,
    groupId: g
  } = t, {
    usernameProfile: b,
    avatarProfile: C
  } = r;
  if ((0, l.Z)(d)) return null;
  let y = d.id === g;
  return y || h || null != o ? (0, i.jsx)(p, {
    message: d,
    channel: m,
    compact: h,
    subscribeToGroupId: g,
    isGroupStart: y,
    groupId: g,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: C,
    author: s,
    repliedMessage: c,
    roleIcon: u
  }) : (0, i.jsx)(f, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.Dv)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}