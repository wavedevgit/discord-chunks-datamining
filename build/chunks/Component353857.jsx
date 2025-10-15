/** Chunk was on 30378 **/
/** chunk id: 353857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287004 = require("./287004.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk234786 = require("./234786.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978098 = require("./978098.js"),
  Chunk764009 = require("./764009.js");

function j(e) {
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

function O(e, t) {
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
    onClick: s
  } = e, i = (0, d.jm)({
    isSelected: n,
    label: (0, u.Z)(t.kind)
  });
  return (0, r.jsx)(k, {
    badge: t,
    selected: n,
    onClick: s,
    radioProps: i
  })
}

function k(e) {
  let {
    badge: t,
    locked: n = false,
    preview: s = false,
    selected: i = false,
    onClick: d,
    radioProps: u
  } = e, g = l()(h.pickerItem, {
    [h.pickerItemSelected]: i,
    [b.lockedPickerItem]: n,
    [b.previewBadge]: s
  }), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x.v, {
      badge: t.kind,
      width: f.Gg.SIZE_32,
      height: f.Gg.SIZE_32,
      className: b.guildBadge
    }), n && !s && (0, r.jsx)("div", {
      className: b.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (s) return (0, r.jsx)("div", {
    className: g,
    children: _
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = p.intl.formatToPlainString(m.default.ECl8SQ, {
      packName: t.packName
    });
    return (0, r.jsx)(c.u, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: (0, r.jsx)(o.P3F, {
        className: g,
        onClick: () => {
          null == d || d()
        },
        children: _
      })
    })
  }
  return (0, r.jsx)(o.P3F, O(j({}, u), {
    className: g,
    onClick: d,
    children: _
  }))
}

function v(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: i,
    onBadgeClicked: c,
    headingId: u
  } = e, [x, f] = s.useState(false), v = s.useId(), S = (0, d.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), N = !x && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.nn4, {
      id: v,
      children: p.intl.string(p.t["5AQGuZ"])
    }), (0, r.jsx)("div", O(j({}, S), {
      "aria-describedby": v,
      className: h.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(_, {
        badge: e,
        isSelected: e.kind === i,
        onClick: () => c(e.kind)
      }, e.kind))
    })), x && (0, r.jsx)("ul", {
      className: l()(h.pickerGrid, b.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(k, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), N && (0, r.jsxs)("div", {
      className: b.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: h.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(k, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(o.P3F, {
        className: l()(b.showAllBadges, b.showAllBadgesOverlay),
        onClick: () => f(true),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: p.intl.string(m.default["2tkPDy"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), x && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: b.badgesUpsellContainer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: b.badgesUpsellText,
          children: p.intl.string(m.default.G3qiHu)
        }), (0, r.jsx)(g.P, {
          className: b.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(o.P3F, {
        className: b.hideAllBadges,
        onClick: () => f(false),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: p.intl.string(m.default.idxnf7)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}