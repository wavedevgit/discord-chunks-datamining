/** Chunk was on 27978 **/
let r;
n.d(t, {
  Z: () => N
}), n(388685), n(539854);
var i, l = n(442837),
  a = n(570140),
  o = n(413605),
  s = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  g = n(430824),
  h = n(701190),
  p = n(496675),
  m = n(594174),
  f = n(998502),
  _ = n(981631),
  x = n(176505);

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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let v = _.IlC.APP,
  O = !1,
  I = !1,
  S = [];

function j() {
  O = !0
}
class y extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, h.Z, m.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
    return !!(O && S.length > 0 && v === e)
  }
  getProps() {
    return {
      invite: S.length > 0 ? S[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: I
    }
  }
}
E(y, "displayName", "InviteModalStore");
let N = new y(a.Z, {
  OVERLAY_INITIALIZE: j,
  CONNECTION_OPEN: j,
  CONNECTION_CLOSED: function() {
    O = !1
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
        if (null != d.Z.getChannel(e.id)) return (0, s.XU)(_.ME, e.id), f.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != g.Z.getGuild(n.id) && !(0, o.TY)(t)) {
          let e = function(e) {
            if ((0, o.W6)(e)) return x.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = d.Z.getChannel(t.id);
              if (p.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, s.XU)(n.id, e), f.ZP.focus(), !1
        }
      }
    }
    if (S.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    v = e.context, I = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: l,
        target_user: a,
        target_application: o,
        stage_instance: s,
        type: c,
        channel: d,
        guild: g,
        is_nickname_changeable: h
      } = e, p = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: a,
        target_application: o,
        stage_instance: s,
        type: c,
        is_nickname_changeable: h
      };
      return null != d && (p.channel = b({}, d)), null != g && (p.guild = new u.ZP(g)), null != e.inviter && (p.inviter = b({}, e.inviter)), p
    }(t);
    S.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, I = !1, S.length > 0) {
      let [, e] = S.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    I = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, I = !1
  }
})