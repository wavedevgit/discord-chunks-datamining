/** Chunk was on web.js **/
/** chunk id: 271668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
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
  Chunk57507 = require("./57507.js"),
  Chunk239840 = require("./239840.js");
let w = 512,
  L = 7,
  x = 56,
  M = 16,
  k = 32,
  j = 20,
  U = 420,
  G = [8, 8, 0, 8],
  B = l().debounce(() => {
    (0, Chunk367907.yw)(Chunk981631.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED)
  }, 300),
  Z = Chunk473749.forwardRef(function(e, t) {
    let {
      channel: n,
      canOnlyUseTextCommands: a
    } = e, s = i.useRef(false), l = i.useRef(0), [Z, V] = i.useState(0), H = i.useRef(null), [Y, W] = i.useState(false), K = m.Xn.useStore(e => e.activeCategoryIndex);
    i.useEffect(() => {
      (0, d.yw)(N.rMx.APPLICATION_COMMAND_BROWSER_OPENED)
    }, []);
    let {
      sectionDescriptors: z,
      activeSections: q,
      commandsByActiveSection: X,
      hasMoreAfter: Q,
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
        placeholderCount: L,
        limit: C.tn,
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
      scrollOffset: j,
      searchQuery: ""
    }), er = e => {
      let t = q.length * (k + M) + (X.reduce((e, t) => e + t.data.length, 0) - (Q ? L : 0)) * x - w;
      Q && e + U > t && ee(), en(e), B(), l.current = e
    }, ei = i.useRef(er);
    i.useEffect(() => {
      ei.current = er
    }), i.useEffect(() => {
      ei.current(l.current)
    }, [J]);
    let ea = i.useCallback(e => e !== q.length - 1 || Q ? M : 0, [q.length, Q]),
      eo = X.map(e => e.data.length);
    i.useEffect(() => {
      null != H.current && Y && null != Z && H.current.scrollRowIntoView(Z)
    }, [Y, Z]), i.useLayoutEffect(() => {
      if (null != $) {
        var e;
        null == (e = H.current) || e.scrollToSectionTop(0)
      }
    }, [J, $]);
    let es = i.useCallback(e => {
        if (e.id === $ || e.id === C.bi.FRECENCY) {
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
        if (null == Z) return !e && (V(0), true);
        if (null == Z) returnfalse;
        let t = 0,
          n = 0;
        for (let e of X)
          if (t = n, Z < (n += e.data.length)) {
            let n = e.data[Z - t],
              r = z.find(e => e.id === n.applicationId);
            el(n, r, (0, I.tI)(e.section));
            break
          } returntrue
      },
      onMoveSelection: e => {
        if (0 === J.length) returntrue;
        let t = Q ? L : 0,
          n = J.length + t,
          r = null == Z ? 0 : Z + e;
        return r >= n ? r = n - 1 : r < 0 && (r = 0), V(r), W(true), true
      }
    }), [J.length, X, Q, z, el, Z]);
    let ec = i.useCallback(e => {
        let t = q[e];
        if (null == t) return null;
        let i = (0, A.ky)(t),
          a = (0, r.jsx)(i, {
            channel: n,
            section: t,
            width: 16,
            height: 16,
            padding: 0
          });
        return (0, r.jsx)(E.Z, {
          className: P.categoryHeader,
          icon: a,
          children: t.name
        }, e)
      }, [n, q]),
      eu = i.useCallback((e, t) => {
        let n = e === q.length - 1,
          i = q[e],
          {
            data: a
          } = X[e];
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-label": i.name,
          className: o()(P.categorySection, {
            [P.categorySectionLast]: n
          }),
          children: [t, 0 === a.length && (0, r.jsx)(c.Z, {
            message: R.intl.format(R.t.WoQXT6, {
              applicationName: i.name
            }),
            noResultsImageURL: D,
            className: P.noSearchResults
          })]
        }, e)
      }, [q, X]),
      ed = i.useCallback((e, t) => {
        var i;
        let a = X[t.sectionIndex],
          o = a.data[t.sectionRowIndex],
          s = "".concat(a.section.id, ":").concat(null != (i = null == o ? true : o.id) ? i : e);
        if (null == o || a.section.id !== o.applicationId && a.section.id !== C.bi.FRECENCY || o.inputType === v.iw.PLACEHOLDER) return (0, r.jsx)(S.Z, {}, s);
        let l = z.find(e => e.id === o.applicationId);
        return (0, r.jsx)(f.ZP.NewCommand, {
          index: e,
          command: o,
          channel: n,
          className: P.itemWrapper,
          selected: Z === e,
          showImage: a.section.id !== o.applicationId,
          section: l,
          onClick: () => el(o, l, (0, I.tI)(a.section)),
          onHover: () => {
            V(null), W(false)
          }
        }, s)
      }, [n, X, el, z, Z]),
      ef = (0, h.Dt)();
    return (0, _.KR)(ef, true, (0, f.DJ)(Z)), i.useEffect(() => () => {
      (0, _.sJ)()
    }, []), (0, r.jsxs)(f.ZP, {
      id: ef,
      className: P.outerWrapper,
      innerClassName: P.wrapper,
      onMouseDown: F,
      children: [(0, r.jsx)(T.Z, {
        className: P.rail,
        channel: n,
        sections: z,
        filteredSectionId: $,
        activeCategoryIndex: K,
        onSectionClick: es,
        applicationCommandListRef: H
      }), (0, r.jsx)(p.Z, {
        role: "listbox",
        className: P.list,
        listPadding: G,
        onScroll: er,
        renderRow: ed,
        renderSection: eu,
        renderSectionHeader: ec,
        rowCount: q.length,
        rowCountBySection: eo,
        rowHeight: x,
        sectionHeaderHeight: k,
        sectionMarginBottom: ea,
        ref: H,
        stickyHeaders: true
      })]
    })
  });

function F(e) {
  e.preventDefault()
}