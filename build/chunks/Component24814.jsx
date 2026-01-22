/** Chunk was on 12963 **/
/** chunk id: 24814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk817281 = require("./817281.js"),
  Chunk964486 = require("./964486.js"),
  Chunk47167 = require("./47167.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = e => {
  let {
    onConfirm: t,
    channel: n,
    onClose: f,
    transitionState: y
  } = e, b = function(e, t) {
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
  }(e, ["onConfirm", "channel", "onClose", "transitionState"]), O = (0, c.Ay)(n), [d, g] = o.useState(false);
  return ((0, a.Ay)(() => {
    s.default.track(u.HAw.OPEN_MODAL, {
      type: "Voice channel change confirmation",
      channel_id: n.id
    })
  }), null == O) ? null : (0, r.jsx)(l.Modal, function(e) {
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
    title: p.intl.string(p.t["0LZN5F"]),
    subtitle: p.intl.format(p.t["vA+uEs"], {
      channel: O
    }),
    transitionState: y,
    size: "md",
    onClose: f,
    actionBarInput: (0, r.jsx)(l.Sc0, {
      checked: d,
      onChange: e => {
        i.Ay.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: e
        }), g(e)
      },
      label: p.intl.string(p.t["JdIQ/Y"])
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: f
    }, {
      variant: "primary",
      text: p.intl.string(p.t["cY+Oob"]),
      onClick: () => {
        t(), f()
      }
    }]
  }, b))
}