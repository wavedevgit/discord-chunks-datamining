/** Chunk was on 80971 **/
/** chunk id: 46937, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Ay: () => I,
  Wc: () => S,
  wQ: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function O(e) {
  var t, l;
  let a, d, j, {
    connectedAccount: b,
    theme: v,
    locale: y,
    userId: T,
    className: O,
    showMetadata: S,
    showInvisibleIcon: I
  } = e;
  null == S && (S = true);
  let w = null != (t = b.metadata) ? t : {},
    k = S ? (0, f.An)(w[g.pK.CREATED_AT], y) : null,
    P = (0, o.rdh)(c.A.unsafe_rawColors.TWITTER).hex(),
    R = C.intl.string(C.t["6H6h1r"]);
  if (S) switch (b.type) {
    case A.fg2.REDDIT:
      a = (0, h.xE)(w);
      break;
    case A.fg2.STEAM:
      a = (0, h.dy)(w);
      break;
    case A.fg2.BLUESKY:
    case A.fg2.MASTODON:
    case A.fg2.TWITTER:
      a = (0, h.ED)(w), "1" === w[g.pK.TWITTER_VERIFIED] && (d = P, R = C.intl.string(C.t.Jebrww));
      break;
    case A.fg2.PAYPAL:
      a = (0, h.gZ)(w);
      break;
    case A.fg2.EBAY:
      a = (0, h.ub)(w);
      break;
    case A.fg2.TIKTOK:
      a = (0, h.HU)(w)
  }
  let G = u.A.get((0, x.ML)(b.type)),
    D = null == G || null == (l = G.getPlatformUserUrl) ? true : l.call(G, b);
  null != I && I ? j = (0, n.jsx)(o.G3N, {
    size: "md",
    color: "currentColor",
    className: i()(E.__invalid_connectedAccountOpenIconContainer, E.gE)
  }) : null != D && (j = (0, n.jsx)(o.MzZ, {
    href: D,
    "aria-label": (null == G ? true : G.name) != null ? "".concat(G.name, ", ").concat(b.name, ", ").concat(C.intl.string(C.t.q5jLJB)) : "".concat(b.name, ", ").concat(C.intl.string(C.t.q5jLJB)),
    onClick: e => {
      var t;
      t = b.type, (0, m.zV)(A.HAw.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: T
      }), (0, N.h)({
        href: D,
        trusted: (null == G ? true : G.type) !== A.fg2.DOMAIN
      }, e)
    },
    children: (0, n.jsx)(_.A, {
      className: E.yf,
      direction: _.A.Directions.RIGHT
    })
  }));
  let L = (0, o.rdh)(c.A.colors.ICON_MUTED).hex(),
    U = (0, o.rdh)(c.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
    H = b.verified ? (0, n.jsx)(p.A, {
      className: E.sU,
      color: null != d ? d : L,
      forcedIconColor: U,
      size: 16,
      tooltipText: R
    }) : null;
  return (0, n.jsxs)("li", {
    className: i()(E.WD, null != a && a.length > 0 || null != k ? E.l1 : null, O),
    children: [(0, n.jsxs)("div", {
      className: E.dF,
      children: [(0, n.jsx)(s.m, {
        __unsupportedReactNodeAsText: null == G ? true : G.name,
        children: (0, n.jsx)("img", {
          alt: C.intl.formatToPlainString(C.t.rtm15P, {
            name: null == G ? true : G.name
          }),
          className: E.cS,
          src: (0, r.Mw)(v) ? null == G ? true : G.icon.darkSVG : null == G ? true : G.icon.lightSVG
        })
      }), (0, n.jsxs)("div", {
        className: E.Hm,
        children: [(0, n.jsxs)("div", {
          className: E.Ky,
          children: [(0, n.jsxs)("div", {
            className: E.O3,
            children: [(0, n.jsx)(s.m, {
              overflowOnly: true,
              text: b.name,
              children: (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                className: E.vc,
                children: b.name
              })
            }), H]
          }), j]
        }), null != k ? (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: C.intl.format(C.t["9rfonh"], {
            date: k
          })
        }) : null]
      })]
    }), null != a && a.length > 0 ? (0, n.jsx)("div", {
      className: E.Gm,
      children: a
    }) : null]
  })
}

function S(e) {
  let {
    applicationRoleConnection: t,
    className: l,
    locale: a,
    onApplicationClicked: c,
    selectedGuildId: s
  } = e, r = (0, h.VW)(t, a), u = () => {
    null == c || c(), (0, j.transitionToGlobalDiscovery)({
      tab: T.GlobalDiscoveryTab.APPS,
      applicationId: t.application.id,
      newSessionState: {
        entrypoint: {
          name: b.sW.APPLICATION_DIRECTORY_URL
        },
        guildId: s
      }
    })
  };
  return (0, n.jsxs)("li", {
    className: i()(E.WD, null != r && r.length > 0 ? E.l1 : null, l),
    children: [(0, n.jsx)("div", {
      className: E.dF,
      children: (0, n.jsxs)(o.DUT, {
        className: i()(E.Hm, E.b1),
        onClick: u,
        children: [null != t.platform_name ? (0, n.jsx)(o.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, n.jsx)("div", {
          className: E.Ky,
          children: (0, n.jsx)("div", {
            className: E.O3,
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "interactive-text-active",
              className: E.vc,
              children: t.platform_username
            })
          })
        }) : null]
      })
    }), null != r && r.length > 0 ? (0, n.jsx)("div", {
      className: i()(E.Gm, E.en),
      children: r
    }) : null, (0, n.jsx)("div", {
      children: (0, n.jsx)(o.DUT, {
        className: E.od,
        onClick: u,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.intl.format(C.t.zIT9YA, {
            applicationHook: () => (0, n.jsxs)("div", {
              className: E.hT,
              children: [null != t.application.bot ? (0, n.jsx)(d.A, {
                user: new v.A(t.application.bot),
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

function I(e) {
  let {
    connectedAccounts: t,
    locale: l,
    className: a,
    userId: c
  } = e, {
    theme: s
  } = (0, y.E)();
  if (null == t || 0 === t.length) return null;
  let r = t.map(e => (0, n.jsx)(O, {
      connectedAccount: e,
      theme: s,
      locale: l,
      userId: c
    }, "".concat(e.type, ":").concat(e.id))),
    o = [],
    d = [];
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    e % 2 == 0 ? o.push(t) : d.push(t)
  }
  return (0, n.jsxs)("ul", {
    className: i()(E._0, a),
    children: [(0, n.jsx)("div", {
      className: E.Yy,
      children: o
    }), (0, n.jsx)("div", {
      className: E.Yy,
      children: d
    })]
  })
}