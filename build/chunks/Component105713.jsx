/** Chunk was on web.js **/
/** chunk id: 105713, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => w,
  Gq: () => R,
  WE: () => N,
  qn: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk824744 = require("./824744.js"),
  Chunk927578 = require("./927578.js"),
  Chunk704591 = require("./704591.js"),
  Chunk14400 = require("./14400.js"),
  Chunk277044 = require("./277044.jsx"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk331129 = require("./331129.js"),
  Chunk125049 = require("./125049.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function I(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, m.A)();
  return (0, r.jsxs)(u.DUT, {
    className: b.xJ,
    onClick: e => e.stopPropagation(),
    children: [(0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: y.intl.string(y.t["2JbvKw"])
    }), (0, r.jsx)(u.Apm, {
      onValueChange: t,
      className: b.aw,
      initialValue: (0, p.M)(e),
      maxValue: 100
    })]
  })
}

function C(e) {
  let {
    sound: t,
    forceShowBetaLabel: n = false
  } = e, i = (0, h.tj)({
    location: "SoundmojiBanner"
  }), a = (0, o.bG)([f.default], () => _.Ay.canUseSoundboardEverywhere(f.default.getCurrentUser())), s = (0, o.bG)([d.A], () => d.A.getGuildId());
  return n || a || t.guildId === E.mV || t.guildId === s || !i ? (0, r.jsx)(u.LpS, {
    text: "BETA",
    color: l.A.colors.BACKGROUND_BRAND.css,
    className: b.aZ
  }) : (0, r.jsxs)("div", {
    className: b.Mq,
    children: [(0, r.jsx)("div", {
      className: b.Nh
    }), (0, r.jsxs)("div", {
      className: b.Pc,
      children: [(0, r.jsx)(u.tvc, {
        size: "xxs",
        color: "white",
        className: b.aJ
      }), (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        className: b.sD,
        children: y.intl.string(y.t["BMw+7I"])
      }), (0, r.jsx)(u.LpS, {
        text: "BETA",
        color: l.A.colors.BACKGROUND_BRAND.css,
        className: b.KD
      })]
    })]
  })
}

function N(e) {
  let {
    sound: t
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(b.op, b.kX),
    children: [(0, r.jsx)(C, {
      sound: t
    }), (0, r.jsxs)("div", {
      className: b.Br,
      children: [(0, r.jsxs)("div", {
        className: b.tn,
        children: [(0, r.jsx)(u.JMI, {
          size: "sm",
          className: b.nR
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: b.tn,
        children: (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: y.intl.string(y.t.D6eYmf)
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
    children: s,
    setTooltipShowing: o,
    clickableClassName: l
  } = e, [d, f] = i.useState(false), [p, _] = i.useState(String(Date.now())), h = i.useCallback(e => {
    e.stopPropagation(), f(!d)
  }, [d]), m = i.useCallback(() => {
    _(String(Date.now()))
  }, []), g = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    d ? null == (e = g.current) || e.focus() : null == (t = g.current) || t.blur(), null == o || o(d)
  }, [d, o]);
  let E = !d;
  return (0, r.jsx)(u.YNO, {
    targetElementRef: g,
    renderPopout: e => (0, r.jsx)(u.DUT, {
      onClick: e => e.stopPropagation(),
      onMouseOver: e => e.stopPropagation(),
      children: t(S(A({}, e), {
        refreshPosition: m
      }))
    }),
    align: "center",
    nudgeAlignIntoViewport: true,
    position: n,
    shouldShow: d,
    onRequestClose: () => f(false),
    animationPosition: "bottom",
    positionKey: p,
    scrollBehavior: "close",
    children: e => (0, r.jsx)(c.m, {
      onTooltipHide: () => {
        E && (null == o || o(false))
      },
      onTooltipShow: () => {
        E && (null == o || o(true))
      },
      text: a,
      position: "top",
      shouldShow: E,
      children: (0, r.jsx)(u.DUT, S(A({}, e), {
        innerRef: g,
        "aria-label": a,
        onClick: h,
        className: l,
        children: s
      }))
    })
  })
}

function w(e) {
  let {
    sound: t,
    channel: n,
    setTooltipShowing: i
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(R, {
      setTooltipShowing: i,
      renderPopout: () => (0, r.jsx)(T, {}),
      tooltipText: y.intl.string(y.t["19lt24"]),
      position: "top",
      children: (0, r.jsx)(u.HKD, {
        size: "md",
        color: "currentColor",
        className: O.Wo
      })
    }), (0, r.jsx)(R, {
      setTooltipShowing: i,
      renderPopout: e => (0, r.jsx)(g.A, A({
        sound: t,
        channel: n
      }, e)),
      tooltipText: y.intl.string(y.t["KVbJU/"]),
      position: "right",
      children: (0, r.jsx)(u.mir, {
        size: "md",
        color: "currentColor",
        className: O.Wo
      })
    })]
  })
}