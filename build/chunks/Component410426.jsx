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
  Chunk736689 = require("./736689.js");

function h(e) {
  let {
    isEmptyBecauseQuery: t,
    closePopout: n
  } = e, a = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)), h = (0, o.e7)([p.Z], () => p.Z.getSettings().clipsEnabled), y = t ? g.noSearchResultsImage : g.noClipsImage, x = r.useCallback(() => {
    n(), (0, s.Z)(f.Z.CLIPS)
  }, [n]), j = (() => {
    if (!h) return b.intl.format(b.t["3iveam"], {
      onClick: x
    });
    if (t) return b.intl.string(b.t["xrEs6+"]);
    if (null == a) return b.intl.format(b.t.jpKk7e, {
      onClick: x
    });
    {
      let e = d.BB(a.shortcut, true);
      return b.intl.format(b.t["xY/8Ky"], {
        keybind: e,
        keybindHook: () => (0, l.jsx)("span", {
          className: g.keybindHintKeys,
          children: (0, l.jsx)(c.M2$, {
            className: g.keybindShortcut,
            shortcut: e
          })
        })
      })
    }
  })();
  return (0, l.jsx)("div", {
    className: g.container,
    children: (0, l.jsxs)("div", {
      className: g.content,
      children: [(0, l.jsx)("div", {
        className: y
      }), (0, l.jsx)(c.Text, {
        variant: "text-md/medium",
        className: i()(g.noClipsText, {
          [g.noSearchResultsText]: t
        }),
        children: j
      })]
    })
  })
}