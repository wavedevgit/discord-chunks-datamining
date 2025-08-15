/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk650557 = require("./650557.js"),
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

function S(t) {
  var e, n, S, j, E, T, O, k, C;
  let {
    text: N,
    editor: v,
    target: A,
    onHeightUpdate: P,
    onSelect: L
  } = t, w = a.useCallback(() => {
    (0, o.Zy)(() => {
      r.F3.focus(v), setTimeout(() => x.bN.focus(v), 0)
    })
  }, [v]), [I, Z] = (0, p.Z)({
    text: N,
    target: A,
    onHeightUpdate: P
  }), _ = (0, h.Z)(v), D = (0, i.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), M = f.Xk.useSetting();
  if (!d.isPlatformEmbedded) return null;
  let F = null != (O = null == (n = v.chatInputType) || null == (e = n.commands) ? true : e.enabled) && O,
    R = null != (k = null == (j = v.chatInputType) || null == (S = j.stickers) ? true : S.autoSuggest) && k,
    U = null != (C = null == (T = v.chatInputType) || null == (E = T.submit) ? true : E.button) && C,
    G = F || R,
    H = "" !== N ? [(0, s.jsx)(c.sNh, {
      id: "copy",
      label: m.intl.string(m.t.OpuAlJ),
      hint: (0, d.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => b.ZP.copy(), 0)
    }, "copy"), (0, s.jsx)(c.sNh, {
      id: "cut",
      label: m.intl.string(m.t.pNPVhY),
      hint: (0, d.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => b.ZP.cut(), 0)
    }, "cut")] : null,
    W = (0, s.jsx)(c.S89, {
      id: "command-suggestions",
      label: m.intl.string(m.t["9rJKFx"]),
      checked: M,
      action: () => {
        let t = !M;
        f.Xk.updateSetting(t), g.default.track(y.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: y.qAy.CONTEXT_MENU
          }
        })
      }
    });
  return (0, s.jsxs)(c.v2r, {
    navId: "textarea-context",
    onClose: w,
    "aria-label": m.intl.string(m.t.NWlDSE),
    onSelect: L,
    children: [G && (0, s.jsx)(c.sNh, {
      id: "suggestions",
      label: m.intl.string(m.t.zgxg7u),
      children: F && W
    }), U && (0, s.jsx)(c.S89, {
      id: "submit-button",
      label: m.intl.string(m.t.G8XDys),
      checked: D,
      action: () => {
        (0, l.eN)()
      }
    }), (0, s.jsx)(c.kSQ, {
      children: I
    }), (0, s.jsxs)(c.kSQ, {
      children: [Z, _]
    }), (0, s.jsxs)(c.kSQ, {
      children: [H, (0, s.jsx)(c.sNh, {
        id: "paste",
        label: m.intl.string(m.t.lMUxVl),
        hint: (0, d.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => b.ZP.paste(), 0)
      })]
    })]
  })
}