/** Chunk was on web.js **/
/** chunk id: 364203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk357352 = require("./357352.js"),
  Chunk565942 = require("./565942.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk703656 = require("./703656.js"),
  Chunk727939 = require("./727939.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk839606 = require("./839606.js"),
  Chunk411149 = require("./411149.js"),
  Chunk988290 = require("./988290.js"),
  Chunk721359 = require("./721359.js"),
  Chunk640963 = require("./640963.js"),
  Chunk628309 = require("./628309.js"),
  Chunk461762 = require("./461762.js"),
  Chunk680783 = require("./680783.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839449 = require("./839449.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = 88,
  H = "remove-wallpaper",
  Y = .5,
  W = 250;

function K(e) {
  let {
    handleClose: t
  } = e;
  return (0, g.Z)({
    type: c.ImpressionTypes.POPOUT,
    name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
  }), (0, r.jsxs)("div", {
    className: U.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: U.badgeAndCloseRow,
      children: [(0, r.jsx)(_.lBU, {
        text: k.intl.string(k.t.oW0eUV)
      }), (0, r.jsx)("div", {
        className: U.coachmarkCloseIcon,
        children: (0, r.jsx)(d.P, {
          size: "sm",
          onClick: () => {
            T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
              cta_location: "coachmark_header"
            }), t()
          }
        })
      })]
    }), (0, r.jsxs)("div", {
      className: U.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(_.X6q, {
        variant: "heading-lg/extrabold",
        children: k.intl.string(k.t.dFhhcX)
      }), (0, r.jsx)(_.Text, {
        className: U.subtitle,
        variant: "text-xs/medium",
        color: "text-muted",
        children: k.intl.string(k.t.u7Hzjo)
      })]
    })]
  })
}

function z(e) {
  let {
    isPremiumTier2Subscriber: t,
    handleClose: n
  } = e;
  return (0, r.jsxs)("div", {
    className: U.headerContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(_.X6q, {
        variant: "heading-md/semibold",
        children: k.intl.string(k.t.EJ4k19)
      }), (0, r.jsx)(_.Text, {
        className: U.subtitle,
        variant: "text-sm/medium",
        children: t ? k.intl.string(k.t.MnUZLS) : k.intl.string(k.t.frNDKS)
      })]
    }), (0, r.jsx)("div", {
      className: U.closeContainer,
      children: (0, r.jsx)(d.P, {
        size: "sm",
        onClick: () => {
          T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
            cta_location: "header"
          }), n()
        }
      })
    })]
  })
}

function q(e) {
  let {
    isSelected: t,
    onSelect: n,
    selectionId: a,
    tooltipText: s,
    label: u,
    className: d,
    children: f
  } = e, p = (0, _.xUy)({
    label: u,
    isSelected: t
  }), h = i.useRef(null);
  i.useEffect(() => {
    let e = new IntersectionObserver(e => {
      e.forEach(e => {
        e.isIntersecting && (0, g.h)({
          type: c.ImpressionTypes.VIEW,
          name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
          properties: {
            design_group_id: a
          }
        })
      })
    }, {
      threshold: Y
    });
    return null != h.current && e.observe(h.current), () => {
      e.disconnect()
    }
  }, [a, h]);
  let [m, E] = i.useState("top");
  return i.useEffect(() => {
    let e = h.current;
    if (null == e) return;
    let t = l()(e => {
        E(e.intersectionRect.top === e.boundingClientRect.top ? "top" : "bottom")
      }, 200),
      n = new IntersectionObserver(e => {
        e.forEach(e => {
          t(e)
        })
      }, {
        threshold: [0, 1]
      });
    return n.observe(e), () => {
      n.disconnect(), t.cancel()
    }
  }, []), (0, r.jsx)(_.ua7, {
    text: s,
    position: m,
    children: e => (0, r.jsx)("div", {
      ref: h,
      className: o()(d, t && U.wallpaperSelected),
      children: (0, r.jsx)(_.P3F, F(B({}, e, p), {
        className: U.wallpaperSelectionClickableContainer,
        tabIndex: p.tabIndex,
        onClick: t ? L.dG4 : () => n(a),
        children: f
      }))
    })
  })
}

function X(e) {
  let {
    isSelected: t,
    onSelect: n,
    chatWallpaperMetadata: a
  } = e, o = (0, D.Z)(a.id), {
    label: s,
    designGroupId: l
  } = a, [c, u] = i.useState(false);
  return (i.useEffect(() => {
    let e;
    if (t) {
      var n;
      let t = false,
        r = (0, E.I)(null != (n = null == o ? true : o.asset) ? n : "");
      (0, b.p)(r, () => {
        u(false), t = true
      }), e = setTimeout(() => {
        t || u(true)
      }, W)
    } else u(false);
    return () => {
      clearTimeout(e), u(false)
    }
  }, [t, o]), null == o) ? null : (0, r.jsxs)(q, {
    isSelected: t,
    onSelect: n,
    selectionId: l,
    tooltipText: s,
    label: s,
    className: U.wallpaper,
    children: [c && (0, r.jsx)(_.$jN, {
      className: U.previewLoadingSpinner
    }), (0, r.jsx)("img", {
      src: (0, E.I)(o.icon),
      alt: s,
      width: V,
      height: V,
      draggable: false,
      className: U.wallpaperImage
    })]
  })
}

function Q(e) {
  let {
    isSelected: t,
    onSelect: n
  } = e;
  return (0, r.jsx)(q, {
    isSelected: t,
    onSelect: n,
    selectionId: H,
    tooltipText: k.intl.string(k.t["C/MRFx"]),
    label: k.intl.string(k.t["C/MRFx"]),
    className: U.wallpaperRemoveSelection,
    children: (0, r.jsx)(_.t6m, {
      size: "lg",
      color: _.TVs.colors.TEXT_MUTED
    })
  })
}

function J(e) {
  let {
    canApply: t,
    isUpdating: n,
    isBlurEnabled: i,
    onBlurEnabledChange: a,
    onClose: o,
    onApply: s
  } = e;
  return (0, r.jsxs)(_.Kqy, {
    direction: "horizontal",
    justify: "space-between",
    align: "center",
    className: U.footerContainerStack,
    padding: 16,
    children: [(0, r.jsx)(f.$q, {
      type: f.M0.INVERTED,
      value: i,
      onChange: (e, t) => {
        T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, {
          selected: t
        }), a(t)
      },
      children: k.intl.string(k.t["3nPvdH"])
    }), (0, r.jsx)(_.Kqy, {
      direction: "horizontal",
      justify: "end",
      gap: 0,
      children: (0, r.jsxs)(_.hE2, {
        children: [(0, r.jsx)(_.zxk, {
          variant: "secondary",
          text: k.intl.string(k.t["ETE/oK"]),
          onClick: () => {
            T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, {
              cta_location: "footer"
            }), o()
          },
          disabled: n
        }), (0, r.jsx)(_.zxk, {
          variant: "primary",
          text: k.intl.string(k.t["1Qm829"]),
          onClick: s,
          disabled: !t,
          loading: n
        })]
      })
    })]
  })
}

function $() {
  return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    direction: "horizontal",
    justify: "space-between",
    className: Chunk839449.footerContainerStack,
    padding: 16,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: Chunk839449.nonTier2FooterText,
      children: Chunk388032.intl.format(Chunk388032.t["0Tapv7"], {
        onClickNitro: () => {
          Chunk626135.default.track(Chunk981631.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, Chunk703656.uL)(Chunk981631.Z5c.NITRO_HOME)
        }
      })
    }), (0, Chunk951288.jsx)(Chunk784238.Z, {
      className: Chunk839449.getNitroButton,
      textOptions: {
        textOverride: Chunk388032.intl.string(Chunk388032.t.JST6jo),
        textClassName: Chunk839449.getNitroButtonText
      },
      subscriptionTier: Chunk474936.Si.TIER_2,
      showGradient: true,
      color: Chunk755721.Tt.BRAND,
      size: Chunk755721.zx.Sizes.MEDIUM
    })]
  })
}
let ee = function(e) {
  let {
    className: t,
    position: a = L.VD2.TOP_RIGHT,
    config: s
  } = e, {
    analyticsLocations: l
  } = (0, m.ZP)(h.Z.CHAT_WALLPAPER_PICKER), {
    activePickerChannelId: c,
    closePicker: d,
    setPreviewWallpaperId: f
  } = (0, A.B)(), g = (0, x.Z)(c), E = (0, O.m)(M.p9.TIER_2), [b, y] = i.useState(false), v = (0, N.e)(b), D = (0, w.u)();
  (0, R.W)();
  let G = (0, u.e7)([C.Z], () => C.Z.isFetchingWallpapers),
    B = (0, u.e7)([C.Z], () => C.Z.failedToFetchWallpapers),
    Z = (0, u.e7)([C.Z], () => C.Z.getWallpaperById(null == g ? true : g.wallpaperId)),
    F = i.useRef(null),
    V = i.useRef(null);
  (0, _.Tbt)(V), i.useEffect(() => {
    V.current = F.current
  }, [F]), i.useEffect(() => {
    null != Z && y(Z.isBlurred && E)
  }, [Z, E]);
  let H = i.useCallback(() => {
      d()
    }, [d]),
    {
      isUpdating: Y,
      updateChatWallpaper: W
    } = (0, P.x)({
      channelId: c,
      onUpdateComplete: H
    }),
    q = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : j.L.USER_DISMISS;
      (null == s ? true : s.markDismissed) != null && s.markDismissed(e), d()
    }, [d, s]);
  (0, p.ZP)(() => () => {
    q(j.L.INDIRECT_ACTION)
  });
  let ee = i.useCallback(() => {
      if (null == c || null == g || true === g.wallpaperId) return;
      let e = S.Z.getChannel(c);
      T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
        wallpaper_id: g.wallpaperId,
        is_blur_enabled: b,
        channel_id: c,
        channel_type: null == e ? true : e.type
      }), W(c, g.wallpaperId, () => {
        (0, _.showToast)((0, _.createToast)(k.intl.string(k.t.F8FvU1), _.ToastType.FAILURE))
      })
    }, [c, g, W, b]),
    et = i.useCallback(e => {
      if ((null == Z ? true : Z.designGroupId) != null) {
        var t;
        let n = D[Z.designGroupId].find(t => t.isBlurred === e);
        f(null != (t = null == n ? true : n.id) ? t : null)
      } else y(e)
    }, [null == Z ? true : Z.designGroupId, D, f]),
    en = i.useCallback(e => {
      let t = D[e];
      if (null == t) return;
      let n = t.find(e => e.isBlurred === b);
      null != n && (T.default.track(L.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
        wallpaper_id: n.id,
        is_blurred: n.isBlurred
      }), f(n.id))
    }, [b, D, f]),
    er = i.useCallback(e => {
      e.keyCode === L.yXg.ESCAPE && q()
    }, [q]);
  i.useEffect(() => {
    let e = e => {
      var t;
      V.current = (null == (t = F.current) ? true : t.contains(e.target)) ? F.current : null
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [F]);
  let ei = null == c && (null == s ? true : s.pickerType) !== A.j.COACHMARK,
    ea = null;
  return ea = B || ei ? (0, r.jsxs)("div", {
    className: U.errorContainer,
    children: [(0, r.jsx)(_.Eep, {
      src: n(167969),
      alt: "Error",
      height: 100,
      width: 200
    }), (0, r.jsx)(_.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: U.errorText,
      children: k.intl.string(k.t.F8FvU1)
    })]
  }) : G ? (0, r.jsx)("div", {
    className: U.loadingContainer,
    children: (0, r.jsx)(_.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(_.Ttm, {
      className: U.wallpapersContainer,
      children: [(0, r.jsx)(Q, {
        isSelected: null == g || null === g.wallpaperId,
        onSelect: () => {
          T.default.track(L.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
            wallpaper_id: null,
            is_blurred: false
          }), f(null)
        }
      }), v.map(e => (0, r.jsx)(X, {
        isSelected: (null == Z ? true : Z.designGroupId) === e.designGroupId,
        onSelect: en,
        chatWallpaperMetadata: e
      }, e.id))]
    }), E ? (0, r.jsx)(J, {
      canApply: (null == g ? true : g.wallpaperId) !== true,
      isUpdating: Y,
      isBlurEnabled: b,
      onBlurEnabledChange: et,
      onClose: q,
      onApply: ee
    }) : (0, r.jsx)($, {})]
  }), (0, r.jsx)(m.Gt, {
    value: l,
    children: (0, r.jsx)(I.Z, {
      className: o()(U.draggableContainer, t),
      defaultPosition: a,
      topOffset: 88,
      children: (0, r.jsxs)("div", {
        className: U.container,
        ref: F,
        onKeyDown: er,
        children: [(null == s ? true : s.pickerType) === A.j.COACHMARK ? (0, r.jsx)(K, {
          handleClose: q,
          isPremiumTier2Subscriber: E
        }) : (0, r.jsx)(z, {
          handleClose: q,
          isPremiumTier2Subscriber: E
        }), (0, r.jsx)("div", {
          className: U.divider
        }), (0, r.jsx)(_.JcV, {
          containerRef: F,
          children: ea
        })]
      })
    })
  })
}