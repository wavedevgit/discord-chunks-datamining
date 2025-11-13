/** Chunk was on 1272 **/
/** chunk id: 525296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk730749 = require("./730749.jsx"),
  Chunk430824 = require("./430824.js");

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
  return (0, s.Z)(class extends i.Component {
    render() {
      return (0, r.jsx)(e, u(c({}, this.props), {
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      }))
    }
    handleMessageUser(e, t) {
      return l.Z.openPrivateChannel({
        recipientIds: t.id
      })
    }
    handleUserContextMenu(e, t, i) {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, u(c({}, n), {
          user: t
        }))
      }, {
        onClose: i
      })
    }
    handleGuildContextMenu(e, t) {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("70018"), n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("384"), n.e("87154"), n.e("33213"), n.e("1289")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, u(c({}, n), {
          guild: t
        }))
      })
    }
    handleChannelContextMenu(e, t) {
      let i = o.Z.getGuild(t.getGuildId());
      if (null == i) return null;
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("40283").then(n.bind(n, 428108));
        return n => (0, r.jsx)(e, u(c({}, n), {
          channel: t,
          guild: i
        }))
      })
    }
  })
}