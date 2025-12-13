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
    onClose: T
  } = e, {
    voiceActivityStatusEnabled: C
  } = (0, l.U)({
    location: "UserProfileModalV2Activity"
  }), D = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: k,
    recent: N,
    stream: A
  } = (0, g.Z)(t.id), {
    voiceChannel: Z,
    voiceActivity: R
  } = (0, p.Z)({
    userId: t.id,
    guildId: E
  }), G = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)), M = t.id === n.id, L = (0, i.e7)([u.Z, s.Z], () => {
    let e = M ? u.Z.getStatus() : s.Z.getStatus(t.id);
    return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE
  }), B = k.length > 0 || null != A, U = C && null == A && null == R && null != Z, F = !L && (B || U), W = N.length > 0;
  if (!F && !W && G) return (0, r.jsx)("div", {
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
  if (!F && !W && !G) {
    var H;
    return M ? (0, r.jsx)(v.Uf, {
      onClose: T
    }) : (0, r.jsx)(v.P9, {
      user: t,
      guildId: null != (H = null == S ? true : S.guildId) ? H : E,
      channelId: _,
      onClose: T
    })
  }
  return (0, r.jsxs)(j.F, {
    className: w.scroller,
    fade: true,
    children: [F ? (0, r.jsx)(O.Z, {
      heading: I.intl.string(I.t.J6STd9),
      children: (0, r.jsxs)("ul", {
        className: w.cards,
        children: [!D && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: Z,
            onClose: T
          })
        }), null != A && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: t,
            currentUser: n,
            stream: A,
            onClose: T
          })
        }), k.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: T
          })
        }, "live-".concat(i))), D && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: Z,
            onClose: T
          })
        })]
      })
    }) : null, W ? (0, r.jsx)(O.Z, {
      heading: I.intl.string(I.t.jzgEoL),
      introText: M ? I.intl.format(I.t["4bk9Ak"], {
        learnMoreHook: (e, t) => (0, r.jsx)(a.Anchor, {
          href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollTargetId: x.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: w.cards,
        children: N.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(m.Z, {
            user: t,
            entry: e,
            onClose: T
          })
        }, e.id))
      })
    }) : null]
  })
}