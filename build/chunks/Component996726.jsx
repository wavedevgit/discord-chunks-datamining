/** Chunk was on 41700 **/
/** chunk id: 996726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk481051 = require("./481051.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk111583 = require("./111583.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk16507 = require("./16507.js");

function O(e) {
  var {
    channelId: t,
    className: n
  } = e, O = function(e, t) {
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
  }(e, ["channelId", "className"]);
  let j = i.useRef(null),
    x = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
    v = i.useCallback(() => {
      let e = x ? g.MI.NO_CHAT : g.MI.RESIZABLE;
      (0, h.gC)(e)
    }, [x]),
    {
      unreadCount: C,
      mentionCount: I
    } = function(e) {
      let t = (0, a.e7)([u.Z], () => !(0, l.isEmpty)(u.Z.getTypingUsers(e)), [e]),
        {
          unreadCount: n,
          mentionCount: r
        } = (0, a.cj)([d.ZP], () => ({
          unreadCount: d.ZP.getUnreadCount(e),
          mentionCount: d.ZP.getMentionCount(e)
        }), [e]);
      return {
        unreadCount: n,
        mentionCount: r,
        isTyping: t
      }
    }(t),
    _ = i.useCallback(() => {
      var e;
      null == (e = j.current) || e.focus()
    }, []);
  (0, p.yp)({
    event: m.CkL.FOCUS_CHAT_BUTTON,
    handler: _
  });
  let S = x ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
    E = [S];
  I > 0 && E.push(b.intl.formatToPlainString(b.t["3l1GOx"], {
    mentionCount: I
  })), C > 0 && E.push(b.intl.string(b.t.x5zAGZ));
  let Z = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
    P = I > 0 ? I : C,
    T = P > 0;
  return (0, r.jsxs)("div", {
    className: y.wrapper,
    children: [(0, r.jsx)(c.d, function(e) {
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
      isTrayButton: true,
      buttonRef: j,
      onClick: v,
      label: S,
      "aria-label": E.join(", "),
      tooltipPosition: "top",
      iconComponent: Z === g.MI.NO_CHAT ? s.sXD : s.hic,
      themeable: true,
      className: n
    }, O)), T ? (0, r.jsx)(o.Z, {
      hasMentions: I > 0,
      truncatedCount: P > 99 ? "99+" : P,
      className: y.badge
    }) : null]
  })
}