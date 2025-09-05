/** Chunk was on 90746 **/
/** chunk id: 755641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => O
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

function _(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, s = (0, c.jm)({
    isSelected: n,
    label: (0, u.Z)(t.kind)
  });
  return (0, r.jsx)(k, {
    badge: t,
    selected: n,
    onClick: i,
    radioProps: s
  })
}

function k(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: s = false,
    onClick: c,
    radioProps: u
  } = e, h = l()(p.pickerItem, {
    [p.pickerItemSelected]: s,
    [b.lockedPickerItem]: n,
    [b.previewBadge]: i
  }), _ = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.v, {
      badge: t.kind,
      width: f.Gg.SIZE_32,
      height: f.Gg.SIZE_32,
      className: b.guildBadge
    }), n && !i && (0, r.jsx)("div", {
      className: b.lockIconOverlay,
      children: (0, r.jsx)(a.mBM, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: h,
    children: _
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = g.intl.formatToPlainString(x.default.ECl8SU, {
      packName: t.packName
    });
    return (0, r.jsx)(d.ua7, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: e => (0, r.jsx)(d.P3F, j(m({}, e), {
        className: h,
        onClick: () => {
          var t;
          null == c || c(), null == (t = e.onClick) || t.call(e)
        },
        children: _
      }))
    })
  }
  return (0, r.jsx)(d.P3F, j(m({}, u), {
    className: h,
    onClick: c,
    children: _
  }))
}

function O(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: u,
    headingId: o
  } = e, [f, O] = i.useState(false), v = i.useId(), S = (0, c.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: o
  }), N = !f && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.nn4, {
      id: v,
      children: g.intl.string(g.t["5AQGub"])
    }), (0, r.jsx)("div", j(m({}, S), {
      "aria-describedby": v,
      className: p.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(_, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => u(e.kind)
      }, e.kind))
    })), f && (0, r.jsx)("ul", {
      className: l()(p.pickerGrid, b.lockedBadgesSection),
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
        className: p.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(k, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(d.P3F, {
        className: l()(b.showAllBadges, b.showAllBadgesOverlay),
        onClick: () => O(true),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: g.intl.string(x.default["2tkPDw"])
        }), (0, r.jsx)(a.CJ0, {
          size: "sm"
        })]
      })]
    }), f && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: b.badgesUpsellContainer,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: b.badgesUpsellText,
          children: g.intl.string(x.default.G3qiHh)
        }), (0, r.jsx)(h.P, {
          className: b.badgesUpsellButton,
          onClick: n
        })]
      }), (0, r.jsxs)(d.P3F, {
        className: b.hideAllBadges,
        onClick: () => O(false),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: g.intl.string(x.default.idxnf3)
        }), (0, r.jsx)(a.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}