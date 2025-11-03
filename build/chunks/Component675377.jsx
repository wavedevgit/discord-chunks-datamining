/** Chunk was on 64982 **/
/** chunk id: 675377, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk28664 = require("./28664.jsx"),
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
  Chunk360054 = require("./360054.js");

function M(e) {
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
    children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 8,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.OWQNYr)
      }), (0, Chunk951288.jsx)(K, {
        guild: module
      })]
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(g.Heading, {
    className: G.tableHeader,
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
    children: k.intl.format(k.t["7E9Hdz"], {
      slots: n,
      totalSlots: a
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.u, {
      text: k.intl.formatToPlainString(k.t.tuuJJT, {
        currentBoostLevel: t
      }),
      children: (0, r.jsx)(g.P3F, {
        className: G.boostingIconWrapper,
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
        children: (0, r.jsx)(S.Z, {})
      })
    }), k.intl.format(k.t.HHCdvU, {
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
    }, [c]), m = i.useCallback(() => {
      c.start(200, () => o(false))
    }, [c]), p = {
      onMouseEnter: u,
      onMouseLeave: m
    };
    return (0, r.jsx)(g.yRy, U(M({
      shouldShow: s,
      renderPopout: e => (0, r.jsx)(g.VqE, {
        className: G.browserUnsupportedDialog,
        onMouseEnter: u,
        onMouseLeave: m,
        children: t(e)
      })
    }, a), {
      targetElementRef: l,
      children: e => n(e, p)
    }))
  },
  V = () => {
    let e = Chunk647438.useRef(null);
    return (0, Chunk951288.jsx)(W, {
      renderPopoutBody: () => (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.format(Chunk388032.t.bGXPVt, {})
      }),
      renderPopoutChildren: (t, n) => (0, r.jsx)("div", U(M({
        ref: e
      }, n), {
        children: (0, r.jsx)(g.Button, U(M({}, t), {
          disabled: true,
          variant: "primary",
          text: k.intl.string(k.t["/uNYPJ"])
        }))
      })),
      popoutTargetRef: module
    })
  };

function K(e) {
  let {
    guild: t
  } = e, [l, a] = (0, c.Wu)([_.Z], () => {
    var e;
    return [null != (e = _.Z.getSoundsForGuild(t.id)) ? e : L.Hy, _.Z.isFetchingSounds() || _.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: s
  } = (0, j.XJ)(t), o = i.useRef(null), d = (0, f.ZP)(), u = t.premiumTier, m = (0, P.yw)(t, l, u);
  i.useEffect(() => {
    (0, v.w)()
  }, []);
  let p = i.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, O.Z)(t.soundId)), e), {}), [l]),
    h = 0 === l.length && !a;

  function b(e) {
    var t;
    null == (t = o.current) || t.pause();
    let n = p[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, C.Z)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null == (e = o.current) || e.pause()
    }, []), a) return (0, r.jsx)(g.$jN, {});
  let x = B ? (0, r.jsx)(g.Button, {
    variant: "primary",
    text: k.intl.string(k.t["/uNYPJ"]),
    onClick: function() {
      (0, g.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("56035"), n.e("87262")]).then(n.bind(n, 758961));
        return n => (0, r.jsx)(e, U(M({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: m <= 0 || !s
  }) : (0, r.jsx)(V, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(g.Text, {
        className: G.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: k.intl.string(k.t.BohnsE)
      }), (0, r.jsx)("div", {
        className: G.buttons,
        children: !h && x
      })]
    }), h ? (0, r.jsxs)(g.ubH, {
      theme: d,
      className: G.empty,
      children: [(0, r.jsx)(g.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(g.OZU, {
        note: k.intl.string(k.t.ZhoSBI),
        noteClassName: G.emptyText,
        children: k.intl.string(k.t.I6P1p7)
      }), x]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.izJ, {
        className: G.divider
      }), (0, r.jsx)(g.Heading, {
        className: G.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, r.jsx)(z, {
          guildId: t.id,
          currentTier: u,
          availableSounds: m
        })
      }), (0, r.jsx)(D.Z, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === m
      }), (0, r.jsxs)("div", {
        className: G.soundTable,
        children: [(0, r.jsxs)("div", {
          className: G.tableHeaders,
          children: [(0, r.jsx)(H, {
            children: k.intl.string(k.t.sMOuuS)
          }), (0, r.jsx)(H, {
            children: k.intl.string(k.t.lLFvlT)
          }), (0, r.jsx)(H, {
            children: k.intl.string(k.t["85qMS/"])
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
    emojiName: _
  } = t, {
    analyticsLocations: O
  } = (0, b.ZP)(), C = (0, c.e7)([I.default], () => null != f ? f : I.default.getUser(h), [h, f]), {
    canManageGuildExpression: E
  } = (0, j.XJ)(o), S = i.useMemo(() => E(t), [t, E]), P = null != x || null != _, [w, R] = i.useState(false), D = (0, y.z)(t, o.id);
  async function A() {
    if (!w) {
      R(true);
      try {
        await (0, v.AA)(o.id, d)
      } catch (e) {
        R(false)
      }
    }
  }
  i.useEffect(() => {
    null == C && e();
    async function e() {
      await (0, m.PR)(h)
    }
  }, [C, h]);
  let L = i.useCallback(() => {
      null != C && (0, N.openUserProfileModal)({
        userId: C.id,
        guildId: o.id,
        sourceAnalyticsLocations: O
      })
    }, [C, o.id, O]),
    B = Z.ZP.useUserTag(C);
  return (0, r.jsxs)("div", {
    className: a()(G.row, {
      [G.active]: l
    }),
    children: [P ? (0, r.jsx)(p.Z, {
      emojiId: x,
      emojiName: _,
      className: G.emoji
    }) : (0, r.jsx)(g.XBm, {
      size: "md",
      color: "currentColor",
      className: G.emoji
    }), (0, r.jsx)(g.P3F, {
      onClick: () => {
        w || s(t)
      },
      onContextMenu: D,
      className: G.soundName,
      children: (0, r.jsxs)(g.Text, {
        variant: "text-sm/normal",
        className: G.soundName,
        children: [u, " ", (0, r.jsx)(g.gj8, {
          size: "md",
          color: "currentColor",
          className: G.soundPreviewIcon
        })]
      })
    }), null != C && (0, r.jsxs)(g.P3F, {
      className: G.uploader,
      onClick: L,
      children: [(0, r.jsx)(g.qEK, {
        "aria-label": B,
        size: g.EFr.SIZE_24,
        className: G.uploaderAvatar,
        src: (0, T.ov)(C, false, 24)
      }), (0, r.jsx)(g.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: B
      })]
    }), S ? (0, r.jsxs)("div", {
      className: G.soundEditContainer,
      children: [(0, r.jsx)(g.P3F, {
        className: G.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, g.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("56035"), n.e("87262")]).then(n.bind(n, 758961));
            return n => (0, r.jsx)(e, U(M({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": k.intl.string(k.t.bt75uw),
        children: (0, r.jsx)(g.vdY, {
          size: "xs",
          color: "currentColor",
          className: G.soundEditIcon
        })
      }), (0, r.jsx)(g.P3F, {
        className: G.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, g.h7j)(e => (0, r.jsx)(g.ConfirmModal, U(M({
            header: k.intl.formatToPlainString(k.t["PR/VbI"], {
              soundName: u
            }),
            confirmText: k.intl.string(k.t.oyYWHE),
            cancelText: k.intl.string(k.t["ETE/oC"]),
            onConfirm: A
          }, e), {
            children: (0, r.jsx)(g.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t["u6+CmN"], {
                soundName: u
              })
            })
          })))
        },
        "aria-label": k.intl.string(k.t.N86XcP),
        children: (0, r.jsx)(g.Dio, {
          size: "md",
          color: "currentColor",
          className: G.soundEditIcon
        })
      })]
    }) : null]
  })
}