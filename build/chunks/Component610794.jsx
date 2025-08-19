/** Chunk was on 66181 **/
/** chunk id: 610794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function C(e) {
  var t;
  let {
    account: n,
    refreshed: a,
    handleRefresh: c
  } = e, [d, u] = r.useState(false), p = null != (t = n.metadata) ? t : {}, f = (0, s.e7)([h.default], () => h.default.locale), C = r.useCallback(async () => {
    u(true);
    try {
      await c(n)
    } finally {
      u(false)
    }
  }, [n, c]), O = null;
  switch (n.type) {
    case x.ABu.REDDIT:
      O = (0, g.oP)(p, E.metadataItem);
      break;
    case x.ABu.STEAM:
      O = (0, g.Dq)(p, E.metadataItem);
      break;
    case x.ABu.TWITTER:
      O = (0, g.rJ)(p, E.metadataItem);
      break;
    case x.ABu.EBAY:
      O = (0, g.ul)(p, E.metadataItem);
      break;
    case x.ABu.PAYPAL:
      O = (0, g.li)(p, E.metadataItem);
      break;
    case x.ABu.TIKTOK:
      O = (0, g.hf)(p, E.metadataItem)
  }
  let v = (0, m.FI)(p[_.PC.CREATED_AT], f),
    S = null,
    T = j.intl.string(j.t.wzzjk5);
  return (null == O || 0 === O.length) && null == v && (S = (0, i.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "header-secondary",
    children: j.intl.format(j.t.Up2ni4, {
      helpdeskUrl: b.Z.getArticleURL(x.BhN.CONNECTION_DETAILS)
    })
  }, "label"), T = j.intl.string(j.t["LVh3//"])), a && (T = j.intl.string(j.t.i4jeWV)), (0, i.jsxs)("div", {
    className: E.metadataContainer,
    children: [S, null == O ? true : O.map((e, t) => (0, i.jsxs)(i.Fragment, {
      children: [e, t < O.length - 1 ? (0, i.jsx)("span", {
        className: E.dot
      }) : null]
    })), null != O && O.length > 0 && null != v ? (0, i.jsx)("div", {
      className: E.dot
    }) : null, null != v ? (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: j.intl.format(j.t["9rfonp"], {
        date: v
      })
    }, "member-since") : null, (0, i.jsx)(l.zx, {
      className: E.metadataRefreshButton,
      look: l.zx.Looks.OUTLINED,
      color: a ? l.zx.Colors.GREEN : l.zx.Colors.PRIMARY,
      size: l.zx.Sizes.MIN,
      submitting: d,
      disabled: a,
      "aria-label": j.intl.string(j.t.sCkLYG),
      onClick: a ? true : C,
      children: T
    }, "refresh-button")]
  })
}

function O(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: s
  } = e, [l, m] = r.useState(t.visibility), [g, h] = r.useState(t.metadataVisibility), f = (0, d.ZP)();
  r.useEffect(() => {
    m(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let b = u.Z.get(t.type),
    x = true === b.hasMetadata;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: E.activityRow,
      children: [(0, i.jsx)("img", {
        alt: b.name,
        className: E.connectionIcon,
        src: (0, a.wj)(f) ? b.icon.darkSVG : b.icon.lightSVG
      }), (0, i.jsxs)("div", {
        className: E.activitySettings,
        children: [(0, i.jsxs)(o.j7V, {
          className: E.visibilitySwitch,
          hideBorder: true,
          value: 1 === l,
          onChange: function(e) {
            let {
              verified: n
            } = t, i = +!!e;
            if (e && !n) {
              m(i), (0, p.Z)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            m(i), c.Z.setVisibility(t.type, t.id, i)
          },
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: b.name
          }), x && (0, i.jsx)(C, {
            account: t,
            refreshed: s.includes(t.id),
            handleRefresh: n
          })]
        }), x && (0, i.jsx)(o.j7V, {
          className: E.additionalDetailsSwitch,
          hideBorder: true,
          disabled: 1 !== l || null == t.metadata,
          value: 1 === g,
          onChange: function(e) {
            let {
              verified: n
            } = t, i = +!!e;
            if (e && !n) {
              h(i), (0, p.Z)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            h(i), c.Z.setMetadataVisibility(t.type, t.id, i)
          },
          children: (0, i.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: j.intl.string(j.t["3l78ws"])
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      className: E.divider
    })]
  })
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    t = Chunk647438.useMemo(() => module.filter(e => u.Z.isSupported(e.type)), [module]),
    [n, a] = Chunk647438.useState([]),
    l = Chunk647438.useCallback(e => c.Z.refresh(e.type, e.id).finally(() => {
      a(t => [...t, e.id])
    }), []);
  return 0 === exports.length ? null : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    className: Chunk673449.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      tag: Chunk481060.RB0.H5,
      className: Chunk673449.title,
      children: Chunk388032.intl.string(Chunk388032.t.aw0GVV)
    }), exports.map(e => (0, i.jsx)(O, {
      account: e,
      handleRefresh: l,
      refreshedAccountIds: n
    }, e.id))]
  })
}