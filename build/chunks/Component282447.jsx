/** Chunk was on 21738 **/
/** chunk id: 282447, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk71393 = require("./71393.js");

function c(e) {
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
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  return (0, s.A)(class extends i.Component {
    render() {
      return (0, r.jsx)(e, u(c({}, this.props), {
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      }))
    }
    handleMessageUser(e, t) {
      return l.A.openPrivateChannel({
        recipientIds: t.id
      })
    }
    handleUserContextMenu(e, t, i) {
      (0, a.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(n.bind(n, 668569));
        return n => (0, r.jsx)(e, u(c({}, n), {
          user: t
        }))
      }, {
        onClose: i
      })
    }
    handleGuildContextMenu(e, t) {
      (0, a.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("68587"), n.e("43600"), n.e("63379"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("11810"), n.e("8458"), n.e("39048"), n.e("59735"), n.e("54469"), n.e("52191")]).then(n.bind(n, 544676));
        return n => (0, r.jsx)(e, u(c({}, n), {
          guild: t
        }))
      })
    }
    handleChannelContextMenu(e, t) {
      let i = o.A.getGuild(t.getGuildId());
      if (null == i) return null;
      (0, a.L3)(e, async () => {
        let {
          default: e
        } = await n.e("67596").then(n.bind(n, 113255));
        return n => (0, r.jsx)(e, u(c({}, n), {
          channel: t,
          guild: i
        }))
      })
    }
  })
}