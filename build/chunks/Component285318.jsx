/** Chunk was on 70830 **/
/** chunk id: 285318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780440 = require("./780440.js");

function d(e) {
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

function u(e, t) {
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

function m(e) {
  let {
    preset: t,
    toggled: n,
    onToggle: i
  } = e, {
    headerText: d,
    subtitleText: u
  } = function(e) {
    let t = null,
      n = null;
    switch (e) {
      case s.Ux.PROFANITY:
        t = o.intl.string(o.t["I+BDrK"]), n = (0, r.jsx)(r.Fragment, {
          children: o.intl.string(o.t.hISCmp)
        });
        break;
      case s.Ux.SEXUAL_CONTENT:
        t = o.intl.string(o.t.URSMen), n = (0, r.jsx)(r.Fragment, {
          children: o.intl.string(o.t.oRQDBg)
        });
        break;
      case s.Ux.SLURS:
        t = o.intl.string(o.t.xjK2Mz), n = (0, r.jsx)(r.Fragment, {
          children: o.intl.string(o.t.oJYXBA)
        });
        break;
      default:
        t = "Error", n = "Unrecognized list"
    }
    return {
      headerText: t,
      subtitleText: n
    }
  }(t);
  return (0, r.jsxs)("div", {
    className: c.keywordListContainer,
    children: [(0, r.jsxs)("div", {
      className: c.keywordListTextContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        children: d
      }), (0, r.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: u
      })]
    }), (0, r.jsx)(l.$q, {
      className: c.toggle,
      type: l.M0.INVERTED,
      value: n,
      onChange: () => i(t)
    })]
  })
}

function g(e) {
  var t;
  let {
    rule: n,
    onChangeRule: l
  } = e, [a, o] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? true : t.presets)), c = i.useMemo(() => e => {
    l(u(d({}, n), {
      triggerMetadata: u(d({}, n.triggerMetadata), {
        presets: e
      })
    }))
  }, [l, n]), g = e => {
    let t = new Set(a);
    t.has(e) ? t.delete(e) : t.add(e), o(t), c(Array.from(t))
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(m, {
      preset: s.Ux.PROFANITY,
      toggled: a.has(s.Ux.PROFANITY),
      onToggle: g
    }), (0, r.jsx)(m, {
      preset: s.Ux.SLURS,
      toggled: a.has(s.Ux.SLURS),
      onToggle: g
    }), (0, r.jsx)(m, {
      preset: s.Ux.SEXUAL_CONTENT,
      toggled: a.has(s.Ux.SEXUAL_CONTENT),
      onToggle: g
    })]
  })
}