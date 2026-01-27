/** Chunk was on web.js **/
/** chunk id: 607490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => u
});
var Chunk317374 = require("./317374.js"),
  Chunk681456 = require("./681456.js"),
  Chunk988440 = require("./988440.js");

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
    case r.Vw:
      return s(s({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case r.BS:
      return s(s({}, e), {}, {
        isSourcePublic: true
      });
    case r.l6:
      return s(s({}, e), {}, {
        targetIds: n.targetIds
      });
    case i.v4:
      if (false === e.targetIds.indexOf(n.targetId)) return e;
      return s(s({}, e), {}, {
        targetIds: (0, a.FF)(e.targetIds, n.targetId)
      });
    case r.q2:
      return s(s({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: true,
        targetIds: []
      });
    case r.dU:
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