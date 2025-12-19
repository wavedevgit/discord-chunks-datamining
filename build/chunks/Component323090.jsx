/** Chunk was on 93979 **/
/** chunk id: 323090, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk621853 = require("./621853.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk900927 = require("./900927.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk179828 = require("./179828.jsx"),
  Chunk878566 = require("./878566.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199912 = require("./199912.js");

function v(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: v,
    guildId: b,
    onClose: g
  } = e, I = (0, i.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getUserProfile(n.id)) ? true : e.application
  }), y = (0, i.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
  return (0, l.jsxs)(o.zJl, {
    fade: true,
    className: j.scroller,
    children: [(null == v ? true : v.bio) != null && (null == v ? true : v.bio) !== "" && (0, l.jsx)(d.Z, {
      userBio: v.bio,
      setLineClamp: false
    }), (null == I ? true : I.popularApplicationCommandIds) != null && null != y && (0, l.jsx)(s.Z, {
      applicationId: I.id,
      commandIds: I.popularApplicationCommandIds,
      channel: y,
      guildId: b,
      onClick: g
    }), (null == v ? true : v.guildId) != null && (0, l.jsx)(m.Z, {
      user: n,
      currentUser: t,
      guildId: v.guildId
    }), (0, l.jsx)(f.Z, {
      heading: h.intl.string(h.t["A//N4k"]),
      children: (0, l.jsx)(u.Z, {
        userId: n.id,
        guildId: b,
        tooltipDelay: x.vB
      })
    }), (0, l.jsx)(p.Z, {
      userId: n.id
    })]
  })
}