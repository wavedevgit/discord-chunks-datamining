/** Chunk was on 1272 **/
/** chunk id: 626421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk566840 = require("./566840.js"),
  Chunk921944 = require("./921944.js"),
  Chunk975317 = require("./975317.js");
let f = Chunk473749.memo(function(e) {
  let {
    state: t,
    markAsDismissed: n
  } = e, {
    name: l,
    guildId: o,
    boundingRect: s
  } = t, c = i.useMemo(() => null, [l, o, n]);
  return null == c ? null : (0, r.jsx)("div", {
    className: a()(p.upsell, (null == s || s.y < 0) && p.hidden),
    style: null == s ? {} : {
      top: s.top,
      left: s.right - s.x
    },
    children: c
  })
});

function g() {
  let e = (0, Chunk399606.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    t = (0, Chunk566840.Eg)(module),
    [n, i] = (0, Chunk243778.US)(Object.values(exports).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), Chunk921944.R.SIDEBAR);
  if (null == require) return null;
  let l = exports[require];
  return null == Chunk120356 ? null : (0, Chunk54381.jsx)("div", {
    className: Chunk975317.container,
    children: (0, Chunk54381.jsx)(f, {
      state: Chunk120356,
      markAsDismissed: Chunk473749
    })
  })
}