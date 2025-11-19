/** Chunk was on 61342 **/
/** chunk id: 410426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk341569 = require("./341569.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk641719 = require("./641719.js");

function h(e) {
  let {
    isEmptyBecauseQuery: t
  } = e, n = (0, s.e7)([u.ZP], () => u.ZP.getKeybindForAction(m.kg4.SAVE_CLIP)), i = (0, p.z8)(), h = t ? b.noSearchResultsImage : b.noClipsImage, v = r.useCallback(() => {
    (0, o.Z)(f.Z.CLIPS, {
      stackingBehavior: "stack"
    })
  }, []), j = (() => {
    if (!i) return y.intl.format(y.t["3iveao"], {
      onClick: v
    });
    if (t) return y.intl.string(y.t["xrEs6/"]);
    if (null == n) return y.intl.format(y.t.jpKk7e, {
      onClick: v
    });
    {
      let e = d.BB(n.shortcut, true);
      return y.intl.format(y.t["xY/8K5"], {
        keybind: e,
        keybindHook: () => (0, l.jsx)("span", {
          className: b.keybindHintKeys,
          children: (0, l.jsx)(c.M2$, {
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
        className: h
      }), (0, l.jsx)(c.Text, {
        variant: "text-md/medium",
        className: a()(b.noClipsText, {
          [b.noSearchResultsText]: t
        }),
        children: j
      })]
    })
  })
}