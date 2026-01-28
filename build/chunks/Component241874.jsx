/** Chunk was on 78528 **/
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
let p = Chunk64700.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i = false,
      groupId: s,
      isGroupStart: o,
      usernameProfile: p,
      avatarProfile: h,
      setPopout: f,
      author: g,
      repliedMessage: m,
      roleIcon: b
    } = e, A = (0, u.r4)(t.author.id, n.id), y = (0, u.m)(t, n, p, f), _ = (0, u.Jo)(h, f), O = l.useCallback(() => {
      f({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [f]);
    return (0, r.jsx)(a.Ay, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: m,
      author: g,
      compact: i,
      subscribeToGroupId: s,
      showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
      renderPopout: c.A,
      showAvatarPopout: h,
      showUsernamePopout: p,
      onClickAvatar: _,
      onClickUsername: y,
      onContextMenu: A,
      onPopoutRequestClose: O,
      roleIcon: b
    })
  }),
  h = Chunk64700.memo(Chunk449859.A);

function f(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: l,
    replyReference: a,
    author: o,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: f,
    channel: g,
    groupId: m
  } = t, {
    usernameProfile: b,
    avatarProfile: A
  } = l;
  if ((0, i.A)(d)) return null;
  let y = d.id === m;
  return y || f || null != a ? (0, r.jsx)(p, {
    message: d,
    channel: g,
    compact: f,
    subscribeToGroupId: m,
    isGroupStart: y,
    groupId: m,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: A,
    author: o,
    repliedMessage: c,
    roleIcon: u
  }) : (0, r.jsx)(h, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, s.xl)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}