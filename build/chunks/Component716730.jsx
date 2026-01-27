/** Chunk was on 41727 **/
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
  }(e, ["channelId", "className"]), _ = l.useRef(null), O = (0, s.bG)([f.Ay], () => f.Ay.getFocusedLayout() === g.E8.RESIZABLE), j = l.useCallback(() => {
    let e = O ? g.E8.NO_CHAT : g.E8.RESIZABLE;
    (0, h.i5)(e)
  }, [O]), {
    unreadCount: v,
    mentionCount: x
  } = function(e) {
    let t = (0, s.bG)([d.A], () => !(0, i.isEmpty)(d.A.getTypingUsers(e)), [e]),
      {
        unreadCount: n,
        mentionCount: r
      } = (0, s.cf)([u.Ay], () => ({
        unreadCount: u.Ay.getUnreadCount(e),
        mentionCount: u.Ay.getMentionCount(e)
      }), [e]);
    return {
      unreadCount: n,
      mentionCount: r,
      isTyping: t
    }
  }(t), E = l.useCallback(() => {
    var e;
    null == (e = _.current) || e.focus()
  }, []);
  (0, p.Vo)({
    event: m.jej.FOCUS_CHAT_BUTTON,
    handler: E
  });
  let C = O ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
    S = [C];
  x > 0 && S.push(b.intl.formatToPlainString(b.t["3l1GOx"], {
    mentionCount: x
  })), v > 0 && S.push(b.intl.string(b.t.x5zAGZ));
  let I = (0, s.bG)([f.Ay], () => f.Ay.getFocusedLayout()),
    N = x > 0 ? x : v,
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
      buttonRef: _,
      onClick: j,
      label: C,
      "aria-label": S.join(", "),
      tooltipPosition: "top",
      iconComponent: I === g.E8.NO_CHAT ? a.jQp : a.g8p,
      themeable: true,
      className: n
    }, y)), T ? (0, r.jsx)(o.A, {
      hasMentions: x > 0,
      truncatedCount: N > 99 ? "99+" : N,
      className: A.qS
    }) : null]
  })
}