/** Chunk was on 49282 **/
/** chunk id: 46937, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Ay: () => R,
  Wc: () => j,
  wQ: () => S
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk573648 = require("./573648.js"),
  Chunk58149 = require("./58149.js"),
  Chunk681819 = require("./681819.js"),
  Chunk370480 = require("./370480.js"),
  Chunk169869 = require("./169869.jsx"),
  Chunk355971 = require("./355971.jsx"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk427157 = require("./427157.js"),
  Chunk792831 = require("./792831.jsx"),
  Chunk307600 = require("./307600.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712601 = require("./712601.js");

function S(e) {
  var t, l;
  let a, u, O, {
    connectedAccount: N,
    theme: b,
    locale: x,
    userId: v,
    className: S,
    showMetadata: j,
    showInvisibleIcon: R
  } = e;
  null == j && (j = true);
  let D = null != (t = N.metadata) ? t : {},
    L = j ? (0, E.An)(D[I.pK.CREATED_AT], x) : null,
    P = (0, o.rdh)(s.A.unsafe_rawColors.TWITTER).hex(),
    K = g.intl.string(g.t["6H6h1r"]);
  if (j) switch (N.type) {
    case f.fg2.REDDIT:
      a = (0, m.xE)(D);
      break;
    case f.fg2.STEAM:
      a = (0, m.dy)(D);
      break;
    case f.fg2.BLUESKY:
    case f.fg2.MASTODON:
    case f.fg2.TWITTER:
      a = (0, m.ED)(D), "1" === D[I.pK.TWITTER_VERIFIED] && (u = P, K = g.intl.string(g.t.Jebrww));
      break;
    case f.fg2.PAYPAL:
      a = (0, m.gZ)(D);
      break;
    case f.fg2.EBAY:
      a = (0, m.ub)(D);
      break;
    case f.fg2.TIKTOK:
      a = (0, m.HU)(D)
  }
  let C = p.A.get((0, T.ML)(N.type)),
    U = null == C || null == (l = C.getPlatformUserUrl) ? true : l.call(C, N);
  null != R && R ? O = (0, n.jsx)(o.G3N, {
    size: "md",
    color: "currentColor",
    className: r()(y.__invalid_connectedAccountOpenIconContainer, y.gE)
  }) : null != U && (O = (0, n.jsx)(o.MzZ, {
    href: U,
    "aria-label": (null == C ? true : C.name) != null ? "".concat(C.name, ", ").concat(N.name, ", ").concat(g.intl.string(g.t.q5jLJB)) : "".concat(N.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
    onClick: e => {
      var t;
      t = N.type, (0, d.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: v
      }), (0, h.h)({
        href: U,
        trusted: (null == C ? true : C.type) !== f.fg2.DOMAIN
      }, e)
    },
    children: (0, n.jsx)(A.A, {
      className: y.yf,
      direction: A.A.Directions.RIGHT
    })
  }));
  let G = (0, o.rdh)(s.A.colors.ICON_MUTED).hex(),
    w = (0, o.rdh)(s.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
    B = N.verified ? (0, n.jsx)(_.A, {
      className: y.sU,
      color: null != u ? u : G,
      forcedIconColor: w,
      size: 16,
      tooltipText: K
    }) : null;
  return (0, n.jsxs)("li", {
    className: r()(y.WD, null != a && a.length > 0 || null != L ? y.l1 : null, S),
    children: [(0, n.jsxs)("div", {
      className: y.dF,
      children: [(0, n.jsx)(c.m, {
        __unsupportedReactNodeAsText: null == C ? true : C.name,
        children: (0, n.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: null == C ? true : C.name
          }),
          className: y.cS,
          src: (0, i.Mw)(b) ? null == C ? true : C.icon.darkSVG : null == C ? true : C.icon.lightSVG
        })
      }), (0, n.jsxs)("div", {
        className: y.Hm,
        children: [(0, n.jsxs)("div", {
          className: y.Ky,
          children: [(0, n.jsxs)("div", {
            className: y.O3,
            children: [(0, n.jsx)(c.m, {
              overflowOnly: true,
              text: N.name,
              children: (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                className: y.vc,
                children: N.name
              })
            }), B]
          }), O]
        }), null != L ? (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: g.intl.format(g.t["9rfonh"], {
            date: L
          })
        }) : null]
      })]
    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
      className: y.Gm,
      children: a
    }) : null]
  })
}

function j(e) {
  let {
    applicationRoleConnection: t,
    className: l,
    locale: a,
    onApplicationClicked: s,
    selectedGuildId: c
  } = e, i = (0, m.VW)(t, a), p = () => {
    null == s || s(), (0, O.transitionToGlobalDiscovery)({
      tab: v.GlobalDiscoveryTab.APPS,
      applicationId: t.application.id,
      newSessionState: {
        entrypoint: {
          name: N.sW.APPLICATION_DIRECTORY_URL
        },
        guildId: c
      }
    })
  };
  return (0, n.jsxs)("li", {
    className: r()(y.WD, null != i && i.length > 0 ? y.l1 : null, l),
    children: [(0, n.jsx)("div", {
      className: y.dF,
      children: (0, n.jsxs)(o.DUT, {
        className: r()(y.Hm, y.b1),
        onClick: p,
        children: [null != t.platform_name ? (0, n.jsx)(o.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, n.jsx)("div", {
          className: y.Ky,
          children: (0, n.jsx)("div", {
            className: y.O3,
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "interactive-text-active",
              className: y.vc,
              children: t.platform_username
            })
          })
        }) : null]
      })
    }), null != i && i.length > 0 ? (0, n.jsx)("div", {
      className: r()(y.Gm, y.en),
      children: i
    }) : null, (0, n.jsx)("div", {
      children: (0, n.jsx)(o.DUT, {
        className: y.od,
        onClick: p,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t.zIT9YA, {
            applicationHook: () => (0, n.jsxs)("div", {
              className: y.hT,
              children: [null != t.application.bot ? (0, n.jsx)(u.A, {
                user: new b.A(t.application.bot),
                size: o._3J.SIZE_16
              }) : null, (0, n.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t.application.name
              })]
            })
          })
        })
      })
    })]
  })
}

function R(e) {
  let {
    connectedAccounts: t,
    locale: l,
    className: a,
    userId: s
  } = e, {
    theme: c
  } = (0, x.E)();
  if (null == t || 0 === t.length) return null;
  let i = t.map(e => (0, n.jsx)(S, {
      connectedAccount: e,
      theme: c,
      locale: l,
      userId: s
    }, "".concat(e.type, ":").concat(e.id))),
    o = [],
    u = [];
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    e % 2 == 0 ? o.push(t) : u.push(t)
  }
  return (0, n.jsxs)("ul", {
    className: r()(y._0, a),
    children: [(0, n.jsx)("div", {
      className: y.Yy,
      children: o
    }), (0, n.jsx)("div", {
      className: y.Yy,
      children: u
    })]
  })
}