/** Chunk was on 98360 **/
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
  Chunk744802 = require("./744802.jsx"),
  Chunk493043 = require("./493043.jsx"),
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
    displayProfile: O,
    guildId: Z,
    subsection: P,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: A
  } = (0, i.U)({
    location: "UserProfileModalActivity"
  }), N = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: C,
    recent: E,
    stream: S
  } = (0, f.Z)(n.id), {
    voiceChannel: w,
    voiceActivity: B
  } = (0, m.Z)({
    userId: n.id,
    guildId: Z
  }), D = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), L = n.id === t.id, R = (0, o.e7)([s.Z, a.Z], () => {
    let e = L ? s.Z.getStatus() : a.Z.getStatus(n.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), U = C.length > 0 || null != S, M = A && null == S && null == B && null != w, k = !R && (U || M), G = E.length > 0;
  return k || G || !D ? (0, r.jsxs)(l.zJl, {
    className: y.scroller,
    fade: true,
    children: [k ? (0, r.jsx)(p.Z, {
      "aria-label": _.intl.string(_.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: y.activityList,
        children: [!N && M && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            voiceChannel: w,
            onClose: T
          })
        }), null != S && (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            location: "UserProfileModalActivity",
            user: n,
            currentUser: t,
            stream: S,
            onClose: T,
            profileGuildId: null == O ? true : O.guildId
          })
        }), C.map((e, o) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: T,
            profileGuildId: null == O ? true : O.guildId
          })
        }, "live-".concat(o)))]
      })
    }) : null, G ? (0, r.jsx)(p.Z, {
      heading: _.intl.string(_.t.M0zgnZ),
      introText: L ? _.intl.format(_.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(l.eee, {
          href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: P === j.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: y.activityList,
        children: E.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            location: "UserProfileModalActivity",
            user: n,
            currentUser: t,
            entry: e,
            profileGuildId: null == O ? true : O.guildId,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  }) : (0, r.jsx)("div", {
    className: I.empty,
    children: (0, r.jsx)(l.$jN, {})
  })
}