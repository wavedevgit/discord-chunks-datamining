/** Chunk was on 93979 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function Z(e) {
  let {
    user: n,
    currentUser: t,
    guildId: Z,
    subsection: _,
    onClose: P
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, i.U)({
    location: "UserProfileModalActivity"
  }), T = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: A,
    recent: E,
    stream: C
  } = (0, m.Z)(n.id), {
    voiceChannel: S,
    voiceActivity: w
  } = (0, f.Z)({
    userId: n.id,
    guildId: Z
  }), D = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), L = n.id === t.id, M = (0, o.e7)([a.Z, s.Z], () => {
    let e = L ? a.Z.getStatus() : s.Z.getStatus(n.id);
    return e === r.Skl.OFFLINE || e === r.Skl.INVISIBLE
  }), R = A.length > 0 || null != C, B = N && null == C && null == w && null != S, U = !M && (R || B), k = E.length > 0;
  return U || k || !D ? (0, l.jsxs)(r.zJl, {
    className: O.scroller,
    fade: true,
    children: [U ? (0, l.jsx)(p.Z, {
      "aria-label": y.intl.string(y.t.J6STd3),
      children: (0, l.jsxs)("ul", {
        className: O.activityList,
        children: [!T && B && (0, l.jsx)("li", {
          children: (0, l.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: S,
            onClose: P
          })
        }), null != C && (0, l.jsx)("li", {
          children: (0, l.jsx)(b.Z, {
            user: n,
            currentUser: t,
            stream: C,
            onClose: P
          })
        }), A.map((e, o) => (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: P
          })
        }, "live-".concat(o)))]
      })
    }) : null, k ? (0, l.jsx)(p.Z, {
      heading: y.intl.string(y.t.M0zgnZ),
      introText: L ? y.intl.format(y.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, l.jsx)(r.eee, {
          href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: _ === v.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: O.activityList,
        children: E.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            entry: e,
            onClose: P
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: I.empty,
    children: (0, l.jsx)(r.$jN, {})
  })
}