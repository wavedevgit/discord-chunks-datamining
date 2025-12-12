/** Chunk was on 93979 **/
/** chunk id: 323090, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199912 = require("./199912.js");

function j(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: j,
    guildId: g,
    subsection: I,
    onClose: y
  } = e, {
    trackUserProfileAction: Z
  } = (0, s.KZ)(), O = (0, i.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), N = (0, i.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: v.scroller,
    children: [(null == j ? true : j.bio) != null && (null == j ? true : j.bio) !== "" && (0, l.jsx)(f.Z, {
      userBio: j.bio,
      setLineClamp: false
    }), (null == O ? true : O.popularApplicationCommandIds) != null && null != N && (0, l.jsx)(u.Z, {
      applicationId: O.id,
      commandIds: O.popularApplicationCommandIds,
      channel: N,
      guildId: g,
      onClick: y
    }), (null == j ? true : j.guildId) != null && (0, l.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guildId: j.guildId,
      scrollIntoView: I === h.Tb.ROLES
    }), (0, l.jsx)(p.Z, {
      heading: b.intl.string(b.t["A//N4k"]),
      children: (0, l.jsx)(m.Z, {
        userId: n.id,
        guildId: g,
        tooltipDelay: h.vB
      })
    }), (0, l.jsx)(p.Z, {
      heading: b.intl.string(b.t["mQKv+v"]),
      scrollIntoView: I === h.Tb.NOTE,
      children: (0, l.jsx)(r.Z, {
        userId: n.id,
        className: v.note,
        autoFocus: I === h.Tb.NOTE,
        onUpdate: () => Z({
          action: "SET_NOTE"
        })
      })
    })]
  })
}