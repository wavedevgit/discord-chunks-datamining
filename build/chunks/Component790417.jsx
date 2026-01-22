/** Chunk was on 38663 **/
/** chunk id: 790417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk901517 = require("./901517.js"),
  Chunk517164 = require("./517164.js"),
  Chunk114212 = require("./114212.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk975571 = require("./975571.js"),
  Chunk146655 = require("./146655.js"),
  Chunk489379 = require("./489379.js"),
  Chunk837924 = require("./837924.jsx"),
  Chunk558628 = require("./558628.jsx"),
  Chunk842241 = require("./842241.jsx"),
  Chunk282797 = require("./282797.jsx"),
  Chunk782505 = require("./782505.jsx"),
  Chunk83013 = require("./83013.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk897757 = require("./897757.js");

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    guildId: P,
    channelId: E,
    onClose: S
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, a.G)({
    location: "UserProfileModalV2Activity"
  }), {
    live: _,
    recent: N,
    stream: D
  } = (0, f.A)(t.id), {
    voiceChannel: R,
    voiceActivity: C
  } = (0, p.A)({
    userId: t.id,
    guildId: P
  }), k = (0, l.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)), G = t.id === n.id, L = (0, l.bG)([u.A, c.A], () => {
    let e = G ? u.A.getStatus() : c.A.getStatus(t.id);
    return e === i.clD.OFFLINE || e === i.clD.INVISIBLE
  }), U = _.length > 0 || null != D, M = T && null == D && null == C && null != R, F = !L && (U || M), X = N.length > 0;
  if (!F && !X && k) return (0, r.jsx)("div", {
    className: w.kR,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: w.kr,
      children: [(0, r.jsx)(o.FQ, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(o.FQ, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!F && !X && !k) {
    var W;
    return G ? (0, r.jsx)(O.qv, {
      onClose: S
    }) : (0, r.jsx)(O.zf, {
      user: t,
      guildId: null != (W = null == I ? true : I.guildId) ? W : P,
      channelId: E,
      onClose: S
    })
  }
  return (0, r.jsxs)(x.K, {
    className: w.XG,
    fade: true,
    children: [F ? (0, r.jsx)(j.A, {
      heading: A.intl.string(A.t.J6STd9),
      children: (0, r.jsxs)("ul", {
        className: w.kR,
        children: [null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(m.A, {
            user: t,
            currentUser: n,
            stream: D,
            onClose: S
          })
        }), _.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.A, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: S
          })
        }, "live-".concat(l))), M && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.A, {
            user: t,
            currentUser: n,
            voiceChannel: R,
            onClose: S
          })
        })]
      })
    }) : null, X ? (0, r.jsx)(j.A, {
      heading: A.intl.string(A.t.jzgEoL),
      introText: G ? A.intl.format(A.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.MzZ, {
          href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollTargetId: h.bk.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: w.kR,
        children: N.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.A, {
            user: t,
            entry: e,
            onClose: S
          })
        }, e.id))
      })
    }) : null]
  })
}