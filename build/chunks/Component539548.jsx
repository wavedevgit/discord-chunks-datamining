/** Chunk was on 64228 **/
/** chunk id: 539548, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk901517 = require("./901517.js"),
  Chunk517164 = require("./517164.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk975571 = require("./975571.js"),
  Chunk146655 = require("./146655.js"),
  Chunk489379 = require("./489379.js"),
  Chunk900179 = require("./900179.jsx"),
  Chunk837924 = require("./837924.jsx"),
  Chunk558628 = require("./558628.jsx"),
  Chunk842241 = require("./842241.jsx"),
  Chunk282797 = require("./282797.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78702 = require("./78702.js"),
  Chunk781425 = require("./781425.js");

function y(e) {
  let {
    user: l,
    currentUser: t,
    guildId: y,
    onClose: O
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, s.G)({
    location: "UserProfileModalActivity"
  }), {
    live: E,
    recent: _,
    stream: T
  } = (0, u.A)(l.id), {
    voiceChannel: P,
    voiceActivity: S
  } = (0, f.A)({
    userId: l.id,
    guildId: y
  }), C = (0, i.bG)([a.A], () => a.A.isFetchingUserOutbox(l.id)), L = l.id === t.id, D = (0, i.bG)([d.A, o.A], () => {
    let e = L ? d.A.getStatus() : o.A.getStatus(l.id);
    return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
  }), R = E.length > 0 || null != T, w = N && null == T && null == S && null != P, G = !D && (R || w), M = _.length > 0;
  return G || M || !C ? (0, n.jsxs)(r.IpV, {
    className: b.XG,
    fade: true,
    children: [G ? (0, n.jsx)(p.A, {
      "aria-label": v.intl.string(v.t.J6STd9),
      children: (0, n.jsxs)("ul", {
        className: b.Ci,
        children: [null != T && (0, n.jsx)("li", {
          children: (0, n.jsx)(A.A, {
            user: l,
            currentUser: t,
            stream: T,
            onClose: O
          })
        }), E.map((e, i) => (0, n.jsx)("li", {
          children: (0, n.jsx)(m.A, {
            user: l,
            currentUser: t,
            activity: e,
            onClose: O
          })
        }, "live-".concat(i))), w && (0, n.jsx)("li", {
          children: (0, n.jsx)(j.A, {
            user: l,
            currentUser: t,
            voiceChannel: P,
            onClose: O
          })
        })]
      })
    }) : null, M ? (0, n.jsx)(p.A, {
      heading: v.intl.string(v.t.M0zgnT),
      introText: L ? v.intl.format(v.t["4bk9Ak"], {
        learnMoreHook: (e, l) => (0, n.jsx)(r.MzZ, {
          href: c.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, l)
      }) : true,
      scrollTargetId: h.bk.RECENT_ACTIVITY,
      children: (0, n.jsx)("ul", {
        className: b.Ci,
        children: _.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(x.A, {
            user: l,
            entry: e,
            onClose: O
          })
        }, e.id))
      })
    }) : null]
  }) : (0, n.jsx)("div", {
    className: I.Ie,
    children: (0, n.jsx)(r.y$y, {})
  })
}