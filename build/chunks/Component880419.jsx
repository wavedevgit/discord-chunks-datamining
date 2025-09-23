/** Chunk was on 89929 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Po: () => y,
  RD: () => O,
  ZP: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js");

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

function b(e, t) {
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
    cost: t,
    isActive: n,
    compact: i,
    iconSize: l
  } = e, o = null != l ? l : "sm", a = n ? (0, r.jsx)(s.mTd, {
    size: o,
    color: "currentColor"
  }) : (0, r.jsx)(s.$Eu, {
    size: o,
    color: "currentColor"
  }), c = h.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
  return (0, r.jsxs)(r.Fragment, {
    children: [!i && c, !i && (0, r.jsx)("span", {
      className: g.dot,
      children: "•"
    }), a, (0, r.jsx)("span", {
      children: t
    })]
  })
}

function y(e) {
  let {
    cost: t
  } = e;
  return (0, r.jsxs)("div", {
    className: g.tooltipContainer,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      children: h.intl.string(f.default.TZsu1d)
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: h.intl.formatToPlainString(f.default["5HQUzM"], {
        boostCount: t
      })
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    powerup: n
  } = e, i = (0, u.ZP)(t, n);
  if (i.type === p.A3.LEVEL_ACTIVATED) {
    var l, o;
    return (0, r.jsxs)("div", {
      className: g.tooltipContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        children: h.intl.string(f.default["9oYuvb"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        children: h.intl.formatToPlainString(f.default.WRRYUV, {
          perkName: null != (o = null == (l = i.sourcePowerup) ? true : l.title) ? o : h.intl.string(h.t.BfF6EB)
        })
      })]
    })
  }
  if (i.type === p.A3.POWERUP_ACTIVATED) return (0, r.jsx)(y, {
    cost: n.cost
  })
}

function v(e) {
  var {
    guildId: t,
    powerup: n,
    compact: l,
    iconSize: y,
    onError: v
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["guildId", "powerup", "compact", "iconSize", "onError"]);
  let {
    onActivate: x,
    isLoading: C,
    error: E,
    onShowDeactivate: S
  } = (0, d.ZP)(t, n), I = (0, u.ZP)(t, n).type !== p.A3.INACTIVE, {
    disabled: P,
    reason: N
  } = (0, c.Z)(t, n, I);
  return i.useEffect(() => {
    null == v || v(E)
  }, [E, v]), (0, r.jsx)(s.ua7, {
    delay: 100,
    "aria-label": null != N ? N : I ? h.intl.string(f.default.TZsu1d) : true,
    text: null != N ? N : I ? (0, r.jsx)(_, {
      guildId: t,
      powerup: n
    }) : true,
    children: e => (0, r.jsx)(a.zx, b(m(b(m({}, e), {
      className: g.secondaryButton,
      innerClassName: g.buttonInner,
      wrapperClassName: o()(g.secondaryButton, {
        [g.buttonWrapper]: true === j.grow
      }),
      color: I ? a.Tt.PRIMARY : a.Tt.BRAND,
      "aria-label": h.intl.string(I ? f.default.TZsu1d : f.default.gSxlHR),
      disabled: P,
      onClick: I ? S : x,
      submitting: C
    }), j), {
      children: (0, r.jsx)(O, {
        cost: n.cost,
        isActive: I,
        compact: l,
        iconSize: y
      })
    }))
  })
}