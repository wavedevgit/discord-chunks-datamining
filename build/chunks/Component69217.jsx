/** Chunk was on web.js **/
/** chunk id: 69217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => X,
  dT: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = V(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let F = "1",
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
    tooltipPosition: o = "top",
    ref: l
  } = e;
  return (0, r.jsx)(d.m, {
    text: i,
    position: o,
    children: (0, r.jsx)(f.DUT, {
      innerRef: l,
      "aria-label": i,
      className: s()(L.zr, {
        [L.$9]: t
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
  } = e, s = (0, l.bG)([O.A], () => O.A.getGuildId());

  function o(e) {
    A.default.track(R.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
      sound_id: t.soundId,
      sound_name: t.name,
      sound_guild_id: t.guildId,
      location_guild_id: s
    }), e.stopPropagation(), e.currentTarget.blur(), n()
  }
  return (0, r.jsx)(K, {
    tooltipPosition: a,
    disabled: i,
    onClick: o,
    text: x.intl.formatToPlainString(x.t["/8fYO5"], {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, r.jsx)(f.HKD, {
      size: "md",
      color: "currentColor",
      className: L.Wo
    })
  })
}

function q(e) {
  let {
    sound: t,
    disabled: n = false
  } = e, {
    analyticsLocations: a
  } = (0, h.Ay)(), o = (0, l.bG)([S.A], () => S.A.isFavoriteSound(t.soundId), [t.soundId]), c = i.useCallback(e => {
    e.stopPropagation(), e.currentTarget.blur(), o ? (0, I.eS)(t.soundId) : ((0, C.Ni)({
      sound: t,
      location: U(M({}, a), {
        object: R.ZSU.SOUNDBOARD_SOUND
      })
    }), (0, I.Rp)(t.soundId))
  }, [o, t, a]);
  return (0, r.jsx)(K, {
    disabled: n,
    onClick: c,
    text: x.intl.formatToPlainString(o ? x.t.lQLsjc : x.t.Y5DOs4, {
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: o ? (0, r.jsx)(f.Gg5, {
      size: "xs",
      className: s()(L.Wo, L.gj),
      color: u.A.unsafe_rawColors.GOLD.css
    }) : (0, r.jsx)(f.yA2, {
      size: "xs",
      color: "currentColor",
      className: L.Wo
    })
  })
}

function Z(e, t) {
  return i.useMemo(() => {
    if (null == t || e !== F) return {
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
let X = Chunk64700.forwardRef(function(e, t) {
  var n, a, u, h, O, A;
  let [I, ...S] = [e, t], {
    sound: R,
    channel: j,
    containerClassName: k,
    className: V,
    focused: K,
    forceSecondaryActions: X = false,
    interactive: Q = true,
    enableSecondaryActions: J = false,
    suppressPlaySound: $,
    onMouseEnter: ee,
    onSelectItem: et,
    analyticsLocations: en,
    buttonOverlay: er = T.If.PLAY,
    showLockForDisabledSound: ei = true,
    inNitroLockedSection: ea = false,
    isAnimated: es = true,
    isPlayingSoundOverride: eo,
    isSoundmoji: el,
    soundmojiVisualEffectRef: ec,
    tooltipOverride: eu
  } = I, ed = G(I, ["sound", "channel", "containerClassName", "className", "focused", "forceSecondaryActions", "interactive", "enableSecondaryActions", "suppressPlaySound", "onMouseEnter", "onSelectItem", "analyticsLocations", "buttonOverlay", "showLockForDisabledSound", "inNitroLockedSection", "isAnimated", "isPlayingSoundOverride", "isSoundmoji", "soundmojiVisualEffectRef", "tooltipOverride"]), [ef] = S, {
    name: ep,
    emojiId: e_,
    emojiName: eh
  } = R, em = (0, l.bG)([v.default], () => v.default.getCurrentUser()), eg = (0, w.v)(R, null == j ? true : j.guild_id), {
    playSoundboardSound: eE,
    previewSound: ey,
    isPlayingSound: eb
  } = (0, N.A)(R, null != (n = null == j ? true : j.id) ? n : null, null != (a = el ? b.HO.getSetting() : null == (O = b.dG.getSetting()) ? true : O.volume) ? a : 100, !el && (null == j ? true : j.isVocal()) ? D.a.VOICE : D.a.DEFAULT), {
    createMultipleConfettiAt: eO
  } = i.useContext(m.x), ev = i.useRef(null), eA = Z(R.soundId, ev.current), eI = (0, l.bG)([_.A], () => _.A.useReducedMotion), eS = i.useRef(B), eT = i.useRef(new c.IX), eC = R.soundId === F, eN = "sound-".concat(R.soundId), ew = (0, o.rm)(eN), eR = null != e_ || null != eh, eP = !(0, C.Ir)(em, R, j) && !el, eD = X || J && !eP, ex = null != (u = g.LW.useStore().bottomPosition) ? u : 0, eL = (null != (h = null == (A = ev.current) ? true : A.getBoundingClientRect().bottom) ? h : 0) + 50 > ex ? "top" : "bottom", [ej, eM] = i.useState(false), ek = i.useCallback(() => {
    eM(true)
  }, []), eU = i.useCallback(() => {
    eM(false)
  }, []), eG = eP && ei;

  function eV() {
    $ || eE(en)
  }

  function eF(e) {
    (eC && !eI && (eS.current = Math.min(eS.current + Y, H), Math.random() < eS.current && eO(eA.x, eA.y, true, true, {
      sprite: P.dR
    })), null != et) ? et(e): eV()
  }
  let eB = (0, r.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eU,
      children: z({
        sound: R,
        previewSound: ey,
        disabled: eP && !X
      })
    }),
    eH = e => $ || eP ? eG ? (0, r.jsx)(f.XAi, {
      size: "xs",
      color: "currentColor",
      className: s()(L.C4, L.hz, e, {
        [L.hn]: eR
      })
    }) : null : (0, r.jsx)(f.udU, {
      size: "xs",
      color: "currentColor",
      className: s()(L.C4, e)
    }),
    eY = (0, r.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eU,
      children: (0, r.jsx)(q, {
        sound: R,
        disabled: !Q && !X
      })
    }),
    eW = () => eG && !ea ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: L.LQ
      }), eH(L.B3), (0, r.jsx)("div", {
        className: L.d7,
        children: (0, r.jsxs)("div", {
          className: L.O5,
          children: [eD && eB, eD && eY]
        })
      })]
    }) : (0, r.jsxs)("div", {
      className: L.d7,
      children: [(0, r.jsx)("div", {
        className: s()({
          [L.LQ]: !$
        })
      }), (0, r.jsx)("div", {
        className: L.O5,
        children: er === T.If.SOUNDMOJI ? (0, r.jsx)(E.Ay, {
          sound: R,
          channel: j,
          setTooltipShowing: eM
        }) : (0, r.jsxs)(r.Fragment, {
          children: [eD && eB, eH(), eD && eY]
        })
      })]
    });

  function eK() {
    switch (er) {
      case T.If.ADD:
        return (0, r.jsxs)("div", {
          className: L.ec,
          children: [(0, r.jsx)("div", {
            className: L.LQ
          }), (0, r.jsxs)("div", {
            className: L.O5,
            children: [eB, (0, r.jsxs)("div", {
              className: L.c9,
              children: [(0, r.jsx)(f.j96, {
                size: "md",
                color: "currentColor",
                className: L.y_
              }), (0, r.jsx)(f.Text, {
                variant: "text-xs/medium",
                color: "text-strong",
                children: x.intl.string(x.t.QqqXLY)
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
    className: s()(L.H, k),
    onMouseEnter: ee,
    children: [(0, r.jsx)(d.m, {
      "aria-label": null != eu ? R.name : true,
      __unsupportedReactNodeAsText: null != eu ? eu : R.name,
      position: eL,
      shouldShow: !ej,
      delay: 500,
      children: (0, r.jsxs)(f.sqX, U(M({}, ed), {
        buttonProps: U(M({}, ew), {
          id: eN,
          role: "button"
        }),
        "aria-label": x.intl.formatToPlainString(x.t.tuMUJ2, {
          emojiName: R.emojiName,
          soundName: R.name
        }),
        className: s()(L.aG, {
          [L.CS]: es,
          [L.he]: null != eo ? eo : eb,
          [L.ju]: $,
          [L.wT]: Q,
          [L.$9]: !Q && !X,
          [L.Au]: eP && !X,
          [L.fx]: !Q && X,
          [L.in]: Q && K
        }, V),
        onClick: e => {
          null == eF || eF(e)
        },
        onContextMenu: J && !eP ? eg : true,
        children: [(0, r.jsxs)("div", {
          className: s()(L.KM, {
            [L.hn]: eR
          }),
          "aria-hidden": true,
          ref: ev,
          children: [eR && (0, r.jsx)(p.A, {
            emojiId: e_,
            emojiName: eh,
            className: L.Zg
          }), (0, r.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: Q ? true : "text-muted",
            className: s()(L.TW, {
              [L.hn]: eR
            }),
            children: ep
          })]
        }), eK()]
      }))
    }), !R.available && (0, r.jsx)(d.m, {
      text: x.intl.string(x.t.MDOXJR),
      shouldShow: !ej,
      children: (0, r.jsx)("div", {
        className: L.ET,
        children: !ea && (0, r.jsxs)("div", {
          className: L.ld,
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