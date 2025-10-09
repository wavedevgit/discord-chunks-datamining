/** Chunk was on 56848 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
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

function A(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: A,
    guildId: N,
    channelId: C,
    subsection: k,
    onClose: D
  } = e, {
    voiceActivityStatusEnabled: Z
  } = (0, s.U)({
    location: "UserProfileModalV2Activity"
  }), _ = (0, p.b)({
    location: "UserProfileModalV2Activity"
  }), R = (0, c.P6)("UserProfileModalV2Activity"), {
    live: L,
    recent: G,
    stream: U
  } = (0, m.Z)(t.id), {
    voiceChannel: M,
    voiceActivity: W
  } = (0, h.Z)({
    userId: t.id,
    guildId: N
  }), F = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), B = t.id === n.id, z = (0, i.e7)([f.Z, d.Z], () => {
    let e = B ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), H = L.length > 0 || null != U, V = Z && null == U && null == W && null != M, Y = !z && (H || V), q = G.length > 0, X = L.some(e => (0, a.Z)(e));
  if (!Y && !q && F) return (0, r.jsx)("div", {
    className: T.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: T.loadingItem,
      children: [(0, r.jsx)(u.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(u.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!Y && !q && !F) {
    var K;
    return B ? (0, r.jsx)(x.Uf, {
      onClose: D
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (K = null == A ? true : A.guildId) ? K : N,
      channelId: C,
      onClose: D
    })
  }
  return (0, r.jsxs)(I.F, {
    className: T.scroller,
    fade: true,
    children: [(() => {
      let e = B && R && !X;
      return Y ? (0, r.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, r.jsxs)("ul", {
          className: T.cards,
          children: [e && (0, r.jsx)("li", {
            children: (0, r.jsx)(v.Z, {
              variant: "horizontal"
            })
          }), !_ && V && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: M,
              onClose: D
            })
          }), null != U && (0, r.jsx)("li", {
            children: (0, r.jsx)(b.Z, {
              user: t,
              currentUser: n,
              stream: U,
              onClose: D
            })
          }), L.map((e, i) => (0, r.jsx)("li", {
            children: (0, r.jsx)(y.Z, {
              user: t,
              currentUser: n,
              activity: e,
              onClose: D
            })
          }, "live-".concat(i))), _ && V && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: M,
              onClose: D
            })
          })]
        })
      }) : e ? (0, r.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, r.jsx)(v.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), q ? (0, r.jsx)(P.Z, {
      heading: E.intl.string(E.t.jzgEoK),
      introText: B ? E.intl.format(E.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: g.Z.getArticleURL(w.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: k === S.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: T.cards,
        children: G.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: t,
            entry: e,
            onClose: D
          })
        }, e.id))
      })
    }) : null]
  })
}