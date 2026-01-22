/** Chunk was on 4918 **/
/** chunk id: 714973, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk725177 = require("./725177.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk572164 = require("./572164.js"),
  Chunk652215 = require("./652215.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk7709 = require("./7709.js");

function v(e) {
  let {
    isEmptyBecauseQuery: t
  } = e, l = (0, s.bG)([u.Ay], () => u.Ay.getKeybindForAction(m.hCu.SAVE_CLIP)), i = (0, p.Et)(), v = t ? b.HT : b.Kt, j = r.useCallback(() => {
    (0, o.A)(f.J.CLIPS, {
      stackingBehavior: "stack"
    })
  }, []), h = (() => {
    if (!i) return y.intl.format(y.t["3iveao"], {
      onClick: j
    });
    if (t) return y.intl.string(y.t["xrEs6/"]);
    if (null == l) return y.intl.format(y.t.jpKk7e, {
      onClick: j
    });
    {
      let e = d.dI(l.shortcut, true);
      return y.intl.format(y.t["xY/8K5"], {
        keybind: e,
        keybindHook: () => (0, n.jsx)("span", {
          className: b.EY,
          children: (0, n.jsx)(c.e7I, {
            className: b.d4,
            shortcut: e
          })
        })
      })
    }
  })();
  return (0, n.jsx)("div", {
    className: b.kL,
    children: (0, n.jsxs)("div", {
      className: b.Qs,
      children: [(0, n.jsx)("div", {
        className: v
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/medium",
        className: a()(b.Gl, {
          [b.zo]: t
        }),
        children: h
      })]
    })
  })
}