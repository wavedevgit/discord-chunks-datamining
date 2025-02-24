/** Chunk was on 624 (6327fcf0ec798877.js) **/
n.d(t, {
  Z: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(596454),
  d = n(906732),
  u = n(856768),
  m = n(993413),
  g = n(921801),
  p = n(208049),
  h = n(763296),
  f = n(242291),
  b = n(893663),
  N = n(331642),
  x = n(63063),
  _ = n(581883),
  E = n(738486),
  j = n(918257),
  C = n(970813),
  O = n(726985),
  v = n(981631),
  S = n(710111),
  T = n(388032),
  I = n(317224),
  y = n(455812);

function A(e) {
  return (0, l.e7)([h.Z], () => {
    if (null == e) return null;
    let {
      guildId: t,
      soundId: n
    } = e;
    return h.Z.getSound(t === S.hY ? S.X8 : t, n)
  })
}

function P(e) {
  let {
    refreshStyles: t = !1
  } = e, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(g.F, {
      setting: O.s6.VOICE_AND_VIDEO_SOUNDBOARD,
      children: [(0, r.jsx)(j.Z, {
        refreshStyles: t
      }), (0, r.jsx)(C.Z, {
        refreshStyles: t
      })]
    }), (0, r.jsxs)(g.F, {
      setting: O.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
      children: [t ? null : (0, r.jsx)(o.$i$, {
        className: I.callSoundsDivider
      }), (0, r.jsx)(R, {
        refreshStyles: t
      })]
    })]
  });
  return t ? n : (0, r.jsx)(o.hjN, {
    className: I.container,
    tag: o.RB0.H1,
    titleClassName: y.__invalid_marginBottom16,
    title: T.NW.string(T.t.ABjMWF),
    children: n
  })
}

function R(e) {
  let {
    refreshStyles: t
  } = e, {
    analyticsLocations: n
  } = (0, d.ZP)(), [s, c] = i.useState(S.hY), g = (0, b.tT)(s), _ = A(g), j = (null == g ? void 0 : g.type) === b.zx.GLOBAL, C = (0, l.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != g && null == _;
  i.useEffect(() => {
    C && (0, f.tt)({
      location: n
    })
  }, [C, n]), i.useEffect(() => {
    (0, p.w)()
  }, []);
  let O = i.useCallback((e, t) => {
      let {
        inDropdown: n
      } = t;
      return null == e ? null : n ? (0, r.jsx)(D, {
        guildId: e.value
      }) : null
    }, []),
    P = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.xJW, {
        title: T.NW.string(T.t.nzUc3N),
        children: (0, r.jsx)(o.R94, {
          children: T.NW.format(T.t.u9RWmp, {
            helpdeskArticle: x.Z.getArticleURL(v.BhN.SOUNDBOARD)
          })
        })
      }), (0, r.jsx)(u.Z, {
        guildId: s,
        className: a()(I.guildSelector, {
          [I.refreshGuildSelector]: t
        }),
        globalOption: {
          label: T.NW.string(T.t.CpEUPz),
          value: S.hY
        },
        onChange: e => {
          c(null == e ? S.hY : e.id)
        },
        renderOptionSuffix: O,
        hideDivider: !0
      }), (0, r.jsxs)(m.Z, {
        className: a()({
          [y.marginTop20]: !t
        }),
        title: T.NW.format(T.t.I2TsYG, {
          nitroWheelHook: () => (0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: I.nitroWheel
          })
        }),
        forcedDivider: !t,
        children: [(0, r.jsx)(N.Z, {
          sound: _,
          isGlobal: j,
          onSelect: e => {
            null == e ? (0, f.aC)(s, n) : (0, f.SZ)(s, e, n)
          }
        }), C && (0, r.jsx)(o.Wn, {
          className: I.notice,
          messageType: o.QYI.WARNING,
          children: T.NW.string(T.t.WkPsFR)
        })]
      })]
    });
  return t ? (0, r.jsx)(E.Z, {
    children: P
  }) : P
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([_.Z], () => {
    var e, n, r;
    return null === (r = _.Z.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound
  }), i = A(n);
  if (null == n || null == i) return null;
  let {
    emojiId: s,
    emojiName: a
  } = i, d = null != s || null != a;
  return (0, r.jsxs)("div", {
    className: I.pill,
    children: [d ? (0, r.jsx)(c.Z, {
      emojiId: s,
      emojiName: a,
      className: I.pillIcon
    }) : (0, r.jsx)(o.gj8, {
      size: "md",
      color: "currentColor",
      className: I.pillIcon
    }), (0, r.jsx)(o.Text, {
      className: I.pillText,
      variant: "text-xs/medium",
      children: i.name
    })]
  })
}