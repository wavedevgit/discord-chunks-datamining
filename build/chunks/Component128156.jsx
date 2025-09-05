/** Chunk was on 30355 **/
/** chunk id: 128156, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468363 = require("./468363.js"),
  Chunk353647 = require("./353647.js"),
  Chunk566898 = require("./566898.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk63063 = require("./63063.js"),
  Chunk209698 = require("./209698.js"),
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
  Chunk837493 = require("./837493.js");

function S(e) {
  let {
    user: t,
    currentUser: r,
    displayProfile: S,
    guildId: w,
    channelId: N,
    subsection: E,
    onClose: C
  } = e, {
    voiceActivityStatusEnabled: T
  } = (0, a.U)({
    location: "UserProfileModalV2Activity"
  }), Z = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: k,
    recent: _,
    stream: D
  } = (0, m.Z)(t.id), {
    voiceChannel: L,
    voiceActivity: G
  } = (0, p.Z)({
    userId: t.id,
    guildId: w
  }), R = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)), B = t.id === r.id, F = (0, l.e7)([u.Z, c.Z], () => {
    let e = B ? u.Z.getStatus() : c.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), U = k.length > 0 || null != D, M = T && null == D && null == G && null != L, W = !F && (U || M), z = _.length > 0;
  if (!W && !z && R) return (0, n.jsx)("div", {
    className: I.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, n.jsxs)("div", {
      className: I.loadingItem,
      children: [(0, n.jsx)(o.ZT, {
        width: 60,
        opacity: .08
      }), (0, n.jsx)(o.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!W && !z && !R) {
    var Y;
    return B ? (0, n.jsx)(x.Uf, {
      onClose: C
    }) : (0, n.jsx)(x.P9, {
      user: t,
      guildId: null != (Y = null == S ? true : S.guildId) ? Y : w,
      channelId: N,
      onClose: C
    })
  }
  return (0, n.jsxs)(h.F, {
    className: I.scroller,
    fade: true,
    children: [W ? (0, n.jsx)(y.Z, {
      heading: A.intl.string(A.t.J6STd3),
      children: (0, n.jsxs)("ul", {
        className: I.cards,
        children: [!Z && M && (0, n.jsx)("li", {
          children: (0, n.jsx)(O.Z, {
            user: t,
            currentUser: r,
            voiceChannel: L,
            onClose: C
          })
        }), null != D && (0, n.jsx)("li", {
          children: (0, n.jsx)(j.Z, {
            user: t,
            currentUser: r,
            stream: D,
            onClose: C
          })
        }), k.map((e, l) => (0, n.jsx)("li", {
          children: (0, n.jsx)(g.Z, {
            user: t,
            currentUser: r,
            activity: e,
            onClose: C
          })
        }, "live-".concat(l))), Z && M && (0, n.jsx)("li", {
          children: (0, n.jsx)(O.Z, {
            user: t,
            currentUser: r,
            voiceChannel: L,
            onClose: C
          })
        })]
      })
    }) : null, z ? (0, n.jsx)(y.Z, {
      heading: A.intl.string(A.t.jzgEoK),
      introText: B ? A.intl.format(A.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, n.jsx)(i.eee, {
          href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: E === v.Tb.RECENT_ACTIVITY,
      children: (0, n.jsx)("ul", {
        className: I.cards,
        children: _.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(b.Z, {
            user: t,
            entry: e,
            onClose: C
          })
        }, e.id))
      })
    }) : null]
  })
}