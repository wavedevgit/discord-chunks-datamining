/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  l = n(493683),
  o = n(239091),
  a = n(730749),
  s = n(430824);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
  return (0, a.Z)(class extends i.Component {
    render() {
      return (0, r.jsx)(e, u(c({}, this.props), {
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      }))
    }
    handleMessageUser(e, t) {
      return l.Z.openPrivateChannel(t.id)
    }
    handleUserContextMenu(e, t, i) {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("31923")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, u(c({}, n), {
          user: t
        }))
      }, {
        onClose: i
      })
    }
    handleGuildContextMenu(e, t) {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("44156"), n.e("79783"), n.e("6850"), n.e("16114"), n.e("58227"), n.e("54408"), n.e("71567"), n.e("69760"), n.e("33213"), n.e("57191")]).then(n.bind(n, 545135));
        return n => (0, r.jsx)(e, u(c({}, n), {
          guild: t
        }))
      })
    }
    handleChannelContextMenu(e, t) {
      let i = s.Z.getGuild(t.getGuildId());
      if (null == i) return null;
      (0, o.jW)(e, async () => {
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