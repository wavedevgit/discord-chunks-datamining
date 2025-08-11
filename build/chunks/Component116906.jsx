/** Chunk was on 11776 **/
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
  Chunk316879 = require("./316879.js"),
  Chunk301150 = require("./301150.js");

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    guildId: P,
    subsection: Z,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, o.U)({
    location: "UserProfileModalActivity"
  }), E = (0, u.b)({
    location: "UserProfileModalActivity"
  }), {
    live: S,
    recent: A,
    stream: w
  } = (0, f.Z)(t.id), {
    voiceChannel: C,
    voiceActivity: L
  } = (0, m.Z)({
    userId: t.id,
    guildId: P
  }), k = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), D = t.id === n.id, G = (0, l.e7)([s.Z, c.Z], () => {
    let e = D ? s.Z.getStatus() : c.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), R = S.length > 0 || null != w, M = N && null == w && null == L && null != C, B = !G && (R || M), U = A.length > 0;
  return B || U || !k ? (0, r.jsxs)(i.zJl, {
    className: O.scroller,
    fade: true,
    children: [B ? (0, r.jsx)(p.Z, {
      "aria-label": v.intl.string(v.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: O.activityList,
        children: [!E && M && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: t,
            currentUser: n,
            voiceChannel: C,
            onClose: T
          })
        }), null != w && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            location: "UserProfileModalActivity",
            user: t,
            currentUser: n,
            stream: w,
            onClose: T,
            profileGuildId: null == I ? true : I.guildId
          })
        }), S.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: T,
            profileGuildId: null == I ? true : I.guildId
          })
        }, "live-".concat(l)))]
      })
    }) : null, U ? (0, r.jsx)(p.Z, {
      heading: v.intl.string(v.t.M0zgnZ),
      introText: D ? v.intl.format(v.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: O.activityList,
        children: A.map(e => (0, r.jsx)("li", {
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
    children: (0, r.jsx)(i.$jN, {})
  })
}