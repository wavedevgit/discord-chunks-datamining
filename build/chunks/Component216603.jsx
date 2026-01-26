/** Chunk was on 42312 **/
/** chunk id: 216603, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk614203 = require("./614203.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  let {
    text: e,
    target: n,
    onHeightUpdate: d,
    onSelect: b
  } = t, f = l.useCallback(() => {
    (0, a.Z_)(), (0, i.vq)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0))
  }, [n]), [y, h] = (0, o.A)({
    text: e,
    target: n,
    onHeightUpdate: d
  });
  if (!s.isPlatformEmbedded || !((0, i.vq)(n, HTMLInputElement) || (0, i.vq)(n, HTMLTextAreaElement))) return null;
  let O = "" !== e ? [(0, r.jsx)(c.Drp, {
    id: "cut",
    label: p.intl.string(p.t.pNPVhe),
    hint: (0, s.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => u.Ay.cut(), 0)
  }, "cut"), (0, r.jsx)(c.Drp, {
    id: "copy",
    label: p.intl.string(p.t.OpuAlK),
    hint: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => u.Ay.copy(e)
  }, "copy")] : null;
  return (0, r.jsxs)(c.W1t, {
    "data-menu-migrated": true,
    navId: "textarea-context",
    onClose: f,
    "aria-label": p.intl.string(p.t.NWlDSI),
    onSelect: b,
    children: [(0, r.jsx)(c.rXV, {
      children: y
    }), (0, r.jsx)(c.rXV, {
      children: h
    }), (0, r.jsxs)(c.rXV, {
      children: [O, (0, r.jsx)(c.Drp, {
        id: "paste",
        label: p.intl.string(p.t.lMUxVi),
        hint: (0, s.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => u.Ay.paste(), 0)
      })]
    })]
  })
}