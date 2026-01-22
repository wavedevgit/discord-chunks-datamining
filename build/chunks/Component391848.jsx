/** Chunk was on web.js **/
/** chunk id: 391848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  x = 7,
  L = 56,
  j = 16,
  M = 32,
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
    } = e, o = i.useRef(false), l = i.useRef(0), [F, H] = i.useState(0), Y = i.useRef(null), [W, K] = i.useState(false), z = m.LS.useStore(e => e.activeCategoryIndex);
    i.useEffect(() => {
      (0, d.zV)(N.HAw.APPLICATION_COMMAND_BROWSER_OPENED)
    }, []);
    let {
      sectionDescriptors: q,
      activeSections: X,
      commandsByActiveSection: Z,
      hasMoreAfter: Q,
      commands: $,
      filteredSectionId: J,
      scrollDown: ee,
      filterSection: et
    } = y.cu({
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
        placeholderCount: x,
        limit: C.Hi,
        includeFrecency: true
      },
      allowFetch: true
    }), en = (0, g.Fk)({
      activeCategoryIndex: z,
      isScrolling: o,
      listRef: Y,
      onActiveCategoryIndexChange: e => {
        let t = X[e];
        if (null != t) {
          let e = q.findIndex(e => e.id === t.id);
          m.LS.setActiveCategoryIndex(e)
        }
      },
      scrollOffset: k,
      searchQuery: ""
    }), er = e => {
      let t = X.length * (M + j) + (Z.reduce((e, t) => e + t.data.length, 0) - (Q ? x : 0)) * L - D;
      Q && e + U > t && ee(), en(e), V(), l.current = e
    }, ei = i.useRef(er);
    i.useEffect(() => {
      ei.current = er
    }), i.useEffect(() => {
      ei.current(l.current)
    }, [$]);
    let ea = i.useCallback(e => e !== X.length - 1 || Q ? j : 0, [X.length, Q]),
      es = Z.map(e => e.data.length);
    i.useEffect(() => {
      null != Y.current && W && null != F && Y.current.scrollRowIntoView(F)
    }, [W, F]), i.useLayoutEffect(() => {
      if (null != J) {
        var e;
        null == (e = Y.current) || e.scrollToSectionTop(0)
      }
    }, [$, J]);
    let eo = i.useCallback(e => {
        if (e.id === J || e.id === C.Ik.FRECENCY) {
          var t;
          et(null), null == (t = Y.current) || t.scrollToSectionTop(0)
        } else et(e.id)
      }, [et, J]),
      el = i.useCallback((e, t, r) => {
        b.Gf({
          channelId: n.id,
          command: e,
          section: t,
          location: A.Oh.DISCOVERY,
          triggerSection: r
        })
      }, [n.id]);
    i.useImperativeHandle(t, () => ({
      onTabOrEnter: e => {
        if (null == F) return !e && (H(0), true);
        if (null == F) returnfalse;
        let t = 0,
          n = 0;
        for (let e of Z)
          if (t = n, F < (n += e.data.length)) {
            let n = e.data[F - t],
              r = q.find(e => e.id === n.applicationId);
            el(n, r, (0, v.$S)(e.section));
            break
          } returntrue
      },
      onMoveSelection: e => {
        if (0 === $.length) returntrue;
        let t = Q ? x : 0,
          n = $.length + t,
          r = null == F ? 0 : F + e;
        return r >= n ? r = n - 1 : r < 0 && (r = 0), H(r), K(true), true
      }
    }), [$.length, Z, Q, q, el, F]);
    let ec = i.useCallback(e => {
        let t = X[e];
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
          className: w.Km,
          icon: a,
          children: t.name
        }, e)
      }, [n, X]),
      eu = i.useCallback((e, t) => {
        let n = e === X.length - 1,
          i = X[e],
          {
            data: a
          } = Z[e];
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-label": i.name,
          className: s()(w.Wy, {
            [w.YD]: n
          }),
          children: [t, 0 === a.length && (0, r.jsx)(c.A, {
            message: R.intl.format(R.t.WoQXT6, {
              applicationName: i.name
            }),
            noResultsImageURL: P,
            className: w.qK
          })]
        }, e)
      }, [X, Z]),
      ed = i.useCallback((e, t) => {
        var i;
        let a = Z[t.sectionIndex],
          s = a.data[t.sectionRowIndex],
          o = "".concat(a.section.id, ":").concat(null != (i = null == s ? true : s.id) ? i : e);
        if (null == s || a.section.id !== s.applicationId && a.section.id !== C.Ik.FRECENCY || s.inputType === A.y$.PLACEHOLDER) return (0, r.jsx)(I.A, {}, o);
        let l = q.find(e => e.id === s.applicationId);
        return (0, r.jsx)(f.Ay.NewCommand, {
          index: e,
          command: s,
          channel: n,
          className: w.D5,
          selected: F === e,
          showImage: a.section.id !== s.applicationId,
          section: l,
          onClick: () => el(s, l, (0, v.$S)(a.section)),
          onHover: () => {
            H(null), K(false)
          }
        }, o)
      }, [n, Z, el, q, F]),
      ef = (0, h.GV)();
    return (0, p.gf)(ef, true, (0, f.aI)(F)), i.useEffect(() => () => {
      (0, p.nQ)()
    }, []), (0, r.jsxs)(f.Ay, {
      id: ef,
      className: w.x9,
      innerClassName: w.iE,
      onMouseDown: B,
      children: [(0, r.jsx)(S.A, {
        className: w.H$,
        channel: n,
        sections: q,
        filteredSectionId: J,
        activeCategoryIndex: z,
        onSectionClick: eo,
        applicationCommandListRef: Y
      }), (0, r.jsx)(_.A, {
        role: "listbox",
        className: w.p_,
        listPadding: G,
        onScroll: er,
        renderRow: ed,
        renderSection: eu,
        renderSectionHeader: ec,
        rowCount: X.length,
        rowCountBySection: es,
        rowHeight: L,
        sectionHeaderHeight: M,
        sectionMarginBottom: ea,
        ref: Y,
        stickyHeaders: true
      })]
    })
  });

function B(e) {
  e.preventDefault()
}