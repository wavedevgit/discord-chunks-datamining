/** Chunk was on web.js **/
/** chunk id: 10433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk873546 = require("./873546.js"),
  Chunk399606 = require("./399606.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk526930 = require("./526930.js");

function E(e) {
  let {
    code: t,
    message: n
  } = e, [E, b, y] = (0, s.Wu)([_.Z], () => [_.Z.getApplication(t), _.Z.isInvalidApplication(t), _.Z.getApplicationFetchState(t)], [t]), O = (0, s.e7)([d.Z], () => {
    var e;
    return null != (e = d.Z.getGuildId()) ? e : true
  }), [v, S] = i.useState(false), I = i.useCallback(e => {
    e && S(true)
  }, []), T = (0, a.O)(I), C = i.useCallback(() => {
    f.default.track(m.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: t,
      device_platform: o.tq ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: O,
      channel_id: n.channel_id
    })
  }, [t, O, n.author.id, n.channel_id]);
  return (i.useEffect(() => {
    (0, p.gZ)(t)
  }, [t]), i.useEffect(() => {
    v && y === _.M.FETCHED && C()
  }, [v, y, C]), i.useEffect(() => {
    v && b && f.default.track(m.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: o.tq ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: O,
      channel_id: n.channel_id
    })
  }, [v, O, b, n.author.id, n.channel_id]), b) ? (0, r.jsxs)(c.Z, {
    containerRef: T,
    children: [(0, r.jsx)(c.Z.Header, {
      text: h.intl.string(h.t.j4KtLa)
    }), (0, r.jsx)(c.Z.Body, {
      children: (0, r.jsxs)("div", {
        className: g.invalidBody,
        children: [(0, r.jsx)(c.Z.Icon, {
          expired: true
        }), (0, r.jsx)(c.Z.Info, {
          expired: true,
          title: h.intl.string(h.t.NaQLEx),
          children: h.intl.string(h.t["0H5OT2"])
        })]
      })
    })]
  }) : null == E || y === _.M.FETCHING ? (0, r.jsxs)(c.Z, {
    containerRef: T,
    children: [(0, r.jsx)(c.Z.Header, {
      text: h.intl.string(h.t.m9hXGR)
    }), (0, r.jsx)(c.Z.Body, {
      resolving: true
    })]
  }) : (0, r.jsx)(l.O, {
    app: u.ZP.createFromServer(E),
    linkType: l.U.APP_DISCOVERY,
    onView: C,
    message: n
  })
}