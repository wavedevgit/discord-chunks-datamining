/** Chunk was on web.js **/
/** chunk id: 515652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
});
var r, Chunk778882 = require("./778882.js"),
  Chunk401010 = require("./401010.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = (a(r = {}, Chunk778882.FILE, {
  exposeProperties: {
    files: function(e) {
      return Array.prototype.slice.call(e.files)
    },
    items: function(e) {
      return e.items
    }
  },
  matchesTypes: ["Files"]
}), a(r, Chunk778882.HTML, {
  exposeProperties: {
    html: function(e, t) {
      return (0, o.R)(e, t, "")
    }
  },
  matchesTypes: ["Html", "text/html"]
}), a(r, Chunk778882.URL, {
  exposeProperties: {
    urls: function(e, t) {
      return (0, o.R)(e, t, "").split("\n")
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), a(r, Chunk778882.TEXT, {
  exposeProperties: {
    text: function(e, t) {
      return (0, o.R)(e, t, "")
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), r)