/** Chunk was on 30355 **/
/** chunk id: 128156, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk158069 = require("./158069.js");

function w(e) {
  let {
    user: t,
    currentUser: r,
    displayProfile: w,
    guildId: I,
    channelId: N,
    subsection: E,
    onClose: Z
  } = e, {
    voiceActivityStatusEnabled: C
  } = (0, s.U)({
    location: "UserProfileModalV2Activity"
  }), T = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: k,
    recent: _,
    stream: L
  } = (0, g.Z)(t.id), {
    voiceChannel: D,
    voiceActivity: G
  } = (0, m.Z)({
    userId: t.id,
    guildId: I
  }), B = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), R = t.id === r.id, F = (0, l.e7)([u.Z, c.Z], () => {
    let e = R ? u.Z.getStatus() : c.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), U = k.length > 0 || null != L, M = C && null == L && null == G && null != D, z = !F && (U || M), W = _.length > 0;
  if (!z && !W && B) return (0, n.jsx)("div", {
    className: S.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, n.jsxs)("div", {
      className: S.loadingItem,
      children: [(0, n.jsx)(o.ZT, {
        width: 60,
        opacity: .08
      }), (0, n.jsx)(o.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!z && !W && !B) {
    var Y;
    return R ? (0, n.jsx)(x.Uf, {
      onClose: Z
    }) : (0, n.jsx)(x.P9, {
      user: t,
      guildId: null != (Y = null == w ? true : w.guildId) ? Y : I,
      channelId: N,
      onClose: Z
    })
  }
  return (0, n.jsxs)(v.F, {
    className: S.scroller,
    fade: true,
    children: [z ? (0, n.jsx)(O.Z, {
      heading: A.intl.string(A.t.J6STd3),
      children: (0, n.jsxs)("ul", {
        className: S.cards,
        children: [!T && M && (0, n.jsx)("li", {
          children: (0, n.jsx)(h.Z, {
            user: t,
            currentUser: r,
            voiceChannel: D,
            onClose: Z
          })
        }), null != L && (0, n.jsx)("li", {
          children: (0, n.jsx)(b.Z, {
            user: t,
            currentUser: r,
            stream: L,
            onClose: Z
          })
        }), k.map((e, l) => (0, n.jsx)("li", {
          children: (0, n.jsx)(p.Z, {
            user: t,
            currentUser: r,
            activity: e,
            onClose: Z
          })
        }, "live-".concat(l))), T && M && (0, n.jsx)("li", {
          children: (0, n.jsx)(h.Z, {
            user: t,
            currentUser: r,
            voiceChannel: D,
            onClose: Z
          })
        })]
      })
    }) : null, W ? (0, n.jsx)(O.Z, {
      heading: A.intl.string(A.t.jzgEoK),
      introText: R ? A.intl.format(A.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, n.jsx)(i.eee, {
          href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: E === y.Tb.RECENT_ACTIVITY,
      children: (0, n.jsx)("ul", {
        className: S.cards,
        children: _.map(e => (0, n.jsx)("li", {
          children: (0, n.jsx)(j.Z, {
            user: t,
            entry: e,
            onClose: Z
          })
        }, e.id))
      })
    }) : null]
  })
}