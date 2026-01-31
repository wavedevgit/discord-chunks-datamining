/** Chunk was on 61222 **/
/** chunk id: 475723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  w: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function M(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: l
  } = e;
  return (0, r.jsx)(u.$n, {
    buttonRef: l,
    className: o()(U.x6, t),
    innerClassName: U.hZ,
    look: u.$n.Looks.OUTLINED,
    color: u.$n.Colors.WHITE,
    size: u.$n.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function b(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(M, {
    onClick: t,
    children: h.intl.string(h.t.R9GHya)
  })
}

function j() {
  let e = i.useRef(null),
    t = (0, a.bG)([p.A], () => p.A.getGuildId()),
    n = (0, a.bG)([N.A], () => N.A.getChannelId(t)),
    {
      viewingRoles: l,
      backNavigationSection: o,
      isFullServerPreview: u,
      isServerShopPreview: P
    } = (0, a.cf)([C.A], () => ({
      viewingRoles: null != t ? C.A.getViewingRoles(t) : null,
      backNavigationSection: C.A.getBackNavigationSection(t),
      isFullServerPreview: null != t && C.A.isFullServerPreview(t),
      isServerShopPreview: null != t && C.A.isViewingServerShop(t)
    }));
  if (null == l || null == t) return null;
  let j = function(e) {
      switch (e) {
        case D.BEX.INTEGRATIONS:
          return h.intl.string(h.t.k7LGdh);
        case D.BEX.ROLE_SUBSCRIPTIONS:
          return h.intl.string(h.t.bRqiqa);
        case D.BEX.ONBOARDING:
          return h.intl.string(h.t.qZpU3S);
        default:
          return h.intl.string(h.t.MTIXhi)
      }
    }(o),
    k = o === D.BEX.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzd) : h.intl.string(h.t["/djIh7"]),
    L = n === g.VV.GUILD_ONBOARDING,
    v = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (C.A.isFullServerPreview(t) && (0, O.pX)(D.BVt.CHANNEL(t)), _.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, A.Jg)(t)), (0, y.rf)(t), n && I.A.open(t, o), o === D.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t))
    };
  return (0, r.jsxs)(E.$Td, {
    color: E.Hv$.BRAND,
    className: U.lm,
    children: [(0, r.jsxs)(M, {
      onClick: () => v({
        backToSettings: true
      }),
      className: U.Gv,
      children: [(0, r.jsx)(R.A, {
        width: 16,
        height: 16,
        direction: R.A.Directions.LEFT,
        className: U.lJ
      }), j]
    }), L && u ? (0, r.jsx)("div", {
      className: U.XI,
      children: (0, r.jsx)("div", {
        className: U.ut,
        children: h.intl.string(h.t.PxbiAf)
      })
    }) : (0, r.jsxs)("div", {
      className: U.XI,
      children: [(0, r.jsx)("div", {
        className: U.ut,
        children: u ? h.intl.formatToPlainString(h.t["0PHahI"], {
          numRoles: Object.keys(l).length
        }) : h.intl.formatToPlainString(h.t.vMlK8t, {
          numRoles: Object.keys(l).length
        })
      }), (0, r.jsx)(E.YNO, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: () => (0, r.jsx)(f.A, {
          guildId: t
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(M, {
            onClick: n,
            buttonRef: e,
            children: [k, (0, r.jsx)(S.A, {
              width: 16,
              height: 16,
              direction: S.A.Directions.DOWN,
              className: U.k5
            })]
          })
        }
      }), u && (0, r.jsx)(c.m, {
        asContainer: true,
        text: h.intl.string(h.t.mW4DUE),
        children: (0, r.jsx)(E.EpV, {
          size: "xs",
          color: s.A.unsafe_rawColors.YELLOW_300.css
        })
      }), P && (0, r.jsx)(c.m, {
        asContainer: true,
        text: h.intl.formatToPlainString(h.t.eummvd, {
          maxTiers: m.f7,
          maxProducts: 50
        }),
        children: (0, r.jsx)(E.EpV, {
          size: "xs",
          color: s.A.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), u || o === D.BEX.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, {
      onClick: () => v({
        backToSettings: false
      })
    })]
  })
}

function k(e) {
  let {
    guildId: t
  } = e;
  return (0, a.bG)([C.A], () => C.A.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: o()(U.xd, {
      [U.KF]: (0, P.isWindows)(),
      [U.Xz]: (0, P.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}