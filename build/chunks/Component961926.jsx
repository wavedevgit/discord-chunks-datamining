/** Chunk was on 29679 **/
/** chunk id: 961926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk536982 = require("./536982.jsx"),
  Chunk285318 = require("./285318.jsx"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk609637 = require("./609637.js");

function p(e) {
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

function f(e, t) {
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

function h(e) {
  var t, n, h;
  let {
    rule: b,
    onChangeRule: x
  } = e, j = i.useCallback(e => {
    x(f(p({}, b), {
      triggerMetadata: f(p({}, b.triggerMetadata), {
        allowList: e
      })
    }))
  }, [x, b]);
  return (0, r.jsxs)("div", {
    className: m.cardContentsContainer,
    children: [(0, r.jsxs)(c.Z, {
      step: 1,
      header: g.intl.string(g.t.CX5Yfc),
      children: [(0, r.jsx)(a.Z, {
        rule: b,
        onChangeRule: x
      }), (0, r.jsx)(l.Z, {
        onChange: j,
        initialValue: null == (t = b.triggerMetadata) ? true : t.allowList,
        maxWordCount: u.I3,
        collapsed: (null == (n = b.triggerMetadata) ? true : n.allowList) == null || (null == (h = b.triggerMetadata) ? true : h.allowList.length) === 0
      })]
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(c.Z, {
      step: 2,
      header: g.intl.string(g.t["18TOiQ"]),
      children: (0, r.jsx)(s.Z, {
        rule: b,
        onChangeRule: x
      })
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.CROSS
    }), (0, r.jsx)(c.Z, {
      step: 3,
      header: g.intl.string(g.t.eq3gjh),
      children: (0, r.jsx)(o.Z, {
        rule: b,
        onChangeRule: x
      })
    })]
  })
}