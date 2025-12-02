/** Chunk was on web.js **/
/** chunk id: 357660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => p
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924052 = require("./924052.jsx"),
  Chunk700425 = require("./700425.js"),
  Chunk670304 = require("./670304.jsx"),
  Chunk764516 = require("./764516.js");

function f(e) {
  let {
    notice: t,
    children: n
  } = e, {
    showNotice: c,
    handleStoreUpdate: u
  } = (0, l.Cu)(), f = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != f) {
      let e = new a.Fh(f, () => {
        u(f)
      });
      return e.attach("SettingPanelNotice"), u(f), () => {
        e.detach()
      }
    }
  }, [f, u]);
  let p = i.useMemo(() => {
    if (null == t || !c) return null;
    let {
      element: e
    } = t;
    return (0, r.jsx)(s.oXn, {
      className: d.notice,
      children: (0, r.jsx)(e, {})
    })
  }, [t, c]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(o.W, {
      component: "div",
      children: p
    })]
  })
}

function p(e) {
  let {
    node: t
  } = e, n = i.useRef(null), a = i.useRef(null);
  if (1 !== t.layout.length) throw Error("Panels do not currently support multiple panes");
  return (0, c.i)(t, a), (0, r.jsx)(f, {
    notice: t.notice,
    children: (0, r.jsx)(s.w0Z, {
      "data-settings-panel-scroller": true,
      className: d.scroller,
      ref: a,
      children: (0, r.jsx)("div", {
        className: d.panel,
        ref: n,
        children: (0, r.jsx)(s.JcV, {
          containerRef: n,
          children: (0, r.jsx)(u.Z, {
            node: t.layout[0]
          })
        })
      })
    }, t.key)
  })
}