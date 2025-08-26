/** Chunk was on 76210 **/
/** chunk id: 357660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => T
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
  } = (0, o.Cu)(), T = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != T) {
      let e = new r.Fh(T, () => {
        d(T)
      });
      return e.attach("SettingPanelNotice"), d(T), () => {
        e.detach()
      }
    }
  }, [T, d]);
  let O = i.useMemo(() => {
    if (null == t || !u) return null;
    let {
      element: e
    } = t;
    return (0, l.jsx)(a.oXn, {
      className: c.notice,
      children: (0, l.jsx)(e, {})
    })
  }, [t, u]);
  return (0, l.jsxs)(l.Fragment, {
    children: [n, (0, l.jsx)(s.W, {
      component: "div",
      children: O
    })]
  })
}

function T(e) {
  let {
    node: t
  } = e, n = t.render;
  if (null != n) return (0, l.jsx)(n, {});
  if (1 !== t.layout.length) throw Error("Panels with multiple panes must define a render prop to handle the multiple panes");
  return (0, l.jsx)(d, {
    notice: t.notice,
    children: (0, l.jsx)(a.w0Z, {
      className: c.scroller,
      children: (0, l.jsx)("div", {
        className: c.panel,
        children: (0, l.jsx)(u.Z, {
          node: t.layout[0]
        })
      })
    }, t.key)
  })
}