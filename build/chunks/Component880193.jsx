/** Chunk was on 384 **/
/** chunk id: 880193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk810792 = require("./810792.js");

function _(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, m.N)(), _ = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getSubscriptionListing(n)) ? true : e.image_asset
  }), [v, O] = p._T(n), [C, y] = p.mR(n), [N, E] = p.PK(n), [I, S] = p.d9(n, 1024), {
    imageCTA: T,
    imageAriaLabel: P,
    setFilename: w
  } = (0, f.Z)(_), Z = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      value: e,
      label: (0, d.T4)(e, b.pKx.USD)
    }))) ? e : []
  }, [t]);

  function R(e, t) {
    null != t && w(t.name), S(e)
  }
  let D = (0, g.mY)(),
    A = (0, s.Dt)(),
    L = (0, s.Dt)(),
    k = (0, s.Dt)();
  return (0, r.jsx)(h.Z, {
    title: x.intl.string(x.t["iHU43+"]),
    intiallyExpanded: true,
    children: (0, r.jsxs)(a.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)("div", {
        className: j.formSplit,
        children: [(0, r.jsx)("div", {
          className: j.formSplitHalf,
          children: (0, r.jsx)(a.oil, {
            label: x.intl.string(x.t["grbGJ+"]),
            placeholder: x.intl.string(x.t["So2/xP"]),
            value: v,
            onChange: O,
            "aria-labelledby": A,
            disabled: D
          })
        }), (0, r.jsx)("div", {
          className: j.formSplitHalf,
          children: (0, r.jsx)(a.q4e, {
            label: x.intl.string(x.t.Ibl4BR),
            options: Z,
            isDisabled: D || null == t,
            placeholder: x.intl.string(x.t["88XZDs"]),
            value: C,
            onChange: y,
            maxVisibleItems: 5,
            "aria-labelledby": L
          })
        })]
      }), (0, r.jsx)(a.Kx8, {
        label: x.intl.string(x.t["1w2WcX"]),
        placeholder: x.intl.string(x.t.p7Jr4K),
        value: N,
        autosize: true,
        onChange: E,
        "aria-labelledby": k,
        disabled: D
      }), (0, r.jsxs)("div", {
        className: j.iconSection,
        children: [(0, r.jsx)(a.gNt, {
          label: x.intl.string(x.t.RUBM2q),
          description: x.intl.string(x.t["0iUofN"]),
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