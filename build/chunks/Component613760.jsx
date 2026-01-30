/** Chunk was on 64935 **/
/** chunk id: 613760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk607399 = require("./607399.js"),
  Chunk417597 = require("./417597.js"),
  Chunk485724 = require("./485724.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk611010 = require("./611010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk354138 = require("./354138.js"),
  Chunk212534 = require("./212534.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk616078 = require("./616078.js");

function b(e) {
  let {
    code: t,
    message: n
  } = e, [b, A, y] = (0, s.yK)([f.A], () => [f.A.getApplication(t), f.A.isInvalidApplication(t), f.A.getApplicationFetchState(t)], [t]), v = (0, s.bG)([d.A], () => {
    var e;
    return null != (e = d.A.getGuildId()) ? e : true
  }), [x, O] = i.useState(false), E = i.useCallback(e => {
    e && O(true)
  }, []), j = (0, l.K)(E), C = i.useCallback(() => {
    p.default.track(g.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: t,
      device_platform: a.Fr ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: v,
      channel_id: n.channel_id
    })
  }, [t, v, n.author.id, n.channel_id]);
  return (i.useEffect(() => {
    (0, m.eP)(t)
  }, [t]), i.useEffect(() => {
    x && y === f.e.FETCHED && C()
  }, [x, y, C]), i.useEffect(() => {
    x && A && p.default.track(g.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: a.Fr ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: v,
      channel_id: n.channel_id
    })
  }, [x, v, A, n.author.id, n.channel_id]), A) ? (0, r.jsxs)(c.A, {
    containerRef: j,
    children: [(0, r.jsx)(c.A.Header, {
      text: _.intl.string(_.t.j4KtLa)
    }), (0, r.jsx)(c.A.Body, {
      children: (0, r.jsxs)("div", {
        className: h.k,
        children: [(0, r.jsx)(c.A.Icon, {
          expired: true
        }), (0, r.jsx)(c.A.Info, {
          expired: true,
          title: _.intl.string(_.t.NaQLEx),
          children: _.intl.string(_.t["0H5OT2"])
        })]
      })
    })]
  }) : null == b || y === f.e.FETCHING ? (0, r.jsxs)(c.A, {
    containerRef: j,
    children: [(0, r.jsx)(c.A.Header, {
      text: _.intl.string(_.t.m9hXGR)
    }), (0, r.jsx)(c.A.Body, {
      resolving: true
    })]
  }) : (0, r.jsx)(o.W, {
    app: u.Ay.createFromServer(b),
    linkType: o.J.APP_DISCOVERY,
    onView: C,
    message: n
  })
}