/** Chunk was on 99989 **/
/** chunk id: 889662, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk877794 = require("./877794.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    text: e,
    target: n,
    onHeightUpdate: d,
    onSelect: f
  } = t, b = l.useCallback(() => {
    (0, s.Zy)(), (0, c.kK)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0))
  }, [n]), [h, y] = (0, o.Z)({
    text: e,
    target: n,
    onHeightUpdate: d
  });
  if (!a.isPlatformEmbedded || !((0, c.kK)(n, HTMLInputElement) || (0, c.kK)(n, HTMLTextAreaElement))) return null;
  let O = "" !== e ? [(0, r.jsx)(i.sNh, {
    id: "cut",
    label: p.intl.string(p.t.pNPVhe),
    hint: (0, a.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => u.ZP.cut(), 0)
  }, "cut"), (0, r.jsx)(i.sNh, {
    id: "copy",
    label: p.intl.string(p.t.OpuAlK),
    hint: (0, a.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => u.ZP.copy(e)
  }, "copy")] : null;
  return (0, r.jsxs)(i.v2r, {
    navId: "textarea-context",
    onClose: b,
    "aria-label": p.intl.string(p.t.NWlDSI),
    onSelect: f,
    children: [(0, r.jsx)(i.kSQ, {
      children: h
    }), (0, r.jsx)(i.kSQ, {
      children: y
    }), (0, r.jsxs)(i.kSQ, {
      children: [O, (0, r.jsx)(i.sNh, {
        id: "paste",
        label: p.intl.string(p.t.lMUxVi),
        hint: (0, a.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => u.ZP.paste(), 0)
      })]
    })]
  })
}