/** Chunk was on 2668 **/
/** chunk id: 410426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk435064 = require("./435064.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk348692 = require("./348692.js");

function j(e) {
  let {
    isEmptyBecauseQuery: t,
    closePopout: n
  } = e, a = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)), j = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled), h = t ? g.noSearchResultsImage : g.noClipsImage, y = l.useCallback(() => {
    n(), (0, c.Z)(f.Z.CLIPS)
  }, [n]), x = (() => {
    if (!j) return b.intl.format(b.t["3iveam"], {
      onClick: y
    });
    if (t) return b.intl.string(b.t["xrEs6+"]);
    if (null == a) return b.intl.format(b.t.jpKk7e, {
      onClick: y
    });
    {
      let e = d.BB(a.shortcut, true);
      return b.intl.format(b.t["xY/8Ky"], {
        keybind: e,
        keybindHook: () => <span className={g.keybindHintKeys}><s.M2$ className={g.keybindShortcut} shortcut={e} /></span>
      })
    }
  })();
  return <div className={g.container}><div className={g.content}>{<div className={h} />}{<s.Text variant={"text-md/medium"} className={i()(g.noClipsText, {
          [g.noSearchResultsText]: t
        })}>{x}</s.Text>}</div></div>
}