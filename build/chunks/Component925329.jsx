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
  Chunk811578 = require("./811578.js");
let g = {
  XXSMALL: Chunk811578.xxsmall,
  XSMALL: Chunk811578.xsmall,
  SMALL: Chunk811578.small,
  MEDIUM: Chunk811578.medium,
  MEDIUM_LARGE: Chunk811578.mediumLarge,
  LARGE: Chunk811578.large,
  XLARGE: Chunk811578.xlarge
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
    case _.Si.GUILD:
      return n(632342);
    case _.Si.TIER_0:
      return n(467596);
    case _.Si.TIER_1:
      return n(670957);
    case _.Si.TIER_2:
    case _.Si.LEGACY:
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
      guild: _,
      skuId: O,
      pid: v,
      className: S,
      guildClassName: I,
      size: T = g.MEDIUM,
      allowUnknownGameIcon: C = true
    } = e,
    [A, N] = i.useState(null),
    [P, w] = i.useState(false),
    R = i.useCallback(e => {
      w(e)
    }, []),
    D = i.useRef(null);
  i.useEffect(() => {
    null != D.current && P && (cancelIdleCallback(D.current), D.current = null)
  }, [P]);
  let x = (0, s.O)(R);
  if (null != O && (n = b(O)), null != a && null == n && (a instanceof f.ZP ? n = a.getIconURL(E(T)) : null != a.icon && (n = p.ZP.getApplicationIconURL({
      id: a.id,
      icon: a.icon
    }))), n = (0, c.Z)(v, n), i.useEffect(() => {
      if (null == n || "" === n) return;
      if ((0, p.pU)(n) || (0, d.Vv)(n)) {
        console.log("JANK loaded src ".concat(n, " as data URI or isImageLoaded")), N(n);
        return
      }
      let e = () => (0, d.po)(n, (e, t) => {
        N(n)
      });
      if (P) return e();
      let t = requestIdleCallback(() => {
        D.current = null, e()
      });
      return D.current = t, () => {
        null != D.current && (cancelIdleCallback(D.current), D.current = null)
      }
    }, [n, P]), true === n && null != _) {
    let e = y(T);
    return (0, r.jsx)(u.Z, {
      className: o()(m.gameIcon, I, S),
      guild: _,
      size: e
    })
  }
  if (null == n || "" === n) return C ? (0, r.jsx)(l.IMN, {
    size: "md",
    color: "currentColor",
    className: o()(m.gameIcon, T, S)
  }) : null;
  let L = null == a ? true : a.name,
    j = null != L && "" !== L ? h.intl.formatToPlainString(h.t.tiKyYg, {
      applicationName: L
    }) : h.intl.string(h.t["2B/phM"]),
    M = (0, p.pU)(n),
    k = (0, d.Vv)(n),
    U = A === n || M || k;
  return (0, r.jsxs)(r.Fragment, {
    children: [U ? null : (0, r.jsx)("div", {
      className: o()(m.gameIconLoading, T, S)
    }), (0, r.jsx)("img", {
      ref: t,
      alt: j,
      src: n,
      className: o()(m.gameIcon, T, S),
      style: U ? true : {
        display: "none"
      }
    }), (0, r.jsx)("div", {
      className: m.intersectionContainer,
      children: (0, r.jsx)("div", {
        ref: x,
        className: m.intersectionRef
      })
    })]
  })
})