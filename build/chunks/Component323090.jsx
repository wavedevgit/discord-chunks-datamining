/** Chunk was on 82008 **/
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
    guildId: v,
    subsection: y,
    onClose: O
  } = e, {
    trackUserProfileAction: I
  } = (0, a.KZ)(), _ = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), Z = (0, l.e7)([c.Z, s.Z], () => c.Z.getChannel(s.Z.getChannelId()));
  return (0, r.jsxs)(o.zJl, {
    fade: true,
    className: j.scroller,
    children: [(null == g ? true : g.bio) != null && (null == g ? true : g.bio) !== "" && (0, r.jsx)(f.Z, {
      userBio: g.bio,
      setLineClamp: false
    }), (null == _ ? true : _.popularApplicationCommandIds) != null && null != Z && (0, r.jsx)(u.Z, {
      applicationId: _.id,
      commandIds: _.popularApplicationCommandIds,
      channel: Z,
      guildId: v,
      onClick: O
    }), (null == g ? true : g.guildId) != null && (0, r.jsx)(h.Z, {
      user: n,
      currentUser: t,
      guildId: g.guildId,
      scrollIntoView: y === b.Tb.ROLES
    }), (0, r.jsx)(p.Z, {
      heading: x.intl.string(x.t["A//N4u"]),
      children: (0, r.jsx)(m.Z, {
        userId: n.id,
        guildId: v,
        tooltipDelay: b.vB
      })
    }), (0, r.jsx)(p.Z, {
      heading: x.intl.string(x.t["mQKv+v"]),
      scrollIntoView: y === b.Tb.NOTE,
      children: (0, r.jsx)(i.Z, {
        userId: n.id,
        className: j.note,
        autoFocus: y === b.Tb.NOTE,
        onUpdate: () => I({
          action: "SET_NOTE"
        })
      })
    })]
  })
}