/** Chunk was on 38413 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => k,
  ZP: () => O,
  tH: () => E
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk367907 = require("./367907.js"),
  Chunk122021 = require("./122021.js"),
  Chunk275759 = require("./275759.js"),
  Chunk888496 = require("./888496.jsx"),
  Chunk753194 = require("./753194.jsx"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk598077 = require("./598077.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk49012 = require("./49012.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk455392 = require("./455392.js");

function k(e) {
  var n, t;
  let o, d, N, {
    connectedAccount: A,
    theme: v,
    locale: b,
    userId: y,
    className: k,
    showMetadata: E,
    showInvisibleIcon: O
  } = e;
  null == E && (E = true);
  let S = null != (t = A.metadata) ? t : {},
    P = E ? (0, x.FI)(S[T.PC.CREATED_AT], b) : null,
    G = (0, s.dQu)(l.Z.unsafe_rawColors.TWITTER).hex(),
    w = g.intl.string(g.t["6H6h1t"]);
  if (E) switch (A.type) {
    case _.ABu.REDDIT:
      o = (0, C.oP)(S);
      break;
    case _.ABu.STEAM:
      o = (0, C.Dq)(S);
      break;
    case _.ABu.BLUESKY:
    case _.ABu.MASTODON:
    case _.ABu.TWITTER:
      o = (0, C.rJ)(S), "1" === S[T.PC.TWITTER_VERIFIED] && (d = G, w = g.intl.string(g.t.Jebrw8));
      break;
    case _.ABu.PAYPAL:
      o = (0, C.li)(S);
      break;
    case _.ABu.EBAY:
      o = (0, C.ul)(S);
      break;
    case _.ABu.TIKTOK:
      o = (0, C.hf)(S)
  }
  let R = u.Z.get((0, m.rR)(A.type)),
    Z = null == R || null == (n = R.getPlatformUserUrl) ? true : n.call(R, A);
  null != O && O ? N = (0, c.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: a()(I.__invalid_connectedAccountOpenIconContainer, I.connectedAccountHideIcon)
  }) : null != Z && (N = (0, c.jsx)(s.eee, {
    href: Z,
    "aria-label": (null == R ? true : R.name) != null ? "".concat(R.name, ", ").concat(A.name, ", ").concat(g.intl.string(g.t.q5jLJC)) : "".concat(A.name, ", ").concat(g.intl.string(g.t.q5jLJC)),
    onClick: e => {
      var n;
      n = A.type, (0, h.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: y
      }), (0, j.q)({
        href: Z,
        trusted: (null == R ? true : R.type) !== _.ABu.DOMAIN
      }, e)
    },
    children: (0, c.jsx)(f.Z, {
      className: I.connectedAccountOpenIcon,
      direction: f.Z.Directions.RIGHT
    })
  }));
  let L = (0, s.dQu)(l.Z.colors.INTERACTIVE_MUTED).hex(),
    M = (0, s.dQu)(l.Z.colors.INTERACTIVE_ACTIVE).hex(),
    B = A.verified ? (0, c.jsx)(p.Z, {
      className: I.connectedAccountVerifiedIcon,
      color: null != d ? d : L,
      forcedIconColor: M,
      size: 16,
      tooltipText: w
    }) : null;
  return (0, c.jsxs)("li", {
    className: a()(I.connectedAccountContainer, null != o && o.length > 0 || null != P ? I.connectedAccountContainerWithMetadata : null, k),
    children: [(0, c.jsxs)("div", {
      className: I.connectedAccount,
      children: [(0, c.jsx)(i.u, {
        __unsupportedReactNodeAsText: null == R ? true : R.name,
        children: (0, c.jsx)("img", {
          alt: g.intl.formatToPlainString(g.t.rtm15O, {
            name: null == R ? true : R.name
          }),
          className: I.connectedAccountIcon,
          src: (0, r.wj)(v) ? null == R ? true : R.icon.darkSVG : null == R ? true : R.icon.lightSVG
        })
      }), (0, c.jsxs)("div", {
        className: I.connectedAccountNameContainer,
        children: [(0, c.jsxs)("div", {
          className: I.connectedAccountName,
          children: [(0, c.jsxs)("div", {
            className: I.connectedAccountNameTextContainer,
            children: [(0, c.jsx)(i.u, {
              overflowOnly: true,
              text: A.name,
              children: (0, c.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: I.connectedAccountNameText,
                children: A.name
              })
            }), B]
          }), N]
        }), null != P ? (0, c.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: g.intl.format(g.t["9rfonp"], {
            date: P
          })
        }) : null]
      })]
    }), null != o && o.length > 0 ? (0, c.jsx)("div", {
      className: I.connectedAccountChildren,
      children: o
    }) : null]
  })
}

function E(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: o,
    onApplicationClicked: l,
    selectedGuildId: i
  } = e, r = (0, C.rm)(n, o), u = () => {
    null == l || l(), (0, N.transitionToGlobalDiscovery)({
      tab: y.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: A.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: i
      }
    })
  };
  return (0, c.jsxs)("li", {
    className: a()(I.connectedAccountContainer, null != r && r.length > 0 ? I.connectedAccountContainerWithMetadata : null, t),
    children: [(0, c.jsx)("div", {
      className: I.connectedAccount,
      children: (0, c.jsxs)(s.P3F, {
        className: a()(I.connectedAccountNameContainer, I.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, c.jsx)(s.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, c.jsx)("div", {
          className: I.connectedAccountName,
          children: (0, c.jsx)("div", {
            className: I.connectedAccountNameTextContainer,
            children: (0, c.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: I.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != r && r.length > 0 ? (0, c.jsx)("div", {
      className: a()(I.connectedAccountChildren, I.connectedAccountChildrenNoIcon),
      children: r
    }) : null, (0, c.jsx)("div", {
      children: (0, c.jsx)(s.P3F, {
        className: I.connectedAccountPoweredBy,
        onClick: u,
        children: (0, c.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t.zIT9YG, {
            applicationHook: () => (0, c.jsxs)("div", {
              className: I.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, c.jsx)(d.Z, {
                user: new v.Z(n.application.bot),
                size: s.EFr.SIZE_16
              }) : null, (0, c.jsx)(s.Text, {
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

function O(e) {
  let {
    connectedAccounts: n,
    locale: t,
    className: o,
    userId: l
  } = e, {
    theme: i
  } = (0, b.z)();
  if (null == n || 0 === n.length) return null;
  let r = n.map(e => (0, c.jsx)(k, {
      connectedAccount: e,
      theme: i,
      locale: t,
      userId: l
    }, "".concat(e.type, ":").concat(e.id))),
    s = [],
    d = [];
  for (let e = 0; e < r.length; e++) {
    let n = r[e];
    e % 2 == 0 ? s.push(n) : d.push(n)
  }
  return (0, c.jsxs)("ul", {
    className: a()(I.connectedAccounts, o),
    children: [(0, c.jsx)("div", {
      className: I.connectedAccountsColumn,
      children: s
    }), (0, c.jsx)("div", {
      className: I.connectedAccountsColumn,
      children: d
    })]
  })
}