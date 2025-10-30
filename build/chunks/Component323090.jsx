/** Chunk was on 93979 **/
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
  Chunk438160 = require("./438160.js");

function g(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: g,
    guildId: b,
    subsection: I,
    onClose: y
  } = e, {
    trackUserProfileAction: _
  } = (0, c.KZ)(), Z = (0, i.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(n.id)) ? true : e.application
  }), O = (0, i.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: j.scroller,
    children: [(null == g ? true : g.bio) != null && (null == g ? true : g.bio) !== "" && (0, l.jsx)(m.Z, {
      userBio: g.bio,
      setLineClamp: false
    }), (null == Z ? true : Z.popularApplicationCommandIds) != null && null != O && (0, l.jsx)(u.Z, {
      applicationId: Z.id,
      commandIds: Z.popularApplicationCommandIds,
      channel: O,
      guildId: b,
      onClick: y
    }), (null == g ? true : g.guildId) != null && (0, l.jsx)(x.Z, {
      user: n,
      currentUser: t,
      guildId: g.guildId,
      scrollIntoView: I === h.Tb.ROLES
    }), (0, l.jsx)(f.Z, {
      heading: v.intl.string(v.t["A//N4k"]),
      children: (0, l.jsx)(p.Z, {
        userId: n.id,
        guildId: b,
        tooltipDelay: h.vB
      })
    }), (0, l.jsx)(f.Z, {
      heading: v.intl.string(v.t["mQKv+v"]),
      scrollIntoView: I === h.Tb.NOTE,
      children: (0, l.jsx)(r.Z, {
        userId: n.id,
        className: j.note,
        autoFocus: I === h.Tb.NOTE,
        onUpdate: () => _({
          action: "SET_NOTE"
        })
      })
    })]
  })
}