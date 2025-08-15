/** Chunk was on 6049 **/
/** chunk id: 500230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk499513 = require("./499513.js"),
  Chunk229190 = require("./229190.jsx"),
  Chunk510918 = require("./510918.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk131085 = require("./131085.js"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk616397 = require("./616397.js");

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

function x(e, t) {
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
    palette: t,
    badge: n,
    isSelected: i,
    onClick: l
  } = e, s = (0, o.xUy)({
    isSelected: i,
    label: (0, c.Z)(t.primary, t.secondary)
  });
  return (0, r.jsx)(o.P3F, x(b({}, s), {
    className: a()(f.pickerItem, {
      [f.pickerItemSelected]: i
    }),
    onClick: l,
    children: (0, r.jsx)(u.v, {
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
    showColorPopout: c,
    setShowColorPopout: u,
    palettePopoutTargetRef: m,
    handleChange: p
  } = e, j = (0, o.xUy)({
    isSelected: l,
    label: h.intl.formatToPlainString(h.t.hr4D2d, {
      primaryColor: n,
      secondaryColor: i
    })
  });
  return (0, r.jsx)(d.Z, {
    popoutTargetRef: m,
    showSecondaryColor: g.ER[t] >= 2,
    palette: {
      primary: n,
      secondary: i
    },
    onPrimaryColorChange: e => {
      p({
        primary: (0, s.Rf)(e)
      })
    },
    onSecondaryColorChange: e => {
      p({
        secondary: (0, s.Rf)(e)
      })
    },
    shouldShow: c,
    onRequestClose: () => u(false),
    children: e => (0, r.jsx)(o.P3F, x(b({}, e, j), {
      innerRef: m,
      onClick: () => {
        u(e => !e)
      },
      className: a()(f.pickerItem, {
        [f.pickerItemSelected]: l
      }),
      children: (0, r.jsx)(o.ilE, {
        size: "custom",
        width: 20,
        height: 20
      })
    }))
  })
}
let _ = function(e) {
  let {
    className: t,
    guildId: n,
    badge: l,
    primaryColor: a,
    secondaryColor: s
  } = e, [c, d] = i.useState(false), u = i.useRef(null), _ = i.useId(), O = i.useId(), y = i.useMemo(() => g.Ek.every(e => e.primary !== a || e.secondary !== s), [a, s]), C = (0, o.arW)({
    orientation: "horizontal",
    isDisabled: false,
    labelledBy: _
  });

  function N(e) {
    let t = {};
    true !== e.primary && (t.badgeColorPrimary = e.primary), true !== e.secondary && (t.badgeColorSecondary = e.secondary), m.Z.updateGuildProfile(n, t)
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.vwX, {
      id: _,
      className: f.sectionTitle,
      children: h.intl.string(p.default.zSbMdX)
    }), (0, r.jsx)(o.nn4, {
      id: O,
      children: h.intl.string(h.t.ovbW0d)
    }), (0, r.jsxs)("div", x(b({}, C), {
      "aria-describedby": O,
      className: f.pickerGrid,
      children: [g.Ek.map(e => (0, r.jsx)(j, {
        palette: e,
        badge: l,
        isSelected: e.primary === a && e.secondary === s,
        onClick: () => N(e)
      }, "".concat(e.primary).concat(e.secondary))), (0, r.jsx)(v, {
        badge: l,
        primary: a,
        secondary: s,
        isSelected: y,
        showColorPopout: c,
        setShowColorPopout: d,
        palettePopoutTargetRef: u,
        handleChange: N
      })]
    }))]
  })
}