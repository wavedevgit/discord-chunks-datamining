/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk685578 = require("./685578.js"),
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
  var e, n, T, x, E, k, O, C, v, N, P, L;
  let {
    text: A,
    editor: w,
    target: Z,
    onHeightUpdate: I,
    onSelect: M
  } = t, D = (0, d.zM)("SlateTextAreaContextMenu", {
    autoTrackExposure: false
  }).enabled, _ = a.useCallback(() => {
    (0, o.Zy)(() => {
      i.F3.focus(w), setTimeout(() => y.bN.focus(w), 0)
    })
  }, [w]), [H, R] = (0, b.Z)({
    text: A,
    target: Z,
    onHeightUpdate: I
  }), G = (0, m.Z)(w), K = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), U = p.Xk.useSetting(), V = p.HV.useSetting();
  if (!f.isPlatformEmbedded) return null;
  let X = null != (v = null == (n = w.chatInputType) || null == (e = n.commands) ? true : e.enabled) && v,
    F = null != (N = null == (x = w.chatInputType) || null == (T = x.stickers) ? true : T.autoSuggest) && N,
    W = null != (P = null == (k = w.chatInputType) || null == (E = k.submit) ? true : E.button) && P,
    Y = null != (L = null == (C = w.chatInputType) || null == (O = C.autocomplete) ? true : O.mentionSuggestions) && L,
    Q = X || F,
    q = "" !== A ? [(0, l.jsx)(s.sNh, {
      id: "cut",
      label: j.intl.string(j.t.pNPVhe),
      hint: (0, f.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => h.ZP.cut(), 0)
    }, "cut"), (0, l.jsx)(s.sNh, {
      id: "copy",
      label: j.intl.string(j.t.OpuAlK),
      hint: (0, f.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => h.ZP.copy(), 0)
    }, "copy")] : null,
    z = (0, l.jsx)(s.S89, {
      id: "command-suggestions",
      label: j.intl.string(j.t["9rJKF7"]),
      checked: U,
      action: () => {
        let t = !U;
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
    onClose: _,
    "aria-label": j.intl.string(j.t.NWlDSI),
    onSelect: M,
    children: [Q && (0, l.jsxs)(s.sNh, {
      id: "suggestions",
      label: j.intl.string(j.t.zgxg7v),
      children: [X && z, D && Y && (0, l.jsx)(s.S89, {
        id: "mention-suggestions",
        label: j.intl.string(j.t.cpmP4L),
        checked: V,
        action: () => {
          p.HV.updateSetting(!V)
        }
      })]
    }), W && (0, l.jsx)(s.S89, {
      id: "submit-button",
      label: j.intl.string(j.t.G8XDyj),
      checked: K,
      action: () => {
        (0, c.eN)()
      }
    }), (0, l.jsx)(s.kSQ, {
      children: H
    }), (0, l.jsxs)(s.kSQ, {
      children: [R, G]
    }), (0, l.jsxs)(s.kSQ, {
      children: [q, (0, l.jsx)(s.sNh, {
        id: "paste",
        label: j.intl.string(j.t.lMUxVi),
        hint: (0, f.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => h.ZP.paste(), 0)
      })]
    })]
  })
}