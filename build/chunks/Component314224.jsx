/** Chunk was on 64982 **/
/** chunk id: 314224, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk536982 = require("./536982.jsx"),
  Chunk456677 = require("./456677.jsx"),
  Chunk951665 = require("./951665.jsx"),
  Chunk428760 = require("./428760.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145468 = require("./145468.js");

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

function h(e, t) {
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

function b(e) {
  var t, n, b, x, j, v;
  let {
    rule: _,
    onChangeRule: O
  } = e, C = i.useCallback(e => {
    O(h(f({}, _), {
      triggerMetadata: h(f({}, _.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [O, _]), y = i.useCallback(e => {
    O(h(f({}, _), {
      triggerMetadata: h(f({}, _.triggerMetadata), {
        allowList: e
      })
    }))
  }, [O, _]);
  return (0, r.jsxs)("div", {
    className: p.cardContentsContainer,
    children: [(0, r.jsxs)(d.Z, {
      step: 1,
      header: m.intl.string(m.t["ue+tnb"]),
      children: [(0, r.jsx)(o.Z, {
        onChangeText: C,
        maxWordCount: g.RH,
        initialValue: null == (t = _.triggerMetadata) ? true : t.keywordFilter
      }), (0, r.jsx)(s.Z, {
        rule: _,
        onChangeRule: O,
        collapsed: (null == _ || null == (n = _.triggerMetadata) ? true : n.regexPatterns) == null || (null == _ || null == (b = _.triggerMetadata) ? true : b.regexPatterns.length) === 0
      }), (0, r.jsx)(l.Z, {
        onChange: y,
        initialValue: null == (x = _.triggerMetadata) ? true : x.allowList,
        maxWordCount: g.n4,
        collapsed: (null == (j = _.triggerMetadata) ? true : j.allowList) == null || (null == (v = _.triggerMetadata) ? true : v.allowList.length) === 0
      })]
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(d.Z, {
      step: 2,
      header: m.intl.string(m.t["18TOiQ"]),
      children: (0, r.jsx)(a.Z, {
        rule: _,
        onChangeRule: O
      })
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.CROSS
    }), (0, r.jsx)(d.Z, {
      step: 3,
      header: m.intl.string(m.t.eq3gjh),
      children: (0, r.jsx)(c.Z, {
        rule: _,
        onChangeRule: O
      })
    })]
  })
}