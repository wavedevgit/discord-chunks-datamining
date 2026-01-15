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
  Chunk774325 = require("./774325.js");
let m = .2,
  g = 41;

function E() {
  let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
    [t, a] = (0, f.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
    u = t === l.z.TRIAL_NUX_EMOJI_PICKER;
  return i.useEffect(() => () => {
    u && a(p.L.TAKE_ACTION)
  }, [u, a]), (0, r.jsxs)("div", {
    className: h.nitroTopDividerContainer,
    children: [(0, r.jsx)("div", {
      className: h.nitroTopDividerUpper
    }), (0, r.jsx)("div", {
      className: o()(h.nitroTopDividerShadow, h.glow, {
        [h.reducedMotion]: e || !u
      })
    }), (0, r.jsxs)("div", {
      className: h.nitroTopDividerLockContainer,
      children: [(0, r.jsx)("div", {
        className: h.nitroTopDividerLockBorder
      }), !e && u && (0, r.jsx)(c.Fmz, {
        className: h.premiumUnlockAnimation,
        loop: false,
        importData: () => n.e("21812").then(n.t.bind(n, 741855, 19))
      }), (0, r.jsxs)("div", {
        className: o()(h.premiumUnlockedWithNitroPillContainer, {
          [h.reducedMotion]: e || !u
        }),
        children: [(0, r.jsx)(c.SrA, {
          size: "xs",
          color: "white"
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          lineClamp: 1,
          children: _.intl.string(_.t["BMw+7I"])
        })]
      }), (0, r.jsx)("div", {
        className: h.nitroTopDividerLockBorderReversed
      })]
    }), (0, r.jsx)("div", {
      className: h.reverseTrialTopDividerLower
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