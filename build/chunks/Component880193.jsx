/** Chunk was on 384 **/
/** chunk id: 880193, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk345861 = require("./345861.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk937615 = require("./937615.js"),
  Chunk289393 = require("./289393.js"),
  Chunk723047 = require("./723047.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk290348 = require("./290348.js"),
  Chunk927954 = require("./927954.js"),
  Chunk783454 = require("./783454.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810792 = require("./810792.js");

function v(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, p.N)(), v = (0, l.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [O, C] = f._T(n), [y, N] = f.mR(n), [E, I] = f.PK(n), [S, T] = f.d9(n, 1024), {
    imageCTA: P,
    imageAriaLabel: w,
    setFilename: Z
  } = (0, h.Z)(v), R = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, d.T4)(e, b.pKx.USD)
    }))) ? e : []
  }, [t]);

  function D(e, t) {
    null != t && Z(t.name), T(e)
  }
  let A = (0, m.mY)(),
    L = (0, o.Dt)(),
    k = (0, o.Dt)(),
    G = (0, o.Dt)();
  return (0, r.jsx)(x.Z, {
    title: j.intl.string(j.t["iHU43+"]),
    intiallyExpanded: true,
    children: (0, r.jsxs)(a.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)("div", {
        className: _.formSplit,
        children: [(0, r.jsx)("div", {
          className: _.formSplitHalf,
          children: (0, r.jsx)(a.oil, {
            label: j.intl.string(j.t["grbGJ+"]),
            placeholder: j.intl.string(j.t["So2/xP"]),
            value: O,
            onChange: C,
            "aria-labelledby": L,
            disabled: A
          })
        }), (0, r.jsx)("div", {
          className: _.formSplitHalf,
          children: (0, r.jsx)(s.y6, {
            label: j.intl.string(j.t.Ibl4BR),
            options: R,
            isDisabled: A || null == t,
            placeholder: j.intl.string(j.t["88XZDs"]),
            value: y,
            onChange: N,
            maxVisibleItems: 5,
            "aria-labelledby": k
          })
        })]
      }), (0, r.jsx)(a.Kx8, {
        label: j.intl.string(j.t["1w2WcX"]),
        placeholder: j.intl.string(j.t.p7Jr4K),
        value: E,
        autosize: true,
        onChange: I,
        "aria-labelledby": G,
        disabled: A
      }), (0, r.jsxs)("div", {
        className: _.iconSection,
        children: [(0, r.jsx)(a.gNt, {
          label: j.intl.string(j.t.RUBM2q),
          description: j.intl.string(j.t["0iUofN"]),
          children: (0, r.jsx)(c.Z, {
            onChange: D,
            "aria-label": w,
            disabled: A,
            text: P,
            size: "md",
            variant: "secondary"
          })
        }), (0, r.jsx)(u.Z, {
          image: S,
          hint: P,
          showIcon: true,
          showRemoveButton: false,
          hideSize: true,
          className: _.iconUploader,
          imageClassName: _.tierSymbolUploaderInner,
          onChange: D,
          "aria-label": w,
          disabled: A
        })]
      })]
    })
  })
}