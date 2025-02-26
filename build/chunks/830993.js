/** Chunk was on 30829 **/
n.d(t, {
  Z: () => Z
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(616780),
  u = n(619915),
  d = n(620662),
  p = n(841784),
  h = n(471445),
  f = n(430824),
  g = n(496675),
  m = n(158776),
  b = n(979651),
  y = n(823379),
  v = n(355363),
  O = n(449932),
  j = n(561788),
  _ = n(876548),
  C = n(543432),
  x = n(981631),
  P = n(388032),
  N = n(931857),
  S = n(513538);

function Z(e) {
  var t, l;
  let {
    channel: o,
    guild: h,
    onAction: f,
    voiceStates: g,
    isChannelSelected: b,
    shouldShowSettingNudge: v
  } = e;
  ! function(e, t) {
    let n = i.useMemo(() => {
      var n;
      return null == t || t.length > 50 ? {} : {
        [e.getGuildId()]: null !== (n = t.map(e => {
          let {
            user: t
          } = e;
          return t.id
        })) && void 0 !== n ? n : []
      }
    }, [e, t]);
    (0, c.$)(n)
  }(o, g);
  let j = (0, u.ZP)(o),
    _ = Array.from((0, u.uF)(j).values()),
    C = null !== (t = null == g ? void 0 : g.filter(y.lm)) && void 0 !== t ? t : [],
    S = e => t => [x.IIU.PLAYING, x.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === x.IIU.LISTENING,
    Z = (0, a.e7)([m.Z], () => {
      let e = {};
      return C.forEach(t => {
        let n = m.Z.findActivity(t.user.id, S(t));
        if (null != n && !(0, p.Z)(n)) {
          var r, i, l, o;
          let a = "".concat(null !== (i = n.application_id) && void 0 !== i ? i : "", ":").concat(null !== (l = null === (r = n.party) || void 0 === r ? void 0 : r.id) && void 0 !== l ? l : t.user.id),
            s = null !== (o = e[a]) && void 0 !== o ? o : {
              members: [],
              activity: n
            };
          s.members.push(t), (0, d.Z)(s.activity, x.xjy.JOIN) || (s.activity = n), e[a] = s
        }
      }), Object.values(e)
    }, [C], a.pF);
  return Z.length + _.length === 0 ? null : (0, r.jsxs)(s.Ttm, {
    className: N.container,
    children: [(0, r.jsx)(I, {
      channel: o,
      isChannelSelected: b,
      voiceStatesCount: null !== (l = null == g ? void 0 : g.length) && void 0 !== l ? l : 0
    }), (0, r.jsx)("div", {
      className: N.headerDivider
    }), _.map((e, t) => {
      var n;
      return (0, r.jsx)(O.Z, {
        embeddedApp: e,
        presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
        channel: o,
        onAction: f
      }, t)
    }), Z.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return (0, r.jsx)(O.Z, {
        presenceActivity: i,
        channel: o,
        members: n,
        onAction: f
      }, t)
    }), v && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: N.headerDivider
      }), (0, r.jsx)("div", {
        className: N.settingNudgeText,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: P.NW.format(P.t.ePyoY2, {
            onClick: () => {
              (0, s.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("93828"), n.e("84605"), n.e("8016"), n.e("17938"), n.e("76540"), n.e("40580"), n.e("49508"), n.e("22646"), n.e("3940"), n.e("25183"), n.e("48923"), n.e("30419"), n.e("18824"), n.e("53485"), n.e("40383"), n.e("48727")]).then(n.bind(n, 241420));
                return t => {
                  var n, i;
                  return (0, r.jsx)(e, (n = function(e) {
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
                  }({}, t), i = i = {
                    guild: h
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                  }), n))
                }
              })
            }
          })
        })
      })]
    })]
  })
}

function I(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: i
  } = e, l = (0, a.e7)([g.Z], () => !g.Z.can(x.Plq.CONNECT, t)), s = (0, a.e7)([b.Z], () => b.Z.hasVideo(t.id)), c = (0, v.ZP)({
    channel: t,
    locked: l,
    video: s,
    selected: n
  }), u = (0, a.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
  return null == (0, h.KS)(t, u) ? null : (0, r.jsxs)("div", {
    className: o()(N.popoutHeaderContainer, S.popoutHeaderContainer),
    children: [(0, r.jsx)(j.Z, {
      channel: t
    }), c ? (0, r.jsx)(_.Z, {
      userCount: i,
      video: s,
      channel: t
    }) : (0, r.jsx)(C.Z, {
      userCount: i
    })]
  })
}