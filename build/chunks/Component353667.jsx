/** Chunk was on 5606 **/
/** chunk id: 353667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => T
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk351906 = require("./351906.js"),
  Chunk823092 = require("./823092.jsx"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk46373 = require("./46373.jsx"),
  Chunk890690 = require("./890690.js"),
  Chunk112715 = require("./112715.js"),
  Chunk49999 = require("./49999.js"),
  Chunk872175 = require("./872175.js");

function E(e) {
  let {
    notice: t,
    children: n
  } = e, {
    showNotice: o,
    handleStoreUpdate: c
  } = (0, u.L_)(), d = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != d) {
      let e = new l.ru(d, () => {
        c(d)
      });
      return e.attach("SettingPanelNotice"), c(d), () => {
        e.detach()
      }
    }
  }, [d, c]);
  let p = i.useMemo(() => {
    if (null == t || !o) return null;
    let {
      element: e
    } = t;
    return (0, r.jsx)(a.FQk, {
      className: A.lm,
      children: (0, r.jsx)(e, {})
    })
  }, [t, o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(s.F, {
      component: "div",
      children: p
    })]
  })
}

function x(e) {
  let {
    scrollerRef: t,
    panelKey: n,
    notice: l,
    children: s
  } = e, o = i.useRef(null);
  return (0, r.jsx)(E, {
    notice: l,
    children: (0, r.jsx)(a.ArX, {
      "data-settings-panel-scroller": true,
      className: A.XG,
      ref: t,
      children: (0, r.jsx)("div", {
        className: A.nd,
        ref: o,
        children: (0, r.jsx)(a.xpW, {
          containerRef: o,
          children: s
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
    className: A.LZ,
    children: t.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(m.A, {
        node: e
      }), n !== t.length - 1 && (0, r.jsx)(g.A, {
        className: A.yF
      })]
    }, e.key))
  })
}

function C(e) {
  var t, n;
  let {
    panelKey: l,
    layout: s,
    notice: o
  } = e, c = null != (t = _.A.useState(e => {
    let {
      currentTabKeys: t
    } = e;
    return t.get(l)
  })) ? t : s[0].key, {
    navigateWithValidation: d
  } = (0, u.L_)();
  i.useEffect(() => {
    let e = _.A.getField("currentTabKeys");
    if (s.some(t => t.key === e.get(l))) return;
    let t = new Map(e);
    t.set(l, s[0].key), _.A.setState({
      currentTabKeys: t
    })
  }, [s, l]);
  let p = null != (n = s.find(e => e.key === c)) ? n : s[0];
  return (0, r.jsxs)(x, {
    panelKey: l,
    notice: o,
    children: [(0, r.jsx)(a.VQ0, {
      className: A.$H,
      selectedItem: c,
      onItemSelect: e => {
        d(() => {
          var t;
          if (e === c) return;
          let n = new Map(_.A.getField("currentTabKeys"));
          n.set(l, e), _.A.setState({
            currentTabKeys: n
          });
          let r = s.find(t => t.key === e);
          null == r || null == (t = r.onItemSelect) || t.call(r)
        })
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: s.map(e => {
        let {
          key: t,
          getTitle: n
        } = e;
        return (0, r.jsx)(a.VQ0.Item, {
          id: t,
          children: n()
        }, t)
      })
    }), (0, r.jsx)(a.VQ0.Panel, {
      id: c,
      children: null != p.StronglyDiscouragedCustomComponent ? (0, r.jsx)(p.StronglyDiscouragedCustomComponent, {}) : (0, r.jsx)(O, {
        layout: p.layout
      })
    })]
  })
}

function y(e) {
  let {
    panelKey: t,
    notice: n,
    layout: l
  } = e, s = i.useRef(null);
  return (0, f.u)(t, l, s), (0, r.jsx)(x, {
    scrollerRef: s,
    panelKey: t,
    notice: n,
    children: (0, r.jsx)(O, {
      layout: l
    })
  })
}

function j(e) {
  let {
    component: t,
    panelKey: n,
    notice: i
  } = e;
  return (0, r.jsx)(x, {
    panelKey: n,
    notice: i,
    children: (0, r.jsx)(t, {})
  })
}

function T(e) {
  let {
    node: t
  } = e, {
    layout: n,
    initialize: s
  } = t;
  (0, b.Z)(s);
  let a = (0, l.bG)([d.A], () => d.A.hidePersonalInformation);
  if (i.useEffect(() => {
      var e, n;
      if ((null == (e = t.parent) ? true : e.type) !== p.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
      let {
        trailing: r
      } = t.parent, i = "getDismissibleContentTypes" in r ? null == (n = r.getDismissibleContentTypes) ? true : n.call(r) : null;
      null != i && i.forEach(e => {
        (0, c.Dr)(e, {
          dismissAction: h.i.AUTO,
          forceTrack: true
        })
      })
    }, [t]), a && t.hideInStreamerMode) return (0, r.jsx)(o.A, {});
  if (null != t.StronglyDiscouragedCustomComponent) return (0, r.jsx)(j, {
    component: t.StronglyDiscouragedCustomComponent,
    panelKey: t.key,
    notice: t.notice
  });
  if ((0, p.zY)(n)) return (0, r.jsx)(C, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  if ((0, p.Iu)(n)) return (0, r.jsx)(y, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  throw Error("Panels must have a list of categories or a list of tabs")
}