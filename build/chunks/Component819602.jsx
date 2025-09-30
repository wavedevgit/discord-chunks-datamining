/** Chunk was on 38413 **/
/** chunk id: 819602, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  E3: () => E,
  ZP: () => P,
  tH: () => k
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      c = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), c.forEach(function(n) {
      var c;
      c = t[n], n in e ? Object.defineProperty(e, n, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = c
    })
  }
  return e
}

function I(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      t.push.apply(t, c)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function E(e) {
  var n, t;
  let o, s, p, {
    connectedAccount: N,
    theme: v,
    locale: f,
    userId: y,
    className: E,
    showMetadata: k,
    showInvisibleIcon: P
  } = e;
  null == k && (k = true);
  let S = null != (t = N.metadata) ? t : {},
    w = k ? (0, m.FI)(S[_.PC.CREATED_AT], f) : null,
    G = (0, i.dQu)(l.Z.unsafe_rawColors.TWITTER).hex(),
    R = T.intl.string(T.t["6H6h1t"]);
  if (k) switch (N.type) {
    case A.ABu.REDDIT:
      o = (0, x.oP)(S);
      break;
    case A.ABu.STEAM:
      o = (0, x.Dq)(S);
      break;
    case A.ABu.BLUESKY:
    case A.ABu.MASTODON:
    case A.ABu.TWITTER:
      o = (0, x.rJ)(S), "1" === S[_.PC.TWITTER_VERIFIED] && (s = G, R = T.intl.string(T.t.Jebrw8));
      break;
    case A.ABu.PAYPAL:
      o = (0, x.li)(S);
      break;
    case A.ABu.EBAY:
      o = (0, x.ul)(S);
      break;
    case A.ABu.TIKTOK:
      o = (0, x.hf)(S)
  }
  let Z = d.Z.get((0, h.rR)(N.type)),
    B = null == Z || null == (n = Z.getPlatformUserUrl) ? true : n.call(Z, N);
  null != P && P ? p = (0, c.jsx)(i.kZF, {
    size: "md",
    color: "currentColor",
    className: a()(O.__invalid_connectedAccountOpenIconContainer, O.connectedAccountHideIcon)
  }) : null != B && (p = (0, c.jsx)(i.eee, {
    href: B,
    "aria-label": (null == Z ? true : Z.name) != null ? "".concat(Z.name, ", ").concat(N.name, ", ").concat(T.intl.string(T.t.q5jLJC)) : "".concat(N.name, ", ").concat(T.intl.string(T.t.q5jLJC)),
    onClick: e => {
      var n;
      n = N.type, (0, u.yw)(A.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: n,
        other_user_id: y
      }), (0, j.q)({
        href: B,
        trusted: (null == Z ? true : Z.type) !== A.ABu.DOMAIN
      }, e)
    },
    children: (0, c.jsx)(b.Z, {
      className: O.connectedAccountOpenIcon,
      direction: b.Z.Directions.RIGHT
    })
  }));
  let D = (0, i.dQu)(l.Z.colors.INTERACTIVE_MUTED).hex(),
    L = (0, i.dQu)(l.Z.colors.INTERACTIVE_ACTIVE).hex(),
    M = N.verified ? (0, c.jsx)(C.Z, {
      className: O.connectedAccountVerifiedIcon,
      color: null != s ? s : D,
      forcedIconColor: L,
      size: 16,
      tooltipText: R
    }) : null;
  return (0, c.jsxs)("li", {
    className: a()(O.connectedAccountContainer, null != o && o.length > 0 || null != w ? O.connectedAccountContainerWithMetadata : null, E),
    children: [(0, c.jsxs)("div", {
      className: O.connectedAccount,
      children: [(0, c.jsx)(i.ua7, {
        text: null == Z ? true : Z.name,
        children: e => (0, c.jsx)("img", I(g({}, e), {
          alt: T.intl.formatToPlainString(T.t.rtm15O, {
            name: null == Z ? true : Z.name
          }),
          className: O.connectedAccountIcon,
          src: (0, r.wj)(v) ? null == Z ? true : Z.icon.darkSVG : null == Z ? true : Z.icon.lightSVG
        }))
      }), (0, c.jsxs)("div", {
        className: O.connectedAccountNameContainer,
        children: [(0, c.jsxs)("div", {
          className: O.connectedAccountName,
          children: [(0, c.jsxs)("div", {
            className: O.connectedAccountNameTextContainer,
            children: [(0, c.jsx)(i.ua7, {
              overflowOnly: true,
              text: N.name,
              children: e => (0, c.jsx)(i.Text, I(g({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: O.connectedAccountNameText,
                children: N.name
              }))
            }), M]
          }), p]
        }), null != w ? (0, c.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: T.intl.format(T.t["9rfonp"], {
            date: w
          })
        }) : null]
      })]
    }), null != o && o.length > 0 ? (0, c.jsx)("div", {
      className: O.connectedAccountChildren,
      children: o
    }) : null]
  })
}

function k(e) {
  let {
    applicationRoleConnection: n,
    className: t,
    locale: o,
    onApplicationClicked: l,
    selectedGuildId: r
  } = e, d = (0, x.rm)(n, o), u = () => {
    null == l || l(), (0, p.transitionToGlobalDiscovery)({
      tab: y.GlobalDiscoveryTab.APPS,
      applicationId: n.application.id,
      newSessionState: {
        entrypoint: {
          name: N.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: r
      }
    })
  };
  return (0, c.jsxs)("li", {
    className: a()(O.connectedAccountContainer, null != d && d.length > 0 ? O.connectedAccountContainerWithMetadata : null, t),
    children: [(0, c.jsx)("div", {
      className: O.connectedAccount,
      children: (0, c.jsxs)(i.P3F, {
        className: a()(O.connectedAccountNameContainer, O.connectedAccountNameContainerClickable),
        onClick: u,
        children: [null != n.platform_name ? (0, c.jsx)(i.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, c.jsx)("div", {
          className: O.connectedAccountName,
          children: (0, c.jsx)("div", {
            className: O.connectedAccountNameTextContainer,
            children: (0, c.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "interactive-active",
              className: O.connectedAccountNameText,
              children: n.platform_username
            })
          })
        }) : null]
      })
    }), null != d && d.length > 0 ? (0, c.jsx)("div", {
      className: a()(O.connectedAccountChildren, O.connectedAccountChildrenNoIcon),
      children: d
    }) : null, (0, c.jsx)("div", {
      children: (0, c.jsx)(i.P3F, {
        className: O.connectedAccountPoweredBy,
        onClick: u,
        children: (0, c.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: T.intl.format(T.t.zIT9YG, {
            applicationHook: () => (0, c.jsxs)("div", {
              className: O.connectedAccountPoweredByText,
              children: [null != n.application.bot ? (0, c.jsx)(s.Z, {
                user: new v.Z(n.application.bot),
                size: i.EFr.SIZE_16
              }) : null, (0, c.jsx)(i.Text, {
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

function P(e) {
  let {
    connectedAccounts: n,
    locale: t,
    className: o,
    userId: l
  } = e, {
    theme: r
  } = (0, f.z)();
  if (null == n || 0 === n.length) return null;
  let i = n.map(e => (0, c.jsx)(E, {
      connectedAccount: e,
      theme: r,
      locale: t,
      userId: l
    }, "".concat(e.type, ":").concat(e.id))),
    s = [],
    d = [];
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    e % 2 == 0 ? s.push(n) : d.push(n)
  }
  return (0, c.jsxs)("ul", {
    className: a()(O.connectedAccounts, o),
    children: [(0, c.jsx)("div", {
      className: O.connectedAccountsColumn,
      children: s
    }), (0, c.jsx)("div", {
      className: O.connectedAccountsColumn,
      children: d
    })]
  })
}