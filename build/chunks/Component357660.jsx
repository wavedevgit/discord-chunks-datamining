/** Chunk was on web.js **/
/** chunk id: 357660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => T
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk246946 = require("./246946.js"),
  Chunk924052 = require("./924052.jsx"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk700425 = require("./700425.js"),
  Chunk921944 = require("./921944.js"),
  Chunk764516 = require("./764516.js");

function b(e) {
  let {
    notice: t,
    children: n
  } = e, {
    showNotice: l,
    handleStoreUpdate: c
  } = (0, d.Cu)(), u = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != u) {
      let e = new o.Fh(u, () => {
        c(u)
      });
      return e.attach("SettingPanelNotice"), c(u), () => {
        e.detach()
      }
    }
  }, [u, c]);
  let f = i.useMemo(() => {
    if (null == t || !l) return null;
    let {
      element: e
    } = t;
    return (0, r.jsx)(s.oXn, {
      className: E.notice,
      children: (0, r.jsx)(e, {})
    })
  }, [t, l]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(a.W, {
      component: "div",
      children: f
    })]
  })
}

function y(e) {
  let {
    scrollerRef: t,
    panelKey: n,
    notice: o,
    children: a
  } = e, l = i.useRef(null);
  return (0, r.jsx)(b, {
    notice: o,
    children: (0, r.jsx)(s.w0Z, {
      "data-settings-panel-scroller": true,
      className: E.scroller,
      ref: t,
      children: (0, r.jsx)("div", {
        className: E.panel,
        ref: l,
        children: (0, r.jsx)(s.JcV, {
          containerRef: l,
          children: a
        })
      })
    }, n)
  })
}

function O(e) {
  let {
    layout: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.categories,
    children: t.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        node: e
      }), n !== t.length - 1 && (0, r.jsx)(m.Z, {
        className: E.divider
      })]
    }, e.key))
  })
}

function v(e) {
  var t, n;
  let {
    panelKey: o,
    layout: a,
    notice: l
  } = e, c = null != (t = p.Z.useState(e => {
    let {
      currentTabKeys: t
    } = e;
    return t.get(o)
  })) ? t : a[0].key;
  i.useEffect(() => {
    let e = p.Z.getField("currentTabKeys");
    if (a.some(t => t.key === e.get(o))) return;
    let t = new Map(e);
    t.set(o, a[0].key), p.Z.setState({
      currentTabKeys: t
    })
  }, [a, o]);
  let u = e => {
      let t = new Map(p.Z.getField("currentTabKeys"));
      t.set(o, e), p.Z.setState({
        currentTabKeys: t
      })
    },
    d = null != (n = a.find(e => e.key === c)) ? n : a[0];
  return (0, r.jsxs)(y, {
    panelKey: o,
    notice: l,
    children: [(0, r.jsx)(s.njP, {
      className: E.tabBar,
      selectedItem: c,
      onItemSelect: u,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: a.map(e => {
        let {
          key: t,
          getTitle: n
        } = e;
        return (0, r.jsx)(s.njP.Item, {
          id: t,
          children: n()
        }, t)
      })
    }), (0, r.jsx)(s.njP.Panel, {
      id: c,
      children: null != d.StronglyDiscouragedCustomComponent ? (0, r.jsx)(d.StronglyDiscouragedCustomComponent, {}) : (0, r.jsx)(O, {
        layout: d.layout
      })
    })]
  })
}

function S(e) {
  let {
    panelKey: t,
    notice: n,
    layout: o
  } = e, a = i.useRef(null);
  return (0, h.i)(t, o, a), (0, r.jsx)(y, {
    scrollerRef: a,
    panelKey: t,
    notice: n,
    children: (0, r.jsx)(O, {
      layout: o
    })
  })
}

function I(e) {
  let {
    component: t,
    panelKey: n,
    notice: i
  } = e;
  return (0, r.jsx)(y, {
    panelKey: n,
    notice: i,
    children: (0, r.jsx)(t, {})
  })
}

function T(e) {
  let {
    node: t
  } = e, {
    layout: n
  } = t, a = (0, o.e7)([u.Z], () => u.Z.hidePersonalInformation);
  if (i.useEffect(() => {
      var e, n;
      if ((null == (e = t.parent) ? true : e.type) !== f.Jq.SIDEBAR_ITEM || null == t.parent.trailing) return;
      let {
        trailing: r
      } = t.parent, i = "getDismissibleContentTypes" in r ? null == (n = r.getDismissibleContentTypes) ? true : n.call(r) : null;
      null != i && i.forEach(e => {
        (0, c.Q3)(e, {
          dismissAction: g.L.AUTO,
          forceTrack: true
        })
      })
    }, [t]), a && t.hideInStreamerMode) return (0, r.jsx)(l.Z, {});
  if (null != t.StronglyDiscouragedCustomComponent) return (0, r.jsx)(I, {
    component: t.StronglyDiscouragedCustomComponent,
    panelKey: t.key,
    notice: t.notice
  });
  if ((0, f.sp)(n)) return (0, r.jsx)(v, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  if ((0, f.iU)(n)) return (0, r.jsx)(S, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  throw Error("Panels must have a list of categories or a list of tabs")
}