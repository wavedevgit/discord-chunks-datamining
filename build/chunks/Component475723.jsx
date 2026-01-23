/** Chunk was on web.js **/
/** chunk id: 475723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j,
  w: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk669953 = require("./669953.js"),
  Chunk713125 = require("./713125.js"),
  Chunk967305 = require("./967305.js"),
  Chunk739455 = require("./739455.js"),
  Chunk997509 = require("./997509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk792831 = require("./792831.jsx"),
  Chunk147925 = require("./147925.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk311127 = require("./311127.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
require("./500208.js");
var Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk840199 = require("./840199.js");

function P(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: a
  } = e;
  return (0, r.jsx)(u.$n, {
    buttonRef: a,
    className: s()(w.x6, t),
    innerClassName: w.hZ,
    look: u.$n.Looks.OUTLINED,
    color: u.$n.Colors.WHITE,
    size: u.$n.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function D(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(P, {
    onClick: t,
    children: R.intl.string(R.t.R9GHya)
  })
}

function x(e) {
  switch (e) {
    case T.BEX.INTEGRATIONS:
      return R.intl.string(R.t.k7LGdh);
    case T.BEX.ROLE_SUBSCRIPTIONS:
      return R.intl.string(R.t.bRqiqa);
    case T.BEX.ONBOARDING:
      return R.intl.string(R.t.qZpU3S);
    default:
      return R.intl.string(R.t.MTIXhi)
  }
}

function L(e) {
  return e === T.BEX.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzd) : R.intl.string(R.t["/djIh7"])
}

function j() {
  let e = i.useRef(null),
    t = (0, o.bG)([y.A], () => y.A.getGuildId()),
    n = (0, o.bG)([E.A], () => E.A.getChannelId(t)),
    {
      viewingRoles: a,
      backNavigationSection: s,
      isFullServerPreview: u,
      isServerShopPreview: v
    } = (0, o.cf)([I.A], () => ({
      viewingRoles: null != t ? I.A.getViewingRoles(t) : null,
      backNavigationSection: I.A.getBackNavigationSection(t),
      isFullServerPreview: null != t && I.A.isFullServerPreview(t),
      isServerShopPreview: null != t && I.A.isViewingServerShop(t)
    }));
  if (null == a || null == t) return null;
  let j = x(s),
    M = L(s),
    k = n === C.VV.GUILD_ONBOARDING,
    U = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (I.A.isFullServerPreview(t) && (0, g.pX)(T.BVt.CHANNEL(t)), p.Ay.shouldShowOnboarding(t) && (f.A.finishOnboarding(t), (0, _.Jg)(t)), (0, A.rf)(t), n && m.A.open(t, s), s === T.BEX.ROLE_SUBSCRIPTIONS && (0, h.Fx)(t))
    };
  return (0, r.jsxs)(d.$Td, {
    color: d.Hv$.BRAND,
    className: w.lm,
    children: [(0, r.jsxs)(P, {
      onClick: () => U({
        backToSettings: true
      }),
      className: w.Gv,
      children: [(0, r.jsx)(b.A, {
        width: 16,
        height: 16,
        direction: b.A.Directions.LEFT,
        className: w.lJ
      }), j]
    }), k && u ? (0, r.jsx)("div", {
      className: w.XI,
      children: (0, r.jsx)("div", {
        className: w.ut,
        children: R.intl.string(R.t.PxbiAf)
      })
    }) : (0, r.jsxs)("div", {
      className: w.XI,
      children: [(0, r.jsx)("div", {
        className: w.ut,
        children: u ? R.intl.formatToPlainString(R.t["0PHahI"], {
          numRoles: Object.keys(a).length
        }) : R.intl.formatToPlainString(R.t.vMlK8t, {
          numRoles: Object.keys(a).length
        })
      }), (0, r.jsx)(d.YNO, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: () => (0, r.jsx)(S.A, {
          guildId: t
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(P, {
            onClick: n,
            buttonRef: e,
            children: [M, (0, r.jsx)(O.A, {
              width: 16,
              height: 16,
              direction: O.A.Directions.DOWN,
              className: w.k5
            })]
          })
        }
      }), u && (0, r.jsx)(c.m, {
        asContainer: true,
        text: R.intl.string(R.t.mW4DUE),
        children: (0, r.jsx)(d.EpV, {
          size: "xs",
          color: l.A.unsafe_rawColors.YELLOW_300.css
        })
      }), v && (0, r.jsx)(c.m, {
        asContainer: true,
        text: R.intl.formatToPlainString(R.t.eummvd, {
          maxTiers: N.f7,
          maxProducts: 50
        }),
        children: (0, r.jsx)(d.EpV, {
          size: "xs",
          color: l.A.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), u || s === T.BEX.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, {
      onClick: () => U({
        backToSettings: false
      })
    })]
  })
}

function M(e) {
  let {
    guildId: t
  } = e;
  return (0, o.bG)([I.A], () => I.A.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: s()(w.xd, {
      [w.KF]: (0, v.isWindows)(),
      [w.Xz]: (0, v.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}