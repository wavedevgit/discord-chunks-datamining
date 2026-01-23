/** Chunk was on 80971 **/
/** chunk id: 46937, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Ay: () => S,
  Wc: () => I,
  wQ: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
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
  var n, t;
  let a, d, _, {
    connectedAccount: b,
    theme: j,
    locale: A,
    userId: g,
    className: O,
    showMetadata: I,
    showInvisibleIcon: S
  } = e;
  null == I && (I = true);
  let k = null != (n = b.metadata) ? n : {},
    w = I ? (0, h.An)(k[y.pK.CREATED_AT], A) : null,
    P = (0, r.rdh)(i.A.unsafe_rawColors.TWITTER).hex(),
    G = T.intl.string(T.t["6H6h1r"]);
  if (I) switch (b.type) {
    case C.fg2.REDDIT:
      a = (0, p.xE)(k);
      break;
    case C.fg2.STEAM:
      a = (0, p.dy)(k);
      break;
    case C.fg2.BLUESKY:
    case C.fg2.MASTODON:
    case C.fg2.TWITTER:
      a = (0, p.ED)(k), "1" === k[y.pK.TWITTER_VERIFIED] && (d = P, G = T.intl.string(T.t.Jebrww));
      break;
    case C.fg2.PAYPAL:
      a = (0, p.gZ)(k);
      break;
    case C.fg2.EBAY:
      a = (0, p.ub)(k);
      break;
    case C.fg2.TIKTOK:
      a = (0, p.HU)(k)
  }
  let R = u.A.get((0, x.ML)(b.type)),
    D = null == R || null == (t = R.getPlatformUserUrl) ? true : t.call(R, b);
  null != S && S ? _ = (0, l.jsx)(r.G3N, {
    size: "md",
    color: "currentColor",
    className: c()(E.__invalid_connectedAccountOpenIconContainer, E.gE)
  }) : null != D && (_ = (0, l.jsx)(r.MzZ, {
    href: D,
    "aria-label": (null == R ? true : R.name) != null ? "".concat(R.name, ", ").concat(b.name, ", ").concat(T.intl.string(T.t.q5jLJB)) : "".concat(b.name, ", ").concat(T.intl.string(T.t.q5jLJB)),
    onClick: e => {
      var n;
      n = b.type, (0, m.zV)(C.HAw.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: g
      }), (0, v.h)({
        href: D,
        trusted: (null == R ? true : R.type) !== C.fg2.DOMAIN
      }, e)
    },
    children: (0, l.jsx)(N.A, {
      className: E.yf,
      direction: N.A.Directions.RIGHT
    })
  }));
  let L = (0, r.rdh)(i.A.colors.ICON_MUTED).hex(),
    U = (0, r.rdh)(i.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
    H = b.verified ? (0, l.jsx)(f.A, {
      className: E.sU,
      color: null != d ? d : L,
      forcedIconColor: U,
      size: 16,
      tooltipText: G
    }) : null;
  return (0, l.jsxs)("li", {
    className: c()(E.WD, null != a && a.length > 0 || null != w ? E.l1 : null, O),
    children: [(0, l.jsxs)("div", {
      className: E.dF,
      children: [(0, l.jsx)(o.m, {
        __unsupportedReactNodeAsText: null == R ? true : R.name,
        children: (0, l.jsx)("img", {
          alt: T.intl.formatToPlainString(T.t.rtm15P, {
            name: null == R ? true : R.name
          }),
          className: E.cS,
          src: (0, s.Mw)(j) ? null == R ? true : R.icon.darkSVG : null == R ? true : R.icon.lightSVG
        })
      }), (0, l.jsxs)("div", {
        className: E.Hm,
        children: [(0, l.jsxs)("div", {
          className: E.Ky,
          children: [(0, l.jsxs)("div", {
            className: E.O3,
            children: [(0, l.jsx)(o.m, {
              overflowOnly: true,
              text: b.name,
              children: (0, l.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                className: E.vc,
                children: b.name
              })
            }), H]
          }), _]
        }), null != w ? (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: T.intl.format(T.t["9rfonh"], {
            date: w
          })
        }) : null]
      })]
    }), null != a && a.length > 0 ? (0, l.jsx)("div", {
      className: E.Gm,
      children: a
    }) : null]
  })
}

function I(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: a,
    onApplicationClicked: i,
    selectedGuildId: o
  } = e, s = (0, p.VW)(n, a), u = () => {
    null == i || i(), (0, _.transitionToGlobalDiscovery)({
      tab: g.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: b.sW.APPLICATION_DIRECTORY_URL
        },
        guildId: o
      }
    })
  };
  return (0, l.jsxs)("li", {
    className: c()(E.WD, null != s && s.length > 0 ? E.l1 : null, t),
    children: [(0, l.jsx)("div", {
      className: E.dF,
      children: (0, l.jsxs)(r.DUT, {
        className: c()(E.Hm, E.b1),
        onClick: u,
        children: [null != n.platform_name ? (0, l.jsx)(r.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, l.jsx)("div", {
          className: E.Ky,
          children: (0, l.jsx)("div", {
            className: E.O3,
            children: (0, l.jsx)(r.Text, {
              variant: "text-sm/medium",
              color: "interactive-text-active",
              className: E.vc,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != s && s.length > 0 ? (0, l.jsx)("div", {
      className: c()(E.Gm, E.en),
      children: s
    }) : null, (0, l.jsx)("div", {
      children: (0, l.jsx)(r.DUT, {
        className: E.od,
        onClick: u,
        children: (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.intl.format(T.t.zIT9YA, {
            applicationHook: () => (0, l.jsxs)("div", {
              className: E.hT,
              children: [null != n.application.bot ? (0, l.jsx)(d.A, {
                user: new j.A(n.application.bot),
                size: r._3J.SIZE_16
              }) : null, (0, l.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: n.application.name
              })]
            })
          })
        })
      })
    })]
  })
}

function S(e) {
  let {
    connectedAccounts: n,
    locale: t,
    className: a,
    userId: i
  } = e, {
    theme: o
  } = (0, A.E)();
  if (null == n || 0 === n.length) return null;
  let s = n.map(e => (0, l.jsx)(O, {
      connectedAccount: e,
      theme: o,
      locale: t,
      userId: i
    }, "".concat(e.type, ":").concat(e.id))),
    r = [],
    d = [];
  for (let e = 0; e < s.length; e++) {
    let n = s[e];
    e % 2 == 0 ? r.push(n) : d.push(n)
  }
  return (0, l.jsxs)("ul", {
    className: c()(E._0, a),
    children: [(0, l.jsx)("div", {
      className: E.Yy,
      children: r
    }), (0, l.jsx)("div", {
      className: E.Yy,
      children: d
    })]
  })
}