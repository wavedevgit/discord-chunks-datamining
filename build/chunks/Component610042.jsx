/** Chunk was on 47841 **/
/** chunk id: 610042, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => A
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

function y(e) {
  let {
    badge: t,
    isSelected: n,
    onClick: i
  } = e, l = (0, o.Gx)({
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
    onClick: o,
    radioProps: u
  } = e, g = s()(h.Uh, {
    [h.fT]: l,
    [x.av]: n,
    [x.WZ]: i
  }), y = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.J, {
      badge: t.kind,
      width: b.Sl.SIZE_32,
      height: b.Sl.SIZE_32,
      className: x.n2
    }), n && !i && (0, r.jsx)("div", {
      className: x.py,
      children: (0, r.jsx)(a.LockIcon, {
        size: "md"
      })
    })]
  });
  if (i) return (0, r.jsx)("div", {
    className: g,
    children: y
  });
  if (n && null != t.packName && "" !== t.packName) {
    let e = p.intl.formatToPlainString(m.default.ECl8SQ, {
      packName: t.packName
    });
    return (0, r.jsx)(c.m, {
      delay: 100,
      text: e,
      "aria-label": e,
      children: (0, r.jsx)(d.DUT, {
        className: g,
        onClick: () => {
          null == o || o()
        },
        children: y
      })
    })
  }
  return (0, r.jsx)(d.DUT, O(j({}, u), {
    className: g,
    onClick: o,
    children: y
  }))
}

function A(e) {
  let {
    badgeCollection: t,
    handleBoostUpsellClick: n,
    selectedBadge: l,
    onBadgeClicked: c,
    headingId: u
  } = e, [f, b] = i.useState(false), A = i.useId(), E = (0, o._u)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: u
  }), N = !f && t.lockedBadges.length > 0;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.AC4, {
      id: A,
      children: p.intl.string(p.t["5AQGuZ"])
    }), (0, r.jsx)("div", O(j({}, E), {
      "aria-describedby": A,
      className: h.p3,
      children: t.unlockedBadges.map(e => (0, r.jsx)(y, {
        badge: e,
        isSelected: e.kind === l,
        onClick: () => c(e.kind)
      }, e.kind))
    })), f && (0, r.jsx)("ul", {
      className: s()(h.p3, x.wA),
      children: t.lockedBadges.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(v, {
          locked: true,
          badge: e,
          onClick: () => null == n ? true : n()
        })
      }, e.kind))
    }), N && (0, r.jsxs)("div", {
      className: x.WC,
      children: [(0, r.jsx)("div", {
        className: h.p3,
        children: t.lockedBadges.slice(0, 5).map(e => (0, r.jsx)(v, {
          locked: true,
          preview: true,
          badge: e
        }, e.kind))
      }), (0, r.jsxs)(d.DUT, {
        className: s()(x.ZN, x.n7),
        onClick: () => b(true),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: p.intl.string(m.default["2tkPDy"])
        }), (0, r.jsx)(a.ChevronSmallDownIcon, {
          size: "sm"
        })]
      })]
    }), f && (0, r.jsxs)(r.Fragment, {
      children: [null != n && (0, r.jsxs)("div", {
        className: x.B7,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: x.XY,
          children: p.intl.string(m.default.G3qiHu)
        }), (0, r.jsx)("div", {
          className: x.WM,
          children: (0, r.jsx)(g.u, {
            onClick: n
          })
        })]
      }), (0, r.jsxs)(d.DUT, {
        className: x.eO,
        onClick: () => b(false),
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: p.intl.string(m.default.idxnf7)
        }), (0, r.jsx)(a.ChevronSmallUpIcon, {
          size: "sm"
        })]
      })]
    })]
  })
}