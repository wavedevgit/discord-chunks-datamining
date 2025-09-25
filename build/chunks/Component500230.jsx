/** Chunk was on 60611 **/
/** chunk id: 500230, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk499513 = require("./499513.js"),
  Chunk229190 = require("./229190.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk131085 = require("./131085.js"),
  Chunk272909 = require("./272909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887935 = require("./887935.js");

function b(e) {
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

function v(e) {
  let {
    palette: t,
    badge: n,
    isSelected: i,
    onClick: l
  } = e, a = (0, o.jm)({
    isSelected: i,
    label: (0, d.Z)(t.primary, t.secondary)
  });
  return (0, r.jsx)(c.P3F, j(b({}, a), {
    className: s()(x.pickerItem, {
      [x.pickerItemSelected]: i
    }),
    onClick: l,
    children: (0, r.jsx)(m.v, {
      badge: n,
      width: 32,
      height: 32,
      primaryTintColor: t.primary,
      secondaryTintColor: t.secondary
    })
  }))
}

function _(e) {
  let {
    badge: t,
    primary: n,
    secondary: i,
    isSelected: l,
    showColorPopout: d,
    setShowColorPopout: m,
    palettePopoutTargetRef: g,
    handleChange: f
  } = e, v = (0, o.jm)({
    isSelected: l,
    label: h.intl.formatToPlainString(h.t.hr4D2d, {
      primaryColor: n,
      secondaryColor: i
    })
  });
  return (0, r.jsx)(u.Z, {
    popoutTargetRef: g,
    showSecondaryColor: p.ER[t] >= 2,
    palette: {
      primary: n,
      secondary: i
    },
    onPrimaryColorChange: e => {
      f({
        primary: (0, a.Rf)(e)
      })
    },
    onSecondaryColorChange: e => {
      f({
        secondary: (0, a.Rf)(e)
      })
    },
    shouldShow: d,
    onRequestClose: () => m(false),
    children: e => (0, r.jsx)(c.P3F, j(b({}, e, v), {
      innerRef: g,
      onClick: () => {
        m(e => !e)
      },
      className: s()(x.pickerItem, {
        [x.pickerItemSelected]: l
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
    primaryColor: s,
    secondaryColor: a
  } = e, [d, u] = i.useState(false), m = i.useRef(null), O = i.useId(), y = i.useId(), C = i.useMemo(() => p.Ek.every(e => e.primary !== s || e.secondary !== a), [s, a]), N = (0, o.Jb)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: O
  });

  function E(e) {
    let t = {};
    true !== e.primary && (t.badgeColorPrimary = e.primary), true !== e.secondary && (t.badgeColorSecondary = e.secondary), g.Z.updateGuildProfile(n, t)
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(c.vwX, {
      id: O,
      className: x.sectionTitle,
      children: h.intl.string(f.default.zSbMdX)
    }), (0, r.jsx)(c.nn4, {
      id: y,
      children: h.intl.string(h.t.ovbW0d)
    }), (0, r.jsxs)("div", j(b({}, N), {
      "aria-describedby": y,
      className: x.pickerGrid,
      children: [p.Ek.map(e => (0, r.jsx)(v, {
        palette: e,
        badge: l,
        isSelected: e.primary === s && e.secondary === a,
        onClick: () => E(e)
      }, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(_, {
        badge: l,
        primary: s,
        secondary: a,
        isSelected: C,
        showColorPopout: d,
        setShowColorPopout: u,
        palettePopoutTargetRef: m,
        handleChange: E
      })]
    }))]
  })
}