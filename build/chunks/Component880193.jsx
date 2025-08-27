/** Chunk was on 88479 **/
/** chunk id: 880193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk605041 = require("./605041.js"),
  Chunk810792 = require("./810792.js");

function O(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, p.N)(), O = (0, l.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [y, C] = h._T(n), [N, E] = h.mR(n), [I, S] = h.PK(n), [T, P] = h.d9(n, 1024), {
    imageCTA: w,
    imageAriaLabel: R,
    setFilename: Z
  } = (0, f.Z)(O), D = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, u.T4)(e, x.pKx.USD)
    }))) ? e : []
  }, [t]);

  function A(e, t) {
    null != t && Z(t.name), P(e)
  }
  let L = (0, g.mY)(),
    k = (0, o.Dt)(),
    M = (0, o.Dt)(),
    G = (0, o.Dt)();
  return (0, r.jsxs)(b.Z, {
    title: j.intl.string(j.t.iHU439),
    intiallyExpanded: true,
    children: [(0, r.jsxs)("div", {
      className: v.formSplit,
      children: [(0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(s.hjN, {
          title: j.intl.string(j.t.grbGJy),
          titleId: k,
          disabled: L,
          children: (0, r.jsx)(a.Is, {
            placeholder: j.intl.string(j.t["So2/xM"]),
            value: y,
            onChange: C,
            "aria-labelledby": k,
            disabled: L
          })
        })
      }), (0, r.jsx)("div", {
        className: v.formSplitHalf,
        children: (0, r.jsx)(s.hjN, {
          title: j.intl.string(j.t.Ibl4BQ),
          titleId: M,
          disabled: L,
          children: (0, r.jsx)(s.q4e, {
            options: D,
            isDisabled: L || null == t,
            placeholder: j.intl.string(j.t["88XZDg"]),
            value: N,
            onChange: E,
            maxVisibleItems: 5,
            "aria-labelledby": M
          })
        })
      })]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(s.hjN, {
      title: j.intl.string(j.t["1w2WcX"]),
      titleId: G,
      disabled: L,
      children: (0, r.jsx)(s.Kx8, {
        placeholder: j.intl.string(j.t.p7Jr4O),
        value: I,
        autosize: true,
        onChange: S,
        "aria-labelledby": G,
        disabled: L
      })
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: v.iconSection,
      children: [(0, r.jsxs)(s.hjN, {
        title: j.intl.string(j.t.RUBM2t),
        className: v.iconSectionDescription,
        disabled: L,
        children: [(0, r.jsx)(s.R94, {
          type: s.R94.Types.DESCRIPTION,
          className: _.formDescription,
          disabled: L,
          children: j.intl.string(j.t["0iUofH"])
        }), (0, r.jsx)(c.Z, {
          onChange: A,
          buttonCTA: w,
          "aria-label": R,
          disabled: L,
          look: a.zx.Looks.OUTLINED,
          color: a.zx.Colors.PRIMARY
        })]
      }), (0, r.jsx)(d.Z, {
        image: T,
        hint: w,
        showIcon: true,
        showRemoveButton: false,
        hideSize: true,
        className: v.iconUploader,
        imageClassName: v.tierSymbolUploaderInner,
        onChange: A,
        "aria-label": R,
        disabled: L
      })]
    })]
  })
}