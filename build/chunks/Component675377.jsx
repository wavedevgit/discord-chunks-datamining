/** Chunk was on 9536 **/
/** chunk id: 675377, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  o = require.n(Chunk525654),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk248514 = require("./248514.jsx"),
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
  Chunk411194 = require("./411194.js");

function U(e) {
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

function B(e, t) {
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
let F = Chunk358085.isPlatformEmbedded || "Safari" !== o().name;

function H() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_SOUNDBOARD);
  return null == module ? null : (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: exports,
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 8,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        children: Chunk388032.intl.string(Chunk388032.t.OWQNYr)
      }), (0, Chunk54381.jsx)(Y, {
        guild: module
      })]
    })
  })
}

function W(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(m.Heading, {
    className: M.tableHeader,
    variant: "heading-sm/semibold",
    color: "text-default",
    children: t
  })
}

function z(e) {
  let {
    currentTier: t,
    availableSounds: n,
    guildId: i
  } = e, l = S.Z.getGuild(i), a = null != l ? (0, w.nL)(l) : 0;
  return 0 === t ? (0, r.jsx)(r.Fragment, {
    children: G.intl.format(G.t["7E9Hdz"], {
      slots: n,
      totalSlots: a
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.u, {
      text: G.intl.formatToPlainString(G.t.tuuJJT, {
        currentBoostLevel: t
      }),
      children: (0, r.jsx)(m.P3F, {
        className: M.boostingIconWrapper,
        onClick: () => {
          (0, j.f)({
            guildId: i,
            location: {
              section: L.jXE.GUILD_SETTINGS_SOUNDBOARD,
              object: L.qAy.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: false,
        children: (0, r.jsx)(T.Z, {})
      })
    }), G.intl.format(G.t.HHCdvU, {
      slots: n,
      totalSlots: a,
      boostLevel: t
    })]
  })
}
let V = e => {
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
    }, [c]), f = {
      onMouseEnter: u,
      onMouseLeave: g
    };
    return (0, r.jsx)(m.yRy, B(U({
      shouldShow: s,
      renderPopout: e => (0, r.jsx)(m.VqE, {
        className: M.browserUnsupportedDialog,
        onMouseEnter: u,
        onMouseLeave: g,
        children: t(e)
      })
    }, a), {
      targetElementRef: l,
      children: e => n(e, f)
    }))
  },
  K = () => {
    let e = Chunk473749.useRef(null);
    return (0, Chunk54381.jsx)(V, {
      renderPopoutBody: () => (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: Chunk388032.intl.format(Chunk388032.t.bGXPVt, {})
      }),
      renderPopoutChildren: (t, n) => (0, r.jsx)("div", B(U({
        ref: e
      }, n), {
        children: (0, r.jsx)(m.Button, B(U({}, t), {
          disabled: true,
          variant: "primary",
          text: G.intl.string(G.t["/uNYPJ"])
        }))
      })),
      popoutTargetRef: module
    })
  };

function Y(e) {
  let {
    guild: t
  } = e, [l, a] = (0, c.Wu)([C.Z], () => {
    var e;
    return [null != (e = C.Z.getSoundsForGuild(t.id)) ? e : k.Hy, C.Z.isFetchingSounds() || C.Z.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: s
  } = (0, v.XJ)(t), o = i.useRef(null), d = (0, b.ZP)(), u = t.premiumTier, g = (0, w.yw)(t, l, u);
  i.useEffect(() => {
    (0, O.w)()
  }, []);
  let f = i.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, y.Z)(t.soundId)), e), {}), [l]),
    p = 0 === l.length && !a;

  function h(e) {
    var t;
    null == (t = o.current) || t.pause();
    let n = f[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, N.Z)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null == (e = o.current) || e.pause()
    }, []), a) return (0, r.jsx)(m.$jN, {});
  let x = F ? (0, r.jsx)(m.Button, {
    variant: "primary",
    text: G.intl.string(G.t["/uNYPJ"]),
    onClick: function() {
      (0, m.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("56035"), n.e("48899")]).then(n.bind(n, 758961));
        return n => (0, r.jsx)(e, B(U({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: g <= 0 || !s
  }) : (0, r.jsx)(K, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(m.Text, {
        className: M.helpText,
        variant: "text-sm/normal",
        color: "text-default",
        children: G.intl.string(G.t.BohnsE)
      }), (0, r.jsx)("div", {
        className: M.buttons,
        children: !p && x
      })]
    }), p ? (0, r.jsxs)(m.ubH, {
      theme: d,
      className: M.empty,
      children: [(0, r.jsx)(m.oxh, {
        darkSrc: n(458601),
        lightSrc: n(673557),
        width: 272,
        height: 212
      }), (0, r.jsx)(m.OZU, {
        note: G.intl.string(G.t.ZhoSBI),
        noteClassName: M.emptyText,
        children: G.intl.string(G.t.I6P1p7)
      }), x]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.izJ, {
        className: M.divider
      }), (0, r.jsx)(m.Heading, {
        className: M.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, r.jsx)(z, {
          guildId: t.id,
          currentTier: u,
          availableSounds: g
        })
      }), (0, r.jsx)(A.Z, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === g
      }), (0, r.jsxs)("div", {
        className: M.soundTable,
        children: [(0, r.jsxs)("div", {
          className: M.tableHeaders,
          children: [(0, r.jsx)(W, {
            children: G.intl.string(G.t.sMOuuS)
          }), (0, r.jsx)(W, {
            children: G.intl.string(G.t.lLFvlT)
          }), (0, r.jsx)(W, {
            children: G.intl.string(G.t["85qMS/"])
          })]
        }), l.map(e => (0, r.jsx)(q, {
          sound: e,
          isPlaying: false,
          guild: t,
          onPlaySound: h
        }, e.soundId))]
      })]
    })]
  })
}

function q(e) {
  let {
    sound: t,
    isPlaying: l,
    onPlaySound: s,
    guild: o
  } = e, {
    soundId: d,
    name: g,
    user: b,
    userId: h,
    emojiId: j,
    emojiName: C
  } = t, {
    analyticsLocations: y
  } = (0, x.ZP)(), N = (0, c.e7)([_.default], () => null != b ? b : _.default.getUser(h), [h, b]), {
    canManageGuildExpression: S
  } = (0, v.XJ)(o), T = i.useMemo(() => S(t), [t, S]), w = null != j || null != C, [Z, D] = i.useState(false), A = (0, E.z)(t, o.id);
  async function L() {
    if (!Z) {
      D(true);
      try {
        await (0, O.AA)(o.id, d)
      } catch (e) {
        D(false)
      }
    }
  }
  i.useEffect(() => {
    null == N && e();
    async function e() {
      await (0, f.PR)(h)
    }
  }, [N, h]);
  let k = i.useCallback(() => {
      null != N && (0, I.openUserProfileModal)({
        userId: N.id,
        guildId: o.id,
        sourceAnalyticsLocations: y
      })
    }, [N, o.id, y]),
    F = R.ZP.useUserTag(N);
  return (0, r.jsxs)("div", {
    className: a()(M.row, {
      [M.active]: l
    }),
    children: [w ? (0, r.jsx)(p.Z, {
      emojiId: j,
      emojiName: C,
      className: M.emoji
    }) : (0, r.jsx)(m.XBm, {
      size: "md",
      color: "currentColor",
      className: M.emoji
    }), (0, r.jsx)(m.P3F, {
      onClick: () => {
        Z || s(t)
      },
      onContextMenu: A,
      className: M.soundName,
      children: (0, r.jsxs)(m.Text, {
        variant: "text-sm/normal",
        className: M.soundName,
        children: [g, " ", (0, r.jsx)(m.gj8, {
          size: "md",
          color: "currentColor",
          className: M.soundPreviewIcon
        })]
      })
    }), null != N && (0, r.jsxs)(m.P3F, {
      className: M.uploader,
      onClick: k,
      children: [(0, r.jsx)(m.qEK, {
        "aria-label": F,
        size: m.EFr.SIZE_24,
        className: M.uploaderAvatar,
        src: (0, P.ov)(N, false, 24)
      }), (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: F
      })]
    }), T ? (0, r.jsxs)("div", {
      className: M.soundEditContainer,
      children: [(0, r.jsx)(m.P3F, {
        className: M.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, m.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("56035"), n.e("48899")]).then(n.bind(n, 758961));
            return n => (0, r.jsx)(e, B(U({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": G.intl.string(G.t.bt75uw),
        children: (0, r.jsx)(m.vdY, {
          size: "xs",
          color: "currentColor",
          className: M.soundEditIcon
        })
      }), (0, r.jsx)(m.P3F, {
        className: M.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, u.Z)({
            title: G.intl.formatToPlainString(G.t["PR/VbI"], {
              soundName: g
            }),
            subtitle: G.intl.format(G.t["u6+CmN"], {
              soundName: g
            }),
            confirmText: G.intl.string(G.t.oyYWHE),
            onConfirm: L
          })
        },
        "aria-label": G.intl.string(G.t.N86XcP),
        children: (0, r.jsx)(m.Dio, {
          size: "md",
          color: "currentColor",
          className: M.soundEditIcon
        })
      })]
    }) : null]
  })
}