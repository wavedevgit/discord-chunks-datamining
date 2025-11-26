/** Chunk was on 45476 **/
/** chunk id: 587243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => v,
  I: () => j
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734934 = require("./734934.js"),
  Chunk158238 = require("./158238.js"),
  Chunk695346 = require("./695346.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk174415 = require("./174415.js"),
  Chunk246133 = require("./246133.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js");
let g = [{
    duration: 15 * Chunk70956.Z.Millis.MINUTE,
    label: () => Chunk388032.intl.string(Chunk388032.t["8ot6gv"])
  }, {
    duration: Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.UMWBZr)
  }, {
    duration: 8 * Chunk70956.Z.Millis.HOUR,
    label: () => Chunk388032.intl.string(Chunk388032.t.EpAXPC)
  }, {
    duration: Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["755t4q"])
  }, {
    duration: 3 * Chunk70956.Z.Millis.DAY,
    label: () => Chunk388032.intl.string(Chunk388032.t["f3/1ch"])
  }, {
    duration: true,
    label: () => Chunk388032.intl.string(Chunk388032.t["46dqJY"])
  }],
  f = "forever";

function b(e) {
  let {
    status: t,
    currentStatus: n,
    description: l
  } = e, r = t !== p.Skl.ONLINE, s = (0, a.jsx)(a.Fragment, {
    children: g.map(e => {
      let {
        duration: l,
        label: r
      } = e;
      return (0, a.jsx)(i.sNh, {
        id: "".concat(t, "-").concat(l),
        label: r(),
        action: () => (0, m.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: l
        }),
        dontCloseOnAction: true
      }, null != l ? l : f)
    })
  });
  return (0, a.jsx)(i.sNh, {
    id: t,
    className: x.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: r,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, a.jsxs)("div", {
        className: x.statusItem,
        children: [(0, a.jsx)(i.qbd, {
          status: t,
          className: x.icon,
          size: 10,
          color: n ? "currentColor" : true
        }), (0, a.jsx)("div", {
          className: x.status,
          children: (0, d.u5)(t)
        }), null != l && (0, a.jsx)("div", {
          className: x.description,
          children: l
        })]
      })
    },
    action: () => {
      (0, m.Z)({
        nextStatus: t,
        prevStatus: n
      })
    },
    dontCloseOnAction: true,
    children: r ? s : true
  })
}

function v(e) {
  if (null == e || "0" === e) return;
  let {
    kind: t,
    dateString: n,
    timeString: a
  } = (0, u.k)(e);
  return "today" === t ? h.intl.formatToPlainString(h.t.ZxxHIO, {
    timeString: a
  }) : h.intl.formatToPlainString(h.t["9OFjSe"], {
    dateString: n,
    timeString: a
  })
}

function j(e) {
  let t = o.Cr.useSetting(),
    n = (0, r.p)(),
    c = s.e.useExperiment({
      location: "UserProfileAccountPopout"
    }).allowQuietMode || n,
    d = o.fv.useSetting(),
    u = e === p.Skl.DND,
    m = n => {
      let a = v(t);
      if (e === n && null != a) return a;
      switch (n) {
        case p.Skl.DND:
          return c ? h.intl.string(h.t.day5A6) : h.intl.string(h.t["tq/fMK"]);
        case p.Skl.INVISIBLE:
          return h.intl.string(h.t.zPc6Mc);
        default:
          return
      }
    },
    j = (0, a.jsx)(a.Fragment, {
      children: g.map(t => {
        let {
          duration: n,
          label: l
        } = t;
        return (0, a.jsx)(i.sNh, {
          id: "".concat(e, "-").concat(n),
          label: l(),
          action: () => {
            (0, r.oW)(true, n)
          },
          dontCloseOnAction: true
        }, null != n ? n : f)
      })
    }),
    _ = b({
      status: p.Skl.ONLINE,
      currentStatus: e
    }),
    y = b({
      status: p.Skl.IDLE,
      currentStatus: e,
      description: m(p.Skl.IDLE)
    }),
    C = b({
      status: p.Skl.DND,
      currentStatus: e,
      description: m(p.Skl.DND)
    }),
    S = b({
      status: p.Skl.INVISIBLE,
      currentStatus: e,
      description: m(p.Skl.INVISIBLE)
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [_, (0, a.jsx)(i.Clw, {}, "menu-separator-statuses"), y, C, S, c || n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Clw, {}, "menu-separator-statuses"), (0, a.jsx)(i.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: x.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, a.jsxs)("div", {
          className: x.statusItem,
          children: [(0, a.jsx)(i.owu, {
            size: "xxs",
            className: x.icon
          }), (0, a.jsxs)("div", {
            className: x.focusModeTitle,
            children: [h.intl.string(h.t.gJRnwK), (0, a.jsx)(i.IGR, {
              text: n ? h.intl.string(h.t.ApAu9f) : u ? h.intl.string(h.t.gH3Frd) : h.intl.string(h.t["64pl82"]),
              color: n ? l.Z.BRAND_500 : u ? l.Z.RED_400 : l.Z.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: x.description,
            children: n && null != d && "0" !== d ? h.intl.formatToPlainString(h.t.BWD8fs, {
              endTime: new Date(Number(d)).toLocaleString(h.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : h.intl.string(h.t["Br1q+x"])
          })]
        }),
        action: () => {
          (0, r.oW)(!n)
        },
        dontCloseOnAction: true,
        children: j
      }, "quiet-mode")]
    }) : null]
  })
}