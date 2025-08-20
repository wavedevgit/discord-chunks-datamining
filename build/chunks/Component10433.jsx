/** Chunk was on 26434 **/
/** chunk id: 10433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk399606 = require("./399606.js"),
  Chunk434650 = require("./434650.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk471518 = require("./471518.js"),
  Chunk370210 = require("./370210.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923289 = require("./923289.js");

function b(e) {
  let {
    code: t,
    message: n
  } = e, [b, E, C] = (0, o.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isInvalidApplication(t), f.Z.getApplicationFetchState(t)], [t]), v = (0, o.e7)([d.Z], () => {
    var e;
    return null != (e = d.Z.getGuildId()) ? e : true
  }), [O, y] = i.useState(false), x = i.useCallback(e => {
    e && y(true)
  }, []), j = (0, a.O)(x), I = i.useCallback(() => {
    p.default.track(g.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: t,
      device_platform: l.tq ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: v,
      channel_id: n.channel_id
    })
  }, [t, v, n.author.id, n.channel_id]);
  return (i.useEffect(() => {
    (0, m.gZ)(t)
  }, [t]), i.useEffect(() => {
    O && C === f.M.FETCHED && I()
  }, [O, C, I]), i.useEffect(() => {
    O && E && p.default.track(g.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: l.tq ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: v,
      channel_id: n.channel_id
    })
  }, [O, v, E, n.author.id, n.channel_id]), E) ? (0, r.jsxs)(c.Z, {
    containerRef: j,
    children: [(0, r.jsx)(c.Z.Header, {
      text: _.intl.string(_.t.j4KtLS)
    }), (0, r.jsx)(c.Z.Body, {
      children: (0, r.jsxs)("div", {
        className: h.invalidBody,
        children: [(0, r.jsx)(c.Z.Icon, {
          expired: true
        }), (0, r.jsx)(c.Z.Info, {
          expired: true,
          title: _.intl.string(_.t.NaQLEx),
          children: _.intl.string(_.t["0H5OT0"])
        })]
      })
    })]
  }) : null == b || C === f.M.FETCHING ? (0, r.jsxs)(c.Z, {
    containerRef: j,
    children: [(0, r.jsx)(c.Z.Header, {
      text: _.intl.string(_.t.m9hXGR)
    }), (0, r.jsx)(c.Z.Body, {
      resolving: true
    })]
  }) : (0, r.jsx)(s.O, {
    app: u.ZP.createFromServer(b),
    linkType: s.U.APP_DISCOVERY,
    onView: I
  })
}