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
  Chunk481060 = require("./481060.js"),
  Chunk287004 = require("./287004.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk70086 = require("./70086.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk753218 = require("./753218.js"),
  Chunk616397 = require("./616397.js");

function p(e) {
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

function m(e, t) {
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

function j(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, s = (0, c.xUy)({
    isSelected: n,
    label: (0, d.Z)(t.kind)
  });
  return (0, r.jsx)(_, {
    badge: t,
    selected: n,
    onClick: i,
    radioProps: s
  })
}

function _(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: s = false,
    onClick: d,
    radioProps: o
  } = e, j = l()(b.pickerItem, {
    [b.pickerItemSelected]: s,
    [g.lockedPickerItem]: n,
    [g.previewBadge]: i
  }), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.v, {
      badge: t.kind,
      width: h.Gg.SIZE_32,
      height: h.Gg.SIZE_32,
      className: g.guildBadge
    }), n && !i && (0, r.jsx)("div", {
      className: g.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: j,
    children: _
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = x.intl.formatToPlainString(f.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(c.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => (0, r.jsx)(c.P3F, m(p({}, e), {
        className: j,
        onClick: () => {
          var t;
          null == d || d(), null == (t = e.onClick) || t.call(e)
        },
        children: _
      }))
    })
  }
  return (0, r.jsx)(c.P3F, m(p({}, o), {
    className: j,
    onClick: d,
    children: _
  }))
}

function k(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: d,
    headingId: u
  } = e, [h, k] = i.useState(false), O = i.useId(), v = (0, c.arW)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), S = !h && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.nn4, {
      id: O,
      children: x.intl.string(x.t["5AQGub"])
    }), (0, r.jsx)("div", m(p({}, v), {
      "aria-describedby": O,
      className: b.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(j, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => d(e.kind)
      }, e.kind))
    })), h && (0, r.jsx)("ul", {
      className: l()(b.pickerGrid, g.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(_, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), S && (0, r.jsxs)("div", {
      className: g.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: b.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(_, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(c.P3F, {
        className: l()(g.showAllBadges, g.showAllBadgesOverlay),
        onClick: () => k(true),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: x.intl.string(f.default["2tkPDw"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), h && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: g.badgesUpsellContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: g.badgesUpsellText,
          children: x.intl.string(f.default.G3qiHh)
        }), (0, r.jsx)(o.P, {
          className: g.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(c.P3F, {
        className: g.hideAllBadges,
        onClick: () => k(false),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: x.intl.string(f.default.idxnf3)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}