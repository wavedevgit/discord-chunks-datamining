/** Chunk was on 46673 **/
/** chunk id: 475723, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  w: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function U(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    buttonRef: l
  } = e;
  return (0, r.jsx)(u.$n, {
    buttonRef: l,
    className: a()(b.x6, t),
    innerClassName: b.hZ,
    look: u.$n.Looks.OUTLINED,
    color: u.$n.Colors.WHITE,
    size: u.$n.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function M(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(U, {
    onClick: t,
    children: h.intl.string(h.t.R9GHya)
  })
}

function j() {
  let e = i.useRef(null),
    t = (0, o.bG)([p.A], () => p.A.getGuildId()),
    n = (0, o.bG)([N.A], () => N.A.getChannelId(t)),
    {
      viewingRoles: l,
      backNavigationSection: a,
      isFullServerPreview: u,
      isServerShopPreview: P
    } = (0, o.cf)([m.A], () => ({
      viewingRoles: null != t ? m.A.getViewingRoles(t) : null,
      backNavigationSection: m.A.getBackNavigationSection(t),
      isFullServerPreview: null != t && m.A.isFullServerPreview(t),
      isServerShopPreview: null != t && m.A.isViewingServerShop(t)
    }));
  if (null == l || null == t) return null;
  let j = function(e) {
      switch (e) {
        case C.BEX.INTEGRATIONS:
          return h.intl.string(h.t.k7LGdh);
        case C.BEX.ROLE_SUBSCRIPTIONS:
          return h.intl.string(h.t.bRqiqa);
        case C.BEX.ONBOARDING:
          return h.intl.string(h.t.qZpU3S);
        default:
          return h.intl.string(h.t.MTIXhi)
      }
    }(a),
    v = a === C.BEX.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzd) : h.intl.string(h.t["/djIh7"]),
    k = n === g.VV.GUILD_ONBOARDING,
    L = e => {
      let {
        backToSettings: n
      } = e;
      null != t && (m.A.isFullServerPreview(t) && (0, O.pX)(C.BVt.CHANNEL(t)), _.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, A.Jg)(t)), (0, y.rf)(t), n && I.A.open(t, a), a === C.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t))
    };
  return (0, r.jsxs)(E.$Td, {
    color: E.Hv$.BRAND,
    className: b.lm,
    children: [(0, r.jsxs)(U, {
      onClick: () => L({
        backToSettings: true
      }),
      className: b.Gv,
      children: [(0, r.jsx)(R.A, {
        width: 16,
        height: 16,
        direction: R.A.Directions.LEFT,
        className: b.lJ
      }), j]
    }), k && u ? (0, r.jsx)("div", {
      className: b.XI,
      children: (0, r.jsx)("div", {
        className: b.ut,
        children: h.intl.string(h.t.PxbiAf)
      })
    }) : (0, r.jsxs)("div", {
      className: b.XI,
      children: [(0, r.jsx)("div", {
        className: b.ut,
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
          return (0, r.jsxs)(U, {
            onClick: n,
            buttonRef: e,
            children: [v, (0, r.jsx)(S.A, {
              width: 16,
              height: 16,
              direction: S.A.Directions.DOWN,
              className: b.k5
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
          maxTiers: D.f7,
          maxProducts: 50
        }),
        children: (0, r.jsx)(E.EpV, {
          size: "xs",
          color: s.A.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), u || a === C.BEX.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(M, {
      onClick: () => L({
        backToSettings: false
      })
    })]
  })
}

function v(e) {
  let {
    guildId: t
  } = e;
  return (0, o.bG)([m.A], () => m.A.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: a()(b.xd, {
      [b.KF]: (0, P.isWindows)(),
      [b.Xz]: (0, P.isMac)()
    }),
    children: (0, r.jsx)(j, {})
  }) : null
}