/** Chunk was on 27978 **/
let r;
n.d(t, {
  Z: () => y
}), n(388685), n(539854);
var i, s = n(442837),
  l = n(570140),
  o = n(413605),
  a = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  h = n(430824),
  p = n(701190),
  g = n(496675),
  f = n(594174),
  m = n(998502),
  _ = n(981631),
  N = n(176505);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
let E = _.IlC.APP,
  v = !1,
  j = !1,
  I = [];

function O() {
  v = !0
}
class S extends(i = s.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, p.Z, f.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
    return !!(v && I.length > 0 && E === e)
  }
  getProps() {
    return {
      invite: I.length > 0 ? I[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: j
    }
  }
}
x(S, "displayName", "InviteModalStore");
let y = new S(l.Z, {
  OVERLAY_INITIALIZE: O,
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: function() {
    v = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    if (t.state !== _.r2o.EXPIRED && t.state !== _.r2o.BANNED && t.state !== _.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, c.bc)(e.type)) {
        if (null != d.Z.getChannel(e.id)) return (0, a.XU)(_.ME, e.id), m.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != h.Z.getGuild(n.id) && !(0, o.TY)(t)) {
          let e = function(e) {
            if ((0, o.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = d.Z.getChannel(t.id);
              if (g.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, a.XU)(n.id, e), m.ZP.focus(), !1
        }
      }
    }
    if (I.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    E = e.context, j = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: s,
        target_user: l,
        target_application: o,
        stage_instance: a,
        type: c,
        channel: d,
        guild: h,
        is_nickname_changeable: p
      } = e, g = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: s,
        target_user: l,
        target_application: o,
        stage_instance: a,
        type: c,
        is_nickname_changeable: p
      };
      return null != d && (g.channel = b({}, d)), null != h && (g.guild = new u.ZP(h)), null != e.inviter && (g.inviter = b({}, e.inviter)), g
    }(t);
    I.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, j = !1, I.length > 0) {
      let [, e] = I.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    j = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, j = !1
  }
})