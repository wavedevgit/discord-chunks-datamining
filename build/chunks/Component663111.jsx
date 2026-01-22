/** Chunk was on 21738 **/
/** chunk id: 663111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk545167 = require("./545167.js"),
  Chunk515610 = require("./515610.js"),
  Chunk91242 = require("./91242.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk394953 = require("./394953.js"),
  Chunk793322 = require("./793322.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js"),
  Chunk165610 = require("./165610.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk878251 = require("./878251.js");

function T(e) {
  var t, n;
  let l, {
      withFastTravel: T,
      focusSectionProps: j
    } = e,
    x = (0, s.zy)(),
    P = (0, o.bG)([O.A], () => O.A.getGuildId()),
    w = (0, o.bG)([E.A], () => E.A.getChannelId()),
    L = (0, o.bG)([b.A], () => b.A.getChannel(w), [w]),
    R = null != P ? P : null == L ? true : L.guild_id,
    D = (0, o.bG)([_.A], () => _.A.getGuild(R), [R]),
    M = (0, f.A)(),
    k = (0, g.lI)(),
    {
      guildTitleIconSize: U,
      guildIconSize: G
    } = (0, p.p)({
      location: "GuildTitle"
    }),
    {
      application: V,
      isFrameInFocusedMode: B
    } = (0, o.cf)([d.A, h.A], () => {
      let e = h.A.getConnectedFrame();
      return {
        application: d.A.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: h.A.getFrameLayoutMode() === v.y.FOCUSED
      }
    }),
    H = null != V ? y.Ay.getApplicationIconURL({
      id: V.id,
      icon: V.icon,
      bot: V.bot
    }) : true,
    F = null;
  null != V && B ? (l = V.name, F = (0, r.jsx)("img", {
    className: N.Z2,
    alt: S.intl.string(S.t.X4IxWL),
    src: H,
    "aria-hidden": true,
    draggable: false
  })) : k ? (l = S.intl.string(S.t.HcoRu0), F = (0, r.jsx)(u.XFE, {
    size: U
  })) : null != D ? (F = M ? (0, r.jsx)(u.Gg5, {
    size: U
  }) : (0, r.jsx)(A.A, {
    guild: D,
    size: G,
    active: true,
    className: N.$f
  }), l = D.name) : null != L && (L.isDM() || L.isGroupDM()) ? (l = S.intl.string(S.t.YUU0RF), F = (0, r.jsx)(u.pVd, {
    size: U
  })) : x.pathname.startsWith(I.BVt.ICYMI) ? (l = S.intl.string(S.t["jnXV/V"]), F = (0, r.jsx)(u.gXB, {
    size: U
  })) : x.pathname.startsWith(I.BVt.GLOBAL_DISCOVERY) ? (l = S.intl.string(S.t["4nEZLk"]), F = (0, r.jsx)(u.QGJ, {
    size: U
  })) : x.pathname.startsWith(I.BVt.NITRO_HOME) ? (l = S.intl.string(S.t.Ipxkog), F = (0, r.jsx)(u.tvc, {
    size: U
  })) : x.pathname.startsWith(I.BVt.COLLECTIBLES_SHOP) ? (l = S.intl.string(S.t.pWG4ze), F = (0, r.jsx)(u.U1X, {
    size: U
  })) : x.pathname.startsWith(I.BVt.FRIENDS) ? (l = S.intl.string(S.t.TdEu5X), F = (0, r.jsx)(u.$yI, {
    size: U
  })) : x.pathname.startsWith(I.BVt.FAMILY_CENTER) ? (l = S.intl.string(C.default.RZqaJn), F = (0, r.jsx)(u.nFg, {
    size: U
  })) : x.pathname.startsWith(I.BVt.QUEST_HOME_V2) && (l = S.intl.string(S.t.JALI2K), F = (0, r.jsx)(u.r2v, {
    size: U
  }));
  let Y = i.useCallback(e => {
      (0, m.L$)("fast-travel")
    }, []),
    K = (null == l || "" === l) && T ? S.intl.string(S.t.ZvKwYa) : l;
  return null == K || "" === K ? null : (0, r.jsx)(c.m_, {
    shouldShow: T,
    ariaHidden: true,
    text: S.intl.string(S.t["7P/+qz"]),
    keyboardShortcut: ["mod", "k"],
    children: (0, r.jsxs)(u.DUT, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      className: a()(N.DD, {
        [N.Nt]: T
      }),
      "aria-label": S.intl.string(S.t["7P/+qz"])
    }, j), n = n = {
      onClick: T ? Y : true,
      children: [F, (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        lineClamp: 1,
        children: K
      }), T && (0, r.jsx)(u._BQ, {
        className: N.c8,
        size: "xs"
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}