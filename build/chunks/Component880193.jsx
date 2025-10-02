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
  Chunk851016 = require("./851016.js"),
  Chunk657158 = require("./657158.js");

function _(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, g.N)(), _ = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [O, y] = p._T(n), [C, N] = p.mR(n), [E, I] = p.PK(n), [S, T] = p.d9(n, 1024), {
    imageCTA: P,
    imageAriaLabel: w,
    setFilename: R
  } = (0, f.Z)(_), Z = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, d.T4)(e, b.pKx.USD)
    }))) ? e : []
  }, [t]);

  function D(e, t) {
    null != t && R(t.name), T(e)
  }
  let A = (0, m.mY)(),
    L = (0, a.Dt)(),
    k = (0, a.Dt)(),
    G = (0, a.Dt)();
  return (0, r.jsxs)(h.Z, {
    title: x.intl.string(x.t.iHU439),
    intiallyExpanded: true,
    children: [(0, r.jsxs)("div", {
      className: v.formSplit,
      children: [(0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(s.hjN, {
          title: x.intl.string(x.t.grbGJy),
          titleId: L,
          disabled: A,
          children: (0, r.jsx)(s.oil, {
            placeholder: x.intl.string(x.t["So2/xM"]),
            value: O,
            onChange: y,
            "aria-labelledby": L,
            disabled: A
          })
        })
      }), (0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(s.hjN, {
          title: x.intl.string(x.t.Ibl4BQ),
          titleId: k,
          disabled: A,
          children: (0, r.jsx)(s.q4e, {
            options: Z,
            isDisabled: A || null == t,
            placeholder: x.intl.string(x.t["88XZDg"]),
            value: C,
            onChange: N,
            maxVisibleItems: 5,
            "aria-labelledby": k
          })
        })
      })]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(s.hjN, {
      title: x.intl.string(x.t["1w2WcX"]),
      titleId: G,
      disabled: A,
      children: (0, r.jsx)(s.Kx8, {
        placeholder: x.intl.string(x.t.p7Jr4O),
        value: E,
        autosize: true,
        onChange: I,
        "aria-labelledby": G,
        disabled: A
      })
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: v.iconSection,
      children: [(0, r.jsxs)(s.hjN, {
        title: x.intl.string(x.t.RUBM2t),
        className: v.iconSectionDescription,
        disabled: A,
        children: [(0, r.jsx)(s.R94, {
          type: s.R94.Types.DESCRIPTION,
          className: j.formDescription,
          disabled: A,
          children: x.intl.string(x.t["0iUofH"])
        }), (0, r.jsx)(o.Z, {
          onChange: D,
          "aria-label": w,
          disabled: A,
          text: P,
          size: "md",
          variant: "secondary"
        })]
      }), (0, r.jsx)(c.Z, {
        image: S,
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
}