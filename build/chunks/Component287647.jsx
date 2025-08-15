/** Chunk was on 30202 **/
/** chunk id: 287647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk230711 = require("./230711.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk693450 = require("./693450.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520005 = require("./520005.js"),
  Chunk374104 = require("./374104.js");
let T = new Chunk710845.Z("DisplayNameStylesCoachmark");

function N(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: f
  } = e, {
    analyticsLocations: N
  } = (0, g.ZP)(), I = (0, r.useRef)(null), y = (0, a.e7)([x.Z], () => x.Z.isFocused()), A = (0, r.useCallback)(() => {
    t(E.L.TAKE_ACTION), p.Z.open(j.oAB.PROFILE_CUSTOMIZATION, null, {
      analyticsLocations: N
    }), (0, _.I)({
      analyticsLocations: N
    })
  }, [t, N]), P = (0, r.useCallback)(() => {
    t(E.L.USER_DISMISS)
  }, [t]);
  return (0, r.useEffect)(() => {
    var e, t, n;
    y && (null == (e = I.current) ? true : e.paused) ? null == (t = I.current) || t.play().catch(T.error) : y || null == (n = I.current) || n.pause()
  }, [y]), (0, i.jsxs)(i.Fragment, {
    children: [f, (0, i.jsxs)(l.m, {
      targetElementRef: n,
      shouldShow: true,
      align: "right",
      position: "top",
      gradientColor: "nitro-pink",
      children: [(0, i.jsx)(u.u, {
        onClick: P
      }), (0, i.jsx)(c.V, {
        asset: (0, i.jsx)(h.Z, {
          src: S.Z,
          width: 160,
          height: 69,
          autoPlay: true,
          loop: true,
          muted: true,
          ref: I
        }),
        size: "md",
        className: v.asset
      }), (0, i.jsx)(b.Z, {
        className: v.betaTag
      }), (0, i.jsx)(m.Y, {
        title: O.intl.string(C.default["1AE46+"])
      }), (0, i.jsxs)(s.xv, {
        variant: "text-sm/normal",
        color: "text-secondary",
        className: v.subtitle,
        children: [O.intl.string(C.default.cNc1g4), (0, i.jsx)("br", {}), O.intl.string(O.t["4JNXHB"])]
      }), (0, i.jsx)(o.k, {
        actions: [{
          text: O.intl.string(O.t.uw9zIy),
          variant: "primary",
          onClick: A
        }]
      }), (0, i.jsx)(d.$, {
        caretConfig: {
          position: "bottom",
          align: "center"
        }
      })]
    })]
  })
}