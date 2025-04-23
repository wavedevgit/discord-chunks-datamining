/** Chunk was on 27978 **/
let r;
n.d(t, {
  Z: () => y
}), n(388685), n(539854);
var i, l = n(442837),
  s = n(570140),
  o = n(413605),
  a = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  h = n(430824),
  g = n(701190),
  p = n(496675),
  m = n(594174),
  f = n(998502),
  _ = n(981631),
  x = n(176505);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let v = _.IlC.APP,
  j = !1,
  I = !1,
  O = [];

function S() {
  j = !0
}
class N extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, g.Z, m.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
    return !!(j && O.length > 0 && v === e)
  }
  getProps() {
    return {
      invite: O.length > 0 ? O[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: I
    }
  }
}
b(N, "displayName", "InviteModalStore");
let y = new N(s.Z, {
  OVERLAY_INITIALIZE: S,
  CONNECTION_OPEN: S,
  CONNECTION_CLOSED: function() {
    j = !1
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
        if (null != d.Z.getChannel(e.id)) return (0, a.XU)(_.ME, e.id), f.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != h.Z.getGuild(n.id) && !(0, o.TY)(t)) {
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
          return (0, a.XU)(n.id, e), f.ZP.focus(), !1
        }
      }
    }
    if (O.some(e => {
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
        target_user: s,
        target_application: o,
        stage_instance: a,
        type: c,
        channel: d,
        guild: h,
        is_nickname_changeable: g
      } = e, p = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: s,
        target_application: o,
        stage_instance: a,
        type: c,
        is_nickname_changeable: g
      };
      return null != d && (p.channel = E({}, d)), null != h && (p.guild = new u.ZP(h)), null != e.inviter && (p.inviter = E({}, e.inviter)), p
    }(t);
    O.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, I = !1, O.length > 0) {
      let [, e] = O.shift();
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