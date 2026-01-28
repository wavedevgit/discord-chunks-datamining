/** Chunk was on 96811 **/
/** chunk id: 264540, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./747238.js"), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./839272.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk629357 = require("./629357.js"),
  Chunk280157 = require("./280157.js"),
  Chunk174768 = require("./174768.js"),
  Chunk146793 = require("./146793.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk205761 = require("./205761.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk279250 = require("./279250.js"),
  Chunk652215 = require("./652215.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk374166 = require("./374166.js");

function N(e) {
  let {
    result: t,
    onSelectChannel: r
  } = e, i = (0, a.bG)([_.A], () => _.A.getGuild(t.record.guild_id)), l = (0, a.yK)([S.Ay, y.default], () => S.Ay.getVoiceStatesForChannel(t.record).map(e => y.default.getUser(e.user.id)).filter(A.Vq));
  return (0, n.jsxs)(c.DUT, {
    className: I.p8,
    onClick: () => r(t.record.id),
    children: [(0, n.jsxs)("div", {
      className: I.nN,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null != i ? (0, x.Iv)(i, 32) : true,
        className: I.$f
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsxs)(c.Text, {
          className: I.HA,
          variant: "text-md/medium",
          color: "interactive-text-default",
          children: [(0, n.jsx)(c.HKD, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == i ? true : i.name
        })]
      })]
    }), (0, n.jsx)(o.A, {
      users: l,
      maxUsers: 3,
      hideOverflowCount: true
    })]
  })
}

function T(e) {
  let {
    onSelectChannel: t,
    className: r
  } = e, {
    search: l,
    query: o,
    results: x
  } = (0, h.A)({
    searchOptions: {
      frecencyBoosters: true
    }
  }), y = (0, a.yK)([b.A, g.Ay, m.A, _.A, v.A], () => {
    let e = [],
      t = b.A.getGuildId();
    if (null == t) return e;
    for (let r of g.Ay.getVocalChannelIds(t)) {
      let t = m.A.getChannel(r);
      null != t && (0, O.vz)(t, _.A, v.A) && e.push(t)
    }
    return e
  }), S = (0, a.yK)([f.A, m.A, j.A, _.A, v.A], () => {
    let e = [],
      t = new Set;
    for (let r of f.A.getChannelHistory()) {
      let n = m.A.getChannel(r);
      (null == n ? true : n.type) === w.rbe.GUILD_VOICE && (0, O.vz)(n, _.A, v.A) && (t.add(n.id), e.push(n))
    }
    for (let r of j.A.getFrequentlyWithoutFetchingLatest()) r instanceof p.YB && r.type === w.rbe.GUILD_VOICE && !t.has(r.id) && (0, O.vz)(r, _.A, v.A) && (t.add(r.id), e.push(r));
    return e
  }), T = i.useMemo(() => {
    let e = new Set(S.map(e => e.id)),
      t = new Set(y.map(e => e.id));
    return [...y.toSorted((t, r) => e.has(t.id) && !e.has(r.id) ? false : e.has(r.id) && !e.has(t.id) ? 1 : 0).map(e => (0, u.A)(e.id)).filter(A.Vq), ...S.filter(e => !t.has(e.id)).map(e => (0, u.A)(e.id)).filter(A.Vq)]
  }, [S, y]), P = "" !== o ? x : T;
  return (0, n.jsxs)("div", {
    className: s()(I.zr, r),
    children: [(0, n.jsx)("div", {
      className: I.ON,
      children: (0, n.jsx)(c.IWV, {
        placeholder: E.intl.string(E.t["3jvv+6"]),
        query: o,
        onChange: e => l({
          query: e,
          resultTypes: [d.rD.VOICE_CHANNEL]
        }),
        onClear: () => l({
          query: "",
          resultTypes: [d.rD.VOICE_CHANNEL]
        }),
        autoFocus: true
      })
    }), P.length > 0 ? (0, n.jsx)(c.B8B, {
      renderListHeader: function() {
        return (0, n.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.intl.string(C.default.FZ9Fl7)
        })
      },
      sections: [P.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: r
        } = e, i = P[r];
        return (0, n.jsx)(N, {
          result: i,
          onSelectChannel: t
        }, i.record.id)
      }
    }) : (0, n.jsx)(R, {})]
  })
}

function R() {
  return (0, n.jsxs)("div", {
    className: I.p$,
    children: [(0, n.jsx)(c.$p$, {
      className: I.Dw,
      size: "md",
      color: c.LU0.colors.ICON_MUTED
    }), (0, n.jsx)(c.Text, {
      className: I.jU,
      variant: "text-lg/medium",
      color: "text-strong",
      children: E.intl.string(C.default.sWGfr9)
    }), (0, n.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: E.intl.string(C.default["nBRtt/"])
    })]
  })
}