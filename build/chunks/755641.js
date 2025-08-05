/** Chunk was on 59256 **/
n.d(t, {
  g: () => _
}), n(388685);
var r = n(255367),
  o = n(73800),
  l = n(120356),
  s = n.n(l),
  a = n(657707),
  i = n(481060),
  c = n(510918),
  d = n(70086),
  u = n(131085),
  p = n(195196),
  m = n(388032),
  f = n(549405),
  g = n(602268);

function b(e) {
  let {
    badge: t,
    locked: n = !1,
    preview: o = !1,
    selected: l = !1,
    onClick: d
  } = e, p = s()(g.pickerItem, {
    [g.pickerItemSelected]: l,
    [f.lockedPickerItem]: n,
    [f.previewBadge]: o
  }), m = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.v, {
      badge: t,
      width: u.Gg.SIZE_32,
      height: u.Gg.SIZE_32,
      className: f.guildBadge
    }), n && !o && (0, r.jsx)("div", {
      className: f.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  return o ? (0, r.jsx)("div", {
    className: p,
    children: m
  }) : (0, r.jsx)(i.P3F, {
    className: p,
    onClick: d,
    children: m
  })
}

function _(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: c
  } = e, [u, _] = o.useState(!1), h = !u && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: g.pickerGrid,
      children: [t.unlockedBadges.map(e => (0, r.jsx)(b, {
        badge: e,
        selected: e === l,
        onClick: () => c(e)
      }, e)), u && (0, r.jsx)(r.Fragment, {
        children: t.lockedBadges.map(e => (0, r.jsx)(b, {
          locked: !0,
          badge: e,
          onClick: () => null == n ? void 0 : n()
        }, e))
      })]
    }), h && (0, r.jsxs)("div", {
      className: f.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: g.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(b, {
          locked: !0,
          preview: !0,
          badge: e
        }, e))
      }), (0, r.jsxs)(i.P3F, {
        className: s()(f.showAllBadges, f.showAllBadgesOverlay),
        onClick: () => _(!0),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: m.intl.string(p.default["2tkPDw"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), u && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: f.badgesUpsellContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: f.badgesUpsellText,
          children: m.intl.string(p.default.G3qiHh)
        }), (0, r.jsx)(d.P, {
          className: f.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(i.P3F, {
        className: f.hideAllBadges,
        onClick: () => _(!1),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: m.intl.string(p.default.idxnf3)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}