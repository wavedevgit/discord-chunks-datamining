/** Chunk was on 82008 **/
/** chunk id: 128156, original params: e,n,t (module,exports,require) **/
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
  Chunk527790 = require("./527790.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk693408 = require("./693408.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158069 = require("./158069.js");

function Z(e) {
  let {
    user: n,
    currentUser: t,
    displayProfile: Z,
    guildId: P,
    channelId: T,
    subsection: N,
    onClose: A
  } = e, {
    voiceActivityStatusEnabled: E
  } = (0, i.U)({
    location: "UserProfileModalV2Activity"
  }), C = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: S,
    recent: w,
    stream: D
  } = (0, m.Z)(n.id), {
    voiceChannel: L,
    voiceActivity: B
  } = (0, p.Z)({
    userId: n.id,
    guildId: P
  }), U = (0, l.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), R = n.id === t.id, M = (0, l.e7)([d.Z, a.Z], () => {
    let e = R ? d.Z.getStatus() : a.Z.getStatus(n.id);
    return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE
  }), k = S.length > 0 || null != D, G = E && null == D && null == B && null != L, F = !M && (k || G), V = w.length > 0;
  if (!F && !V && U) return (0, r.jsx)("div", {
    className: _.cards,
    children: Array.from({
      length: 8
    }).map((e, n) => (0, r.jsxs)("div", {
      className: _.loadingItem,
      children: [(0, r.jsx)(s.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(s.ZT, {
        width: 135,
        opacity: .08
      })]
    }, n))
  });
  if (!F && !V && !U) {
    var Y;
    return R ? (0, r.jsx)(g.Uf, {
      onClose: A
    }) : (0, r.jsx)(g.P9, {
      user: n,
      guildId: null != (Y = null == Z ? true : Z.guildId) ? Y : P,
      channelId: T,
      onClose: A
    })
  }
  return (0, r.jsxs)(o.Ttm, {
    className: _.scroller,
    fade: true,
    children: [F ? (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: _.cards,
        children: [!C && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: L,
            onClose: A
          })
        }), null != D && (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: n,
            currentUser: t,
            stream: D,
            onClose: A
          })
        }), S.map((e, l) => (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: A
          })
        }, "live-".concat(l))), C && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(j.Z, {
            user: n,
            currentUser: t,
            voiceChannel: L,
            onClose: A
          })
        })]
      })
    }) : null, V ? (0, r.jsx)(v.Z, {
      heading: I.intl.string(I.t.jzgEoK),
      introText: R ? I.intl.format(I.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(o.eee, {
          href: u.Z.getArticleURL(O.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: N === y.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: _.cards,
        children: w.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.Z, {
            user: n,
            entry: e,
            onClose: A
          })
        }, e.id))
      })
    }) : null]
  })
}