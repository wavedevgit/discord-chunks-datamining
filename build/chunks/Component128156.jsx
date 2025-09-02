/** Chunk was on 8188 **/
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
    guildId: S,
    channelId: E,
    subsection: T,
    onClose: N
  } = e, {
    voiceActivityStatusEnabled: C
  } = (0, a.U)({
    location: "UserProfileModalV2Activity"
  }), A = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: k,
    recent: Z,
    stream: D
  } = (0, g.Z)(t.id), {
    voiceChannel: L,
    voiceActivity: R
  } = (0, b.Z)({
    userId: t.id,
    guildId: S
  }), G = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), B = t.id === n.id, F = (0, i.e7)([u.Z, s.Z], () => {
    let e = B ? u.Z.getStatus() : s.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), M = k.length > 0 || null != D, U = C && null == D && null == R && null != L, z = !F && (M || U), K = Z.length > 0;
  if (!z && !K && G) return (0, r.jsx)("div", {
    className: w.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: w.loadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!z && !K && !G) {
    var W;
    return B ? (0, r.jsx)(y.Uf, {
      onClose: N
    }) : (0, r.jsx)(y.P9, {
      user: t,
      guildId: null != (W = null == I ? true : I.guildId) ? W : S,
      channelId: E,
      onClose: N
    })
  }
  return (0, r.jsxs)(v.F, {
    className: w.scroller,
    fade: true,
    children: [z ? (0, r.jsx)(x.Z, {
      heading: P.intl.string(P.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: w.cards,
        children: [!A && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: N
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(O.Z, {
            user: t,
            currentUser: n,
            stream: D,
            onClose: N
          })
        }), k.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(p.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: N
          })
        }, "live-".concat(i))), A && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: N
          })
        })]
      })
    }) : null, K ? (0, r.jsx)(x.Z, {
      heading: P.intl.string(P.t.jzgEoK),
      introText: B ? P.intl.format(P.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: d.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: T === h.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: w.cards,
        children: Z.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(m.Z, {
            user: t,
            entry: e,
            onClose: N
          })
        }, e.id))
      })
    }) : null]
  })
}