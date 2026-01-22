/** Chunk was on web.js **/
/** chunk id: 613760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
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

function E(e) {
  let {
    code: t,
    message: n
  } = e, [E, b, y] = (0, o.yK)([_.A], () => [_.A.getApplication(t), _.A.isInvalidApplication(t), _.A.getApplicationFetchState(t)], [t]), O = (0, o.bG)([d.A], () => {
    var e;
    return null != (e = d.A.getGuildId()) ? e : true
  }), [A, v] = i.useState(false), S = i.useCallback(e => {
    e && v(true)
  }, []), I = (0, a.K)(S), T = i.useCallback(() => {
    f.default.track(h.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: t,
      device_platform: s.Fr ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: O,
      channel_id: n.channel_id
    })
  }, [t, O, n.author.id, n.channel_id]);
  return (i.useEffect(() => {
    (0, p.eP)(t)
  }, [t]), i.useEffect(() => {
    A && y === _.e.FETCHED && T()
  }, [A, y, T]), i.useEffect(() => {
    A && b && f.default.track(h.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: s.Fr ? "mobile_web" : "desktop_web",
      sender_user_id: n.author.id,
      guild_id: O,
      channel_id: n.channel_id
    })
  }, [A, O, b, n.author.id, n.channel_id]), b) ? (0, r.jsxs)(c.A, {
    containerRef: I,
    children: [(0, r.jsx)(c.A.Header, {
      text: m.intl.string(m.t.j4KtLa)
    }), (0, r.jsx)(c.A.Body, {
      children: (0, r.jsxs)("div", {
        className: g.k,
        children: [(0, r.jsx)(c.A.Icon, {
          expired: true
        }), (0, r.jsx)(c.A.Info, {
          expired: true,
          title: m.intl.string(m.t.NaQLEx),
          children: m.intl.string(m.t["0H5OT2"])
        })]
      })
    })]
  }) : null == E || y === _.e.FETCHING ? (0, r.jsxs)(c.A, {
    containerRef: I,
    children: [(0, r.jsx)(c.A.Header, {
      text: m.intl.string(m.t.m9hXGR)
    }), (0, r.jsx)(c.A.Body, {
      resolving: true
    })]
  }) : (0, r.jsx)(l.W, {
    app: u.Ay.createFromServer(E),
    linkType: l.J.APP_DISCOVERY,
    onView: T,
    message: n
  })
}