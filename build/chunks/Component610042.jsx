/** Chunk was on 47841 **/
/** chunk id: 610042, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk477947 = require("./477947.js"),
  Chunk81461 = require("./81461.jsx"),
  Chunk342490 = require("./342490.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690552 = require("./690552.js"),
  Chunk175820 = require("./175820.js");

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

function O(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, l = (0, c.Gx)({
    isSelected: n,
    label: (0, u.A)(t.kind)
  });
  return (0, r.jsx)(v, {
    badge: t,
    selected: n,
    onClick: i,
    radioProps: l
  })
}

function v(e) {
  let {
    badge: t,
    locked: n = false,
    preview: i = false,
    selected: l = false,
    onClick: c,
    radioProps: u
  } = e, m = s()(x.Uh, {
    [x.fT]: l,
    [h.av]: n,
    [h.WZ]: i
  }), O = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.J, {
      badge: t.kind,
      width: p.Sl.SIZE_32,
      height: p.Sl.SIZE_32,
      className: h.n2
    }), n && !i && (0, r.jsx)("div", {
      className: h.py,
      children: (0, r.jsx)(a.LockIcon, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: m,
    children: O
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = b.intl.formatToPlainString(f.default.ECl8SQ, {
      packName: t.packName
    });
    return (0, r.jsx)(o.m, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: (0, r.jsx)(d.DUT, {
        className: m,
        onClick: () => {
          null == c || c()
        },
        children: O
      })
    })
  }
  return (0, r.jsx)(d.DUT, _(j({}, u), {
    className: m,
    onClick: c,
    children: O
  }))
}

function y(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: o,
    headingId: u
  } = e, [g, p] = i.useState(false), y = i.useId(), A = (0, c._u)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), E = !g && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.AC4, {
      id: y,
      children: b.intl.string(b.t["5AQGuZ"])
    }), (0, r.jsx)("div", _(j({}, A), {
      "aria-describedby": y,
      className: x.p3,
      children: t.unlockedBadges.map(e => (0, r.jsx)(O, {
        badge: e,
        isSelected: e.kind === l,
        onClick: () => o(e.kind)
      }, e.kind))
    })), g && (0, r.jsx)("ul", {
      className: s()(x.p3, h.wA),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(v, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), E && (0, r.jsxs)("div", {
      className: h.WC,
      children: [(0, r.jsx)("div", {
        className: x.p3,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(v, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(d.DUT, {
        className: s()(h.ZN, h.n7),
        onClick: () => p(true),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: b.intl.string(f.default["2tkPDy"])
        }), (0, r.jsx)(a.ChevronSmallDownIcon, {
          size: "sm"
        })]
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: h.B7,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: h.XY,
          children: b.intl.string(f.default.G3qiHu)
        }), (0, r.jsx)("div", {
          className: h.WM,
          children: (0, r.jsx)(m.u, {
            onClick: n
          })
        })]
      }), (0, r.jsxs)(d.DUT, {
        className: h.eO,
        onClick: () => p(false),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: b.intl.string(f.default.idxnf7)
        }), (0, r.jsx)(a.ChevronSmallUpIcon, {
          size: "sm"
        })]
      })]
    })]
  })
}