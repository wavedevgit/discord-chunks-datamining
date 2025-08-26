/** Chunk was on 42926 **/
/** chunk id: 755641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287004 = require("./287004.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk70086 = require("./70086.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk753218 = require("./753218.js"),
  Chunk616397 = require("./616397.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: r
  } = e, s = (0, c.xUy)({
    isSelected: n,
    label: (0, d.Z)(t.kind)
  });
  return (0, i.jsx)(k, {
    badge: t,
    selected: n,
    onClick: r,
    radioProps: s
  })
}

function k(e) {
  let {
    badge: t,
    locked: n = false,
    preview: r = false,
    selected: s = false,
    onClick: d,
    radioProps: o
  } = e, j = l()(b.pickerItem, {
    [b.pickerItemSelected]: s,
    [x.lockedPickerItem]: n,
    [x.previewBadge]: r
  }), k = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.v, {
      badge: t.kind,
      width: h.Gg.SIZE_32,
      height: h.Gg.SIZE_32,
      className: x.guildBadge
    }), n && !r && (0, i.jsx)("div", {
      className: x.lockIconOverlay,
      children: (0, i.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (r) return (0, i.jsx)("div", {
    className: j,
    children: k
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = p.intl.formatToPlainString(g.default.ECl8SU, {
      packName: t.packName
    });
    return (0, i.jsx)(c.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => (0, i.jsx)(c.P3F, m(f({}, e), {
        className: j,
        onClick: () => {
          var t;
          null == d || d(), null == (t = e.onClick) || t.call(e)
        },
        children: k
      }))
    })
  }
  return (0, i.jsx)(c.P3F, m(f({}, o), {
    className: j,
    onClick: d,
    children: k
  }))
}

function O(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: d,
    headingId: u
  } = e, [h, O] = r.useState(false), v = r.useId(), _ = (0, c.arW)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), S = !h && t.lockedBadges.length > 0;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(c.nn4, {
      id: v,
      children: p.intl.string(p.t["5AQGub"])
    }), (0, i.jsx)("div", m(f({}, _), {
      "aria-describedby": v,
      className: b.pickerGrid,
      children: t.unlockedBadges.map(e => (0, i.jsx)(j, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => d(e.kind)
      }, e.kind))
    })), h && (0, i.jsx)("ul", {
      className: l()(b.pickerGrid, x.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, i.jsx)("li", {
        children: (0, i.jsx)(k, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), S && (0, i.jsxs)("div", {
      className: x.lockedPreviewContainer,
      children: [(0, i.jsx)("div", {
        className: b.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, i.jsx)(k, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, i.jsxs)(c.P3F, {
        className: l()(x.showAllBadges, x.showAllBadgesOverlay),
        onClick: () => O(true),
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: p.intl.string(g.default["2tkPDw"])
        }), (0, i.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), h && (0, i.jsxs)(i.Fragment, {
      children: [null != n && (0, i.jsxs)("div", {
        className: x.badgesUpsellContainer,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: x.badgesUpsellText,
          children: p.intl.string(g.default.G3qiHh)
        }), (0, i.jsx)(o.P, {
          className: x.badgesUpsellButton,
          onClick: n
        })]
      }), (0, i.jsxs)(c.P3F, {
        className: x.hideAllBadges,
        onClick: () => O(false),
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: p.intl.string(g.default.idxnf3)
        }), (0, i.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}