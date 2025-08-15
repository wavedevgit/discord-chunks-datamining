/** Chunk was on 76708 **/
/** chunk id: 116906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    guildId: P,
    subsection: E,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: Z
  } = (0, o.U)({
    location: "UserProfileModalActivity"
  }), N = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: S,
    recent: w,
    stream: A
  } = (0, f.Z)(t.id), {
    voiceChannel: C,
    voiceActivity: D
  } = (0, p.Z)({
    userId: t.id,
    guildId: P
  }), L = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), R = t.id === n.id, G = (0, i.e7)([s.Z, c.Z], () => {
    let e = R ? s.Z.getStatus() : c.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), k = S.length > 0 || null != A, B = Z && null == A && null == D && null != C, M = !G && (k || B), U = w.length > 0;
  return M || U || !L ? (0, r.jsxs)(l.zJl, {
    className: v.scroller,
    fade: true,
    children: [M ? (0, r.jsx)(m.Z, {
      "aria-label": h.intl.string(h.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: v.activityList,
        children: [!N && B && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: C,
            onClose: T
          })
        }), null != A && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            location: "UserProfileModalActivity",
            user: t,
            currentUser: n,
            stream: A,
            onClose: T,
            profileGuildId: null == I ? true : I.guildId
          })
        }), S.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: T,
            profileGuildId: null == I ? true : I.guildId
          })
        }, "live-".concat(i)))]
      })
    }) : null, U ? (0, r.jsx)(m.Z, {
      heading: h.intl.string(h.t.M0zgnZ),
      introText: R ? h.intl.format(h.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: E === O.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: v.activityList,
        children: w.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            location: "UserProfileModalActivity",
            user: t,
            currentUser: n,
            entry: e,
            profileGuildId: null == I ? true : I.guildId,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  }) : (0, r.jsx)("div", {
    className: _.empty,
    children: (0, r.jsx)(l.$jN, {})
  })
}