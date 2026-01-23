/** Chunk was on web.js **/
/** chunk id: 353667, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function b(e) {
  let {
    notice: t,
    children: n
  } = e, {
    showNotice: l,
    handleStoreUpdate: c
  } = (0, d.L_)(), u = null == t ? true : t.stores;
  i.useEffect(() => {
    if (null != u) {
      let e = new a.ru(u, () => {
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
    return (0, r.jsx)(o.FQk, {
      className: y.lm,
      children: (0, r.jsx)(e, {})
    })
  }, [t, l]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n, (0, r.jsx)(s.F, {
      component: "div",
      children: f
    })]
  })
}

function O(e) {
  let {
    scrollerRef: t,
    panelKey: n,
    notice: a,
    children: s
  } = e, l = i.useRef(null);
  return (0, r.jsx)(b, {
    notice: a,
    children: (0, r.jsx)(o.ArX, {
      "data-settings-panel-scroller": true,
      className: y.XG,
      ref: t,
      children: (0, r.jsx)("div", {
        className: y.nd,
        ref: l,
        children: (0, r.jsx)(o.xpW, {
          containerRef: l,
          children: s
        })
      })
    }, n)
  })
}

function v(e) {
  let {
    layout: t
  } = e;
  return (0, r.jsx)("div", {
    className: y.LZ,
    children: t.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(_.A, {
        node: e
      }), n !== t.length - 1 && (0, r.jsx)(h.A, {
        className: y.yF
      })]
    }, e.key))
  })
}

function A(e) {
  var t, n;
  let {
    panelKey: a,
    layout: s,
    notice: l
  } = e, c = null != (t = p.A.useState(e => {
    let {
      currentTabKeys: t
    } = e;
    return t.get(a)
  })) ? t : s[0].key, {
    navigateWithValidation: u
  } = (0, d.L_)();
  i.useEffect(() => {
    let e = p.A.getField("currentTabKeys");
    if (s.some(t => t.key === e.get(a))) return;
    let t = new Map(e);
    t.set(a, s[0].key), p.A.setState({
      currentTabKeys: t
    })
  }, [s, a]);
  let f = e => {
      u(() => {
        var t;
        if (e === c) return;
        let n = new Map(p.A.getField("currentTabKeys"));
        n.set(a, e), p.A.setState({
          currentTabKeys: n
        });
        let r = s.find(t => t.key === e);
        null == r || null == (t = r.onItemSelect) || t.call(r)
      })
    },
    _ = null != (n = s.find(e => e.key === c)) ? n : s[0];
  return (0, r.jsxs)(O, {
    panelKey: a,
    notice: l,
    children: [(0, r.jsx)(o.VQ0, {
      className: y.$H,
      selectedItem: c,
      onItemSelect: f,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: s.map(e => {
        let {
          key: t,
          getTitle: n
        } = e;
        return (0, r.jsx)(o.VQ0.Item, {
          id: t,
          children: n()
        }, t)
      })
    }), (0, r.jsx)(o.VQ0.Panel, {
      id: c,
      children: null != _.StronglyDiscouragedCustomComponent ? (0, r.jsx)(_.StronglyDiscouragedCustomComponent, {}) : (0, r.jsx)(v, {
        layout: _.layout
      })
    })]
  })
}

function I(e) {
  let {
    panelKey: t,
    notice: n,
    layout: a
  } = e, s = i.useRef(null);
  return (0, m.u)(t, a, s), (0, r.jsx)(O, {
    scrollerRef: s,
    panelKey: t,
    notice: n,
    children: (0, r.jsx)(v, {
      layout: a
    })
  })
}

function S(e) {
  let {
    component: t,
    panelKey: n,
    notice: i
  } = e;
  return (0, r.jsx)(O, {
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
  (0, g.Z)(s);
  let o = (0, a.bG)([u.A], () => u.A.hidePersonalInformation);
  if (i.useEffect(() => {
      var e, n;
      if ((null == (e = t.parent) ? true : e.type) !== f.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
      let {
        trailing: r
      } = t.parent, i = "getDismissibleContentTypes" in r ? null == (n = r.getDismissibleContentTypes) ? true : n.call(r) : null;
      null != i && i.forEach(e => {
        (0, c.Dr)(e, {
          dismissAction: E.i.AUTO,
          forceTrack: true
        })
      })
    }, [t]), o && t.hideInStreamerMode) return (0, r.jsx)(l.A, {});
  if (null != t.StronglyDiscouragedCustomComponent) return (0, r.jsx)(S, {
    component: t.StronglyDiscouragedCustomComponent,
    panelKey: t.key,
    notice: t.notice
  });
  if ((0, f.zY)(n)) return (0, r.jsx)(A, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  if ((0, f.Iu)(n)) return (0, r.jsx)(I, {
    panelKey: t.key,
    notice: t.notice,
    layout: n
  });
  throw Error("Panels must have a list of categories or a list of tabs")
}