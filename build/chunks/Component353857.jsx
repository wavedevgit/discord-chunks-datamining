/** Chunk was on 30378 **/
/** chunk id: 353857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => N
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
  Chunk892803 = require("./892803.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk572073 = require("./572073.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997589 = require("./997589.js"),
  Chunk565744 = require("./565744.js");

function O(e) {
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

function _(e, t) {
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

function v(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, s = (0, d.jm)({
    isSelected: n,
    label: (0, u.Z)(t.kind)
  });
  return (0, r.jsx)(S, {
    badge: t,
    selected: n,
    onClick: i,
    radioProps: s
  })
}

function S(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: s = false,
    onClick: d,
    radioProps: u
  } = e, g = l()(k.pickerItem, {
    [k.pickerItemSelected]: s,
    [j.lockedPickerItem]: n,
    [j.previewBadge]: i
  }), f = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(x.v, {
      badge: t.kind,
      width: b.Gg.SIZE_32,
      height: b.Gg.SIZE_32,
      className: j.guildBadge
    }), n && !i && (0, r.jsx)("div", {
      className: j.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: g,
    children: f
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = h.intl.formatToPlainString(p.default.ECl8SQ, {
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
        children: f
      })
    })
  }
  return (0, r.jsx)(o.P3F, _(O({}, u), {
    className: g,
    onClick: d,
    children: f
  }))
}

function N(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: c,
    headingId: u
  } = e, [x, b] = i.useState(false), N = i.useId(), {
    enabled: y
  } = g.Z.useConfig({
    location: "BadgeGrid"
  }), C = (0, d.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), P = !x && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.nn4, {
      id: N,
      children: h.intl.string(h.t["5AQGuZ"])
    }), (0, r.jsx)("div", _(O({}, C), {
      "aria-describedby": N,
      className: k.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(v, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => c(e.kind)
      }, e.kind))
    })), x && (0, r.jsx)("ul", {
      className: l()(k.pickerGrid, j.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(S, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), P && (0, r.jsxs)("div", {
      className: j.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: k.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(S, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(o.P3F, {
        className: l()(j.showAllBadges, j.showAllBadgesOverlay),
        onClick: () => b(true),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: h.intl.string(p.default["2tkPDy"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), x && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: j.badgesUpsellContainer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: j.badgesUpsellText,
          children: h.intl.string(p.default.G3qiHu)
        }), y ? (0, r.jsx)("div", {
          className: j.badgesUpsellButton,
          children: (0, r.jsx)(f.v, {
            onClick: n
          })
        }) : (0, r.jsx)(m.P, {
          className: j.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(o.P3F, {
        className: j.hideAllBadges,
        onClick: () => b(false),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: h.intl.string(p.default.idxnf7)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}