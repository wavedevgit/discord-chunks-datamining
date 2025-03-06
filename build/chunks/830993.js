/** Chunk was on 53494 **/
n.d(t, {
  Z: () => N
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
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
  v = n(823379),
  y = n(355363),
  _ = n(449932),
  O = n(561788),
  j = n(876548),
  C = n(543432),
  x = n(981631),
  S = n(388032),
  P = n(248657),
  I = n(270779);

function N(e) {
  var t, o;
  let {
    channel: l,
    guild: h,
    onAction: f,
    voiceStates: g,
    isChannelSelected: b,
    shouldShowSettingNudge: y
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
  }(l, g);
  let O = (0, u.ZP)(l),
    j = Array.from((0, u.uF)(O).values()),
    C = null !== (t = null == g ? void 0 : g.filter(v.lm)) && void 0 !== t ? t : [],
    I = e => t => [x.IIU.PLAYING, x.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === x.IIU.LISTENING,
    N = (0, a.e7)([m.Z], () => {
      let e = {};
      return C.forEach(t => {
        let n = m.Z.findActivity(t.user.id, I(t));
        if (null != n && !(0, p.Z)(n)) {
          var r, i, o, l;
          let a = "".concat(null !== (i = n.application_id) && void 0 !== i ? i : "", ":").concat(null !== (o = null === (r = n.party) || void 0 === r ? void 0 : r.id) && void 0 !== o ? o : t.user.id),
            s = null !== (l = e[a]) && void 0 !== l ? l : {
              members: [],
              activity: n
            };
          s.members.push(t), (0, d.Z)(s.activity, x.xjy.JOIN) || (s.activity = n), e[a] = s
        }
      }), Object.values(e)
    }, [C], a.pF);
  return N.length + j.length === 0 ? null : (0, r.jsxs)(s.Ttm, {
    className: P.container,
    children: [(0, r.jsx)(Z, {
      channel: l,
      isChannelSelected: b,
      voiceStatesCount: null !== (o = null == g ? void 0 : g.length) && void 0 !== o ? o : 0
    }), (0, r.jsx)("div", {
      className: P.headerDivider
    }), j.map((e, t) => {
      var n;
      return (0, r.jsx)(_.Z, {
        embeddedApp: e,
        presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
        channel: l,
        onAction: f
      }, t)
    }), N.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return (0, r.jsx)(_.Z, {
        presenceActivity: i,
        channel: l,
        members: n,
        onAction: f
      }, t)
    }), y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: P.headerDivider
      }), (0, r.jsx)("div", {
        className: P.settingNudgeText,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: S.NW.format(S.t.ePyoY2, {
            onClick: () => {
              (0, s.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("93828"), n.e("11935"), n.e("8016"), n.e("17938"), n.e("76540"), n.e("40580"), n.e("49508"), n.e("22646"), n.e("3940"), n.e("25183"), n.e("48923"), n.e("30419"), n.e("18824"), n.e("51724"), n.e("57535"), n.e("61854")]).then(n.bind(n, 241420));
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

function Z(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: i
  } = e, o = (0, a.e7)([g.Z], () => !g.Z.can(x.Plq.CONNECT, t)), s = (0, a.e7)([b.Z], () => b.Z.hasVideo(t.id)), c = (0, y.ZP)({
    channel: t,
    locked: o,
    video: s,
    selected: n
  }), u = (0, a.e7)([f.Z], () => f.Z.getGuild(t.guild_id));
  return null == (0, h.KS)(t, u) ? null : (0, r.jsxs)("div", {
    className: l()(P.popoutHeaderContainer, I.popoutHeaderContainer),
    children: [(0, r.jsx)(O.Z, {
      channel: t
    }), c ? (0, r.jsx)(j.Z, {
      userCount: i,
      video: s,
      channel: t
    }) : (0, r.jsx)(C.Z, {
      userCount: i
    })]
  })
}