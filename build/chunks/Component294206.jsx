/** Chunk was on web.js **/
/** chunk id: 294206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => Q,
  hU: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk745510 = require("./745510.jsx"),
  Chunk806966 = require("./806966.js"),
  Chunk409700 = require("./409700.jsx"),
  Chunk309006 = require("./309006.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk242291 = require("./242291.js"),
  Chunk830253 = require("./830253.js"),
  Chunk286654 = require("./286654.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk509571 = require("./509571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk349971 = require("./349971.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
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
  var n, r, i = Z(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let B = "1",
  F = .01,
  V = .1,
  H = .01,
  Y = 1e3;

function W(e) {
  let {
    disabled: t = false,
    onClick: n,
    text: i,
    children: a,
    tooltipPosition: s = "top",
    ref: l
  } = e;
  return (0, r.jsx)(d.u, {
    text: i,
    position: s,
    children: (0, r.jsx)(f.P3F, {
      innerRef: l,
      "aria-label": i,
      className: o()(L.secondaryButton, {
        [L.buttonDisabled]: t
      }),
      onClick: n,
      children: a
    })
  })
}

function K(e) {
  let {
    sound: t,
    previewSound: n,
    disabled: i = false,
    tooltipPosition: a = "top"
  } = e, o = (0, l.e7)([O.Z], () => O.Z.getGuildId());

  function s(e) {
    S.default.track(R.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
      sound_id: t.soundId,
      sound_name: t.name,
      sound_guild_id: t.guildId,
      location_guild_id: o
    }), e.stopPropagation(), e.currentTarget.blur(), n()
  }
  return (0, r.jsx)(W, {
    tooltipPosition: a,
    disabled: i,
    onClick: s,
    text: x.intl.formatToPlainString(x.t["/8fYO5"], {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, r.jsx)(f.gj8, {
      size: "md",
      color: "currentColor",
      className: L.secondaryIcon
    })
  })
}

function z(e) {
  let {
    sound: t,
    disabled: n = false
  } = e, {
    analyticsLocations: a
  } = (0, m.ZP)(), s = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(t.soundId), [t.soundId]), c = i.useCallback(e => {
    e.stopPropagation(), e.currentTarget.blur(), s ? (0, I.hs)(t.soundId) : ((0, A.lF)({
      sound: t,
      location: U(M({}, a), {
        object: R.qAy.SOUNDBOARD_SOUND
      })
    }), (0, I.TB)(t.soundId))
  }, [s, t, a]);
  return (0, r.jsx)(W, {
    disabled: n,
    onClick: c,
    text: x.intl.formatToPlainString(s ? x.t.lQLsjc : x.t.Y5DOs4, {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: s ? (0, r.jsx)(f.r7p, {
      size: "xs",
      className: o()(L.secondaryIcon, L.favoriteIconFavorite),
      color: u.Z.unsafe_rawColors.GOLD.css
    }) : (0, r.jsx)(f.vxU, {
      size: "xs",
      color: "currentColor",
      className: L.secondaryIcon
    })
  })
}

function q(e, t) {
  return i.useMemo(() => {
    if (null == t || e !== B) return {
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
let Q = Chunk473749.forwardRef(function(e, t) {
  var n, a, u, m, O, S, {
      sound: I,
      channel: T,
      containerClassName: R,
      className: j,
      focused: k,
      forceSecondaryActions: Z = false,
      interactive: W = true,
      enableSecondaryActions: Q = false,
      suppressPlaySound: X,
      onMouseEnter: J,
      onSelectItem: $,
      analyticsLocations: ee,
      buttonOverlay: et = C.Pb.PLAY,
      showLockForDisabledSound: en = true,
      inNitroLockedSection: er = false,
      isAnimated: ei = true,
      isPlayingSoundOverride: ea,
      isSoundmoji: eo,
      soundmojiVisualEffectRef: es,
      tooltipOverride: el
    } = e,
    ec = G(e, ["sound", "channel", "containerClassName", "className", "focused", "forceSecondaryActions", "interactive", "enableSecondaryActions", "suppressPlaySound", "onMouseEnter", "onSelectItem", "analyticsLocations", "buttonOverlay", "showLockForDisabledSound", "inNitroLockedSection", "isAnimated", "isPlayingSoundOverride", "isSoundmoji", "soundmojiVisualEffectRef", "tooltipOverride"]);
  let {
    name: eu,
    emojiId: ed,
    emojiName: ef
  } = I, ep = (0, l.e7)([v.default], () => v.default.getCurrentUser()), e_ = (0, P.z)(I, null == T ? true : T.guild_id), {
    playSoundboardSound: em,
    previewSound: eh,
    isPlayingSound: eg
  } = (0, N.Z)(I, null != (u = null == T ? true : T.id) ? u : null, null != (m = eo ? y.AY.getSetting() : null == (n = y.kU.getSetting()) ? true : n.volume) ? m : 100, !eo && (null == T ? true : T.isVocal()) ? D.w.VOICE : D.w.DEFAULT), {
    createMultipleConfettiAt: eE
  } = i.useContext(h.h), eb = i.useRef(null), ey = q(I.soundId, eb.current), eO = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), ev = i.useRef(F), eS = i.useRef(new c.Xp), eI = I.soundId === B, eT = "sound-".concat(I.soundId), eC = (0, s.JA)(eT), eA = null != ed || null != ef, eN = !(0, A.Nq)(ep, I, T) && !eo, eP = Z || Q && !eN, eR = null != (O = g.Wq.useStore().bottomPosition) ? O : 0, ew = (null != (S = null == (a = eb.current) ? true : a.getBoundingClientRect().bottom) ? S : 0) + 50 > eR ? "top" : "bottom", [eD, ex] = i.useState(false), eL = i.useCallback(() => {
    ex(true)
  }, []), ej = i.useCallback(() => {
    ex(false)
  }, []), eM = eN && en;

  function ek() {
    X || em(ee)
  }

  function eU(e) {
    if (eI && !eO && (ev.current = Math.min(ev.current + H, V), Math.random() < ev.current && eE(ey.x, ey.y, true, true, {
        sprite: w.vv
      })), null != $) return void $(e);
    ek()
  }
  let eG = (0, r.jsx)("div", {
      onMouseEnter: eL,
      onMouseLeave: ej,
      children: K({
        sound: I,
        previewSound: eh,
        disabled: eN && !Z
      })
    }),
    eZ = e => X || eN ? eM ? (0, r.jsx)(f.mBM, {
      size: "xs",
      color: "currentColor",
      className: o()(L.primaryIcon, L.lockIcon, e, {
        [L.hasEmoji]: eA
      })
    }) : null : (0, r.jsx)(f.o1U, {
      size: "xs",
      color: "currentColor",
      className: o()(L.primaryIcon, e)
    }),
    eB = (0, r.jsx)("div", {
      onMouseEnter: eL,
      onMouseLeave: ej,
      children: (0, r.jsx)(z, {
        sound: I,
        disabled: !W && !Z
      })
    }),
    eF = () => eM && !er ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: L.buttonOverlayBackground
      }), eZ(L.primaryIconTopLevel), (0, r.jsx)("div", {
        className: L.buttonOverlay,
        children: (0, r.jsxs)("div", {
          className: L.buttonOverlayActions,
          children: [eP && eG, eP && eB]
        })
      })]
    }) : (0, r.jsxs)("div", {
      className: L.buttonOverlay,
      children: [(0, r.jsx)("div", {
        className: o()({
          [L.buttonOverlayBackground]: !X
        })
      }), (0, r.jsx)("div", {
        className: L.buttonOverlayActions,
        children: et === C.Pb.SOUNDMOJI ? (0, r.jsx)(E.ZP, {
          sound: I,
          channel: T,
          setTooltipShowing: ex
        }) : (0, r.jsxs)(r.Fragment, {
          children: [eP && eG, eZ(), eP && eB]
        })
      })]
    });

  function eV() {
    switch (et) {
      case C.Pb.ADD:
        return (0, r.jsxs)("div", {
          className: L.addButtonOverlay,
          children: [(0, r.jsx)("div", {
            className: L.buttonOverlayBackground
          }), (0, r.jsxs)("div", {
            className: L.buttonOverlayActions,
            children: [eG, (0, r.jsxs)("div", {
              className: L.addButton,
              children: [(0, r.jsx)(f.qJs, {
                size: "md",
                color: "currentColor",
                className: L.plusSign
              }), (0, r.jsx)(f.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: x.intl.string(x.t.QqqXLY)
              })]
            }), eP && eB]
          })]
        });
      case C.Pb.NONE:
        return null;
      case C.Pb.PLAY:
      case C.Pb.SOUNDMOJI:
      default:
        return eF()
    }
  }
  i.useEffect(() => {
    let e = eS.current;
    return eI && e.start(Y, () => {
      ev.current = Math.max(ev.current - H, F)
    }), () => e.stop()
  }, [eI]);
  let eH = (0, b.a)(eb.current);
  return (0, r.jsxs)("li", {
    ref: t,
    className: o()(L.soundButtonWrapper, R),
    onMouseEnter: J,
    children: [(0, r.jsx)(d.u, {
      "aria-label": null != el ? I.name : true,
      __unsupportedReactNodeAsText: null != el ? el : I.name,
      position: ew,
      shouldShow: !eD,
      delay: 500,
      children: (0, r.jsxs)(f.kL8, U(M({}, ec), {
        buttonProps: U(M({}, eC), {
          id: eT,
          role: "button"
        }),
        "aria-label": x.intl.formatToPlainString(x.t.tuMUJ2, {
          emojiName: I.emojiName,
          soundName: I.name
        }),
        className: o()(L.soundButton, {
          [L.animated]: ei,
          [L.playing]: null != ea ? ea : eg,
          [L.hoverActiveBackground]: X,
          [L.soundButtonInteractive]: W,
          [L.buttonDisabled]: !W && !Z,
          [L.premiumDisabled]: eN && !Z,
          [L.buttonDisabledSecondaryActionsEnabled]: !W && Z,
          [L.focused]: W && k
        }, j),
        onClick: e => {
          null == eU || eU(e)
        },
        onContextMenu: Q && !eN ? e_ : true,
        children: [(0, r.jsxs)("div", {
          className: o()(L.soundInfo, {
            [L.hasEmoji]: eA
          }),
          "aria-hidden": true,
          ref: eb,
          children: [eA && (0, r.jsx)(p.Z, {
            emojiId: ed,
            emojiName: ef,
            className: L.emoji
          }), (0, r.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: W ? true : "text-muted",
            className: o()(L.soundName, {
              [L.hasEmoji]: eA
            }),
            children: eu
          })]
        }), eV()]
      }))
    }), !I.available && (0, r.jsx)(d.u, {
      text: x.intl.string(x.t.MDOXJR),
      shouldShow: !eD,
      children: (0, r.jsx)("div", {
        className: L.unavailableTooltip,
        children: !er && (0, r.jsxs)("div", {
          className: L.unavailableTooltipActions,
          children: [eG, eB]
        })
      })
    }), true === eo && (0, r.jsx)(b.Z, {
      sound: I,
      containerDimensions: eH,
      ref: es
    })]
  })
})