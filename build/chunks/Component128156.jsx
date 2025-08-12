/** Chunk was on 29458 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk744802 = require("./744802.jsx"),
  Chunk493043 = require("./493043.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk850419 = require("./850419.js");

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    guildId: E,
    channelId: Z,
    subsection: T,
    onClose: N
  } = e, {
    voiceActivityStatusEnabled: S
  } = (0, o.U)({
    location: "UserProfileModalV2Activity"
  }), A = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: w,
    recent: C,
    stream: L
  } = (0, p.Z)(t.id), {
    voiceChannel: D,
    voiceActivity: R
  } = (0, m.Z)({
    userId: t.id,
    guildId: E
  }), k = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), M = t.id === n.id, B = (0, l.e7)([d.Z, s.Z], () => {
    let e = M ? d.Z.getStatus() : s.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), G = w.length > 0 || null != L, U = S && null == L && null == R && null != D, F = !B && (G || U), V = C.length > 0;
  if (!F && !V && k) return (0, r.jsx)("div", {
    className: I.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: I.loadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!F && !V && !k) {
    var Y;
    return M ? (0, r.jsx)(x.Uf, {
      onClose: N
    }) : (0, r.jsx)(x.P9, {
      user: t,
      guildId: null != (Y = null == P ? true : P.guildId) ? Y : true,
      channelId: Z,
      onClose: N
    })
  }
  return (0, r.jsxs)(i.Ttm, {
    className: I.scroller,
    fade: true,
    children: [F ? (0, r.jsx)(h.Z, {
      heading: _.intl.string(_.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: I.cards,
        children: [!A && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: D,
            onClose: N
          })
        }), null != L && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            location: "UserProfileModalV2Activity",
            user: t,
            currentUser: n,
            stream: L,
            onClose: N,
            profileGuildId: null == P ? true : P.guildId
          })
        }), w.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: N,
            profileGuildId: null == P ? true : P.guildId
          })
        }, "live-".concat(l))), A && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: D,
            onClose: N
          })
        })]
      })
    }) : null, V ? (0, r.jsx)(h.Z, {
      heading: _.intl.string(_.t.jzgEoK),
      introText: M ? _.intl.format(_.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: u.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: T === O.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: I.cards,
        children: C.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            location: "UserProfileModalV2Activity",
            user: t,
            currentUser: n,
            entry: e,
            profileGuildId: null == P ? true : P.guildId,
            onClose: N
          })
        }, e.id))
      })
    }) : null]
  })
}