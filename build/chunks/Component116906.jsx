/** Chunk was on 93979 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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

function Z(e) {
  let {
    user: n,
    currentUser: t,
    guildId: Z,
    onClose: O
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, r.U)({
    location: "UserProfileModalActivity"
  }), {
    live: T,
    recent: A,
    stream: P
  } = (0, u.Z)(n.id), {
    voiceChannel: E,
    voiceActivity: C
  } = (0, f.Z)({
    userId: n.id,
    guildId: Z
  }), _ = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)), S = n.id === t.id, w = (0, i.e7)([s.Z, c.Z], () => {
    let e = S ? s.Z.getStatus() : c.Z.getStatus(n.id);
    return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE
  }), D = T.length > 0 || null != P, L = N && null == P && null == C && null != E, R = !w && (D || L), M = A.length > 0;
  return R || M || !_ ? (0, l.jsxs)(o.zJl, {
    className: I.scroller,
    fade: true,
    children: [R ? (0, l.jsx)(m.Z, {
      "aria-label": g.intl.string(g.t.J6STd9),
      children: (0, l.jsxs)("ul", {
        className: I.activityList,
        children: [null != P && (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            currentUser: t,
            stream: P,
            onClose: O
          })
        }), T.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(p.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: O
          })
        }, "live-".concat(i))), L && (0, l.jsx)("li", {
          children: (0, l.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: E,
            onClose: O
          })
        })]
      })
    }) : null, M ? (0, l.jsx)(m.Z, {
      heading: g.intl.string(g.t.M0zgnT),
      introText: S ? g.intl.format(g.t["4bk9Ak"], {
        learnMoreHook: (e, n) => (0, l.jsx)(o.eee, {
          href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollTargetId: v.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: I.activityList,
        children: A.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            entry: e,
            onClose: O
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: y.empty,
    children: (0, l.jsx)(o.$jN, {})
  })
}