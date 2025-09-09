/** Chunk was on 30355 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    guildId: w,
    channelId: N,
    subsection: E,
    onClose: Z
  } = e, {
    voiceActivityStatusEnabled: C
  } = (0, a.U)({
    location: "UserProfileModalV2Activity"
  }), T = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: k,
    recent: _,
    stream: L
  } = (0, m.Z)(t.id), {
    voiceChannel: D,
    voiceActivity: G
  } = (0, g.Z)({
    userId: t.id,
    guildId: w
  }), R = (0, l.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)), B = t.id === n.id, U = (0, l.e7)([u.Z, c.Z], () => {
    let e = B ? u.Z.getStatus() : c.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), M = k.length > 0 || null != L, F = C && null == L && null == G && null != D, W = !U && (M || F), z = _.length > 0;
  if (!W && !z && R) return (0, r.jsx)("div", {
    className: A.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: A.loadingItem,
      children: [(0, r.jsx)(o.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(o.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!W && !z && !R) {
    var q;
    return B ? (0, r.jsx)(h.Uf, {
      onClose: Z
    }) : (0, r.jsx)(h.P9, {
      user: t,
      guildId: null != (q = null == I ? true : I.guildId) ? q : w,
      channelId: N,
      onClose: Z
    })
  }
  return (0, r.jsxs)(v.F, {
    className: A.scroller,
    fade: true,
    children: [W ? (0, r.jsx)(x.Z, {
      heading: S.intl.string(S.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: A.cards,
        children: [!T && F && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: D,
            onClose: Z
          })
        }), null != L && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: t,
            currentUser: n,
            stream: L,
            onClose: Z
          })
        }), k.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(p.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: Z
          })
        }, "live-".concat(l))), T && F && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: D,
            onClose: Z
          })
        })]
      })
    }) : null, z ? (0, r.jsx)(x.Z, {
      heading: S.intl.string(S.t.jzgEoK),
      introText: B ? S.intl.format(S.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: E === O.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: A.cards,
        children: _.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            entry: e,
            onClose: Z
          })
        }, e.id))
      })
    }) : null]
  })
}