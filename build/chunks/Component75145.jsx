/** Chunk was on web.js **/
/** chunk id: 75145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kn: () => g,
  ZP: () => b,
  fi: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk788457 = require("./788457.js");
let m = .2,
  g = 41;

function E() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, a] = (0, Chunk243778.US)([Chunk704215.z.TRIAL_NUX_EMOJI_PICKER]),
    u = exports === Chunk704215.z.TRIAL_NUX_EMOJI_PICKER;
  return Chunk473749.useEffect(() => () => {
    Chunk410030 && Chunk120356(Chunk921944.L.TAKE_ACTION)
  }, [Chunk410030, Chunk120356]), (0, Chunk54381.jsxs)("div", {
    className: Chunk788457.nitroTopDividerContainer,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk788457.nitroTopDividerUpper
    }), (0, Chunk54381.jsx)("div", {
      className: o()(Chunk788457.nitroTopDividerShadow, Chunk788457.glow, {
        [Chunk788457.reducedMotion]: module || !Chunk410030
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk788457.nitroTopDividerLockContainer,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk788457.nitroTopDividerLockBorder
      }), !module && Chunk410030 && (0, Chunk54381.jsx)(Chunk481060.Fmz, {
        className: Chunk788457.premiumUnlockAnimation,
        loop: false,
        importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
      }), (0, Chunk54381.jsxs)("div", {
        className: o()(Chunk788457.premiumUnlockedWithNitroPillContainer, {
          [Chunk788457.reducedMotion]: module || !Chunk410030
        }),
        children: [(0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "xs",
          color: "white"
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          lineClamp: 1,
          children: Chunk388032.intl.string(Chunk388032.t["BMw+7I"])
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk788457.nitroTopDividerLockBorderReversed
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk788457.reverseTrialTopDividerLower
    })]
  })
}
let b = function(e) {
  let {
    glowOpacity: t,
    className: n,
    colorOpacity: i = m,
    enableBrandRefresh: a = false
  } = e, s = (0, u.ZP)(), l = (0, c.apv)(s);
  return (0, r.jsxs)("div", {
    className: o()(h.nitroTopDividerContainer, n),
    children: [(0, r.jsx)("div", {
      className: h.nitroTopDividerUpper
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 0 : t
      },
      className: h.nitroTopDividerShadow
    }), (0, r.jsxs)("div", {
      className: h.nitroTopDividerLockContainer,
      children: [(0, r.jsx)("div", {
        className: o()(h.nitroTopDividerLockBorder, {
          [h.brandRefresh]: a
        })
      }), (0, r.jsx)("div", {
        className: o()(h.nitroTopDividerLockCircle, {
          [h.brandRefresh]: a
        }),
        children: (0, r.jsx)(c.mBM, {
          size: "xs",
          color: a && l ? "black" : "white"
        })
      }), (0, r.jsx)("div", {
        className: o()(h.nitroTopDividerLockBorderReversed, {
          [h.brandRefresh]: a
        })
      })]
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 1 : i
      },
      className: o()(h.nitroTopDividerLower, {
        [h.brandRefresh]: a
      })
    })]
  })
}