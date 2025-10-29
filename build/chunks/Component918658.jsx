/** Chunk was on web.js **/
/** chunk id: 918658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k,
  d: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk549817 = require("./549817.js"),
  Chunk819553 = require("./819553.js"),
  Chunk17181 = require("./17181.js"),
  Chunk303737 = require("./303737.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk962086 = require("./962086.js"),
  Chunk160404 = require("./160404.js"),
  Chunk889695 = require("./889695.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk302463 = require("./302463.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829675 = require("./829675.js");

function D(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: a
  } = e;
  return (0, r.jsx)(u.zx, {
    buttonRef: a,
    className: o()(w.button, t),
    innerClassName: w.buttonInner,
    look: u.zx.Looks.OUTLINED,
    color: u.zx.Colors.WHITE,
    size: u.zx.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function L(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(D, {
    onClick: t,
    children: P.intl.string(P.t.R9GHya)
  })
}

function x(e) {
  switch (e) {
    case A.pNK.INTEGRATIONS:
      return P.intl.string(P.t.k7LGdh);
    case A.pNK.ROLE_SUBSCRIPTIONS:
      return P.intl.string(P.t.bRqiqa);
    case A.pNK.ONBOARDING:
      return P.intl.string(P.t.qZpU3S);
    default:
      return P.intl.string(P.t.MTIXhi)
  }
}

function M(e) {
  return e === A.pNK.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzd) : P.intl.string(P.t["/djIh7"])
}

function k() {
  let e = Chunk647438.useRef(null),
    t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId(exports)),
    {
      viewingRoles: a,
      backNavigationSection: o,
      isFullServerPreview: u,
      isServerShopPreview: v
    } = (0, Chunk442837.cj)([Chunk160404.Z], () => ({
      viewingRoles: null != exports ? Chunk160404.Z.getViewingRoles(exports) : null,
      backNavigationSection: Chunk160404.Z.getBackNavigationSection(exports),
      isFullServerPreview: null != exports && Chunk160404.Z.isFullServerPreview(exports),
      isServerShopPreview: null != exports && Chunk160404.Z.isViewingServerShop(exports)
    }));
  if (null == Chunk120356 || null == exports) return null;
  let k = x(o),
    j = M(o),
    U = require === Chunk176505.oC.GUILD_ONBOARDING,
    G = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (T.Z.isFullServerPreview(t) && (0, g.uL)(A.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (f.Z.finishOnboarding(t), (0, p.EI)(t)), (0, I.mL)(t), n && m.Z.open(t, o), o === A.pNK.ROLE_SUBSCRIPTIONS && (0, h.GN)(t))
    };
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.BRAND,
    className: Chunk829675.notice,
    children: [(0, Chunk951288.jsxs)(D, {
      onClick: () => G({
        backToSettings: true
      }),
      className: Chunk829675.backButton,
      children: [(0, Chunk951288.jsx)(Chunk671533.Z, {
        width: 16,
        height: 16,
        direction: Chunk671533.Z.Directions.LEFT,
        className: Chunk829675.backArrow
      }), k]
    }), U && Chunk755721 ? (0, Chunk951288.jsx)("div", {
      className: Chunk829675.noticeContents,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk829675.noticeText,
        children: Chunk388032.intl.string(Chunk388032.t.PxbiAf)
      })
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk829675.noticeContents,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk829675.noticeText,
        children: Chunk755721 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["0PHahI"], {
          numRoles: Object.keys(Chunk120356).length
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.vMlK8t, {
          numRoles: Object.keys(Chunk120356).length
        })
      }), (0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: module,
        position: "bottom",
        renderPopout: () => (0, Chunk951288.jsx)(Chunk889695.Z, {
          guildId: exports
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(D, {
            onClick: n,
            buttonRef: e,
            children: [j, (0, r.jsx)(O.Z, {
              width: 16,
              height: 16,
              direction: O.Z.Directions.DOWN,
              className: w.selectCaret
            })]
          })
        }
      }), Chunk755721 && (0, Chunk951288.jsx)(Chunk28664.u, {
        asContainer: true,
        text: Chunk388032.intl.string(Chunk388032.t.mW4DUE),
        children: (0, Chunk951288.jsx)(Chunk481060.Mgn, {
          size: "xs",
          color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), Chunk358085 && (0, Chunk951288.jsx)(Chunk28664.u, {
        asContainer: true,
        text: Chunk388032.intl.formatToPlainString(Chunk388032.t.eummvd, {
          maxTiers: Chunk293810.fF,
          maxProducts: Chunk302463.dD
        }),
        children: (0, Chunk951288.jsx)(Chunk481060.Mgn, {
          size: "xs",
          color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), Chunk755721 || o === Chunk981631.pNK.ROLE_SUBSCRIPTIONS ? null : (0, Chunk951288.jsx)(L, {
      onClick: () => G({
        backToSettings: false
      })
    })]
  })
}

function j(e) {
  let {
    guildId: t
  } = e;
  return (0, s.e7)([T.Z], () => T.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(w.settingsWrapper, {
      [w.windows]: (0, v.isWindows)(),
      [w.osx]: (0, v.isMac)()
    }),
    children: (0, r.jsx)(k, {})
  }) : null
}