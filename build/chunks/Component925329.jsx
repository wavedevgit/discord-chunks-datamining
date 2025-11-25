/** Chunk was on web.js **/
/** chunk id: 925329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk829968 = require("./829968.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk973616 = require("./973616.js"),
  Chunk768581 = require("./768581.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520816 = require("./520816.js");
let g = {
  XXSMALL: Chunk520816.xxsmall,
  XSMALL: Chunk520816.xsmall,
  SMALL: Chunk520816.small,
  MEDIUM: Chunk520816.medium,
  MEDIUM_LARGE: Chunk520816.mediumLarge,
  LARGE: Chunk520816.large,
  XLARGE: Chunk520816.xlarge
};

function E(e) {
  switch (e) {
    case g.XXSMALL:
      return 16;
    case g.XSMALL:
      return 24;
    case g.SMALL:
      return 30;
    case g.MEDIUM:
      return 40;
    case g.MEDIUM_LARGE:
      return 48;
    case g.LARGE:
      return 60;
    default:
      return 80
  }
}

function b(e) {
  if (null == e) return null;
  switch (e) {
    case p.Si.GUILD:
      return n(632342);
    case p.Si.TIER_0:
      return n(467596);
    case p.Si.TIER_1:
      return n(670957);
    case p.Si.TIER_2:
    case p.Si.LEGACY:
      return n(480768);
    default:
      return null
  }
}

function y(e) {
  switch (e) {
    case g.XSMALL:
      return u.Z.Sizes.SMALLER;
    case g.SMALL:
      return u.Z.Sizes.SMALL;
    case g.LARGE:
      return u.Z.Sizes.LARGE;
    default:
    case g.MEDIUM:
      return u.Z.Sizes.MEDIUM
  }
}
let O = Chunk473749.forwardRef(function(e, t) {
  let n, {
      game: a,
      guild: p,
      skuId: O,
      pid: v,
      className: I,
      guildClassName: T,
      size: S = g.MEDIUM,
      allowUnknownGameIcon: A = true
    } = e,
    [C, N] = i.useState(null),
    [R, P] = i.useState(false),
    D = i.useCallback(e => {
      P(e)
    }, []),
    w = i.useRef(null);
  i.useEffect(() => {
    null != w.current && R && (cancelIdleCallback(w.current), w.current = null)
  }, [R]);
  let L = (0, s.O)(D);
  if (null != O && (n = b(O)), null != a && null == n && (a instanceof f.ZP ? n = a.getIconURL(E(S)) : null != a.icon && (n = _.ZP.getApplicationIconURL({
      id: a.id,
      icon: a.icon
    }))), n = (0, c.Z)(v, n), i.useEffect(() => {
      if (null == n || "" === n) return;
      if ((0, _.pU)(n) || (0, d.Vv)(n)) {
        console.log("JANK loaded src ".concat(n, " as data URI or isImageLoaded")), N(n);
        return
      }
      let e = () => (0, d.po)(n, (e, t) => {
        N(n)
      });
      if (R) return e();
      let t = requestIdleCallback(() => {
        w.current = null, e()
      });
      return w.current = t, () => {
        null != w.current && (cancelIdleCallback(w.current), w.current = null)
      }
    }, [n, R]), true === n && null != p) {
    let e = y(S);
    return (0, r.jsx)(u.Z, {
      className: o()(m.gameIcon, T, I),
      guild: p,
      size: e
    })
  }
  if (null == n || "" === n) return A ? (0, r.jsx)(l.IMN, {
    size: "md",
    color: "currentColor",
    className: o()(m.gameIcon, S, I)
  }) : null;
  let x = null == a ? true : a.name,
    M = null != x && "" !== x ? h.intl.formatToPlainString(h.t.tiKyYg, {
      applicationName: x
    }) : h.intl.string(h.t["2B/phM"]),
    k = (0, _.pU)(n),
    j = (0, d.Vv)(n),
    U = C === n || k || j;
  return (0, r.jsxs)(r.Fragment, {
    children: [U ? null : (0, r.jsx)("div", {
      className: o()(m.gameIconLoading, S, I)
    }), (0, r.jsx)("img", {
      ref: t,
      alt: M,
      src: n,
      className: o()(m.gameIcon, S, I),
      style: U ? true : {
        display: "none"
      }
    }), (0, r.jsx)("div", {
      className: m.intersectionContainer,
      children: (0, r.jsx)("div", {
        ref: L,
        className: m.intersectionRef
      })
    })]
  })
})