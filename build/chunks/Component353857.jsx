/** Chunk was on 81242 **/
/** chunk id: 353857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287004 = require("./287004.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk465682 = require("./465682.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk766310 = require("./766310.js"),
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

function h(e, t) {
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
    onClick: a
  } = e, s = (0, c.jm)({
    isSelected: n,
    label: (0, u.Z)(t.kind)
  });
  return (0, r.jsx)(k, {
    badge: t,
    selected: n,
    onClick: a,
    radioProps: s
  })
}

function k(e) {
  let {
    badge: t,
    locked: n = false,
    preview: a = false,
    selected: s = false,
    onClick: c,
    radioProps: u
  } = e, m = o()(x.pickerItem, {
    [x.pickerItemSelected]: s,
    [_.lockedPickerItem]: n,
    [_.previewBadge]: a
  }), v = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.v, {
      badge: t.kind,
      width: p.Gg.SIZE_32,
      height: p.Gg.SIZE_32,
      className: _.guildBadge
    }), n && !a && (0, r.jsx)("div", {
      className: _.lockIconOverlay,
      children: (0, r.jsx)(l.mBM, {
        size: "md"
      })
    })]
  });
  if (a) return (0, r.jsx)("div", {
    className: m,
    children: v
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = f.intl.formatToPlainString(b.default.ECl8SQ, {
      packName: t.packName
    });
    return (0, r.jsx)(i.u, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: (0, r.jsx)(d.P3F, {
        className: m,
        onClick: () => {
          null == c || c()
        },
        children: v
      })
    })
  }
  return (0, r.jsx)(d.P3F, h(j({}, u), {
    className: m,
    onClick: c,
    children: v
  }))
}

function C(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: s,
    onBadgeClicked: i,
    headingId: u
  } = e, [g, p] = a.useState(false), C = a.useId(), O = (0, c.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), y = !g && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.nn4, {
      id: C,
      children: f.intl.string(f.t["5AQGuZ"])
    }), (0, r.jsx)("div", h(j({}, O), {
      "aria-describedby": C,
      className: x.pickerGrid,
      children: t.unlockedBadges.map(e => (0, r.jsx)(v, {
        badge: e,
        isSelected: e.kind === s,
        onClick: () => i(e.kind)
      }, e.kind))
    })), g && (0, r.jsx)("ul", {
      className: o()(x.pickerGrid, _.lockedBadgesSection),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(k, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), y && (0, r.jsxs)("div", {
      className: _.lockedPreviewContainer,
      children: [(0, r.jsx)("div", {
        className: x.pickerGrid,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(k, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(d.P3F, {
        className: o()(_.showAllBadges, _.showAllBadgesOverlay),
        onClick: () => p(true),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: f.intl.string(b.default["2tkPDy"])
        }), (0, r.jsx)(l.CJ0, {
          size: "sm"
        })]
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: _.badgesUpsellContainer,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: _.badgesUpsellText,
          children: f.intl.string(b.default.G3qiHu)
        }), (0, r.jsx)("div", {
          className: _.badgesUpsellButton,
          children: (0, r.jsx)(m.v, {
            onClick: n
          })
        })]
      }), (0, r.jsxs)(d.P3F, {
        className: _.hideAllBadges,
        onClick: () => p(false),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          children: f.intl.string(b.default.idxnf7)
        }), (0, r.jsx)(l.u04, {
          size: "sm"
        })]
      })]
    })]
  })
}