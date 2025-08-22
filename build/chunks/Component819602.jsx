/** Chunk was on 98360 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => A,
  ZP: () => E,
  tH: () => C
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  let o, s, b, {
    connectedAccount: g,
    theme: h,
    locale: _,
    userId: I,
    className: A,
    showMetadata: C,
    showInvisibleIcon: E
  } = e;
  null == C && (C = true);
  let S = null != (t = g.metadata) ? t : {},
    w = C ? (0, m.FI)(S[O.PC.CREATED_AT], _) : null,
    B = (0, a.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
    D = Z.intl.string(Z.t["6H6h1t"]);
  if (C) switch (g.type) {
    case y.ABu.REDDIT:
      o = (0, p.oP)(S);
      break;
    case y.ABu.STEAM:
      o = (0, p.Dq)(S);
      break;
    case y.ABu.BLUESKY:
    case y.ABu.MASTODON:
    case y.ABu.TWITTER:
      o = (0, p.rJ)(S), "1" === S[O.PC.TWITTER_VERIFIED] && (s = B, D = Z.intl.string(Z.t.Jebrw8));
      break;
    case y.ABu.PAYPAL:
      o = (0, p.li)(S);
      break;
    case y.ABu.EBAY:
      o = (0, p.ul)(S);
      break;
    case y.ABu.TIKTOK:
      o = (0, p.hf)(S)
  }
  let L = d.Z.get((0, f.rR)(g.type)),
    R = null == L || null == (n = L.getPlatformUserUrl) ? true : n.call(L, g);
  null != E && E ? b = (0, r.jsx)(a.kZF, {
    size: "md",
    color: "currentColor",
    className: l()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon)
  }) : null != R && (b = (0, r.jsx)(a.eee, {
    href: R,
    "aria-label": (null == L ? true : L.name) != null ? "".concat(L.name, ", ").concat(g.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)) : "".concat(g.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)),
    onClick: e => {
      var n;
      n = g.type, (0, u.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: I
      }), (0, v.q)({
        href: R,
        trusted: (null == L ? true : L.type) !== y.ABu.DOMAIN
      }, e)
    },
    children: (0, r.jsx)(j.Z, {
      className: P.connectedAccountOpenIcon,
      direction: j.Z.Directions.RIGHT
    })
  }));
  let U = (0, a.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
    M = (0, a.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
    k = g.verified ? (0, r.jsx)(x.Z, {
      className: P.connectedAccountVerifiedIcon,
      color: null != s ? s : U,
      forcedIconColor: M,
      size: 16,
      tooltipText: D
    }) : null;
  return (0, r.jsxs)("li", {
    className: l()(P.connectedAccountContainer, null != o && o.length > 0 || null != w ? P.connectedAccountContainerWithMetadata : null, A),
    children: [(0, r.jsxs)("div", {
      className: P.connectedAccount,
      children: [(0, r.jsx)(a.ua7, {
        text: null == L ? true : L.name,
        children: e => (0, r.jsx)("img", N(T({}, e), {
          alt: Z.intl.formatToPlainString(Z.t.rtm15O, {
            name: null == L ? true : L.name
          }),
          className: P.connectedAccountIcon,
          src: (0, c.wj)(h) ? null == L ? true : L.icon.darkSVG : null == L ? true : L.icon.lightSVG
        }))
      }), (0, r.jsxs)("div", {
        className: P.connectedAccountNameContainer,
        children: [(0, r.jsxs)("div", {
          className: P.connectedAccountName,
          children: [(0, r.jsxs)("div", {
            className: P.connectedAccountNameTextContainer,
            children: [(0, r.jsx)(a.ua7, {
              overflowOnly: true,
              text: g.name,
              children: e => (0, r.jsx)(a.Text, N(T({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: P.connectedAccountNameText,
                children: g.name
              }))
            }), k]
          }), b]
        }), null != w ? (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: Z.intl.format(Z.t["9rfonp"], {
            date: w
          })
        }) : null]
      })]
    }), null != o && o.length > 0 ? (0, r.jsx)("div", {
      className: P.connectedAccountChildren,
      children: o
    }) : null]
  })
}

function C(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: o,
    onApplicationClicked: i,
    selectedGuildId: c
  } = e, d = (0, p.rm)(n, true, o), u = () => {
    null == i || i(), (0, b.transitionToGlobalDiscovery)({
      tab: I.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: g.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: c
      }
    })
  };
  return (0, r.jsxs)("li", {
    className: l()(P.connectedAccountContainer, null != d && d.length > 0 ? P.connectedAccountContainerWithMetadata : null, t),
    children: [(0, r.jsx)("div", {
      className: P.connectedAccount,
      children: (0, r.jsxs)(a.P3F, {
        className: l()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, r.jsx)(a.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, r.jsx)("div", {
          className: P.connectedAccountName,
          children: (0, r.jsx)("div", {
            className: P.connectedAccountNameTextContainer,
            children: (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: P.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != d && d.length > 0 ? (0, r.jsx)("div", {
      className: l()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
      children: d
    }) : null, (0, r.jsx)("div", {
      children: (0, r.jsx)(a.P3F, {
        className: P.connectedAccountPoweredBy,
        onClick: u,
        children: (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: Z.intl.format(Z.t.zIT9YG, {
            applicationHook: () => (0, r.jsxs)("div", {
              className: P.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, r.jsx)(s.Z, {
                user: new h.Z(n.application.bot),
                size: a.EFr.SIZE_16
              }) : null, (0, r.jsx)(a.Text, {
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
    className: o,
    userId: i
  } = e, {
    theme: c
  } = (0, _.z)();
  if (null == n || 0 === n.length) return null;
  let a = n.map(e => (0, r.jsx)(A, {
      connectedAccount: e,
      theme: c,
      locale: t,
      userId: i
    }, "".concat(e.type, ":").concat(e.id))),
    s = [],
    d = [];
  for (let e = 0; e < a.length; e++) {
    let n = a[e];
    e % 2 == 0 ? s.push(n) : d.push(n)
  }
  return (0, r.jsxs)("ul", {
    className: l()(P.connectedAccounts, o),
    children: [(0, r.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: s
    }), (0, r.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: d
    })]
  })
}