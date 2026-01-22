/** Chunk was on 97492 **/
/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let f = Chunk64700.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: i = false,
      groupId: a,
      isGroupStart: o,
      usernameProfile: f,
      avatarProfile: p,
      setPopout: h,
      author: b,
      repliedMessage: g,
      roleIcon: m
    } = e, A = (0, u.r4)(t.author.id, n.id), y = (0, u.m)(t, n, f, h), O = (0, u.Jo)(p, h), j = l.useCallback(() => {
      h({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [h]);
    return (0, r.jsx)(s.Ay, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: g,
      author: b,
      compact: i,
      subscribeToGroupId: a,
      showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
      renderPopout: c.A,
      showAvatarPopout: p,
      showUsernamePopout: f,
      onClickAvatar: O,
      onClickUsername: y,
      onContextMenu: A,
      onPopoutRequestClose: j,
      roleIcon: m
    })
  }),
  p = Chunk64700.memo(Chunk449859.A);

function h(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: l,
    replyReference: s,
    author: o,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: h,
    channel: b,
    groupId: g
  } = t, {
    usernameProfile: m,
    avatarProfile: A
  } = l;
  if ((0, i.A)(d)) return null;
  let y = d.id === g;
  return y || h || null != s ? (0, r.jsx)(f, {
    message: d,
    channel: b,
    compact: h,
    subscribeToGroupId: g,
    isGroupStart: y,
    groupId: g,
    setPopout: n,
    usernameProfile: m,
    avatarProfile: A,
    author: o,
    repliedMessage: c,
    roleIcon: u
  }) : (0, r.jsx)(p, {
    compact: true,
    timestamp: d.timestamp,
    isInline: false,
    id: (0, a.xl)(d),
    isVisibleOnlyOnHover: true,
    cozyAlt: true
  })
}