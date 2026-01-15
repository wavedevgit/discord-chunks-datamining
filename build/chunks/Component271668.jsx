/** Chunk was on web.js **/
/** chunk id: 271668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk788911 = require("./788911.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk30465 = require("./30465.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk806966 = require("./806966.js"),
  Chunk98528 = require("./98528.js"),
  Chunk551058 = require("./551058.jsx"),
  Chunk555573 = require("./555573.js"),
  Chunk10718 = require("./10718.js"),
  Chunk367790 = require("./367790.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk56801 = require("./56801.jsx"),
  Chunk342687 = require("./342687.jsx"),
  Chunk826298 = require("./826298.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157787 = require("./157787.js"),
  Chunk239840 = require("./239840.js");
let D = 512,
  x = 7,
  L = 56,
  j = 16,
  M = 32,
  k = 20,
  U = 420,
  G = [8, 8, 0, 8],
  Z = l().debounce(() => {
    (0, d.yw)(N.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED)
  }, 300),
  F = Chunk473749.forwardRef(function(e, t) {
    let {
      channel: n,
      canOnlyUseTextCommands: a
    } = e, s = i.useRef(false), l = i.useRef(0), [F, V] = i.useState(0), H = i.useRef(null), [Y, W] = i.useState(false), K = m.Xn.useStore(e => e.activeCategoryIndex);
    i.useEffect(() => {
      (0, d.yw)(N.rMx.APPLICATION_COMMAND_BROWSER_OPENED)
    }, []);
    let {
      sectionDescriptors: z,
      activeSections: q,
      commandsByActiveSection: Q,
      hasMoreAfter: X,
      commands: J,
      filteredSectionId: $,
      scrollDown: ee,
      filterSection: et
    } = y.wi({
      context: {
        channel: n,
        type: "channel"
      },
      filters: {
        commandTypes: [u.yU.CHAT],
        builtIns: a ? O.D.ONLY_TEXT : O.D.ALLOW,
        applicationCommands: !a
      },
      options: {
        placeholderCount: x,
        limit: A.tn,
        includeFrecency: true
      },
      allowFetch: true
    }), en = (0, g.Qs)({
      activeCategoryIndex: K,
      isScrolling: s,
      listRef: H,
      onActiveCategoryIndexChange: e => {
        let t = q[e];
        if (null != t) {
          let e = z.findIndex(e => e.id === t.id);
          m.Xn.setActiveCategoryIndex(e)
        }
      },
      scrollOffset: k,
      searchQuery: ""
    }), er = e => {
      let t = q.length * (M + j) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? x : 0)) * L - D;
      X && e + U > t && ee(), en(e), Z(), l.current = e
    }, ei = i.useRef(er);
    i.useEffect(() => {
      ei.current = er
    }), i.useEffect(() => {
      ei.current(l.current)
    }, [J]);
    let ea = i.useCallback(e => e !== q.length - 1 || X ? j : 0, [q.length, X]),
      eo = Q.map(e => e.data.length);
    i.useEffect(() => {
      null != H.current && Y && null != F && H.current.scrollRowIntoView(F)
    }, [Y, F]), i.useLayoutEffect(() => {
      if (null != $) {
        var e;
        null == (e = H.current) || e.scrollToSectionTop(0)
      }
    }, [J, $]);
    let es = i.useCallback(e => {
        if (e.id === $ || e.id === A.bi.FRECENCY) {
          var t;
          et(null), null == (t = H.current) || t.scrollToSectionTop(0)
        } else et(e.id)
      }, [et, $]),
      el = i.useCallback((e, t, r) => {
        b.Po({
          channelId: n.id,
          command: e,
          section: t,
          location: v.Vh.DISCOVERY,
          triggerSection: r
        })
      }, [n.id]);
    i.useImperativeHandle(t, () => ({
      onTabOrEnter: e => {
        if (null == F) return !e && (V(0), true);
        if (null == F) returnfalse;
        let t = 0,
          n = 0;
        for (let e of Q)
          if (t = n, F < (n += e.data.length)) {
            let n = e.data[F - t],
              r = z.find(e => e.id === n.applicationId);
            el(n, r, (0, S.tI)(e.section));
            break
          } returntrue
      },
      onMoveSelection: e => {
        if (0 === J.length) returntrue;
        let t = X ? x : 0,
          n = J.length + t,
          r = null == F ? 0 : F + e;
        return r >= n ? r = n - 1 : r < 0 && (r = 0), V(r), W(true), true
      }
    }), [J.length, Q, X, z, el, F]);
    let ec = i.useCallback(e => {
        let t = q[e];
        if (null == t) return null;
        let i = (0, C.ky)(t),
          a = (0, r.jsx)(i, {
            channel: n,
            section: t,
            width: 16,
            height: 16,
            padding: 0
          });
        return (0, r.jsx)(E.Z, {
          className: w.categoryHeader,
          icon: a,
          children: t.name
        }, e)
      }, [n, q]),
      eu = i.useCallback((e, t) => {
        let n = e === q.length - 1,
          i = q[e],
          {
            data: a
          } = Q[e];
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-label": i.name,
          className: o()(w.categorySection, {
            [w.categorySectionLast]: n
          }),
          children: [t, 0 === a.length && (0, r.jsx)(c.Z, {
            message: P.intl.format(P.t.WoQXT6, {
              applicationName: i.name
            }),
            noResultsImageURL: R,
            className: w.noSearchResults
          })]
        }, e)
      }, [q, Q]),
      ed = i.useCallback((e, t) => {
        var i;
        let a = Q[t.sectionIndex],
          o = a.data[t.sectionRowIndex],
          s = "".concat(a.section.id, ":").concat(null != (i = null == o ? true : o.id) ? i : e);
        if (null == o || a.section.id !== o.applicationId && a.section.id !== A.bi.FRECENCY || o.inputType === v.iw.PLACEHOLDER) return (0, r.jsx)(T.Z, {}, s);
        let l = z.find(e => e.id === o.applicationId);
        return (0, r.jsx)(f.ZP.NewCommand, {
          index: e,
          command: o,
          channel: n,
          className: w.itemWrapper,
          selected: F === e,
          showImage: a.section.id !== o.applicationId,
          section: l,
          onClick: () => el(o, l, (0, S.tI)(a.section)),
          onHover: () => {
            V(null), W(false)
          }
        }, s)
      }, [n, Q, el, z, F]),
      ef = (0, h.Dt)();
    return (0, p.KR)(ef, true, (0, f.DJ)(F)), i.useEffect(() => () => {
      (0, p.sJ)()
    }, []), (0, r.jsxs)(f.ZP, {
      id: ef,
      className: w.outerWrapper,
      innerClassName: w.wrapper,
      onMouseDown: B,
      children: [(0, r.jsx)(I.Z, {
        className: w.rail,
        channel: n,
        sections: z,
        filteredSectionId: $,
        activeCategoryIndex: K,
        onSectionClick: es,
        applicationCommandListRef: H
      }), (0, r.jsx)(_.Z, {
        role: "listbox",
        className: w.list,
        listPadding: G,
        onScroll: er,
        renderRow: ed,
        renderSection: eu,
        renderSectionHeader: ec,
        rowCount: q.length,
        rowCountBySection: eo,
        rowHeight: L,
        sectionHeaderHeight: M,
        sectionMarginBottom: ea,
        ref: H,
        stickyHeaders: true
      })]
    })
  });

function B(e) {
  e.preventDefault()
}