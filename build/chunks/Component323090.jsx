/** Chunk was on 99799 **/
/** chunk id: 323090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: _,
    guildId: j,
    subsection: v,
    onClose: y
  } = e, {
    trackUserProfileAction: I
  } = (0, s.KZ)(), O = (0, o.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(t.id)) ? true : e.application
  }), Z = (0, o.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
  return (0, r.jsxs)(i.zJl, {
    fade: true,
    className: x.scroller,
    children: [(null == _ ? true : _.bio) != null && (null == _ ? true : _.bio) !== "" && (0, r.jsx)(f.Z, {
      userBio: _.bio,
      setLineClamp: false
    }), (null == O ? true : O.popularApplicationCommandIds) != null && null != Z && (0, r.jsx)(u.Z, {
      applicationId: O.id,
      commandIds: O.popularApplicationCommandIds,
      channel: Z,
      guildId: j,
      onClick: y
    }), (null == _ ? true : _.guildId) != null && (0, r.jsx)(b.Z, {
      user: t,
      currentUser: n,
      guildId: _.guildId,
      scrollIntoView: v === g.Tb.ROLES
    }), (0, r.jsx)(m.Z, {
      heading: h.intl.string(h.t["A//N4u"]),
      children: (0, r.jsx)(p.Z, {
        userId: t.id,
        guildId: j,
        tooltipDelay: g.vB
      })
    }), (0, r.jsx)(m.Z, {
      heading: h.intl.string(h.t["mQKv+v"]),
      scrollIntoView: v === g.Tb.NOTE,
      children: (0, r.jsx)(l.Z, {
        userId: t.id,
        className: x.note,
        autoFocus: v === g.Tb.NOTE,
        onUpdate: () => I({
          action: "SET_NOTE"
        })
      })
    })]
  })
}