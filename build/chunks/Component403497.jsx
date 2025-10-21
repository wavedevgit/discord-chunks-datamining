/** Chunk was on 1272 **/
/** chunk id: 403497, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk412297 = require("./412297.js"),
  Chunk447803 = require("./447803.js");

function T(e) {
  let t, {
      withFastTravel: n,
      focusSectionProps: l
    } = e,
    T = (0, o.TH)(),
    P = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
    j = (0, s.e7)([E.Z], () => E.Z.getChannelId()),
    x = (0, s.e7)([b.Z], () => b.Z.getChannel(j), [j]),
    A = null != P ? P : null == x ? true : x.guild_id,
    Z = (0, s.e7)([_.Z], () => _.Z.getGuild(A), [A]),
    w = (0, p.Z)(),
    L = (0, g.D)(),
    {
      guildTitleIconSize: R,
      guildIconSize: D
    } = (0, d.T)({
      location: "GuildTitle"
    }),
    {
      application: M,
      isFrameInFocusedMode: k
    } = (0, s.cj)([u.Z, f.Z], () => {
      let e = f.Z.getConnectedFrame();
      return {
        application: u.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: f.Z.getFrameLayoutMode() === I.U.FOCUSED
      }
    }),
    U = null != M ? v.ZP.getApplicationIconURL({
      id: M.id,
      icon: M.icon,
      bot: M.bot
    }) : true,
    G = null;
  null != M && k ? (t = M.name, G = (0, r.jsx)("img", {
    className: N.appIcon,
    alt: C.intl.string(C.t.X4IxWF),
    src: U,
    "aria-hidden": true,
    draggable: false
  })) : L ? (t = C.intl.string(C.t.HcoRu7), G = (0, r.jsx)(c.Dkj, {
    size: R
  })) : null != Z ? (G = w ? (0, r.jsx)(c.r7p, {
    size: R
  }) : (0, r.jsx)(h.Z, {
    guild: Z,
    size: D,
    active: true,
    className: N.guildIcon
  }), t = Z.name) : null != x && (x.isDM() || x.isGroupDM()) ? (t = C.intl.string(C.t.YUU0RE), G = (0, r.jsx)(c.gw7, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY) ? (t = C.intl.string(C.t["4nEZLi"]), G = (0, r.jsx)(c.Jmo, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.NITRO_HOME) ? (t = C.intl.string(C.t.Ipxkoq), G = (0, r.jsx)(c.SrA, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP) ? (t = C.intl.string(C.t.pWG4zc), G = (0, r.jsx)(c.EOn, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.ME_ACTIVITY) ? (t = C.intl.string(C.t.IC5Anp), G = (0, r.jsx)(c.g8d, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.ME_DMS) ? (t = C.intl.string(C.t.YUU0RE), G = (0, r.jsx)(c.gw7, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.FRIENDS) ? (t = C.intl.string(C.t.TdEu5e), G = (0, r.jsx)(c.iFz, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.FAMILY_CENTER) ? (t = C.intl.string(S.default.RZqaJi), G = (0, r.jsx)(c.BFJ, {
    size: R
  })) : T.pathname.startsWith(y.Z5c.QUEST_HOME_V2) && (t = C.intl.string(C.t.JALI2N), G = (0, r.jsx)(c.qDn, {
    size: R
  }));
  let B = i.useCallback(e => {
      (0, m.ZN)("fast-travel")
    }, []),
    H = (null == t || "" === t) && n ? C.intl.string(C.t.ZvKwYW) : t;
  return null == H || "" === H ? null : (0, r.jsx)(c.aML, {
    "data-migration-pending": true,
    shouldShow: n,
    "aria-label": C.intl.string(C.t["7P/+q6"]),
    tooltipContentClassName: N.navigationTooltip,
    text: (0, r.jsxs)(r.Fragment, {
      children: [C.intl.string(C.t["7P/+q6"]), (0, r.jsx)(c.M2$, {
        shortcut: ["mod", "k"]
      })]
    }),
    children: e => {
      var t, i;
      return (0, r.jsxs)(c.P3F, (t = function(e) {
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
          [N.fastTravel]: n
        })
      }, e, l), i = i = {
        onClick: n ? B : true,
        children: [G, (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          lineClamp: 1,
          children: H
        }), n && (0, r.jsx)(c.Fbu, {
          className: N.fastTravelChevron,
          size: "xs"
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}