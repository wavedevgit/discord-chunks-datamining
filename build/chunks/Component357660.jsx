/** Chunk was on 16985 **/
/** chunk id: 357660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => f
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    showNotice: s,
    handleStoreUpdate: d
  } = (0, c.Cu)(), f = null == t ? true : t.stores;
  l.useEffect(() => {
    if (null != f) {
      let e = new i.Fh(f, () => {
        d(f)
      });
      return e.attach("SettingPanelNotice"), d(f), () => {
        e.detach()
      }
    }
  }, [f, d]);
  let b = l.useMemo(() => {
    if (null == t || !s) return null;
    let {
      element: e
    } = t;
    return (0, r.jsx)(a.oXn, {
      className: u.notice,
      children: (0, r.jsx)(e, {})
    })
  }, [t, s]);
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
  } = e, n = l.useRef(null);
  if (1 !== t.layout.length) throw Error("Panels do not currently support multiple panes");
  return (0, r.jsx)(d, {
    notice: t.notice,
    children: (0, r.jsx)(a.w0Z, {
      className: u.scroller,
      children: (0, r.jsx)("div", {
        className: u.panel,
        ref: n,
        children: (0, r.jsx)(a.JcV, {
          containerRef: n,
          children: (0, r.jsx)(s.Z, {
            node: t.layout[0]
          })
        })
      })
    }, t.key)
  })
}