/** Chunk was on 31553 **/
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
    subsection: N,
    onClose: P
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, o.U)({
    location: "UserProfileModalActivity"
  }), A = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: E,
    recent: S,
    stream: C
  } = (0, m.Z)(n.id), {
    voiceChannel: _,
    voiceActivity: w
  } = (0, p.Z)({
    userId: n.id,
    guildId: O
  }), D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), R = n.id === t.id, L = (0, i.e7)([c.Z, a.Z], () => {
    let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
    return e === r.Skl.OFFLINE || e === r.Skl.INVISIBLE
  }), M = E.length > 0 || null != C, U = T && null == C && null == w && null != _, B = !L && (M || U), k = S.length > 0;
  return B || k || !D ? (0, l.jsxs)(r.zJl, {
    className: I.scroller,
    fade: true,
    children: [B ? (0, l.jsx)(f.Z, {
      "aria-label": y.intl.string(y.t.J6STd3),
      children: (0, l.jsxs)("ul", {
        className: I.activityList,
        children: [!A && U && (0, l.jsx)("li", {
          children: (0, l.jsx)(v.Z, {
            user: n,
            currentUser: t,
            voiceChannel: _,
            onClose: P
          })
        }), null != C && (0, l.jsx)("li", {
          children: (0, l.jsx)(j.Z, {
            user: n,
            currentUser: t,
            stream: C,
            onClose: P
          })
        }), E.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: P
          })
        }, "live-".concat(i)))]
      })
    }) : null, k ? (0, l.jsx)(f.Z, {
      heading: y.intl.string(y.t.M0zgnZ),
      introText: R ? y.intl.format(y.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, l.jsx)(r.Anchor, {
          href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: N === g.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: I.activityList,
        children: S.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            entry: e,
            onClose: P
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: Z.empty,
    children: (0, l.jsx)(r.$jN, {})
  })
}