/** Chunk was on 93979 **/
/** chunk id: 323090, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk54966 = require("./54966.js");

function v(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: v,
    guildId: g,
    subsection: y,
    onClose: O
  } = e, {
    trackUserProfileAction: I
  } = (0, a.KZ)(), Z = (0, o.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), _ = (0, o.e7)([c.Z, s.Z], () => c.Z.getChannel(s.Z.getChannelId()));
  return (0, l.jsxs)(r.zJl, {
    fade: true,
    className: j.scroller,
    children: [(null == v ? true : v.bio) != null && (null == v ? true : v.bio) !== "" && (0, l.jsx)(m.Z, {
      userBio: v.bio,
      setLineClamp: false
    }), (null == Z ? true : Z.popularApplicationCommandIds) != null && null != _ && (0, l.jsx)(u.Z, {
      applicationId: Z.id,
      commandIds: Z.popularApplicationCommandIds,
      channel: _,
      guildId: g,
      onClick: O
    }), (null == v ? true : v.guildId) != null && (0, l.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guildId: v.guildId,
      scrollIntoView: y === h.Tb.ROLES
    }), (0, l.jsx)(p.Z, {
      heading: b.intl.string(b.t["A//N4u"]),
      children: (0, l.jsx)(f.Z, {
        userId: n.id,
        guildId: g,
        tooltipDelay: h.vB
      })
    }), (0, l.jsx)(p.Z, {
      heading: b.intl.string(b.t["mQKv+v"]),
      scrollIntoView: y === h.Tb.NOTE,
      children: (0, l.jsx)(i.Z, {
        userId: n.id,
        className: j.note,
        autoFocus: y === h.Tb.NOTE,
        onUpdate: () => I({
          action: "SET_NOTE"
        })
      })
    })]
  })
}