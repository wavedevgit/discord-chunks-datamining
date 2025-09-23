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
  Chunk914010 = require("./914010.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk408491 = require("./408491.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412297 = require("./412297.js"),
  Chunk447803 = require("./447803.js");

function T(e) {
  let t, {
      selectedChannelId: n,
      withFastTravel: l,
      focusSectionProps: T
    } = e,
    N = (0, o.TH)(),
    P = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
    j = (0, s.e7)([b.Z], () => b.Z.getChannel(n), [n]),
    x = null != P ? P : null == j ? true : j.guild_id,
    A = (0, s.e7)([_.Z], () => _.Z.getGuild(x), [x]),
    Z = (0, p.Z)(),
    w = (0, g.D)(),
    {
      guildTitleIconSize: L,
      guildIconSize: R
    } = (0, d.T)({
      location: "GuildTitle"
    }),
    {
      application: D,
      isFrameInFocusedMode: k
    } = (0, s.cj)([u.Z, f.Z], () => {
      let e = f.Z.getConnectedFrame();
      return {
        application: u.Z.getApplication(null == e ? true : e.applicationId),
        isFrameInFocusedMode: f.Z.getFrameLayoutMode() === v.U.FOCUSED
      }
    }),
    M = null != D ? E.ZP.getApplicationIconURL({
      id: D.id,
      icon: D.icon,
      bot: D.bot
    }) : true,
    U = null;
  null != D && k ? (t = D.name, U = (0, r.jsx)("img", {
    className: S.appIcon,
    alt: I.intl.string(I.t.X4IxWF),
    src: M,
    "aria-hidden": true,
    draggable: false
  })) : w ? (t = I.intl.string(I.t.HcoRu7), U = (0, r.jsx)(c.Dkj, {
    size: L
  })) : null != A ? (U = Z ? (0, r.jsx)(c.r7p, {
    size: L
  }) : (0, r.jsx)(h.Z, {
    guild: A,
    size: R,
    active: true,
    className: S.guildIcon
  }), t = A.name) : null != j && (j.isDM() || j.isGroupDM()) ? (t = I.intl.string(I.t.YUU0RE), U = (0, r.jsx)(c.gw7, {
    size: L
  })) : N.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY) ? (t = I.intl.string(I.t["4nEZLi"]), U = (0, r.jsx)(c.Jmo, {
    size: L
  })) : N.pathname.startsWith(y.Z5c.NITRO_HOME) ? (t = I.intl.string(I.t.Ipxkoq), U = (0, r.jsx)(c.SrA, {
    size: L
  })) : N.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP) ? (t = I.intl.string(I.t.pWG4zc), U = (0, r.jsx)(c.EOn, {
    size: L
  })) : N.pathname.startsWith(y.Z5c.FRIENDS) ? (t = I.intl.string(I.t.TdEu5e), U = (0, r.jsx)(c.iFz, {
    size: L
  })) : N.pathname.startsWith(y.Z5c.FAMILY_CENTER) && (t = I.intl.string(C.default.RZqaJi), U = (0, r.jsx)(c.BFJ, {
    size: L
  }));
  let G = i.useCallback(e => {
      (0, m.ZN)("fast-travel")
    }, []),
    B = (null == t || "" === t) && l ? I.intl.string(I.t.ZvKwYW) : t;
  return null == B || "" === B ? null : (0, r.jsx)(c.ua7, {
    shouldShow: l,
    "aria-label": I.intl.string(I.t["7P/+q6"]),
    tooltipContentClassName: S.navigationTooltip,
    text: (0, r.jsxs)(r.Fragment, {
      children: [I.intl.string(I.t["7P/+q6"]), (0, r.jsx)(c.M2$, {
        shortcut: ["mod", "k"]
      })]
    }),
    children: e => {
      var t, n;
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
        className: a()(S.title, {
          [S.fastTravel]: l
        })
      }, e, T), n = n = {
        onClick: l ? G : true,
        children: [U, (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          lineClamp: 1,
          children: B
        }), l && (0, r.jsx)(c.Fbu, {
          className: S.fastTravelChevron,
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
    }
  })
}