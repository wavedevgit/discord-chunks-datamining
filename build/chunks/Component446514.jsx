/** Chunk was on 58127 **/
/** chunk id: 446514, original params: t,e,s (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk719442 = require("./719442.js"),
  Chunk253018 = require("./253018.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk968011 = require("./968011.js"),
  Chunk614203 = require("./614203.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk711371 = require("./711371.js"),
  Chunk938746 = require("./938746.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function j(t) {
  var e, s, j, O, C, E, v, A, L, k, D, P;
  let {
    text: w,
    editor: _,
    target: G,
    onHeightUpdate: M,
    onSelect: N
  } = t, I = (0, g.us)("SlateTextAreaContextMenu", {
    autoTrackExposure: false
  }).enabled, U = r.useCallback(t => {
    i.rL.focus(_), setTimeout(() => {
      null == t || t(), y.VW.focus(_)
    }, 0)
  }, [_]), V = r.useCallback(() => {
    (0, o.Z_)(U)
  }, [U]), R = r.useCallback(() => {
    let t = h.Ay.readClipboard();
    0 !== t.length && U(() => {
      a.gB.insertText(_, t)
    })
  }, [U, _]), [H, X] = (0, d.A)({
    text: w,
    target: G,
    onHeightUpdate: M
  }), K = (0, m.A)(_), W = (0, l.bG)([p.A], () => p.A.isSubmitButtonEnabled), F = b._3.useSetting(), B = b.ng.useSetting();
  if (!x.isPlatformEmbedded) return null;
  let Z = null != (e = null == (E = _.chatInputType) || null == (C = E.commands) ? true : C.enabled) && e,
    Y = null != (s = null == (A = _.chatInputType) || null == (v = A.stickers) ? true : v.autoSuggest) && s,
    q = null != (j = null == (k = _.chatInputType) || null == (L = k.submit) ? true : L.button) && j,
    z = null != (O = null == (P = _.chatInputType) || null == (D = P.autocomplete) ? true : D.mentionSuggestions) && O,
    Q = Z || Y,
    J = x.isPlatformEmbedded && h.Ay.clipboardHasMixedContent(),
    $ = "" !== w ? [(0, n.jsx)(c.Drp, {
      id: "cut",
      label: T.intl.string(T.t.pNPVhe),
      shortcut: (0, x.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => h.Ay.cut(), 0)
    }, "cut"), (0, n.jsx)(c.Drp, {
      id: "copy",
      label: T.intl.string(T.t.OpuAlK),
      shortcut: (0, x.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => h.Ay.copy(), 0)
    }, "copy")] : null,
    tt = (0, n.jsx)(c.sLh, {
      id: "command-suggestions",
      label: T.intl.string(T.t["9rJKF7"]),
      checked: F,
      action: () => {
        let t = !F;
        b._3.updateSetting(t), f.default.track(S.HAw.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: S.ZSU.CONTEXT_MENU
          }
        })
      }
    });
  return (0, n.jsxs)(c.W1t, {
    "data-menu-needs-migration": true,
    navId: "textarea-context",
    onClose: V,
    "aria-label": T.intl.string(T.t.NWlDSI),
    onSelect: N,
    children: [Q && (0, n.jsxs)(c.Drp, {
      id: "suggestions",
      label: T.intl.string(T.t.zgxg7v),
      children: [Z && tt, I && z && (0, n.jsx)(c.sLh, {
        id: "mention-suggestions",
        label: T.intl.string(T.t.cpmP4L),
        checked: B,
        action: () => {
          b.ng.updateSetting(!B)
        }
      })]
    }), q && (0, n.jsx)(c.sLh, {
      id: "submit-button",
      label: T.intl.string(T.t.G8XDyj),
      checked: W,
      action: () => {
        (0, u.Xt)()
      }
    }), (0, n.jsx)(c.rXV, {
      children: H
    }), (0, n.jsxs)(c.rXV, {
      children: [X, K]
    }), (0, n.jsxs)(c.rXV, {
      children: [$, (0, n.jsx)(c.Drp, {
        id: "paste",
        label: T.intl.string(T.t.lMUxVi),
        shortcut: (0, x.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => h.Ay.paste(), 0)
      }), J && (0, n.jsx)(c.Drp, {
        id: "paste-as-plain-text",
        label: T.intl.string(T.t.X92Qnr),
        shortcut: (0, x.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
        action: R
      })]
    })]
  })
}