/** Chunk was on 33885 **/
/** chunk id: 382731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk520586 = require("./520586.jsx"),
  Chunk465364 = require("./465364.js"),
  Chunk291812 = require("./291812.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk226303 = require("./226303.js");

function d(e) {
  let {
    previewMessage: t
  } = e, n = u.hH.useSetting(), {
    content: d
  } = (0, a.Ay)(t, {
    allowHeading: true,
    allowLinks: true
  }), b = t.attachments.map((e, t) => {
    let n = (0, o.LL)({
      src: e.url,
      containerClassName: c.oz,
      imageContainerClassName: c.oz,
      height: true !== e.height ? e.height : 200,
      width: true !== e.width ? e.width : 200,
      maxHeight: 200,
      maxWidth: 200,
      analyticsSource: "ApplicationCommandSharePreview"
    });
    return (0, l.jsx)(r.Fragment, {
      children: n
    }, t)
  });
  return (0, l.jsxs)("div", {
    className: c.i1,
    children: [(0, l.jsx)("div", {
      className: c.hD
    }), (0, l.jsxs)("div", {
      className: c.Qs,
      children: [(0, l.jsx)(s.Ay, {
        message: t,
        content: d,
        compact: n
      }), b, t.components.length > 0 ? (0, l.jsx)(i.Ay, {
        message: t,
        shouldDisableInteractiveComponents: true
      }) : null]
    })]
  })
}