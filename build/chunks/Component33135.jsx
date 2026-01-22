/** Chunk was on 71138 **/
/** chunk id: 33135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./321073.js"), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk233545 = require("./233545.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk361739 = require("./361739.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk544028 = require("./544028.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk383501 = require("./383501.js"),
  Chunk412780 = require("./412780.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk817006 = require("./817006.jsx"),
  Chunk121614 = require("./121614.jsx"),
  Chunk663272 = require("./663272.jsx"),
  Chunk820931 = require("./820931.jsx"),
  Chunk307414 = require("./307414.jsx"),
  Chunk244920 = require("./244920.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk518959 = require("./518959.js");

function I(e, t, n, a, i) {
  let s = [];
  if (null == t) return s;
  let {
    transport: c,
    rtp: {
      inbound: p,
      outbound: y
    },
    camera: h
  } = t;
  if (s.push({
      section: u.Fq.HEADER,
      label: P.intl.formatToPlainString(P.t.PK5fOC, {
        context: e
      })
    }), null != c && s.push({
      section: (0, f.Xi)(e, S.zWA.TRANSPORT, n),
      label: P.intl.string(P.t.wU9IN2),
      element: F.A,
      elementProps: {
        context: e,
        index: n
      }
    }), null == y || l().isEmpty(y) || s.push({
      section: (0, f.Xi)(e, S.zWA.OUTBOUND, n),
      label: P.intl.string(P.t["3u0gII"]),
      element: D.A,
      elementProps: {
        context: e,
        index: n
      }
    }), null != h && s.push({
      section: (0, f.Xi)(e, S.zWA.CAMERA, n),
      label: P.intl.string(P.t["2AGBWH"]),
      element: C.A,
      elementProps: {
        context: e,
        index: n,
        camera: h
      }
    }), null != p && !l().isEmpty(p)) {
    let t = [];
    Object.keys(p).forEach(l => {
      let s, c = v.default.getUser(l),
        u = g.Ay.getNick(i, l),
        y = (0, f.Xi)(e, l, n);
      null != p[l] && p[l].length > 0 && t.push({
        section: y,
        label: null != c ? (0, r.jsx)(m.A, {
          align: m.A.Align.CENTER,
          children: (0, r.jsx)(m.A.Child, {
            children: (0, r.jsxs)(m.A, {
              align: m.A.Align.CENTER,
              children: [(0, r.jsx)(o.euF, {
                size: o._3J.SIZE_24,
                src: c.getAvatarURL(i, 24),
                "aria-label": c.username,
                className: N.my
              }), (0, r.jsx)("span", {
                className: N.Xh,
                children: null != u ? u : b.Ay.getName(c)
              })]
            })
          })
        }) : (s = null != u ? u : l, (0, r.jsx)(m.A, {
          align: m.A.Align.CENTER,
          children: (0, r.jsx)(m.A.Child, {
            children: (0, r.jsx)(m.A, {
              align: m.A.Align.CENTER,
              children: (0, r.jsx)("span", {
                className: N.Xh,
                children: s
              })
            })
          })
        })),
        ariaLabel: null != c ? c.tag : l,
        onClick: () => {
          d.c4(y)
        },
        element: x.A,
        elementProps: {
          context: e,
          index: n,
          videoStreams: a
        }
      })
    }), t.length > 0 && (s.push({
      section: u.Fq.HEADER,
      label: P.intl.string(P.t.SJmZaq)
    }), s.push(...t))
  }
  return s
}

function k() {
  var e, t;
  let {
    defaultStats: n,
    streamStats: i
  } = (0, s.bG)([f.Ay], () => ({
    defaultStats: f.Ay.getAllStats(j.x.DEFAULT),
    streamStats: f.Ay.getAllStats(j.x.STREAM)
  }), [], s.My), l = (0, s.bG)([A.A, h.A], () => h.A.getChannel(A.A.getChannelId())), m = null == (e = n.concat(i).find(e => null != e.screenshare)) ? true : e.screenshare, g = null == (t = i.find(e => null != e.clips)) ? true : t.clips, v = (0, s.bG)([y.A], () => y.A.theme), b = (0, p.NC)(), C = (0, s.bG)([f.Ay], () => f.Ay.getSection()), x = function(e) {
    let {
      defaultStats: t,
      streamStats: n,
      videoStreams: a,
      screenshare: i,
      clips: l,
      channel: s,
      connectionState: d
    } = e, c = t.flatMap((e, t) => I(j.x.DEFAULT, e, t, a, null == s ? true : s.getGuildId())), m = n.flatMap((e, t) => I(j.x.STREAM, e, t, a, null == s ? true : s.getGuildId())), p = [], y = [], h = {
      section: u.Fq.DIVIDER
    };
    return null != i && (p.push(h), p.push({
      section: S.zWA.SCREENSHARE,
      label: P.intl.string(P.t["gWbr/U"]),
      element: R.A,
      elementProps: {
        screenshare: i
      }
    })), null != l && (y.push(h), y.push({
      section: S.zWA.CLIPS,
      label: P.intl.string(P.t.MKrFKE),
      element: E.A,
      elementProps: {
        clips: l
      }
    })), m.length > 0 && m.unshift(h), [...null != s ? [{
      section: u.Fq.CUSTOM,
      label: "Channel Name",
      element: () => (0, r.jsx)(o.Heading, {
        className: N.HA,
        variant: "heading-lg/semibold",
        children: s.name
      })
    }] : [], {
      section: u.Fq.CUSTOM,
      label: "Connection State",
      element: () => (0, r.jsx)(o.Heading, {
        className: N.HA,
        variant: "heading-md/normal",
        children: d === S.S7L.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...c, ...m, ...p, ...y]
  }({
    defaultStats: n,
    streamStats: i,
    videoStreams: (0, s.bG)([f.Ay], () => f.Ay.getVideoStreams()),
    screenshare: m,
    clips: g,
    channel: l,
    connectionState: (0, s.bG)([A.A], () => A.A.getState())
  });
  return a.useEffect(() => () => {
    d.VN()
  }, []), (0, r.jsx)(c.Ay, {
    theme: v,
    sidebarTheme: b,
    section: C,
    onSetSection: d.c4,
    sections: x
  })
}