/** Chunk was on 47841 **/
/** chunk id: 930657, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk405810 = require("./405810.jsx"),
  Chunk342298 = require("./342298.jsx"),
  Chunk580630 = require("./580630.js"),
  Chunk636194 = require("./636194.js"),
  Chunk11351 = require("./11351.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk922975 = require("./922975.js"),
  Chunk996507 = require("./996507.js"),
  Chunk963175 = require("./963175.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk844089 = require("./844089.js");

function _(e) {
  let {
    priceTiers: t
  } = e, {
    editStateId: n
  } = (0, m.O)(), _ = (0, l.bG)([u.A], () => {
    var e;
    return null == (e = u.A.getSubscriptionListing(n)) ? true : e.image_asset
  }), [O, v] = p.tx(n), [y, A] = p.bL(n), [E, N] = p.I8(n), [S, I] = p.lK(n, 1024), {
    imageCTA: T,
    imageAriaLabel: C,
    setFilename: P
  } = (0, f.A)(_), w = i.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t.map(e => ({
      id: e.toString(),
      value: e,
      label: (0, d.$g)(e, h.Yri.USD)
    }))) ? e : []
  }, [t]);

  function R(e, t) {
    null != t && P(t.name), I(e)
  }
  let D = (0, g.gN)(),
    G = (0, a.GV)(),
    L = (0, a.GV)(),
    k = (0, a.GV)();
  return (0, r.jsx)(b.A, {
    title: x.intl.string(x.t["iHU43+"]),
    intiallyExpanded: true,
    children: (0, r.jsxs)(s.BJc, {
      gap: 24,
      children: [(0, r.jsxs)("div", {
        className: j.lE,
        children: [(0, r.jsx)("div", {
          className: j.GI,
          children: (0, r.jsx)(s.ksK, {
            label: x.intl.string(x.t["grbGJ+"]),
            placeholder: x.intl.string(x.t["So2/xP"]),
            value: O,
            onChange: v,
            "aria-labelledby": G,
            disabled: D
          })
        }), (0, r.jsx)("div", {
          className: j.GI,
          children: (0, r.jsx)(s.l6P, {
            selectionMode: "single",
            label: x.intl.string(x.t.Ibl4BR),
            options: w,
            disabled: D || null == t,
            placeholder: x.intl.string(x.t["88XZDs"]),
            value: y,
            onSelectionChange: A,
            maxOptionsVisible: 5,
            "aria-labelledby": L
          })
        })]
      }), (0, r.jsx)(s.fs1, {
        label: x.intl.string(x.t["1w2WcX"]),
        placeholder: x.intl.string(x.t.p7Jr4K),
        value: E,
        autosize: true,
        onChange: N,
        "aria-labelledby": k,
        disabled: D
      }), (0, r.jsxs)("div", {
        className: j.r2,
        children: [(0, r.jsx)(s.D0$, {
          label: x.intl.string(x.t.RUBM2q),
          description: x.intl.string(x.t["0iUofN"]),
          children: (0, r.jsx)(o.A, {
            onChange: R,
            "aria-label": C,
            disabled: D,
            text: T,
            size: "md",
            variant: "secondary"
          })
        }), (0, r.jsx)(c.A, {
          image: S,
          hint: T,
          showIcon: true,
          showRemoveButton: false,
          hideSize: true,
          className: j.KN,
          imageClassName: j.NW,
          onChange: R,
          "aria-label": C,
          disabled: D
        })]
      })]
    })
  })
}