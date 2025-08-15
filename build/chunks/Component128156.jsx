/** Chunk was on 12756 **/
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
  Chunk158069 = require("./158069.js");

function P(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: P,
    guildId: E,
    channelId: T,
    subsection: Z,
    onClose: N
  } = e, {
    voiceActivityStatusEnabled: w
  } = (0, o.U)({
    location: "UserProfileModalV2Activity"
  }), S = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: A,
    recent: C,
    stream: D
  } = (0, p.Z)(t.id), {
    voiceChannel: L,
    voiceActivity: R
  } = (0, m.Z)({
    userId: t.id,
    guildId: E
  }), G = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)), k = t.id === n.id, B = (0, i.e7)([d.Z, s.Z], () => {
    let e = k ? d.Z.getStatus() : s.Z.getStatus(t.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), M = A.length > 0 || null != D, U = w && null == D && null == R && null != L, F = !B && (M || U), V = C.length > 0;
  if (!F && !V && G) return (0, r.jsx)("div", {
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
  if (!F && !V && !G) {
    var Y;
    return k ? (0, r.jsx)(O.Uf, {
      onClose: N
    }) : (0, r.jsx)(O.P9, {
      user: t,
      guildId: null != (Y = null == P ? true : P.guildId) ? Y : true,
      channelId: T,
      onClose: N
    })
  }
  return (0, r.jsxs)(l.Ttm, {
    className: I.scroller,
    fade: true,
    children: [F ? (0, r.jsx)(h.Z, {
      heading: _.intl.string(_.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: I.cards,
        children: [!S && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: N
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            location: "UserProfileModalV2Activity",
            user: t,
            currentUser: n,
            stream: D,
            onClose: N,
            profileGuildId: null == P ? true : P.guildId
          })
        }), A.map((e, i) => (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: t,
            currentUser: n,
            activity: e,
            onClose: N,
            profileGuildId: null == P ? true : P.guildId
          })
        }, "live-".concat(i))), S && U && (0, r.jsx)("li", {
          children: (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            voiceChannel: L,
            onClose: N
          })
        })]
      })
    }) : null, V ? (0, r.jsx)(h.Z, {
      heading: _.intl.string(_.t.jzgEoK),
      introText: k ? _.intl.format(_.t["4bk9Ag"], {
        learnMoreHook: (e, t) => (0, r.jsx)(l.eee, {
          href: u.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, t)
      }) : true,
      scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
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