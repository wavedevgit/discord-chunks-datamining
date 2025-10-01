/** Chunk was on 49902 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
  Chunk158069 = require("./158069.js");

function N(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: N,
    guildId: k,
    channelId: A,
    subsection: T,
    onClose: Z
  } = e, {
    voiceActivityStatusEnabled: D
  } = (0, s.U)({
    location: "UserProfileModalV2Activity"
  }), _ = (0, h.b)({
    location: "UserProfileModalV2Activity"
  }), R = (0, c.P6)("UserProfileModalV2Activity"), {
    live: L,
    recent: U,
    stream: M
  } = (0, p.Z)(t.id), {
    voiceChannel: F,
    voiceActivity: G
  } = (0, m.Z)({
    userId: t.id,
    guildId: k
  }), W = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), B = t.id === n.id, z = (0, i.e7)([f.Z, d.Z], () => {
    let e = B ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), H = L.length > 0 || null != M, q = D && null == M && null == G && null != F, Y = !z && (H || q), V = U.length > 0, K = L.some(e => (0, a.Z)(e));
  if (!Y && !V && W) return (0, r.jsx)("div", {
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
  if (!Y && !V && !W) {
    var J;
    return B ? (0, r.jsx)(x.Uf, {
      onClose: Z
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (J = null == N ? true : N.guildId) ? J : k,
      channelId: A,
      onClose: Z
    })
  }
  return (0, r.jsxs)(S.F, {
    className: E.scroller,
    fade: true,
    children: [(() => {
      let e = B && R && !K;
      return Y ? (0, r.jsx)(P.Z, {
        heading: C.intl.string(C.t.J6STd3),
        children: (0, r.jsxs)("ul", {
          className: E.cards,
          children: [e && (0, r.jsx)("li", {
            children: (0, r.jsx)(v.Z, {
              variant: "horizontal"
            })
          }), !_ && q && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: F,
              onClose: Z
            })
          }), null != M && (0, r.jsx)("li", {
            children: (0, r.jsx)(j.Z, {
              user: t,
              currentUser: n,
              stream: M,
              onClose: Z
            })
          }), L.map((e, i) => (0, r.jsx)("li", {
            children: (0, r.jsx)(b.Z, {
              user: t,
              currentUser: n,
              activity: e,
              onClose: Z
            })
          }, "live-".concat(i))), _ && q && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: F,
              onClose: Z
            })
          })]
        })
      }) : e ? (0, r.jsx)(P.Z, {
        heading: C.intl.string(C.t.J6STd3),
        children: (0, r.jsx)(v.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), V ? (0, r.jsx)(P.Z, {
      heading: C.intl.string(C.t.jzgEoK),
      introText: B ? C.intl.format(C.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: g.Z.getArticleURL(w.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: T === I.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: E.cards,
        children: U.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            entry: e,
            onClose: Z
          })
        }, e.id))
      })
    }) : null]
  })
}