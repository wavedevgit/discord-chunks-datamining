/** Chunk was on 93979 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk353647 = require("./353647.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk209698 = require("./209698.js"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk678738 = require("./678738.jsx"),
  Chunk151545 = require("./151545.jsx"),
  Chunk527790 = require("./527790.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835734 = require("./835734.js"),
  Chunk940640 = require("./940640.js");

function O(e) {
  let {
    user: n,
    currentUser: t,
    guildId: O,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, r.U)({
    location: "UserProfileModalActivity"
  }), A = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: P,
    recent: E,
    stream: _
  } = (0, f.Z)(n.id), {
    voiceChannel: C,
    voiceActivity: S
  } = (0, m.Z)({
    userId: n.id,
    guildId: O
  }), w = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)), D = n.id === t.id, L = (0, i.e7)([s.Z, c.Z], () => {
    let e = D ? s.Z.getStatus() : c.Z.getStatus(n.id);
    return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE
  }), R = P.length > 0 || null != _, M = N && null == _ && null == S && null != C, B = !L && (R || M), U = E.length > 0;
  return B || U || !w ? (0, l.jsxs)(o.zJl, {
    className: y.scroller,
    fade: true,
    children: [B ? (0, l.jsx)(p.Z, {
      "aria-label": I.intl.string(I.t.J6STd9),
      children: (0, l.jsxs)("ul", {
        className: y.activityList,
        children: [!A && M && (0, l.jsx)("li", {
          children: (0, l.jsx)(b.Z, {
            user: n,
            currentUser: t,
            voiceChannel: C,
            onClose: T
          })
        }), null != _ && (0, l.jsx)("li", {
          children: (0, l.jsx)(v.Z, {
            user: n,
            currentUser: t,
            stream: _,
            onClose: T
          })
        }), P.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: T
          })
        }, "live-".concat(i)))]
      })
    }) : null, U ? (0, l.jsx)(p.Z, {
      heading: I.intl.string(I.t.M0zgnT),
      introText: D ? I.intl.format(I.t["4bk9Ak"], {
        learnMoreHook: (e, n) => (0, l.jsx)(o.Anchor, {
          href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollTargetId: j.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: y.activityList,
        children: E.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            entry: e,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: Z.empty,
    children: (0, l.jsx)(o.$jN, {})
  })
}