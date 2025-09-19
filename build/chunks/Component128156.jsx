/** Chunk was on 30355 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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

function w(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: w,
    guildId: T,
    channelId: Z,
    subsection: C,
    onClose: k
  } = e, {
    voiceActivityStatusEnabled: _
  } = (0, s.U)({
    location: "UserProfileModalV2Activity"
  }), L = (0, g.b)({
    location: "UserProfileModalV2Activity"
  }), D = (0, c.P6)("UserProfileModalV2Activity"), {
    live: U,
    recent: R,
    stream: M
  } = (0, p.Z)(t.id), {
    voiceChannel: G,
    voiceActivity: B
  } = (0, b.Z)({
    userId: t.id,
    guildId: T
  }), F = (0, l.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), W = t.id === n.id, z = (0, l.e7)([f.Z, d.Z], () => {
    let e = W ? f.Z.getStatus() : d.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), q = U.length > 0 || null != M, Y = _ && null == M && null == B && null != G, V = !z && (q || Y), H = R.length > 0, K = U.some(e => (0, a.Z)(e));
  if (!V && !H && F) return (0, r.jsx)("div", {
    className: N.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: N.loadingItem,
      children: [(0, r.jsx)(u.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(u.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!V && !H && !F) {
    var J;
    return W ? (0, r.jsx)(x.Uf, {
      onClose: k
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (J = null == w ? true : w.guildId) ? J : T,
      channelId: Z,
      onClose: k
    })
  }
  return (0, r.jsxs)(I.F, {
    className: N.scroller,
    fade: true,
    children: [(() => {
      let e = W && D && !K;
      return V ? (0, r.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, r.jsxs)("ul", {
          className: N.cards,
          children: [e && (0, r.jsx)("li", {
            children: (0, r.jsx)(j.Z, {
              variant: "horizontal"
            })
          }), !L && Y && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: G,
              onClose: k
            })
          }), null != M && (0, r.jsx)("li", {
            children: (0, r.jsx)(v.Z, {
              user: t,
              currentUser: n,
              stream: M,
              onClose: k
            })
          }), U.map((e, l) => (0, r.jsx)("li", {
            children: (0, r.jsx)(y.Z, {
              user: t,
              currentUser: n,
              activity: e,
              onClose: k
            })
          }, "live-".concat(l))), L && Y && (0, r.jsx)("li", {
            children: (0, r.jsx)(O.Z, {
              user: t,
              currentUser: n,
              voiceChannel: G,
              onClose: k
            })
          })]
        })
      }) : e ? (0, r.jsx)(P.Z, {
        heading: E.intl.string(E.t.J6STd3),
        children: (0, r.jsx)(j.Z, {
          variant: "horizontal"
        })
      }) : null
    })(), H ? (0, r.jsx)(P.Z, {
      heading: E.intl.string(E.t.jzgEoK),
      introText: W ? E.intl.format(E.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: m.Z.getArticleURL(A.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: C === S.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: N.cards,
        children: R.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: t,
            entry: e,
            onClose: k
          })
        }, e.id))
      })
    }) : null]
  })
}