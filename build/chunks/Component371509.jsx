/** Chunk was on 78376 **/
/** chunk id: 371509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308757 = require("./308757.js");

function c(e) {
  let {
    redactionType: t,
    label: n
  } = e, c = i.useMemo(() => {
    switch (t) {
      case s.TO.BLUR:
        return l.ImageIcon;
      case s.TO.BLOCK:
        return l.DenyIcon;
      case s.TO.SHOW:
        return l.EyeIcon;
      default:
        return null
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: o.q,
    children: [null != c && (0, r.jsx)(c, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: n
    })]
  })
}
let d = Chunk64700.memo(function(e) {
  let {
    option: t
  } = e;
  return (0, r.jsx)(c, {
    redactionType: t.value,
    label: t.label
  })
})