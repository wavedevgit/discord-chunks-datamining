/** Chunk was on 66009 **/
/** chunk id: 974875, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk104217 = require("./104217.js"),
  Chunk390248 = require("./390248.js"),
  Chunk900819 = require("./900819.js"),
  Chunk985018 = require("./985018.jsx");

function u(t, e) {
  if ((0, o.hv)({
      action: o.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: e,
      channelId: t
    }), !s.A.canSubmitFpReport(e)) {
    a.A.show({
      title: c.intl.string(c.t["iS/eFN"]),
      body: c.intl.string(c.t.YrjcgR),
      confirmText: c.intl.string(c.t.BddRzS)
    }), r.A.disableFalsePositiveButton(t, e);
    return
  }(0, l.mMO)(async () => {
    let {
      default: l
    } = await n(287002);
    return n => (0, i.jsx)(l, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      channelId: t,
      messageId: e
    }, n))
  })
}