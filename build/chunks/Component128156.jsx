/** Chunk was on 98360 **/
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
    voiceActivityStatusEnabled: C
  } = (0, i.U)({
    location: "UserProfileModalV2Activity"
  }), E = (0, f.b)({
    location: "UserProfileModalV2Activity"
  }), {
    live: S,
    recent: w,
    stream: B
  } = (0, m.Z)(n.id), {
    voiceChannel: D,
    voiceActivity: L
  } = (0, p.Z)({
    userId: n.id,
    guildId: P
  }), R = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)), U = n.id === t.id, M = (0, o.e7)([d.Z, s.Z], () => {
    let e = U ? d.Z.getStatus() : s.Z.getStatus(n.id);
    return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE
  }), k = S.length > 0 || null != B, G = C && null == B && null == L && null != D, F = !M && (k || G), V = w.length > 0;
  if (!F && !V && R) return (0, r.jsx)("div", {
    className: I.cards,
    children: Array.from({
      length: 8
    }).map((e, n) => (0, r.jsxs)("div", {
      className: I.loadingItem,
      children: [(0, r.jsx)(a.ZT, {
        width: 60,
        opacity: .08
      }), (0, r.jsx)(a.ZT, {
        width: 135,
        opacity: .08
      })]
    }, n))
  });
  if (!F && !V && !R) {
    var W;
    return U ? (0, r.jsx)(j.Uf, {
      onClose: A
    }) : (0, r.jsx)(j.P9, {
      user: n,
      guildId: null != (W = null == Z ? true : Z.guildId) ? W : P,
      channelId: T,
      onClose: A
    })
  }
  return (0, r.jsxs)(l.Ttm, {
    className: I.scroller,
    fade: true,
    children: [F ? (0, r.jsx)(v.Z, {
      heading: O.intl.string(O.t.J6STd3),
      children: (0, r.jsxs)("ul", {
        className: I.cards,
        children: [!E && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            voiceChannel: D,
            onClose: A
          })
        }), null != B && (0, r.jsx)("li", {
          children: (0, r.jsx)(g.Z, {
            user: n,
            currentUser: t,
            stream: B,
            onClose: A
          })
        }), S.map((e, o) => (0, r.jsx)("li", {
          children: (0, r.jsx)(x.Z, {
            user: n,
            currentUser: t,
            activity: e,
            onClose: A
          })
        }, "live-".concat(o))), E && G && (0, r.jsx)("li", {
          children: (0, r.jsx)(h.Z, {
            user: n,
            currentUser: t,
            voiceChannel: D,
            onClose: A
          })
        })]
      })
    }) : null, V ? (0, r.jsx)(v.Z, {
      heading: O.intl.string(O.t.jzgEoK),
      introText: U ? O.intl.format(O.t["4bk9Ag"], {
        learnMoreHook: (e, n) => (0, r.jsx)(l.eee, {
          href: u.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
          children: e
        }, n)
      }) : true,
      scrollIntoView: N === _.Tb.RECENT_ACTIVITY,
      children: (0, r.jsx)("ul", {
        className: I.cards,
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