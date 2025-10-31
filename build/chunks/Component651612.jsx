/** Chunk was on 91053 **/
/** chunk id: 651612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function y(e) {
  var {
    channelId: t,
    className: n
  } = e, y = function(e, t) {
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
  let x = i.useRef(null),
    O = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
    j = i.useCallback(() => {
      let e = O ? g.MI.NO_CHAT : g.MI.RESIZABLE;
      (0, h.gC)(e)
    }, [O]),
    {
      unreadCount: v,
      mentionCount: C
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
    I = i.useCallback(() => {
      var e;
      null == (e = x.current) || e.focus()
    }, []);
  (0, p.yp)({
    event: m.CkL.FOCUS_CHAT_BUTTON,
    handler: I
  });
  let S = O ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
    E = [S];
  C > 0 && E.push(b.intl.formatToPlainString(b.t["3l1GOx"], {
    mentionCount: C
  })), v > 0 && E.push(b.intl.string(b.t.x5zAGZ));
  let Z = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
    P = C > 0 ? C : v,
    T = P > 0;
  return (0, r.jsxs)("div", {
    className: _.wrapper,
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
      buttonRef: x,
      onClick: j,
      label: S,
      "aria-label": E.join(", "),
      tooltipPosition: "top",
      iconComponent: Z === g.MI.NO_CHAT ? s.sXD : s.hic,
      themeable: true,
      className: n
    }, y)), T ? (0, r.jsx)(o.Z, {
      hasMentions: C > 0,
      truncatedCount: P > 99 ? "99+" : P,
      className: _.badge
    }) : null]
  })
}