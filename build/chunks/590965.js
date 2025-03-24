/** Chunk was on 48909 **/
let r;
n.d(t, {
  Z: () => I
}), n(47120), n(653041);
var i, o = n(442837),
  l = n(570140),
  a = n(413605),
  s = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  p = n(430824),
  f = n(701190),
  h = n(496675),
  _ = n(594174),
  m = n(998502),
  b = n(981631),
  g = n(176505);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let O = b.IlC.APP,
  y = !1,
  C = !1,
  x = [];

function N() {
  y = !0
}
class S extends(i = o.ZP.Store) {
  initialize() {
    this.waitFor(p.Z, f.Z, _.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? b.IlC.OVERLAY : b.IlC.APP;
    return !!(y && x.length > 0 && O === e)
  }
  getProps() {
    return {
      invite: x.length > 0 ? x[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: C
    }
  }
}
E(S, "displayName", "InviteModalStore");
let I = new S(l.Z, {
  OVERLAY_INITIALIZE: N,
  CONNECTION_OPEN: N,
  CONNECTION_CLOSED: function() {
    y = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    if (t.state !== b.r2o.EXPIRED && t.state !== b.r2o.BANNED && t.state !== b.r2o.ERROR) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, c.bc)(e.type)) {
        if (null != d.Z.getChannel(e.id)) return (0, s.XU)(b.ME, e.id), m.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != p.Z.getGuild(n.id) && !(0, a.TY)(t)) {
          let e = function(e) {
            if ((0, a.W6)(e)) return g.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = d.Z.getChannel(t.id);
              if (h.Z.can(b.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, s.XU)(n.id, e), m.ZP.focus(), !1
        }
      }
    }
    if (x.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    O = e.context, C = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: o,
        target_user: l,
        target_application: a,
        stage_instance: s,
        type: c,
        channel: d,
        guild: p,
        is_nickname_changeable: f
      } = e, h = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: o,
        target_user: l,
        target_application: a,
        stage_instance: s,
        type: c,
        is_nickname_changeable: f
      };
      return null != d && (h.channel = v({}, d)), null != p && (h.guild = new u.ZP(p)), null != e.inviter && (h.inviter = v({}, e.inviter)), h
    }(t);
    x.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, C = !1, x.length > 0) {
      let [, e] = x.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    C = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, C = !1
  }
})