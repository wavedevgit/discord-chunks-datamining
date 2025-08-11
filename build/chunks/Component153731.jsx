/** Chunk was on 80960 **/
/** chunk id: 153731, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304680 = require("./304680.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk493544 = require("./493544.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk19780 = require("./19780.js"),
  Chunk226961 = require("./226961.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk189648 = require("./189648.jsx"),
  Chunk775194 = require("./775194.jsx"),
  Chunk499848 = require("./499848.jsx"),
  Chunk724392 = require("./724392.jsx"),
  Chunk442580 = require("./442580.jsx"),
  Chunk770800 = require("./770800.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk442122 = require("./442122.js");
let I = (e, t, r) => (0, n.jsx)(m.Z, {
    align: m.Z.Align.CENTER,
    children: (0, n.jsx)(m.Z.Child, {
      children: (0, n.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        children: [(0, n.jsx)(s.qEK, {
          size: s.EFr.SIZE_24,
          src: e.getAvatarURL(r, 24),
          "aria-label": e.username,
          className: S.avatar
        }), (0, n.jsx)("span", {
          className: S.username,
          children: null != t ? t : b.ZP.getName(e)
        })]
      })
    })
  }),
  k = e => (0, n.jsx)(m.Z, {
    align: m.Z.Align.CENTER,
    children: (0, n.jsx)(m.Z.Child, {
      children: (0, n.jsx)(m.Z, {
        align: m.Z.Align.CENTER,
        children: (0, n.jsx)("span", {
          className: S.username,
          children: e
        })
      })
    })
  });

function B(e, t, r, n, a) {
  let i = [];
  if (null == t) return i;
  let {
    transport: o,
    rtp: {
      inbound: s,
      outbound: d
    },
    camera: m
  } = t;
  if (i.push({
      section: u.ID.HEADER,
      label: F.intl.formatToPlainString(F.t.PK5fOD, {
        context: e
      })
    }), null != o && i.push({
      section: (0, v.J$)(e, N._s_.TRANSPORT, r),
      label: F.intl.string(F.t.wU9INz),
      element: Z.Z,
      elementProps: {
        context: e,
        index: r
      }
    }), null == d || l().isEmpty(d) || i.push({
      section: (0, v.J$)(e, N._s_.OUTBOUND, r),
      label: F.intl.string(F.t["3u0gIC"]),
      element: j.Z,
      elementProps: {
        context: e,
        index: r
      }
    }), null != m && i.push({
      section: (0, v.J$)(e, N._s_.CAMERA, r),
      label: F.intl.string(F.t["2AGBWF"]),
      element: C.Z,
      elementProps: {
        context: e,
        index: r,
        camera: m
      }
    }), null != s && !l().isEmpty(s)) {
    let t = [];
    Object.keys(s).forEach(i => {
      let l = D.default.getUser(i),
        o = y.ZP.getNick(a, i),
        d = (0, v.J$)(e, i, r);
      null != s[i] && s[i].length > 0 && t.push({
        section: d,
        label: null != l ? I(l, o, a) : k(null != o ? o : i),
        ariaLabel: null != l ? l.tag : i,
        onClick: () => {
          c.zc(d)
        },
        element: P.Z,
        elementProps: {
          context: e,
          index: r,
          videoStreams: n
        }
      })
    }), t.length > 0 && (i.push({
      section: u.ID.HEADER,
      label: F.intl.string(F.t.SJmZam)
    }), i.push(...t))
  }
  return i
}

function A() {
  var e, t;
  let {
    defaultStats: r,
    streamStats: i
  } = (0, Chunk442837.e7)([Chunk226961.ZP], () => ({
    defaultStats: Chunk226961.ZP.getAllStats(Chunk65154.Yn.DEFAULT),
    streamStats: Chunk226961.ZP.getAllStats(Chunk65154.Yn.STREAM)
  }), [], Chunk442837.pF), l = (0, Chunk442837.e7)([Chunk19780.Z, Chunk592125.Z], () => Chunk592125.Z.getChannel(Chunk19780.Z.getChannelId())), m = null == (e = require.concat(Chunk392711).find(e => null != e.screenshare)) ? true : module.screenshare, y = null == (t = Chunk392711.find(e => null != e.clips)) ? true : exports.clips, D = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), b = (0, Chunk984802.Ll)(), C = (0, Chunk442837.e7)([Chunk226961.ZP], () => Chunk226961.ZP.getSection()), P = function(e) {
    let {
      defaultStats: t,
      streamStats: r,
      videoStreams: a,
      screenshare: i,
      clips: l,
      channel: o,
      connectionState: c
    } = e, d = t.flatMap((e, t) => B(x.Yn.DEFAULT, e, t, a, null == o ? true : o.getGuildId())), m = r.flatMap((e, t) => B(x.Yn.STREAM, e, t, a, null == o ? true : o.getGuildId())), p = [], h = [], f = {
      section: u.ID.DIVIDER
    };
    return null != i && (p.push(f), p.push({
      section: N._s_.SCREENSHARE,
      label: F.intl.string(F.t["gWbr/f"]),
      element: R.Z,
      elementProps: {
        screenshare: i
      }
    })), null != l && (h.push(f), h.push({
      section: N._s_.CLIPS,
      label: F.intl.string(F.t.MKrFKC),
      element: E.Z,
      elementProps: {
        clips: l
      }
    })), m.length > 0 && m.unshift(f), [...null != o ? [{
      section: u.ID.CUSTOM,
      label: "Channel Name",
      element: () => (0, n.jsx)(s.X6q, {
        className: S.channelName,
        variant: "heading-lg/semibold",
        children: o.name
      })
    }] : [], {
      section: u.ID.CUSTOM,
      label: "Connection State",
      element: () => (0, n.jsx)(s.X6q, {
        className: S.channelName,
        variant: "heading-md/normal",
        children: c === N.hes.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...d, ...m, ...p, ...h]
  }({
    defaultStats: require,
    streamStats: Chunk392711,
    videoStreams: (0, Chunk442837.e7)([Chunk226961.ZP], () => Chunk226961.ZP.getVideoStreams()),
    screenshare: Chunk600164,
    clips: Chunk271383,
    channel: l,
    connectionState: (0, Chunk442837.e7)([Chunk19780.Z], () => Chunk19780.Z.getState())
  });
  return Chunk73800.useEffect(() => () => {
    Chunk304680.xv()
  }, []), (0, Chunk255367.jsx)(Chunk503089.ZP, {
    theme: Chunk594174,
    sidebarTheme: Chunk51144,
    section: Chunk189648,
    onSetSection: Chunk304680.zc,
    sections: Chunk499848
  })
}