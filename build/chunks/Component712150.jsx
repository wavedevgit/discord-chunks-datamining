/** Chunk was on 47841 **/
/** chunk id: 712150, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk130333 = require("./130333.js"),
  Chunk953348 = require("./953348.jsx"),
  Chunk81461 = require("./81461.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk743981 = require("./743981.js"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk175820 = require("./175820.js");

function x(e) {
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
    palette: t,
    badge: n,
    isSelected: i,
    onClick: l
  } = e, a = (0, o.Gx)({
    isSelected: i,
    label: (0, d.A)(t.primary, t.secondary)
  });
  return (0, r.jsx)(c.DUT, j(x({}, a), {
    className: s()(h.Uh, {
      [h.fT]: i
    }),
    onClick: l,
    children: (0, r.jsx)(g.J, {
      badge: n,
      width: 32,
      height: 32,
      primaryTintColor: t.primary,
      secondaryTintColor: t.secondary
    })
  }))
}

function O(e) {
  let {
    badge: t,
    primary: n,
    secondary: i,
    isSelected: l,
    showColorPopout: d,
    setShowColorPopout: g,
    palettePopoutTargetRef: m,
    handleChange: f
  } = e, _ = (0, o.Gx)({
    isSelected: l,
    label: b.intl.formatToPlainString(b.t.hr4D2X, {
      primaryColor: n,
      secondaryColor: i
    })
  });
  return (0, r.jsx)(u.A, {
    popoutTargetRef: m,
    showSecondaryColor: p.C9[t] >= 2,
    palette: {
      primary: n,
      secondary: i
    },
    onPrimaryColorChange: e => {
      f({
        primary: (0, a.Hl)(e)
      })
    },
    onSecondaryColorChange: e => {
      f({
        secondary: (0, a.Hl)(e)
      })
    },
    shouldShow: d,
    onRequestClose: () => g(false),
    children: e => (0, r.jsx)(c.DUT, j(x({}, e, _), {
      innerRef: m,
      onClick: () => {
        g(e => !e)
      },
      className: s()(h.Uh, {
        [h.fT]: l
      }),
      children: (0, r.jsx)(c.dDg, {
        size: "custom",
        width: 20,
        height: 20
      })
    }))
  })
}
let v = function(e) {
  let {
    className: t,
    guildId: n,
    badge: l,
    primaryColor: s,
    secondaryColor: a
  } = e, [d, u] = i.useState(false), g = i.useRef(null), v = i.useId(), y = i.useId(), A = i.useMemo(() => p.Ub.every(e => e.primary !== s || e.secondary !== a), [s, a]), E = (0, o._u)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: v
  });

  function N(e) {
    let t = {};
    true !== e.primary && (t.badgeColorPrimary = e.primary), true !== e.secondary && (t.badgeColorSecondary = e.secondary), m.A.updateGuildProfile(n, t)
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(c.D0$, {
      label: b.intl.string(f.default.zSbMdX),
      id: v,
      children: e => (0, r.jsxs)("div", j(x({}, E), {
        id: e.controlId,
        "aria-describedby": y,
        className: h.p3,
        children: [p.Ub.map(e => (0, r.jsx)(_, {
          palette: e,
          badge: l,
          isSelected: e.primary === s && e.secondary === a,
          onClick: () => N(e)
        }, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(O, {
          badge: l,
          primary: s,
          secondary: a,
          isSelected: A,
          showColorPopout: d,
          setShowColorPopout: u,
          palettePopoutTargetRef: g,
          handleChange: N
        })]
      }))
    }), (0, r.jsx)(c.AC4, {
      id: y,
      children: b.intl.string(b.t.ovbW0Z)
    })]
  })
}