/** Chunk was on 71447 **/
/** chunk id: 534765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk442433 = require("./442433.js"),
  Chunk95701 = require("./95701.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c(e) {
  let {
    channel: t,
    guild: c,
    user: d
  } = e;
  return r.useCallback(e => {
    if (null != t) {
      if (t.isMultiUserDM()) return void(0, l.L3)(e, async () => {
        let {
          default: e
        } = await n.e("77927").then(n.bind(n, 320442));
        return n => (0, i.jsx)(e, u(s({}, n), {
          channel: t,
          selected: false,
          widgetType: o.uss.TEXT_CHAT_V3
        }))
      });
      if (t.isDM() && null != d) return void(0, l.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("93169"), n.e("25339")]).then(n.bind(n, 92016));
        return n => (0, i.jsx)(e, u(s({}, n), {
          user: d,
          channel: t,
          showModalItems: false,
          widgetType: o.uss.TEXT_CHAT_V3
        }))
      });
      if (t.isModeratorReportChannel()) return void(0, l.L3)(e, async () => {
        let {
          default: e
        } = await n.e("56985").then(n.bind(n, 95616));
        return n => (0, i.jsx)(e, u(s({}, n), {
          channel: t,
          widgetType: o.uss.TEXT_CHAT_V3
        }))
      });
      if ((0, a.ay)(t.type)) {
        if (null == c) return;
        (0, l.L3)(e, async () => {
          let {
            default: e
          } = await n.e("21905").then(n.bind(n, 769192));
          return n => (0, i.jsx)(e, u(s({}, n), {
            channel: t,
            guild: c,
            widgetType: o.uss.TEXT_CHAT_V3
          }))
        });
        return
      }
      null != c && (0, l.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("54036")]).then(n.bind(n, 813407));
        return n => (0, i.jsx)(e, u(s({}, n), {
          channel: t,
          guild: c,
          widgetType: o.uss.TEXT_CHAT_V3
        }))
      })
    }
  }, [t, c, d])
}