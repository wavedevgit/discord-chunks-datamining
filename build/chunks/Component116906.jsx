/** Chunk was on 75283 **/
/** chunk id: 116906, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n,
    displayProfile: O,
    guildId: Z,
    subsection: P,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: C
  } = (0, l.U)({
    location: "UserProfileModalActivity"
  }), A = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: N,
    recent: E,
    stream: S
  } = (0, f.Z)(t.id), {
    voiceChannel: w,
    voiceActivity: B
  } = (0, p.Z)({
    userId: t.id,
    guildId: Z
  }), L = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), D = t.id === n.id, M = (0, o.e7)([s.Z, c.Z], () => {
    let e = D ? s.Z.getStatus() : c.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), U = N.length > 0 || null != S, R = C && null == S && null == B && null != w, k = !M && (U || R), G = E.length > 0;
  return k || G || !L ? (0, r.jsxs)(i.zJl, {
    className: y.scroller,
    fade: true,
    children: [k ? (0, r.jsx)(m.Z, {
      "aria-label": v.intl.string(v.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: y.activityList,
        children: [!A && R && (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: t,
            currentUser: n,
            voiceChannel: w,
            onClose: T
          })
        }), null != S && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            location: "UserProfileModalActivity",
            user: t,
            currentUser: n,
            stream: S,
            onClose: T,
            profileGuildId: null == O ? true : O.guildId
          })
        }), N.map((e, o) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: T,
            profileGuildId: null == O ? true : O.guildId
          })
        }, "live-".concat(o)))]
      })
    }) : null, G ? (0, r.jsx)(m.Z, {
      heading: v.intl.string(v.t.M0zgnZ),
      introText: D ? v.intl.format(v.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: P === _.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: y.activityList,
        children: E.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            location: "UserProfileModalActivity",
            user: t,
            currentUser: n,
            entry: e,
            profileGuildId: null == O ? true : O.guildId,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  }) : (0, r.jsx)("div", {
    className: I.empty,
    children: (0, r.jsx)(i.$jN, {})
  })
}