/** Chunk was on 72164 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => A,
  ZP: () => E,
  tH: () => C
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

function T(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = o
    })
  }
  return e
}

function N(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function A(e) {
  var n, t;
  let l, s, b, {
    connectedAccount: h,
    theme: j,
    locale: y,
    userId: O,
    className: A,
    showMetadata: C,
    showInvisibleIcon: E
  } = e;
  null == C && (C = true);
  let S = null != (t = h.metadata) ? t : {},
    w = C ? (0, p.FI)(S[I.PC.CREATED_AT], y) : null,
    D = (0, a.dQu)(i.Z.unsafe_rawColors.TWITTER).hex(),
    B = Z.intl.string(Z.t["6H6h1t"]);
  if (C) switch (h.type) {
    case _.ABu.REDDIT:
      l = (0, m.oP)(S);
      break;
    case _.ABu.STEAM:
      l = (0, m.Dq)(S);
      break;
    case _.ABu.BLUESKY:
    case _.ABu.MASTODON:
    case _.ABu.TWITTER:
      l = (0, m.rJ)(S), "1" === S[I.PC.TWITTER_VERIFIED] && (s = D, B = Z.intl.string(Z.t.Jebrw8));
      break;
    case _.ABu.PAYPAL:
      l = (0, m.li)(S);
      break;
    case _.ABu.EBAY:
      l = (0, m.ul)(S);
      break;
    case _.ABu.TIKTOK:
      l = (0, m.hf)(S)
  }
  let L = d.Z.get((0, f.rR)(h.type)),
    R = null == L || null == (n = L.getPlatformUserUrl) ? true : n.call(L, h);
  null != E && E ? b = (0, o.jsx)(a.kZF, {
    size: "md",
    color: "currentColor",
    className: r()(P.__invalid_connectedAccountOpenIconContainer, P.connectedAccountHideIcon)
  }) : null != R && (b = (0, o.jsx)(a.eee, {
    href: R,
    "aria-label": (null == L ? true : L.name) != null ? "".concat(L.name, ", ").concat(h.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)) : "".concat(h.name, ", ").concat(Z.intl.string(Z.t.q5jLJC)),
    onClick: e => {
      var n;
      n = h.type, (0, u.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: O
      }), (0, v.q)({
        href: R,
        trusted: (null == L ? true : L.type) !== _.ABu.DOMAIN
      }, e)
    },
    children: (0, o.jsx)(g.Z, {
      className: P.connectedAccountOpenIcon,
      direction: g.Z.Directions.RIGHT
    })
  }));
  let M = (0, a.dQu)(i.Z.colors.INTERACTIVE_MUTED).hex(),
    U = (0, a.dQu)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
    k = h.verified ? (0, o.jsx)(x.Z, {
      className: P.connectedAccountVerifiedIcon,
      color: null != s ? s : M,
      forcedIconColor: U,
      size: 16,
      tooltipText: B
    }) : null;
  return (0, o.jsxs)("li", {
    className: r()(P.connectedAccountContainer, null != l && l.length > 0 || null != w ? P.connectedAccountContainerWithMetadata : null, A),
    children: [(0, o.jsxs)("div", {
      className: P.connectedAccount,
      children: [(0, o.jsx)(a.ua7, {
        text: null == L ? true : L.name,
        children: e => (0, o.jsx)("img", N(T({}, e), {
          alt: Z.intl.formatToPlainString(Z.t.rtm15O, {
            name: null == L ? true : L.name
          }),
          className: P.connectedAccountIcon,
          src: (0, c.wj)(j) ? null == L ? true : L.icon.darkSVG : null == L ? true : L.icon.lightSVG
        }))
      }), (0, o.jsxs)("div", {
        className: P.connectedAccountNameContainer,
        children: [(0, o.jsxs)("div", {
          className: P.connectedAccountName,
          children: [(0, o.jsxs)("div", {
            className: P.connectedAccountNameTextContainer,
            children: [(0, o.jsx)(a.ua7, {
              overflowOnly: true,
              text: h.name,
              children: e => (0, o.jsx)(a.Text, N(T({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: P.connectedAccountNameText,
                children: h.name
              }))
            }), k]
          }), b]
        }), null != w ? (0, o.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: Z.intl.format(Z.t["9rfonp"], {
            date: w
          })
        }) : null]
      })]
    }), null != l && l.length > 0 ? (0, o.jsx)("div", {
      className: P.connectedAccountChildren,
      children: l
    }) : null]
  })
}

function C(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: l,
    onApplicationClicked: i,
    selectedGuildId: c
  } = e, d = (0, m.rm)(n, true, l), u = () => {
    null == i || i(), (0, b.transitionToGlobalDiscovery)({
      tab: O.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: h.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: c
      }
    })
  };
  return (0, o.jsxs)("li", {
    className: r()(P.connectedAccountContainer, null != d && d.length > 0 ? P.connectedAccountContainerWithMetadata : null, t),
    children: [(0, o.jsx)("div", {
      className: P.connectedAccount,
      children: (0, o.jsxs)(a.P3F, {
        className: r()(P.connectedAccountNameContainer, P.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, o.jsx)(a.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, o.jsx)("div", {
          className: P.connectedAccountName,
          children: (0, o.jsx)("div", {
            className: P.connectedAccountNameTextContainer,
            children: (0, o.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: P.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != d && d.length > 0 ? (0, o.jsx)("div", {
      className: r()(P.connectedAccountChildren, P.connectedAccountChildrenNoIcon),
      children: d
    }) : null, (0, o.jsx)("div", {
      children: (0, o.jsx)(a.P3F, {
        className: P.connectedAccountPoweredBy,
        onClick: u,
        children: (0, o.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: Z.intl.format(Z.t.zIT9YG, {
            applicationHook: () => (0, o.jsxs)("div", {
              className: P.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, o.jsx)(s.Z, {
                user: new j.Z(n.application.bot),
                size: a.EFr.SIZE_16
              }) : null, (0, o.jsx)(a.Text, {
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
    className: l,
    userId: i
  } = e, {
    theme: c
  } = (0, y.z)();
  if (null == n || 0 === n.length) return null;
  let a = n.map(e => (0, o.jsx)(A, {
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
  return (0, o.jsxs)("ul", {
    className: r()(P.connectedAccounts, l),
    children: [(0, o.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: s
    }), (0, o.jsx)("div", {
      className: P.connectedAccountsColumn,
      children: d
    })]
  })
}