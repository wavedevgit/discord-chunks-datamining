/** Chunk was on 5606 **/
/** chunk id: 144830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk212245 = require("./212245.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk421838 = require("./421838.js"),
  Chunk891540 = require("./891540.js"),
  Chunk738011 = require("./738011.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk965162 = require("./965162.js"),
  Chunk957153 = require("./957153.js"),
  Chunk577718 = require("./577718.js"),
  Chunk652215 = require("./652215.js"),
  Chunk897513 = require("./897513.js"),
  Chunk339984 = require("./339984.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk151000 = require("./151000.js");

function P(e) {
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

function R(e) {
  let {
    icon: t,
    onClick: n,
    text: i,
    children: l,
    className: a,
    selected: o = false,
    disabled: d = false,
    onMouseLeave: u,
    onBlur: p
  } = e;
  return (0, r.jsxs)(c.DUT, {
    className: s()(a, N.gf, {
      [N.JI]: o,
      [N.A7]: d
    }),
    onMouseLeave: u,
    onBlur: p,
    onClick: d ? true : n,
    children: [o ? (0, r.jsx)("div", {
      className: N.SH
    }) : null, (0, r.jsxs)("div", {
      className: N.kV,
      children: [l, (0, r.jsxs)("div", {
        className: N.fP,
        children: [(0, r.jsx)(t, {
          className: N.ob,
          color: "currentColor",
          size: "custom",
          width: 18,
          height: 18
        }), (0, r.jsx)(c.Text, {
          className: N.V7,
          color: "none",
          variant: "text-sm/normal",
          children: i
        })]
      })]
    })]
  })
}

function D(e) {
  let {
    option: t,
    source: n,
    isAnimated: l
  } = e, [s, a] = i.useState(false);
  if (i.useEffect(() => {
      new Image().src = n
    }, [n]), !l || null == t) return (0, r.jsx)("div", {
    className: N.PQ,
    style: {
      backgroundImage: "url(".concat(n, ")")
    }
  });
  let o = (0, E.Bo)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: 720,
    canAnimate: false
  });
  return (0, r.jsx)("img", {
    onMouseMove: () => a(true),
    onMouseLeave: () => a(false),
    className: N.PQ,
    src: s ? n : o,
    alt: t.id
  })
}

function w(e) {
  let {
    option: t,
    source: l,
    selected: o = false,
    onSelectOption: p,
    isAnimatedImage: E,
    isVideo: x,
    hotspotLocation: C
  } = e, y = (0, u.p)(), {
    analyticsLocations: T
  } = (0, m.Ay)(_.A.VIDEO_BACKGROUND_IMAGE_OPTION), v = (0, a.bG)([b.A], () => null != C && b.A.hasHotspot(C)), R = i.useCallback(e => {
    if (!(0, h.u)(e)) throw e
  }, []), w = x ? (0, r.jsx)(g.A, {
    className: N.PQ,
    src: l,
    loop: true,
    playOnHover: true,
    muted: true,
    onPlayError: R
  }) : (0, r.jsx)(D, {
    isAnimated: E,
    option: (0, O.d1)(t) ? t : true,
    source: l
  });

  function L() {
    null != C && v && (f.sF(C), A.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
      type: S.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: y.location,
      location_stack: T
    }))
  }
  return (0, r.jsxs)(c.DUT, {
    className: s()(N.gf, {
      [N.JI]: o
    }),
    onClick: () => p(t),
    onContextMenu: e => (0, d.L3)(e, async () => {
      let {
        default: e
      } = await n.e("22305").then(n.bind(n, 5752));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = P({}, n), l = l = {
          backgroundOption: t,
          optionIsInUse: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }),
    children: [o ? (0, r.jsx)("div", {
      className: N.SH
    }) : null, (0, r.jsx)("div", {
      onFocus: L,
      onMouseEnter: L,
      className: N.kV,
      children: w
    }), x || E ? (0, r.jsx)("div", {
      className: N.uZ,
      children: (0, r.jsx)(c.udU, {
        size: "xxs",
        color: "currentColor"
      })
    }) : null, v && (0, r.jsx)(c.LpS, {
      text: I.intl.string(I.t.y2b7CA),
      className: N.$5
    })]
  })
}

function L() {
  return (0, r.jsxs)("div", {
    className: N.j1,
    children: [(0, r.jsx)(c.tvc, {
      size: "md",
      color: "currentColor",
      className: N.eo
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: I.intl.string(I.t["T+yRY3"])
    })]
  })
}

function M(e) {
  let {
    onClick: t,
    tooltipText: n,
    disabled: i = false
  } = e, l = (0, a.bG)([b.A], () => b.A.hasHotspot(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function s() {
    f.sF(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let d = l ? I.intl.string(I.t["5TUJOv"]) : n;
  return (0, r.jsx)(o.m, {
    text: d,
    children: (0, r.jsxs)("div", {
      className: N.$g,
      children: [(0, r.jsxs)(R, {
        className: N.__invalid_backgroundOptionBlurred,
        disabled: i,
        icon: c.XGR,
        onClick: t,
        onMouseLeave: s,
        onBlur: s,
        text: (0, r.jsxs)("div", {
          className: N.Us,
          children: [(0, r.jsx)(c.tvc, {
            size: "md",
            color: "currentColor",
            className: N.PK
          }), (0, r.jsx)("div", {
            className: N.kr,
            children: I.intl.string(I.t["1t7U8W"])
          })]
        }),
        children: [(0, r.jsx)("div", {
          className: N.eD
        }), (0, r.jsx)("div", {
          className: N.G5
        })]
      }), l && (0, r.jsx)(c.LpS, {
        text: I.intl.string(I.t.y2b7CA),
        className: N.$5
      })]
    })
  })
}

function G(e) {
  let {
    onClick: t
  } = e, n = (0, u.p)(), {
    analyticsLocations: i
  } = (0, m.Ay)(_.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return (0, p.Ay)(() => {
    A.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
      type: S.e.VIDEO_BACKGROUNDS_INLINE,
      location: n.location,
      location_stack: i
    })
  }), (0, r.jsx)(M, {
    onClick: t,
    tooltipText: I.intl.string(I.t["IqE0T/"])
  })
}

function U(e) {
  let {
    onAddBackgroundImage: t,
    disabled: i
  } = e, l = (0, c.k34)(), s = i ? I.intl.formatToPlainString(I.t.ykGFeD, {
    maxCustomBackgrounds: 25
  }) : I.intl.string(I.t.Qx0tFc), a = [{
    name: I.intl.string(I.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }];
  return (0, r.jsx)(M, {
    disabled: i,
    onClick: function() {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
        return n => (0, r.jsx)(e, P({
          maxFileSizeBytes: y.G9,
          onComplete: e => {
            let {
              imageUri: n,
              file: r,
              isFromTenor: i
            } = e;
            return t(n, r, i)
          },
          uploadType: v.HL.VIDEO_BACKGROUND,
          filters: a,
          modalTitle: I.intl.string(I.t.yG2pUi),
          imageSpecifications: I.intl.string(I.t["72OaxN"]),
          uploadOptionTitle: I.intl.string(I.t.xsW8u6),
          showUpsellHeader: true
        }, n))
      }, {
        contextKey: l
      })
    },
    tooltipText: s
  })
}

function k(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: n,
    selectedOption: l,
    onSelectOption: a,
    onUpsellClick: d,
    onAddBackgroundImage: u,
    responsive: p = true
  } = e, g = i.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? x.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), f = g.length >= 25, {
    analyticsLocations: b
  } = (0, m.Ay)(_.A.VIDEO_BACKGROUND_OPTIONS), h = Object.values((0, C.A)()).sort((e, t) => y.sl[e.id] - y.sl[t.id]);
  return (0, r.jsx)(m.f5, {
    value: b,
    children: (0, r.jsxs)("div", {
      className: s()(N.to, !p && N.mK),
      children: [(0, r.jsx)(R, {
        selected: null == l,
        icon: c.KTN,
        onClick: () => a(null),
        text: I.intl.string(I.t.fUdMeO)
      }), (0, r.jsx)(R, {
        selected: "blur" === l,
        icon: c.fBX,
        onClick: () => a("blur"),
        text: I.intl.string(I.t.LhSyL8),
        children: (0, r.jsx)("div", {
          className: N.LJ
        })
      }), t ? (0, r.jsx)(U, {
        onAddBackgroundImage: u,
        disabled: f
      }) : (0, r.jsx)(G, {
        onClick: d
      }), g.map(e => {
        let t = (0, E.Bo)({
          userId: e.user_id,
          assetId: e.id,
          assetHash: e.asset,
          size: 720
        });
        return null == t ? null : (0, r.jsx)(o.m, {
          __unsupportedReactNodeAsText: (0, r.jsx)(L, {}),
          "aria-label": I.intl.string(I.t["T+yRY3"]),
          children: (0, r.jsx)(w, {
            option: e,
            source: t,
            selected: (0, O.d1)(l) && l.id === e.id,
            onSelectOption: a,
            isVideo: (0, E.q6)(e.asset),
            isAnimatedImage: (0, E.VI)(e.asset)
          }, e.id)
        }, e.id)
      }), h.map(e => {
        let t = true === e.isVideo;
        return (0, r.jsx)(o.m, {
          text: e.name,
          "aria-label": e.name,
          children: (0, r.jsx)(w, {
            option: e.id,
            source: e.source,
            selected: l === e.id,
            onSelectOption: a,
            isVideo: t,
            isAnimatedImage: false,
            hotspotLocation: e.hotspotLocation
          }, e.id)
        }, e.id)
      })]
    })
  })
}