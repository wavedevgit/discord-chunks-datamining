/** Chunk was on 93979 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk7994 = require("./7994.js"),
  Chunk878449 = require("./878449.js");

function _(e) {
  let {
    user: n,
    currentUser: t,
    guildId: _,
    subsection: O,
    onClose: N
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, r.U)({
    location: "UserProfileModalActivity"
  }), A = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: P,
    recent: E,
    stream: C
  } = (0, m.Z)(n.id), {
    voiceChannel: S,
    voiceActivity: w
  } = (0, f.Z)({
    userId: n.id,
    guildId: _
  }), D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), L = n.id === t.id, R = (0, i.e7)([c.Z, a.Z], () => {
    let e = L ? c.Z.getStatus() : a.Z.getStatus(n.id);
    return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE
  }), M = P.length > 0 || null != C, B = T && null == C && null == w && null != S, U = !R && (M || B), k = E.length > 0;
  return U || k || !D ? (0, l.jsxs)(o.zJl, {
    className: y.scroller,
    fade: true,
    children: [U ? (0, l.jsx)(p.Z, {
      "aria-label": I.intl.string(I.t.J6STd9),
      children: (0, l.jsxs)("ul", {
        className: y.activityList,
        children: [!A && B && (0, l.jsx)("li", {
          children: (0, l.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: S,
            onClose: N
          })
        }), null != C && (0, l.jsx)("li", {
          children: (0, l.jsx)(v.Z, {
            user: n,
            currentUser: t,
            stream: C,
            onClose: N
          })
        }), P.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: N
          })
        }, "live-".concat(i)))]
      })
    }) : null, k ? (0, l.jsx)(p.Z, {
      heading: I.intl.string(I.t.M0zgnT),
      introText: L ? I.intl.format(I.t["4bk9Ak"], {
        learnMoreHook: (e, n) => (0, l.jsx)(o.Anchor, {
          href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: O === g.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: y.activityList,
        children: E.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            entry: e,
            onClose: N
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: Z.empty,
    children: (0, l.jsx)(o.$jN, {})
  })
}