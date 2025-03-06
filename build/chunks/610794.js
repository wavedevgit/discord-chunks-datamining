/** Chunk was on 51724 **/
n.d(t, {
  Z: () => C
}), n(47120), n(773603);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(780384),
  l = n(481060),
  o = n(457330),
  c = n(410030),
  d = n(726542),
  u = n(275759),
  m = n(231757),
  p = n(888496),
  g = n(706454),
  h = n(553795),
  f = n(63063),
  x = n(981631),
  b = n(856651),
  N = n(388032),
  _ = n(113831);

function E(e) {
  var t;
  let {
    account: n,
    refreshed: a,
    handleRefresh: o
  } = e, [c, d] = i.useState(!1), m = null !== (t = n.metadata) && void 0 !== t ? t : {}, h = (0, s.e7)([g.default], () => g.default.locale), E = i.useCallback(async () => {
    d(!0);
    try {
      await o(n)
    } finally {
      d(!1)
    }
  }, [n, o]), j = null;
  switch (n.type) {
    case x.ABu.REDDIT:
      j = (0, p.oP)(m, _.metadataItem);
      break;
    case x.ABu.STEAM:
      j = (0, p.Dq)(m, _.metadataItem);
      break;
    case x.ABu.TWITTER:
      j = (0, p.rJ)(m, _.metadataItem);
      break;
    case x.ABu.EBAY:
      j = (0, p.ul)(m, _.metadataItem);
      break;
    case x.ABu.PAYPAL:
      j = (0, p.li)(m, _.metadataItem);
      break;
    case x.ABu.TIKTOK:
      j = (0, p.hf)(m, _.metadataItem)
  }
  let C = (0, u.FI)(m[b.PC.CREATED_AT], h),
    O = null,
    v = N.NW.string(N.t.wzzjk5);
  return (null == j || 0 === j.length) && null == C && (O = (0, r.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: "header-secondary",
    children: N.NW.format(N.t.Up2ni4, {
      helpdeskUrl: f.Z.getArticleURL(x.BhN.CONNECTION_DETAILS)
    })
  }, "label"), v = N.NW.string(N.t["LVh3//"])), a && (v = N.NW.string(N.t.i4jeWV)), (0, r.jsxs)("div", {
    className: _.metadataContainer,
    children: [O, null == j ? void 0 : j.map((e, t) => (0, r.jsxs)(r.Fragment, {
      children: [e, t < j.length - 1 ? (0, r.jsx)("span", {
        className: _.dot
      }) : null]
    })), null != j && j.length > 0 && null != C ? (0, r.jsx)("div", {
      className: _.dot
    }) : null, null != C ? (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: N.NW.format(N.t["9rfonp"], {
        date: C
      })
    }, "member-since") : null, (0, r.jsx)(l.zxk, {
      className: _.metadataRefreshButton,
      look: l.zxk.Looks.OUTLINED,
      color: a ? l.zxk.Colors.GREEN : l.zxk.Colors.PRIMARY,
      size: l.zxk.Sizes.MIN,
      submitting: c,
      disabled: a,
      "aria-label": N.NW.string(N.t.sCkLYG),
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
  } = e, [u, p] = i.useState(t.visibility), [g, h] = i.useState(t.metadataVisibility), f = (0, c.ZP)();
  i.useEffect(() => {
    p(t.visibility), h(t.metadataVisibility)
  }, [t]);
  let x = d.Z.get(t.type),
    b = !0 === x.hasMetadata;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: _.activityRow,
      children: [(0, r.jsx)("img", {
        alt: x.name,
        className: _.connectionIcon,
        src: (0, a.wj)(f) ? x.icon.darkSVG : x.icon.lightSVG
      }), (0, r.jsxs)("div", {
        className: _.activitySettings,
        children: [(0, r.jsxs)(l.j7V, {
          className: _.visibilitySwitch,
          hideBorder: !0,
          value: 1 === u,
          onChange: function(e) {
            let {
              verified: n
            } = t, r = +!!e;
            if (e && !n) {
              p(r), (0, m.Z)({
                platformType: t.type,
                location: "User Settings"
              });
              return
            }
            p(r), o.Z.setVisibility(t.type, t.id, r)
          },
          children: [(0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: x.name
          }), b && (0, r.jsx)(E, {
            account: t,
            refreshed: s.includes(t.id),
            handleRefresh: n
          })]
        }), b && (0, r.jsx)(l.j7V, {
          className: _.additionalDetailsSwitch,
          hideBorder: !0,
          disabled: 1 !== u || null == t.metadata,
          value: 1 === g,
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
            h(r), o.Z.setMetadataVisibility(t.type, t.id, r)
          },
          children: (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: N.NW.string(N.t["3l78ws"])
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: _.divider
    })]
  })
}

function C() {
  let e = (0, s.e7)([h.Z], () => h.Z.getAccounts()),
    t = i.useMemo(() => e.filter(e => d.Z.isSupported(e.type)), [e]),
    [n, a] = i.useState([]),
    c = i.useCallback(e => o.Z.refresh(e.type, e.id).finally(() => {
      a(t => [...t, e.id])
    }), []);
  return 0 === t.length ? null : (0, r.jsxs)(l.hjN, {
    className: _.container,
    children: [(0, r.jsx)(l.vwX, {
      tag: l.RB0.H5,
      className: _.title,
      children: N.NW.string(N.t.aw0GVV)
    }), t.map(e => (0, r.jsx)(j, {
      account: e,
      handleRefresh: c,
      refreshedAccountIds: n
    }, e.id))]
  })
}