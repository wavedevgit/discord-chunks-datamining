/** Chunk was on 78376 **/
/** chunk id: 743961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk577806 = require("./577806.jsx"),
  Chunk279423 = require("./279423.jsx");
let c = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useTitleTrailingIcon: i,
    useSubnavLabel: c,
    useSubtitle: d,
    layout: u,
    useInlineNotice: _
  } = t, p = null == n ? true : n(), m = null == i ? true : i(), g = null == d ? true : d(), A = null == _ ? true : _();
  return (0, r.jsxs)(r.Fragment, {
    children: [null != p && (0, r.jsx)(a._, {
      title: p,
      titleTrailingIcon: m,
      subtitle: g
    }), (0, r.jsx)("div", {
      "data-settings-category-key": null != n || null != c ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(l.BJc, {
      gap: 16,
      children: [null != A && (0, r.jsx)(o.A, {
        notice: A
      }), u.map(e => (0, r.jsx)(s.A, {
        node: e
      }, e.key))]
    })]
  })
})