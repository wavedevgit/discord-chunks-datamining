/** Chunk was on 39048 **/
/** chunk id: 113266, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk481613 = require("./481613.js"),
  o = require.n(Chunk481613),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk496502 = require("./496502.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk358431 = require("./358431.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk473145 = require("./473145.js"),
  Chunk723702 = require("./723702.js"),
  Chunk427262 = require("./427262.js"),
  Chunk555337 = require("./555337.js"),
  Chunk619842 = require("./619842.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk252308 = require("./252308.js");

function B(e) {
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

function F(e, t) {
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
let H = Chunk723702.isPlatformEmbedded || "Safari" !== o().name;

function V() {
  let e = (0, c.bG)([D.A], () => D.A.getProps().guild),
    {
      analyticsLocations: t
    } = (0, x.Ay)(b.A.GUILD_SETTINGS_SOUNDBOARD);
  return null == e ? null : (0, r.jsx)(x.f5, {
    value: t,
    children: (0, r.jsxs)(m.BJc, {
      gap: 8,
      children: [(0, r.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        children: M.intl.string(M.t.OWQNYr)
      }), (0, r.jsx)(X, {
        guild: e
      })]
    })
  })
}

function K(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(m.Heading, {
    className: U.qd,
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
  } = e, l = S.A.getGuild(i), s = null != l ? (0, P.fA)(l) : 0;
  return 0 === t ? (0, r.jsx)(r.Fragment, {
    children: M.intl.format(M.t["7E9Hdz"], {
      slots: n,
      totalSlots: s
    })
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.m, {
      text: M.intl.formatToPlainString(M.t.tuuJJT, {
        currentBoostLevel: t
      }),
      children: (0, r.jsx)(m.DUT, {
        className: U.c7,
        onClick: () => {
          (0, j.K)({
            guildId: i,
            location: {
              section: L.JJy.GUILD_SETTINGS_SOUNDBOARD,
              object: L.ZSU.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: false,
        children: (0, r.jsx)(C.A, {})
      })
    }), M.intl.format(M.t.HHCdvU, {
      slots: n,
      totalSlots: s,
      boostLevel: t
    })]
  })
}
let W = e => {
    let {
      renderPopoutBody: t,
      renderPopoutChildren: n,
      popoutTargetRef: l
    } = e, s = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, ["renderPopoutBody", "renderPopoutChildren", "popoutTargetRef"]), [a, o] = i.useState(false), c = i.useMemo(() => new d.Ep, []), u = i.useCallback(() => {
      c.stop(), o(true)
    }, [c]), g = i.useCallback(() => {
      c.start(200, () => o(false))
    }, [c]), p = {
      onMouseEnter: u,
      onMouseLeave: g
    };
    return (0, r.jsx)(m.YNO, F(B({
      shouldShow: a,
      renderPopout: e => (0, r.jsx)(m.lGe, {
        className: U.gk,
        onMouseEnter: u,
        onMouseLeave: g,
        children: t(e)
      })
    }, s), {
      targetElementRef: l,
      children: e => n(e, p)
    }))
  },
  Y = () => {
    let e = i.useRef(null);
    return (0, r.jsx)(W, {
      renderPopoutBody: () => (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: M.intl.format(M.t.bGXPVt, {})
      }),
      renderPopoutChildren: (t, n) => (0, r.jsx)("div", F(B({
        ref: e
      }, n), {
        children: (0, r.jsx)(m.Button, F(B({}, t), {
          disabled: true,
          variant: "primary",
          text: M.intl.string(M.t["/uNYPJ"])
        }))
      })),
      popoutTargetRef: e
    })
  };

function X(e) {
  let {
    guild: t
  } = e, [l, s] = (0, c.yK)([v.A], () => {
    var e;
    return [null != (e = v.A.getSoundsForGuild(t.id)) ? e : k.pD, v.A.isFetchingSounds() || v.A.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: a
  } = (0, _.nr)(t), o = i.useRef(null), d = (0, h.Ay)(), u = t.premiumTier, g = (0, P.tO)(t, l, u);
  i.useEffect(() => {
    (0, O.E7)()
  }, []);
  let p = i.useMemo(() => l.reduce((e, t) => (e[t.soundId] = new Audio((0, y.A)(t.soundId)), e), {}), [l]),
    f = 0 === l.length && !s;

  function b(e) {
    var t;
    null == (t = o.current) || t.pause();
    let n = p[e.soundId];
    null != n && (o.current = n, n.currentTime = 0, n.volume = (0, A.A)(e.volume), n.play())
  }
  if (i.useEffect(() => () => {
      var e;
      null == (e = o.current) || e.pause()
    }, []), s) return (0, r.jsx)(m.y$y, {});
  let x = H ? (0, r.jsx)(m.Button, {
    variant: "primary",
    text: M.intl.string(M.t["/uNYPJ"]),
    onClick: function() {
      (0, m.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("40556"), n.e("61274")]).then(n.bind(n, 6503));
        return n => (0, r.jsx)(e, F(B({}, n), {
          guildId: t.id
        }))
      })
    },
    disabled: g <= 0 || !a
  }) : (0, r.jsx)(Y, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(m.Text, {
        className: U.BK,
        variant: "text-sm/normal",
        color: "text-default",
        children: M.intl.string(M.t.BohnsE)
      }), (0, r.jsx)("div", {
        className: U.Uo,
        children: !f && x
      })]
    }), f ? (0, r.jsxs)(m.ppr, {
      theme: d,
      className: U.Ie,
      children: [(0, r.jsx)(m.G8R, {
        darkSrc: n(223685),
        lightSrc: n(388547),
        width: 272,
        height: 212
      }), (0, r.jsx)(m.SGT, {
        note: M.intl.string(M.t.ZhoSBI),
        noteClassName: U.BI,
        children: M.intl.string(M.t.I6P1p7)
      }), x]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.cGx, {
        className: U.yF
      }), (0, r.jsx)(m.Heading, {
        className: U.jA,
        variant: "heading-md/bold",
        color: "text-strong",
        children: (0, r.jsx)(z, {
          guildId: t.id,
          currentTier: u,
          availableSounds: g
        })
      }), (0, r.jsx)(G.A, {
        guild: t,
        numSounds: l.length,
        isOutOfSlots: 0 === g
      }), (0, r.jsxs)("div", {
        className: U.uE,
        children: [(0, r.jsxs)("div", {
          className: U.ZF,
          children: [(0, r.jsx)(K, {
            children: M.intl.string(M.t.sMOuuS)
          }), (0, r.jsx)(K, {
            children: M.intl.string(M.t.lLFvlT)
          }), (0, r.jsx)(K, {
            children: M.intl.string(M.t["85qMS/"])
          })]
        }), l.map(e => (0, r.jsx)(J, {
          sound: e,
          isPlaying: false,
          guild: t,
          onPlaySound: b
        }, e.soundId))]
      })]
    })]
  })
}

function J(e) {
  let {
    sound: t,
    isPlaying: l,
    onPlaySound: a,
    guild: o
  } = e, {
    soundId: d,
    name: g,
    user: h,
    userId: b,
    emojiId: j,
    emojiName: v
  } = t, {
    analyticsLocations: y
  } = (0, x.Ay)(), A = (0, c.bG)([I.default], () => null != h ? h : I.default.getUser(b), [b, h]), {
    canManageGuildExpression: S
  } = (0, _.nr)(o), C = i.useMemo(() => S(t), [t, S]), P = null != j || null != v, [w, D] = i.useState(false), G = (0, E.v)(t, o.id);
  async function L() {
    if (!w) {
      D(true);
      try {
        await (0, O.ty)(o.id, d)
      } catch (e) {
        D(false)
      }
    }
  }
  i.useEffect(() => {
    null == A && e();
    async function e() {
      await (0, p.wz)(b)
    }
  }, [A, b]);
  let k = i.useCallback(() => {
      null != A && (0, N.openUserProfileModal)({
        userId: A.id,
        guildId: o.id,
        sourceAnalyticsLocations: y
      })
    }, [A, o.id, y]),
    H = R.Ay.useUserTag(A);
  return (0, r.jsxs)("div", {
    className: s()(U.nM, {
      [U.vu]: l
    }),
    children: [P ? (0, r.jsx)(f.A, {
      emojiId: j,
      emojiName: v,
      className: U.Zg
    }) : (0, r.jsx)(m.xfq, {
      size: "md",
      color: "currentColor",
      className: U.Zg
    }), (0, r.jsx)(m.DUT, {
      onClick: () => {
        w || a(t)
      },
      onContextMenu: G,
      className: U.TW,
      children: (0, r.jsxs)(m.Text, {
        variant: "text-sm/normal",
        className: U.TW,
        children: [g, " ", (0, r.jsx)(m.HKD, {
          size: "md",
          color: "currentColor",
          className: U.Ns
        })]
      })
    }), null != A && (0, r.jsxs)(m.DUT, {
      className: U.xp,
      onClick: k,
      children: [(0, r.jsx)(m.euF, {
        "aria-label": H,
        size: m._3J.SIZE_24,
        className: U.Cp,
        src: (0, T.ku)(A, false, 24)
      }), (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: H
      })]
    }), C ? (0, r.jsxs)("div", {
      className: U.vO,
      children: [(0, r.jsx)(m.DUT, {
        className: U.Bw,
        onClick: function(e) {
          e.stopPropagation(), (0, m.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("40556"), n.e("61274")]).then(n.bind(n, 6503));
            return n => (0, r.jsx)(e, F(B({}, n), {
              guildId: o.id,
              existingSound: t
            }))
          })
        },
        "aria-label": M.intl.string(M.t.bt75uw),
        children: (0, r.jsx)(m.R2l, {
          size: "xs",
          color: "currentColor",
          className: U.J4
        })
      }), (0, r.jsx)(m.DUT, {
        className: U.QR,
        onClick: function(e) {
          e.stopPropagation(), (0, u.A)({
            title: M.intl.formatToPlainString(M.t["PR/VbI"], {
              soundName: g
            }),
            subtitle: M.intl.format(M.t["u6+CmN"], {
              soundName: g
            }),
            confirmText: M.intl.string(M.t.oyYWHE),
            onConfirm: L
          })
        },
        "aria-label": M.intl.string(M.t.N86XcP),
        children: (0, r.jsx)(m.PGe, {
          size: "md",
          color: "currentColor",
          className: U.J4
        })
      })]
    }) : null]
  })
}