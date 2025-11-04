/** Chunk was on 1272 **/
/** chunk id: 626421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk914010 = require("./914010.js"),
  Chunk566840 = require("./566840.js"),
  Chunk921944 = require("./921944.js"),
  Chunk475915 = require("./475915.js");
let f = Chunk647438.memo(function(e) {
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

function h() {
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
  return null == Chunk120356 ? null : (0, Chunk951288.jsx)("div", {
    className: Chunk475915.container,
    children: (0, Chunk951288.jsx)(f, {
      state: Chunk120356,
      markAsDismissed: Chunk647438
    })
  })
}