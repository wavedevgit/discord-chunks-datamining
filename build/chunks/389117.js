/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
    void 0 === r && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
      enumerable: !0,
      get: function() {
        return t[n]
      }
    }), Object.defineProperty(e, r, i)
  } : function(e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n]
  }),
  i = this && this.__exportStar || function(e, t) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
  };
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.makeMessagesProxy = t.chainMessagesObjects = t.MessageLoader = t.waitForAllDefaultIntlMessagesLoaded = t.loadAllMessagesInLocale = t.createLoader = t.DEFAULT_LOCALE = t.IntlManager = t.runtimeHashMessageKey = t.bindFormatValues = t.FormatBuilder = t.dataFormatterCache = t.makeDataFormatters = void 0;
var o = n(577044);
Object.defineProperty(t, "makeDataFormatters", {
  enumerable: !0,
  get: function() {
    return o.makeDataFormatters
  }
});
var a = n(404619);
Object.defineProperty(t, "dataFormatterCache", {
  enumerable: !0,
  get: function() {
    return a.dataFormatterCache
  }
});
var s = n(756880);
Object.defineProperty(t, "FormatBuilder", {
  enumerable: !0,
  get: function() {
    return s.FormatBuilder
  }
}), Object.defineProperty(t, "bindFormatValues", {
  enumerable: !0,
  get: function() {
    return s.bindFormatValues
  }
}), i(n(64182), t);
var l = n(134151);
Object.defineProperty(t, "runtimeHashMessageKey", {
  enumerable: !0,
  get: function() {
    return l.runtimeHashMessageKey
  }
});
var c = n(254228);
Object.defineProperty(t, "IntlManager", {
  enumerable: !0,
  get: function() {
    return c.IntlManager
  }
}), Object.defineProperty(t, "DEFAULT_LOCALE", {
  enumerable: !0,
  get: function() {
    return c.DEFAULT_LOCALE
  }
});
var u = n(315148);
Object.defineProperty(t, "createLoader", {
  enumerable: !0,
  get: function() {
    return u.createLoader
  }
}), Object.defineProperty(t, "loadAllMessagesInLocale", {
  enumerable: !0,
  get: function() {
    return u.loadAllMessagesInLocale
  }
}), Object.defineProperty(t, "waitForAllDefaultIntlMessagesLoaded", {
  enumerable: !0,
  get: function() {
    return u.waitForAllDefaultIntlMessagesLoaded
  }
}), Object.defineProperty(t, "MessageLoader", {
  enumerable: !0,
  get: function() {
    return u.MessageLoader
  }
});
var d = n(444540);
Object.defineProperty(t, "chainMessagesObjects", {
  enumerable: !0,
  get: function() {
    return d.chainMessagesObjects
  }
}), Object.defineProperty(t, "makeMessagesProxy", {
  enumerable: !0,
  get: function() {
    return d.makeMessagesProxy
  }
})