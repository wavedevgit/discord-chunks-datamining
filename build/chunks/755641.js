/** Chunk was on 59256 **/
n.d(t, {
  g: () => h
}), n(388685);
var r = n(255367),
  o = n(73800),
  l = n(120356),
  a = n.n(l),
  s = n(657707),
  i = n(481060),
  c = n(510918),
  u = n(70086),
  d = n(131085),
  p = n(195196),
  f = n(388032),
  m = n(549405),
  b = n(602268);

function g(e) {
  let {
    badge: t,
    locked: n = !1,
    preview: o = !1,
    selected: l = !1,
    onClick: u
  } = e, g = a()(b.pickerItem, {
    [b.pickerItemSelected]: l,
    [m.lockedPickerItem]: n,
    [m.previewBadge]: o
  }), h = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.v, {
      badge: t.kind,
      width: d.Gg.SIZE_32,
      height: d.Gg.SIZE_32,
      className: m.guildBadge
    }), n && !o && (0, r.jsx)("div", {
      className: m.lockIconOverlay,
      children: (0, r.jsx)(s.mBM, {
        size: "md"
      })
    })]
  });
  if (o) return (0, r.jsx)("div", {
    className: g,
    children: h
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = f.intl.formatToPlainString(p.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(i.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => {
        var t, n;
        return (0, r.jsx)(i.P3F, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          className: g,
          onClick: () => {
            var t;
            null == u || u(), null == (t = e.onClick) || t.call(e)
          },
          children: h
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  }
  return (0, r.jsx)(i.P3F, {
    className: g,
    onClick: u,
    children: h
  })
}

function h(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: c
  } = e, [d, h] = o.useState(!1), _ = !d && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: b.pickerGrid,
      children: [t.unlockedBadges.map(e => (0, r.jsx)(g, {
        badge: e,
        selected: e.kind === l,
        onClick: () => c(e.kind)
      }, e.kind)), d && (0, r.jsx)(r.Fragment, {
        children: t.lockedBadges.map(e => (0, r.jsx)(g, {
          locked: !0,
          badge: e,
          onClick: () => null == n ? void 0 : n()
        }, e.kind))
      })]
    }), _ && (0, r.jsxs)("div", {
      className: m.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: b.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(g, {
          locked: !0,
          preview: !0,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(i.P3F, {
        className: a()(m.showAllBadges, m.showAllBadgesOverlay),
        onClick: () => h(!0),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: f.intl.string(p.default["2tkPDw"])
        }), (0, r.jsx)(s.CJ0, {
          size: "sm"
        })]
      })]
    }), d && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: m.badgesUpsellContainer,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: m.badgesUpsellText,
          children: f.intl.string(p.default.G3qiHh)
        }), (0, r.jsx)(u.P, {
          className: m.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(i.P3F, {
        className: m.hideAllBadges,
        onClick: () => h(!1),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: f.intl.string(p.default.idxnf3)
        }), (0, r.jsx)(s.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}