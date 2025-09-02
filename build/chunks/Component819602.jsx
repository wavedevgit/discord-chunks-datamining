/** Chunk was on 93979 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => A,
  ZP: () => C,
  tH: () => E
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
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

function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function T(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function A(e) {
  var n, t;
  let o, a, h, {
    connectedAccount: b,
    theme: j,
    locale: y,
    userId: Z,
    className: A,
    showMetadata: E,
    showInvisibleIcon: C
  } = e;
  null == E && (E = true);
  let S = null != (t = b.metadata) ? t : {},
    w = E ? (0, f.FI)(S[I.PC.CREATED_AT], y) : null,
    D = (0, s.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
    L = _.intl.string(_.t["6H6h1t"]);
  if (E) switch (b.type) {
    case O.ABu.REDDIT:
      o = (0, p.oP)(S);
      break;
    case O.ABu.STEAM:
      o = (0, p.Dq)(S);
      break;
    case O.ABu.BLUESKY:
    case O.ABu.MASTODON:
    case O.ABu.TWITTER:
      o = (0, p.rJ)(S), "1" === S[I.PC.TWITTER_VERIFIED] && (a = D, L = _.intl.string(_.t.Jebrw8));
      break;
    case O.ABu.PAYPAL:
      o = (0, p.li)(S);
      break;
    case O.ABu.EBAY:
      o = (0, p.ul)(S);
      break;
    case O.ABu.TIKTOK:
      o = (0, p.hf)(S)
  }
  let M = d.Z.get((0, m.rR)(b.type)),
    R = null == M || null == (n = M.getPlatformUserUrl) ? true : n.call(M, b);
  null != C && C ? h = (0, l.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: r()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon)
  }) : null != R && (h = (0, l.jsx)(s.eee, {
    href: R,
    "aria-label": (null == M ? true : M.name) != null ? "".concat(M.name, ", ").concat(b.name, ", ").concat(_.intl.string(_.t.q5jLJC)) : "".concat(b.name, ", ").concat(_.intl.string(_.t.q5jLJC)),
    onClick: e => {
      var n;
      n = b.type, (0, u.yw)(O.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: Z
      }), (0, g.q)({
        href: R,
        trusted: (null == M ? true : M.type) !== O.ABu.DOMAIN
      }, e)
    },
    children: (0, l.jsx)(v.Z, {
      className: P.connectedAccountOpenIcon,
      direction: v.Z.Directions.RIGHT
    })
  }));
  let B = (0, s.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
    U = (0, s.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
    k = b.verified ? (0, l.jsx)(x.Z, {
      className: P.connectedAccountVerifiedIcon,
      color: null != a ? a : B,
      forcedIconColor: U,
      size: 16,
      tooltipText: L
    }) : null;
  return (0, l.jsxs)("li", {
    className: r()(P.connectedAccountContainer, null != o && o.length > 0 || null != w ? P.connectedAccountContainerWithMetadata : null, A),
    children: [(0, l.jsxs)("div", {
      className: P.connectedAccount,
      children: [(0, l.jsx)(s.ua7, {
        text: null == M ? true : M.name,
        children: e => (0, l.jsx)("img", T(N({}, e), {
          alt: _.intl.formatToPlainString(_.t.rtm15O, {
            name: null == M ? true : M.name
          }),
          className: P.connectedAccountIcon,
          src: (0, c.wj)(j) ? null == M ? true : M.icon.darkSVG : null == M ? true : M.icon.lightSVG
        }))
      }), (0, l.jsxs)("div", {
        className: P.connectedAccountNameContainer,
        children: [(0, l.jsxs)("div", {
          className: P.connectedAccountName,
          children: [(0, l.jsxs)("div", {
            className: P.connectedAccountNameTextContainer,
            children: [(0, l.jsx)(s.ua7, {
              overflowOnly: true,
              text: b.name,
              children: e => (0, l.jsx)(s.Text, T(N({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: P.connectedAccountNameText,
                children: b.name
              }))
            }), k]
          }), h]
        }), null != w ? (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: _.intl.format(_.t["9rfonp"], {
            date: w
          })
        }) : null]
      })]
    }), null != o && o.length > 0 ? (0, l.jsx)("div", {
      className: P.connectedAccountChildren,
      children: o
    }) : null]
  })
}

function E(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: o,
    onApplicationClicked: i,
    selectedGuildId: c
  } = e, d = (0, p.rm)(n, true, o), u = () => {
    null == i || i(), (0, h.transitionToGlobalDiscovery)({
      tab: Z.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: b.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: c
      }
    })
  };
  return (0, l.jsxs)("li", {
    className: r()(P.connectedAccountContainer, null != d && d.length > 0 ? P.connectedAccountContainerWithMetadata : null, t),
    children: [(0, l.jsx)("div", {
      className: P.connectedAccount,
      children: (0, l.jsxs)(s.P3F, {
        className: r()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, l.jsx)(s.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, l.jsx)("div", {
          className: P.connectedAccountName,
          children: (0, l.jsx)("div", {
            className: P.connectedAccountNameTextContainer,
            children: (0, l.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: P.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != d && d.length > 0 ? (0, l.jsx)("div", {
      className: r()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
      children: d
    }) : null, (0, l.jsx)("div", {
      children: (0, l.jsx)(s.P3F, {
        className: P.connectedAccountPoweredBy,
        onClick: u,
        children: (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.intl.format(_.t.zIT9YG, {
            applicationHook: () => (0, l.jsxs)("div", {
              className: P.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, l.jsx)(a.Z, {
                user: new j.Z(n.application.bot),
                size: s.EFr.SIZE_16
              }) : null, (0, l.jsx)(s.Text, {
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

function C(e) {
  let {
    connectedAccounts: n,
    locale: t,
    className: o,
    userId: i
  } = e, {
    theme: c
  } = (0, y.z)();
  if (null == n || 0 === n.length) return null;
  let s = n.map(e => (0, l.jsx)(A, {
      connectedAccount: e,
      theme: c,
      locale: t,
      userId: i
    }, "".concat(e.type, ":").concat(e.id))),
    a = [],
    d = [];
  for (let e = 0; e < s.length; e++) {
    let n = s[e];
    e % 2 == 0 ? a.push(n) : d.push(n)
  }
  return (0, l.jsxs)("ul", {
    className: r()(P.connectedAccounts, o),
    children: [(0, l.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: a
    }), (0, l.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: d
    })]
  })
}