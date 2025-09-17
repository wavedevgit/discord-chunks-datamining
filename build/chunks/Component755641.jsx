/** Chunk was on 90746 **/
/** chunk id: 755641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287004 = require("./287004.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk70086 = require("./70086.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk272909 = require("./272909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk489416 = require("./489416.js"),
  Chunk887935 = require("./887935.js");

function h(e) {
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
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, s = (0, c.jm)({
    isSelected: n,
    label: (0, o.Z)(t.kind)
  });
  return (0, r.jsx)(O, {
    badge: t,
    selected: n,
    onClick: i,
    radioProps: s
  })
}

function O(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: s = false,
    onClick: c,
    radioProps: o
  } = e, x = l()(b.pickerItem, {
    [b.pickerItemSelected]: s,
    [p.lockedPickerItem]: n,
    [p.previewBadge]: i
  }), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.v, {
      badge: t.kind,
      width: g.Gg.SIZE_32,
      height: g.Gg.SIZE_32,
      className: p.guildBadge
    }), n && !i && (0, r.jsx)("div", {
      className: p.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: x,
    children: _
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = m.intl.formatToPlainString(f.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(d.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => (0, r.jsx)(d.P3F, j(h({}, e), {
        className: x,
        onClick: () => {
          var t;
          null == c || c(), null == (t = e.onClick) || t.call(e)
        },
        children: _
      }))
    })
  }
  return (0, r.jsx)(d.P3F, j(h({}, o), {
    className: x,
    onClick: c,
    children: _
  }))
}

function k(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: o,
    headingId: u
  } = e, [g, k] = i.useState(false), v = i.useId(), S = (0, c.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), N = !g && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.nn4, {
      id: v,
      children: m.intl.string(m.t["5AQGub"])
    }), (0, r.jsx)("div", j(h({}, S), {
      "aria-describedby": v,
      className: b.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(_, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => o(e.kind)
      }, e.kind))
    })), g && (0, r.jsx)("ul", {
      className: l()(b.pickerGrid, p.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(O, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), N && (0, r.jsxs)("div", {
      className: p.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: b.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(O, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(d.P3F, {
        className: l()(p.showAllBadges, p.showAllBadgesOverlay),
        onClick: () => k(true),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: m.intl.string(f.default["2tkPDw"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: p.badgesUpsellContainer,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: p.badgesUpsellText,
          children: m.intl.string(f.default.G3qiHh)
        }), (0, r.jsx)(x.P, {
          className: p.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(d.P3F, {
        className: p.hideAllBadges,
        onClick: () => k(false),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: m.intl.string(f.default.idxnf3)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}