/** Chunk was on 33184 **/
/** chunk id: 465836, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk703558 = require("./703558.js"),
  Chunk585483 = require("./585483.js"),
  Chunk403182 = require("./403182.js"),
  Chunk127654 = require("./127654.js"),
  Chunk98278 = require("./98278.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330226 = require("./330226.js");

function b(t) {
  var {
    channel: e,
    onClose: n,
    content: b
  } = t, g = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        a = Object.keys(t);
      for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) n = a[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["channel", "onClose", "content"]);

  function y() {
    n(), (0, l.z)()
  }
  return (0, r.jsx)(s.Z, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    artURL: p.Z,
    type: u.cd.MESSAGE_LENGTH_UPSELL,
    title: d.intl.string(d.t.TZT3sJ),
    body: d.intl.format(d.t.QhcEAL, {
      maxLength: f.J6R,
      onLearnMore: y
    }),
    context: d.intl.formatToPlainString(d.t.Fc1uVe, {
      maxLength: f.J6R
    }),
    glowUp: d.intl.format(d.t.Mi8kt1, {
      onLearnMore: y
    }),
    analyticsSource: {
      page: (null == e ? true : e.getGuildId()) != null ? f.ZY5.GUILD_CHANNEL : (null == e ? true : e.isGroupDM()) || (null == e ? true : e.isPrivate()) ? f.ZY5.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: f.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
      object: f.qAy.BUTTON_CTA
    },
    onClose: n,
    secondaryCTA: d.intl.string(d.t.Fnsb1t),
    onSecondaryClick: function() {
      n();
      let t = new Blob([b], {
        type: "text/plain"
      });
      (0, c.d)([(0, i.dp)(t, "message.txt", "text/plain")], e, o.d.ChannelMessage, {
        requireConfirm: true,
        showLargeMessageDialog: true
      }), a.S.dispatchToLastSubscribed(f.CkL.CLEAR_TEXT)
    }
  }, g))
}