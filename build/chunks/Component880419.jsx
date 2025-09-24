/** Chunk was on 51727 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => h,
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js");

function f(e) {
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

function h(e) {
  let {
    cost: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.tooltipContainer,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/semibold",
      children: d.intl.string(u.default.TZsu1d)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      children: d.intl.formatToPlainString(u.default["5HQUzM"], {
        boostCount: t
      })
    })]
  })
}

function g(e) {
  let {
    guildId: t,
    powerup: n
  } = e, i = (0, a.ZP)(t, n);
  if (i.type === c.A3.LEVEL_ACTIVATED) {
    var o, s;
    return (0, r.jsxs)("div", {
      className: p.tooltipContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        children: d.intl.string(u.default["9oYuvb"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: d.intl.formatToPlainString(u.default.WRRYUV, {
          perkName: null != (s = null == (o = i.sourcePowerup) ? true : o.title) ? s : d.intl.string(d.t.BfF6EB)
        })
      })]
    })
  }
  if (i.type === c.A3.POWERUP_ACTIVATED) return (0, r.jsx)(h, {
    cost: n.cost
  })
}

function m(e) {
  var {
    guildId: t,
    powerup: n,
    onError: p
  } = e, h = function(e, t) {
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
  }(e, ["guildId", "powerup", "onError"]);
  let {
    onActivate: m,
    isLoading: b,
    error: _,
    onShowDeactivate: O
  } = (0, s.ZP)(t, n), y = (0, a.ZP)(t, n).type !== c.A3.INACTIVE, {
    disabled: v,
    reason: j
  } = (0, o.Z)(t, n, y);
  i.useEffect(() => {
    null == p || p(_)
  }, [_, p]);
  let x = "".concat(n.cost);
  return y || (x += " \xb7 ".concat(d.intl.string(u.default.gSxlHR))), (0, r.jsx)(l.ua7, {
    delay: 100,
    "aria-label": null != j ? j : y ? d.intl.string(u.default.TZsu1d) : true,
    text: null != j ? j : y ? (0, r.jsx)(g, {
      guildId: t,
      powerup: n
    }) : true,
    children: e => {
      var t, n;
      return (0, r.jsx)(l.zxk, f((t = f({}, e), n = n = {
        minWidth: 0,
        variant: y ? "secondary" : "primary",
        "aria-label": y ? d.intl.string(u.default.TZsu1d) : d.intl.string(u.default.gSxlHR),
        text: x,
        icon: y ? {
          type: "icon",
          asset: l.mTd
        } : {
          type: "icon",
          asset: l.$Eu
        },
        iconPosition: "start",
        disabled: v,
        onClick: y ? O : m,
        loading: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t), h))
    }
  })
}