/** Chunk was on 98360 **/
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
  Chunk7994 = require("./7994.js"),
  Chunk878449 = require("./878449.js");

function I(e) {
  let {
    user: n,
    currentUser: t,
    guildId: I,
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
  } = (0, m.Z)({
    userId: n.id,
    guildId: I
  }), B = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), D = n.id === t.id, L = (0, o.e7)([s.Z, a.Z], () => {
    let e = D ? s.Z.getStatus() : a.Z.getStatus(n.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), R = A.length > 0 || null != E, U = T && null == E && null == w && null != S, M = !L && (R || U), k = C.length > 0;
  return M || k || !B ? (0, r.jsxs)(l.zJl, {
    className: y.scroller,
    fade: true,
    children: [M ? (0, r.jsx)(p.Z, {
      "aria-label": _.intl.string(_.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: y.activityList,
        children: [!N && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            voiceChannel: S,
            onClose: P
          })
        }), null != E && (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: n,
            currentUser: t,
            stream: E,
            onClose: P
          })
        }), A.map((e, o) => (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: P
          })
        }, "live-".concat(o)))]
      })
    }) : null, k ? (0, r.jsx)(p.Z, {
      heading: _.intl.string(_.t.M0zgnZ),
      introText: D ? _.intl.format(_.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(l.eee, {
          href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: Z === j.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: y.activityList,
        children: C.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: n,
            entry: e,
            onClose: P
          })
        }, e.id))
      })
    }) : null]
  }) : (0, r.jsx)("div", {
    className: O.empty,
    children: (0, r.jsx)(l.$jN, {})
  })
}