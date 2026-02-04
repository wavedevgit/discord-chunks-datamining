/** Chunk was on 59569 **/
/** chunk id: 790417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
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

function w(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: w,
    guildId: A,
    channelId: P,
    onClose: E
  } = e, {
    voiceActivityStatusEnabled: S
  } = (0, a.G)({
    location: "UserProfileModalV2Activity"
  }), {
    live: T,
    recent: N,
    stream: C
  } = (0, f.A)(t.id), {
    voiceChannel: R,
    voiceActivity: k
  } = (0, p.A)({
    userId: t.id,
    guildId: A
  }), D = (0, l.bG)([o.A], () => o.A.isFetchingUserOutbox(t.id)), L = t.id === n.id, G = (0, l.bG)([u.A, c.A], () => {
    let e = L ? u.A.getStatus() : c.A.getStatus(t.id);
    return e === i.clD.OFFLINE || e === i.clD.INVISIBLE
  }), M = T.length > 0 || null != C, U = S && null == C && null == k && null != R, F = !G && (M || U), W = N.length > 0;
  if (!F && !W && D) return (0, r.jsx)("div", {
    className: I.kR,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: I.kr,
      children: [(0, r.jsx)(s.FQ, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(s.FQ, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!F && !W && !D) {
    var H;
    return L ? (0, r.jsx)(O.qv, {
      onClose: E
    }) : (0, r.jsx)(O.zf, {
      user: t,
      guildId: null != (H = null == w ? true : w.guildId) ? H : A,
      channelId: P,
      onClose: E
    })
  }
  return (0, r.jsxs)(h.K, {
    className: I.XG,
    fade: true,
    children: [F ? (0, r.jsx)(j.A, {
      heading: _.intl.string(_.t.J6STd9),
      children: (0, r.jsxs)("ul", {
        className: I.kR,
        children: [null != C && (0, r.jsx)("li", {
          children: (0, r.jsx)(b.A, {
            user: t,
            currentUser: n,
            stream: C,
            onClose: E
          })
        }), T.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.A, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: E
          })
        }, "live-".concat(l))), U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.A, {
            user: t,
            currentUser: n,
            voiceChannel: R,
            onClose: E
          })
        })]
      })
    }) : null, W ? (0, r.jsx)(j.A, {
      heading: _.intl.string(_.t.jzgEoL),
      introText: L ? _.intl.format(_.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.MzZ, {
          href: d.A.getArticleURL(v.MVz.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollTargetId: x.bk.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: I.kR,
        children: N.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(m.A, {
            user: t,
            entry: e,
            onClose: E
          })
        }, e.id))
      })
    }) : null]
  })
}