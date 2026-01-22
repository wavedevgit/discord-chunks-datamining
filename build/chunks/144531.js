/** Chunk was on web.js **/
/** chunk id: 144531, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk279998 = require("./279998.js"),
  Chunk797686 = require("./797686.js"),
  o = function(e, t) {
    for (var n = [].concat(e).reverse(); n.length;) {
      var r = n.pop();
      t(r);
      var i = r.children;
      Array.isArray(i) || s(false), n = n.concat([].concat(i.reverse()))
    }
  },
  l = function(e) {
    if (!(e && e.type)) returnfalse;
    var t = e.type;
    return "unordered-list-item" === t || "ordered-list-item" === t
  },
  c = function(e) {
    Array.isArray(e.children) && (e.children = e.children.map(function(t) {
      return t.type === e.type ? r({}, t, {
        depth: (e.depth || 0) + 1
      }) : t
    }))
  };
module.exports = {
  fromRawTreeStateToRawState: function(e) {
    var t = e.blocks,
      n = [];
    return (Array.isArray(t) || s(false), Array.isArray(t) && t.length) ? (o(t, function(e) {
      var t = r({}, e);
      l(e) && (t.depth = t.depth || 0, c(e), null != e.children && e.children.length > 0) || (delete t.children, n.push(t))
    }), e.blocks = n, r({}, e, {
      blocks: n
    })) : e
  },
  fromRawStateToRawTreeState: function(e) {
    var t = [],
      n = [];
    return e.blocks.forEach(function(e) {
      var i = l(e),
        s = e.depth || 0,
        o = r({}, e, {
          children: []
        });
      if (!i) return void t.push(o);
      var c = n[0];
      if (null == c && 0 === s) t.push(o);
      else if (null == c || c.depth < s - 1) {
        var u = {
          key: a(),
          text: "",
          depth: s - 1,
          type: e.type,
          children: [],
          entityRanges: [],
          inlineStyleRanges: []
        };
        n.unshift(u), 1 === s ? t.push(u) : null != c && c.children.push(u), u.children.push(o)
      } else if (c.depth === s - 1) c.children.push(o);
      else {
        for (; null != c && c.depth >= s;) n.shift(), c = n[0];
        s > 0 ? c.children.push(o) : t.push(o)
      }
    }), r({}, e, {
      blocks: t
    })
  }
}