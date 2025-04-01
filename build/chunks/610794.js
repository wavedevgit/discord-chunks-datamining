/** Chunk was on 13323 **/
n.d(t, {
  Z: () => O
}), n(47120), n(773603);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(780384),
  o = n(481060),
  l = n(457330),
  c = n(410030),
  d = n(726542),
  u = n(275759),
  m = n(231757),
  g = n(888496),
  p = n(706454),
  h = n(553795),
  f = n(63063),
  b = n(981631),
  N = n(856651),
  x = n(388032),
  _ = n(899228);

function E(e) {
  var t;
  let {
    account: n,
    refreshed: a,
    handleRefresh: l
  } = e, [c, d] = i.useState(!1), m = null !== (t = n.metadata) && void 0 !== t ? t : {}, h = (0, s.e7)([p.default], () => p.default.locale), E = i.useCallback(async () => {
    d(!0);
    try {
      await l(n)
    } finally {
      d(!1)
    }
  }, [n, l]), j = null;
  switch (n.type) {
    case b.ABu.REDDIT:
      j = (0, g.oP)(m, _.metadataItem);
      break;
    case b.ABu.STEAM:
      j = (0, g.Dq)(m, _.metadataItem);
      break;
    case b.ABu.TWITTER:
      j = (0, g.rJ)(m, _.metadataItem);
      break;
    case b.ABu.EBAY:
      j = (0, g.ul)(m, _.metadataItem);
      break;
    case b.ABu.PAYPAL:
      j = (0, g.li)(m, _.metadataItem);
      break;
    case b.ABu.TIKTOK:
      j = (0, g.hf)(m, _.metadataItem)
  }
  let O = (0, u.FI)(m[N.PC.CREATED_AT], h),
    C = null,
    v = x.NW.string(x.t.wzzjk5);
  return (null == j || 0 === j.length) && null == O && (C = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "header-secondary",
    children: x.NW.format(x.t.Up2ni4, {
      helpdeskUrl: f.Z.getArticleURL(b.BhN.CONNECTION_DETAILS)
    })
  }, "label"), v = x.NW.string(x.t["LVh3//"])), a && (v = x.NW.string(x.t.i4jeWV)), (0, r.jsxs)("div", {
    className: _.metadataContainer,
    children: [C, null == j ? void 0 : j.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < j.length - 1 ? (0, r.jsx)("span", {
        className: _.dot
      }) : null]
    })), null != j && j.length > 0 && null != O ? (0, r.jsx)("div", {
      className: _.dot
    }) : null, null != O ? (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: x.NW.format(x.t["9rfonp"], {
        date: O
      })
    }, "member-since") : null, (0, r.jsx)(o.zxk, {
      className: _.metadataRefreshButton,
      look: o.zxk.Looks.OUTLINED,
      color: a ? o.zxk.Colors.GREEN : o.zxk.Colors.PRIMARY,
      size: o.zxk.Sizes.MIN,
      submitting: c,
      disabled: a,
      "aria-label": x.NW.string(x.t.sCkLYG),
      onClick: a ? void 0 : E,
      children: v
    }, "refresh-button")]
  })
}

function j(e) {
  let {
    account: t,
    handleRefresh: n,
    refreshedAccountIds: s
  } = e, [u, g] = i.useState(t.visibility), [p, h] = i.useState(t.metadataVisibility), f = (0, c.ZP)();
  i.useEffect(() => {
    g(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let b = d.Z.get(t.type),
    N = !0 === b.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: _.activityRow,
      children: [(0, r.jsx)("img", {
        alt: b.name,
        className: _.connectionIcon,
        src: (0, a.wj)(f) ? b.icon.darkSVG : b.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: _.activitySettings,
        children: [(0, r.jsxs)(o.j7V, {
          className: _.visibilitySwitch,
          hideBorder: !0,
          value: 1 === u,
          onChange: function(e) {
            let {
              verified: n
            } = t, r = +!!e;
            if (e && !n) {
              g(r), (0, m.Z)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            g(r), l.Z.setVisibility(t.type, t.id, r)
          },
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: b.name
          }), N && (0, r.jsx)(E, {
            account: t,
            refreshed: s.includes(t.id),
            handleRefresh: n
          })]
        }), N && (0, r.jsx)(o.j7V, {
          className: _.additionalDetailsSwitch,
          hideBorder: !0,
          disabled: 1 !== u || null == t.metadata,
          value: 1 === p,
          onChange: function(e) {
            let {
              verified: n
            } = t, r = +!!e;
            if (e && !n) {
              h(r), (0, m.Z)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            h(r), l.Z.setMetadataVisibility(t.type, t.id, r)
          },
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: x.NW.string(x.t["3l78ws"])
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: _.divider
    })]
  })
}

function O() {
  let e = (0, s.e7)([h.Z], () => h.Z.getAccounts()),
    t = i.useMemo(() => e.filter(e => d.Z.isSupported(e.type)), [e]),
    [n, a] = i.useState([]),
    c = i.useCallback(e => l.Z.refresh(e.type, e.id).finally(() => {
      a(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsxs)(o.hjN, {
    className: _.container,
    children: [(0, r.jsx)(o.vwX, {
      tag: o.RB0.H5,
      className: _.title,
      children: x.NW.string(x.t.aw0GVV)
    }), t.map(e => (0, r.jsx)(j, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))]
  })
}