/** Chunk was on 32098 (809533fdbc51a5c1.js) **/
n.d(t, {
  Z: () => Z
}), n(47120), n(13667), n(390547), n(653041);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(392711),
  a = n.n(o),
  s = n(442837),
  c = n(481060),
  u = n(317381),
  d = n(884338),
  p = n(540059),
  h = n(565799),
  f = n(501655),
  g = n(199902),
  m = n(592125),
  b = n(594174),
  v = n(938475),
  y = n(823379),
  _ = n(709054),
  O = n(853856),
  j = n(981631),
  C = n(388032),
  x = n(430666),
  S = n(399491);

function P(e, t) {
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: x.row,
    children: [(0, r.jsx)(e, {
      className: x.activityIcon,
      color: "currentColor"
    }), (0, r.jsx)(d.Z, {
      guildId: void 0,
      users: t,
      max: 6
    })]
  })
}

function N() {
  let e = (0, s.Wu)([O.Z, m.Z], () => _.default.keys(O.Z.getFavoriteChannels()).map(e => m.Z.getChannel(e)).filter(y.lm)),
    t = e.map(e => e.id),
    n = e.filter(e => e.type === j.d4z.GUILD_VOICE),
    i = e.filter(e => e.type === j.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    l = (0, s.Wu)([v.ZP], () => a().flatMap(n, e => v.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [n]),
    o = (0, s.Wu)([h.Z], () => a().flatMap(i, e => h.Z.getMutableParticipants(e, f.pV.SPEAKER).filter(e => e.type === f.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    p = (0, s.e7)([h.Z], () => {
      let e = 0;
      for (let t of i) e += h.Z.getParticipantCount(t, f.pV.AUDIENCE);
      return e
    }),
    C = (0, s.Wu)([g.Z], () => g.Z.getAllApplicationStreams().filter(e => t.includes(e.channelId)).map(e => e.ownerId), [t]),
    S = (0, s.Wu)([u.ZP], () => {
      let e = u.ZP.getEmbeddedActivitiesByChannel(),
        n = [];
      for (let l of t) {
        var r, i;
        n.push(...null !== (i = null === (r = e.get(l)) || void 0 === r ? void 0 : r.flatMap(e => Array.from(e.userIds))) && void 0 !== i ? i : [])
      }
      return n
    }, [t]),
    N = (0, s.Wu)([b.default], () => S.map(e => b.default.getUser(e)), [S]),
    I = (0, s.Wu)([b.default], () => C.map(e => b.default.getUser(e)), [C]),
    Z = P(c.gj8, l.filter(e => !C.includes(e.id) && !S.includes(e.id))),
    w = 0 === o.length ? null : (0, r.jsxs)("div", {
      className: x.row,
      children: [(0, r.jsx)(c.ewx, {
        size: "lg",
        color: "currentColor",
        className: x.activityIcon
      }), (0, r.jsx)(d.Z, {
        guildId: void 0,
        users: o,
        max: 3
      }), (0, r.jsxs)("div", {
        className: x.stageListenerPill,
        children: [(0, r.jsx)(c.VWR, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)(c.Text, {
          className: x.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/medium",
          children: p
        })]
      })]
    }),
    E = P(c.hGI, I.filter(e => null != e && !S.includes(e.id))),
    T = P(c.nG3, N);
  return (0, r.jsxs)(r.Fragment, {
    children: [w, Z, E, T]
  })
}

function I() {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l()(x.row, x.rowGuildName),
      children: (0, r.jsx)("span", {
        className: l()(x.guildNameText, x.guildNameTextLimitedSize),
        children: C.NW.string(C.t.wMWycn)
      })
    }), (0, r.jsx)(N, {})]
  })
}

function Z(e) {
  let {
    "aria-label": t = !1,
    onShow: n,
    children: i
  } = e, l = (0, p.Q3)("FavoritesTooltip");
  return (0, r.jsx)(c.ua7, {
    hideOnClick: !0,
    spacing: l ? 12 : 20,
    position: "right",
    text: (0, r.jsx)(I, {}),
    "aria-label": t,
    tooltipClassName: S.listItemTooltip,
    onTooltipShow: n,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
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
      }({}, e), n = n = {
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}