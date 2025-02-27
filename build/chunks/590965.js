/** Chunk was on 7503 **/
let i;
n.d(t, {
  Z: () => w
}), n(47120), n(653041);
var r, l = n(442837),
  u = n(570140),
  o = n(413605),
  a = n(703656),
  c = n(131704),
  d = n(601964),
  s = n(592125),
  f = n(430824),
  g = n(701190),
  O = n(496675),
  S = n(594174),
  v = n(998502),
  m = n(981631),
  A = n(176505);

function E(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let p = m.IlC.APP,
  _ = !1,
  L = !1,
  N = [];

function h() {
  _ = !0
}
class T extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, g.Z, S.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? m.IlC.OVERLAY : m.IlC.APP;
    return !!(_ && N.length > 0 && p === e)
  }
  getProps() {
    return {
      invite: N.length > 0 ? N[0][0] : null,
      error: null != i && "" !== i ? i : null,
      submitting: L
    }
  }
}
E(T, "displayName", "InviteModalStore");
let w = new T(u.Z, {
  OVERLAY_INITIALIZE: h,
  CONNECTION_OPEN: h,
  CONNECTION_CLOSED: function() {
    _ = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    if (t.state !== m.r2o.EXPIRED && t.state !== m.r2o.BANNED && t.state !== m.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, c.bc)(e.type)) {
        if (null != s.Z.getChannel(e.id)) return (0, a.XU)(m.ME, e.id), v.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != f.Z.getGuild(n.id) && !(0, o.TY)(t)) {
          let e = function(e) {
            if ((0, o.W6)(e)) return A.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = s.Z.getChannel(t.id);
              if (O.Z.can(m.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, a.XU)(n.id, e), v.ZP.focus(), !1
        }
      }
    }
    if (N.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    p = e.context, L = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: i,
        state: r,
        target_type: l,
        target_user: u,
        target_application: o,
        stage_instance: a,
        type: c,
        channel: s,
        guild: f,
        is_nickname_changeable: g
      } = e, O = {
        code: i,
        state: r,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: u,
        target_application: o,
        stage_instance: a,
        type: c,
        is_nickname_changeable: g
      };
      return null != s && (O.channel = b({}, s)), null != f && (O.guild = new d.ZP(f)), null != e.inviter && (O.inviter = b({}, e.inviter)), O
    }(t);
    N.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (i = null, L = !1, N.length > 0) {
      let [, e] = N.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    L = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    i = t, L = !1
  }
})