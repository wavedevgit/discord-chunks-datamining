/** Chunk was on 1272 **/
/** chunk id: 273959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk719961 = require("./719961.js"),
  Chunk916069 = require("./916069.js"),
  Chunk591472 = require("./591472.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk370774 = require("./370774.js"),
  Chunk51596 = require("./51596.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk408491 = require("./408491.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517319 = require("./517319.js"),
  Chunk417040 = require("./417040.js");

function j(e) {
  var t, n;
  let l, {
      withFastTravel: j,
      focusSectionProps: P
    } = e,
    x = (0, s.TH)(),
    A = (0, o.e7)([v.Z], () => v.Z.getGuildId()),
    Z = (0, o.e7)([O.Z], () => O.Z.getChannelId()),
    w = (0, o.e7)([_.Z], () => _.Z.getChannel(Z), [Z]),
    L = null != A ? A : null == w ? true : w.guild_id,
    R = (0, o.e7)([E.Z], () => E.Z.getGuild(L), [L]),
    D = (0, f.Z)(),
    M = (0, m.D)(),
    {
      guildTitleIconSize: k,
      guildIconSize: U
    } = (0, p.T)({
      location: "GuildTitle"
    }),
    {
      application: G,
      isFrameInFocusedMode: H
    } = (0, o.cj)([d.Z, g.Z], () => {
      let e = g.Z.getConnectedFrame();
      return {
        application: d.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: g.Z.getFrameLayoutMode() === C.U.FOCUSED
      }
    }),
    B = null != G ? y.ZP.getApplicationIconURL({
      id: G.id,
      icon: G.icon,
      bot: G.bot
    }) : true,
    V = null;
  null != G && H ? (l = G.name, V = (0, r.jsx)("img", {
    className: N.appIcon,
    alt: S.intl.string(S.t.X4IxWL),
    src: B,
    "aria-hidden": true,
    draggable: false
  })) : M ? (l = S.intl.string(S.t.HcoRu0), V = (0, r.jsx)(u.Dkj, {
    size: k
  })) : null != R ? (V = D ? (0, r.jsx)(u.r7p, {
    size: k
  }) : (0, r.jsx)(h.Z, {
    guild: R,
    size: U,
    active: true,
    className: N.guildIcon
  }), l = R.name) : null != w && (w.isDM() || w.isGroupDM()) ? (l = S.intl.string(S.t.YUU0RF), V = (0, r.jsx)(u.gw7, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.ICYMI) ? (l = S.intl.string(S.t["jnXV/V"]), V = (0, r.jsx)(u.qOE, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.GLOBAL_DISCOVERY) ? (l = S.intl.string(S.t["4nEZLk"]), V = (0, r.jsx)(u.Jmo, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.NITRO_HOME) ? (l = S.intl.string(S.t.Ipxkog), V = (0, r.jsx)(u.SrA, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.COLLECTIBLES_SHOP) ? (l = S.intl.string(S.t.pWG4ze), V = (0, r.jsx)(u.EOn, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.ME_ACTIVITY) ? (l = S.intl.string(S.t.IC5Ann), V = (0, r.jsx)(u.g8d, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.ME_DMS) ? (l = S.intl.string(S.t.YUU0RF), V = (0, r.jsx)(u.gw7, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.FRIENDS) ? (l = S.intl.string(S.t.TdEu5X), V = (0, r.jsx)(u.iFz, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.FAMILY_CENTER) ? (l = S.intl.string(T.default.RZqaJn), V = (0, r.jsx)(u.BFJ, {
    size: k
  })) : x.pathname.startsWith(I.Z5c.QUEST_HOME_V2) && (l = S.intl.string(S.t.JALI2K), V = (0, r.jsx)(u.qDn, {
    size: k
  }));
  let F = i.useCallback(e => {
      (0, b.ZN)("fast-travel")
    }, []),
    z = (null == l || "" === l) && j ? S.intl.string(S.t.ZvKwYa) : l;
  return null == z || "" === z ? null : (0, r.jsx)(c.u, {
    shouldShow: j,
    ariaHidden: true,
    text: S.intl.string(S.t["7P/+qz"]),
    keyboardShortcut: ["mod", "k"],
    children: (0, r.jsxs)(u.P3F, (t = function(e) {
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
      className: a()(N.title, {
        [N.fastTravel]: j
      }),
      "aria-label": S.intl.string(S.t["7P/+qz"])
    }, P), n = n = {
      onClick: j ? F : true,
      children: [V, (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        lineClamp: 1,
        children: z
      }), j && (0, r.jsx)(u.Fbu, {
        className: N.fastTravelChevron,
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