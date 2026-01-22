/** Chunk was on 97492 **/
/** chunk id: 716730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk315502 = require("./315502.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk741961 = require("./741961.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk766924 = require("./766924.js");

function y(e) {
  let {
    channelId: t,
    className: n
  } = e, y = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["channelId", "className"]), O = l.useRef(null), j = (0, a.bG)([h.Ay], () => h.Ay.getFocusedLayout() === b.E8.RESIZABLE), v = l.useCallback(() => {
    let e = j ? b.E8.NO_CHAT : b.E8.RESIZABLE;
    (0, p.i5)(e)
  }, [j]), {
    unreadCount: x,
    mentionCount: E
  } = function(e) {
    let t = (0, a.bG)([d.A], () => !(0, i.isEmpty)(d.A.getTypingUsers(e)), [e]),
      {
        unreadCount: n,
        mentionCount: r
      } = (0, a.cf)([u.Ay], () => ({
        unreadCount: u.Ay.getUnreadCount(e),
        mentionCount: u.Ay.getMentionCount(e)
      }), [e]);
    return {
      unreadCount: n,
      mentionCount: r,
      isTyping: t
    }
  }(t), _ = l.useCallback(() => {
    var e;
    null == (e = O.current) || e.focus()
  }, []);
  (0, f.Vo)({
    event: g.jej.FOCUS_CHAT_BUTTON,
    handler: _
  });
  let C = j ? m.intl.string(m.t["5MstTl"]) : m.intl.string(m.t.kkKapG),
    S = [C];
  E > 0 && S.push(m.intl.formatToPlainString(m.t["3l1GOx"], {
    mentionCount: E
  })), x > 0 && S.push(m.intl.string(m.t.x5zAGZ));
  let I = (0, a.bG)([h.Ay], () => h.Ay.getFocusedLayout()),
    N = E > 0 ? E : x,
    T = N > 0;
  return (0, r.jsxs)("div", {
    className: A.iE,
    children: [(0, r.jsx)(c.l, function(e) {
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
      onClick: v,
      label: C,
      "aria-label": S.join(", "),
      tooltipPosition: "top",
      iconComponent: I === b.E8.NO_CHAT ? s.jQp : s.g8p,
      themeable: true,
      className: n
    }, y)), T ? (0, r.jsx)(o.A, {
      hasMentions: E > 0,
      truncatedCount: N > 99 ? "99+" : N,
      className: A.qS
    }) : null]
  })
}