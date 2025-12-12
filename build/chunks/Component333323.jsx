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
  Chunk31499 = require("./31499.js"),
  Chunk97009 = require("./97009.js");

function S(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function A(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
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
    return (0, l.jsxs)(h.Z, {
      channelId: O.oC.GUILD_HOME,
      guildId: n.id,
      className: i()(w.title, w.background),
      innerClassname: w.headerBarInner,
      children: [(0, l.jsx)(h.Z.Icon, {
        icon: c.Vy8,
        "aria-hidden": true
      }), (0, l.jsxs)(h.Z.Title, {
        children: [(0, l.jsx)(c.nn4, {
          children: n.name
        }), P.intl.string(P.t.VbpLyU)]
      })]
    })
  });

function L(e) {
  var n, t;
  let {
    guild: a,
    width: h
  } = e, P = (0, s.e7)([f.ZP], () => f.ZP.getSection(O.oC.GUILD_HOME)), [L, H] = r.useState(false), [T, D] = r.useState(y.$Y6), R = P === y.ULH.SIDEBAR_CHAT, B = (0, c.mFp)(), W = (0, s.e7)([b.Z], () => b.Z.getSettings(a.id)), U = null == W ? true : W.welcomeMessage, G = (0, C.Z)(a.id), F = !G && (null != (t = null == W || null == (n = W.resourceChannels) ? true : n.length) ? t : 0) === 0, z = (0, d.Z)("(max-width: 1300px)"), V = h - y.PrS - T, q = R && V < M || z || F;
  return (r.useEffect(() => {
    if (W === b.P)(0, p.cP)(a.id);
    else if (null != W) {
      var e, n, t, l, r;
      x.default.track(y.rMx.SERVER_GUIDE_VIEWED, A(S({}, (0, u.hH)(a.id)), {
        num_member_actions: null != (t = null == (e = W.newMemberActions) ? true : e.length) ? t : 0,
        num_member_actions_completed: Object.keys(null != (l = j.Z.getCompletedActions(a.id)) ? l : {}).length,
        num_resource_channels: null != (r = null == (n = W.resourceChannels) ? true : n.length) ? r : 0
      }))
    }
  }, [a.id, W]), r.useEffect(() => () => {
    g.Z.closeChannelSidebar(O.oC.GUILD_HOME)
  }, []), r.useEffect(() => {
    F && W !== b.P && o.Z.escapeToDefaultChannel(a.id)
  }, [a.id, F, W]), F) ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: i()(E.chat, w.background, {
        [E.threadSidebarOpen]: R,
        [E.threadSidebarFloating]: R && L
      }),
      children: [(0, l.jsx)(k, {
        guild: a
      }), (0, l.jsx)(c.yWw, A(S({}, B), {
        children: (0, l.jsxs)("div", {
          className: i()(w.homeContainer, {
            [w.homeContainerCollapsed]: q
          }),
          children: [(0, l.jsx)("div", {
            className: w.maxWidthWrapper,
            children: (0, l.jsx)(m.Z, {
              guild: a,
              titleClassName: z ? w.emptyHeaderTitle : true
            })
          }), (0, l.jsxs)("div", {
            className: i()(w.homeContent, w.maxWidthWrapper),
            children: [(0, l.jsxs)("div", {
              className: w.mainContent,
              children: [G && (0, l.jsx)(N.Z, {
                guildId: a.id,
                welcomeMessage: U
              }), G && (0, l.jsx)(Z.Z, {
                guildId: a.id
              }), !G || q ? (0, l.jsx)(I.ZP, {
                guild: a,
                isNewMember: G
              }) : null]
            }), q ? null : (0, l.jsx)(_.Z, {
              guild: a,
              isNewMember: G
            })]
          })]
        })
      }))]
    }), R ? (0, l.jsx)(v.Z, {
      pageWidth: h,
      onSidebarResize: (e, n) => {
        H(n), D(e)
      }
    }) : null]
  })
}