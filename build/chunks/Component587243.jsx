/** Chunk was on 88282 **/
/** chunk id: 587243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => b,
  I: () => v
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
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
  f = "forever";

function g(e) {
  let {
    status: t,
    currentStatus: n,
    description: r
  } = e, i = t !== m.Skl.ONLINE, s = (0, a.jsx)(a.Fragment, {
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
      }, null != r ? r : f)
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
          children: (0, c.u5)(t)
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
    children: i ? s : true
  })
}

function b(e) {
  if (null == e || "0" === e) return;
  let {
    kind: t,
    dateString: n,
    timeString: a
  } = (0, d.k)(e);
  return "today" === t ? p.intl.formatToPlainString(p.t.ZxxHIO, {
    timeString: a
  }) : p.intl.formatToPlainString(p.t["9OFjSe"], {
    dateString: n,
    timeString: a
  })
}

function v(e) {
  let t = s.Cr.useSetting(),
    n = (0, r.p)(),
    o = i.e.useExperiment({
      location: "UserProfileAccountPopout"
    }).allowQuietMode || n,
    c = s.fv.useSetting(),
    d = e === m.Skl.DND,
    u = n => {
      let a = b(t);
      if (e === n && null != a) return a;
      switch (n) {
        case m.Skl.DND:
          return o ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
        case m.Skl.INVISIBLE:
          return p.intl.string(p.t.zPc6Mc);
        default:
          return
      }
    },
    v = (0, a.jsx)(a.Fragment, {
      children: x.map(t => {
        let {
          duration: n,
          label: i
        } = t;
        return (0, a.jsx)(l.sNh, {
          id: "".concat(e, "-").concat(n),
          label: i(),
          action: () => {
            (0, r.oW)(true, n)
          },
          dontCloseOnAction: true
        }, null != n ? n : f)
      })
    }),
    j = g({
      status: m.Skl.ONLINE,
      currentStatus: e
    }),
    _ = g({
      status: m.Skl.IDLE,
      currentStatus: e,
      description: u(m.Skl.IDLE)
    }),
    y = g({
      status: m.Skl.DND,
      currentStatus: e,
      description: u(m.Skl.DND)
    }),
    C = g({
      status: m.Skl.INVISIBLE,
      currentStatus: e,
      description: u(m.Skl.INVISIBLE)
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [j, (0, a.jsx)(l.Clw, {}, "menu-separator-statuses"), _, y, C, o || n ? (0, a.jsxs)(a.Fragment, {
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
              text: n ? p.intl.string(p.t.ApAu9f) : d ? p.intl.string(p.t.gH3Frd) : p.intl.string(p.t["64pl82"]),
              color: n ? l.TVs.unsafe_rawColors.BRAND_500.css : d ? l.TVs.unsafe_rawColors.RED_400.css : l.TVs.unsafe_rawColors.PRIMARY_500.css
            })]
          }), (0, a.jsx)("div", {
            className: h.description,
            children: n && null != c && "0" !== c ? p.intl.formatToPlainString(p.t.BWD8fs, {
              endTime: new Date(Number(c)).toLocaleString(p.intl.currentLocale, {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : p.intl.string(p.t["Br1q+x"])
          })]
        }),
        action: () => {
          (0, r.oW)(!n)
        },
        dontCloseOnAction: true,
        children: v
      }, "quiet-mode")]
    }) : null]
  })
}