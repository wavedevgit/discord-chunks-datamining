/** Chunk was on web.js **/
/** chunk id: 391848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk537652 = require("./537652.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk579940 = require("./579940.js"),
  Chunk962125 = require("./962125.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk850992 = require("./850992.js"),
  Chunk887695 = require("./887695.js"),
  Chunk286509 = require("./286509.jsx"),
  Chunk721768 = require("./721768.js"),
  Chunk842209 = require("./842209.js"),
  Chunk210978 = require("./210978.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk546587 = require("./546587.jsx"),
  Chunk746388 = require("./746388.jsx"),
  Chunk664929 = require("./664929.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993538 = require("./993538.js"),
  Chunk911385 = require("./911385.js");
let D = 512,
  L = 7,
  x = 56,
  M = 16,
  j = 32,
  k = 20,
  U = 420,
  G = [8, 8, 0, 8],
  V = l().debounce(() => {
    (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED)
  }, 300),
  F = Chunk64700.forwardRef(function(e, t) {
    let {
      channel: n,
      canOnlyUseTextCommands: a
    } = e, s = i.useRef(false), l = i.useRef(0), [F, H] = i.useState(0), Y = i.useRef(null), [W, K] = i.useState(false), z = m.LS.useStore(e => e.activeCategoryIndex);
    i.useEffect(() => {
      (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_OPENED)
    }, []);
    let {
      sectionDescriptors: q,
      activeSections: Z,
      commandsByActiveSection: Q,
      hasMoreAfter: X,
      commands: J,
      filteredSectionId: $,
      scrollDown: ee,
      filterSection: et
    } = b.cu({
      context: {
        channel: n,
        type: "channel"
      },
      filters: {
        commandTypes: [u.kc.CHAT],
        builtIns: a ? O.n.ONLY_TEXT : O.n.ALLOW,
        applicationCommands: !a
      },
      options: {
        placeholderCount: L,
        limit: C.Hi,
        includeFrecency: true
      },
      allowFetch: true
    }), en = (0, g.Fk)({
      activeCategoryIndex: z,
      isScrolling: s,
      listRef: Y,
      onActiveCategoryIndexChange: e => {
        let t = Z[e];
        if (null != t) {
          let e = q.findIndex(e => e.id === t.id);
          m.LS.setActiveCategoryIndex(e)
        }
      },
      scrollOffset: k,
      searchQuery: ""
    }), er = e => {
      let t = Z.length * (j + M) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? L : 0)) * x - D;
      X && e + U > t && ee(), en(e), V(), l.current = e
    }, ei = i.useRef(er);
    i.useEffect(() => {
      ei.current = er
    }), i.useEffect(() => {
      ei.current(l.current)
    }, [J]);
    let ea = i.useCallback(e => e !== Z.length - 1 || X ? M : 0, [Z.length, X]),
      eo = Q.map(e => e.data.length);
    i.useEffect(() => {
      null != Y.current && W && null != F && Y.current.scrollRowIntoView(F)
    }, [W, F]), i.useLayoutEffect(() => {
      if (null != $) {
        var e;
        null == (e = Y.current) || e.scrollToSectionTop(0)
      }
    }, [J, $]);
    let es = i.useCallback(e => {
        if (e.id === $ || e.id === C.Ik.FRECENCY) {
          var t;
          et(null), null == (t = Y.current) || t.scrollToSectionTop(0)
        } else et(e.id)
      }, [et, $]),
      el = i.useCallback((e, t, r) => {
        y.Gf({
          channelId: n.id,
          command: e,
          section: t,
          location: v.Oh.DISCOVERY,
          triggerSection: r
        })
      }, [n.id]);
    i.useImperativeHandle(t, () => ({
      onTabOrEnter: e => {
        if (null == F) return !e && (H(0), true);
        if (null == F) returnfalse;
        let t = 0,
          n = 0;
        for (let e of Q)
          if (t = n, F < (n += e.data.length)) {
            let n = e.data[F - t],
              r = q.find(e => e.id === n.applicationId);
            el(n, r, (0, A.$S)(e.section));
            break
          } returntrue
      },
      onMoveSelection: e => {
        if (0 === J.length) returntrue;
        let t = X ? L : 0,
          n = J.length + t,
          r = null == F ? 0 : F + e;
        return r >= n ? r = n - 1 : r < 0 && (r = 0), H(r), K(true), true
      }
    }), [J.length, Q, X, q, el, F]);
    let ec = i.useCallback(e => {
        let t = Z[e];
        if (null == t) return null;
        let i = (0, T.Rg)(t),
          a = (0, r.jsx)(i, {
            channel: n,
            section: t,
            width: 16,
            height: 16,
            padding: 0
          });
        return (0, r.jsx)(E.A, {
          className: R.Km,
          icon: a,
          children: t.name
        }, e)
      }, [n, Z]),
      eu = i.useCallback((e, t) => {
        let n = e === Z.length - 1,
          i = Z[e],
          {
            data: a
          } = Q[e];
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-label": i.name,
          className: o()(R.Wy, {
            [R.YD]: n
          }),
          children: [t, 0 === a.length && (0, r.jsx)(c.A, {
            message: w.intl.format(w.t.WoQXT6, {
              applicationName: i.name
            }),
            noResultsImageURL: P,
            className: R.qK
          })]
        }, e)
      }, [Z, Q]),
      ed = i.useCallback((e, t) => {
        var i;
        let a = Q[t.sectionIndex],
          o = a.data[t.sectionRowIndex],
          s = "".concat(a.section.id, ":").concat(null != (i = null == o ? true : o.id) ? i : e);
        if (null == o || a.section.id !== o.applicationId && a.section.id !== C.Ik.FRECENCY || o.inputType === v.y$.PLACEHOLDER) return (0, r.jsx)(S.A, {}, s);
        let l = q.find(e => e.id === o.applicationId);
        return (0, r.jsx)(f.Ay.NewCommand, {
          index: e,
          command: o,
          channel: n,
          className: R.D5,
          selected: F === e,
          showImage: a.section.id !== o.applicationId,
          section: l,
          onClick: () => el(o, l, (0, A.$S)(a.section)),
          onHover: () => {
            H(null), K(false)
          }
        }, s)
      }, [n, Q, el, q, F]),
      ef = (0, h.GV)();
    return (0, p.gf)(ef, true, (0, f.aI)(F)), i.useEffect(() => () => {
      (0, p.nQ)()
    }, []), (0, r.jsxs)(f.Ay, {
      id: ef,
      className: R.x9,
      innerClassName: R.iE,
      onMouseDown: B,
      children: [(0, r.jsx)(I.A, {
        className: R.H$,
        channel: n,
        sections: q,
        filteredSectionId: $,
        activeCategoryIndex: z,
        onSectionClick: es,
        applicationCommandListRef: Y
      }), (0, r.jsx)(_.A, {
        role: "listbox",
        className: R.p_,
        listPadding: G,
        onScroll: er,
        renderRow: ed,
        renderSection: eu,
        renderSectionHeader: ec,
        rowCount: Z.length,
        rowCountBySection: eo,
        rowHeight: x,
        sectionHeaderHeight: j,
        sectionMarginBottom: ea,
        ref: Y,
        stickyHeaders: true
      })]
    })
  });

function B(e) {
  e.preventDefault()
}