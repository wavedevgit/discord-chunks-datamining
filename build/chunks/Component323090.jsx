/** Chunk was on 98360 **/
/** chunk id: 323090, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: j,
    guildId: v,
    subsection: _,
    onClose: y
  } = e, {
    trackUserProfileAction: O
  } = (0, s.KZ)(), I = (0, o.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), Z = (0, o.e7)([c.Z, a.Z], () => c.Z.getChannel(a.Z.getChannelId()));
  return (0, r.jsxs)(l.zJl, {
    fade: true,
    className: h.scroller,
    children: [(null == j ? true : j.bio) != null && (null == j ? true : j.bio) !== "" && (0, r.jsx)(f.Z, {
      userBio: j.bio,
      setLineClamp: false
    }), (null == I ? true : I.popularApplicationCommandIds) != null && null != Z && (0, r.jsx)(u.Z, {
      applicationId: I.id,
      commandIds: I.popularApplicationCommandIds,
      channel: Z,
      guildId: v,
      onClick: y
    }), (null == j ? true : j.guildId) != null && (0, r.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guildId: j.guildId,
      scrollIntoView: _ === b.Tb.ROLES
    }), (0, r.jsx)(p.Z, {
      heading: g.intl.string(g.t["A//N4u"]),
      children: (0, r.jsx)(m.Z, {
        userId: n.id,
        guildId: v,
        tooltipDelay: b.vB
      })
    }), (0, r.jsx)(p.Z, {
      heading: g.intl.string(g.t["mQKv+v"]),
      scrollIntoView: _ === b.Tb.NOTE,
      children: (0, r.jsx)(i.Z, {
        userId: n.id,
        className: h.note,
        autoFocus: _ === b.Tb.NOTE,
        onUpdate: () => O({
          action: "SET_NOTE"
        })
      })
    })]
  })
}