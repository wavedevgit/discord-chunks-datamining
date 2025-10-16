/** Chunk was on 22325 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk833664 = require("./833664.js"),
  Chunk468363 = require("./468363.js"),
  Chunk353647 = require("./353647.js"),
  Chunk272304 = require("./272304.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk209698 = require("./209698.js"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk168463 = require("./168463.jsx"),
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
  Chunk158069 = require("./158069.js");

function T(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: T,
    guildId: C,
    channelId: N,
    subsection: A,
    onClose: D
  } = e, {
    voiceActivityStatusEnabled: k
  } = (0, o.U)({
    location: "UserProfileModalV2Activity"
  }), Z = (0, p.b)({
    location: "UserProfileModalV2Activity"
  }), R = (0, c.P6)("UserProfileModalV2Activity"), {
    live: L,
    recent: G,
    stream: B
  } = (0, m.Z)(t.id), {
    voiceChannel: M,
    voiceActivity: F
  } = (0, b.Z)({
    userId: t.id,
    guildId: C
  }), U = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)), W = t.id === n.id, H = (0, i.e7)([f.Z, d.Z], () => {
    let e = W ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE
  }), z = L.length > 0 || null != B, V = k && null == B && null == F && null != M, K = !H && (z || V), Y = G.length > 0, X = L.some(e => (0, l.Z)(e));
  if (!K && !Y && U) return (0, r.jsx)("div", {
    className: E.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: E.loadingItem,
      children: [(0, r.jsx)(u.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(u.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!K && !Y && !U) {
    var q;
    return W ? (0, r.jsx)(x.Uf, {
      onClose: D
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (q = null == T ? true : T.guildId) ? q : C,
      channelId: N,
      onClose: D
    })
  }
  return (0, r.jsxs)(P.F, {
    className: E.scroller,
    fade: true,
    children: [(() => {
      let e = W && R && !X;
      return K ? (0, r.jsx)(_.Z, {
        heading: S.intl.string(S.t.J6STd3),
        children: (0, r.jsxs)("ul", {
          className: E.cards,
          children: [e && (0, r.jsx)("li", {
            children: (0, r.jsx)(h.Z, {
              variant: "horizontal"
            })
          }), !Z && V && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: M,
              onClose: D
            })
          }), null != B && (0, r.jsx)("li", {
            children: (0, r.jsx)(j.Z, {
              user: t,
              currentUser: n,
              stream: B,
              onClose: D
            })
          }), L.map((e, i) => (0, r.jsx)("li", {
            children: (0, r.jsx)(v.Z, {
              user: t,
              currentUser: n,
              activity: e,
              onClose: D
            })
          }, "live-".concat(i))), Z && V && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: M,
              onClose: D
            })
          })]
        })
      }) : e ? (0, r.jsx)(_.Z, {
        heading: S.intl.string(S.t.J6STd3),
        children: (0, r.jsx)(h.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), Y ? (0, r.jsx)(_.Z, {
      heading: S.intl.string(S.t.jzgEoK),
      introText: W ? S.intl.format(S.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(a.Anchor, {
          href: g.Z.getArticleURL(w.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: A === I.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: E.cards,
        children: G.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            entry: e,
            onClose: D
          })
        }, e.id))
      })
    }) : null]
  })
}