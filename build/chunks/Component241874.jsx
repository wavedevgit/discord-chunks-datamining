/** Chunk was on 61344 **/
/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk143413 = require("./143413.js"),
  Chunk860227 = require("./860227.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk449859 = require("./449859.jsx"),
  Chunk535421 = require("./535421.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk652215 = require("./652215.js");
let h = Chunk64700.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i = false,
      groupId: a,
      isGroupStart: o,
      usernameProfile: h,
      avatarProfile: p,
      setPopout: f,
      author: m,
      repliedMessage: g,
      roleIcon: A
    } = e, b = (0, u.r4)(t.author.id, n.id), _ = (0, u.m)(t, n, h, f), y = (0, u.Jo)(p, f), v = r.useCallback(() => {
      f({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [f]);
    return (0, l.jsx)(s.Ay, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: g,
      author: m,
      compact: i,
      subscribeToGroupId: a,
      showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
      renderPopout: c.A,
      showAvatarPopout: p,
      showUsernamePopout: h,
      onClickAvatar: y,
      onClickUsername: _,
      onContextMenu: b,
      onPopoutRequestClose: v,
      roleIcon: A
    })
  }),
  p = Chunk64700.memo(Chunk449859.A);

function f(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: r,
    replyReference: s,
    author: o,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: f,
    channel: m,
    groupId: g
  } = t, {
    usernameProfile: A,
    avatarProfile: b
  } = r;
  if ((0, i.A)(d)) return null;
  let _ = d.id === g;
  return _ || f || null != s ? (0, l.jsx)(h, {
    message: d,
    channel: m,
    compact: f,
    subscribeToGroupId: g,
    isGroupStart: _,
    groupId: g,
    setPopout: n,
    usernameProfile: A,
    avatarProfile: b,
    author: o,
    repliedMessage: c,
    roleIcon: u
  }) : (0, l.jsx)(p, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.xl)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}