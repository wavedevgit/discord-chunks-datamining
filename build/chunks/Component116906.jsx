/** Chunk was on 31553 **/
/** chunk id: 116906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk847540 = require("./847540.js"),
  Chunk883172 = require("./883172.js");

function I(e) {
  let {
    user: n,
    currentUser: t,
    guildId: I,
    subsection: P,
    onClose: N
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, o.U)({
    location: "UserProfileModalActivity"
  }), E = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: A,
    recent: S,
    stream: C
  } = (0, f.Z)(n.id), {
    voiceChannel: w,
    voiceActivity: _
  } = (0, m.Z)({
    userId: n.id,
    guildId: I
  }), D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)), R = n.id === t.id, L = (0, i.e7)([c.Z, a.Z], () => {
    let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
    return e === r.Skl.OFFLINE || e === r.Skl.INVISIBLE
  }), M = A.length > 0 || null != C, U = T && null == C && null == _ && null != w, k = !L && (M || U), B = S.length > 0;
  return k || B || !D ? (0, l.jsxs)(r.zJl, {
    className: O.scroller,
    fade: true,
    children: [k ? (0, l.jsx)(p.Z, {
      "aria-label": y.intl.string(y.t.J6STd3),
      children: (0, l.jsxs)("ul", {
        className: O.activityList,
        children: [!E && U && (0, l.jsx)("li", {
          children: (0, l.jsx)(v.Z, {
            user: n,
            currentUser: t,
            voiceChannel: w,
            onClose: N
          })
        }), null != C && (0, l.jsx)("li", {
          children: (0, l.jsx)(x.Z, {
            user: n,
            currentUser: t,
            stream: C,
            onClose: N
          })
        }), A.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(h.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: N
          })
        }, "live-".concat(i)))]
      })
    }) : null, B ? (0, l.jsx)(p.Z, {
      heading: y.intl.string(y.t.M0zgnZ),
      introText: R ? y.intl.format(y.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, l.jsx)(r.eee, {
          href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: P === g.Tb.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: O.activityList,
        children: S.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(j.Z, {
            user: n,
            entry: e,
            onClose: N
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: Z.empty,
    children: (0, l.jsx)(r.$jN, {})
  })
}