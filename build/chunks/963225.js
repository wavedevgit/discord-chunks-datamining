/** Chunk was on web.js **/
/** chunk id: 963225, original params: e,t,n (module,exports,re quire) **/
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
}), exports.makeMessagesProxy = exports.chainMessagesObjects = exports.MessageLoader = exports.waitForAllDefaultIntlMessagesLoaded = exports.loadAllMessagesInLocale = exports.createLoader = exports.InternalIntlMessage = exports.DEFAULT_LOCALE = exports.IntlManager = exports.runtimeHashMessageKey = exports.bindFormatValues = exports.FormatBuilder = exports.dataFormatterCache = exports.makeDataFormatters = true;
var Chunk979951 = require("./979951.js");
Object.defineProperty(exports, "makeDataFormatters", {
  enumerable: true,
  get: function() {
    return Chunk979951.makeDataFormatters
  }
});
var Chunk503897 = require("./503897.js");
Object.defineProperty(exports, "dataFormatterCache", {
  enumerable: true,
  get: function() {
    return Chunk503897.dataFormatterCache
  }
});
var Chunk918085 = require("./918085.js");
Object.defineProperty(exports, "FormatBuilder", {
  enumerable: true,
  get: function() {
    return Chunk918085.FormatBuilder
  }
}), Object.defineProperty(exports, "bindFormatValues", {
  enumerable: true,
  get: function() {
    return Chunk918085.bindFormatValues
  }
}), i(require("./97806.js"), exports);
var Chunk74257 = require("./74257.js");
Object.defineProperty(exports, "runtimeHashMessageKey", {
  enumerable: true,
  get: function() {
    return Chunk74257.runtimeHashMessageKey
  }
});
var Chunk495731 = require("./495731.js");
Object.defineProperty(exports, "IntlManager", {
  enumerable: true,
  get: function() {
    return Chunk495731.IntlManager
  }
}), Object.defineProperty(exports, "DEFAULT_LOCALE", {
  enumerable: true,
  get: function() {
    return Chunk495731.DEFAULT_LOCALE
  }
});
var Chunk584927 = require("./584927.js");
Object.defineProperty(exports, "InternalIntlMessage", {
  enumerable: true,
  get: function() {
    return Chunk584927.InternalIntlMessage
  }
});
var Chunk998915 = require("./998915.js");
Object.defineProperty(exports, "createLoader", {
  enumerable: true,
  get: function() {
    return Chunk998915.createLoader
  }
}), Object.defineProperty(exports, "loadAllMessagesInLocale", {
  enumerable: true,
  get: function() {
    return Chunk998915.loadAllMessagesInLocale
  }
}), Object.defineProperty(exports, "waitForAllDefaultIntlMessagesLoaded", {
  enumerable: true,
  get: function() {
    return Chunk998915.waitForAllDefaultIntlMessagesLoaded
  }
}), Object.defineProperty(exports, "MessageLoader", {
  enumerable: true,
  get: function() {
    return Chunk998915.MessageLoader
  }
});
var Chunk163007 = require("./163007.js");
Object.defineProperty(exports, "chainMessagesObjects", {
  enumerable: true,
  get: function() {
    return Chunk163007.chainMessagesObjects
  }
}), Object.defineProperty(exports, "makeMessagesProxy", {
  enumerable: true,
  get: function() {
    return Chunk163007.makeMessagesProxy
  }
})