/** Chunk was on 72164 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    user: n,
    currentUser: t,
    guildId: O,
    subsection: Z,
    onClose: P
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, i.U)({
    location: "UserProfileModalActivity"
  }), N = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: A,
    recent: C,
    stream: E
  } = (0, f.Z)(n.id), {
    voiceChannel: S,
    voiceActivity: w
  } = (0, p.Z)({
    userId: n.id,
    guildId: O
  }), B = (0, r.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), D = n.id === t.id, L = (0, r.e7)([s.Z, a.Z], () => {
    let e = D ? s.Z.getStatus() : a.Z.getStatus(n.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), R = A.length > 0 || null != E, M = T && null == E && null == w && null != S, U = !L && (R || M), k = C.length > 0;
  return U || k || !B ? (0, o.jsxs)(l.zJl, {
    className: _.scroller,
    fade: true,
    children: [U ? (0, o.jsx)(m.Z, {
      "aria-label": y.intl.string(y.t.J6STd3),
      children: (0, o.jsxs)("ul", {
        className: _.activityList,
        children: [!N && M && (0, o.jsx)("li", {
          children: (0, o.jsx)(g.Z, {
            user: n,
            currentUser: t,
            voiceChannel: S,
            onClose: P
          })
        }), null != E && (0, o.jsx)("li", {
          children: (0, o.jsx)(h.Z, {
            user: n,
            currentUser: t,
            stream: E,
            onClose: P
          })
        }), A.map((e, r) => (0, o.jsx)("li", {
          children: (0, o.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: P
          })
        }, "live-".concat(r)))]
      })
    }) : null, k ? (0, o.jsx)(m.Z, {
      heading: y.intl.string(y.t.M0zgnZ),
      introText: D ? y.intl.format(y.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, o.jsx)(l.eee, {
          href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: Z === j.Tb.RECENT_ACTIVITY,
      children: (0, o.jsx)("ul", {
        className: _.activityList,
        children: C.map(e => (0, o.jsx)("li", {
          children: (0, o.jsx)(b.Z, {
            user: n,
            entry: e,
            onClose: P
          })
        }, e.id))
      })
    }) : null]
  }) : (0, o.jsx)("div", {
    className: I.empty,
    children: (0, o.jsx)(l.$jN, {})
  })
}