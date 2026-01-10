/** Chunk was on 9536 **/
/** chunk id: 880193, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  Chunk527859 = require("./527859.js");

function O(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, m.N)(), O = (0, l.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [y, C] = b._T(n), [N, E] = b.mR(n), [I, S] = b.PK(n), [_, T] = b.d9(n, 1024), {
    imageCTA: P,
    imageAriaLabel: w,
    setFilename: Z
  } = (0, p.Z)(O), R = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, u.T4)(e, x.pKx.USD)
    }))) ? e : []
  }, [t]);

  function D(e, t) {
    null != t && Z(t.name), T(e)
  }
  let A = (0, f.mY)(),
    L = (0, o.Dt)(),
    k = (0, o.Dt)(),
    G = (0, o.Dt)();
  return (0, r.jsx)(h.Z, {
    title: j.intl.string(j.t["iHU43+"]),
    intiallyExpanded: true,
    children: (0, r.jsxs)(s.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)("div", {
        className: v.formSplit,
        children: [(0, r.jsx)("div", {
          className: v.formSplitHalf,
          children: (0, r.jsx)(s.oil, {
            label: j.intl.string(j.t["grbGJ+"]),
            placeholder: j.intl.string(j.t["So2/xP"]),
            value: y,
            onChange: C,
            "aria-labelledby": L,
            disabled: A
          })
        }), (0, r.jsx)("div", {
          className: v.formSplitHalf,
          children: (0, r.jsx)(a.y6, {
            label: j.intl.string(j.t.Ibl4BR),
            options: R,
            isDisabled: A || null == t,
            placeholder: j.intl.string(j.t["88XZDs"]),
            value: N,
            onChange: E,
            maxVisibleItems: 5,
            "aria-labelledby": k
          })
        })]
      }), (0, r.jsx)(s.Kx8, {
        label: j.intl.string(j.t["1w2WcX"]),
        placeholder: j.intl.string(j.t.p7Jr4K),
        value: I,
        autosize: true,
        onChange: S,
        "aria-labelledby": G,
        disabled: A
      }), (0, r.jsxs)("div", {
        className: v.iconSection,
        children: [(0, r.jsx)(s.gNt, {
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
        }), (0, r.jsx)(d.Z, {
          image: _,
          hint: P,
          showIcon: true,
          showRemoveButton: false,
          hideSize: true,
          className: v.iconUploader,
          imageClassName: v.tierSymbolUploaderInner,
          onChange: D,
          "aria-label": w,
          disabled: A
        })]
      })]
    })
  })
}