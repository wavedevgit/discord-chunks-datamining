/** Chunk was on 29679 **/
/** chunk id: 675377, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
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
  Chunk803305 = require("./803305.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909258 = require("./909258.js");

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

function M(e, t) {
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
let U = Chunk358085.isPlatformEmbedded || "Safari" !== o().name;

function B() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_SOUNDBOARD);
  return null == module ? null : (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: exports,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t.OWQNYm),
      children: (0, Chunk951288.jsx)(W, {
        guild: module
      })
    })
  })
}

function F(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(u.X6q, {
    className: k.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function H(e) {
  let {
    currentTier: t,
    availableSounds: n,
    guildId: i
  } = e, l = N.Z.getGuild(i), s = null != l ? (0, T.nL)(l) : 0;
  return 0 === t ? (0, r.jsx)(r.Fragment, {
    children: L.intl.format(L.t["7E9Hd3"], {
      slots: n,
      totalSlots: s
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.ua7, {
      text: L.intl.formatToPlainString(L.t.tuuJJS, {
        currentBoostLevel: t
      }),
      children: e => (0, r.jsx)(u.P3F, {
        className: k.boostingIconWrapper,
        onClick: () => {
          (0, x.f)({
            guildId: i,
            location: {
              section: D.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: D.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: false,
        children: (0, r.jsx)(I.Z, G({}, e))
      })
    }), L.intl.format(L.t.HHCdvb, {
      slots: n,
      totalSlots: s,
      boostLevel: t
    })]
  })
}
let z = e => {
    var {
      renderPopoutBody: t,
      renderPopoutChildren: n,
      popoutTargetRef: l
    } = e, s = function(e, t) {
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
    let [a, o] = i.useState(false), c = i.useMemo(() => new d.V7, []), m = i.useCallback(() => {
      c.stop(), o(true)
    }, [c]), g = i.useCallback(() => {
      c.start(200, () => o(false))
    }, [c]), p = {
      onMouseEnter: m,
      onMouseLeave: g
    };
    return (0, r.jsx)(u.yRy, M(G({
      shouldShow: a,
      renderPopout: e => (0, r.jsx)(u.VqE, {
        className: k.browserUnsupportedDialog,
        onMouseEnter: m,
        onMouseLeave: g,
        children: t(e)
      })
    }, s), {
      targetElementRef: l,
      children: e => n(e, p)
    }))
  },
  V = () => {
    let e = Chunk647438.useRef(null);
    return (0, Chunk951288.jsx)(z, {
      renderPopoutBody: () => (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.format(Chunk388032.t.bGXPVl, {})
      }),
      renderPopoutChildren: (t, n) => (0, r.jsx)("div", M(G({
        ref: e
      }, n), {
        children: (0, r.jsx)(u.zxk, M(G({}, t), {
          disabled: true,
          variant: "primary",
          text: L.intl.string(L.t["/uNYPD"])
        }))
      })),
      popoutTargetRef: module
    })
  };

function W(e) {
  let {
    guild: t
  } = e, [l, s] = (0, c.Wu)([v.Z], () => {
    var e;
    return [null != (e = v.Z.getSoundsForGuild(t.id)) ? e : A.Hy, v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: a
  } = (0, b.XJ)(t), o = i.useRef(null), d = (0, p.ZP)(), m = t.premiumTier, g = (0, T.yw)(t, l, m);
  i.useEffect(() => {
    (0, j.w)()
  }, []);
  let f = i.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, _.Z)(t.soundId)), e), {}), [l]),
    h = 0 === l.length && !s;

  function x(e) {
    var t;
    null == (t = o.current) || t.pause();
    let n = f[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, O.Z)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null == (e = o.current) || e.pause()
    }, []), s) return (0, r.jsx)(u.$jN, {});
  let y = U ? (0, r.jsx)(u.zxk, {
    variant: "primary",
    text: L.intl.string(L.t["/uNYPD"]),
    onClick: function() {
      (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("56035").then(n.bind(n, 758961));
        return n => (0, r.jsx)(e, M(G({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: g <= 0 || !a
  }) : (0, r.jsx)(V, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(u.Text, {
        className: k.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: L.intl.string(L.t.BohnsL)
      }), (0, r.jsx)("div", {
        className: k.buttons,
        children: !h && y
      })]
    }), h ? (0, r.jsxs)(u.ubH, {
      theme: d,
      className: k.empty,
      children: [(0, r.jsx)(u.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(u.OZU, {
        note: L.intl.string(L.t.ZhoSBA),
        noteClassName: k.emptyText,
        children: L.intl.string(L.t.I6P1p6)
      }), y]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.izJ, {
        className: k.divider
      }), (0, r.jsx)(u.X6q, {
        className: k.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, r.jsx)(H, {
          guildId: t.id,
          currentTier: m,
          availableSounds: g
        })
      }), (0, r.jsx)(Z.Z, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === g
      }), (0, r.jsxs)("div", {
        className: k.soundTable,
        children: [(0, r.jsxs)("div", {
          className: k.tableHeaders,
          children: [(0, r.jsx)(F, {
            children: L.intl.string(L.t.sMOuub)
          }), (0, r.jsx)(F, {
            children: L.intl.string(L.t.lLFvlZ)
          }), (0, r.jsx)(F, {
            children: L.intl.string(L.t["85qMS0"])
          })]
        }), l.map(e => (0, r.jsx)(K, {
          sound: e,
          isPlaying: false,
          guild: t,
          onPlaySound: x
        }, e.soundId))]
      })]
    })]
  })
}

function K(e) {
  let {
    sound: t,
    isPlaying: l,
    onPlaySound: a,
    guild: o
  } = e, {
    soundId: d,
    name: p,
    user: f,
    userId: x,
    emojiId: v,
    emojiName: _
  } = t, {
    analyticsLocations: O
  } = (0, h.ZP)(), N = (0, c.e7)([E.default], () => null != f ? f : E.default.getUser(x), [x, f]), {
    canManageGuildExpression: I
  } = (0, b.XJ)(o), T = i.useMemo(() => I(t), [t, I]), P = null != v || null != _, [R, Z] = i.useState(false), D = (0, y.z)(t, o.id);
  async function A() {
    if (!R) {
      Z(true);
      try {
        await (0, j.AA)(o.id, d)
      } catch (e) {
        Z(false)
      }
    }
  }
  i.useEffect(() => {
    null == N && e();
    async function e() {
      await (0, m.PR)(x)
    }
  }, [N, x]);
  let U = i.useCallback(() => {
      null != N && (0, C.openUserProfileModal)({
        userId: N.id,
        guildId: o.id,
        sourceAnalyticsLocations: O
      })
    }, [N, o.id, O]),
    B = w.ZP.useUserTag(N);
  return (0, r.jsxs)("div", {
    className: s()(k.row, {
      [k.active]: l
    }),
    children: [P ? (0, r.jsx)(g.Z, {
      emojiId: v,
      emojiName: _,
      className: k.emoji
    }) : (0, r.jsx)(u.XBm, {
      size: "md",
      color: "currentColor",
      className: k.emoji
    }), (0, r.jsx)(u.P3F, {
      onClick: () => {
        R || a(t)
      },
      onContextMenu: D,
      className: k.soundName,
      children: (0, r.jsxs)(u.Text, {
        variant: "text-sm/normal",
        className: k.soundName,
        children: [p, " ", (0, r.jsx)(u.gj8, {
          size: "md",
          color: "currentColor",
          className: k.soundPreviewIcon
        })]
      })
    }), null != N && (0, r.jsxs)(u.P3F, {
      className: k.uploader,
      onClick: U,
      children: [(0, r.jsx)(u.qEK, {
        "aria-label": B,
        size: u.EFr.SIZE_24,
        className: k.uploaderAvatar,
        src: (0, S.ov)(N, false, 24)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: B
      })]
    }), T ? (0, r.jsxs)("div", {
      className: k.soundEditContainer,
      children: [(0, r.jsx)(u.P3F, {
        className: k.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, u.ZDy)(async () => {
            let {
              default: e
            } = await n.e("56035").then(n.bind(n, 758961));
            return n => (0, r.jsx)(e, M(G({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": L.intl.string(L.t.bt75u7),
        children: (0, r.jsx)(u.vdY, {
          size: "xs",
          color: "currentColor",
          className: k.soundEditIcon
        })
      }), (0, r.jsx)(u.P3F, {
        className: k.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, u.h7j)(e => (0, r.jsx)(u.ConfirmModal, M(G({
            header: L.intl.formatToPlainString(L.t["PR/VbG"], {
              soundName: p
            }),
            confirmText: L.intl.string(L.t.oyYWHB),
            cancelText: L.intl.string(L.t["ETE/oK"]),
            onConfirm: A
          }, e), {
            children: (0, r.jsx)(u.Text, {
              variant: "text-md/normal",
              children: L.intl.format(L.t["u6+CmJ"], {
                soundName: p
              })
            })
          })))
        },
        "aria-label": L.intl.string(L.t.N86XcH),
        children: (0, r.jsx)(u.Dio, {
          size: "md",
          color: "currentColor",
          className: k.soundEditIcon
        })
      })]
    }) : null]
  })
}