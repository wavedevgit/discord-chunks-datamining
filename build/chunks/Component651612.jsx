/** Chunk was on 49152 **/
/** chunk id: 651612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk408912 = require("./408912.js");

function x(e) {
  var {
    channelId: t,
    className: n
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
  }(e, ["channelId", "className"]);
  let _ = i.useRef(null),
    j = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
    O = i.useCallback(() => {
      let e = j ? g.MI.NO_CHAT : g.MI.RESIZABLE;
      (0, p.gC)(e)
    }, [j]),
    {
      unreadCount: v,
      mentionCount: C
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
      null == (e = _.current) || e.focus()
    }, []);
  (0, h.yp)({
    event: m.CkL.FOCUS_CHAT_BUTTON,
    handler: E
  });
  let S = j ? b.intl.string(b.t["5MstTk"]) : b.intl.string(b.t.kkKapK),
    I = [S];
  C > 0 && I.push(b.intl.formatToPlainString(b.t["3l1GOz"], {
    mentionCount: C
  })), v > 0 && I.push(b.intl.string(b.t.x5zAGR));
  let Z = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
    P = C > 0 ? C : v,
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
      buttonRef: _,
      onClick: O,
      label: S,
      "aria-label": I.join(", "),
      tooltipPosition: "top",
      iconComponent: Z === g.MI.NO_CHAT ? s.sXD : s.hic,
      themeable: true,
      className: n
    }, x)), T ? (0, r.jsx)(o.Z, {
      hasMentions: C > 0,
      truncatedCount: P > 99 ? "99+" : P,
      className: y.badge
    }) : null]
  })
}