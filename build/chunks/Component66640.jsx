/** Chunk was on 47841 **/
/** chunk id: 66640, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk858229 = require("./858229.jsx"),
  Chunk702942 = require("./702942.jsx"),
  Chunk99787 = require("./99787.jsx"),
  Chunk255354 = require("./255354.jsx"),
  Chunk957300 = require("./957300.jsx"),
  Chunk378427 = require("./378427.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk578551 = require("./578551.js");

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

function m(e, t) {
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
    rule: x,
    onChangeRule: h
  } = e, j = i.useCallback(e => {
    h(m(b({}, x), {
      triggerMetadata: m(b({}, x.triggerMetadata), {
        allowList: e
      })
    }))
  }, [h, x]);
  return (0, r.jsxs)("div", {
    className: g.sp,
    children: [(0, r.jsxs)(o.A, {
      step: 1,
      header: f.intl.string(f.t.CX5Yfc),
      children: [(0, r.jsx)(s.A, {
        rule: x,
        onChangeRule: h
      }), (0, r.jsx)(l.A, {
        onChange: j,
        initialValue: null == (t = x.triggerMetadata) ? true : t.allowList,
        maxWordCount: u.hG,
        collapsed: (null == (n = x.triggerMetadata) ? true : n.allowList) == null || (null == (p = x.triggerMetadata) ? true : p.allowList.length) === 0
      })]
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.ARROW_DOWN
    }), (0, r.jsx)(o.A, {
      step: 2,
      header: f.intl.string(f.t["18TOiQ"]),
      children: (0, r.jsx)(a.A, {
        rule: x,
        onChangeRule: h
      })
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.CROSS
    }), (0, r.jsx)(o.A, {
      step: 3,
      header: f.intl.string(f.t.eq3gjh),
      children: (0, r.jsx)(c.A, {
        rule: x,
        onChangeRule: h
      })
    })]
  })
}