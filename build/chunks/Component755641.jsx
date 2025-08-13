/** Chunk was on 5533 **/
/** chunk id: 755641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk70086 = require("./70086.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451140 = require("./451140.js"),
  Chunk8498 = require("./8498.js");

function f(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: l = false,
    onClick: d
  } = e, f = a()(h.pickerItem, {
    [h.pickerItemSelected]: l,
    [p.lockedPickerItem]: n,
    [p.previewBadge]: i
  }), b = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.v, {
      badge: t.kind,
      width: u.Gg.SIZE_32,
      height: u.Gg.SIZE_32,
      className: p.guildBadge
    }), n && !i && (0, r.jsx)("div", {
      className: p.lockIconOverlay,
      children: (0, r.jsx)(s.mBM, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: f,
    children: b
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = g.intl.formatToPlainString(m.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(o.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => {
        var t, n;
        return (0, r.jsx)(o.P3F, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          className: f,
          onClick: () => {
            var t;
            null == d || d(), null == (t = e.onClick) || t.call(e)
          },
          children: b
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
  return (0, r.jsx)(o.P3F, {
    className: f,
    onClick: d,
    children: b
  })
}

function b(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: c
  } = e, [u, b] = i.useState(false), x = !u && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: h.pickerGrid,
      children: [t.unlockedBadges.map(e => (0, r.jsx)(f, {
        badge: e,
        selected: e.kind === l,
        onClick: () => c(e.kind)
      }, e.kind)), u && (0, r.jsx)(r.Fragment, {
        children: t.lockedBadges.map(e => (0, r.jsx)(f, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        }, e.kind))
      })]
    }), x && (0, r.jsxs)("div", {
      className: p.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: h.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(f, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(o.P3F, {
        className: a()(p.showAllBadges, p.showAllBadgesOverlay),
        onClick: () => b(true),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: g.intl.string(m.default["2tkPDw"])
        }), (0, r.jsx)(s.CJ0, {
          size: "sm"
        })]
      })]
    }), u && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: p.badgesUpsellContainer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: p.badgesUpsellText,
          children: g.intl.string(m.default.G3qiHh)
        }), (0, r.jsx)(d.P, {
          className: p.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(o.P3F, {
        className: p.hideAllBadges,
        onClick: () => b(false),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: g.intl.string(m.default.idxnf3)
        }), (0, r.jsx)(s.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}