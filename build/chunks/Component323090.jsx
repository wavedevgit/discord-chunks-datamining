/** Chunk was on 31553 **/
/** chunk id: 323090, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: g,
    guildId: b,
    subsection: y,
    onClose: O
  } = e, {
    trackUserProfileAction: I
  } = (0, c.KZ)(), Z = (0, r.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), P = (0, r.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
  return (0, l.jsxs)(i.zJl, {
    fade: true,
    className: v.scroller,
    children: [(null == g ? true : g.bio) != null && (null == g ? true : g.bio) !== "" && (0, l.jsx)(m.Z, {
      userBio: g.bio,
      setLineClamp: false
    }), (null == Z ? true : Z.popularApplicationCommandIds) != null && null != P && (0, l.jsx)(u.Z, {
      applicationId: Z.id,
      commandIds: Z.popularApplicationCommandIds,
      channel: P,
      guildId: b,
      onClick: O
    }), (null == g ? true : g.guildId) != null && (0, l.jsx)(h.Z, {
      user: n,
      currentUser: t,
      guildId: g.guildId,
      scrollIntoView: y === j.Tb.ROLES
    }), (0, l.jsx)(f.Z, {
      heading: x.intl.string(x.t["A//N4u"]),
      children: (0, l.jsx)(p.Z, {
        userId: n.id,
        guildId: b,
        tooltipDelay: j.vB
      })
    }), (0, l.jsx)(f.Z, {
      heading: x.intl.string(x.t["mQKv+v"]),
      scrollIntoView: y === j.Tb.NOTE,
      children: (0, l.jsx)(o.Z, {
        userId: n.id,
        className: v.note,
        autoFocus: y === j.Tb.NOTE,
        onUpdate: () => I({
          action: "SET_NOTE"
        })
      })
    })]
  })
}