/** Chunk was on 20501 **/
/** chunk id: 287647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk230711 = require("./230711.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk829716 = require("./829716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546205 = require("./546205.js"),
  Chunk374104 = require("./374104.js");

function O(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: O
  } = e, {
    analyticsLocations: v
  } = (0, p.ZP)(), S = (0, r.useCallback)(() => {
    t(x.L.TAKE_ACTION), m.Z.open(b.oAB.PROFILE_CUSTOMIZATION, null, {
      analyticsLocations: v
    }), (0, f.I)({
      analyticsLocations: v
    })
  }, [t, v]), T = (0, r.useCallback)(() => {
    t(x.L.USER_DISMISS)
  }, [t]);
  return (0, i.jsxs)(i.Fragment, {
    children: [O, (0, i.jsxs)(a.m, {
      targetElementRef: n,
      shouldShow: true,
      align: "right",
      position: "top",
      gradientColor: "nitro-pink",
      children: [(0, i.jsx)(d.u, {
        onClick: T
      }), (0, i.jsx)(o.V, {
        asset: (0, i.jsx)(g.Z, {
          src: C.Z,
          width: 160,
          height: 90,
          autoPlay: true,
          loop: true,
          muted: true
        }),
        size: "md",
        className: E.asset
      }), (0, i.jsx)(h.Z, {
        className: E.betaTag
      }), (0, i.jsx)(u.Y, {
        title: j.intl.string(_.default["1AE46+"])
      }), (0, i.jsxs)(s.xv, {
        variant: "text-sm/normal",
        color: "text-secondary",
        className: E.subtitle,
        children: [j.intl.string(_.default.cNc1g4), (0, i.jsx)("br", {}), j.intl.string(j.t["4JNXHB"])]
      }), (0, i.jsx)(l.k, {
        actions: [{
          text: j.intl.string(j.t.uw9zIy),
          variant: "primary",
          onClick: S
        }]
      }), (0, i.jsx)(c.$, {
        caretConfig: {
          position: "bottom",
          align: "center"
        }
      })]
    })]
  })
}