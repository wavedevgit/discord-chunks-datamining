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
  var e, n, j, T, E, x, C, O, k;
  let {
    text: N,
    editor: A,
    target: v,
    onHeightUpdate: P,
    onSelect: I
  } = t, L = a.useCallback(() => {
    (0, o.Zy)(() => {
      i.F3.focus(A), setTimeout(() => h.bN.focus(A), 0)
    })
  }, [A]), [Z, w] = (0, d.Z)({
    text: N,
    target: v,
    onHeightUpdate: P
  }), _ = (0, y.Z)(A), D = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), M = b.Xk.useSetting();
  if (!p.isPlatformEmbedded) return null;
  let F = null != (C = null == (n = A.chatInputType) || null == (e = n.commands) ? true : e.enabled) && C,
    R = null != (O = null == (T = A.chatInputType) || null == (j = T.stickers) ? true : j.autoSuggest) && O,
    G = null != (k = null == (x = A.chatInputType) || null == (E = x.submit) ? true : E.button) && k,
    H = F || R,
    U = "" !== N ? [(0, l.jsx)(s.sNh, {
      id: "copy",
      label: S.intl.string(S.t.OpuAlJ),
      hint: (0, p.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => g.ZP.copy(), 0)
    }, "copy"), (0, l.jsx)(s.sNh, {
      id: "cut",
      label: S.intl.string(S.t.pNPVhY),
      hint: (0, p.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => g.ZP.cut(), 0)
    }, "cut")] : null,
    X = (0, l.jsx)(s.S89, {
      id: "command-suggestions",
      label: S.intl.string(S.t["9rJKFx"]),
      checked: M,
      action: () => {
        let t = !M;
        b.Xk.updateSetting(t), f.default.track(m.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: m.qAy.CONTEXT_MENU
          }
        })
      }
    });
  return (0, l.jsxs)(s.v2r, {
    navId: "textarea-context",
    onClose: L,
    "aria-label": S.intl.string(S.t.NWlDSE),
    onSelect: I,
    children: [H && (0, l.jsx)(s.sNh, {
      id: "suggestions",
      label: S.intl.string(S.t.zgxg7u),
      children: F && X
    }), G && (0, l.jsx)(s.S89, {
      id: "submit-button",
      label: S.intl.string(S.t.G8XDys),
      checked: D,
      action: () => {
        (0, c.eN)()
      }
    }), (0, l.jsx)(s.kSQ, {
      children: Z
    }), (0, l.jsxs)(s.kSQ, {
      children: [w, _]
    }), (0, l.jsxs)(s.kSQ, {
      children: [U, (0, l.jsx)(s.sNh, {
        id: "paste",
        label: S.intl.string(S.t.lMUxVl),
        hint: (0, p.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => g.ZP.paste(), 0)
      })]
    })]
  })
}