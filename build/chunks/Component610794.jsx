/** Chunk was on web.js **/
/** chunk id: 610794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk275759 = require("./275759.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk888496 = require("./888496.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk553795 = require("./553795.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk673449 = require("./673449.js");

function v(e) {
  var t;
  let {
    account: n,
    refreshed: a,
    handleRefresh: c
  } = e, [u, d] = i.useState(false), _ = null != (t = n.metadata) ? t : {}, m = (0, o.e7)([h.default], () => h.default.locale), v = i.useCallback(async () => {
    d(true);
    try {
      await c(n)
    } finally {
      d(false)
    }
  }, [n, c]), I = null;
  switch (n.type) {
    case E.ABu.REDDIT:
      I = (0, p.oP)(_, O.metadataItem);
      break;
    case E.ABu.STEAM:
      I = (0, p.Dq)(_, O.metadataItem);
      break;
    case E.ABu.TWITTER:
      I = (0, p.rJ)(_, O.metadataItem);
      break;
    case E.ABu.EBAY:
      I = (0, p.ul)(_, O.metadataItem);
      break;
    case E.ABu.PAYPAL:
      I = (0, p.li)(_, O.metadataItem);
      break;
    case E.ABu.TIKTOK:
      I = (0, p.hf)(_, O.metadataItem)
  }
  let T = (0, f.FI)(_[b.PC.CREATED_AT], m),
    S = null,
    A = y.intl.string(y.t.wzzjk5);
  return (null == I || 0 === I.length) && null == T && (S = (0, r.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: "header-secondary",
    children: y.intl.format(y.t.Up2ni4, {
      helpdeskUrl: g.Z.getArticleURL(E.BhN.CONNECTION_DETAILS)
    })
  }, "label"), A = y.intl.string(y.t["LVh3//"])), a && (A = y.intl.string(y.t.i4jeWV)), (0, r.jsxs)("div", {
    className: O.metadataContainer,
    children: [S, null == I ? true : I.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < I.length - 1 ? (0, r.jsx)("span", {
        className: O.dot
      }) : null]
    })), null != I && I.length > 0 && null != T ? (0, r.jsx)("div", {
      className: O.dot
    }) : null, null != T ? (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: y.intl.format(y.t["9rfonp"], {
        date: T
      })
    }, "member-since") : null, (0, r.jsx)(s.zx, {
      className: O.metadataRefreshButton,
      look: s.zx.Looks.OUTLINED,
      color: a ? s.zx.Colors.GREEN : s.zx.Colors.PRIMARY,
      size: s.zx.Sizes.MIN,
      submitting: u,
      disabled: a,
      "aria-label": y.intl.string(y.t.sCkLYG),
      onClick: a ? true : v,
      children: A
    }, "refresh-button")]
  })
}

function I(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: o
  } = e, [s, f] = i.useState(t.visibility), [p, h] = i.useState(t.metadataVisibility), m = (0, u.ZP)();

  function g(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      f(r), (0, _.Z)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    f(r), c.Z.setVisibility(t.type, t.id, r)
  }

  function E(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      h(r), (0, _.Z)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    h(r), c.Z.setMetadataVisibility(t.type, t.id, r)
  }
  i.useEffect(() => {
    f(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let b = d.Z.get(t.type),
    I = true === b.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: O.activityRow,
      children: [(0, r.jsx)("img", {
        alt: b.name,
        className: O.connectionIcon,
        src: (0, a.wj)(m) ? b.icon.darkSVG : b.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: O.activitySettings,
        children: [(0, r.jsxs)(l.j7V, {
          className: O.visibilitySwitch,
          hideBorder: true,
          value: 1 === s,
          onChange: g,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: b.name
          }), I && (0, r.jsx)(v, {
            account: t,
            refreshed: o.includes(t.id),
            handleRefresh: n
          })]
        }), I && (0, r.jsx)(l.j7V, {
          className: O.additionalDetailsSwitch,
          hideBorder: true,
          disabled: 1 !== s || null == t.metadata,
          value: 1 === p,
          onChange: E,
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: y.intl.string(y.t["3l78ws"])
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: O.divider
    })]
  })
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    t = Chunk647438.useMemo(() => module.filter(e => d.Z.isSupported(e.type)), [module]),
    [n, a] = Chunk647438.useState([]),
    s = Chunk647438.useCallback(e => c.Z.refresh(e.type, e.id).finally(() => {
      a(t => [...t, e.id])
    }), []);
  return 0 === exports.length ? null : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    className: Chunk673449.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      tag: Chunk481060.RB0.H5,
      className: Chunk673449.title,
      children: Chunk388032.intl.string(Chunk388032.t.aw0GVV)
    }), exports.map(e => (0, r.jsx)(I, {
      account: e,
      handleRefresh: s,
      refreshedAccountIds: n
    }, e.id))]
  })
}