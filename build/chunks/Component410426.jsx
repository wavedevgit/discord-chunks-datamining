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
  Chunk326502 = require("./326502.js");

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
        keybindHook: () => (0, r.jsx)("span", {
          className: g.keybindHintKeys,
          children: (0, r.jsx)(s.M2$, {
            className: g.keybindShortcut,
            shortcut: e
          })
        })
      })
    }
  })();
  return (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsxs)("div", {
      className: g.content,
      children: [(0, r.jsx)("div", {
        className: h
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        className: i()(g.noClipsText, {
          [g.noSearchResultsText]: t
        }),
        children: x
      })]
    })
  })
}