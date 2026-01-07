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
    n = t.payload;
  switch (t.type) {
    case r.qu:
      return s(s({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case r.js:
      return s(s({}, e), {}, {
        isSourcePublic: true
      });
    case r.$T:
      return s(s({}, e), {}, {
        targetIds: n.targetIds
      });
    case i.IS:
      if (false === e.targetIds.indexOf(n.targetId)) return e;
      return s(s({}, e), {}, {
        targetIds: (0, a.zu)(e.targetIds, n.targetId)
      });
    case r.rp:
      return s(s({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: true,
        targetIds: []
      });
    case r.Bs:
      return s(s({}, e), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e
  }
}