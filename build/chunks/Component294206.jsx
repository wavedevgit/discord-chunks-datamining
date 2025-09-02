/** Chunk was on web.js **/
/** chunk id: 294206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => q,
  hU: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk463063 = require("./463063.js");

function L(e, t, n) {
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
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = G(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let B = "1",
  Z = .01,
  F = .1,
  V = .01,
  H = 1e3;

function Y(e) {
  let {
    disabled: t = false,
    onClick: n,
    text: i,
    children: a,
    tooltipPosition: s = "top",
    ref: l
  } = e;
  return (0, r.jsx)(d.ua7, {
    text: i,
    position: s,
    children: e => (0, r.jsx)(d.P3F, k(j({}, e), {
      innerRef: l,
      "aria-label": i,
      className: o()(x.secondaryButton, {
        [x.buttonDisabled]: t
      }),
      onClick: n,
      children: a
    }))
  })
}

function W(e) {
  let {
    sound: t,
    previewSound: n,
    disabled: i = false,
    tooltipPosition: a = "top"
  } = e, o = (0, l.e7)([y.Z], () => y.Z.getGuildId());

  function s(e) {
    v.default.track(R.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
      sound_id: t.soundId,
      sound_name: t.name,
      sound_guild_id: t.guildId,
      location_guild_id: o
    }), e.stopPropagation(), e.currentTarget.blur(), n()
  }
  return (0, r.jsx)(Y, {
    tooltipPosition: a,
    disabled: i,
    onClick: s,
    text: D.intl.formatToPlainString(D.t["/8fYOz"], {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, r.jsx)(d.gj8, {
      size: "md",
      color: "currentColor",
      className: x.secondaryIcon
    })
  })
}

function K(e) {
  let {
    sound: t,
    disabled: n = false
  } = e, {
    analyticsLocations: a
  } = (0, p.ZP)(), s = (0, l.e7)([S.Z], () => S.Z.isFavoriteSound(t.soundId), [t.soundId]), c = i.useCallback(e => {
    e.stopPropagation(), e.currentTarget.blur(), s ? (0, I.hs)(t.soundId) : ((0, A.lF)({
      sound: t,
      location: k(j({}, a), {
        object: R.qAy.SOUNDBOARD_SOUND
      })
    }), (0, I.TB)(t.soundId))
  }, [s, t, a]);
  return (0, r.jsx)(Y, {
    disabled: n,
    onClick: c,
    text: D.intl.formatToPlainString(s ? D.t.lQLsjY : D.t.Y5DOs7, {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: s ? (0, r.jsx)(d.r7p, {
      size: "xs",
      className: o()(x.secondaryIcon, x.favoriteIconFavorite),
      color: u.Z.unsafe_rawColors.GOLD.css
    }) : (0, r.jsx)(d.vxU, {
      size: "xs",
      color: "currentColor",
      className: x.secondaryIcon
    })
  })
}

function z(e, t) {
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
let q = Chunk647438.forwardRef(function(e, t) {
  var n, a, u, p, y, v, {
      sound: I,
      channel: S,
      containerClassName: R,
      className: L,
      focused: M,
      forceSecondaryActions: G = false,
      interactive: Y = true,
      enableSecondaryActions: q = false,
      suppressPlaySound: X,
      onMouseEnter: Q,
      onSelectItem: J,
      analyticsLocations: $,
      buttonOverlay: ee = T.Pb.PLAY,
      showLockForDisabledSound: et = true,
      inNitroLockedSection: en = false,
      isAnimated: er = true,
      isPlayingSoundOverride: ei,
      isSoundmoji: ea,
      soundmojiVisualEffectRef: eo,
      tooltipOverride: es,
      tooltipClassName: el,
      tooltipContentClassName: ec
    } = e,
    eu = U(e, ["sound", "channel", "containerClassName", "className", "focused", "forceSecondaryActions", "interactive", "enableSecondaryActions", "suppressPlaySound", "onMouseEnter", "onSelectItem", "analyticsLocations", "buttonOverlay", "showLockForDisabledSound", "inNitroLockedSection", "isAnimated", "isPlayingSoundOverride", "isSoundmoji", "soundmojiVisualEffectRef", "tooltipOverride", "tooltipClassName", "tooltipContentClassName"]);
  let {
    name: ed,
    emojiId: ef,
    emojiName: e_
  } = I, ep = (0, l.e7)([O.default], () => O.default.getCurrentUser()), eh = (0, N.z)(I, null == S ? true : S.guild_id), {
    playSoundboardSound: em,
    previewSound: eg,
    isPlayingSound: eE
  } = (0, C.Z)(I, null != (u = null == S ? true : S.id) ? u : null, null != (p = ea ? b.AY.getSetting() : null == (n = b.kU.getSetting()) ? true : n.volume) ? p : 100, !ea && (null == S ? true : S.isVocal()) ? w.w.VOICE : w.w.DEFAULT), {
    createMultipleConfettiAt: eb
  } = i.useContext(h.h), ey = i.useRef(null), eO = z(I.soundId, ey.current), ev = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), eI = i.useRef(Z), eS = i.useRef(new c.Xp), eT = I.soundId === B, eA = "sound-".concat(I.soundId), eC = (0, s.JA)(eA), eN = null != ef || null != e_, eR = !(0, A.Nq)(ep, I, S) && !ea, eP = G || q && !eR, ew = null != (y = m.Wq.useStore().bottomPosition) ? y : 0, eD = (null != (v = null == (a = ey.current) ? true : a.getBoundingClientRect().bottom) ? v : 0) + 50 > ew ? "top" : "bottom", [ex, eL] = i.useState(false), ej = eR && et;

  function eM() {
    X || em($)
  }

  function ek(e) {
    if (eT && !ev && (eI.current = Math.min(eI.current + V, F), Math.random() < eI.current && eb(eO.x, eO.y, true, true, {
        sprite: P.vv
      })), null != J) return void J(e);
    eM()
  }
  let eU = W({
      sound: I,
      previewSound: eg,
      disabled: eR && !G
    }),
    eG = e => X || eR ? ej ? (0, r.jsx)(d.mBM, {
      size: "xs",
      color: "currentColor",
      className: o()(x.primaryIcon, x.lockIcon, e, {
        [x.hasEmoji]: eN
      })
    }) : null : (0, r.jsx)(d.o1U, {
      size: "xs",
      color: "currentColor",
      className: o()(x.primaryIcon, e)
    }),
    eB = (0, r.jsx)(K, {
      sound: I,
      disabled: !Y && !G
    }),
    eZ = () => ej && !en ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: x.buttonOverlayBackground
      }), eG(x.primaryIconTopLevel), (0, r.jsx)("div", {
        className: x.buttonOverlay,
        children: (0, r.jsxs)("div", {
          className: x.buttonOverlayActions,
          children: [eP && eU, eP && eB]
        })
      })]
    }) : (0, r.jsxs)("div", {
      className: x.buttonOverlay,
      children: [(0, r.jsx)("div", {
        className: o()({
          [x.buttonOverlayBackground]: !X
        })
      }), (0, r.jsx)("div", {
        className: x.buttonOverlayActions,
        children: ee === T.Pb.SOUNDMOJI ? (0, r.jsx)(g.ZP, {
          sound: I,
          channel: S,
          setTooltipShowing: eL
        }) : (0, r.jsxs)(r.Fragment, {
          children: [eP && eU, eG(), eP && eB]
        })
      })]
    });

  function eF() {
    switch (ee) {
      case T.Pb.ADD:
        return (0, r.jsxs)("div", {
          className: x.addButtonOverlay,
          children: [(0, r.jsx)("div", {
            className: x.buttonOverlayBackground
          }), (0, r.jsxs)("div", {
            className: x.buttonOverlayActions,
            children: [eU, (0, r.jsxs)("div", {
              className: x.addButton,
              children: [(0, r.jsx)(d.qJs, {
                size: "md",
                color: "currentColor",
                className: x.plusSign
              }), (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: D.intl.string(D.t.QqqXLS)
              })]
            }), eP && eB]
          })]
        });
      case T.Pb.NONE:
        return null;
      case T.Pb.PLAY:
      case T.Pb.SOUNDMOJI:
      default:
        return eZ()
    }
  }
  i.useEffect(() => {
    let e = eS.current;
    return eT && e.start(H, () => {
      eI.current = Math.max(eI.current - V, Z)
    }), () => e.stop()
  }, [eT]);
  let eV = (0, E.a)(ey.current);
  return (0, r.jsxs)("li", {
    ref: t,
    className: o()(x.soundButtonWrapper, R),
    onMouseEnter: Q,
    children: [(0, r.jsx)(d.ua7, {
      "aria-label": null != es ? I.name : true,
      text: null != es ? es : I.name,
      tooltipClassName: el,
      tooltipContentClassName: ec,
      position: eD,
      shouldShow: !ex,
      delay: 500,
      children: e => (0, r.jsxs)(d.kL8, k(j(k(j({}, eu), {
        buttonProps: k(j({}, eC), {
          id: eA,
          role: "button"
        }),
        "aria-label": D.intl.formatToPlainString(D.t.tuMUJy, {
          emojiName: I.emojiName,
          soundName: I.name
        }),
        className: o()(x.soundButton, {
          [x.animated]: er,
          [x.playing]: null != ei ? ei : eE,
          [x.hoverActiveBackground]: X,
          [x.soundButtonInteractive]: Y,
          [x.buttonDisabled]: !Y && !G,
          [x.premiumDisabled]: eR && !G,
          [x.buttonDisabledSecondaryActionsEnabled]: !Y && G,
          [x.focused]: Y && M
        }, L)
      }), e), {
        onClick: t => {
          var n;
          null == e || null == (n = e.onClick) || n.call(e), null == ek || ek(t)
        },
        onContextMenu: q && !eR ? eh : true,
        onMouseOver: () => {
          var t;
          return null != es ? null == (t = e.onMouseEnter) ? true : t.call(e) : null
        },
        children: [(0, r.jsxs)("div", {
          className: o()(x.soundInfo, {
            [x.hasEmoji]: eN
          }),
          "aria-hidden": true,
          ref: ey,
          children: [eN && (0, r.jsx)(f.Z, {
            emojiId: ef,
            emojiName: e_,
            className: x.emoji
          }), (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: Y ? true : "text-muted",
            className: o()(x.soundName, {
              [x.hasEmoji]: eN
            }),
            children: ed
          })]
        }), eF()]
      }))
    }), !I.available && (0, r.jsx)(d.ua7, {
      text: D.intl.string(D.t.MDOXJS),
      children: e => (0, r.jsx)("div", j({
        className: x.unavailableTooltip
      }, e))
    }), true === ea && (0, r.jsx)(E.Z, {
      sound: I,
      containerDimensions: eV,
      ref: eo
    })]
  })
})