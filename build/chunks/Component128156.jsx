/** Chunk was on 74477 **/
/** chunk id: 128156, original params: e,t,r (module,exports,require) **/
"use strict";
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
    currentUser: r,
    displayProfile: N,
    guildId: A,
    channelId: T,
    subsection: k,
    onClose: Z
  } = e, {
    voiceActivityStatusEnabled: D
  } = (0, s.U)({
    location: "UserProfileModalV2Activity"
  }), _ = (0, h.b)({
    location: "UserProfileModalV2Activity"
  }), R = (0, c.P6)("UserProfileModalV2Activity"), {
    live: U,
    recent: L,
    stream: M
  } = (0, p.Z)(t.id), {
    voiceChannel: F,
    voiceActivity: G
  } = (0, m.Z)({
    userId: t.id,
    guildId: A
  }), B = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), W = t.id === r.id, z = (0, i.e7)([f.Z, d.Z], () => {
    let e = W ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), H = U.length > 0 || null != M, Y = D && null == M && null == G && null != F, q = !z && (H || Y), V = L.length > 0, K = U.some(e => (0, a.Z)(e));
  if (!q && !V && B) return (0, n.jsx)("div", {
    className: C.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, n.jsxs)("div", {
      className: C.loadingItem,
      children: [(0, n.jsx)(u.ZT, {
        width: 60,
        opacity: .08
      }), (0, n.jsx)(u.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!q && !V && !B) {
    var J;
    return W ? (0, n.jsx)(x.Uf, {
      onClose: Z
    }) : (0, n.jsx)(x.P9, {
      user: t,
      guildId: null != (J = null == N ? true : N.guildId) ? J : A,
      channelId: T,
      onClose: Z
    })
  }
  return (0, n.jsxs)(S.F, {
    className: C.scroller,
    fade: true,
    children: [(() => {
      let e = W && R && !K;
      return q ? (0, n.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, n.jsxs)("ul", {
          className: C.cards,
          children: [e && (0, n.jsx)("li", {
            children: (0, n.jsx)(v.Z, {
              variant: "horizontal"
            })
          }), !_ && Y && (0, n.jsx)("li", {
            children: (0, n.jsx)(O.Z, {
              user: t,
              currentUser: r,
              voiceChannel: F,
              onClose: Z
            })
          }), null != M && (0, n.jsx)("li", {
            children: (0, n.jsx)(j.Z, {
              user: t,
              currentUser: r,
              stream: M,
              onClose: Z
            })
          }), U.map((e, i) => (0, n.jsx)("li", {
            children: (0, n.jsx)(b.Z, {
              user: t,
              currentUser: r,
              activity: e,
              onClose: Z
            })
          }, "live-".concat(i))), _ && Y && (0, n.jsx)("li", {
            children: (0, n.jsx)(O.Z, {
              user: t,
              currentUser: r,
              voiceChannel: F,
              onClose: Z
            })
          })]
        })
      }) : e ? (0, n.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, n.jsx)(v.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), V ? (0, n.jsx)(P.Z, {
      heading: E.intl.string(E.t.jzgEoK),
      introText: W ? E.intl.format(E.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, n.jsx)(l.eee, {
          href: g.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: k === w.Tb.RECENT_ACTIVITY,
      children: (0, n.jsx)("ul", {
        className: C.cards,
        children: L.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(y.Z, {
            user: t,
            entry: e,
            onClose: Z
          })
        }, e.id))
      })
    }) : null]
  })
}