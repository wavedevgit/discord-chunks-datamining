/** Chunk was on 53682 **/
/** chunk id: 739980, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk954654 = require("./954654.jsx"),
  Chunk937889 = require("./937889.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk824519 = require("./824519.js");

function d(e) {
  let {
    previewMessage: t
  } = e, n = u.jU.useSetting(), {
    content: d
  } = (0, a.ZP)(t, {
    allowHeading: true,
    allowLinks: true
  }), f = t.attachments.map((e, t) => {
    let n = (0, o.Yi)({
      src: e.url,
      containerClassName: c.previewImage,
      imageContainerClassName: c.previewImage,
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
    className: c.previewContainer,
    children: [(0, l.jsx)("div", {
      className: c.quote
    }), (0, l.jsxs)("div", {
      className: c.content,
      children: [(0, l.jsx)(s.ZP, {
        message: t,
        content: d,
        compact: n
      }), f, t.components.length > 0 ? (0, l.jsx)(i.ZP, {
        message: t,
        shouldDisableInteractiveComponents: true
      }) : null]
    })]
  })
}