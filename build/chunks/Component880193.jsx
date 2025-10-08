/** Chunk was on 29679 **/
/** chunk id: 880193, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk657158 = require("./657158.js");

function _(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, m.N)(), _ = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [v, C] = p._T(n), [O, y] = p.mR(n), [N, E] = p.PK(n), [I, S] = p.d9(n, 1024), {
    imageCTA: T,
    imageAriaLabel: P,
    setFilename: w
  } = (0, f.Z)(_), Z = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, d.T4)(e, x.pKx.USD)
    }))) ? e : []
  }, [t]);

  function R(e, t) {
    null != t && w(t.name), S(e)
  }
  let D = (0, g.mY)(),
    A = (0, a.Dt)(),
    L = (0, a.Dt)(),
    k = (0, a.Dt)();
  return (0, r.jsx)(h.Z, {
    title: b.intl.string(b.t.iHU439),
    intiallyExpanded: true,
    children: (0, r.jsxs)(s.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)("div", {
        className: j.formSplit,
        children: [(0, r.jsx)("div", {
          className: j.formSplitHalf,
          children: (0, r.jsx)(s.oil, {
            label: b.intl.string(b.t.grbGJy),
            placeholder: b.intl.string(b.t["So2/xM"]),
            value: v,
            onChange: C,
            "aria-labelledby": A,
            disabled: D
          })
        }), (0, r.jsx)("div", {
          className: j.formSplitHalf,
          children: (0, r.jsx)(s.q4e, {
            label: b.intl.string(b.t.Ibl4BQ),
            options: Z,
            isDisabled: D || null == t,
            placeholder: b.intl.string(b.t["88XZDg"]),
            value: O,
            onChange: y,
            maxVisibleItems: 5,
            "aria-labelledby": L
          })
        })]
      }), (0, r.jsx)(s.Kx8, {
        label: b.intl.string(b.t["1w2WcX"]),
        placeholder: b.intl.string(b.t.p7Jr4O),
        value: N,
        autosize: true,
        onChange: E,
        "aria-labelledby": k,
        disabled: D
      }), (0, r.jsxs)("div", {
        className: j.iconSection,
        children: [(0, r.jsx)(s.gNt, {
          label: b.intl.string(b.t.RUBM2t),
          description: b.intl.string(b.t["0iUofH"]),
          children: (0, r.jsx)(o.Z, {
            onChange: R,
            "aria-label": P,
            disabled: D,
            text: T,
            size: "md",
            variant: "secondary"
          })
        }), (0, r.jsx)(c.Z, {
          image: I,
          hint: T,
          showIcon: true,
          showRemoveButton: false,
          hideSize: true,
          className: j.iconUploader,
          imageClassName: j.tierSymbolUploaderInner,
          onChange: R,
          "aria-label": P,
          disabled: D
        })]
      })]
    })
  })
}