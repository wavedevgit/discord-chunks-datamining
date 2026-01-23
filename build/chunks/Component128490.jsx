/** Chunk was on 64228 **/
/** chunk id: 128490, original params: e,t,n (module,exports,require) **/
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
    user: t,
    displayProfile: n,
    guildId: h,
    onClose: g
  } = e, v = (0, i.bG)([a.A], () => {
    var e;
    return null == (e = a.A.getUserProfile(t.id)) ? true : e.application
  }), b = (0, i.bG)([s.A, o.A], () => s.A.getChannel(o.A.getChannelId()));
  return (0, l.jsxs)(r.IpV, {
    fade: true,
    className: j.XG,
    children: [(null == n ? true : n.bio) != null && (null == n ? true : n.bio) !== "" && (0, l.jsx)(d.A, {
      userBio: n.bio,
      setLineClamp: false
    }), (null == v ? true : v.popularApplicationCommandIds) != null && null != b && (0, l.jsx)(c.A, {
      applicationId: v.id,
      commandIds: v.popularApplicationCommandIds,
      channel: b,
      guildId: h,
      onClick: g
    }), (null == n ? true : n.guildId) != null && (0, l.jsx)(m.A, {
      userId: t.id,
      guildId: n.guildId
    }), (0, l.jsx)(p.A, {
      heading: x.intl.string(x.t["A//N4k"]),
      children: (0, l.jsx)(u.A, {
        userId: t.id,
        guildId: h,
        tooltipDelay: A.In
      })
    }), (0, l.jsx)(f.A, {
      userId: t.id
    })]
  })
}