/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755712 = require("./755712.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk657871 = require("./657871.js"),
  Chunk877794 = require("./877794.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk887490 = require("./887490.js"),
  Chunk517440 = require("./517440.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function T(t) {
  var e, n, T, x, E, C, k, O, v, N, A, P;
  let {
    text: I,
    editor: L,
    target: w,
    onHeightUpdate: Z,
    onSelect: _
  } = t, M = (0, d.zM)("SlateTextAreaContextMenu", {
    autoTrackExposure: false
  }).enabled, D = a.useCallback(() => {
    (0, o.Zy)(() => {
      i.F3.focus(L), setTimeout(() => y.bN.focus(L), 0)
    })
  }, [L]), [F, H] = (0, b.Z)({
    text: I,
    target: w,
    onHeightUpdate: Z
  }), R = (0, m.Z)(L), G = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), K = p.Xk.useSetting(), U = p.HV.useSetting();
  if (!g.isPlatformEmbedded) return null;
  let V = null != (v = null == (n = L.chatInputType) || null == (e = n.commands) ? true : e.enabled) && v,
    X = null != (N = null == (x = L.chatInputType) || null == (T = x.stickers) ? true : T.autoSuggest) && N,
    W = null != (A = null == (C = L.chatInputType) || null == (E = C.submit) ? true : E.button) && A,
    Y = null != (P = null == (O = L.chatInputType) || null == (k = O.autocomplete) ? true : k.mentionSuggestions) && P,
    Q = V || X,
    q = "" !== I ? [(0, l.jsx)(s.sNh, {
      id: "cut",
      label: j.intl.string(j.t.pNPVhe),
      hint: (0, g.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => h.ZP.cut(), 0)
    }, "cut"), (0, l.jsx)(s.sNh, {
      id: "copy",
      label: j.intl.string(j.t.OpuAlK),
      hint: (0, g.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => h.ZP.copy(), 0)
    }, "copy")] : null,
    B = (0, l.jsx)(s.S89, {
      id: "command-suggestions",
      label: j.intl.string(j.t["9rJKF7"]),
      checked: K,
      action: () => {
        let t = !K;
        p.Xk.updateSetting(t), f.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: S.qAy.CONTEXT_MENU
          }
        })
      }
    });
  return (0, l.jsxs)(s.v2r, {
    navId: "textarea-context",
    onClose: D,
    "aria-label": j.intl.string(j.t.NWlDSI),
    onSelect: _,
    children: [Q && (0, l.jsxs)(s.sNh, {
      id: "suggestions",
      label: j.intl.string(j.t.zgxg7v),
      children: [V && B, M && Y && (0, l.jsx)(s.S89, {
        id: "mention-suggestions",
        label: j.intl.string(j.t.cpmP4L),
        checked: U,
        action: () => {
          p.HV.updateSetting(!U)
        }
      })]
    }), W && (0, l.jsx)(s.S89, {
      id: "submit-button",
      label: j.intl.string(j.t.G8XDyj),
      checked: G,
      action: () => {
        (0, c.eN)()
      }
    }), (0, l.jsx)(s.kSQ, {
      children: F
    }), (0, l.jsxs)(s.kSQ, {
      children: [H, R]
    }), (0, l.jsxs)(s.kSQ, {
      children: [q, (0, l.jsx)(s.sNh, {
        id: "paste",
        label: j.intl.string(j.t.lMUxVi),
        hint: (0, g.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => h.ZP.paste(), 0)
      })]
    })]
  })
}