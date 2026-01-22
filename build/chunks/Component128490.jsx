/** Chunk was on 64228 **/
/** chunk id: 128490, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk622543 = require("./622543.js"),
  Chunk987112 = require("./987112.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk743987 = require("./743987.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk280645 = require("./280645.jsx"),
  Chunk928223 = require("./928223.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk195723 = require("./195723.js");

function h(e) {
  let {
    user: l,
    displayProfile: t,
    guildId: h,
    onClose: g
  } = e, v = (0, i.bG)([o.A], () => {
    var e;
    return null == (e = o.A.getUserProfile(l.id)) ? true : e.application
  }), b = (0, i.bG)([s.A, a.A], () => s.A.getChannel(a.A.getChannelId()));
  return (0, n.jsxs)(r.IpV, {
    fade: true,
    className: j.XG,
    children: [(null == t ? true : t.bio) != null && (null == t ? true : t.bio) !== "" && (0, n.jsx)(c.A, {
      userBio: t.bio,
      setLineClamp: false
    }), (null == v ? true : v.popularApplicationCommandIds) != null && null != b && (0, n.jsx)(d.A, {
      applicationId: v.id,
      commandIds: v.popularApplicationCommandIds,
      channel: b,
      guildId: h,
      onClick: g
    }), (null == t ? true : t.guildId) != null && (0, n.jsx)(p.A, {
      userId: l.id,
      guildId: t.guildId
    }), (0, n.jsx)(f.A, {
      heading: A.intl.string(A.t["A//N4k"]),
      children: (0, n.jsx)(u.A, {
        userId: l.id,
        guildId: h,
        tooltipDelay: x.In
      })
    }), (0, n.jsx)(m.A, {
      userId: l.id
    })]
  })
}