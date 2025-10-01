/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
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

function j(t) {
  var e, n, j, x, E, C, k, O, N, A, v, P;
  let {
    text: I,
    editor: L,
    target: Z,
    onHeightUpdate: w,
    onSelect: _
  } = t, M = (0, d.zM)("SlateTextAreaContextMenu", {
    autoTrackExposure: false
  }).enabled, D = a.useCallback(() => {
    (0, o.Zy)(() => {
      i.F3.focus(L), setTimeout(() => y.bN.focus(L), 0)
    })
  }, [L]), [F, H] = (0, b.Z)({
    text: I,
    target: Z,
    onHeightUpdate: w
  }), R = (0, m.Z)(L), G = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), K = p.Xk.useSetting(), U = p.HV.useSetting();
  if (!f.isPlatformEmbedded) return null;
  let V = null != (N = null == (n = L.chatInputType) || null == (e = n.commands) ? true : e.enabled) && N,
    X = null != (A = null == (x = L.chatInputType) || null == (j = x.stickers) ? true : j.autoSuggest) && A,
    W = null != (v = null == (C = L.chatInputType) || null == (E = C.submit) ? true : E.button) && v,
    Y = null != (P = null == (O = L.chatInputType) || null == (k = O.autocomplete) ? true : k.mentionSuggestions) && P,
    q = V || X,
    Q = "" !== I ? [(0, l.jsx)(s.sNh, {
      id: "cut",
      label: T.intl.string(T.t.pNPVhY),
      hint: (0, f.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => h.ZP.cut(), 0)
    }, "cut"), (0, l.jsx)(s.sNh, {
      id: "copy",
      label: T.intl.string(T.t.OpuAlJ),
      hint: (0, f.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => h.ZP.copy(), 0)
    }, "copy")] : null,
    B = (0, l.jsx)(s.S89, {
      id: "command-suggestions",
      label: T.intl.string(T.t["9rJKFx"]),
      checked: K,
      action: () => {
        let t = !K;
        p.Xk.updateSetting(t), g.default.track(S.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
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
    "aria-label": T.intl.string(T.t.NWlDSE),
    onSelect: _,
    children: [q && (0, l.jsxs)(s.sNh, {
      id: "suggestions",
      label: T.intl.string(T.t.zgxg7u),
      children: [V && B, M && Y && (0, l.jsx)(s.S89, {
        id: "mention-suggestions",
        label: T.intl.string(T.t.cpmP4O),
        checked: U,
        action: () => {
          p.HV.updateSetting(!U)
        }
      })]
    }), W && (0, l.jsx)(s.S89, {
      id: "submit-button",
      label: T.intl.string(T.t.G8XDys),
      checked: G,
      action: () => {
        (0, c.eN)()
      }
    }), (0, l.jsx)(s.kSQ, {
      children: F
    }), (0, l.jsxs)(s.kSQ, {
      children: [H, R]
    }), (0, l.jsxs)(s.kSQ, {
      children: [Q, (0, l.jsx)(s.sNh, {
        id: "paste",
        label: T.intl.string(T.t.lMUxVl),
        hint: (0, f.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => h.ZP.paste(), 0)
      })]
    })]
  })
}