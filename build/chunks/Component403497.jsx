/** Chunk was on 1272 **/
/** chunk id: 403497, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => N
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
  Chunk345909 = require("./345909.js"),
  Chunk832818 = require("./832818.js");

function N(e) {
  let t, {
      withFastTravel: n,
      focusSectionProps: l
    } = e,
    N = (0, o.TH)(),
    j = (0, s.e7)([E.Z], () => E.Z.getGuildId()),
    P = (0, s.e7)([O.Z], () => O.Z.getChannelId()),
    x = (0, s.e7)([b.Z], () => b.Z.getChannel(P), [P]),
    A = null != j ? j : null == x ? true : x.guild_id,
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
      application: k,
      isFrameInFocusedMode: M
    } = (0, s.cj)([u.Z, f.Z], () => {
      let e = f.Z.getConnectedFrame();
      return {
        application: u.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: f.Z.getFrameLayoutMode() === I.U.FOCUSED
      }
    }),
    U = null != k ? v.ZP.getApplicationIconURL({
      id: k.id,
      icon: k.icon,
      bot: k.bot
    }) : true,
    G = null;
  null != k && M ? (t = k.name, G = (0, r.jsx)("img", {
    className: T.appIcon,
    alt: S.intl.string(S.t.X4IxWF),
    src: U,
    "aria-hidden": true,
    draggable: false
  })) : L ? (t = S.intl.string(S.t.HcoRu7), G = (0, r.jsx)(c.Dkj, {
    size: R
  })) : null != Z ? (G = w ? (0, r.jsx)(c.r7p, {
    size: R
  }) : (0, r.jsx)(h.Z, {
    guild: Z,
    size: D,
    active: true,
    className: T.guildIcon
  }), t = Z.name) : null != x && (x.isDM() || x.isGroupDM()) ? (t = S.intl.string(S.t.YUU0RE), G = (0, r.jsx)(c.gw7, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY) ? (t = S.intl.string(S.t["4nEZLi"]), G = (0, r.jsx)(c.Jmo, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.NITRO_HOME) ? (t = S.intl.string(S.t.Ipxkoq), G = (0, r.jsx)(c.SrA, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP) ? (t = S.intl.string(S.t.pWG4zc), G = (0, r.jsx)(c.EOn, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.FRIENDS) ? (t = S.intl.string(S.t.TdEu5e), G = (0, r.jsx)(c.iFz, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.FAMILY_CENTER) ? (t = S.intl.string(C.default.RZqaJi), G = (0, r.jsx)(c.BFJ, {
    size: R
  })) : N.pathname.startsWith(y.Z5c.QUEST_HOME_V2) && (t = S.intl.string(S.t.JALI2N), G = (0, r.jsx)(c.qDn, {
    size: R
  }));
  let B = i.useCallback(e => {
      (0, m.ZN)("fast-travel")
    }, []),
    H = (null == t || "" === t) && n ? S.intl.string(S.t.ZvKwYW) : t;
  return null == H || "" === H ? null : (0, r.jsx)(c.ua7, {
    shouldShow: n,
    "aria-label": S.intl.string(S.t["7P/+q6"]),
    tooltipContentClassName: T.navigationTooltip,
    text: (0, r.jsxs)(r.Fragment, {
      children: [S.intl.string(S.t["7P/+q6"]), (0, r.jsx)(c.M2$, {
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
        className: a()(T.title, {
          [T.fastTravel]: n
        })
      }, e, l), i = i = {
        onClick: n ? B : true,
        children: [G, (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          lineClamp: 1,
          children: H
        }), n && (0, r.jsx)(c.Fbu, {
          className: T.fastTravelChevron,
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