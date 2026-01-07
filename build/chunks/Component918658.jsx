/** Chunk was on web.js **/
/** chunk id: 918658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M,
  d: () => k
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk176727 = require("./176727.js");

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

function x(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(D, {
    onClick: t,
    children: R.intl.string(R.t.R9GHya)
  })
}

function L(e) {
  switch (e) {
    case C.pNK.INTEGRATIONS:
      return R.intl.string(R.t.k7LGdh);
    case C.pNK.ROLE_SUBSCRIPTIONS:
      return R.intl.string(R.t.bRqiqa);
    case C.pNK.ONBOARDING:
      return R.intl.string(R.t.qZpU3S);
    default:
      return R.intl.string(R.t.MTIXhi)
  }
}

function j(e) {
  return e === C.pNK.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzd) : R.intl.string(R.t["/djIh7"])
}

function M() {
  let e = i.useRef(null),
    t = (0, s.e7)([b.Z], () => b.Z.getGuildId()),
    n = (0, s.e7)([E.Z], () => E.Z.getChannelId(t)),
    {
      viewingRoles: a,
      backNavigationSection: o,
      isFullServerPreview: u,
      isServerShopPreview: v
    } = (0, s.cj)([I.Z], () => ({
      viewingRoles: null != t ? I.Z.getViewingRoles(t) : null,
      backNavigationSection: I.Z.getBackNavigationSection(t),
      isFullServerPreview: null != t && I.Z.isFullServerPreview(t),
      isServerShopPreview: null != t && I.Z.isViewingServerShop(t)
    }));
  if (null == a || null == t) return null;
  let M = L(o),
    k = j(o),
    U = n === A.oC.GUILD_ONBOARDING,
    G = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (I.Z.isFullServerPreview(t) && (0, g.uL)(C.Z5c.CHANNEL(t)), p.ZP.shouldShowOnboarding(t) && (f.Z.finishOnboarding(t), (0, _.EI)(t)), (0, S.mL)(t), n && h.Z.open(t, o), o === C.pNK.ROLE_SUBSCRIPTIONS && (0, m.GN)(t))
    };
  return (0, r.jsxs)(d.qXd, {
    color: d.DM8.BRAND,
    className: w.notice,
    children: [(0, r.jsxs)(D, {
      onClick: () => G({
        backToSettings: true
      }),
      className: w.backButton,
      children: [(0, r.jsx)(y.Z, {
        width: 16,
        height: 16,
        direction: y.Z.Directions.LEFT,
        className: w.backArrow
      }), M]
    }), U && u ? (0, r.jsx)("div", {
      className: w.noticeContents,
      children: (0, r.jsx)("div", {
        className: w.noticeText,
        children: R.intl.string(R.t.PxbiAf)
      })
    }) : (0, r.jsxs)("div", {
      className: w.noticeContents,
      children: [(0, r.jsx)("div", {
        className: w.noticeText,
        children: u ? R.intl.formatToPlainString(R.t["0PHahI"], {
          numRoles: Object.keys(a).length
        }) : R.intl.formatToPlainString(R.t.vMlK8t, {
          numRoles: Object.keys(a).length
        })
      }), (0, r.jsx)(d.yRy, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: () => (0, r.jsx)(T.Z, {
          guildId: t
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(D, {
            onClick: n,
            buttonRef: e,
            children: [k, (0, r.jsx)(O.Z, {
              width: 16,
              height: 16,
              direction: O.Z.Directions.DOWN,
              className: w.selectCaret
            })]
          })
        }
      }), u && (0, r.jsx)(c.u, {
        asContainer: true,
        text: R.intl.string(R.t.mW4DUE),
        children: (0, r.jsx)(d.Mgn, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      }), v && (0, r.jsx)(c.u, {
        asContainer: true,
        text: R.intl.formatToPlainString(R.t.eummvd, {
          maxTiers: P.fF,
          maxProducts: N.dD
        }),
        children: (0, r.jsx)(d.Mgn, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), u || o === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(x, {
      onClick: () => G({
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
    className: o()(w.settingsWrapper, {
      [w.windows]: (0, v.isWindows)(),
      [w.osx]: (0, v.isMac)()
    }),
    children: (0, r.jsx)(M, {})
  }) : null
}