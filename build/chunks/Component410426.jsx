/** Chunk was on 57478 **/
/** chunk id: 410426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk641719 = require("./641719.js");

function h(e) {
  let {
    isEmptyBecauseQuery: t,
    closePopout: n
  } = e, r = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)), h = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled), x = t ? b.noSearchResultsImage : b.noClipsImage, j = a.useCallback(() => {
    n(), (0, c.Z)(f.Z.CLIPS)
  }, [n]), y = (() => {
    if (!h) return g.intl.format(g.t["3iveao"], {
      onClick: j
    });
    if (t) return g.intl.string(g.t["xrEs6/"]);
    if (null == r) return g.intl.format(g.t.jpKk7e, {
      onClick: j
    });
    {
      let e = d.BB(r.shortcut, true);
      return g.intl.format(g.t["xY/8K5"], {
        keybind: e,
        keybindHook: () => (0, l.jsx)("span", {
          className: b.keybindHintKeys,
          children: (0, l.jsx)(s.M2$, {
            className: b.keybindShortcut,
            shortcut: e
          })
        })
      })
    }
  })();
  return (0, l.jsx)("div", {
    className: b.container,
    children: (0, l.jsxs)("div", {
      className: b.content,
      children: [(0, l.jsx)("div", {
        className: x
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/medium",
        className: i()(b.noClipsText, {
          [b.noSearchResultsText]: t
        }),
        children: y
      })]
    })
  })
}