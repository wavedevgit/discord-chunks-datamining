/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk327432 = require("./327432.js"),
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

function x(t) {
  var e, n, x, C, E, k, O, v, N, P, L, Z;
  let {
    text: A,
    editor: w,
    target: I,
    onHeightUpdate: M,
    onSelect: D
  } = t, H = (0, b.zM)("SlateTextAreaContextMenu", {
    autoTrackExposure: false
  }).enabled, R = a.useCallback(t => {
    r.F3.focus(w), setTimeout(() => {
      null == t || t(), m.bN.focus(w)
    }, 0)
  }, [w]), _ = a.useCallback(() => {
    (0, c.Zy)(R)
  }, [R]), G = a.useCallback(() => {
    let t = y.ZP.readClipboard();
    0 !== t.length && R(() => {
      i.YR.insertText(w, t)
    })
  }, [R, w]), [K, U] = (0, p.Z)({
    text: A,
    target: I,
    onHeightUpdate: M
  }), V = (0, S.Z)(w), X = (0, s.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), F = g.Xk.useSetting(), Y = g.HV.useSetting();
  if (!h.isPlatformEmbedded) return null;
  let W = null != (N = null == (n = w.chatInputType) || null == (e = n.commands) ? true : e.enabled) && N,
    Q = null != (P = null == (C = w.chatInputType) || null == (x = C.stickers) ? true : x.autoSuggest) && P,
    q = null != (L = null == (k = w.chatInputType) || null == (E = k.submit) ? true : E.button) && L,
    z = null != (Z = null == (v = w.chatInputType) || null == (O = v.autocomplete) ? true : O.mentionSuggestions) && Z,
    B = W || Q,
    J = h.isPlatformEmbedded && y.ZP.clipboardHasMixedContent(),
    $ = "" !== A ? [(0, l.jsx)(o.sNh, {
      id: "cut",
      label: T.intl.string(T.t.pNPVhe),
      hint: (0, h.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => y.ZP.cut(), 0)
    }, "cut"), (0, l.jsx)(o.sNh, {
      id: "copy",
      label: T.intl.string(T.t.OpuAlK),
      hint: (0, h.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => y.ZP.copy(), 0)
    }, "copy")] : null,
    tt = (0, l.jsx)(o.S89, {
      id: "command-suggestions",
      label: T.intl.string(T.t["9rJKF7"]),
      checked: F,
      action: () => {
        let t = !F;
        g.Xk.updateSetting(t), f.default.track(j.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: j.qAy.CONTEXT_MENU
          }
        })
      }
    });
  return (0, l.jsxs)(o.v2r, {
    navId: "textarea-context",
    onClose: _,
    "aria-label": T.intl.string(T.t.NWlDSI),
    onSelect: D,
    children: [B && (0, l.jsxs)(o.sNh, {
      id: "suggestions",
      label: T.intl.string(T.t.zgxg7v),
      children: [W && tt, H && z && (0, l.jsx)(o.S89, {
        id: "mention-suggestions",
        label: T.intl.string(T.t.cpmP4L),
        checked: Y,
        action: () => {
          g.HV.updateSetting(!Y)
        }
      })]
    }), q && (0, l.jsx)(o.S89, {
      id: "submit-button",
      label: T.intl.string(T.t.G8XDyj),
      checked: X,
      action: () => {
        (0, u.eN)()
      }
    }), (0, l.jsx)(o.kSQ, {
      children: K
    }), (0, l.jsxs)(o.kSQ, {
      children: [U, V]
    }), (0, l.jsxs)(o.kSQ, {
      children: [$, (0, l.jsx)(o.sNh, {
        id: "paste",
        label: T.intl.string(T.t.lMUxVi),
        hint: (0, h.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => y.ZP.paste(), 0)
      }), J && (0, l.jsx)(o.sNh, {
        id: "paste-as-plain-text",
        label: T.intl.string(T.t.X92Qnr),
        hint: (0, h.isMac)() ? "⌘⇧V" : "Ctrl+Shift+V",
        action: G
      })]
    })]
  })
}