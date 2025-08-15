/** Chunk was on web.js **/
/** chunk id: 830651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => u
});
var Chunk964742 = require("./964742.js"),
  Chunk40284 = require("./40284.js"),
  Chunk144459 = require("./144459.js");

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? o(Object(n), true).forEach(function(t) {
      l(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var c = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};

function u() {
  var e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c,
    t = arguments.length > 1 ? arguments[1] : true,
    n = exports.payload;
  switch (exports.type) {
    case Chunk964742.qu:
      return s(s({}, module), {}, {
        itemType: require.itemType,
        item: require.item,
        sourceId: require.sourceId,
        isSourcePublic: require.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case Chunk964742.js:
      return s(s({}, module), {}, {
        isSourcePublic: true
      });
    case Chunk964742.$T:
      return s(s({}, module), {}, {
        targetIds: require.targetIds
      });
    case Chunk40284.IS:
      if (false === module.targetIds.indexOf(require.targetId)) return module;
      return s(s({}, module), {}, {
        targetIds: (0, Chunk144459.zu)(module.targetIds, require.targetId)
      });
    case Chunk964742.rp:
      return s(s({}, module), {}, {
        dropResult: require.dropResult,
        didDrop: true,
        targetIds: []
      });
    case Chunk964742.Bs:
      return s(s({}, module), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return module
  }
}