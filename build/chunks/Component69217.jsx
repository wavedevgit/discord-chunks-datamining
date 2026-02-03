/** Chunk was on web.js **/
/** chunk id: 69217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => Q,
  dT: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk21161 = require("./21161.jsx"),
  Chunk850992 = require("./850992.js"),
  Chunk105713 = require("./105713.jsx"),
  Chunk109638 = require("./109638.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk536432 = require("./536432.js"),
  Chunk792348 = require("./792348.js"),
  Chunk496502 = require("./496502.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk851110 = require("./851110.js"),
  Chunk257645 = require("./257645.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125049 = require("./125049.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = F(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let V = "1",
  B = .01,
  H = .1,
  Y = .01,
  W = 1e3;

function K(e) {
  let {
    disabled: t = false,
    onClick: n,
    text: i,
    children: a,
    tooltipPosition: s = "top",
    ref: l
  } = e;
  return (0, r.jsx)(d.m, {
    text: i,
    position: s,
    children: (0, r.jsx)(f.DUT, {
      innerRef: l,
      "aria-label": i,
      className: o()(x.zr, {
        [x.$9]: t
      }),
      onClick: n,
      children: a
    })
  })
}

function z(e) {
  let {
    sound: t,
    previewSound: n,
    disabled: i = false,
    tooltipPosition: a = "top"
  } = e, o = (0, l.bG)([O.A], () => O.A.getGuildId());

  function s(e) {
    A.default.track(R.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
      sound_id: t.soundId,
      sound_name: t.name,
      sound_guild_id: t.guildId,
      location_guild_id: o
    }), e.stopPropagation(), e.currentTarget.blur(), n()
  }
  return (0, r.jsx)(K, {
    tooltipPosition: a,
    disabled: i,
    onClick: s,
    text: L.intl.formatToPlainString(L.t["/8fYO5"], {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, r.jsx)(f.HKD, {
      size: "md",
      color: "currentColor",
      className: x.Wo
    })
  })
}

function q(e) {
  let {
    sound: t,
    disabled: n = false
  } = e, {
    analyticsLocations: a
  } = (0, h.Ay)(), s = (0, l.bG)([S.A], () => S.A.isFavoriteSound(t.soundId), [t.soundId]), c = i.useCallback(e => {
    e.stopPropagation(), e.currentTarget.blur(), s ? (0, I.eS)(t.soundId) : ((0, C.Ni)({
      sound: t,
      location: U(j({}, a), {
        object: R.ZSU.SOUNDBOARD_SOUND
      })
    }), (0, I.Rp)(t.soundId))
  }, [s, t, a]);
  return (0, r.jsx)(K, {
    disabled: n,
    onClick: c,
    text: L.intl.formatToPlainString(s ? L.t.lQLsjc : L.t.Y5DOs4, {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: s ? (0, r.jsx)(f.Gg5, {
      size: "xs",
      className: o()(x.Wo, x.gj),
      color: u.A.unsafe_rawColors.GOLD.css
    }) : (0, r.jsx)(f.yA2, {
      size: "xs",
      color: "currentColor",
      className: x.Wo
    })
  })
}

function Z(e, t) {
  return i.useMemo(() => {
    if (null == t || e !== V) return {
      x: 0,
      y: 0
    };
    let n = t.getBoundingClientRect();
    return {
      x: n.left + n.width / 2,
      y: n.top + n.height / 2
    }
  }, [t, e])
}
let Q = Chunk64700.forwardRef(function(e, t) {
  var n, a, u, h, O, A;
  let [I, ...S] = [e, t], {
    sound: R,
    channel: M,
    containerClassName: k,
    className: F,
    focused: K,
    forceSecondaryActions: Q = false,
    interactive: X = true,
    enableSecondaryActions: J = false,
    suppressPlaySound: $,
    onMouseEnter: ee,
    onSelectItem: et,
    analyticsLocations: en,
    buttonOverlay: er = T.If.PLAY,
    showLockForDisabledSound: ei = true,
    inNitroLockedSection: ea = false,
    isAnimated: eo = true,
    isPlayingSoundOverride: es,
    isSoundmoji: el,
    soundmojiVisualEffectRef: ec,
    tooltipOverride: eu
  } = I, ed = G(I, ["sound", "channel", "containerClassName", "className", "focused", "forceSecondaryActions", "interactive", "enableSecondaryActions", "suppressPlaySound", "onMouseEnter", "onSelectItem", "analyticsLocations", "buttonOverlay", "showLockForDisabledSound", "inNitroLockedSection", "isAnimated", "isPlayingSoundOverride", "isSoundmoji", "soundmojiVisualEffectRef", "tooltipOverride"]), [ef] = S, {
    name: ep,
    emojiId: e_,
    emojiName: eh
  } = R, em = (0, l.bG)([v.default], () => v.default.getCurrentUser()), eg = (0, w.v)(R, null == M ? true : M.guild_id), {
    playSoundboardSound: eE,
    previewSound: ey,
    isPlayingSound: eb
  } = (0, N.A)(R, null != (n = null == M ? true : M.id) ? n : null, null != (a = el ? b.HO.getSetting() : null == (O = b.dG.getSetting()) ? true : O.volume) ? a : 100, !el && (null == M ? true : M.isVocal()) ? D.a.VOICE : D.a.DEFAULT), {
    createMultipleConfettiAt: eO
  } = i.useContext(m.x), ev = i.useRef(null), eA = Z(R.soundId, ev.current), eI = (0, l.bG)([_.A], () => _.A.useReducedMotion), eS = i.useRef(B), eT = i.useRef(new c.IX), eC = R.soundId === V, eN = "sound-".concat(R.soundId), ew = (0, s.rm)(eN), eR = null != e_ || null != eh, eP = !(0, C.Ir)(em, R, M) && !el, eD = Q || J && !eP, eL = null != (u = g.LW.useStore().bottomPosition) ? u : 0, ex = (null != (h = null == (A = ev.current) ? true : A.getBoundingClientRect().bottom) ? h : 0) + 50 > eL ? "top" : "bottom", [eM, ej] = i.useState(false), ek = i.useCallback(() => {
    ej(true)
  }, []), eU = i.useCallback(() => {
    ej(false)
  }, []), eG = eP && ei;

  function eF() {
    $ || eE(en)
  }

  function eV(e) {
    (eC && !eI && (eS.current = Math.min(eS.current + Y, H), Math.random() < eS.current && eO(eA.x, eA.y, true, true, {
      sprite: P.dR
    })), null != et) ? et(e): eF()
  }
  let eB = (0, r.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eU,
      children: z({
        sound: R,
        previewSound: ey,
        disabled: eP && !Q
      })
    }),
    eH = e => $ || eP ? eG ? (0, r.jsx)(f.XAi, {
      size: "xs",
      color: "currentColor",
      className: o()(x.C4, x.hz, e, {
        [x.hn]: eR
      })
    }) : null : (0, r.jsx)(f.udU, {
      size: "xs",
      color: "currentColor",
      className: o()(x.C4, e)
    }),
    eY = (0, r.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eU,
      children: (0, r.jsx)(q, {
        sound: R,
        disabled: !X && !Q
      })
    }),
    eW = () => eG && !ea ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.LQ
      }), eH(x.B3), (0, r.jsx)("div", {
        className: x.d7,
        children: (0, r.jsxs)("div", {
          className: x.O5,
          children: [eD && eB, eD && eY]
        })
      })]
    }) : (0, r.jsxs)("div", {
      className: x.d7,
      children: [(0, r.jsx)("div", {
        className: o()({
          [x.LQ]: !$
        })
      }), (0, r.jsx)("div", {
        className: x.O5,
        children: er === T.If.SOUNDMOJI ? (0, r.jsx)(E.Ay, {
          sound: R,
          channel: M,
          setTooltipShowing: ej
        }) : (0, r.jsxs)(r.Fragment, {
          children: [eD && eB, eH(), eD && eY]
        })
      })]
    });

  function eK() {
    switch (er) {
      case T.If.ADD:
        return (0, r.jsxs)("div", {
          className: x.ec,
          children: [(0, r.jsx)("div", {
            className: x.LQ
          }), (0, r.jsxs)("div", {
            className: x.O5,
            children: [eB, (0, r.jsxs)("div", {
              className: x.c9,
              children: [(0, r.jsx)(f.j96, {
                size: "md",
                color: "currentColor",
                className: x.y_
              }), (0, r.jsx)(f.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                children: L.intl.string(L.t.QqqXLY)
              })]
            }), eD && eY]
          })]
        });
      case T.If.NONE:
        return null;
      case T.If.PLAY:
      case T.If.SOUNDMOJI:
      default:
        return eW()
    }
  }
  i.useEffect(() => {
    let e = eT.current;
    return eC && e.start(W, () => {
      eS.current = Math.max(eS.current - Y, B)
    }), () => e.stop()
  }, [eC]);
  let ez = (0, y.o)(ev.current);
  return (0, r.jsxs)("li", {
    ref: ef,
    className: o()(x.H, k),
    onMouseEnter: ee,
    children: [(0, r.jsx)(d.m, {
      "aria-label": null != eu ? R.name : true,
      __unsupportedReactNodeAsText: null != eu ? eu : R.name,
      position: ex,
      shouldShow: !eM,
      delay: 500,
      children: (0, r.jsxs)(f.sqX, U(j({}, ed), {
        buttonProps: U(j({}, ew), {
          id: eN,
          role: "button"
        }),
        "aria-label": L.intl.formatToPlainString(L.t.tuMUJ2, {
          emojiName: R.emojiName,
          soundName: R.name
        }),
        className: o()(x.aG, {
          [x.CS]: eo,
          [x.he]: null != es ? es : eb,
          [x.ju]: $,
          [x.wT]: X,
          [x.$9]: !X && !Q,
          [x.Au]: eP && !Q,
          [x.fx]: !X && Q,
          [x.in]: X && K
        }, F),
        onClick: e => {
          null == eV || eV(e)
        },
        onContextMenu: J && !eP ? eg : true,
        children: [(0, r.jsxs)("div", {
          className: o()(x.KM, {
            [x.hn]: eR
          }),
          "aria-hidden": true,
          ref: ev,
          children: [eR && (0, r.jsx)(p.A, {
            emojiId: e_,
            emojiName: eh,
            className: x.Zg
          }), (0, r.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: X ? true : "text-muted",
            className: o()(x.TW, {
              [x.hn]: eR
            }),
            children: ep
          })]
        }), eK()]
      }))
    }), !R.available && (0, r.jsx)(d.m, {
      text: L.intl.string(L.t.MDOXJR),
      shouldShow: !eM,
      children: (0, r.jsx)("div", {
        className: x.ET,
        children: !ea && (0, r.jsxs)("div", {
          className: x.ld,
          children: [eB, eY]
        })
      })
    }), true === el && (0, r.jsx)(y.A, {
      sound: R,
      containerDimensions: ez,
      ref: ec
    })]
  })
})