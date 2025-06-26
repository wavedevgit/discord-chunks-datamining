/** Chunk was on 27978 **/
let r;
n.d(t, {
  Z: () => y
}), n(388685), n(539854);
var i, l = n(442837),
  a = n(570140),
  o = n(413605),
  s = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  h = n(430824),
  p = n(701190),
  m = n(496675),
  g = n(594174),
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
let I = _.IlC.APP,
  v = !1,
  O = !1,
  N = [];

function j() {
  v = !0
}
class S extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, p.Z, g.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
    return !!(v && N.length > 0 && I === e)
  }
  getProps() {
    return {
      invite: N.length > 0 ? N[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: O
    }
  }
}
E(S, "displayName", "InviteModalStore");
let y = new S(a.Z, {
  OVERLAY_INITIALIZE: j,
  CONNECTION_OPEN: j,
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
        if (null != d.Z.getChannel(e.id)) return (0, s.XU)(_.ME, e.id), f.ZP.focus(), !1
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
              if (m.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, s.XU)(n.id, e), f.ZP.focus(), !1
        }
      }
    }
    if (N.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    I = e.context, O = !1;
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
        guild: h,
        is_nickname_changeable: p
      } = e, m = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: a,
        target_application: o,
        stage_instance: s,
        type: c,
        is_nickname_changeable: p
      };
      return null != d && (m.channel = b({}, d)), null != h && (m.guild = new u.ZP(h)), null != e.inviter && (m.inviter = b({}, e.inviter)), m
    }(t);
    N.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, O = !1, N.length > 0) {
      let [, e] = N.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    O = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    r = t, O = !1
  }
})