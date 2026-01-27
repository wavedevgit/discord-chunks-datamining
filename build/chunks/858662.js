/** Chunk was on web.js **/
/** chunk id: 858662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
});
var r, Chunk41010 = require("./41010.js"),
  Chunk653587 = require("./653587.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = (o(r = {}, Chunk41010.FILE, {
  exposeProperties: {
    files: function(e) {
      return Array.prototype.slice.call(e.files)
    },
    items: function(e) {
      return e.items
    }
  },
  matchesTypes: ["Files"]
}), o(r, Chunk41010.HTML, {
  exposeProperties: {
    html: function(e, t) {
      return (0, a.W)(e, t, "")
    }
  },
  matchesTypes: ["Html", "text/html"]
}), o(r, Chunk41010.URL, {
  exposeProperties: {
    urls: function(e, t) {
      return (0, a.W)(e, t, "").split("\n")
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), o(r, Chunk41010.TEXT, {
  exposeProperties: {
    text: function(e, t) {
      return (0, a.W)(e, t, "")
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), r)