/** Chunk was on web.js **/
/** chunk id: 409700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dp: () => N,
  Hh: () => R,
  ZP: () => P,
  hq: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk36703 = require("./36703.js"),
  Chunk74538 = require("./74538.js"),
  Chunk125900 = require("./125900.js"),
  Chunk824690 = require("./824690.js"),
  Chunk240479 = require("./240479.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk937309 = require("./937309.js"),
  Chunk463063 = require("./463063.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, Chunk824690.Z)();
  return (0, Chunk951288.jsxs)(Chunk481060.P3F, {
    className: Chunk937309.sliderContainer,
    onClick: e => e.stopPropagation(),
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["2JbvKw"])
    }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
      onValueChange: exports,
      className: Chunk937309.slider,
      initialValue: (0, Chunk36703.P)(module),
      maxValue: 100
    })]
  })
}

function C(e) {
  let {
    sound: t,
    forceShowBetaLabel: n = false
  } = e, i = (0, h.V2)({
    location: "SoundmojiBanner"
  }), a = (0, l.e7)([f.default], () => p.ZP.canUseSoundboardEverywhere(f.default.getCurrentUser())), o = (0, l.e7)([d.Z], () => d.Z.getGuildId());
  return n || a || t.guildId === E.X8 || t.guildId === o || !i ? (0, r.jsx)(u.IGR, {
    text: "BETA",
    color: s.Z.BG_BRAND,
    className: y.betaBadge
  }) : (0, r.jsxs)("div", {
    className: y.infoNitroContainer,
    children: [(0, r.jsx)("div", {
      className: y.infoNitroBackground
    }), (0, r.jsxs)("div", {
      className: y.infoNitroTextContainer,
      children: [(0, r.jsx)(u.SrA, {
        size: "xxs",
        color: "white",
        className: y.infoNitroIcon
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        className: y.infoNitroText,
        children: b.intl.string(b.t["BMw+7I"])
      }), (0, r.jsx)(u.IGR, {
        text: "BETA",
        color: s.Z.BG_BRAND,
        className: y.infoNitroBadge
      })]
    })]
  })
}

function N(e) {
  let {
    sound: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(y.infoContainer, y.infoTooltip),
    children: [(0, r.jsx)(C, {
      sound: t
    }), (0, r.jsxs)("div", {
      className: y.infoSoundContainer,
      children: [(0, r.jsxs)("div", {
        className: y.infoSoundInnerContainer,
        children: [(0, r.jsx)(u.KY1, {
          size: "sm",
          className: y.infoSoundIcon
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: y.infoSoundInnerContainer,
        children: (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: b.intl.string(b.t.D6eYmf)
        })
      })]
    })]
  })
}

function R(e) {
  let {
    renderPopout: t,
    position: n,
    tooltipText: a,
    children: o,
    setTooltipShowing: s,
    clickableClassName: l
  } = e, [d, f] = i.useState(false), [_, p] = i.useState(String(Date.now())), h = i.useCallback(e => {
    e.stopPropagation(), f(!d)
  }, [d]), m = i.useCallback(() => {
    p(String(Date.now()))
  }, []), g = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    d ? null == (e = g.current) || e.focus() : null == (t = g.current) || t.blur(), null == s || s(d)
  }, [d, s]);
  let E = !d;
  return (0, r.jsx)(u.yRy, {
    targetElementRef: g,
    renderPopout: e => (0, r.jsx)(u.P3F, {
      onClick: e => e.stopPropagation(),
      onMouseOver: e => e.stopPropagation(),
      children: t(S(I({}, e), {
        refreshPosition: m
      }))
    }),
    align: "center",
    nudgeAlignIntoViewport: true,
    position: n,
    shouldShow: d,
    onRequestClose: () => f(false),
    animationPosition: "bottom",
    positionKey: _,
    scrollBehavior: "close",
    children: e => (0, r.jsxs)(c.u, {
      onTooltipHide: () => {
        E && (null == s || s(false))
      },
      onTooltipShow: () => {
        E && (null == s || s(true))
      },
      text: a,
      position: "top",
      shouldShow: E,
      children: ["(", (0, r.jsx)(u.P3F, S(I({}, e), {
        innerRef: g,
        "aria-label": a,
        onClick: h,
        className: l,
        children: o
      }))]
    })
  })
}

function P(e) {
  let {
    sound: t,
    channel: n,
    setTooltipShowing: i
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(R, {
      setTooltipShowing: i,
      renderPopout: () => (0, r.jsx)(A, {}),
      tooltipText: b.intl.string(b.t["19lt24"]),
      position: "top",
      children: (0, r.jsx)(u.gj8, {
        size: "md",
        color: "currentColor",
        className: O.secondaryIcon
      })
    }), (0, r.jsx)(R, {
      setTooltipShowing: i,
      renderPopout: e => (0, r.jsx)(g.Z, I({
        sound: t,
        channel: n
      }, e)),
      tooltipText: b.intl.string(b.t["KVbJU/"]),
      position: "right",
      children: (0, r.jsx)(u.d3s, {
        size: "md",
        color: "currentColor",
        className: O.secondaryIcon
      })
    })]
  })
}