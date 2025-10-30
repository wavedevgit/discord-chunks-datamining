/** Chunk was on 95017 **/
/** chunk id: 587243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => v,
  I: () => j
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734934 = require("./734934.js"),
  Chunk158238 = require("./158238.js"),
  Chunk695346 = require("./695346.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk246133 = require("./246133.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54482 = require("./54482.js");
let x = [{
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
  g = "forever";

function f(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function b(e) {
  let {
    status: t,
    currentStatus: n,
    description: r
  } = e, i = t !== m.Skl.ONLINE, o = (0, a.jsx)(a.Fragment, {
    children: x.map(e => {
      let {
        duration: r,
        label: i
      } = e;
      return (0, a.jsx)(l.sNh, {
        id: "".concat(t, "-").concat(r),
        label: i(),
        action: () => (0, u.Z)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: r
        }),
        dontCloseOnAction: true
      }, null != r ? r : g)
    })
  });
  return (0, a.jsx)(l.sNh, {
    id: t,
    className: h.expiringStatusMenuItem,
    keepItemStyles: true,
    hasSubmenu: i,
    label: e => {
      let {
        isFocused: n
      } = e;
      return (0, a.jsxs)("div", {
        className: h.statusItem,
        children: [(0, a.jsx)(l.qbd, {
          status: t,
          className: h.icon,
          size: 10,
          color: n ? "currentColor" : true
        }), (0, a.jsx)("div", {
          className: h.status,
          children: (0, d.u5)(t)
        }), null != r && (0, a.jsx)("div", {
          className: h.description,
          children: r
        })]
      })
    },
    action: () => {
      (0, u.Z)({
        nextStatus: t,
        prevStatus: n
      })
    },
    dontCloseOnAction: true,
    children: i ? o : true
  })
}

function v(e) {
  if (null == e || "0" === e) return;
  let t = new Date(Number(e)),
    n = f(t, new Date),
    a = new Date;
  a.setDate(a.getDate() + 1);
  let r = f(t, a);
  return n ? p.intl.formatToPlainString(p.t.ZxxHIO, {
    timeString: p.intl.data.formatTime(t, {
      format: "short"
    })
  }) : p.intl.formatToPlainString(p.t["9OFjSe"], {
    dateString: r ? p.intl.data.formatRelativeTime(1, "day", {
      numeric: "auto"
    }) : p.intl.data.formatDate(t, {
      dateStyle: "short"
    }),
    timeString: p.intl.data.formatTime(t, {
      format: "short"
    })
  })
}

function j(e) {
  let t = s.Cr.useSetting(),
    n = (0, i.p)(),
    c = o.e.useExperiment({
      location: "UserProfileAccountPopout"
    }).allowQuietMode || n,
    d = s.fv.useSetting(),
    u = e === m.Skl.DND,
    f = n => {
      let a = v(t);
      if (e === n && null != a) return a;
      switch (n) {
        case m.Skl.DND:
          return c ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
        case m.Skl.INVISIBLE:
          return p.intl.string(p.t.zPc6Mc);
        default:
          return
      }
    },
    j = (0, a.jsx)(a.Fragment, {
      children: x.map(t => {
        let {
          duration: n,
          label: r
        } = t;
        return (0, a.jsx)(l.sNh, {
          id: "".concat(e, "-").concat(n),
          label: r(),
          action: () => {
            (0, i.oW)(true, n)
          },
          dontCloseOnAction: true
        }, null != n ? n : g)
      })
    }),
    _ = b({
      status: m.Skl.ONLINE,
      currentStatus: e
    }),
    y = b({
      status: m.Skl.IDLE,
      currentStatus: e,
      description: f(m.Skl.IDLE)
    }),
    C = b({
      status: m.Skl.DND,
      currentStatus: e,
      description: f(m.Skl.DND)
    }),
    S = b({
      status: m.Skl.INVISIBLE,
      currentStatus: e,
      description: f(m.Skl.INVISIBLE)
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [_, (0, a.jsx)(l.Clw, {}, "menu-separator-statuses"), y, C, S, c || n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.Clw, {}, "menu-separator-statuses"), (0, a.jsx)(l.sNh, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: h.expiringStatusMenuItem,
        keepItemStyles: true,
        hasSubmenu: true,
        label: () => (0, a.jsxs)("div", {
          className: h.statusItem,
          children: [(0, a.jsx)(l.owu, {
            size: "xxs",
            className: h.icon
          }), (0, a.jsxs)("div", {
            className: h.focusModeTitle,
            children: [p.intl.string(p.t.gJRnwK), (0, a.jsx)(l.IGR, {
              text: n ? p.intl.string(p.t.ApAu9f) : u ? p.intl.string(p.t.gH3Frd) : p.intl.string(p.t["64pl82"]),
              color: n ? r.Z.BRAND_500 : u ? r.Z.RED_400 : r.Z.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: h.description,
            children: n && null != d && "0" !== d ? p.intl.formatToPlainString(p.t.BWD8fs, {
              endTime: new Date(Number(d)).toLocaleString(p.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : p.intl.string(p.t["Br1q+x"])
          })]
        }),
        action: () => {
          (0, i.oW)(!n)
        },
        dontCloseOnAction: true,
        children: j
      }, "quiet-mode")]
    }) : null]
  })
}