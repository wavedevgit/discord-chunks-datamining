/** Chunk was on 75283 **/
/** chunk id: 128156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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
  Chunk744802 = require("./744802.jsx"),
  Chunk493043 = require("./493043.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158069 = require("./158069.js");

function Z(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: Z,
    guildId: P,
    channelId: T,
    subsection: C,
    onClose: A
  } = e, {
    voiceActivityStatusEnabled: N
  } = (0, l.U)({
    location: "UserProfileModalV2Activity"
  }), E = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: S,
    recent: w,
    stream: B
  } = (0, p.Z)(t.id), {
    voiceChannel: L,
    voiceActivity: D
  } = (0, m.Z)({
    userId: t.id,
    guildId: P
  }), M = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), U = t.id === n.id, R = (0, o.e7)([d.Z, s.Z], () => {
    let e = U ? d.Z.getStatus() : s.Z.getStatus(t.id);
    return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE
  }), k = S.length > 0 || null != B, G = N && null == B && null == D && null != L, V = !R && (k || G), F = w.length > 0;
  if (!V && !F && M) return (0, r.jsx)("div", {
    className: O.cards,
    children: Array.from({
      length: 8
    }).map((e, t) => (0, r.jsxs)("div", {
      className: O.loadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t))
  });
  if (!V && !F && !M) {
    var Y;
    return U ? (0, r.jsx)(_.Uf, {
      onClose: A
    }) : (0, r.jsx)(_.P9, {
      user: t,
      guildId: null != (Y = null == Z ? true : Z.guildId) ? Y : true,
      channelId: T,
      onClose: A
    })
  }
  return (0, r.jsxs)(i.Ttm, {
    className: O.scroller,
    fade: true,
    children: [V ? (0, r.jsx)(j.Z, {
      heading: I.intl.string(I.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: O.cards,
        children: [!E && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: A
          })
        }), null != B && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            location: "UserProfileModalV2Activity",
            user: t,
            currentUser: n,
            stream: B,
            onClose: A,
            profileGuildId: null == Z ? true : Z.guildId
          })
        }), S.map((e, o) => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: A,
            profileGuildId: null == Z ? true : Z.guildId
          })
        }, "live-".concat(o))), E && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: A
          })
        })]
      })
    }) : null, F ? (0, r.jsx)(j.Z, {
      heading: I.intl.string(I.t.jzgEoK),
      introText: U ? I.intl.format(I.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(i.eee, {
          href: u.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: C === v.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: O.cards,
        children: w.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            location: "UserProfileModalV2Activity",
            user: t,
            currentUser: n,
            entry: e,
            profileGuildId: null == Z ? true : Z.guildId,
            onClose: A
          })
        }, e.id))
      })
    }) : null]
  })
}