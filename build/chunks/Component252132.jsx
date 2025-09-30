/** Chunk was on 91053 **/
/** chunk id: 252132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk27457 = require("./27457.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk441997 = require("./441997.js");

function s(e) {
  var {
    aspectRatio: t,
    blocked: n,
    ignored: s,
    channel: o,
    className: c,
    focused: d,
    children: u,
    inCall: p,
    inPopout: h,
    noBorder: f,
    onClick: g,
    onContextMenu: m,
    onDoubleClick: b,
    onVideoResize: y,
    paused: _,
    pulseSpeakingIndicator: O,
    participant: j,
    width: v
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["aspectRatio", "blocked", "ignored", "channel", "className", "focused", "children", "inCall", "inPopout", "noBorder", "onClick", "onContextMenu", "onDoubleClick", "onVideoResize", "paused", "pulseSpeakingIndicator", "participant", "width"]);
  let C = l.Z.getVideoComponent();
  return (0, r.jsx)("div", {
    style: {
      width: v
    },
    className: a.spaceBetweenTiles,
    children: (0, r.jsxs)("div", {
      className: a.tileSizer,
      style: {
        aspectRatio: t
      },
      children: [(0, r.jsx)(i.ZP, function(e) {
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
        blocked: n,
        ignored: s,
        channel: o,
        className: c,
        focused: d,
        inCall: p,
        inPopout: h,
        noBorder: f,
        onClick: g,
        onContextMenu: m,
        onDoubleClick: b,
        onVideoResize: y,
        participant: j,
        paused: _,
        pulseSpeakingIndicator: O,
        videoComponent: C,
        width: v
      }, x)), u]
    })
  })
}