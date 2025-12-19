/** Chunk was on 39442 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk353647 = require("./353647.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk151545 = require("./151545.jsx"),
  Chunk527790 = require("./527790.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk644773 = require("./644773.js");

function w(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: w,
    guildId: S,
    channelId: E,
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: _
  } = (0, l.U)({
    location: "UserProfileModalV2Activity"
  }), {
    live: C,
    recent: D,
    stream: k
  } = (0, f.Z)(t.id), {
    voiceChannel: N,
    voiceActivity: A
  } = (0, g.Z)({
    userId: t.id,
    guildId: S
  }), Z = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), R = t.id === n.id, G = (0, i.e7)([u.Z, s.Z], () => {
    let e = R ? u.Z.getStatus() : s.Z.getStatus(t.id);
    return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE
  }), M = C.length > 0 || null != k, L = _ && null == k && null == A && null != N, B = !G && (M || L), F = D.length > 0;
  if (!B && !F && Z) return (0, r.jsx)("div", {
    className: I.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: I.loadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!B && !F && !Z) {
    var U;
    return R ? (0, r.jsx)(y.Uf, {
      onClose: T
    }) : (0, r.jsx)(y.P9, {
      user: t,
      guildId: null != (U = null == w ? true : w.guildId) ? U : S,
      channelId: E,
      onClose: T
    })
  }
  return (0, r.jsxs)(O.F, {
    className: I.scroller,
    fade: true,
    children: [B ? (0, r.jsx)(v.Z, {
      heading: P.intl.string(P.t.J6STd9),
      children: (0, r.jsxs)("ul", {
        className: I.cards,
        children: [null != k && (0, r.jsx)("li", {
          children: (0, r.jsx)(m.Z, {
            user: t,
            currentUser: n,
            stream: k,
            onClose: T
          })
        }), C.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(p.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: T
          })
        }, "live-".concat(i))), L && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: t,
            currentUser: n,
            voiceChannel: N,
            onClose: T
          })
        })]
      })
    }) : null, F ? (0, r.jsx)(v.Z, {
      heading: P.intl.string(P.t.jzgEoL),
      introText: R ? P.intl.format(P.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, r.jsx)(a.Anchor, {
          href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollTargetId: j.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: I.cards,
        children: D.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            entry: e,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  })
}