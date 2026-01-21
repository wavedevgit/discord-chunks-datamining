/** Chunk was on 82124 **/
/** chunk id: 996726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  var {
    channelId: t,
    className: n
  } = e, v = function(e, t) {
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
  let O = i.useRef(null),
    j = (0, a.e7)([h.ZP], () => h.ZP.getFocusedLayout() === g.MI.RESIZABLE),
    x = i.useCallback(() => {
      let e = j ? g.MI.NO_CHAT : g.MI.RESIZABLE;
      (0, f.gC)(e)
    }, [j]),
    {
      unreadCount: C,
      mentionCount: E
    } = function(e) {
      let t = (0, a.e7)([d.Z], () => !(0, l.isEmpty)(d.Z.getTypingUsers(e)), [e]),
        {
          unreadCount: n,
          mentionCount: r
        } = (0, a.cj)([u.ZP], () => ({
          unreadCount: u.ZP.getUnreadCount(e),
          mentionCount: u.ZP.getMentionCount(e)
        }), [e]);
      return {
        unreadCount: n,
        mentionCount: r,
        isTyping: t
      }
    }(t),
    S = i.useCallback(() => {
      var e;
      null == (e = O.current) || e.focus()
    }, []);
  (0, p.yp)({
    event: m.CkL.FOCUS_CHAT_BUTTON,
    handler: S
  });
  let _ = j ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
    I = [_];
  E > 0 && I.push(b.intl.formatToPlainString(b.t["3l1GOx"], {
    mentionCount: E
  })), C > 0 && I.push(b.intl.string(b.t.x5zAGZ));
  let P = (0, a.e7)([h.ZP], () => h.ZP.getFocusedLayout()),
    Z = E > 0 ? E : C,
    N = Z > 0;
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
      buttonRef: O,
      onClick: x,
      label: _,
      "aria-label": I.join(", "),
      tooltipPosition: "top",
      iconComponent: P === g.MI.NO_CHAT ? o.sXD : o.hic,
      themeable: true,
      className: n
    }, v)), N ? (0, r.jsx)(s.Z, {
      hasMentions: E > 0,
      truncatedCount: Z > 99 ? "99+" : Z,
      className: y.badge
    }) : null]
  })
}