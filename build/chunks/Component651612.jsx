/** Chunk was on 86357 **/
/** chunk id: 651612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk332139 = require("./332139.js");

function _(e) {
  var {
    channelId: t,
    className: n
  } = e, _ = function(e, t) {
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
  let C = i.useRef(null),
    x = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === m.MI.RESIZABLE),
    v = i.useCallback(() => {
      let e = x ? m.MI.NO_CHAT : m.MI.RESIZABLE;
      (0, h.gC)(e)
    }, [x]),
    {
      unreadCount: j,
      mentionCount: O
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
    E = i.useCallback(() => {
      var e;
      null == (e = C.current) || e.focus()
    }, []);
  (0, p.yp)({
    event: g.CkL.FOCUS_CHAT_BUTTON,
    handler: E
  });
  let S = x ? b.intl.string(b.t["5MstTk"]) : b.intl.string(b.t.kkKapK),
    P = [S];
  O > 0 && P.push(b.intl.formatToPlainString(b.t["3l1GOz"], {
    mentionCount: O
  })), j > 0 && P.push(b.intl.string(b.t.x5zAGR));
  let I = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
    Z = O > 0 ? O : j,
    T = Z > 0;
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
      buttonRef: C,
      onClick: v,
      label: S,
      "aria-label": P.join(", "),
      tooltipPosition: "top",
      iconComponent: I === m.MI.NO_CHAT ? o.sXD : o.hic,
      themeable: true,
      className: n
    }, _)), T ? (0, r.jsx)(s.Z, {
      hasMentions: O > 0,
      truncatedCount: Z > 99 ? "99+" : Z,
      className: y.badge
    }) : null]
  })
}