/** Chunk was on web.js **/
/** chunk id: 631562, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
    true === r && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
      enumerable: true,
      get: function() {
        return t[n]
      }
    }), Object.defineProperty(e, r, i)
  } : function(e, t, n, r) {
    true === r && (r = n), e[r] = t[n]
  }),
  i = this && this.__exportStar || function(e, t) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
  };
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.makeMessagesProxy = exports.chainMessagesObjects = exports.MessageLoader = exports.waitForAllDefaultIntlMessagesLoaded = exports.loadAllMessagesInLocale = exports.createLoader = exports.DEFAULT_LOCALE = exports.IntlManager = exports.runtimeHashMessageKey = exports.bindFormatValues = exports.FormatBuilder = exports.dataFormatterCache = exports.makeDataFormatters = true;
var Chunk43775 = require("./43775.js");
Object.defineProperty(exports, "makeDataFormatters", {
  enumerable: true,
  get: function() {
    return Chunk43775.makeDataFormatters
  }
});
var Chunk291070 = require("./291070.js");
Object.defineProperty(exports, "dataFormatterCache", {
  enumerable: true,
  get: function() {
    return Chunk291070.dataFormatterCache
  }
});
var Chunk11398 = require("./11398.js");
Object.defineProperty(exports, "FormatBuilder", {
  enumerable: true,
  get: function() {
    return Chunk11398.FormatBuilder
  }
}), Object.defineProperty(exports, "bindFormatValues", {
  enumerable: true,
  get: function() {
    return Chunk11398.bindFormatValues
  }
}), i(require("./624141.js"), exports);
var Chunk960755 = require("./960755.js");
Object.defineProperty(exports, "runtimeHashMessageKey", {
  enumerable: true,
  get: function() {
    return Chunk960755.runtimeHashMessageKey
  }
});
var Chunk769758 = require("./769758.js");
Object.defineProperty(exports, "IntlManager", {
  enumerable: true,
  get: function() {
    return Chunk769758.IntlManager
  }
}), Object.defineProperty(exports, "DEFAULT_LOCALE", {
  enumerable: true,
  get: function() {
    return Chunk769758.DEFAULT_LOCALE
  }
});
var Chunk876427 = require("./876427.js");
Object.defineProperty(exports, "createLoader", {
  enumerable: true,
  get: function() {
    return Chunk876427.createLoader
  }
}), Object.defineProperty(exports, "loadAllMessagesInLocale", {
  enumerable: true,
  get: function() {
    return Chunk876427.loadAllMessagesInLocale
  }
}), Object.defineProperty(exports, "waitForAllDefaultIntlMessagesLoaded", {
  enumerable: true,
  get: function() {
    return Chunk876427.waitForAllDefaultIntlMessagesLoaded
  }
}), Object.defineProperty(exports, "MessageLoader", {
  enumerable: true,
  get: function() {
    return Chunk876427.MessageLoader
  }
});
var Chunk368868 = require("./368868.js");
Object.defineProperty(exports, "chainMessagesObjects", {
  enumerable: true,
  get: function() {
    return Chunk368868.chainMessagesObjects
  }
}), Object.defineProperty(exports, "makeMessagesProxy", {
  enumerable: true,
  get: function() {
    return Chunk368868.makeMessagesProxy
  }
})