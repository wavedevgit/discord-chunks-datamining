/** Chunk was on 93979 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => T,
  ZP: () => E,
  tH: () => P
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function T(e) {
  var n, t;
  let i, d, v, {
    connectedAccount: j,
    theme: g,
    locale: y,
    userId: O,
    className: T,
    showMetadata: P,
    showInvisibleIcon: E
  } = e;
  null == P && (P = true);
  let C = null != (t = j.metadata) ? t : {},
    S = P ? (0, f.FI)(C[Z.PC.CREATED_AT], y) : null,
    w = (0, c.dQu)(r.Z.unsafe_rawColors.TWITTER).hex(),
    D = N.intl.string(N.t["6H6h1r"]);
  if (P) switch (j.type) {
    case _.ABu.REDDIT:
      i = (0, x.oP)(C);
      break;
    case _.ABu.STEAM:
      i = (0, x.Dq)(C);
      break;
    case _.ABu.BLUESKY:
    case _.ABu.MASTODON:
    case _.ABu.TWITTER:
      i = (0, x.rJ)(C), "1" === C[Z.PC.TWITTER_VERIFIED] && (d = w, D = N.intl.string(N.t.Jebrww));
      break;
    case _.ABu.PAYPAL:
      i = (0, x.li)(C);
      break;
    case _.ABu.EBAY:
      i = (0, x.ul)(C);
      break;
    case _.ABu.TIKTOK:
      i = (0, x.hf)(C)
  }
  let R = u.Z.get((0, p.rR)(j.type)),
    L = null == R || null == (n = R.getPlatformUserUrl) ? true : n.call(R, j);
  null != E && E ? v = (0, l.jsx)(c.kZF, {
    size: "md",
    color: "currentColor",
    className: o()(A.__invalid_connectedAccountOpenIconContainer, A.connectedAccountHideIcon)
  }) : null != L && (v = (0, l.jsx)(c.Anchor, {
    href: L,
    "aria-label": (null == R ? true : R.name) != null ? "".concat(R.name, ", ").concat(j.name, ", ").concat(N.intl.string(N.t.q5jLJB)) : "".concat(j.name, ", ").concat(N.intl.string(N.t.q5jLJB)),
    onClick: e => {
      var n;
      n = j.type, (0, m.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: O
      }), (0, I.q)({
        href: L,
        trusted: (null == R ? true : R.type) !== _.ABu.DOMAIN
      }, e)
    },
    children: (0, l.jsx)(b.Z, {
      className: A.connectedAccountOpenIcon,
      direction: b.Z.Directions.RIGHT
    })
  }));
  let M = (0, c.dQu)(r.Z.colors.INTERACTIVE_MUTED).hex(),
    B = (0, c.dQu)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
    U = j.verified ? (0, l.jsx)(h.Z, {
      className: A.connectedAccountVerifiedIcon,
      color: null != d ? d : M,
      forcedIconColor: B,
      size: 16,
      tooltipText: D
    }) : null;
  return (0, l.jsxs)("li", {
    className: o()(A.connectedAccountContainer, null != i && i.length > 0 || null != S ? A.connectedAccountContainerWithMetadata : null, T),
    children: [(0, l.jsxs)("div", {
      className: A.connectedAccount,
      children: [(0, l.jsx)(s.u, {
        __unsupportedReactNodeAsText: null == R ? true : R.name,
        children: (0, l.jsx)("img", {
          alt: N.intl.formatToPlainString(N.t.rtm15P, {
            name: null == R ? true : R.name
          }),
          className: A.connectedAccountIcon,
          src: (0, a.wj)(g) ? null == R ? true : R.icon.darkSVG : null == R ? true : R.icon.lightSVG
        })
      }), (0, l.jsxs)("div", {
        className: A.connectedAccountNameContainer,
        children: [(0, l.jsxs)("div", {
          className: A.connectedAccountName,
          children: [(0, l.jsxs)("div", {
            className: A.connectedAccountNameTextContainer,
            children: [(0, l.jsx)(s.u, {
              overflowOnly: true,
              text: j.name,
              children: (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: A.connectedAccountNameText,
                children: j.name
              })
            }), U]
          }), v]
        }), null != S ? (0, l.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: N.intl.format(N.t["9rfonh"], {
            date: S
          })
        }) : null]
      })]
    }), null != i && i.length > 0 ? (0, l.jsx)("div", {
      className: A.connectedAccountChildren,
      children: i
    }) : null]
  })
}

function P(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: i,
    onApplicationClicked: r,
    selectedGuildId: s
  } = e, a = (0, x.rm)(n, i), u = () => {
    null == r || r(), (0, v.transitionToGlobalDiscovery)({
      tab: O.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: j.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: s
      }
    })
  };
  return (0, l.jsxs)("li", {
    className: o()(A.connectedAccountContainer, null != a && a.length > 0 ? A.connectedAccountContainerWithMetadata : null, t),
    children: [(0, l.jsx)("div", {
      className: A.connectedAccount,
      children: (0, l.jsxs)(c.P3F, {
        className: o()(A.connectedAccountNameContainer, A.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, l.jsx)(c.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, l.jsx)("div", {
          className: A.connectedAccountName,
          children: (0, l.jsx)("div", {
            className: A.connectedAccountNameTextContainer,
            children: (0, l.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: A.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != a && a.length > 0 ? (0, l.jsx)("div", {
      className: o()(A.connectedAccountChildren, A.connectedAccountChildrenNoIcon),
      children: a
    }) : null, (0, l.jsx)("div", {
      children: (0, l.jsx)(c.P3F, {
        className: A.connectedAccountPoweredBy,
        onClick: u,
        children: (0, l.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.intl.format(N.t.zIT9YA, {
            applicationHook: () => (0, l.jsxs)("div", {
              className: A.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, l.jsx)(d.Z, {
                user: new g.Z(n.application.bot),
                size: c.EFr.SIZE_16
              }) : null, (0, l.jsx)(c.Text, {
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

function E(e) {
  let {
    connectedAccounts: n,
    locale: t,
    className: i,
    userId: r
  } = e, {
    theme: s
  } = (0, y.z)();
  if (null == n || 0 === n.length) return null;
  let a = n.map(e => (0, l.jsx)(T, {
      connectedAccount: e,
      theme: s,
      locale: t,
      userId: r
    }, "".concat(e.type, ":").concat(e.id))),
    c = [],
    d = [];
  for (let e = 0; e < a.length; e++) {
    let n = a[e];
    e % 2 == 0 ? c.push(n) : d.push(n)
  }
  return (0, l.jsxs)("ul", {
    className: o()(A.connectedAccounts, i),
    children: [(0, l.jsx)("div", {
      className: A.connectedAccountsColumn,
      children: c
    }), (0, l.jsx)("div", {
      className: A.connectedAccountsColumn,
      children: d
    })]
  })
}