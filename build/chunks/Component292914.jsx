/** Chunk was on 40184 **/
/** chunk id: 292914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk195045 = require("./195045.js"),
  Chunk678668 = require("./678668.js");
let o = [0, 68, 123, 61, 165, 224, 181],
  s = [684, 720, 774, 798, 720, 803, 815],
  c = () => {
    let e = (0, Chunk195045.Z)(),
      t = Chunk473749.useMemo(() => null == module ? [] : Object.values(null == module ? true : module.clouds), [module]);
    return (0, Chunk54381.jsx)("div", {
      className: Chunk678668.clouds,
      children: exports.map((e, t) => {
        let n = t > o.length - 1 ? 0 : t;
        return (0, i.jsx)("img", {
          className: a.cloud,
          style: {
            top: s[n],
            animationDelay: "".concat(o[n], "s")
          },
          src: e,
          alt: "Cloud"
        }, e)
      })
    })
  }