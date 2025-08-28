/** Chunk was on 82008 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => A,
  ZP: () => C,
  tH: () => E
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function N(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function A(e) {
  var n, t;
  let l, a, b, {
    connectedAccount: x,
    theme: j,
    locale: y,
    userId: _,
    className: A,
    showMetadata: E,
    showInvisibleIcon: C
  } = e;
  null == E && (E = true);
  let S = null != (t = x.metadata) ? t : {},
    w = E ? (0, m.FI)(S[I.PC.CREATED_AT], y) : null,
    D = (0, s.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
    L = Z.intl.string(Z.t["6H6h1t"]);
  if (E) switch (x.type) {
    case O.ABu.REDDIT:
      l = (0, p.oP)(S);
      break;
    case O.ABu.STEAM:
      l = (0, p.Dq)(S);
      break;
    case O.ABu.BLUESKY:
    case O.ABu.MASTODON:
    case O.ABu.TWITTER:
      l = (0, p.rJ)(S), "1" === S[I.PC.TWITTER_VERIFIED] && (a = D, L = Z.intl.string(Z.t.Jebrw8));
      break;
    case O.ABu.PAYPAL:
      l = (0, p.li)(S);
      break;
    case O.ABu.EBAY:
      l = (0, p.ul)(S);
      break;
    case O.ABu.TIKTOK:
      l = (0, p.hf)(S)
  }
  let B = d.Z.get((0, f.rR)(x.type)),
    U = null == B || null == (n = B.getPlatformUserUrl) ? true : n.call(B, x);
  null != C && C ? b = (0, r.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: o()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon)
  }) : null != U && (b = (0, r.jsx)(s.eee, {
    href: U,
    "aria-label": (null == B ? true : B.name) != null ? "".concat(B.name, ", ").concat(x.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)) : "".concat(x.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)),
    onClick: e => {
      var n;
      n = x.type, (0, u.yw)(O.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: _
      }), (0, v.q)({
        href: U,
        trusted: (null == B ? true : B.type) !== O.ABu.DOMAIN
      }, e)
    },
    children: (0, r.jsx)(g.Z, {
      className: P.connectedAccountOpenIcon,
      direction: g.Z.Directions.RIGHT
    })
  }));
  let R = (0, s.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
    M = (0, s.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
    k = x.verified ? (0, r.jsx)(h.Z, {
      className: P.connectedAccountVerifiedIcon,
      color: null != a ? a : R,
      forcedIconColor: M,
      size: 16,
      tooltipText: L
    }) : null;
  return (0, r.jsxs)("li", {
    className: o()(P.connectedAccountContainer, null != l && l.length > 0 || null != w ? P.connectedAccountContainerWithMetadata : null, A),
    children: [(0, r.jsxs)("div", {
      className: P.connectedAccount,
      children: [(0, r.jsx)(s.ua7, {
        text: null == B ? true : B.name,
        children: e => (0, r.jsx)("img", N(T({}, e), {
          alt: Z.intl.formatToPlainString(Z.t.rtm15O, {
            name: null == B ? true : B.name
          }),
          className: P.connectedAccountIcon,
          src: (0, c.wj)(j) ? null == B ? true : B.icon.darkSVG : null == B ? true : B.icon.lightSVG
        }))
      }), (0, r.jsxs)("div", {
        className: P.connectedAccountNameContainer,
        children: [(0, r.jsxs)("div", {
          className: P.connectedAccountName,
          children: [(0, r.jsxs)("div", {
            className: P.connectedAccountNameTextContainer,
            children: [(0, r.jsx)(s.ua7, {
              overflowOnly: true,
              text: x.name,
              children: e => (0, r.jsx)(s.Text, N(T({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: P.connectedAccountNameText,
                children: x.name
              }))
            }), k]
          }), b]
        }), null != w ? (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: Z.intl.format(Z.t["9rfonp"], {
            date: w
          })
        }) : null]
      })]
    }), null != l && l.length > 0 ? (0, r.jsx)("div", {
      className: P.connectedAccountChildren,
      children: l
    }) : null]
  })
}

function E(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: l,
    onApplicationClicked: i,
    selectedGuildId: c
  } = e, d = (0, p.rm)(n, true, l), u = () => {
    null == i || i(), (0, b.transitionToGlobalDiscovery)({
      tab: _.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: x.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: c
      }
    })
  };
  return (0, r.jsxs)("li", {
    className: o()(P.connectedAccountContainer, null != d && d.length > 0 ? P.connectedAccountContainerWithMetadata : null, t),
    children: [(0, r.jsx)("div", {
      className: P.connectedAccount,
      children: (0, r.jsxs)(s.P3F, {
        className: o()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, r.jsx)(s.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, r.jsx)("div", {
          className: P.connectedAccountName,
          children: (0, r.jsx)("div", {
            className: P.connectedAccountNameTextContainer,
            children: (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: P.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != d && d.length > 0 ? (0, r.jsx)("div", {
      className: o()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
      children: d
    }) : null, (0, r.jsx)("div", {
      children: (0, r.jsx)(s.P3F, {
        className: P.connectedAccountPoweredBy,
        onClick: u,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: Z.intl.format(Z.t.zIT9YG, {
            applicationHook: () => (0, r.jsxs)("div", {
              className: P.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, r.jsx)(a.Z, {
                user: new j.Z(n.application.bot),
                size: s.EFr.SIZE_16
              }) : null, (0, r.jsx)(s.Text, {
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
    className: l,
    userId: i
  } = e, {
    theme: c
  } = (0, y.z)();
  if (null == n || 0 === n.length) return null;
  let s = n.map(e => (0, r.jsx)(A, {
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
  return (0, r.jsxs)("ul", {
    className: o()(P.connectedAccounts, l),
    children: [(0, r.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: a
    }), (0, r.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: d
    })]
  })
}