/** Chunk was on 8381 **/
/** chunk id: 267222, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk879154 = require("./879154.js"),
  Chunk214788 = require("./214788.js"),
  Chunk370260 = require("./370260.js"),
  Chunk653192 = require("./653192.js"),
  Chunk330296 = require("./330296.js"),
  Chunk581079 = require("./581079.js"),
  c = function(t, e) {
    return {
      key: t.getKey(),
      text: t.getText(),
      type: t.getType(),
      depth: t.getDepth(),
      inlineStyleRanges: u(t),
      entityRanges: a(t, e),
      data: t.getData().toObject()
    }
  },
  l = function(t, e, r, o) {
    if (t instanceof n) return void r.push(c(t, e));
    t instanceof i || s(false);
    var a = t.getParentKey(),
      u = o[t.getKey()] = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), n.forEach(function(e) {
            var n, i, o;
            n = t, i = e, o = r[e], i in n ? Object.defineProperty(n, i, {
              value: o,
              enumerable: true,
              configurable: true,
              writable: true
            }) : n[i] = o
          })
        }
        return t
      }({}, c(t, e), {
        children: []
      });
    if (a) return void o[a].children.push(u);
    r.push(u)
  },
  f = function(t, e) {
    var r = e.entityMap,
      n = [],
      i = {},
      a = {},
      u = 0;
    return t.getBlockMap().forEach(function(t) {
      t.findEntityRanges(function(t) {
        return null !== t.getEntity()
      }, function(e) {
        var n = t.getEntityAt(e),
          i = o.stringify(n);
        !a[i] && (a[i] = n, r[i] = "".concat(u), u++)
      }), l(t, r, n, i)
    }), {
      blocks: n,
      entityMap: r
    }
  },
  p = function(t, e) {
    var r = e.blocks,
      n = e.entityMap,
      i = {};
    return Object.keys(n).forEach(function(e, r) {
      var n = t.getEntity(o.unstringify(e));
      i[r] = {
        type: n.getType(),
        mutability: n.getMutability(),
        data: n.getData()
      }
    }), {
      blocks: r,
      entityMap: i
    }
  };
module.exports = function(t) {
  var e = {
    entityMap: {},
    blocks: []
  };
  return e = f(t, e), e = p(t, e)
}