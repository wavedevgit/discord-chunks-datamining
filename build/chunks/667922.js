/** Chunk was on 37220 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  a = n(481060),
  o = n(543241),
  s = n(222677),
  c = n(995774),
  u = n(665906),
  d = n(695346),
  f = n(496675),
  g = n(768581),
  m = n(585483),
  b = n(176354),
  p = n(981631),
  h = n(185923),
  v = n(388032);

function y(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(a.Sfi), g = (0, u.$R)(t), y = (0, l.e7)([f.Z], () => (t.isPrivate() || f.Z.can(p.Plq.ADD_REACTIONS, t)) && g, [t, g]), O = (0, o.MZ)(t.getGuildId());
  if (!d.nc.getSetting() || !y || e.type === p.uaV.GUILD_INVITE_REMINDER) return null;
  let E = O.filter(e => !b.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: h.Hz.REACTION
  })).slice(0, 12).map((i, l) => {
    var o, u;
    return (0, r.jsx)(a.sNh, {
      color: "default",
      id: null !== (u = null !== (o = i.id) && void 0 !== o ? o : i.optionallyDiverseSequence) && void 0 !== u ? u : i.name,
      label: ":".concat(i.name, ":"),
      icon: e => {
        var t, l;
        return (0, r.jsx)(N, (t = function(e) {
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
        }({}, e), l = l = {
          reducedMotionEnabled: n.enabled,
          emoji: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      },
      action: () => {
        (0, s.rU)(t.id, e.id, (0, c.g1)(i), s.TW.MESSAGE_CONTEXT_MENU)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, r.jsx)(a.sNh, {
    id: "add-reaction",
    label: v.NW.string(v.t.lfIHs7),
    action: () => {
      m.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, r.jsxs)(r.Fragment, {
      children: [E, (0, r.jsx)(a.Clw, {}), (0, r.jsx)(a.sNh, {
        color: "default",
        id: "other-reactions",
        label: v.NW.string(v.t["OBCR+v"]),
        icon: a.EO4,
        action: () => {
          m.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}

function N(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: l = "",
    isFocused: a = !1
  } = e;
  return (0, r.jsx)("img", {
    className: l,
    src: null != n.id ? g.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || a),
      size: 18
    }) : b.ZP.getURL(null !== (t = n.optionallyDiverseSequence) && void 0 !== t ? t : ""),
    alt: ""
  })
}