/** Chunk was on 63974 **/
/** chunk id: 539548, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n,
    guildId: y,
    onClose: _
  } = e, {
    voiceActivityStatusEnabled: O
  } = (0, s.G)({
    location: "UserProfileModalActivity"
  }), {
    live: N,
    recent: E,
    stream: P
  } = (0, u.A)(t.id), {
    voiceChannel: T,
    voiceActivity: C
  } = (0, p.A)({
    userId: t.id,
    guildId: y
  }), S = (0, i.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), L = t.id === n.id, R = (0, i.bG)([d.A, a.A], () => {
    let e = L ? d.A.getStatus() : a.A.getStatus(t.id);
    return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
  }), D = N.length > 0 || null != P, w = O && null == P && null == C && null != T, M = !R && (D || w), G = E.length > 0;
  return M || G || !S ? (0, l.jsxs)(r.IpV, {
    className: v.XG,
    fade: true,
    children: [M ? (0, l.jsx)(f.A, {
      "aria-label": b.intl.string(b.t.J6STd9),
      children: (0, l.jsxs)("ul", {
        className: v.Ci,
        children: [null != P && (0, l.jsx)("li", {
          children: (0, l.jsx)(x.A, {
            user: t,
            currentUser: n,
            stream: P,
            onClose: _
          })
        }), N.map((e, i) => (0, l.jsx)("li", {
          children: (0, l.jsx)(m.A, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: _
          })
        }, "live-".concat(i))), w && (0, l.jsx)("li", {
          children: (0, l.jsx)(g.A, {
            user: t,
            currentUser: n,
            voiceChannel: T,
            onClose: _
          })
        })]
      })
    }) : null, G ? (0, l.jsx)(f.A, {
      heading: b.intl.string(b.t.M0zgnT),
      introText: L ? b.intl.format(b.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, l.jsx)(r.MzZ, {
          href: c.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollTargetId: j.bk.RECENT_ACTIVITY,
      children: (0, l.jsx)("ul", {
        className: v.Ci,
        children: E.map(e => (0, l.jsx)("li", {
          children: (0, l.jsx)(A.A, {
            user: t,
            entry: e,
            onClose: _
          })
        }, e.id))
      })
    }) : null]
  }) : (0, l.jsx)("div", {
    className: I.Ie,
    children: (0, l.jsx)(r.y$y, {})
  })
}