/** Chunk was on 82412 **/
/** chunk id: 819602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E3: () => y,
  ZP: () => D,
  tH: () => g
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk888496 = require("./888496.js"),
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
  Chunk797892 = require("./797892.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      c = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), c.forEach(function(t) {
      var c;
      c = n[t], t in e ? Object.defineProperty(e, t, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = c
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      n.push.apply(n, c)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  var t, n;
  let a, s, p, {
    connectedAccount: A,
    theme: x,
    locale: h,
    userId: j,
    className: y,
    showMetadata: g,
    showInvisibleIcon: D
  } = e;
  null == g && (g = true);
  let L = null != (n = A.metadata) ? n : {},
    R = g ? (0, T.FI)(L[v.PC.CREATED_AT], h) : null,
    S = (0, i.dQu)(r.Z.unsafe_rawColors.TWITTER).hex(),
    M = C.intl.string(C.t["6H6h1t"]);
  if (g) switch (A.type) {
    case b.ABu.REDDIT:
      a = (0, E.oP)(L);
      break;
    case b.ABu.STEAM:
      a = (0, E.Dq)(L);
      break;
    case b.ABu.BLUESKY:
    case b.ABu.MASTODON:
    case b.ABu.TWITTER:
      a = (0, E.rJ)(L), "1" === L[v.PC.TWITTER_VERIFIED] && (s = S, M = C.intl.string(C.t.Jebrw8));
      break;
    case b.ABu.PAYPAL:
      a = (0, E.li)(L);
      break;
    case b.ABu.EBAY:
      a = (0, E.ul)(L);
      break;
    case b.ABu.TIKTOK:
      a = (0, E.hf)(L)
  }
  let U = u.Z.get((0, m.rR)(A.type)),
    w = null == U || null == (t = U.getPlatformUserUrl) ? true : t.call(U, A);
  null != D && D ? p = <i.kZF size={"md"} color={"currentColor"} className={l()(f.__invalid_connectedAccountOpenIconContainer, f.connectedAccountHideIcon)} /> : null != w && (p = <i.eee href={w} aria-label={(null == U ? true : U.name) != null ? "".concat(U.name, ", ").concat(A.name, ", ").concat(C.intl.string(C.t.q5jLJC)) : "".concat(A.name, ", ").concat(C.intl.string(C.t.q5jLJC))} onClick={e => {
      var t;
      t = A.type, (0, d.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
        platform_type: t,
        other_user_id: j
      }), (0, _.q)({
        href: w,
        trusted: (null == U ? true : U.type) !== b.ABu.DOMAIN
      }, e)
    }}><N.Z className={f.connectedAccountOpenIcon} direction={N.Z.Directions.RIGHT} /></i.eee>);
  let k = (0, i.dQu)(r.Z.colors.INTERACTIVE_MUTED).hex(),
    K = (0, i.dQu)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
    B = A.verified ? <O.Z className={f.connectedAccountVerifiedIcon} color={null != s ? s : k} forcedIconColor={K} size={16} tooltipText={M} /> : null;
  return <li className={l()(f.connectedAccountContainer, null != a && a.length > 0 || null != R ? f.connectedAccountContainerWithMetadata : null, y)}>{<div className={f.connectedAccount}>{<i.ua7 text={null == U ? true : U.name}>{e => (0, c.jsx)("img", P(I({}, e), {
          alt: C.intl.formatToPlainString(C.t.rtm15O, {
            name: null == U ? true : U.name
          }),
          className: f.connectedAccountIcon,
          src: (0, o.wj)(x) ? null == U ? true : U.icon.darkSVG : null == U ? true : U.icon.lightSVG
        }))}</i.ua7>}{<div className={f.connectedAccountNameContainer}>{<div className={f.connectedAccountName}>{<div className={f.connectedAccountNameTextContainer}>{<i.ua7 overflowOnly={true} text={A.name}>{e => (0, c.jsx)(i.Text, P(I({}, e), {
                variant: "text-sm/medium",
                color: "interactive-active",
                className: f.connectedAccountNameText,
                children: A.name
              }))}</i.ua7>}{B}</div>}{p}</div>}{null != R ? <i.Text variant={"text-xs/normal"} color={"header-secondary"}>{C.intl.format(C.t["9rfonp"], {
            date: R
          })}</i.Text> : null}</div>}</div>}{null != a && a.length > 0 ? <div className={f.connectedAccountChildren}>{a}</div> : null}</li>
}

function g(e) {
  let {
    applicationRoleConnection: t,
    className: n,
    locale: a,
    onApplicationClicked: r,
    selectedGuildId: o
  } = e, u = (0, E.rm)(t, true, a), d = () => {
    null == r || r(), (0, p.transitionToGlobalDiscovery)({
      tab: j.GlobalDiscoveryTab.APPS,
      applicationId: t.application.id,
      newSessionState: {
        entrypoint: {
          name: A.xF.APPLICATION_DIRECTORY_URL
        },
        guildId: o
      }
    })
  };
  return <li className={l()(f.connectedAccountContainer, null != u && u.length > 0 ? f.connectedAccountContainerWithMetadata : null, n)}>{<div className={f.connectedAccount}><i.P3F className={l()(f.connectedAccountNameContainer, f.connectedAccountNameContainerClickable)} onClick={d}>{null != t.platform_name ? <i.Text variant={"eyebrow"} color={"interactive-normal"}>{t.platform_name}</i.Text> : null}{null != t.platform_username ? <div className={f.connectedAccountName}><div className={f.connectedAccountNameTextContainer}><i.Text variant={"text-sm/medium"} color={"interactive-active"} className={f.connectedAccountNameText}>{t.platform_username}</i.Text></div></div> : null}</i.P3F></div>}{null != u && u.length > 0 ? <div className={l()(f.connectedAccountChildren, f.connectedAccountChildrenNoIcon)}>{u}</div> : null}{<div><i.P3F className={f.connectedAccountPoweredBy} onClick={d}><i.Text variant={"text-xs/normal"} color={"text-muted"}>{C.intl.format(C.t.zIT9YG, {
            applicationHook: () => (0, c.jsxs)("div", {
              className: f.connectedAccountPoweredByText,
              children: [null != t.application.bot ? (0, c.jsx)(s.Z, {
                user: new x.Z(t.application.bot),
                size: i.EFr.SIZE_16
              }) : null, (0, c.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: t.application.name
              })]
            })
          })}</i.Text></i.P3F></div>}</li>
}

function D(e) {
  let {
    connectedAccounts: t,
    locale: n,
    className: a,
    userId: r
  } = e, {
    theme: o
  } = (0, h.z)();
  if (null == t || 0 === t.length) return null;
  let i = t.map(e => <y connectedAccount={e} theme={o} locale={n} userId={r} />),
    s = [],
    u = [];
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    e % 2 == 0 ? s.push(t) : u.push(t)
  }
  return <ul className={l()(f.connectedAccounts, a)}>{<div className={f.connectedAccountsColumn}>{s}</div>}{<div className={f.connectedAccountsColumn}>{u}</div>}</ul>
}