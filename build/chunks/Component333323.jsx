/** Chunk was on 12009 **/
/** chunk id: 333323, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk131388 = require("./131388.js"),
  Chunk367907 = require("./367907.js"),
  Chunk644080 = require("./644080.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk460347 = require("./460347.js"),
  Chunk404488 = require("./404488.jsx"),
  Chunk605276 = require("./605276.jsx"),
  Chunk869764 = require("./869764.jsx"),
  Chunk919318 = require("./919318.jsx"),
  Chunk150512 = require("./150512.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk358053 = require("./358053.js"),
  Chunk978966 = require("./978966.js");

function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}

function A(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let M = Chunk404488.q + 300 + 64,
  k = Chunk473749.memo(function(e) {
    let {
      guild: n
    } = e;
    return (0, a.jsxs)(h.Z, {
      channelId: _.oC.GUILD_HOME,
      guildId: n.id,
      className: i()(w.title, w.background),
      innerClassname: w.headerBarInner,
      children: [(0, a.jsx)(h.Z.Icon, {
        icon: s.Vy8,
        "aria-hidden": true
      }), (0, a.jsxs)(h.Z.Title, {
        children: [(0, a.jsx)(s.nn4, {
          children: n.name
        }), P.intl.string(P.t.VbpLyU)]
      })]
    })
  });

function L(e) {
  var n, t;
  let {
    guild: r,
    width: h
  } = e, P = (0, c.e7)([g.ZP], () => g.ZP.getSection(_.oC.GUILD_HOME)), [L, H] = l.useState(false), [T, D] = l.useState(O.$Y6), R = P === O.ULH.SIDEBAR_CHAT, B = (0, s.mFp)(), W = (0, c.e7)([p.Z], () => p.Z.getSettings(r.id)), U = null == W ? true : W.welcomeMessage, G = (0, C.Z)(r.id), F = !G && (null != (t = null == W || null == (n = W.resourceChannels) ? true : n.length) ? t : 0) === 0, z = (0, o.Z)("(max-width: 1300px)"), V = h - O.PrS - T, q = R && V < M || z || F;
  return (l.useEffect(() => {
    if (W === p.P)(0, x.cP)(r.id);
    else if (null != W) {
      var e, n, t, a, l;
      b.default.track(O.rMx.SERVER_GUIDE_VIEWED, A(S({}, (0, u.hH)(r.id)), {
        num_member_actions: null != (t = null == (e = W.newMemberActions) ? true : e.length) ? t : 0,
        num_member_actions_completed: Object.keys(null != (a = j.Z.getCompletedActions(r.id)) ? a : {}).length,
        num_resource_channels: null != (l = null == (n = W.resourceChannels) ? true : n.length) ? l : 0
      }))
    }
  }, [r.id, W]), l.useEffect(() => () => {
    f.Z.closeChannelSidebar(_.oC.GUILD_HOME)
  }, []), l.useEffect(() => {
    F && W !== p.P && d.Z.escapeToDefaultChannel(r.id)
  }, [r.id, F, W]), F) ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(E.chat, w.background, {
        [E.threadSidebarOpen]: R,
        [E.threadSidebarFloating]: R && L
      }),
      children: [(0, a.jsx)(k, {
        guild: r
      }), (0, a.jsx)(s.yWw, A(S({}, B), {
        children: (0, a.jsxs)("div", {
          className: i()(w.homeContainer, {
            [w.homeContainerCollapsed]: q
          }),
          children: [(0, a.jsx)("div", {
            className: w.maxWidthWrapper,
            children: (0, a.jsx)(m.Z, {
              guild: r,
              titleClassName: z ? w.emptyHeaderTitle : true
            })
          }), (0, a.jsxs)("div", {
            className: i()(w.homeContent, w.maxWidthWrapper),
            children: [(0, a.jsxs)("div", {
              className: w.mainContent,
              children: [G && (0, a.jsx)(y.Z, {
                guildId: r.id,
                welcomeMessage: U
              }), G && (0, a.jsx)(I.Z, {
                guildId: r.id
              }), !G || q ? (0, a.jsx)(N.ZP, {
                guild: r,
                isNewMember: G
              }) : null]
            }), q ? null : (0, a.jsx)(Z.Z, {
              guild: r,
              isNewMember: G
            })]
          })]
        })
      }))]
    }), R ? (0, a.jsx)(v.Z, {
      pageWidth: h,
      onSidebarResize: (e, n) => {
        H(n), D(e)
      }
    }) : null]
  })
}