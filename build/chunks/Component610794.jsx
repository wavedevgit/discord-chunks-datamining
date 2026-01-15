/** Chunk was on web.js **/
/** chunk id: 610794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
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
  Chunk649324 = require("./649324.js");

function O(e) {
  var t;
  let {
    account: n,
    refreshed: o,
    handleRefresh: l
  } = e, [c, u] = i.useState(false), f = null != (t = n.metadata) ? t : {}, h = (0, a.e7)([_.default], () => _.default.locale), O = i.useCallback(async () => {
    u(true);
    try {
      await l(n)
    } finally {
      u(false)
    }
  }, [n, l]), v = null;
  switch (n.type) {
    case g.ABu.REDDIT:
      v = (0, p.oP)(f, y.metadataItem);
      break;
    case g.ABu.STEAM:
      v = (0, p.Dq)(f, y.metadataItem);
      break;
    case g.ABu.TWITTER:
      v = (0, p.rJ)(f, y.metadataItem);
      break;
    case g.ABu.EBAY:
      v = (0, p.ul)(f, y.metadataItem);
      break;
    case g.ABu.PAYPAL:
      v = (0, p.li)(f, y.metadataItem);
      break;
    case g.ABu.TIKTOK:
      v = (0, p.hf)(f, y.metadataItem)
  }
  let S = (0, d.FI)(f[E.PC.CREATED_AT], h),
    I = null,
    T = b.intl.string(b.t.wzzjk9);
  return (null == v || 0 === v.length) && null == S && (I = (0, r.jsx)(s.Text, {
    variant: "text-xs/normal",
    color: "text-default",
    children: b.intl.format(b.t.Up2ni7, {
      helpdeskUrl: m.Z.getArticleURL(g.BhN.CONNECTION_DETAILS)
    })
  }, "label"), T = b.intl.string(b.t["LVh3/5"])), o && (T = b.intl.string(b.t.i4jeWR)), (0, r.jsxs)("div", {
    className: y.metadataContainer,
    children: [I, null == v ? true : v.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < v.length - 1 ? (0, r.jsx)("span", {
        className: y.dot
      }) : null]
    })), null != v && v.length > 0 && null != S ? (0, r.jsx)("div", {
      className: y.dot
    }) : null, null != S ? (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: b.intl.format(b.t["9rfonh"], {
        date: S
      })
    }, "member-since") : null, (0, r.jsx)("div", {
      className: y.metadataRefreshButton,
      children: (0, r.jsx)(s.Button, {
        size: "sm",
        variant: o ? "active" : "secondary",
        loading: c,
        disabled: o,
        "aria-label": b.intl.string(b.t.sCkLYH),
        onClick: O,
        text: T
      }, "refresh-button")
    })]
  })
}

function v(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: a
  } = e, [d, p] = i.useState(t.visibility), [_, h] = i.useState(t.metadataVisibility), m = (0, c.ZP)();

  function g(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      p(r), (0, f.Z)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    p(r), l.Z.setVisibility(t.type, t.id, r)
  }

  function E(e) {
    let {
      verified: n
    } = t, r = +!!e;
    if (e && !n) {
      h(r), (0, f.Z)({
        platformType: t.type,
        location: "User Settings"
      });
      return
    }
    h(r), l.Z.setMetadataVisibility(t.type, t.id, r)
  }
  i.useEffect(() => {
    p(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let v = u.Z.get(t.type),
    S = true === v.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: y.activityRow,
      children: [(0, r.jsx)("img", {
        alt: v.name,
        className: y.connectionIcon,
        src: (0, o.wj)(m) ? v.icon.darkSVG : v.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: y.activitySettings,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(s.rsf, {
            checked: 1 === d,
            onChange: g,
            label: v.name
          }), S && (0, r.jsx)(O, {
            account: t,
            refreshed: a.includes(t.id),
            handleRefresh: n
          })]
        }), S && (0, r.jsx)(s.rsf, {
          disabled: 1 !== d || null == t.metadata,
          checked: 1 === _,
          onChange: E,
          label: b.intl.string(b.t["3l78wo"])
        })]
      })]
    }), (0, r.jsx)(s.izJ, {})]
  })
}

function S() {
  let e = (0, a.e7)([h.Z], () => h.Z.getAccounts()),
    t = i.useMemo(() => e.filter(e => u.Z.isSupported(e.type)), [e]),
    [n, o] = i.useState([]),
    c = i.useCallback(e => l.Z.refresh(e.type, e.id).finally(() => {
      o(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsx)(s.C3N, {
    className: y.container,
    label: b.intl.string(b.t.aw0GVS),
    children: t.map(e => (0, r.jsx)(v, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))
  })
}