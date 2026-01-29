/** Chunk was on 1113 **/
/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
      groupId: s,
      isGroupStart: o,
      usernameProfile: h,
      avatarProfile: p,
      setPopout: g,
      author: f,
      repliedMessage: m,
      roleIcon: b
    } = e, A = (0, u.r4)(t.author.id, n.id), y = (0, u.m)(t, n, h, g), O = (0, u.Jo)(p, g), _ = l.useCallback(() => {
      g({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [g]);
    return (0, r.jsx)(a.Ay, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: m,
      author: f,
      compact: i,
      subscribeToGroupId: s,
      showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
      renderPopout: c.A,
      showAvatarPopout: p,
      showUsernamePopout: h,
      onClickAvatar: O,
      onClickUsername: y,
      onContextMenu: A,
      onPopoutRequestClose: _,
      roleIcon: b
    })
  }),
  p = Chunk64700.memo(Chunk449859.A);

function g(e) {
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
    compact: g,
    channel: f,
    groupId: m
  } = t, {
    usernameProfile: b,
    avatarProfile: A
  } = l;
  if ((0, i.A)(d)) return null;
  let y = d.id === m;
  return y || g || null != a ? (0, r.jsx)(h, {
    message: d,
    channel: f,
    compact: g,
    subscribeToGroupId: m,
    isGroupStart: y,
    groupId: m,
    setPopout: n,
    usernameProfile: b,
    avatarProfile: A,
    author: o,
    repliedMessage: c,
    roleIcon: u
  }) : (0, r.jsx)(p, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, s.xl)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}