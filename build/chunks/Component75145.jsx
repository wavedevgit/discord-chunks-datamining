/** Chunk was on web.js **/
/** chunk id: 75145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kn: () => m,
  ZP: () => E,
  fi: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788457 = require("./788457.js");
let h = .2,
  m = 41;

function g() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, a] = (0, Chunk243778.US)([Chunk704215.z.TRIAL_NUX_EMOJI_PICKER]),
    h = exports === Chunk704215.z.TRIAL_NUX_EMOJI_PICKER;
  return Chunk647438.useEffect(() => () => {
    h && Chunk120356(Chunk921944.L.TAKE_ACTION)
  }, [h, Chunk120356]), (0, Chunk951288.jsxs)("div", {
    className: Chunk788457.nitroTopDividerContainer,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk788457.nitroTopDividerUpper
    }), (0, Chunk951288.jsx)("div", {
      className: o()(Chunk788457.nitroTopDividerShadow, Chunk788457.glow, {
        [Chunk788457.reducedMotion]: module || !h
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk788457.nitroTopDividerLockContainer,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk788457.nitroTopDividerLockBorder
      }), !module && h && (0, Chunk951288.jsx)(Chunk481060.Fmz, {
        className: Chunk788457.premiumUnlockAnimation,
        loop: false,
        importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
      }), (0, Chunk951288.jsxs)("div", {
        className: o()(Chunk788457.premiumUnlockedWithNitroPillContainer, {
          [Chunk788457.reducedMotion]: module || !h
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "xs",
          color: "white"
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          lineClamp: 1,
          children: Chunk388032.intl.string(Chunk388032.t["BMw+7I"])
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk788457.nitroTopDividerLockBorderReversed
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk788457.reverseTrialTopDividerLower
    })]
  })
}
let E = function(e) {
  let {
    glowOpacity: t,
    className: n,
    colorOpacity: i = h,
    enableBrandRefresh: a = false
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(p.nitroTopDividerContainer, n),
    children: [(0, r.jsx)("div", {
      className: p.nitroTopDividerUpper
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 0 : t
      },
      className: p.nitroTopDividerShadow
    }), (0, r.jsxs)("div", {
      className: p.nitroTopDividerLockContainer,
      children: [(0, r.jsx)("div", {
        className: o()(p.nitroTopDividerLockBorder, {
          [p.brandRefresh]: a
        })
      }), (0, r.jsx)("div", {
        className: o()(p.nitroTopDividerLockCircle, {
          [p.brandRefresh]: a
        }),
        children: (0, r.jsx)(c.mBM, {
          size: "xs",
          color: "white"
        })
      }), (0, r.jsx)("div", {
        className: o()(p.nitroTopDividerLockBorderReversed, {
          [p.brandRefresh]: a
        })
      })]
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 1 : i
      },
      className: o()(p.nitroTopDividerLower, {
        [p.brandRefresh]: a
      })
    })]
  })
}