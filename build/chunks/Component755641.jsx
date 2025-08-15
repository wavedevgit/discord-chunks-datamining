/** Chunk was on 42926 **/
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

function m(e) {
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

function b(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: s
  } = e, i = (0, c.xUy)({
    isSelected: n,
    label: (0, u.Z)(t.kind)
  });
  return (0, r.jsx)(O, {
    badge: t,
    selected: n,
    onClick: s,
    radioProps: i
  })
}

function O(e) {
  let {
    badge: t,
    locked: n = false,
    preview: s = false,
    selected: i = false,
    onClick: u,
    radioProps: o
  } = e, b = l()(f.pickerItem, {
    [f.pickerItemSelected]: i,
    [p.lockedPickerItem]: n,
    [p.previewBadge]: s
  }), O = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.v, {
      badge: t.kind,
      width: g.Gg.SIZE_32,
      height: g.Gg.SIZE_32,
      className: p.guildBadge
    }), n && !s && (0, r.jsx)("div", {
      className: p.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (s) return (0, r.jsx)("div", {
    className: b,
    children: O
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = x.intl.formatToPlainString(h.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(c.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => (0, r.jsx)(c.P3F, j(m({}, e), {
        className: b,
        onClick: () => {
          var t;
          null == u || u(), null == (t = e.onClick) || t.call(e)
        },
        children: O
      }))
    })
  }
  return (0, r.jsx)(c.P3F, j(m({}, o), {
    className: b,
    onClick: u,
    children: O
  }))
}

function k(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: i,
    onBadgeClicked: u,
    headingId: d
  } = e, [g, k] = s.useState(false), _ = s.useId(), v = (0, c.arW)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: d
  }), N = !g && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.nn4, {
      id: _,
      children: x.intl.string(x.t["5AQGub"])
    }), (0, r.jsx)("div", j(m({}, v), {
      "aria-describedby": _,
      className: f.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(b, {
        badge: e,
        isSelected: e.kind === i,
        onClick: () => u(e.kind)
      }, e.kind))
    })), g && (0, r.jsx)("ul", {
      className: l()(f.pickerGrid, p.lockedBadgesSection),
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
        className: f.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(O, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(c.P3F, {
        className: l()(p.showAllBadges, p.showAllBadgesOverlay),
        onClick: () => k(true),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: x.intl.string(h.default["2tkPDw"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: p.badgesUpsellContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: p.badgesUpsellText,
          children: x.intl.string(h.default.G3qiHh)
        }), (0, r.jsx)(o.P, {
          className: p.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(c.P3F, {
        className: p.hideAllBadges,
        onClick: () => k(false),
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: x.intl.string(h.default.idxnf3)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}