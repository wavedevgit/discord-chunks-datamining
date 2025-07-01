/** Chunk was on 27978 **/
let r;
n.d(t, {
  Z: () => N
}), n(388685), n(539854);
var i, l = n(442837),
  s = n(570140),
  a = n(413605),
  o = n(703656),
  c = n(131704),
  u = n(601964),
  d = n(592125),
  h = n(430824),
  p = n(701190),
  g = n(496675),
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
  I = !1,
  j = !1,
  O = [];

function S() {
  I = !0
}
class y extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, p.Z, m.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
    return !!(I && O.length > 0 && v === e)
  }
  getProps() {
    return {
      invite: O.length > 0 ? O[0][0] : null,
      error: null != r && "" !== r ? r : null,
      submitting: j
    }
  }
}
b(y, "displayName", "InviteModalStore");
let N = new y(s.Z, {
  OVERLAY_INITIALIZE: S,
  CONNECTION_OPEN: S,
  CONNECTION_CLOSED: function() {
    I = !1
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
        if (null != d.Z.getChannel(e.id)) return (0, o.XU)(_.ME, e.id), f.ZP.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != h.Z.getGuild(n.id) && !(0, a.TY)(t)) {
          let e = function(e) {
            if ((0, a.W6)(e)) return x.oC.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = d.Z.getChannel(t.id);
              if (g.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, o.XU)(n.id, e), f.ZP.focus(), !1
        }
      }
    }
    if (O.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    v = e.context, j = !1;
    let n = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: r,
        state: i,
        target_type: l,
        target_user: s,
        target_application: a,
        stage_instance: o,
        type: c,
        channel: d,
        guild: h,
        is_nickname_changeable: p
      } = e, g = {
        code: r,
        state: i,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: l,
        target_user: s,
        target_application: a,
        stage_instance: o,
        type: c,
        is_nickname_changeable: p
      };
      return null != d && (g.channel = E({}, d)), null != h && (g.guild = new u.ZP(h)), null != e.inviter && (g.inviter = E({}, e.inviter)), g
    }(t);
    O.push([n, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (r = null, j = !1, O.length > 0) {
      let [, e] = O.shift();
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