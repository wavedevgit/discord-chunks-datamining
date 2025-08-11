/** Chunk was on 41984 **/
/** chunk id: 343602, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk650557 = require("./650557.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk877794 = require("./877794.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk887490 = require("./887490.js"),
  Chunk517440 = require("./517440.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function j(t) {
  var e, n, j, T, x, E, O, C, k;
  let {
    text: N,
    editor: v,
    target: A,
    onHeightUpdate: P,
    onSelect: L
  } = t, Z = a.useCallback(() => {
    (0, o.Zy)(() => {
      i.F3.focus(v), setTimeout(() => h.bN.focus(v), 0)
    })
  }, [v]), [w, I] = (0, d.Z)({
    text: N,
    target: A,
    onHeightUpdate: P
  }), D = (0, y.Z)(v), M = (0, r.e7)([u.Z], () => u.Z.isSubmitButtonEnabled), _ = b.Xk.useSetting();
  if (!g.isPlatformEmbedded) return null;
  let R = null != (O = null == (n = v.chatInputType) || null == (e = n.commands) ? true : e.enabled) && O,
    G = null != (C = null == (T = v.chatInputType) || null == (j = T.stickers) ? true : j.autoSuggest) && C,
    H = null != (k = null == (E = v.chatInputType) || null == (x = E.submit) ? true : x.button) && k,
    U = R || G,
    X = "" !== N ? [<s.sNh id={"copy"} label={S.intl.string(S.t.OpuAlJ)} hint={(0, g.isMac)() ? "⌘C" : "Ctrl+C"} action={() => setTimeout(() => f.ZP.copy(), 0)} />, <s.sNh id={"cut"} label={S.intl.string(S.t.pNPVhY)} hint={(0, g.isMac)() ? "⌘X" : "Ctrl+X"} action={() => setTimeout(() => f.ZP.cut(), 0)} />] : null,
    F = <s.S89 id={"command-suggestions"} label={S.intl.string(S.t["9rJKFx"])} checked={_} action={() => {
        let t = !_;
        b.Xk.updateSetting(t), p.default.track(m.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: t,
          location: {
            object: m.qAy.CONTEXT_MENU
          }
        })
      }} />;
  return <s.v2r navId={"textarea-context"} onClose={Z} aria-label={S.intl.string(S.t.NWlDSE)} onSelect={L}>{U && <s.sNh id={"suggestions"} label={S.intl.string(S.t.zgxg7u)}>{R && F}</s.sNh>}{H && <s.S89 id={"submit-button"} label={S.intl.string(S.t.G8XDys)} checked={M} action={() => {
        (0, c.eN)()
      }} />}{<s.kSQ>{w}</s.kSQ>}{<s.kSQ>{I}{D}</s.kSQ>}{<s.kSQ>{X}{<s.sNh id={"paste"} label={S.intl.string(S.t.lMUxVl)} hint={(0, g.isMac)() ? "⌘V" : "Ctrl+V"} action={() => setTimeout(() => f.ZP.paste(), 0)} />}</s.kSQ>}</s.v2r>
}