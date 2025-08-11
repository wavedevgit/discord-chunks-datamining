/** Chunk was on web.js **/
/** chunk id: 900902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let f = Chunk73800.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: o = false,
      groupId: a,
      isGroupStart: l,
      usernameProfile: f,
      avatarProfile: _,
      setPopout: p,
      author: h,
      repliedMessage: m,
      roleIcon: g
    } = e, E = (0, u.wq)(t.author.id, n.id), b = (0, u.XO)(t, n, f, p), y = (0, u.R9)(_, p), O = i.useCallback(() => {
      p({
        usernameProfile: false,
        avatarProfile: false,
        referencedUsernameProfile: false
      })
    }, [p]);
    return <s.ZP guildId={n.guild_id} message={t} channel={n} repliedMessage={m} author={h} compact={o} subscribeToGroupId={a} showTimestampOnHover={!l && o && t.type !== d.uaV.REPLY} renderPopout={c.Z} showAvatarPopout={_} showUsernamePopout={f} onClickAvatar={y} onClickUsername={b} onContextMenu={E} onPopoutRequestClose={O} roleIcon={g} />
  }),
  _ = Chunk73800.memo(Chunk318713.Z);

function p(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: i,
    replyReference: s,
    author: l,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: p,
    channel: h,
    groupId: m
  } = t, {
    usernameProfile: g,
    avatarProfile: E
  } = i;
  if ((0, o.Z)(d)) return null;
  let b = d.id === m;
  return b || p || null != s ? <f message={d} channel={h} compact={p} subscribeToGroupId={m} isGroupStart={b} groupId={m} setPopout={n} usernameProfile={g} avatarProfile={E} author={l} repliedMessage={c} roleIcon={u} /> : <_ compact={true} timestamp={d.timestamp} isInline={false} id={(0, a.Dv)(d)} isVisibleOnlyOnHover={true} cozyAlt={true} />
}