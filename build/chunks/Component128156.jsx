/** Chunk was on 85032 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk644773 = require("./644773.js");

function S(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: S,
    guildId: E,
    channelId: _,
    subsection: T,
    onClose: C
  } = e, {
    voiceActivityStatusEnabled: D
  } = (0, l.U)({
    location: "UserProfileModalV2Activity"
  }), k = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: N,
    recent: A,
    stream: Z
  } = (0, g.Z)(t.id), {
    voiceChannel: R,
    voiceActivity: G
  } = (0, p.Z)({
    userId: t.id,
    guildId: E
  }), M = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), L = t.id === n.id, B = (0, i.e7)([u.Z, s.Z], () => {
    let e = L ? u.Z.getStatus() : s.Z.getStatus(t.id);
    return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE
  }), U = N.length > 0 || null != Z, F = D && null == Z && null == G && null != R, W = !B && (U || F), H = A.length > 0;
  if (!W && !H && M) return (0, r.jsx)("div", {
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
  if (!W && !H && !M) {
    var z;
    return L ? (0, r.jsx)(v.Uf, {
      onClose: C
    }) : (0, r.jsx)(v.P9, {
      user: t,
      guildId: null != (z = null == S ? true : S.guildId) ? z : E,
      channelId: _,
      onClose: C
    })
  }
  return (0, r.jsxs)(j.F, {
    className: w.scroller,
    fade: true,
    children: [W ? (0, r.jsx)(O.Z, {
      heading: I.intl.string(I.t.J6STd9),
      children: (0, r.jsxs)("ul", {
        className: w.cards,
        children: [!k && F && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: R,
            onClose: C
          })
        }), null != Z && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: t,
            currentUser: n,
            stream: Z,
            onClose: C
          })
        }), N.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: C
          })
        }, "live-".concat(i))), k && F && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: R,
            onClose: C
          })
        })]
      })
    }) : null, H ? (0, r.jsx)(O.Z, {
      heading: I.intl.string(I.t.jzgEoL),
      introText: L ? I.intl.format(I.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, r.jsx)(a.Anchor, {
          href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: T === x.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: w.cards,
        children: A.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(m.Z, {
            user: t,
            entry: e,
            onClose: C
          })
        }, e.id))
      })
    }) : null]
  })
}