/** Chunk was on web.js **/
/** chunk id: 144830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => W
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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 25,
  M = 720;

function k() {
  return [{
    name: R.intl.string(R.t["Sp2NF+"]),
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }]
}

function U(e) {
  let {
    icon: t,
    onClick: n,
    text: i,
    children: a,
    className: o,
    selected: l = false,
    disabled: u = false,
    onMouseLeave: d,
    onBlur: f
  } = e;
  return (0, r.jsxs)(c.DUT, {
    className: s()(o, w.gf, {
      [w.JI]: l,
      [w.A7]: u
    }),
    onMouseLeave: d,
    onBlur: f,
    onClick: u ? true : n,
    children: [l ? (0, r.jsx)("div", {
      className: w.SH
    }) : null, (0, r.jsxs)("div", {
      className: w.kV,
      children: [a, (0, r.jsxs)("div", {
        className: w.fP,
        children: [(0, r.jsx)(t, {
          className: w.ob,
          color: "currentColor",
          size: "custom",
          width: 18,
          height: 18
        }), (0, r.jsx)(c.Text, {
          className: w.V7,
          color: "none",
          variant: "text-sm/normal",
          children: i
        })]
      })]
    })]
  })
}

function G(e) {
  let {
    option: t,
    source: n,
    isAnimated: a
  } = e, [s, o] = i.useState(false);
  if (i.useEffect(() => {
      new Image().src = n
    }, [n]), !a || null == t) return (0, r.jsx)("div", {
    className: w.PQ,
    style: {
      backgroundImage: "url(".concat(n, ")")
    }
  });
  let l = (0, y.Bo)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: M,
    canAnimate: false
  });
  return (0, r.jsx)("img", {
    onMouseMove: () => o(true),
    onMouseLeave: () => o(false),
    className: w.PQ,
    src: s ? n : l,
    alt: t.id
  })
}

function V(e) {
  let {
    option: t,
    source: a,
    selected: l = false,
    onSelectOption: f,
    isAnimatedImage: y,
    isVideo: O,
    hotspotLocation: v
  } = e, S = (0, d.p)(), {
    analyticsLocations: T
  } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_IMAGE_OPTION), C = (0, o.bG)([g.A], () => null != v && g.A.hasHotspot(v)), P = i.useCallback(e => {
    if (!(0, E.u)(e)) throw e
  }, []), x = O ? (0, r.jsx)(h.A, {
    className: w.PQ,
    src: a,
    loop: true,
    playOnHover: true,
    muted: true,
    onPlayError: P
  }) : (0, r.jsx)(G, {
    isAnimated: y,
    option: (0, A.d1)(t) ? t : true,
    source: a
  });

  function j() {
    null != v && C && (m.sF(v), b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
      type: N.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: S.location,
      location_stack: T
    }))
  }
  return (0, r.jsxs)(c.DUT, {
    className: s()(w.gf, {
      [w.JI]: l
    }),
    onClick: () => f(t),
    onContextMenu: e => (0, u.L3)(e, async () => {
      let {
        default: e
      } = await n.e("22305").then(n.bind(n, 5752));
      return n => (0, r.jsx)(e, L(D({}, n), {
        backgroundOption: t,
        optionIsInUse: l
      }))
    }),
    children: [l ? (0, r.jsx)("div", {
      className: w.SH
    }) : null, (0, r.jsx)("div", {
      onFocus: j,
      onMouseEnter: j,
      className: w.kV,
      children: x
    }), O || y ? (0, r.jsx)("div", {
      className: w.uZ,
      children: (0, r.jsx)(c.udU, {
        size: "xxs",
        color: "currentColor"
      })
    }) : null, C && (0, r.jsx)(c.LpS, {
      text: R.intl.string(R.t.y2b7CA),
      className: w.$5
    })]
  })
}

function F() {
  return (0, r.jsxs)("div", {
    className: w.j1,
    children: [(0, r.jsx)(c.tvc, {
      size: "md",
      color: "currentColor",
      className: w.eo
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: R.intl.string(R.t["T+yRY3"])
    })]
  })
}

function B(e) {
  let {
    onClick: t,
    tooltipText: n,
    disabled: i = false
  } = e, a = (0, o.bG)([g.A], () => g.A.hasHotspot(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function s() {
    m.sF(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let u = a ? R.intl.string(R.t["5TUJOv"]) : n;
  return (0, r.jsx)(l.m, {
    text: u,
    children: (0, r.jsxs)("div", {
      className: w.$g,
      children: [(0, r.jsxs)(U, {
        className: w.__invalid_backgroundOptionBlurred,
        disabled: i,
        icon: c.XGR,
        onClick: t,
        onMouseLeave: s,
        onBlur: s,
        text: (0, r.jsxs)("div", {
          className: w.Us,
          children: [(0, r.jsx)(c.tvc, {
            size: "md",
            color: "currentColor",
            className: w.PK
          }), (0, r.jsx)("div", {
            className: w.kr,
            children: R.intl.string(R.t["1t7U8W"])
          })]
        }),
        children: [(0, r.jsx)("div", {
          className: w.eD
        }), (0, r.jsx)("div", {
          className: w.G5
        })]
      }), a && (0, r.jsx)(c.LpS, {
        text: R.intl.string(R.t.y2b7CA),
        className: w.$5
      })]
    })
  })
}

function H(e) {
  let {
    onClick: t
  } = e, n = (0, d.p)(), {
    analyticsLocations: i
  } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return (0, f.Ay)(() => {
    b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
      type: N.e.VIDEO_BACKGROUNDS_INLINE,
      location: n.location,
      location_stack: i
    })
  }), (0, r.jsx)(B, {
    onClick: t,
    tooltipText: R.intl.string(R.t["IqE0T/"])
  })
}

function Y(e) {
  let {
    onAddBackgroundImage: t,
    disabled: i
  } = e, a = (0, c.k34)(), s = i ? R.intl.formatToPlainString(R.t.ykGFeD, {
    maxCustomBackgrounds: j
  }) : R.intl.string(R.t.Qx0tFc), o = k();

  function l() {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(n.bind(n, 551028));
      return n => (0, r.jsx)(e, D({
        maxFileSizeBytes: S.G9,
        onComplete: e => {
          let {
            imageUri: n,
            file: r,
            isFromTenor: i
          } = e;
          return t(n, r, i)
        },
        uploadType: C.HL.VIDEO_BACKGROUND,
        filters: o,
        modalTitle: R.intl.string(R.t.yG2pUi),
        imageSpecifications: R.intl.string(R.t["72OaxN"]),
        uploadOptionTitle: R.intl.string(R.t.xsW8u6),
        showUpsellHeader: true
      }, n))
    }, {
      contextKey: a
    })
  }
  return (0, r.jsx)(B, {
    disabled: i,
    onClick: l,
    tooltipText: s
  })
}

function W(e) {
  let {
    canUseCustomBackgrounds: t,
    customBackgroundOptions: n,
    selectedOption: a,
    onSelectOption: o,
    onUpsellClick: u,
    onAddBackgroundImage: d,
    responsive: f = true
  } = e, h = i.useMemo(() => n.sort((e, t) => null == e.last_used || null == t.last_used ? O.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [n]), m = h.length >= j, {
    analyticsLocations: g
  } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_OPTIONS), E = Object.values((0, v.A)()).sort((e, t) => S.sl[e.id] - S.sl[t.id]);
  return (0, r.jsx)(_.f5, {
    value: g,
    children: (0, r.jsxs)("div", {
      className: s()(w.to, !f && w.mK),
      children: [(0, r.jsx)(U, {
        selected: null == a,
        icon: c.KTN,
        onClick: () => o(null),
        text: R.intl.string(R.t.fUdMeO)
      }), (0, r.jsx)(U, {
        selected: "blur" === a,
        icon: c.fBX,
        onClick: () => o("blur"),
        text: R.intl.string(R.t.LhSyL8),
        children: (0, r.jsx)("div", {
          className: w.LJ
        })
      }), t ? (0, r.jsx)(Y, {
        onAddBackgroundImage: d,
        disabled: m
      }) : (0, r.jsx)(H, {
        onClick: u
      }), h.map(e => {
        let t = (0, y.Bo)({
          userId: e.user_id,
          assetId: e.id,
          assetHash: e.asset,
          size: M
        });
        return null == t ? null : (0, r.jsx)(l.m, {
          __unsupportedReactNodeAsText: (0, r.jsx)(F, {}),
          "aria-label": R.intl.string(R.t["T+yRY3"]),
          children: (0, r.jsx)(V, {
            option: e,
            source: t,
            selected: (0, A.d1)(a) && a.id === e.id,
            onSelectOption: o,
            isVideo: (0, y.q6)(e.asset),
            isAnimatedImage: (0, y.VI)(e.asset)
          }, e.id)
        }, e.id)
      }), E.map(e => {
        let t = true === e.isVideo;
        return (0, r.jsx)(l.m, {
          text: e.name,
          "aria-label": e.name,
          children: (0, r.jsx)(V, {
            option: e.id,
            source: e.source,
            selected: a === e.id,
            onSelectOption: o,
            isVideo: t,
            isAnimatedImage: false,
            hotspotLocation: e.hotspotLocation
          }, e.id)
        }, e.id)
      })]
    })
  })
}