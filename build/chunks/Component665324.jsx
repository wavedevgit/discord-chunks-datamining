/** Chunk was on 88479 **/
/** chunk id: 665324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk286654 = require("./286654.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk15385 = require("./15385.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk267642 = require("./267642.js"),
  Chunk358085 = require("./358085.js"),
  Chunk51144 = require("./51144.js"),
  Chunk999382 = require("./999382.js"),
  Chunk70409 = require("./70409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180208 = require("./180208.js");

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function U(e, t) {
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
let B = Chunk358085.isPlatformEmbedded || "Safari" !== o().name;

function F() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_SOUNDBOARD);
  return null == module ? null : (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: exports,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t.OWQNYm),
      children: (0, Chunk951288.jsx)(K, {
        guild: module
      })
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(m.X6q, {
    className: M.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function z(e) {
  let {
    currentTier: t,
    availableSounds: n,
    guildId: i
  } = e, l = E.Z.getGuild(i), a = null != l ? (0, P.nL)(l) : 0;
  return 0 === t ? (0, r.jsx)(r.Fragment, {
    children: k.intl.format(k.t["7E9Hd3"], {
      slots: n,
      totalSlots: a
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.ua7, {
      text: k.intl.formatToPlainString(k.t.tuuJJS, {
        currentBoostLevel: t
      }),
      children: e => (0, r.jsx)(m.P3F, {
        className: M.boostingIconWrapper,
        onClick: () => {
          (0, x.f)({
            guildId: i,
            location: {
              section: A.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: A.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: false,
        children: (0, r.jsx)(S.Z, G({}, e))
      })
    }), k.intl.format(k.t.HHCdvb, {
      slots: n,
      totalSlots: a,
      boostLevel: t
    })]
  })
}
let W = e => {
    var {
      renderPopoutBody: t,
      renderPopoutChildren: n,
      popoutTargetRef: l
    } = e, a = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["renderPopoutBody", "renderPopoutChildren", "popoutTargetRef"]);
    let [s, o] = i.useState(false), c = i.useMemo(() => new d.V7, []), u = i.useCallback(() => {
      c.stop(), o(true)
    }, [c]), g = i.useCallback(() => {
      c.start(200, () => o(false))
    }, [c]);
    return (0, r.jsx)(m.yRy, U(G({
      shouldShow: s,
      renderPopout: e => (0, r.jsx)(m.VqE, {
        className: M.browserUnsupportedDialog,
        onMouseEnter: u,
        onMouseLeave: g,
        children: t(e)
      })
    }, a), {
      targetElementRef: l,
      children: e => n(e)
    }))
  },
  V = () => {
    let e = Chunk647438.useRef(null);
    return (0, Chunk951288.jsx)(W, {
      renderPopoutBody: () => (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.format(Chunk388032.t.bGXPVl, {})
      }),
      renderPopoutChildren: t => (0, r.jsx)(u.zx, U(G({}, t), {
        disabled: true,
        buttonRef: e,
        children: k.intl.string(k.t["/uNYPD"])
      })),
      popoutTargetRef: module
    })
  };

function K(e) {
  let {
    guild: t
  } = e, [l, a] = (0, c.Wu)([v.Z], () => {
    var e;
    return [null != (e = v.Z.getSoundsForGuild(t.id)) ? e : L.Hy, v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: s
  } = (0, j.XJ)(t), o = i.useRef(null), d = (0, f.ZP)(), u = t.premiumTier, g = (0, P.yw)(t, l, u);
  i.useEffect(() => {
    (0, _.w)()
  }, []);
  let p = i.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, O.Z)(t.soundId)), e), {}), [l]),
    h = 0 === l.length && !a;

  function b(e) {
    var t;
    null == (t = o.current) || t.pause();
    let n = p[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, y.Z)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null == (e = o.current) || e.pause()
    }, []), a) return (0, r.jsx)(m.$jN, {});
  let x = B ? (0, r.jsx)(m.zxk, {
    variant: "primary",
    text: k.intl.string(k.t["/uNYPD"]),
    onClick: function() {
      (0, m.ZDy)(async () => {
        let {
          default: e
        } = await n.e("56035").then(n.bind(n, 758961));
        return n => (0, r.jsx)(e, U(G({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: g <= 0 || !s
  }) : (0, r.jsx)(V, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(m.Text, {
        className: M.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: k.intl.string(k.t.BohnsL)
      }), (0, r.jsx)("div", {
        className: M.buttons,
        children: !h && x
      })]
    }), h ? (0, r.jsxs)(m.ubH, {
      theme: d,
      className: M.empty,
      children: [(0, r.jsx)(m.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(m.OZU, {
        note: k.intl.string(k.t.ZhoSBA),
        noteClassName: M.emptyText,
        children: k.intl.string(k.t.I6P1p6)
      }), x]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.$i$, {
        className: M.divider
      }), (0, r.jsx)(m.X6q, {
        className: M.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, r.jsx)(z, {
          guildId: t.id,
          currentTier: u,
          availableSounds: g
        })
      }), (0, r.jsx)(D.Z, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === g
      }), (0, r.jsxs)("div", {
        className: M.soundTable,
        children: [(0, r.jsxs)("div", {
          className: M.tableHeaders,
          children: [(0, r.jsx)(H, {
            children: k.intl.string(k.t.sMOuub)
          }), (0, r.jsx)(H, {
            children: k.intl.string(k.t.lLFvlZ)
          }), (0, r.jsx)(H, {
            children: k.intl.string(k.t["85qMS0"])
          })]
        }), l.map(e => (0, r.jsx)(Y, {
          sound: e,
          isPlaying: false,
          guild: t,
          onPlaySound: b
        }, e.soundId))]
      })]
    })]
  })
}

function Y(e) {
  let {
    sound: t,
    isPlaying: l,
    onPlaySound: s,
    guild: o
  } = e, {
    soundId: d,
    name: u,
    user: f,
    userId: h,
    emojiId: x,
    emojiName: v
  } = t, {
    analyticsLocations: O
  } = (0, b.ZP)(), y = (0, c.e7)([I.default], () => null != f ? f : I.default.getUser(h), [h, f]), {
    canManageGuildExpression: E
  } = (0, j.XJ)(o), S = i.useMemo(() => E(t), [t, E]), P = null != x || null != v, [w, Z] = i.useState(false), D = (0, C.z)(t, o.id);
  async function A() {
    if (!w) {
      Z(true);
      try {
        await (0, _.AA)(o.id, d)
      } catch (e) {
        Z(false)
      }
    }
  }
  i.useEffect(() => {
    null == y && e();
    async function e() {
      await (0, g.PR)(h)
    }
  }, [y, h]);
  let L = i.useCallback(() => {
      null != y && (0, N.openUserProfileModal)({
        userId: y.id,
        guildId: o.id,
        sourceAnalyticsLocations: O
      })
    }, [y, o.id, O]),
    B = R.ZP.useUserTag(y);
  return (0, r.jsxs)("div", {
    className: a()(M.row, {
      [M.active]: l
    }),
    children: [P ? (0, r.jsx)(p.Z, {
      emojiId: x,
      emojiName: v,
      className: M.emoji
    }) : (0, r.jsx)(m.XBm, {
      size: "md",
      color: "currentColor",
      className: M.emoji
    }), (0, r.jsx)(m.P3F, {
      onClick: () => {
        w || s(t)
      },
      onContextMenu: D,
      className: M.soundName,
      children: (0, r.jsxs)(m.Text, {
        variant: "text-sm/normal",
        className: M.soundName,
        children: [u, " ", (0, r.jsx)(m.gj8, {
          size: "md",
          color: "currentColor",
          className: M.soundPreviewIcon
        })]
      })
    }), null != y && (0, r.jsxs)(m.P3F, {
      className: M.uploader,
      onClick: L,
      children: [(0, r.jsx)(m.qEK, {
        "aria-label": B,
        size: m.EFr.SIZE_24,
        className: M.uploaderAvatar,
        src: (0, T.ov)(y, false, 24)
      }), (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: B
      })]
    }), S ? (0, r.jsxs)("div", {
      className: M.soundEditContainer,
      children: [(0, r.jsx)(m.P3F, {
        className: M.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, m.ZDy)(async () => {
            let {
              default: e
            } = await n.e("56035").then(n.bind(n, 758961));
            return n => (0, r.jsx)(e, U(G({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": k.intl.string(k.t.bt75u7),
        children: (0, r.jsx)(m.vdY, {
          size: "xs",
          color: "currentColor",
          className: M.soundEditIcon
        })
      }), (0, r.jsx)(m.P3F, {
        className: M.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, m.h7j)(e => (0, r.jsx)(m.ConfirmModal, U(G({
            header: k.intl.formatToPlainString(k.t["PR/VbG"], {
              soundName: u
            }),
            confirmText: k.intl.string(k.t.oyYWHB),
            cancelText: k.intl.string(k.t["ETE/oK"]),
            onConfirm: A
          }, e), {
            children: (0, r.jsx)(m.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t["u6+CmJ"], {
                soundName: u
              })
            })
          })))
        },
        "aria-label": k.intl.string(k.t.N86XcH),
        children: (0, r.jsx)(m.Dio, {
          size: "md",
          color: "currentColor",
          className: M.soundEditIcon
        })
      })]
    }) : null]
  })
}