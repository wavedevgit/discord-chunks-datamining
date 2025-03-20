/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(525654),
  o = n.n(l),
  A = n(442837),
  c = n(846519),
  d = n(481060),
  u = n(232567),
  g = n(596454),
  f = n(410030),
  m = n(623624),
  p = n(357156),
  h = n(208049),
  C = n(763296),
  b = n(22382),
  v = n(747071),
  x = n(286654),
  N = n(171368),
  j = n(430824),
  E = n(594174),
  I = n(15385),
  O = n(768581),
  y = n(267642),
  w = n(358085),
  P = n(51144),
  B = n(999382),
  D = n(70409),
  T = n(981631),
  S = n(710111),
  L = n(388032),
  R = n(70235);

function Q(e) {
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
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = w.isPlatformEmbedded || "Safari" !== o().name && "Firefox" !== o().name;

function k() {
  let e = (0, A.e7)([B.Z], () => B.Z.getProps().guild);
  return null == e ? null : (0, r.jsx)(d.hjN, {
    tag: d.RB0.H1,
    title: L.NW.string(L.t.OWQNYm),
    children: (0, r.jsx)(U, {
      guild: e
    })
  })
}

function M(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(d.X6q, {
    className: R.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function _(e) {
  let {
    currentTier: t,
    availableSounds: n,
    guildId: i
  } = e, s = j.Z.getGuild(i), a = null != s ? (0, y.nL)(s) : 0;
  return 0 === t ? (0, r.jsx)(r.Fragment, {
    children: L.NW.format(L.t["7E9Hd3"], {
      slots: n,
      totalSlots: a
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.ua7, {
      text: L.NW.formatToPlainString(L.t.tuuJJS, {
        currentBoostLevel: t
      }),
      children: e => (0, r.jsx)(d.P3F, {
        className: R.boostingIconWrapper,
        onClick: () => {
          (0, m.f)({
            guildId: i,
            location: {
              section: T.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: T.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, r.jsx)(I.Z, Q({}, e))
      })
    }), L.NW.format(L.t.HHCdvb, {
      slots: n,
      totalSlots: a,
      boostLevel: t
    })]
  })
}
let G = e => {
    var {
      renderPopoutBody: t,
      renderPopoutChildren: n
    } = e, s = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["renderPopoutBody", "renderPopoutChildren"]);
    let [a, l] = i.useState(!1), o = i.useMemo(() => new c.V7, []), A = i.useCallback(() => {
      o.stop(), l(!0)
    }, [o]), u = i.useCallback(() => {
      o.start(200, () => l(!1))
    }, [o]);
    return (0, r.jsx)(d.yRy, W(Q({
      shouldShow: a,
      renderPopout: e => (0, r.jsx)(d.VqE, {
        className: R.browserUnsupportedDialog,
        onMouseEnter: A,
        onMouseLeave: u,
        children: t(e)
      })
    }, s), {
      children: e => n(e)
    }))
  },
  F = () => (0, r.jsx)(G, {
    renderPopoutBody: () => (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: L.NW.format(L.t.bGXPVl, {})
    }),
    renderPopoutChildren: e => (0, r.jsx)(d.zxk, W(Q({}, e), {
      disabled: !0,
      children: L.NW.string(L.t["/uNYPD"])
    }))
  });

function U(e) {
  let {
    guild: t
  } = e, [s, a] = (0, A.Wu)([C.Z], () => {
    var e;
    return [null !== (e = C.Z.getSoundsForGuild(t.id)) && void 0 !== e ? e : S.Hy, C.Z.isFetchingSounds() || C.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: l
  } = (0, p.XJ)(t), o = i.useRef(null), c = (0, f.ZP)(), u = t.premiumTier, g = (0, y.yw)(t, s, u);
  i.useEffect(() => {
    (0, h.w)()
  }, []);
  let m = i.useMemo(() => s.reduce((e, t) => (e[t.soundId] = new Audio((0, b.Z)(t.soundId)), e), {}), [s]),
    x = 0 === s.length && !a;

  function N(e) {
    var t;
    null === (t = o.current) || void 0 === t || t.pause();
    let n = m[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, v.Z)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null === (e = o.current) || void 0 === e || e.pause()
    }, []), a) return (0, r.jsx)(d.$jN, {});
  let j = Z ? (0, r.jsx)(d.zxk, {
    onClick: function() {
      (0, d.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("56035"), n.e("54906")]).then(n.bind(n, 758961));
        return n => (0, r.jsx)(e, W(Q({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: g <= 0 || !l,
    children: L.NW.string(L.t["/uNYPD"])
  }) : (0, r.jsx)(F, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(d.Text, {
        className: R.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: L.NW.string(L.t.BohnsL)
      }), (0, r.jsx)("div", {
        className: R.buttons,
        children: !x && j
      })]
    }), x ? (0, r.jsxs)(d.ubH, {
      theme: c,
      className: R.empty,
      children: [(0, r.jsx)(d.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(d.OZU, {
        note: L.NW.string(L.t.ZhoSBA),
        noteClassName: R.emptyText,
        children: L.NW.string(L.t.I6P1p6)
      }), j]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.$i$, {
        className: R.divider
      }), (0, r.jsx)(d.X6q, {
        className: R.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, r.jsx)(_, {
          guildId: t.id,
          currentTier: u,
          availableSounds: g
        })
      }), (0, r.jsx)(D.Z, {
        guild: t,
        numSounds: s.length,
        isOutOfSlots: 0 === g
      }), (0, r.jsxs)("div", {
        className: R.soundTable,
        children: [(0, r.jsxs)("div", {
          className: R.tableHeaders,
          children: [(0, r.jsx)(M, {
            children: L.NW.string(L.t.sMOuub)
          }), (0, r.jsx)(M, {
            children: L.NW.string(L.t.lLFvlZ)
          }), (0, r.jsx)(M, {
            children: L.NW.string(L.t["85qMS0"])
          })]
        }), s.map(e => (0, r.jsx)(H, {
          sound: e,
          isPlaying: !1,
          guild: t,
          onPlaySound: N
        }, e.soundId))]
      })]
    })]
  })
}

function H(e) {
  let {
    sound: t,
    isPlaying: s,
    onPlaySound: l,
    guild: o
  } = e, {
    soundId: c,
    name: f,
    user: m,
    userId: C,
    emojiId: b,
    emojiName: v
  } = t, j = (0, A.e7)([E.default], () => null != m ? m : E.default.getUser(C), [C, m]), {
    canManageGuildExpression: I
  } = (0, p.XJ)(o), y = i.useMemo(() => I(t), [t, I]), w = null != b || null != v, [B, D] = i.useState(!1), S = (0, x.z)(t, o.id);
  async function Z() {
    if (!B) {
      D(!0);
      try {
        await (0, h.AA)(o.id, c)
      } catch (e) {
        D(!1)
      }
    }
  }
  i.useEffect(() => {
    null == j && e();
    async function e() {
      await (0, u.PR)(C)
    }
  }, [j, C]);
  let k = i.useCallback(() => {
      null != j && (0, N.openUserProfileModal)({
        userId: j.id,
        guildId: o.id,
        analyticsLocation: {
          section: T.jXE.GUILD_SETTINGS_SOUNDBOARD
        }
      })
    }, [j, o.id]),
    M = P.ZP.useUserTag(j);
  return (0, r.jsxs)("div", {
    className: a()(R.row, {
      [R.active]: s
    }),
    children: [w ? (0, r.jsx)(g.Z, {
      emojiId: b,
      emojiName: v,
      className: R.emoji
    }) : (0, r.jsx)(d.XBm, {
      size: "md",
      color: "currentColor",
      className: R.emoji
    }), (0, r.jsx)(d.P3F, {
      onClick: () => {
        B || l(t)
      },
      onContextMenu: S,
      className: R.soundName,
      children: (0, r.jsxs)(d.Text, {
        variant: "text-sm/normal",
        className: R.soundName,
        children: [f, " ", (0, r.jsx)(d.gj8, {
          size: "md",
          color: "currentColor",
          className: R.soundPreviewIcon
        })]
      })
    }), null != j && (0, r.jsxs)(d.P3F, {
      className: R.uploader,
      onClick: k,
      children: [(0, r.jsx)(d.qEK, {
        "aria-label": M,
        size: d.EFr.SIZE_24,
        className: R.uploaderAvatar,
        src: (0, O.ov)(j, !1, 24)
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: M
      })]
    }), y ? (0, r.jsxs)("div", {
      className: R.soundEditContainer,
      children: [(0, r.jsx)(d.P3F, {
        className: R.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, d.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("56035"), n.e("54906")]).then(n.bind(n, 758961));
            return n => (0, r.jsx)(e, W(Q({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": L.NW.string(L.t.bt75u7),
        children: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor",
          className: R.soundEditIcon
        })
      }), (0, r.jsx)(d.P3F, {
        className: R.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, d.h7j)(e => (0, r.jsx)(d.ConfirmModal, W(Q({
            header: L.NW.formatToPlainString(L.t["PR/VbG"], {
              soundName: f
            }),
            confirmText: L.NW.string(L.t.oyYWHB),
            cancelText: L.NW.string(L.t["ETE/oK"]),
            onConfirm: Z
          }, e), {
            children: (0, r.jsx)(d.Text, {
              variant: "text-md/normal",
              children: L.NW.format(L.t["u6+CmJ"], {
                soundName: f
              })
            })
          })))
        },
        "aria-label": L.NW.string(L.t.N86XcH),
        children: (0, r.jsx)(d.Dio, {
          size: "md",
          color: "currentColor",
          className: R.soundEditIcon
        })
      })]
    }) : null]
  })
}