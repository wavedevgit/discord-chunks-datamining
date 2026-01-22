/** Chunk was on web.js **/
/** chunk id: 124377, original params: e,t,n (module,exports,re quire) **/
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
var Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk367932 = require("./367932.js"),
  Chunk176486 = require("./176486.js"),
  Chunk885019 = require("./885019.js"),
  Chunk797686 = require("./797686.js"),
  d = function(e, t) {
    return {
      key: e.getKey(),
      text: e.getText(),
      type: e.getType(),
      depth: e.getDepth(),
      inlineStyleRanges: c(e),
      entityRanges: l(e, t),
      data: e.getData().toObject()
    }
  },
  f = function(e, t, n, i) {
    if (e instanceof a) return void n.push(d(e, t));
    e instanceof s || u(false);
    var o = e.getParentKey(),
      l = i[e.getKey()] = r({}, d(e, t), {
        children: []
      });
    o ? i[o].children.push(l) : n.push(l)
  },
  p = function(e, t) {
    var n = t.entityMap,
      r = [],
      i = {},
      a = {},
      s = 0;
    return e.getBlockMap().forEach(function(e) {
      e.findEntityRanges(function(e) {
        return null !== e.getEntity()
      }, function(t) {
        var r = e.getEntityAt(t),
          i = o.stringify(r);
        !a[i] && (a[i] = r, n[i] = "".concat(s), s++)
      }), f(e, n, r, i)
    }), {
      blocks: r,
      entityMap: n
    }
  },
  _ = function(e, t) {
    var n = t.blocks,
      r = t.entityMap,
      i = {};
    return Object.keys(r).forEach(function(t, n) {
      var r = e.getEntity(o.unstringify(t));
      i[n] = {
        type: r.getType(),
        mutability: r.getMutability(),
        data: r.getData()
      }
    }), {
      blocks: n,
      entityMap: i
    }
  };
module.exports = function(e) {
  var t = {
    entityMap: {},
    blocks: []
  };
  return t = p(e, t), t = _(e, t)
}