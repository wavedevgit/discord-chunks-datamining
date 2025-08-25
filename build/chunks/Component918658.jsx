/** Chunk was on web.js **/
/** chunk id: 918658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j,
  d: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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

function w(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: a
  } = e;
  return (0, r.jsx)(c.zx, {
    buttonRef: a,
    className: o()(P.button, t),
    innerClassName: P.buttonInner,
    look: c.zx.Looks.OUTLINED,
    color: c.zx.Colors.WHITE,
    size: c.zx.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function D(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(w, {
    onClick: t,
    children: R.intl.string(R.t.R9GHyc)
  })
}

function x(e) {
  switch (e) {
    case S.pNK.INTEGRATIONS:
      return R.intl.string(R.t.k7LGdn);
    case S.pNK.ROLE_SUBSCRIPTIONS:
      return R.intl.string(R.t.bRqiqa);
    case S.pNK.ONBOARDING:
      return R.intl.string(R.t.qZpU3d);
    default:
      return R.intl.string(R.t.MTIXho)
  }
}

function L(e) {
  return e === S.pNK.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzc) : R.intl.string(R.t["/djIh4"])
}

function j() {
  let e = Chunk647438.useRef(null),
    t = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId(exports)),
    {
      viewingRoles: a,
      backNavigationSection: o,
      isFullServerPreview: c,
      isServerShopPreview: O
    } = (0, Chunk442837.cj)([Chunk160404.Z], () => ({
      viewingRoles: null != exports ? Chunk160404.Z.getViewingRoles(exports) : null,
      backNavigationSection: Chunk160404.Z.getBackNavigationSection(exports),
      isFullServerPreview: null != exports && Chunk160404.Z.isFullServerPreview(exports),
      isServerShopPreview: null != exports && Chunk160404.Z.isViewingServerShop(exports)
    }));
  if (null == Chunk120356 || null == exports) return null;
  let j = x(o),
    k = L(o),
    M = require === Chunk176505.oC.GUILD_ONBOARDING,
    U = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (I.Z.isFullServerPreview(t) && (0, m.uL)(S.Z5c.CHANNEL(t)), f.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, _.EI)(t)), (0, v.mL)(t), n && h.Z.open(t, o), o === S.pNK.ROLE_SUBSCRIPTIONS && (0, p.GN)(t))
    };
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.BRAND,
    className: Chunk829675.notice,
    children: [(0, Chunk951288.jsxs)(w, {
      onClick: () => U({
        backToSettings: true
      }),
      className: Chunk829675.backButton,
      children: [(0, Chunk951288.jsx)(Chunk671533.Z, {
        width: 16,
        height: 16,
        direction: Chunk671533.Z.Directions.LEFT,
        className: Chunk829675.backArrow
      }), j]
    }), M && Chunk755721 ? (0, Chunk951288.jsx)("div", {
      className: Chunk829675.noticeContents,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk829675.noticeText,
        children: Chunk388032.intl.string(Chunk388032.t.PxbiAQ)
      })
    }) : (0, Chunk951288.jsxs)("div", {
      className: Chunk829675.noticeContents,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk829675.noticeText,
        children: Chunk755721 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["0PHahI"], {
          numRoles: Object.keys(Chunk120356).length
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.vMlK8v, {
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
          return (0, r.jsxs)(w, {
            onClick: n,
            buttonRef: e,
            children: [k, (0, r.jsx)(y.Z, {
              width: 16,
              height: 16,
              direction: y.Z.Directions.DOWN,
              className: P.selectCaret
            })]
          })
        }
      }), Chunk755721 && (0, Chunk951288.jsx)(Chunk481060.DY3, {
        className: Chunk829675.previewWarning,
        text: Chunk388032.intl.string(Chunk388032.t.mW4DUF),
        children: (0, Chunk951288.jsx)(Chunk481060.Mgn, {
          size: "xs",
          color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), Chunk358085 && (0, Chunk951288.jsx)(Chunk481060.DY3, {
        className: Chunk829675.previewWarning,
        text: Chunk388032.intl.formatToPlainString(Chunk388032.t.eummvb, {
          maxTiers: Chunk293810.fF,
          maxProducts: Chunk302463.dD
        }),
        children: (0, Chunk951288.jsx)(Chunk481060.Mgn, {
          size: "xs",
          color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), Chunk755721 || o === Chunk981631.pNK.ROLE_SUBSCRIPTIONS ? null : (0, Chunk951288.jsx)(D, {
      onClick: () => U({
        backToSettings: false
      })
    })]
  })
}

function k(e) {
  let {
    guildId: t
  } = e;
  return (0, s.e7)([I.Z], () => I.Z.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(P.settingsWrapper, {
      [P.windows]: (0, O.isWindows)(),
      [P.osx]: (0, O.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}