/** Chunk was on 66920 **/
/** chunk id: 220763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk87719 = require("./87719.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk736975 = require("./736975.js");

function p(e) {
  let {
    channel: t,
    onClose: n
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["channel", "onClose"]), f = i.intl.format(i.t.AVVUse, {
    onLearnMore: function() {
      n(), (0, o.e)()
    }
  });
  return (0, r.jsx)(l.A, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    artURL: u.A,
    type: c.e.MESSAGE_LENGTH_UPSELL,
    title: i.intl.string(i.t.SeL3ec),
    body: f,
    glowUp: f,
    analyticsSource: {
      page: (null == t ? true : t.getGuildId()) != null ? a.liQ.GUILD_CHANNEL : (null == t ? true : t.isGroupDM()) || (null == t ? true : t.isPrivate()) ? a.liQ.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: a.JJy.MESSAGE_LENGTH_UPSELL_MODAL,
      object: a.ZSU.BUTTON_CTA
    },
    onClose: n
  }, p))
}