/** Chunk was on 82008 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    user: n,
    currentUser: t,
    guildId: _,
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
    recent: E,
    stream: C
  } = (0, f.Z)(n.id), {
    voiceChannel: S,
    voiceActivity: w
  } = (0, m.Z)({
    userId: n.id,
    guildId: _
  }), D = (0, l.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), L = n.id === t.id, B = (0, l.e7)([a.Z, s.Z], () => {
    let e = L ? a.Z.getStatus() : s.Z.getStatus(n.id);
    return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE
  }), R = A.length > 0 || null != C, U = T && null == C && null == w && null != S, M = !B && (R || U), k = E.length > 0;
  return M || k || !D ? (0, r.jsxs)(o.zJl, {
    className: O.scroller,
    fade: true,
    children: [M ? (0, r.jsx)(p.Z, {
      "aria-label": y.intl.string(y.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: O.activityList,
        children: [!N && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: S,
            onClose: P
          })
        }), null != C && (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: n,
            currentUser: t,
            stream: C,
            onClose: P
          })
        }), A.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: P
          })
        }, "live-".concat(l)))]
      })
    }) : null, k ? (0, r.jsx)(p.Z, {
      heading: y.intl.string(y.t.M0zgnZ),
      introText: L ? y.intl.format(y.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(o.eee, {
          href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: Z === g.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: O.activityList,
        children: E.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: n,
            entry: e,
            onClose: P
          })
        }, e.id))
      })
    }) : null]
  }) : (0, r.jsx)("div", {
    className: I.empty,
    children: (0, r.jsx)(o.$jN, {})
  })
}