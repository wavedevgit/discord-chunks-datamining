/** Chunk was on 90228 **/
/** chunk id: 33042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => f,
  T: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk970931 = require("./970931.js"),
  Chunk341967 = require("./341967.js"),
  Chunk253932 = require("./253932.js"),
  Chunk927813 = require("./927813.js"),
  Chunk427262 = require("./427262.js"),
  Chunk146901 = require("./146901.js"),
  Chunk827827 = require("./827827.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = [{
    duration: 15 * Chunk927813.A.Millis.MINUTE,
    label: () => p.intl.string(p.t["8ot6gv"])
  }, {
    duration: Chunk927813.A.Millis.HOUR,
    label: () => p.intl.string(p.t.UMWBZr)
  }, {
    duration: 8 * Chunk927813.A.Millis.HOUR,
    label: () => p.intl.string(p.t.EpAXPC)
  }, {
    duration: Chunk927813.A.Millis.DAY,
    label: () => p.intl.string(p.t["755t4q"])
  }, {
    duration: 3 * Chunk927813.A.Millis.DAY,
    label: () => p.intl.string(p.t["f3/1ch"])
  }, {
    duration: true,
    label: () => p.intl.string(p.t["46dqJY"])
  }],
  x = "forever";

function g(e) {
  let {
    status: t,
    currentStatus: n,
    description: r
  } = e, i = t !== m.clD.ONLINE, s = (0, a.jsx)(a.Fragment, {
    children: h.map(e => {
      let {
        duration: r,
        label: i
      } = e;
      return (0, a.jsx)(l.Drp, {
        id: "".concat(t, "-").concat(r),
        label: i(),
        action: () => (0, u.A)({
          nextStatus: t,
          prevStatus: n,
          durationMillis: r
        }),
        dontCloseOnAction: true
      }, null != r ? r : x)
    })
  });
  return (0, a.jsx)(l.Drp, {
    id: t,
    keepItemStyles: true,
    hasSubmenu: i,
    label: (0, c.MU)(t),
    subtext: r,
    iconLeft: () => (0, a.jsx)(l.nW6, {
      status: t,
      size: 10
    }),
    leadingAccessory: {
      type: "status",
      status: t
    },
    action: () => {
      (0, u.A)({
        nextStatus: t,
        prevStatus: n
      })
    },
    dontCloseOnAction: true,
    children: i ? s : true
  })
}

function f(e) {
  if (null == e || "0" === e) return;
  let {
    kind: t,
    dateString: n,
    timeString: a
  } = (0, d._)(e);
  return "today" === t ? p.intl.formatToPlainString(p.t.ZxxHIO, {
    timeString: a
  }) : p.intl.formatToPlainString(p.t["9OFjSe"], {
    dateString: n,
    timeString: a
  })
}

function b(e) {
  let t = s.CY.useSetting(),
    n = (0, r.kB)(),
    o = i.P.useExperiment({
      location: "UserProfileAccountPopout"
    }).allowQuietMode || n,
    c = s.Jr.useSetting(),
    d = e === m.clD.DND,
    u = n => {
      let a = f(t);
      if (e === n && null != a) return a;
      switch (n) {
        case m.clD.DND:
          return o ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
        case m.clD.INVISIBLE:
          return p.intl.string(p.t.zPc6Mc);
        default:
          return
      }
    },
    b = (0, a.jsx)(a.Fragment, {
      children: h.map(t => {
        let {
          duration: n,
          label: i
        } = t;
        return (0, a.jsx)(l.Drp, {
          id: "".concat(e, "-").concat(n),
          label: i(),
          action: () => {
            (0, r.ES)(true, n)
          },
          dontCloseOnAction: true
        }, null != n ? n : x)
      })
    }),
    v = g({
      status: m.clD.ONLINE,
      currentStatus: e
    }),
    j = g({
      status: m.clD.IDLE,
      currentStatus: e,
      description: u(m.clD.IDLE)
    }),
    _ = g({
      status: m.clD.DND,
      currentStatus: e,
      description: u(m.clD.DND)
    }),
    y = g({
      status: m.clD.INVISIBLE,
      currentStatus: e,
      description: u(m.clD.INVISIBLE)
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [v, (0, a.jsx)(l.bXX, {}, "menu-separator-statuses"), j, _, y, o || n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.bXX, {}, "menu-separator-statuses"), (0, a.jsx)(l.Drp, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        keepItemStyles: true,
        hasSubmenu: true,
        label: p.intl.string(p.t.gJRnwK),
        iconLeft: l.a_I,
        leadingAccessory: {
          type: "icon",
          icon: l.a_I
        },
        badge: {
          text: n ? p.intl.string(p.t.ApAu9f) : d ? p.intl.string(p.t.gH3Frd) : p.intl.string(p.t["64pl82"])
        },
        subtext: n && null != c && "0" !== c ? p.intl.format(p.t.BWD8fs, {
          endTime: new Date(Number(c)).toLocaleString(p.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : p.intl.string(p.t["Br1q+x"]),
        action: () => {
          (0, r.ES)(!n)
        },
        dontCloseOnAction: true,
        children: b
      }, "quiet-mode")]
    }) : null]
  })
}