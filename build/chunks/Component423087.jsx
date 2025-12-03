/** Chunk was on 384 **/
/** chunk id: 423087, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk499513 = require("./499513.js"),
  Chunk229190 = require("./229190.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk131085 = require("./131085.js"),
  Chunk541673 = require("./541673.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764009 = require("./764009.js");

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
  } = e, s = (0, o.jm)({
    isSelected: i,
    label: (0, u.Z)(t.primary, t.secondary)
  });
  return (0, r.jsx)(c.P3F, j(x({}, s), {
    className: a()(b.pickerItem, {
      [b.pickerItemSelected]: i
    }),
    onClick: l,
    children: (0, r.jsx)(g.v, {
      badge: n,
      width: 32,
      height: 32,
      primaryTintColor: t.primary,
      secondaryTintColor: t.secondary
    })
  }))
}

function v(e) {
  let {
    badge: t,
    primary: n,
    secondary: i,
    isSelected: l,
    showColorPopout: u,
    setShowColorPopout: g,
    palettePopoutTargetRef: m,
    handleChange: f
  } = e, _ = (0, o.jm)({
    isSelected: l,
    label: h.intl.formatToPlainString(h.t.hr4D2X, {
      primaryColor: n,
      secondaryColor: i
    })
  });
  return (0, r.jsx)(d.Z, {
    popoutTargetRef: m,
    showSecondaryColor: p.ER[t] >= 2,
    palette: {
      primary: n,
      secondary: i
    },
    onPrimaryColorChange: e => {
      f({
        primary: (0, s.Rf)(e)
      })
    },
    onSecondaryColorChange: e => {
      f({
        secondary: (0, s.Rf)(e)
      })
    },
    shouldShow: u,
    onRequestClose: () => g(false),
    children: e => (0, r.jsx)(c.P3F, j(x({}, e, _), {
      innerRef: m,
      onClick: () => {
        g(e => !e)
      },
      className: a()(b.pickerItem, {
        [b.pickerItemSelected]: l
      }),
      children: (0, r.jsx)(c.ilE, {
        size: "custom",
        width: 20,
        height: 20
      })
    }))
  })
}
let O = function(e) {
  let {
    className: t,
    guildId: n,
    badge: l,
    primaryColor: a,
    secondaryColor: s
  } = e, [u, d] = i.useState(false), g = i.useRef(null), O = i.useId(), C = i.useId(), y = i.useMemo(() => p.Ek.every(e => e.primary !== a || e.secondary !== s), [a, s]), N = (0, o.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: O
  });

  function E(e) {
    let t = {};
    true !== e.primary && (t.badgeColorPrimary = e.primary), true !== e.secondary && (t.badgeColorSecondary = e.secondary), m.Z.updateGuildProfile(n, t)
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(c.gNt, {
      label: h.intl.string(f.default.zSbMdX),
      id: O,
      children: e => (0, r.jsxs)("div", j(x({}, N), {
        id: e.controlId,
        "aria-describedby": C,
        className: b.pickerGrid,
        children: [p.Ek.map(e => (0, r.jsx)(_, {
          palette: e,
          badge: l,
          isSelected: e.primary === a && e.secondary === s,
          onClick: () => E(e)
        }, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(v, {
          badge: l,
          primary: a,
          secondary: s,
          isSelected: y,
          showColorPopout: u,
          setShowColorPopout: d,
          palettePopoutTargetRef: g,
          handleChange: E
        })]
      }))
    }), (0, r.jsx)(c.nn4, {
      id: C,
      children: h.intl.string(h.t.ovbW0Z)
    })]
  })
}