/** Chunk was on 42312 **/
/** chunk id: 216603, original params: t,e,r (module,exports,require) **/
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
    target: r,
    onHeightUpdate: d,
    onSelect: b
  } = t, f = l.useCallback(() => {
    (0, a.Z_)(), (0, c.vq)(r, HTMLElement) && (r.focus(), setTimeout(() => r.focus(), 0))
  }, [r]), [y, h] = (0, o.A)({
    text: e,
    target: r,
    onHeightUpdate: d
  });
  if (!s.isPlatformEmbedded || !((0, c.vq)(r, HTMLInputElement) || (0, c.vq)(r, HTMLTextAreaElement))) return null;
  let O = "" !== e ? [(0, n.jsx)(i.Drp, {
    id: "cut",
    label: p.intl.string(p.t.pNPVhe),
    shortcut: (0, s.isMac)() ? "⌘X" : "Ctrl+X",
    action: () => setTimeout(() => u.Ay.cut(), 0)
  }, "cut"), (0, n.jsx)(i.Drp, {
    id: "copy",
    label: p.intl.string(p.t.OpuAlK),
    shortcut: (0, s.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => u.Ay.copy(e)
  }, "copy")] : null;
  return (0, n.jsxs)(i.W1t, {
    "data-menu-migrated": true,
    navId: "textarea-context",
    onClose: f,
    "aria-label": p.intl.string(p.t.NWlDSI),
    onSelect: b,
    children: [(0, n.jsx)(i.rXV, {
      children: y
    }), (0, n.jsx)(i.rXV, {
      children: h
    }), (0, n.jsxs)(i.rXV, {
      children: [O, (0, n.jsx)(i.Drp, {
        id: "paste",
        label: p.intl.string(p.t.lMUxVi),
        shortcut: (0, s.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => u.Ay.paste(), 0)
      })]
    })]
  })
}