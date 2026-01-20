/** Chunk was on 80960 **/
/** chunk id: 153731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk101713 = require("./101713.js");

function I(e, t, n, a, i) {
  let o = [];
  if (null == t) return o;
  let {
    transport: d,
    rtp: {
      inbound: p,
      outbound: h
    },
    camera: f
  } = t;
  if (o.push({
      section: u.ID.HEADER,
      label: F.intl.formatToPlainString(F.t.PK5fOC, {
        context: e
      })
    }), null != d && o.push({
      section: (0, v.J$)(e, S._s_.TRANSPORT, n),
      label: F.intl.string(F.t.wU9IN2),
      element: Z.Z,
      elementProps: {
        context: e,
        index: n
      }
    }), null == h || l().isEmpty(h) || o.push({
      section: (0, v.J$)(e, S._s_.OUTBOUND, n),
      label: F.intl.string(F.t["3u0gII"]),
      element: x.Z,
      elementProps: {
        context: e,
        index: n
      }
    }), null != f && o.push({
      section: (0, v.J$)(e, S._s_.CAMERA, n),
      label: F.intl.string(F.t["2AGBWH"]),
      element: D.Z,
      elementProps: {
        context: e,
        index: n,
        camera: f
      }
    }), null != p && !l().isEmpty(p)) {
    let t = [];
    Object.keys(p).forEach(l => {
      let o, d = E.default.getUser(l),
        u = y.ZP.getNick(i, l),
        h = (0, v.J$)(e, l, n);
      null != p[l] && p[l].length > 0 && t.push({
        section: h,
        label: null != d ? (0, r.jsx)(m.Z, {
          align: m.Z.Align.CENTER,
          children: (0, r.jsx)(m.Z.Child, {
            children: (0, r.jsxs)(m.Z, {
              align: m.Z.Align.CENTER,
              children: [(0, r.jsx)(s.qEK, {
                size: s.EFr.SIZE_24,
                src: d.getAvatarURL(i, 24),
                "aria-label": d.username,
                className: N.avatar
              }), (0, r.jsx)("span", {
                className: N.username,
                children: null != u ? u : b.ZP.getName(d)
              })]
            })
          })
        }) : (o = null != u ? u : l, (0, r.jsx)(m.Z, {
          align: m.Z.Align.CENTER,
          children: (0, r.jsx)(m.Z.Child, {
            children: (0, r.jsx)(m.Z, {
              align: m.Z.Align.CENTER,
              children: (0, r.jsx)("span", {
                className: N.username,
                children: o
              })
            })
          })
        })),
        ariaLabel: null != d ? d.tag : l,
        onClick: () => {
          c.zc(h)
        },
        element: j.Z,
        elementProps: {
          context: e,
          index: n,
          videoStreams: a
        }
      })
    }), t.length > 0 && (o.push({
      section: u.ID.HEADER,
      label: F.intl.string(F.t.SJmZaq)
    }), o.push(...t))
  }
  return o
}

function k() {
  var e, t;
  let {
    defaultStats: n,
    streamStats: i
  } = (0, o.e7)([v.ZP], () => ({
    defaultStats: v.ZP.getAllStats(R.Yn.DEFAULT),
    streamStats: v.ZP.getAllStats(R.Yn.STREAM)
  }), [], o.pF), l = (0, o.e7)([g.Z, f.Z], () => f.Z.getChannel(g.Z.getChannelId())), m = null == (e = n.concat(i).find(e => null != e.screenshare)) ? true : e.screenshare, y = null == (t = i.find(e => null != e.clips)) ? true : t.clips, E = (0, o.e7)([h.Z], () => h.Z.theme), b = (0, p.Ll)(), D = (0, o.e7)([v.ZP], () => v.ZP.getSection()), j = function(e) {
    let {
      defaultStats: t,
      streamStats: n,
      videoStreams: a,
      screenshare: i,
      clips: l,
      channel: o,
      connectionState: c
    } = e, d = t.flatMap((e, t) => I(R.Yn.DEFAULT, e, t, a, null == o ? true : o.getGuildId())), m = n.flatMap((e, t) => I(R.Yn.STREAM, e, t, a, null == o ? true : o.getGuildId())), p = [], h = [], f = {
      section: u.ID.DIVIDER
    };
    return null != i && (p.push(f), p.push({
      section: S._s_.SCREENSHARE,
      label: F.intl.string(F.t["gWbr/U"]),
      element: C.Z,
      elementProps: {
        screenshare: i
      }
    })), null != l && (h.push(f), h.push({
      section: S._s_.CLIPS,
      label: F.intl.string(F.t.MKrFKE),
      element: P.Z,
      elementProps: {
        clips: l
      }
    })), m.length > 0 && m.unshift(f), [...null != o ? [{
      section: u.ID.CUSTOM,
      label: "Channel Name",
      element: () => (0, r.jsx)(s.Heading, {
        className: N.channelName,
        variant: "heading-lg/semibold",
        children: o.name
      })
    }] : [], {
      section: u.ID.CUSTOM,
      label: "Connection State",
      element: () => (0, r.jsx)(s.Heading, {
        className: N.channelName,
        variant: "heading-md/normal",
        children: c === S.hes.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...d, ...m, ...p, ...h]
  }({
    defaultStats: n,
    streamStats: i,
    videoStreams: (0, o.e7)([v.ZP], () => v.ZP.getVideoStreams()),
    screenshare: m,
    clips: y,
    channel: l,
    connectionState: (0, o.e7)([g.Z], () => g.Z.getState())
  });
  return a.useEffect(() => () => {
    c.xv()
  }, []), (0, r.jsx)(d.ZP, {
    theme: E,
    sidebarTheme: b,
    section: D,
    onSetSection: c.zc,
    sections: j
  })
}