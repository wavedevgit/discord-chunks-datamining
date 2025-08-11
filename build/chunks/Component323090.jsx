/** Chunk was on 11776 **/
/** chunk id: 323090, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk349966 = require("./349966.js");

function x(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: x,
    guildId: y,
    subsection: v,
    onClose: O
  } = e, {
    trackUserProfileAction: _
  } = (0, s.KZ)(), I = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getUserProfile(t.id)) ? true : e.application
  }), P = (0, l.e7)([a.Z, c.Z], () => a.Z.getChannel(c.Z.getChannelId()));
  return (0, r.jsxs)(i.zJl, {
    fade: true,
    className: h.scroller,
    children: [(null == x ? true : x.bio) != null && (null == x ? true : x.bio) !== "" && (0, r.jsx)(f.Z, {
      userBio: x.bio,
      setLineClamp: false
    }), (null == I ? true : I.popularApplicationCommandIds) != null && null != P && (0, r.jsx)(u.Z, {
      applicationId: I.id,
      commandIds: I.popularApplicationCommandIds,
      channel: P,
      guildId: y,
      onClick: O
    }), (null == x ? true : x.guildId) != null && (0, r.jsx)(g.Z, {
      user: t,
      currentUser: n,
      guildId: x.guildId,
      scrollIntoView: v === b.Tb.ROLES
    }), (0, r.jsx)(p.Z, {
      heading: j.intl.string(j.t["A//N4u"]),
      children: (0, r.jsx)(m.Z, {
        userId: t.id,
        guildId: y,
        tooltipDelay: b.vB
      })
    }), (0, r.jsx)(p.Z, {
      heading: j.intl.string(j.t["mQKv+v"]),
      scrollIntoView: v === b.Tb.NOTE,
      children: (0, r.jsx)(o.Z, {
        userId: t.id,
        className: h.note,
        autoFocus: v === b.Tb.NOTE,
        onUpdate: () => _({
          action: "SET_NOTE"
        })
      })
    })]
  })
}