/** Chunk was on 51724 **/
n.d(t, {
  I: () => N
}), n(266796);
var r = n(200651);
n(192379);
var i = n(722770),
  s = n(481060),
  a = n(440051),
  l = n(734934),
  o = n(158238),
  c = n(695346),
  d = n(70956),
  u = n(51144),
  m = n(246133),
  p = n(981631),
  g = n(388032),
  h = n(652480);
let f = [{
  duration: 30 * d.Z.Millis.MINUTE,
  label: () => g.NW.string(g.t.RxJGbG)
}, {
  duration: d.Z.Millis.HOUR,
  label: () => g.NW.string(g.t.UMWBZm)
}, {
  duration: 3 * d.Z.Millis.HOUR,
  label: () => g.NW.string(g.t.QmYWtr)
}, {
  duration: 8 * d.Z.Millis.HOUR,
  label: () => g.NW.string(g.t.EpAXPD)
}, {
  duration: d.Z.Millis.DAY,
  label: () => g.NW.string(g.t["755t4u"])
}, {
  duration: void 0,
  label: () => g.NW.string(g.t["46dqJS"])
}];

function x(e) {
  let {
    status: t,
    currentStatus: n,
    description: i,
    defaultClickExpire: a
  } = e, l = (0, r.jsx)(r.Fragment, {
    children: f.map(e => {
      let {
        duration: i,
        label: a
      } = e;
      return (0, r.jsx)(s.sNh, {
        id: "".concat(t, "-").concat(i),
        label: a(),
        action: () => (0, m.Z)(t, n, void 0, i),
        dontCloseOnAction: !0
      }, i)
    })
  });
  return (0, r.jsx)(s.sNh, {
    id: t,
    className: h.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, r.jsxs)("div", {
        className: h.statusItem,
        children: [(0, r.jsx)(s.qbd, {
          status: t,
          className: h.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, r.jsx)("div", {
          className: h.status,
          children: (0, u.u5)(t)
        }), null != i && (0, r.jsx)("div", {
          className: h.description,
          children: i
        })]
      })
    },
    action: () => (0, m.Z)(t, n, void 0, a ? d.Z.Millis.DAY : void 0),
    dontCloseOnAction: !0,
    children: t !== p.Skl.ONLINE ? l : void 0
  })
}

function b(e, t, n) {
  return (0, r.jsx)(s.sNh, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: i
      } = t;
      return (0, r.jsxs)("div", {
        className: h.statusItem,
        children: [(0, r.jsx)(s.qbd, {
          status: e,
          className: h.icon,
          size: 10,
          color: i ? "currentColor" : void 0
        }), (0, r.jsx)("div", {
          className: h.status,
          children: (0, u.u5)(e)
        }), null != n && (0, r.jsx)("div", {
          className: h.description,
          children: n
        })]
      })
    },
    action: () => (0, m.Z)(e, t),
    dontCloseOnAction: !0
  })
}

function N(e) {
  let {
    expiringStatus: t,
    defaultClickExpire: n
  } = a.i.useExperiment({
    location: "AccountProfilePopout"
  }), d = c.Cr.useSetting(), u = (0, l.p)(), m = o.e.useExperiment({
    location: "AccountProfilePopout"
  }).allowQuietMode || u, N = c.fv.useSetting(), _ = e === p.Skl.DND, E = t => {
    let n = null != d && "0" !== d ? g.NW.formatToPlainString(g.t.BWD8fn, {
      endTime: new Date(Number(d)).toLocaleString(g.NW.currentLocale, {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      })
    }) : void 0;
    if (e === t && null != n) return n;
    switch (t) {
      case p.Skl.DND:
        return m ? g.NW.string(g.t.day5Aw) : g.NW.string(g.t.U9Vv19);
      case p.Skl.INVISIBLE:
        return g.NW.string(g.t.MqanVF);
      default:
        return
    }
  }, j = (0, r.jsx)(r.Fragment, {
    children: f.map(t => {
      let {
        duration: n,
        label: i
      } = t;
      return (0, r.jsx)(s.sNh, {
        id: "".concat(e, "-").concat(n),
        label: i(),
        action: () => {
          (0, l.oW)(!0, n)
        },
        dontCloseOnAction: !0
      }, n)
    })
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [b(p.Skl.ONLINE, e), (0, r.jsx)(s.Clw, {}, "menu-separator-statuses"), t ? x({
      status: p.Skl.IDLE,
      currentStatus: e,
      description: E(p.Skl.IDLE),
      defaultClickExpire: n
    }) : b(p.Skl.IDLE, e, E(p.Skl.IDLE)), t ? x({
      status: p.Skl.DND,
      currentStatus: e,
      description: E(p.Skl.DND),
      defaultClickExpire: n
    }) : b(p.Skl.DND, e, E(p.Skl.DND)), t ? x({
      status: p.Skl.INVISIBLE,
      currentStatus: e,
      description: E(p.Skl.INVISIBLE),
      defaultClickExpire: n
    }) : b(p.Skl.INVISIBLE, e, E(p.Skl.INVISIBLE)), m || u ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Clw, {}, "menu-separator-statuses"), (0, r.jsx)(s.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: () => (0, r.jsxs)("div", {
          className: h.statusItem,
          children: [(0, r.jsx)(s.owu, {
            size: "xxs",
            className: h.icon
          }), (0, r.jsxs)("div", {
            className: h.focusModeTitle,
            children: [g.NW.string(g.t.gJRnwM), (0, r.jsx)(s.IGR, {
              text: u ? g.NW.string(g.t.ApAu9f) : _ ? g.NW.string(g.t.gH3Fra) : g.NW.string(g.t["64pl8/"]),
              color: u ? i.Z.BRAND_500 : _ ? i.Z.RED_400 : i.Z.PRIMARY_500
            })]
          }), (0, r.jsx)("div", {
            className: h.description,
            children: u && null != N && "0" !== N ? g.NW.formatToPlainString(g.t.BWD8fn, {
              endTime: new Date(Number(N)).toLocaleString(g.NW.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : g.NW.string(g.t["Br1q+/"])
          })]
        }),
        action: () => {
          (0, l.oW)(!u)
        },
        dontCloseOnAction: !0,
        children: j
      }, "quiet-mode")]
    }) : null]
  })
}