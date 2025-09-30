/** Chunk was on 47129 **/
/** chunk id: 357660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => f
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924052 = require("./924052.jsx"),
  Chunk670304 = require("./670304.jsx"),
  Chunk764516 = require("./764516.js");

function d(e) {
  let {
    notice: t,
    children: n
  } = e, {
    showNotice: u,
    handleStoreUpdate: d
  } = (0, a.Cu)(), f = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != f) {
      let e = new l.Fh(f, () => {
        d(f)
      });
      return e.attach("SettingPanelNotice"), d(f), () => {
        e.detach()
      }
    }
  }, [f, d]);
  let b = i.useMemo(() => {
    if (null == t || !u) return null;
    let {
      element: e
    } = t;
    return (0, r.jsx)(s.oXn, {
      className: c.notice,
      children: (0, r.jsx)(e, {})
    })
  }, [t, u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(o.W, {
      component: "div",
      children: b
    })]
  })
}

function f(e) {
  let {
    node: t
  } = e, n = t.render;
  if (null != n) return (0, r.jsx)(n, {});
  if (1 !== t.layout.length) throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
  return (0, r.jsx)(d, {
    notice: t.notice,
    children: (0, r.jsx)(s.w0Z, {
      className: c.scroller,
      children: (0, r.jsx)("div", {
        className: c.panel,
        children: (0, r.jsx)(u.Z, {
          node: t.layout[0]
        })
      })
    }, t.key)
  })
}