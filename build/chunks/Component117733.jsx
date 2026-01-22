/** Chunk was on 33957 **/
/** chunk id: 117733, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk241524 = require("./241524.js"),
  Chunk58149 = require("./58149.js"),
  Chunk293865 = require("./293865.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk954571 = require("./954571.js"),
  Chunk225142 = require("./225142.js"),
  Chunk701785 = require("./701785.js"),
  Chunk65995 = require("./65995.js"),
  Chunk978165 = require("./978165.js"),
  Chunk490171 = require("./490171.jsx"),
  Chunk119593 = require("./119593.jsx"),
  Chunk283012 = require("./283012.jsx"),
  Chunk12446 = require("./12446.jsx"),
  Chunk913423 = require("./913423.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159453 = require("./159453.js"),
  Chunk638990 = require("./638990.js");

function M(e) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {},
      t = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), t.forEach(function(n) {
      var t;
      t = l[n], n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = t
    })
  }
  return e
}

function S(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      l.push.apply(l, t)
    }
    return l
  })(Object(n)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
  }), e
}
let D = Chunk490171.O + 300 + 64,
  P = Chunk64700.memo(function(e) {
    let {
      guild: n
    } = e;
    return (0, t.jsxs)(h.A, {
      channelId: _.VV.GUILD_HOME,
      guildId: n.id,
      className: i()(E.DD, E.Tp),
      innerClassname: E.vi,
      children: [(0, t.jsx)(h.A.Icon, {
        icon: c.Zf8,
        "aria-hidden": true
      }), (0, t.jsxs)(h.A.Title, {
        children: [(0, t.jsx)(c.AC4, {
          children: n.name
        }), w.intl.string(w.t.VbpLyU)]
      })]
    })
  });

function L(e) {
  var n, l;
  let {
    guild: r,
    width: h
  } = e, w = (0, s.bG)([m.Ay], () => m.Ay.getSection(_.VV.GUILD_HOME)), [L, R] = a.useState(false), [T, k] = a.useState(C.da6), H = w === C.YvQ.SIDEBAR_CHAT, U = (0, c.R7z)(), B = (0, s.bG)([j.h], () => j.h.getSettings(r.id)), V = null == B ? true : B.welcomeMessage, K = (0, p.A)(r.id), z = !K && (null != (n = null == B || null == (l = B.resourceChannels) ? true : l.length) ? n : 0) === 0, $ = (0, o.A)("(max-width: 1300px)"), F = h - C.MdR - T, Q = H && F < D || $ || z;
  return (a.useEffect(() => {
    if (B === j.A)(0, g.ag)(r.id);
    else if (null != B) {
      var e, n, l, t, a;
      x.default.track(C.HAw.SERVER_GUIDE_VIEWED, S(M({}, (0, u.H$)(r.id)), {
        num_member_actions: null != (e = null == (t = B.newMemberActions) ? true : t.length) ? e : 0,
        num_member_actions_completed: Object.keys(null != (n = A.A.getCompletedActions(r.id)) ? n : {}).length,
        num_resource_channels: null != (l = null == (a = B.resourceChannels) ? true : a.length) ? l : 0
      }))
    }
  }, [r.id, B]), a.useEffect(() => () => {
    b.A.closeChannelSidebar(_.VV.GUILD_HOME)
  }, []), a.useEffect(() => {
    z && B !== j.A && d.A.escapeToDefaultChannel(r.id)
  }, [r.id, z, B]), z) ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)("div", {
      className: i()(G.TE, E.Tp, {
        [G.js]: H,
        [G.jl]: H && L
      }),
      children: [(0, t.jsx)(P, {
        guild: r
      }), (0, t.jsx)(c.GtU, S(M({}, U), {
        children: (0, t.jsxs)("div", {
          className: i()(E.$d, {
            [E.Mk]: Q
          }),
          children: [(0, t.jsx)("div", {
            className: E.QI,
            children: (0, t.jsx)(f.A, {
              guild: r,
              titleClassName: $ ? E.H2 : true
            })
          }), (0, t.jsxs)("div", {
            className: i()(E.xr, E.QI),
            children: [(0, t.jsxs)("div", {
              className: E.rb,
              children: [K && (0, t.jsx)(I.A, {
                guildId: r.id,
                welcomeMessage: V
              }), K && (0, t.jsx)(N.A, {
                guildId: r.id
              }), !K || Q ? (0, t.jsx)(O.Ay, {
                guild: r,
                isNewMember: K
              }) : null]
            }), Q ? null : (0, t.jsx)(y.A, {
              guild: r,
              isNewMember: K
            })]
          })]
        })
      }))]
    }), H ? (0, t.jsx)(v.A, {
      pageWidth: h,
      onSidebarResize: (e, n) => {
        R(n), k(e)
      }
    }) : null]
  })
}