/** Chunk was on 30243 **/
/** chunk id: 861529, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk454585 = require("./454585.js"),
  Chunk937889 = require("./937889.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk985184 = require("./985184.jsx"),
  Chunk870456 = require("./870456.js"),
  Chunk709136 = require("./709136.js"),
  Chunk430864 = require("./430864.js");

function b(e) {
  let {
    content: t,
    className: r
  } = e, i = function(e) {
    let t = (0, s.CJ)();
    return (0, l.useMemo)(() => {
      let r;
      return null === t ? null : (r = null != t.message ? (0, c.rs)(t.message, d.u) : (0, c.p6)({
        channelId: t.channelId,
        renderOptions: d.u
      }), a.Z.parse(e, true, r))
    }, [e, t])
  }(t), b = (0, u.Gt)();
  return (0, n.jsx)("div", {
    className: o()(r, f.markup, p.markdownContainer, {
      [p.containerSizedText]: b
    }),
    children: i
  })
}