/** Chunk was on 9536 **/
/** chunk id: 961926, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk536982 = require("./536982.jsx"),
  Chunk684275 = require("./684275.jsx"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365604 = require("./365604.js");

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

function p(e) {
  var t, n, p;
  let {
    rule: h,
    onChangeRule: x
  } = e, j = i.useCallback(e => {
    x(b(m({}, h), {
      triggerMetadata: b(m({}, h.triggerMetadata), {
        allowList: e
      })
    }))
  }, [x, h]);
  return (0, r.jsxs)("div", {
    className: f.cardContentsContainer,
    children: [(0, r.jsxs)(c.Z, {
      step: 1,
      header: g.intl.string(g.t.CX5Yfc),
      children: [(0, r.jsx)(a.Z, {
        rule: h,
        onChangeRule: x
      }), (0, r.jsx)(l.Z, {
        onChange: j,
        initialValue: null == (t = h.triggerMetadata) ? true : t.allowList,
        maxWordCount: u.I3,
        collapsed: (null == (n = h.triggerMetadata) ? true : n.allowList) == null || (null == (p = h.triggerMetadata) ? true : p.allowList.length) === 0
      })]
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(c.Z, {
      step: 2,
      header: g.intl.string(g.t["18TOiQ"]),
      children: (0, r.jsx)(s.Z, {
        rule: h,
        onChangeRule: x
      })
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.CROSS
    }), (0, r.jsx)(c.Z, {
      step: 3,
      header: g.intl.string(g.t.eq3gjh),
      children: (0, r.jsx)(o.Z, {
        rule: h,
        onChangeRule: x
      })
    })]
  })
}