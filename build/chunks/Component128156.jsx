/** Chunk was on 49902 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk833664 = require("./833664.js"),
  Chunk468363 = require("./468363.js"),
  Chunk353647 = require("./353647.js"),
  Chunk220410 = require("./220410.js"),
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
  Chunk837493 = require("./837493.js");

function E(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: E,
    guildId: N,
    channelId: k,
    subsection: T,
    onClose: D
  } = e, {
    voiceActivityStatusEnabled: Z
  } = (0, o.U)({
    location: "UserProfileModalV2Activity"
  }), _ = (0, h.b)({
    location: "UserProfileModalV2Activity"
  }), R = (0, c.P6)("UserProfileModalV2Activity"), {
    live: M,
    recent: U,
    stream: L
  } = (0, p.Z)(t.id), {
    voiceChannel: G,
    voiceActivity: F
  } = (0, b.Z)({
    userId: t.id,
    guildId: N
  }), B = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)), W = t.id === n.id, z = (0, i.e7)([f.Z, d.Z], () => {
    let e = W ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), H = M.length > 0 || null != L, Y = Z && null == L && null == F && null != G, q = !z && (H || Y), V = U.length > 0, K = M.some(e => (0, a.Z)(e));
  if (!q && !V && B) return (0, r.jsx)("div", {
    className: A.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: A.loadingItem,
      children: [(0, r.jsx)(u.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(u.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!q && !V && !B) {
    var J;
    return W ? (0, r.jsx)(x.Uf, {
      onClose: D
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (J = null == E ? true : E.guildId) ? J : N,
      channelId: k,
      onClose: D
    })
  }
  return (0, r.jsxs)(S.F, {
    className: A.scroller,
    fade: true,
    children: [(() => {
      let e = W && R && !K;
      return q ? (0, r.jsx)(P.Z, {
        heading: C.intl.string(C.t.J6STd3),
        children: (0, r.jsxs)("ul", {
          className: A.cards,
          children: [e && (0, r.jsx)("li", {
            children: (0, r.jsx)(m.Z, {
              variant: "horizontal"
            })
          }), !_ && Y && (0, r.jsx)("li", {
            children: (0, r.jsx)(j.Z, {
              user: t,
              currentUser: n,
              voiceChannel: G,
              onClose: D
            })
          }), null != L && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              stream: L,
              onClose: D
            })
          }), M.map((e, i) => (0, r.jsx)("li", {
            children: (0, r.jsx)(v.Z, {
              user: t,
              currentUser: n,
              activity: e,
              onClose: D
            })
          }, "live-".concat(i))), _ && Y && (0, r.jsx)("li", {
            children: (0, r.jsx)(j.Z, {
              user: t,
              currentUser: n,
              voiceChannel: G,
              onClose: D
            })
          })]
        })
      }) : e ? (0, r.jsx)(P.Z, {
        heading: C.intl.string(C.t.J6STd3),
        children: (0, r.jsx)(m.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), V ? (0, r.jsx)(P.Z, {
      heading: C.intl.string(C.t.jzgEoK),
      introText: W ? C.intl.format(C.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: g.Z.getArticleURL(w.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: T === I.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: A.cards,
        children: U.map(e => (0, r.jsx)("li", {
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